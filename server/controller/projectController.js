const { exec } = require('../db/mysql')

const getProjectDetail = async (projectName) => {
    let sql = `select * from projects where projectName='${projectName}'`
    const rows = await exec(sql)
    return rows[0] || {}
}


const createNewProject = async (projectCardModel) => {
    let sql = `insert into projects(projectName, content, author, administraor, image, fileUrl, level, state) values(
        '${projectCardModel.projectName}','${projectCardModel.content}','${projectCardModel.author}',
        '${projectCardModel.administraor}','${projectCardModel.image}','${projectCardModel.fileUrl}',
        '${projectCardModel.level}','${projectCardModel.state}')`

    const result = await exec(sql)
    if (result.insertId) {
        await createRecordForAdmin(projectCardModel.projectName, projectCardModel.administraor)
        return true
    }
    return false
}

const updateProject = async (updateModel) => {
    let sql = `update projects set projectName='${updateModel.projectName}',content='${updateModel.content}',
    image='${updateModel.image}',fileUrl='${updateModel.fileUrl}',
    level='${updateModel.level}',state='${updateModel.state}' where id='${updateModel.id}'`
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

const search = async (projectName) => {
    let sql = `select * from projects where projectnName='${projectName}'`
    const rows = await exec(sql)
    return rows
}


const checkProjectName = async (projectName) => {
    let sql = `select projectName from projects where projectName='${projectName}'`
    const rows = await exec(sql)
    const row = rows[0] || {}
    return row.projectName ? true : false
}

const approvalProject = async (projectName, state) => {
    const check = await checkProjectName(projectName)
    if (!check)
        return false
    let sql = `update projects set state='${state}' where projectName='${projectName}'`
    const result = await exec(sql)
    return result.affectedRows > 0 ? true : false
}



module.exports = {
    getProjectDetail,
    createNewProject,
    updateProject,
    checkProjectName,
    deleteProject,
    search,
    approvalProject
}