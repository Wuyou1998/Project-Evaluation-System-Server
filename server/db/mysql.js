const mysql = require('mysql')
const { MYSQL_CONFIG } = require('../config/db_config')

//创建连接对象
const conn = mysql.createConnection(MYSQL_CONFIG)

//开始连接
conn.connect()

//统一执行Sql的函数
function exec(sql) {
    const promise = new Promise((resolve, reject) => {
        conn.query(sql, (error, result) => {
            if (error) {
                reject(error)
                return
            }
            resolve(result)
        })

    })
    return promise
}

module.exports = {
    exec
}