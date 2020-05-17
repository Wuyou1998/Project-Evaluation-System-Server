const router = require('koa-router')()
const loginCheck = require('../middleware/loginCherk')
const { RspModel } = require('../model/resModel')
const { addComment,getUserComment } = require('../controller/recordController')

router.prefix('/api/record')

router.post('/comment', loginCheck, async function (ctx, next) {
    const { projectName, content } = ctx.request.body
    const result = await addComment(ctx.session.userName, projectName, content)
    if (result)
        ctx.body = new RspModel(RspModel.OPERATION_SUCCESS, null)
    else
        ctx.body = new RspModel(RspModel.COMMENT_ADD_FAIL, null)
})

router.get('/mine', loginCheck, async function (ctx, next) {
    const result = await getUserComment(ctx.session.userName)
        ctx.body = new RspModel(RspModel.OPERATION_SUCCESS, result)
})



module.exports = router