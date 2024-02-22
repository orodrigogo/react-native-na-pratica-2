import { SQLiteDatabase } from "expo-sqlite/next"

export async function databaseInit(database: SQLiteDatabase) {
  await database.execAsync(`
      PRAGMA journal_mode = 'wal';
      
      CREATE TABLE IF NOT EXISTS goals (
        id INTEGER PRIMARY KEY NOT NULL, 
        name TEXT NOT NULL, 
        total REAL NOT NULL
      );

      CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY NOT NULL, 
        goal_id INTEGER,
        amount REAL NOT NULL,
        created_at DEFAULT CURRENT_TIMESTAMP
      );
    `)
}
