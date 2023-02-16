const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('connection/databank.sqlite3');
// const db = new sqlite3.Database('databank.sqlite3');

// create table
//
// db.run(`
//     create table task 
//     (
//         id integer primary key autoincrement,
//         omschrijving varchar(50),
//         afgerond boolean,
//         ratingBelang integer
//     )
// `)


// drop table
// db.run(`
//     drop table task
// `)

module.exports = db
