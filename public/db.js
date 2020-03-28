let db;
const request = window.indexedDB.open("Budget", 1);

request.onupgradeneeded = function(event) {
    db = event.target.result;
    const pendingStore = db.createObjectStore("pending", { autoIncrement: true });
    pendingStore.createIndex("statusIndex", "status");
};


request.onerror = function(event) {
    // log error here
    console.log(event);
  };