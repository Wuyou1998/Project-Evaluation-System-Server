const router = require('koa-router')()
const loginCheck = require('../middleware/loginCherk')
const { SuccessModel, ErrorModel } = require('../model/resModel')


router.prefix('/api/user')

//当前用户名是否已被注册 应当放在ctr里
// router.post('/check',async function(ctx,next){

// })

//注册
router.post('/register', async function (ctx, next) {

})

//登录
router.post('/login', async function (ctx, next) {

})

//更新个人信息
router.post('/update', loginCheck, async function (ctx, next) {

})

//查看个人信息
router.get('/detail', async function (ctx, next) {

})

//搜索
router.get('/search', async function (ctx, next) {

})

//注销
router.post('/login', async function (ctx, next) {

})


module.exports = router