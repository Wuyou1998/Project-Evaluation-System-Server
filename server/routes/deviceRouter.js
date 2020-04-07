const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('../model/resModel')


router.prefix('/api/device')

//检查当前设备pushId是否与server一致
router.post('/check',async function(ctx,next){

})

//将设备pushId写入数据库
router.post('/bind',async function(ctx,next){

})




module.exports = router