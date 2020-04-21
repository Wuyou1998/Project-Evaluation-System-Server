const { exec } = require('../db/mysql')

const getCommentByProjectName = async (projectName) => {
    let sql = `select * from records where projectName='${projectName}'`
    let rows = await exec(sql)
    rows = JSON.parse(JSON.stringify(rows));
    for (i = 0; i < rows.length || 0; i++) {
        let row = rows[0];
        if (row.person) {
            const avatars = await exec(`select avatar from users where userName='${row.person}'`)
            if (avatars[0])
                row.avatar = avatars[0].avatar
        }

    }
    return rows
}

module.exports = {
    getCommentByProjectName
}