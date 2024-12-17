const { Telegram } = require('puregram')
const { writersDetector } = require("attentionutil")

const telegram = Telegram.fromToken(process.env.TOKEN)

telegram.updates.use(writersDetector)
telegram.updates.on('message', context => context.reply('hey!'))

telegram.updates.startPolling()
