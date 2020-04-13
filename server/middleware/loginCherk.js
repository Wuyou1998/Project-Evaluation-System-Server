const { RspModel } = require('../model/resModel')

module.exports = async (ctx, next) => {
    if (ctx.session.userName) {
        await next()
        return
    }
    ctx.body = new RspModel(RspModel.USER_NOT_LOGIN,null)
}