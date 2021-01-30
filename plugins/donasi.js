let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Im3 [085807174320]
│ • Smartfren [08819547416]
╰────
`.trim()) // Terimakasih Telah Memberi Semoga Anda Dapat Rezeki Lebih Banyak
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
