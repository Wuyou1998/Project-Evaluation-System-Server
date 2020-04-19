const { exec } = require('../db/mysql')

const register = async (userRegisterModel) => {
    let sql = `INSERT INTO users(userName,password,type,state,avatar,realName,contact,createAtTime,pushId)
    VALUES ('${userRegisterModel.userName}', '${userRegisterModel.password}', '${userRegisterModel.type}', 
    '${userRegisterModel.state}', '${userRegisterModel.avatar}', '${userRegisterModel.realName}',
    '${userRegisterModel.contact}', '${userRegisterModel.createAtTime}', '${userRegisterModel.pushId}')`

    const result = await exec(sql)
    return result.insertId
}

const checkRegister = async (userName) => {
    let sql = `select userName from users where userName='${userName}'`
    const rows = await exec(sql)
    const row = rows[0] || {}
    return row.userName ? true : false
}

const login = async (userName, password) => {
    let sql = `select userName from users where userName = '${userName}' and password = '${password}'`
    const rows = await exec(sql)
    return rows[0] || {}
}

const updateUserInfo = async (updateModel) => {
    let sql = `update users set state='${updateModel.state}',avatar='${updateModel.avatar}',
    realName='${updateModel.realName}',contact='${updateModel.realName}' where userName='${updateModel.userName}'`
    const result = await exec(sql)
    return result.affectedRows > 0 ? true : false
}

const getUserDetail = async (userName) => {
    let sql = `select userName, state, avatar,type,realName, contact from users where userName='${userName}'`
    const rows = await exec(sql)
    const row = rows[0] || {}
    return row
}

const searchUser = async (keyWord) => {
    let sql = `select userName, state, avatar,realName, contact from users 
    where userName like'%${keyWord}%' or realName like '%${keyWord}%'`
    const rows = await exec(sql)
    return rows
}

module.exports = {
    checkRegister,
    register,
    login,
    updateUserInfo,
    getUserDetail,
    searchUser
}