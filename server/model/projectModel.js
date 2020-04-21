
//这个card写炸了，目前仅供创建使用、、、、、
class ProjectCardModel {
    constructor(projectName, content, author, image, fileUrl, level) {
        this.projectName = projectName
        this.content = content
        this.author = author
        if (typeof image == "undefined" || image == null || image == "") {
            this.image = null
        } else {
            this.image = image
        }

        if (typeof fileUrl == "undefined" || fileUrl == null || fileUrl == "") {
            this.fileUrl = null
        } else {
            this.fileUrl = fileUrl
        }

        if (typeof level == "undefined" || level == null || level == "") {
            this.level = 0
        } else {
            this.level = level
        }



        this.state = 0

        this.reason = null

    }
}

class ProjectUpdateModel {
    constructor(id, projectName, content, image, fileUrl, level, state, reason) {
        this.id = id
        this.projectName = projectName
        this.content = content

        if (typeof image == "undefined" || image == null || image == "") {
            this.image = null
        } else {
            this.image = image
        }

        if (typeof fileUrl == "undefined" || fileUrl == null || fileUrl == "") {
            this.fileUrl = null
        } else {
            this.fileUrl = fileUrl
        }

        if (typeof level == "undefined" || level == null || level == "") {
            this.level = 0
        } else {
            this.level = level
        }

        if (typeof reason == "undefined" || reason == null || reason == "") {
            this.reason = 0
        } else {
            this.reason = reason
        }

        this.state = state

    }
}

module.exports = {
    ProjectCardModel,
    ProjectUpdateModel
}