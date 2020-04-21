const { exec } = require('../db/mysql')

const getMainPagData = async () => {
    const sql1 = `select * from projects where state=0`
    const sql2 = `select * from projects where state=1`
    const sql3 = `select * from projects where state=2`

    let rows1 = await exec(sql1)
    let rows2 = await exec(sql2)
    let rows3 = await exec(sql3)

    rows1 = JSON.parse(JSON.stringify(rows1))
    rows2 = JSON.parse(JSON.stringify(rows2))
    rows3 = JSON.parse(JSON.stringify(rows3))
    // console.log(rows1);
    // console.log(rows2);
    // console.log(rows3);


    for (i = 0; i < rows1.length || 0; i++) {
        let row = rows1[i]
        if (row.id) {
            const avatars = await exec(`select avatar from users where userName='${row.author}'`)
            if (avatars[0])
                row.avatar = avatars[0].avatar
        }
    }

    for (j = 0; j < rows2.length || 0; j++) {
        let row = rows2[j]
        if (row.id) {
            const avatars = await exec(`select avatar from users where userName='${row.author}'`)
            if (avatars[0])
                row.avatar = avatars[0].avatar
        }
    }
    for (k = 0; k < rows3.length || 0; k++) {
        let row = rows3[k]
        if (row.id) {
            const avatars = await exec(`select avatar from users where userName='${row.author}'`)
            if (avatars[0])
                row.avatar = avatars[0].avatar
        }
    }
    return {
        "penddingProjects": rows1,
        "passedProjects": rows2,
        "rejectedProjects": rows3
    }
}

module.exports = {
    getMainPagData
}