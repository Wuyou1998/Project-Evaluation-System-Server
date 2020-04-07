const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('../model/resModel')


router.prefix('/api/page')

//检查当前设备pushId是否与server一致
router.get('/Main', async function (ctx, next) {

})

module.exports = router