let db;

//this will create a new db request from budget db
const request = indexedDB.open('budget', 1);

// The onupgradeneeded property of the IDBOpenDBRequest interface is the event handler for the 
//upgradeneeded event, triggered when a database of a bigger version number than the existing stored 
//database is loaded. The event passed to the handler is an IDBVersionChangeEvent 
request.onupgradeneeded = function ({
    event
}) {
    const db = event.result;
    // this will create an object called pending

    db.createObjectStore("pending", {
        autoIncrement: true
    });
    // this will check if app is online before reading from db

}
request.onsuccess = function ({
    event
}) {
    db = event.result;
    // this will check to make sure Database is online
    if (navigator.onLine) {
        checkDatabase();
    }
}