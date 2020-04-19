const router = require('koa-router')()
const loginCheck = require('../middleware/loginCherk')
const { RspModel } = require('../model/resModel')
const { checkRegister, register, login, updateUserInfo,
    getUserDetail, searchUser } = require('../controller/userController')
const { UserRegisterModel, UserCardModel } = require('../model/userModel')

router.prefix('/api/user')

//注册
router.post('/register', async function (ctx, next) {
    const { userName, password, type, state, avatar,
        realName, contact, pushId } = ctx.request.body
    const createAtTime = Date.now()
    const check = await checkRegister(userName)
    if (check) {
        ctx.body = new RspModel(RspModel.USERNAME_HAS_BE_REGISTERED, null)
        return
    }
    const userModel = new UserRegisterModel(userName, password, type, state, avatar,
        realName, contact, createAtTime, pushId)
    const result = await register(userModel)
    if (result)
        ctx.body = new RspModel(RspModel.OPERATION_SUCCESS, null)
    else
        ctx.body = new RspModel(RspModel.USER_REGISTER_FAIL, null)

})

//登录
router.post('/login', async function (ctx, next) {
    const { userName, password } = ctx.request.body
    const result = await login(userName, password)
    if (result.userName) {
        ctx.session.userName = result.userName
        //登录成功是否返回用户数据
        const detail = await getUserDetail(result.userName)
        ctx.body = new RspModel(RspModel.OPERATION_SUCCESS, detail)
    } else {
        ctx.body = new RspModel(RspModel.USER_PASSWORD_NOT_CORRECT, null)
    }
})

//更新个人信息
router.post('/update', loginCheck, async function (ctx, next) {
    const { state, avatar, realName, contact } = ctx.request.body
    const updateModel = new UserCardModel(ctx.session.userName, state, avatar, realName, contact)
    const result = await updateUserInfo(updateModel)
    if (result) {
        // 更新成功是否返回用户数据
        const detail = await getUserDetail(ctx.session.userName)
        ctx.body = new RspModel(RspModel.OPERATION_SUCCESS, detail)
    } else {
        ctx.body = new RspModel(RspModel.USER_UPDATE_FAIL, null)
    }
})

//查看个人信息
router.get('/detail', async function (ctx, next) {
    const userName = ctx.query.userName || ctx.session.userName
    if (!userName)
        ctx.body = new RspModel(RspModel.OPERATION_FAIL, null)
    else {
        const result = await getUserDetail(userName)
        ctx.body = result
    }

})

//搜索
router.get('/search', async function (ctx, next) {
    const keyWord = ctx.query.keyWord
    const result = await searchUser(keyWord)
    ctx.body = result
})

//注销
router.get('/logout', async function (ctx, next) {
    ctx.session.userName = ''
    ctx.body = new RspModel(RspModel.OPERATION_SUCCESS, null)
})


module.exports = router