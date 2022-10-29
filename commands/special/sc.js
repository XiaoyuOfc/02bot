exports.run = {
   usage: ['sc'],
   async: async (m, {
      client,
      isPrefix,
      command
   }) => {
      if (command == 'sc') {
         let rows = [{
            title: 'Coburator Bot',
            rowId: `${isPrefix}tqto`,
            description: `Partner Bot WhatsApp`
         }]
         await client.sendList(m.chat, '', info(), '© 02Botz-Md', 'Tap!', rows, m)
      }
   },
   error: false
}

let info = () => {
   return `*❏ 02Botz-Md*

Bot ini dibuat menggunakan *NodeJS* dengan bantuan *Baileys* sebagai Whatsapp Web API dan dimodifikasi dari *neoxr-bot (wildan Izzuddin)* dengan penuh cinta oleh Abang Ganteng *Nan* sehingga membuat botnya semakin tampan.

*❏ INFO BOT*
GC BOT: https://chat.whatsapp.com/GLDpzSjcXpZIp007nLaRNy
`
}
