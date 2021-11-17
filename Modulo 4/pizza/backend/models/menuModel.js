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
    }//cierra catch
}//cierra insert

//delete trash button
async function deleteMenuById(id){
    var query = 'delete from menu where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

//mod pencil button
async function getMenuById(id){
    var query = 'select * from menu where id = ? ';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

//para modificar update de los datos
async function modificarMenuById(obj, id){
    try{
        var query = 'update menu set ? where id = ?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error){
        throw error;
    }
}

module.exports = { getMenu, insertMenu, deleteMenuById, getMenuById, modificarMenuById } 