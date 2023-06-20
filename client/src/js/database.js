import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// This logic and method accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("Update the database");

  // Creates a connection to the database and version we want to use
  const textDb = await openDB("jate", 1);

  // Creates a new transaction and specify the database and data privileges
  const tx = textDb.transaction("jate", "readwrite");

  // Opens up the desired object store
  const store = tx.objectStore("jate");

  // The .put() method is used on the store and content passed in
  const request = store.put({ id: 1, value: content });

  // Confirmation of the request
  const result = await request;
  console.log("🚀 - data saved to the database", result);
};
// This logic and method gets all the content from the database
export const getDb = async () => {
  console.log("GET from the database");

  // Creates a connection to the database and version we want to use
  const textDb = await openDB("jate", 1);

  // Creates a new transaction and specify the database and data privileges
  const tx = textDb.transaction("jate", "readonly");

  // Opens up the desired object store
  const store = tx.objectStore("jate");

  // The .get() method is used on the store to grab stored data
  const request = store.get(1);

  // Confirmation of the request
  const result = await request;
  console.log("result.value", result);
  return result?.value;
};

initdb();
