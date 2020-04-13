const env = process.env.NODE_ENV //环境参数

//数据库初始化配置
let MYSQL_CONFIG
let REDIS_CONFIG

if (env === 'production') {
    MYSQL_CONFIG = {
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'reviewer_system'
    }
    REDIS_CONFIG = {
        host: '127.0.0.1',
        port: 6379
    }
} else {
    MYSQL_CONFIG = {
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'reviewer_system'
    }
    REDIS_CONFIG = {
        host: '127.0.0.1',
        port: 6379
    }
}

module.exports = {
    MYSQL_CONFIG,
    REDIS_CONFIG
}