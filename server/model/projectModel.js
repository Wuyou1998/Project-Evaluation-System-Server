
class ProjectCardModel {
    constructor(projectName, content, author, administraor, image, fileUrl, level, state) {
        this.projectName = projectName
        this.content = content
        this.author = author
        this.administraor = administraor

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


        if (typeof state == "undefined" || state == null || state == "") {
            this.state = 0
        } else {
            this.state = state
        }
    }
}

class ProjectUpdateModel {
    constructor(id, projectName, content, image, fileUrl, level) {
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

        this.state = 0

    }
}

module.exports = {
    ProjectCardModel,
    ProjectUpdateModel
}