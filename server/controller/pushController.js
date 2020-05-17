const GeTui = require('gt-push-sdk/GT.push')
const Target = require('gt-push-sdk/getui/Target')
const SingleMessage = require('gt-push-sdk/getui/message/SingleMessage')
const TransmissionTemplate = require('gt-push-sdk/getui/template/TransmissionTemplate')

const APPID = 'fRFXxU2zcv7G6KxBFUeS98'
const APPKEY = '3A1cJDVeIi54JKI6ZfGcR5'
const MASTERSECRET = 'JlOcf5GFSv7KMefNcACL05'
//别名推送方式
//var ALIAS = '';
const HOST = 'https://sdk.open.api.igexin.com/apiex.htm';

const gt = new GeTui(HOST, APPKEY, MASTERSECRET);

gt.connect();

const pushMessageToSingle = async (cid,content) => {
    const template = new TransmissionTemplate({
        appId: APPID,
        appKey: APPKEY,
        transmissionType: 2,
        transmissionContent: content
    });
    const message = new SingleMessage({
        isOffline: true,                        //是否离线
        offlineExpireTime: 24 * 3600 * 1000,    //离线时间
        data: template                          //设置推送消息类型
    })
    const target = new Target({
        appId: APPID,
        clientId: cid
    })
    gt.pushMessageToSingle(message, target, function (err, res) {
        console.log(res);

        if (err != null && err.exception != null && err.exception instanceof RequestError) {
            var requestId = err.exception.requestId;
            console.log(err.exception.requestId);
            //发送异常重传
            gt.pushMessageToSingle(message, target, requestId, function (err, res) {
                console.log(err);
                console.log(res);
            })
        } else {
            console.log(content)
        }
    })
}

module.exports = {
    pushMessageToSingle
}

