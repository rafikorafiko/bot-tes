let handler = async (m, { conn, text }) => {
  if (text) {
    conn.welcome = text
    m.reply('Welcome berhasil diatur\n@user (Mention)')
  } else throw 'welcome beban keluarga🤗'
}
handler.help = ['setwelcome <teks>']
handler.tags = ['owner']

handler.command = /^setwelcome$/i
module.exports = handler

