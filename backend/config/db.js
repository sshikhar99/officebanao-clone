// backend/db.js
import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Database file path (in project root)
const dbPath = path.join(__dirname, "database.sqlite");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("❌ Error connecting to SQLite:", err.message);
  } else {
    console.log("✅ Connected to SQLite at", dbPath);

    // ✅ Ensure partners table exists
    db.run(`
      CREATE TABLE IF NOT EXISTS partners (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        partnerType TEXT,
        data TEXT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `, (err) => {
      if (err) console.error("❌ Error creating table:", err.message);
      else console.log("✅ Partners table is ready");
    });
  }
});

export default db;
