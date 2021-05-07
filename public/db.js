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
request.onerror= function (error) {
    console.log("Show me if there is an error?");
};

function saveRecord(record) {
    //create transaction to pending dbTransaction
    const transaction = db.transaction(["pending"], "readwrite");

    // access pending object

    const store = transaction.objectstore("pending");

    // add a record to pending object

    store.add(record);
}

function checkDatabase(){
    //begin new transaction on pending dbTransaction
    const transaction = db.transaction(["pending"], "readwrite");

    // access pending object store.
    const store = transaction.objectstore("pending");

    // retrieve all records from pending ojbect store and se it to getAll
    const getAll = store.getAll();

}

getAll.onsuccess = function() {
    it (getAll.result.length > 0 {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
            accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    }) .then(response => response.JSON())
    .then(() => {
        // if successful, open a transaction on pending db
        const transaction = db.transaction(["pending"], "readwrite");

        // access pending object store
        const store =transaction.objectstore("pending");
        
        //clear all the items in the pending object store
        store.clear();

    });
}

// app will come back online
window.addEventListener("online", checkDatabase);