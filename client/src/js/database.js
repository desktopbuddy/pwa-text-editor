import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// POST to the database
export const putDb = async (content) => {
  console.log('Post to the database');
  // Database and version
  const jateDb = await openDB('jate', 1);
  // New transaction specifying database and data priveleges
  const tx = jateDb.transaction('todos', 'readwrite');
  // Open desired object store
  const store = tx.objectStore('todos');
  // .add() passes in content
  const request = store.put({ id: 1, value: content });
  
  const result = await request;
  console.log('result.value ', result);
  return result;
};

// Get all the content from the database
export const getDb = async () => {
  console.log('Get all from the database');
  // Database and version
  const jateDB = await openDB("jate", 1);
  // New transaction specifying db and privileges
  const tx = jateDB.transaction("jate", "readonly");
  // Open desired object store
  const store = tx.objectStore("jate");
  // Get all request
  const request = store.getAll();
  
  const result = await request;
  console.log('result.value', result);
  return result;
};


initdb();
