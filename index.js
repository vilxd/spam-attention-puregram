const { Telegram } = require('puregram')
const { writersDetector } = require("attentionutil")
const { session } = require('@puregram/session')

telegram.updates.use(session({
    initial: (context) => ({
    lastMsg: Date.now()
})
}))

const telegram = Telegram.fromToken(process.env.TOKEN)

telegram.updates.use(writersDetector)
telegram.updates.on('message', context => context.reply('hey!'))

telegram.updates.startPolling()
