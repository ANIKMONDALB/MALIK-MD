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
  
  sessionName:  process.env.SESSION_ID ||  "MALIK-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0VaQ2s4cFpGUHFqbm8ydHl1N2RYanVvZDk2ZWtyRE9GdWRocHRQSVdHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSjBtNEtXbEhWWUFyQk9ROUFQZFU2amtRcTA4UkFONm44dDJqcmlHcVlWcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPT1pVT2wwYTRwaFlOSGl1TjE4ME0rbVNtd0IxKzFLS2t3eUVvMkxGQVdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRamU1amRsMHF1TVhGNFdpUmRwcThSeDI5eFdUendWQ0ErR1VPUFVaY2tBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJPTkNmd1NRd1RtUnJFQ00rQ2c0N2RBVDk5RkdrcU5wWGo1S0lMK25BMFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ims1cmxtQUFOM2VFSitMWVpQY1RxTXVVMWh4b3UxVEJIV2NpNWJHL1ZEMTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU5oakFpNFA1SmZDRG5jZnZUVGdlNkRRZWMzMDNYYlVKS3pZUWdpYU9Ydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3Y5aWlJdGYwRXJpQnNNSm5mQytHOTBhUVZQNVAreG94M2RUa21nYmxqND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjU4bU5zZFFlcWxlZTQ2dTEwRTdFbzI1MkZtU3FKeEFUNUdHZzU1NHVCakdHUGQ4aHpyek53UzJMbzRWNXh6R0ZFTVh6S3k1U3NlN3lkeDlBcW9OOUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUsImFkdlNlY3JldEtleSI6InBKYVpyVUhLR0lHcHVHMmhDQUpVeUZsYnYxSDN4NnNVSXEyWThNMGJ6UVU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlVVa3VaWjZRUkZxR2Y5c0ZSZE93alEiLCJwaG9uZUlkIjoiMjA4ZGMzOWUtMWNlMi00NTA4LWE4ZGEtZjFkZTRkNDJjYTRmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFxMmd1bG1YT2pMZkhmTGI3YmJGNUJaZnpBQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQkVEejFXK0pHbkRKdEJ0ZWNZWkRpaW1DNkE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUFRRN05IMkUiLCJtZSI6eyJpZCI6IjkxODkwMDEwNzI1OTo2QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQQ3FwYnNFRU9YRGxMVUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJQREdoM1o1alFPUFJtbkxQRWtHbVJyRUJiZ1dyMFBsaWtKL0toSVYrQURjPSIsImFjY291bnRTaWduYXR1cmUiOiJ6bEsxRVIydVIvQ2dyS1RjVGlaZGNSOXl2SGlNTUJIOW92TjFZcjh6RU42cWhVc21ENEFmb0lLZVVDOVYrekdwa3lZTTZWY293M3VuU1FKdC8veVdEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZlNWVk1ldUtGNEM0VWFKS0lRcnN6bnZuK2NhTDRwOVk2Nkh3Z05BQ1ZmNno5M2NIUmVySDBFSlpLUUxtN25OekdDaTBja2dENzNSUEt5eXdDcWEzQlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTg5MDAxMDcyNTk6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUd3hvZDJlWTBEajBacHl6eEpCcGtheEFXNEZxOUQ1WXBDZnlvU0ZmZ0EzIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMDk4MTYyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxOZiJ9",
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
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
