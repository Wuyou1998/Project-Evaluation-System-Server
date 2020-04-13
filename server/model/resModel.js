class RspModel {
    /**
     * 基本的操作成功与失败 1XXX
     * 设备id相关 2XXX
     * 用户相关 3XXX
     * 项目相关 4XXX
     */
    static OPERATION_SUCCESS = 1000
    static OPERATION_FAIL = 1001

    static BIND_PUSHID_SUCCESS = 2001

    static USER_NOT_LOGIN = 3001
    static USERNAME_HAS_BE_REGISTERED = 3002
    static USER_REGISTER_SUCCESS = 3003
    static USER_REGISTER_FAIL = 3004
    static USER_NOT_REGISTER = 3005
    static USER_LOGIN_SUCCESS = 3006
    static USER_UPDATE_SUCCESS = 3007
    static USER_UPDATE_FAIL = 3008

    constructor(code, result) {
        if (code) {
            this.code = code
            this.dispatchCodeToMessage(code)
        }
        if (result != null)
            this.result = result
    }

    
    dispatchCodeToMessage = function (code) {
        switch (code) {
            case 1000:
                this.message = '操作成功！'
                break
            case 1001:
                this.message = '操作失败！'
                break
            case 2000:
                this.message = '绑定成功！'
                break
            case 3001:
                this.message = '用户未登录！'
                break
            case 3002:
                this.message = '用户名已被注册！'
                break
            case 3003:
                this.message = '用户注册成功！'
                break
            case 3004:
                this.message = '用户注册失败！'
                break
            case 3005:
                this.message = '该账号未注册！'
                break
            case 3006:
                this.message = '登录成功！'
                break
            case 3007:
                this.message = '资料修改成功！'
                break
            case 3008:
                this.message = '资料修改失败！'
                break
        }
    }
}


module.exports = {
    RspModel
}