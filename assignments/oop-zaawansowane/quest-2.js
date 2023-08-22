/**
Stwórz klasę WaterVassel, która będzie zawierała takie pola jak: id, volume (objętość naczynia), water_volume (objętość jaką zajmuje woda w obiekcie takie klasy).
Następnie utwórz listę 5 obiektów WaterVassel o losowej pojemności z przedziału 50 - 200 i water_volume równym 0.

Zdefiniuj zmienną water_canister = 1000, która będzie odzwierciedlała całkowitą do rozlania ilość wody między naczyniami. Proces rozlewania wody ma następować po kolei dla każdego z naczyń, dopóki nie zostaną one w pełni napełnione lub dopóki water_canister wyniesie 0.
**/

class WaterVassel {
	id;
	volume;
	water_volume;
	constructor(id, volume, water_volume) {
    	this.id = id;
    	this.volume = volume;
    	this.water_volume = water_volume;
	}
}

const waterVasselObjects = [];

for (let i = 0; i < 5; i++) {

  let randomNumber = null;
  do {
    randomNumber = Math.round(Math.random() * 200);
  } while (randomNumber < 50)

	const vessel = new WaterVassel(i, randomNumber, 0);
  waterVasselObjects.push(vessel);
}

let water_canister = 1000;
