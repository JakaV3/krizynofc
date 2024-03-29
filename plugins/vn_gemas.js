let { MessageType, Presence, mimetype } = require('@adiwajshing/baileys')
let ffmpeg = require('fluent-ffmpeg');
let fetch = require('node-fetch');
let ftype = require('file-type');
let fs = require('fs');
let { exec } = require('child_process');

let handler = async(m, { conn, text, args }) => {

     await m.reply('Sedang memproses...')
          if (!m.quoted) return conn.reply(m.chat, 'Tag Audionya!', m)
          let type = Object.keys(m.message)[0]
          let content = JSON.stringify(m.message)
          let isMedia = (type === 'imageMessage' || type === 'videoMessage')
          let isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
                  if (!isQuotedAudio) return m.reply('Itu Audio?')
                                let encmedia = JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                let media = await conn.downloadAndSaveMediaMessage(encmedia)
                                  let ran = getRandom('.mp3')
                                    exec(`ffmpeg -i ${media} -af atempo=3/4,asetrate=44500*4/3 ${ran}`, (err, stderr, stdout) => {
                                      fs.unlinkSync(media)
                                      if (err) return reply('Ada yang Erorr!')
                                      let tupai = fs.readFileSync(ran)
                                      conn.sendFile(m.chat, tupai, 'tupai.mp3', '', m, false, { ptt: true })
                                      fs.unlinkSync(ran)
           })
}
handler.help = ['vngemas (reply audio)']
handler.tags = ['audio']
handler.command = /^(vngemas)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`
}