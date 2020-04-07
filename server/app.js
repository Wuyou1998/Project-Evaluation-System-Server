const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')
const redisStore = require('koa-redis')
const {REDIS_CONFIG} = require('./config/db_config')

const deviceRouter = require('./routes/deviceRouter')
const projectRouter = require('./routes/projectRouter')
const userRouter = require('./routes/userRouter')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

//session 配置
app.keys = ['wuyou']
app.use(session({
  cookie: {
    path:'/',
    httpOnly:true,
    maxAge:7*24 * 60 * 60 * 1000
  },
  rolling:true,
  store:redisStore({
    all:`${REDIS_CONFIG.host}:${REDIS_CONFIG.port}`
  })
}
))

// routes
app.use(deviceRouter.routes(), deviceRouter.allowedMethods())
app.use(projectRouter.routes(), projectRouter.allowedMethods())
app.use(userRouter.routes(), userRouter.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
