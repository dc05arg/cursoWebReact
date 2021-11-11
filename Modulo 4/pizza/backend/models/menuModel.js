var pool = require('./db');

async function getMenu(){
    var query = 'select * from menu';
    var rows = await pool.query(query);
    return rows;
}

async function insertMenu(obj){
    try{
        var query = "insert into menu set ?";
        var rows = await pool.query(query, [obj])
        return rows;
    }catch (error){
        console.log(error);
        throw error;
    }
}

module.exports = { getMenu, insertMenu } 