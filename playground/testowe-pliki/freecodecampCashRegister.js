function checkCashRegister(price, cash, cid) {

    const change = cash - price;

    const cidMax = {};

    cid.forEach(item => {

        let [denomination, cash] = item;

        switch (denomination) {

            case "PENNY":
                return cidMax[denomination] = Math.round(cash / 0.01);
            case "NICKEL":
                return cidMax[denomination] = Math.round(cash / 0.05);
            case "DIME":
                return cidMax[denomination] = Math.round(cash / 0.10);
            case "QUARTER":
                return cidMax[denomination] = Math.round(cash / 0.25);
            case "ONE":
                return cidMax[denomination] = Math.floor(cash / 1);
            case "FIVE":
                return cidMax[denomination] = Math.round(cash / 5);
            case "TEN":
                return cidMax[denomination] = Math.round(cash / 10);
            case "TWENTY":
                return cidMax[denomination] = Math.round(cash / 20);
            case "ONE HUNDRED":
                return cidMax[denomination] = Math.round(cash / 100);
        }
    })


    const changeMax = {
        "PENNY": Math.round(change / 0.01),
        "NICKEL": Math.round(change / 0.05),
        "DIME": Math.round(change / 0.1),
        "QUARTER": Math.round(change / 0.25),
        "ONE": Math.floor(change),
        "FIVE": Math.floor(change / 5),
        "TEN": Math.floor(change / 10),
        "TWENTY": Math.floor(change / 20),
        "ONE HUNDRED": Math.floor(change / 100),
    }

    const maxAllDenominations = {
        PENNY: 0,
        NICKEL: 0,
        DIME: 0,
        QUARTER: 0,
        ONE: 0,
        FIVE: 0,
        TEN: 0,
        TWENTY: 0,
        'ONE HUNDRED': 0
    };


    Object.keys(maxAllDenominations).forEach(denomination => {

        if (!Object.keys(cidMax).includes(denomination)) {
            return maxAllDenominations[denomination] = changeMax[denomination];
        }

        if (cidMax[denomination] >= changeMax[denomination]) {
            return maxAllDenominations[denomination] = changeMax[denomination];
        }

        return maxAllDenominations[denomination] = cidMax[denomination];

    });

    console.log(maxAllDenominations);

    const cashRegisterDrawerResult = {
        status: null,
        change: []
    }

    let changeNominations = [

    ];

    let sum;

    for (let i100 = maxAllDenominations['ONE HUNDRED']; i100 >= 0; i100--) {

        sum = i100 * 100;
        //console.log(sum, sum.toFixed(2));
        if (sum.toFixed(2) > change) {
            continue;
        }

        for (let i20 = maxAllDenominations['TWENTY']; i20 >= 0; i20--) {

            sum = i100 * 100 + i20 * 20;
            //console.log("i20", sum, sum.toFixed(2));
            if (sum.toFixed(2) > change) {

                continue;
            }

            for (let i10 = maxAllDenominations['TEN']; i10 >= 0; i10--) {

                sum = i100 * 100 + i20 * 20 + i10 * 10;
                //console.log("i10", sum, sum.toFixed(2));
                if (sum.toFixed(2) > change) {
                    continue;
                }

                for (let i5 = maxAllDenominations['FIVE']; i5 >= 0; i5--) {

                    sum = i100 * 100 + i20 * 20 + i10 * 10 + i5 * 5;
                    //console.log("i5", sum, sum.toFixed(2));
                    if (sum.toFixed(2) > change) {
                        continue;
                    }

                    for (let i1 = maxAllDenominations['ONE']; i1 >= 0; i1--) {

                        sum = i100 * 100 + i20 * 20 + i10 * 10 + i5 * 5 + i1;
                        //console.log("i1", sum, sum.toFixed(2));
                        if (sum.toFixed(2) > change) {
                            continue;
                        }

                        for (let i025 = maxAllDenominations['QUARTER']; i025 >= 0; i025--) {

                            sum = i100 * 100 + i20 * 20 + i10 * 10 + i5 * 5 + i1 + i025 * 0.25;
                            //console.log("i025", sum, sum.toFixed(2));
                            if (sum.toFixed(2) > change) {
                                continue;
                            }

                            for (let i010 = maxAllDenominations['DIME']; i010 >= 0; i010--) {

                                sum = i100 * 100 + i20 * 20 + i10 * 10 + i5 * 5 + i1 + i025 * 0.25 + i010 * 0.10;
                                //console.log("i010", sum, sum.toFixed(2));
                                if (sum.toFixed(2) > change) {
                                    continue;
                                }

                                for (let i005 = maxAllDenominations['NICKEL']; i005 >= 0; i005--) {

                                    sum = i100 * 100 + i20 * 20 + i10 * 10 + i5 * 5 + i1 + i025 * 0.25 + i010 * 0.10 + i005 * 0.05;
                                    //console.log("i005", sum, sum.toFixed(2));
                                    if (sum.toFixed(2) > change) {
                                        continue;
                                    }

                                    for (let i001 = 0; i001 <= maxAllDenominations['PENNY']; i001++) {

                                        const denominationsSumUp =
                                            i100 * 100 +
                                            i20 * 20 +
                                            i10 * 10 +
                                            i5 * 5 +
                                            i1 +
                                            i025 * 0.25 +
                                            i010 * 0.10 +
                                            i005 * 0.05 +
                                            i001 * 0.01;

                                        let fixedDenominationSumUp;

                                        if (denominationsSumUp > change - 0.001 &&
                                            denominationsSumUp < change + 0.001) {

                                            fixedDenominationSumUp = denominationsSumUp.toFixed(2);
                                        }

                                        if (fixedDenominationSumUp - change === 0) {

                                            //console.log(i100+i20+i10+i5+i1+i025+i010+i005+i001);

                                            changeNominations = [
                                                ['PENNY', i001 * 0.01],
                                                ['NICKEL', i005 * 0.05],
                                                ['DIME', i010 * 0.1],
                                                ['QUARTER', i025 * 0.25],
                                                ['ONE', i1],
                                                ['FIVE', i5 * 5],
                                                ['TEN', i10 * 10],
                                                ['TWENTY', i20 * 20],
                                                ['ONE HUNDRED', i100 * 100],
                                            ];

                                            cashRegisterDrawerResult.status = "OPEN";
                                            cashRegisterDrawerResult.change = [

                                            ]

                                            if (JSON.stringify(changeNominations) === JSON.stringify(cid)) {
                                                return {
                                                    status: "CLOSED",
                                                    change: cid
                                                }
                                            }

                                            return {
                                                status: "OPEN",
                                                change: changeNominations.filter(nomination => {
                                                    return nomination[1] !== 0;
                                                }).reverse()
                                            }


                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return {
        status: "INSUFFICIENT_FUNDS",
        change: []
    }
}


//console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));