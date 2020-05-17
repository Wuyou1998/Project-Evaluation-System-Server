const { exec } = require('../db/mysql')

const checkPushId = async (userName, pushId) => {
    const pushIdFromDb = await getPushId(userName)
    return pushId == pushIdFromDb.pushId
}

const bindPushId = async (userName, pushId) => {
    const result = await setPushId(userName, pushId)    
    return result > 0 ? true : false
}

const getPushId = async (userName) => {

    let sql = `select pushId from users where userName='${userName}'`
    const rows = await exec(sql)
    return rows[0] || {}

}

const setPushId = async (userName, pushId) => {
    
    let unBindSql = `update users set pushId='null' where pushId='${pushId}'`
    await exec(unBindSql)
    let sql = `update users set pushId='${pushId}' where userName='${userName}'`
    const result = await exec(sql)
    return result.affectedRows || 0

}

module.exports = {
    checkPushId,
    bindPushId
}