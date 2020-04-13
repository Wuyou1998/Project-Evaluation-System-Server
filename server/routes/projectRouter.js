const router = require('koa-router')()
const loginCheck = require('../middleware/loginCherk')
const { RspModel } = require('../model/resModel')
const { ProjectUpdateModel, ProjectCardModel } = require('../model/projectModel')
const { getProjectDetail, createNewProject, updateProject,
    checkProjectName, deleteProject,search } = require('../controller/projectController')



router.prefix('/api/project')

//project详情
router.get('/detail', async function (ctx, next) {
    const projectName = ctx.query.projectName
    if (!projectName) {
        ctx.body = new RspModel(RspModel.OPERATION_FAIL, null)
        return
    }
    const result = await getProjectDetail(projectName)
    if (!result.projectName) {
        ctx.body = new RspModel(RspModel.OPERATION_FAIL, null)
        return
    } else {
        const model = new ProjectCardModel(result.projectName, result.content, result.author, result.administraor,
            result.image, result.fileUrl, result.level, result.state)
        ctx.body = new RspModel(RspModel.OPERATION_SUCCESS, model)
    }
})

//创建project
router.post('/create', loginCheck, async function (ctx, next) {
    const { projectName, content, author, administraor, image, fileUrl, level, state }
        = ctx.request.body
    const check = await checkProjectName(projectName)
    if (check) {
        ctx.body = new RspModel(RspModel.PROJECT_HAS_EXIST, null)
        return
    }
    const model = new ProjectCardModel(projectName, content, author, administraor, image, fileUrl, level, state);
    const insertId = await createNewProject(model)
    if (insertId)
        ctx.body = new RspModel(RspModel.PROJECT_CREATE_SUCCESS, null)
    else
        ctx.body = new RspModel(RspModel.PROJECT_CREATE_FAIL, null)

})

//更新project
router.post('/update', loginCheck, async function (ctx, next) {
    const { projectName, content, administraor, image, fileUrl, level } = ctx.request.body
    const updateModel = new ProjectUpdateModel(projectName, content, administraor, image, fileUrl, level)
    const result = await updateProject(updateModel)
    if (result)
        ctx.body = new RspModel(RspModel.PROJECT_UPDATE_SUCCESS, null)
    else
        ctx.body = new RspModel(RspModel.PROJECT_UPDATE_FAIL, null)

})

//删除project
router.post('/delete', loginCheck, async function (ctx, next) {
    const { projectName } = ctx.request.body
    const result = await deleteProject(ctx.session.userName, projectName)
    if (result)
        ctx.body = new RspModel(RspModel.OPERATION_SUCCESS, null)
    else
        ctx.body = new RspModel(RspModel.OPERATION_FAIL, null)

})

//搜索project
router.get('/search', async function (ctx, next) {
    const projectName = ctx.query.projectName
    const result = await search(projectName)
    return result
})


module.exports = router