const router = require('koa-router')()
const { checkPushId, bindPushId } = require('../controller/diviceController')
const loginCheck = require('../middleware/loginCherk')
const { RspModel } = require('../model/resModel')


router.prefix('/api/device')

//检查当前设备pushId是否与server一致
router.post('/check', loginCheck, async function (ctx, next) {

    const { pushId } = ctx.request.body
    const result = await checkPushId(ctx.session.userName, pushId)
    ctx.body = new RspModel(RspModel.OPERATION_SUCCESS, result)
})

//将设备pushId写入数据库
router.post('/bind', loginCheck, async function (ctx, next) {

    const { pushId } = ctx.request.body
    const result = await bindPushId(ctx.session.userName, pushId)
    ctx.body = new RspModel(RspModel.BIND_PUSHID_SUCCESS, result)
})




module.exports = router