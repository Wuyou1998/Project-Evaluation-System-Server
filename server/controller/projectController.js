const { exec } = require('../db/mysql')

const getProjectDetail = async (projectName) => {
    let sql = `select * from projects where projectName='${projectName}'`
    let rows = await exec(sql)
    rows = JSON.parse(JSON.stringify(rows))
    let row = rows[0] || {}
    if (row.id) {
        const avatars = await exec(`select avatar,state from users where userName='${row.author}'`)
        if (avatars[0]) {
            row.avatar = avatars[0].avatar
            row.userState = avatars[0].state
        }
    }
    return row
}


const createNewProject = async (projectCardModel) => {
    let sql = `insert into projects(projectName, content, author,image, fileUrl, level, state,reason) values(
        '${projectCardModel.projectName}','${projectCardModel.content}','${projectCardModel.author}',
        '${projectCardModel.image}','${projectCardModel.fileUrl}',
        '${projectCardModel.level}','${projectCardModel.state}','${projectCardModel.reason}')`

    const result = await exec(sql)
    if (result.insertId) {
        return true
    }
    return false
}

const updateProject = async (updateModel) => {
    let sql = `update projects set projectName='${updateModel.projectName}',content='${updateModel.content}',
    image='${updateModel.image}',fileUrl='${updateModel.fileUrl}',
    level='${updateModel.level}',state='${updateModel.state}',reason='${updateModel.reason}' where id='${updateModel.id}'`
    const result = await exec(sql)
    return result.affectedRows > 0 ? true : false
}

const deleteProject = async (userName, projectName) => {
    let checkUserSql = `select author,administraor from projects where projectName='${projectName}'`
    const checkUserSqlResult = await exec(checkUserSql)
    let checkResult = checkUserSqlResult[0] || {}
    checkResult = JSON.parse(JSON.stringify(checkResult))
    console.log(checkResult);
    if (checkResult.author == userName || checkResult.administraor == userName) {
        let sql = `delete from projects where projectName='${projectName}'`
        const result = await exec(sql)
        if (result.affectedRows > 0)
            return true
    }
    return false
}

const createRecordForAdmin = async (projectName, adminName) => {
    let sql = `insert into records(projectName,person) values('${projectName}','${adminName}')`
    const result = await exec(sql)
    return result.insertId
}

const searchByProjectName = async (projectName) => {
    let sql = `select * from projects where projectName='${projectName}'`
    const rows = await exec(sql)
    return rows
}

const searchByUserName = async (userName) => {
    let sql = `select * from projects where author='${userName}'`
    const rows = await exec(sql)
    return rows
}


const checkProjectName = async (projectName) => {
    let sql = `select projectName from projects where projectName='${projectName}'`
    const rows = await exec(sql)
    const row = rows[0] || {}
    return row.projectName ? true : false
}

const approvalProject = async (projectName, state, reason, userName) => {
    const check = await checkProjectName(projectName)
    if (!check)
        return false
    if (reason == null || reason == 'undefined')
        reason == ''
    let sql = `update projects set state='${state}',reason ='${reason}',administraor='${userName}' where projectName='${projectName}'`
    const result = await exec(sql)
    return result.affectedRows > 0 ? true : false
}




module.exports = {
    getProjectDetail,
    createNewProject,
    updateProject,
    checkProjectName,
    deleteProject,
    searchByUserName,
    searchByProjectName,
    approvalProject
}