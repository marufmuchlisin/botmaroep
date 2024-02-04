/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6285174306183', 'MAROEP XD', true],
  ['6285880029379']
] // Nomor Owner

global.mods = ['6282116383470'] 
global.prems = ['6282116383470', '6285880029379']

// apikey
global.lann = 'yPP2e5HF'
// apikeylu di ganti menggunakan apikey yang di dapatkan di website https://api.betabotz.org. contohnya global.lann = 'nans' (contoh). cara mendapatkan apikey. masuk website > scroll ke bawah dan cari harga yang kamu mau ada juga yang free dan tekan > otomatis akan di arahkan untuk registrasi, isi data diri email dll. > kalo sudah klik profil dan di situ akan muncul apikey mu. terima kasih.

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-fgmods.ddns.net': 'mhdAnan',
  'https://api.betabotz.org': 'yPP2e5HF'
}

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}

// Watermark
global.nama = 'MAROEP XD' // nama owner
global.nomor = '6282116383470' // nomor owner
global.nans = 'MAROEP XD' // nama bot 
global.thumb = 'https://i.ibb.co/m9YqsDr/neromdv3-2.jpg' // thumbnail bot ( foto menu )
global.dygp = 'https://chat.whatsapp.com' // link group yang ada di menu

// Sticker wm
global.packname = 'NERO MD┃ᴮᴼᵀ' 
global.author = '@maroepxd' 
global.fgig = 'https://www.instagram.com/maroep.m' // bebas tapi jangan kosong 
global.fgsc = 'https://github.com/nanzone' // bebas tapi jangan kosong
global.fgyt = 'https://maroep.m.my.id/' // bebas tapi jangan kosong
global.fgpyp = 'https://maroepxd.my.id' // bebas tapi jangan kosong
global.fglog = 'https://i.ibb.co/kXw4XhL/maroepxd-logo.jpg'

// Other
global.dana = '6282116383470'
global.qris = 'https://i.ibb.co/xGC5Y7j/20230712-173348.jpg'
global.web = 'https://maroepxd.my.id'
global.email = 'cahwangon27112003@gmail.com'
global.lastm = 'ꜱɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙʏ ɴᴀɴꜱ ᴏꜰꜰᴄ'

global.wait = 'Tunggu sebentar....'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})