const db = require("../connection")

const getAllTasks = (req, res) => {
    db.all("select * from task", [], (err, rows) => {
        if (err) return res.json({message: err.message})
        
        rows.forEach(row => {
            console.log(row)
            
        })
        res.json({bericht: "ok", data: rows})
    })
}

const addTask = (req, res) => {
    const sql = `
        insert into task (omschrijving, afgerond,ratingBelang)
        values (?,?,?)
    `
    db.run(sql, [req.body.omschrijving,1, req.body.ratingBelang],
    (err) => {
        if (err) res.status(404).json({"message": err})
        else res.json({"message":"gelukt"})
    })
}

module.exports = {
    getAllTasks,
    addTask
}