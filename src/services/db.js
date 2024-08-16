import { openDB } from 'idb';

const DB_NAME = 'appliedCompaniesDB';
const DB_VERSION = 1;
const STORE_NAME = 'appliedCompanies';

export const initDB = async () => {
  const db = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      db.createObjectStore(STORE_NAME, { keyPath: 'org_name' });
    },
  });
  return db;
};

export const addAppliedCompany = async (company) => {
  const db = await initDB();
  await db.put(STORE_NAME, company);
};

export const getAppliedCompanies = async () => {
  const db = await initDB();
  return db.getAll(STORE_NAME);
};

export const deleteAppliedCompany = async (orgName) => {
  const db = await initDB();
  await db.delete(STORE_NAME, orgName);
};
