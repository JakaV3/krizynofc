let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send3ButtonLoc(m.chat, await (await fetch(image)).buffer(), `
📮 𝘑𝘈𝘕𝘎𝘈𝘕 𝘓𝘜𝘗𝘈 𝘔𝘈𝘔𝘗𝘐𝘙

➵͜͡✪ 𝙶𝙸𝚃𝙷𝚄𝙱 :
github.com/frostkri
`.trim(), '📮 𝘋𝘰𝘯𝘵 𝘧𝘰𝘳𝘨𝘦𝘵 𝘵𝘰 𝘧𝘰𝘭𝘭𝘰𝘸 𝘮𝘺 𝘢𝘤𝘤𝘰𝘶𝘯𝘵', 'GROUP', '.gcbot', 'MENU','.menu', 'STORE', '.store')
handler.help = ['Github']
handler.tags = ['info']
handler.command = /^(github|githubowner|gb)$/i

module.exports = handler
