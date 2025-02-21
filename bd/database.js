import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Fonction pour initialiser la connexion
export async function connectDB() {
  return open({
    filename: "./db/database.db",
    driver: sqlite3.Database,
  });
}