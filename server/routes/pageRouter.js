const router = require('koa-router')()
const { RspModel } = require('../model/resModel')
const { getMainPagData } = require('../controller/pageController')


router.prefix('/api/page')

//检查当前设备pushId是否与server一致
router.get('/main', async function (ctx, next) {
    const result = await getMainPagData()
    ctx.body = new RspModel(RspModel.OPERATION_SUCCESS, result)
})

module.exports = router