class UserRegisterModel {

    constructor(userName, password, type, state, avatar,
        realName, contact, createAtTime, pushId) {
        this.userName = userName
        this.password = password
        this.type = type
        if (typeof state == "undefined" || state == null || state == "") {
            this.state = '这个人很懒，什么也没写'
        } else {
            this.state = state
        }
        this.avatar = avatar
        if (typeof realName == "undefined" || realName == null || realName == "") {
            this.realName = '未设置'
        } else {
            this.realName = realName
        }

        if (typeof contact == "undefined" || contact == null || contact == "") {
            this.contact = '未设置'
        } else {
            this.contact = contact
        }


        this.createAtTime = createAtTime
        this.pushId = pushId

    }

}


class UserCardModel {

    constructor(userName, state, avatar,
        realName, contact) {

        this.userName = userName
        this.state = state
        this.avatar =  avatar
        this.realName = realName
        this.contact = contact

    }

}

module.exports = {
    UserRegisterModel,
    UserCardModel
}