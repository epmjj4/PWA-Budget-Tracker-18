let db;

//this will create a new db request from budget db
const request = indexedDB.open('budget', 1);

reuqest.onupgradeneeded = function (event) {
    // this will create an object called pending
    const db = event.target.result:
    // this will check if app is online before reading from db
    if (navigator.online) {
        checkDatabase();
    }
}