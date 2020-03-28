let db;
const request = window.indexedDB.open("Budget", 1);

request.onupgradeneeded = event => {
    db = event.target.result;
    const pendingStore = db.createObjectStore("pending", { autoIncrement: true });
    pendingStore.createIndex("statusIndex", "status");
};

request.onsuccess = event => {
    db = event.target.result;
  
    if (navigator.onLine) {
      checkDatabase();
    }
};

request.onerror = event => {console.log(event)};

function saveRecord(record) {
    db = request.result;
    const transaction = db.transaction(["pending"], "readwrite");
    const transpending = transaction.objectStore("pending");
  
    transpending.add(record);
}