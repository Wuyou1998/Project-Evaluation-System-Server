const { exec } = require('../db/mysql')

const getProjectDetail = async (projectName) => {
    let sql = `select * from projects where projectName='${projectName}'`
    const rows = await exec(sql)
    return row[0] || {}
}


const createNewProject = async (projectCardModel) => {
    let sql = `insert into projects(projectName, content, author, administraor, image, fileUrl, level, state) values(
        '${projectCardModel.projectName}','${projectCardModel.content}','${projectCardModel.author}','${projectCardModel.administraor}',
        '${projectCardModel.image}','${projectCardModel.fileUrl}','${projectCardModel.level}','${projectCardModel.state}')`

    const result = await exec(sql)
    return result.insertId
}

const updateProject = async (updateModel) => {
    let sql = `update users set projectName='${updateModel.projectName},content='${updateModel.content},
    administraor='${updateModel.administraor},image='${updateModel.image},fileUrl='${updateModel.fileUrl},
    level='${updateModel.level},state='${updateModel.state}' where projectName='${updateModel.projectName}'`
    const result = await exec(sql)
    return result.affectedRows > 0 ? true : false
}

const deleteProject = async (userName, projectName) => {
    let checkUserSql = `select author,adminstrator from projects where projectName='${projectName}'`
    const checkUserSqlResult = await exec(checkUserSql)
    if (checkUserSqlResult.author == userName || checkUserSqlResult.administraor == userName) {
        let sql = `delete from projrcts where projectName='${projectName}`
        const result = await exec(sql)
        if (resultaffectedRows > 0)
            return true
    }
    return false
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



module.exports = {
    getProjectDetail,
    createNewProject,
    updateProject,
    checkProjectName,
    deleteProject,
    search
}