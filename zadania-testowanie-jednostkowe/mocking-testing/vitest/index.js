async function getUsers() {
    const fetchedUsersData = await fetch("https://jsonplaceholder.typicode.com/users/");
    const usersDataJson = fetchedUsersData.json();

    console.log(usersDataJson);
}