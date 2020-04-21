const router = require('koa-router')()
const loginCheck = require('../middleware/loginCherk')
const { RspModel } = require('../model/resModel')
const { ProjectUpdateModel, ProjectCardModel } = require('../model/projectModel')
const { getProjectDetail, createNewProject, updateProject,
    checkProjectName, deleteProject, searchByUserName,
    searchByProjectName, approvalProject } = require('../controller/projectController')
const { getCommentByProjectName } = require('../controller/recordController')



router.prefix('/api/project')

//project详情
router.get('/detail', async function (ctx, next) {
    const projectName = ctx.query.projectName
    if (!projectName) {
        ctx.body = new RspModel(RspModel.OPERATION_FAIL, null)
        return
    }
    const projectDetail = await getProjectDetail(projectName)
    const comments = await getCommentByProjectName(projectName)
    if (!projectDetail.projectName) {
        ctx.body = new RspModel(RspModel.OPERATION_FAIL, null)
        return
    } else {
        ctx.body = new RspModel(RspModel.OPERATION_SUCCESS, {
            "detail": projectDetail,
            "comments": comments
        })
    }
})

//创建project
router.post('/create', loginCheck, async function (ctx, next) {
    const { projectName, content, image, fileUrl, level }
        = ctx.request.body
    const check = await checkProjectName(projectName)
    if (check) {
        ctx.body = new RspModel(RspModel.PROJECT_HAS_EXIST, null)
        return
    }
    const model = new ProjectCardModel(projectName, content, ctx.session.userName, image, fileUrl, level);
    const insertId = await createNewProject(model)
    if (insertId)
        ctx.body = new RspModel(RspModel.OPERATION_SUCCESS, null)
    else
        ctx.body = new RspModel(RspModel.PROJECT_CREATE_FAIL, null)

})

//更新project
router.post('/update', loginCheck, async function (ctx, next) {
    const { id, projectName, content, image, fileUrl, level, state, reason } = ctx.request.body
    const updateModel = new ProjectUpdateModel(id, projectName, content, image, fileUrl, level, state, reason)
    const result = await updateProject(updateModel)
    if (result)
        ctx.body = new RspModel(RspModel.OPERATION_SUCCESS, null)
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
    const userName = ctx.query.userName
    let result = null
    if (projectName)
        result = await searchByProjectName(projectName)
    else if (userName)
        result = await searchByUserName(userName)
    if (result)
        ctx.body = new RspModel(RspModel.OPERATION_SUCCESS, result)
    else
        ctx.body = new RspModel(RspModel.OPERATION_FAIL, null)
})

//审批project
router.post('/approval', loginCheck, async function (ctx, next) {
    const { projectName, state, reason } = ctx.request.body
    const result = await approvalProject(projectName, state, reason, ctx.session.userName)
    if (result)
        ctx.body = new RspModel(RspModel.OPERATION_SUCCESS, null)
    else
        ctx.body = new RspModel(RspModel.OPERATION_FAIL, null)
})




module.exports = router