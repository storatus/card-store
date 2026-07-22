// src/lib/db.ts
import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.resolve(process.cwd(), 'cards.db');
const db = new Database(dbPath);

// Initialize a simple cards table
db.exec(`
  CREATE TABLE IF NOT EXISTS cards (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    game TEXT NOT NULL,
    price REAL NOT NULL,
    stock INTEGER NOT NULL,
    imageUrl TEXT
  )
`);

// Seed initial data if table is empty
const count = db.prepare('SELECT COUNT(*) as count FROM cards').get() as { count: number };
if (count.count === 0) {
    const insert = db.prepare('INSERT INTO cards (name, game, price, stock, imageUrl) VALUES (?, ?, ?, ?, ?)');
    insert.run('Charizard V', 'Pokémon', 45.00, 3, 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f');
    insert.run('Black Lotus', 'Magic: The Gathering', 5000.00, 1, 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa');
    insert.run('Blue-Eyes White Dragon', 'Yu-Gi-Oh!', 15.00, 10, 'https://images.unsplash.com/photo-1534447677768-be436bb09401');
}

export default db;