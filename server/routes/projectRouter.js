const router = require('koa-router')()
const loginCheck = require('../middleware/loginCherk')
const { RspModel } = require('../model/resModel')


router.prefix('/api/project')

//project详情
router.get('/detail', async function (ctx, next) {

})

//创建project
router.post('/create', loginCheck, async function (ctx, next) {

})

//更新projrct
router.post('/update', loginCheck, async function (ctx, next) {

})

//删除project
router.post('/delete', loginCheck, async function (ctx, next) {

})

//搜索project
router.get('/search', async function (ctx, next) {

})

//审批
router.post('/retify', async function (ctx, next) {

})

module.exports = router