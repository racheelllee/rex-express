let db = require('../db')
let autoincrement = db.sort((a,b)=>b.id -a.id)[0]?.id || 0;

const find = (req, res)=>{
    res.json(db)
}

const create = (req, res)=>{
    db.push({id:++autoincrement, score:req.body.score, comment: req.body.comment})
    res.json(autoincrement)
}

module.exports={
    find,
    create
}