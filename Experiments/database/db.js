var mysql = require('mysql');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database : 'application1'
});
module.exports = pool;
