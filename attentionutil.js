const admin_id = 012345678
const delay = 5000
let senders = []
let limit_users_per_5_seconds = 10

const writersDetector = async (context, next) => {
    if(context.text){
        const sender = context.senderId
        const getTimeSend = context.session.lastMsg
        const nowTime = Date.now()
        let res = nowTime - getTimeSend
        if(senders.includes(sender) == false){
            senders.push(sender)
        }
        
        if(senders.length >= limit_users_per_5_seconds){
              context.send(`Suspicious activity has been detected!\n\nAt the moment, it's writing simultaneously ${senders.length} users`, {chat_id: admin_id})
        }
        if(res >= delay){
            senders = []
        }
        
    }
    return next()
}

module.exports = {
    writersDetector
}
