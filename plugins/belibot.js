let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.sendButtonLoc(m.chat, await (await fetch(image)).buffer(), `
┌─── 〔 𝗕 𝗘 𝗟 𝗜  𝗕 𝗢 𝗧 〕 ───
❍ Allomypren, Mau beli bot ?👋
❍ Jangan basa basi lagi langsung aja
❍ Harga berapa? harga bersahabat kok
╔═══════════════════
║╭─❉ 「 𝗗𝗢𝗡𝗔𝗦𝗜 𝗢𝗪𝗡𝗘𝗥 」 ❉───
║│➸ *DANA* : 081360482998
║│➸ *PULSA*: 081360482998
║│➸ *OVO*   : 081360482998
║╰──────────────────    
╠══════════════════
║╭─────────────────
║│ 𝗧𝗲𝗿𝘁𝗮𝗿𝗶𝗸 𝘂𝗻𝘁𝘂𝗸 𝗯𝗲𝗹𝗶 𝗯𝗼𝘁
║│ 𝗞𝗲𝘁𝘂𝗸 𝘁𝗼𝗺𝗯𝗼𝗹 𝗱𝗶𝗯𝗮𝘄𝗮𝗵
║╰──────────────────
╰═══〘 ${namabot} 〙 ══
`.trim(), footer, 'Beli Script', '#ownerstore', m)
}

handler.command = /^beli(bot)$/i

module.exports = handler
