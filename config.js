import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285751390060', 'Anami', true] //Ganti aja
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285751390060' //Ganti
global.packname = '© Sticker by'
global.author = 'Anami'
global.namebot = 'MAYA OFFICE'
global.wm = '© MAYA OFFICE MD By Anami'
global.stickpack = '© Sticker by'
global.stickauth = 'MAYA OFFICE'
// Link Sosmed
global.sig = 'https://instagram.com/_xwby_?igshid=ZDc4ODBmNjlmNQ=='
global.sgh = 'https://github.com/KyotakaAnami'
global.sgc = 'https://chat.whatsapp.com/CMK56xUxfTgAXGZjsZBmwf'
// Donasi
global.psaweria = 'https://shoplinks.to/vyna-store'
global.ptrakterr = 'https://shoplinks.to/vyna-store'
global.povo = '082298512279'
// Info Wait
global.wait = '⏳ Proses...'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = 'j9XFN6zChx'
global.lolkey = 'ayakaviki'
global.rose = 'Rs-AgesuXD';
global.zenzkey = 'BagasPrdn'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    xteam: 'https://api.xteam.xyz',
    dzx: 'https://api.dhamzxploit.my.id',
    zeks: 'https://api.zeks.xyz',
    lolhuman: 'https://api.lolhuman.xyz',
    tio: 'https://api.botcahx.live',
    popcat: 'https://api.popcat.xyz',
    rey: 'https://sekha.me'
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "j9XFN6zChx",
    'https://sekha.me': 'apirey',
    'https://api.xteam.xyz': 'd37372311698ed1d',
    'https://pencarikode.xyz': 'pais', 
    'https://zekais.com': 'apikeymu',
    'https://api.botcahx.live': 'QaepQXxR',
    'https://api.lolhuman.xyz': 'ayakaviki',
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})