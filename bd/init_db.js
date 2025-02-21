import { connectDB } from "./database.js";

(async () => {
  const db = await connectDB();

  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    );
  `);

  await db.run("INSERT INTO users (name) VALUES (?), (?)", [
    "Alice",
    "Bob",
  ]);

  console.log("✅ Database initialized!");
})();
