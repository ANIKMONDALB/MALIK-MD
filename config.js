const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("918617340627")
global.mongodb = process.env.MONGODB_URI || "  mongodb+srv://maliksahab:maliksahab@cluster0.pkr0dsx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/"
global.port= process.env.PORT || 5000
global.email = 'akk728492@gmail.com'
global.github = 'https://github.com/arkhan998/MALIK-MD'
global.location = 'Pakistan'
global.gurl = 'malik-md.db' // add your username
global.sudo = process.env.SUDO || 918617340627
global.devs = '923124533358';
global.website = 'https://github.com/arkhan998/MALIK-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/dce77f7538019d05afe65.jpg'
module.exports = {
  
  sessionName:  process.env.SESSION_ID ||  "MALIK-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUlvcUpZMHFjRWwrZG4wOHdxdlE2TEJHR2dMelYvWEpwRFBkK2p2M2tsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzZ3TkV0UTdwSjFlSEdGUUkxb01DUmVPVWpmWlhlQVRwcXNzc0ZPelkwST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRmNWa0NGQXhaTSszRVRtd0cvcjlJV3N4UnBqZ0E5SW9zVW9BZFNXS0ZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCcmNMcnFFNThoRUR6TXMrc3kzVmUyU2pXT1NWWXpSMncyOFNYTEVKdm1vPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVJWTVFMWtmNHEvR0hLcnZWdWYxY1pWcWcyaE5BdlRXSnJlK1RWMlpKSGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVWZEhTLzhtTEFIOUZ6WUVUMDNFSmJ4RTQrYy9zalBOOTREUWMvUmQzQmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVBETW5nQ0xMSXZFd3hvaUtNb05IY1REZE1JYWVSV2hVdkpqR0pkRkltcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1psb0QrRjZ3ZXZ3b2prTmU1T0tUTmJuUHpVTVdrdllCRDJmdko1STRDWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVLL2tqVVhIZWlqRWZPR3I1MXFDK0pCaGdMUkdOQ0dvYzhzcmVkQnZZR2V4dFVVMm1zNDRhc0hjbGxVSmJhYzJ6Y2xoeUlYWi9jd3pKQlhvZlRnTkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NiwiYWR2U2VjcmV0S2V5IjoibjNua2F3ZVgwaE44ZGFBdzJ2NE5paFBOeTJ2a0xYWFVjWndHaTRRRnREND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoidFFWNlVDMkFTOU96c2VWZXlNYXk0dyIsInBob25lSWQiOiI0NzRiMjlhZS01ZGVhLTQyOGEtOWY2YS1mMTk4ZmU4NzM5NTgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2Q4TS9sSGpJM2h5bHVMZWJ2OSs2YTlMNWl3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlnZy9FVnFaenh0bEJVODFiN1ZROUVZdHUyST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJLRkwzQzg4QiIsIm1lIjp7ImlkIjoiOTE4NjE3MzQwNjI3OjI4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuqngeC8ksK2QcK2IMK2bsK2IMK2IcK2IMK2S8K2IMK2wrYgXiDCq8K7IH4gLuC8kuqngiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmlId2E0RUVNWDhxTFFHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiS1pLL0s5MWpTcVJTWkpvUk5qZjh3T0JSQTNnSGp0dXh4bGRHRnpLU3huST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiS21acjdtZFQ4TXRacW9tTGlhbW5ITzVldEsweStxTXV5UUdLWGFkeUFQcjJqNXRJbk1rSEZ4OGtaV0Q0ZlIzdVZuVkZuYlFHOEVNb0FaSzU3SUFvREE9PSIsImRldmljZVNpZ25hdHVyZSI6IisrN0RtU1JTbitWQ2psUTNrVDd5bnVwSmxtMTFoMHhoZHJnOEQ5TDk2ZWY1Mmc5MmlWd09qK3Zld0VpN2poZEEyQ25tdjdzUFI2bUJZUXhuYkc1WURnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE4NjE3MzQwNjI3OjI4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNtU3Z5dmRZMHFrVW1TYUVUWTMvTURnVVFONEI0N2JzY1pYUmhjeWtzWnkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAzMzU5NTV9",
  botname:   process.env.BOT_NAME === undefined ? 'MALIK-BOT' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '꧁༒☬☠An!k☠︎☬༒꧂' : process.env.OWNER_NAME,
  author:  process.env.PACK_INFO === undefined ? 'bot' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO === undefined ? 'malik-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  typingprensence:  process.env.TYPING === undefined ? false : process.env.TYPING,
recordingpresence:  process.env.RECORDING === undefined ? false : process.env.RECORDING,	
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '#' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  afk:  process.env.AFK ||true,
  autobio:  process.env.AUTO_BIO === undefined ? '' : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'MALIK',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
