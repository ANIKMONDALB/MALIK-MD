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
  
  sessionName:  process.env.SESSION_ID ||  "MALIK-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia05CUmxzT1NYTENjc0hLYWQvNmU2c3hhZVE1K1B1d1RPYjVTenlqZjZtUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzZuNythU3laRFdLMERxelIzdFBxdjE4d3hWc0QrdUw2N1JOeEJSM0REST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQnJtcHV1dVZUOGR4ZTIydzBhaUpYa3gzZmxUOG5wNFVRMC9xZmRQOW13PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGQ2NvMjMySW5WVjViSWtGb1pITHl0Q0c2TGFmZFg1WkxHdGI3Z2tvV1drPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJDeVY3elNjemdnZTFpMUxmYXlTV2NoYlhuc2FrSmpWeUlJekZwbmNPVkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFGVThLdTY0UWw2alJTTHRqNlUxdTFNVFVxNWQ3ZWFHbmZyZEtrTk9CeHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUNyelFybW5XQUlBQmdGK1YxR1ZHUnJQWDc4bTNYVUY2dVdiZGk0K1VIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1M5L21jN2grU0tMMTdPM2NtWW1nRTBLN2JqOVk2Y09KNmU0QUp3ZlBETT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBOcTl4S0dBTDh6ODFzQVBHTHZCZjdWODAvWFNUSVFKUVhhM2pjUWZlQ3IvL2tCekttN3dpL1k5U1pjWEJES216anh4enkvSlFYb3NGTzZmdlNmbERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcwLCJhZHZTZWNyZXRLZXkiOiI0Ky90amNTcklOeXRsemtmNzVCQVo1cUhTaFQrdnVEZ3ZJVUU5RnhzQys4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0WTdjOFdKX1FmS1htTUNYSm84RGhRIiwicGhvbmVJZCI6ImEwODA2ZWZjLTBjMzMtNGEyNS1hYTc2LWMyYTFkMjllNzk3ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCSTFLZFk5NnN5bnlWSVFuem9qZ0R0UkJHcjA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1dQeHhqNldqZjZ2dXpwV2hVZUszZVYydVM0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ikg5NkFTTTRBIiwibWUiOnsiaWQiOiI5MTg2MTczNDA2Mjc6MTVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi6qeB4LySwrZBwrYgwrZuwrYgwrYhwrYgwrZLwrYgwrbCtiBeIMKrwrsgfiAu4LyS6qeCIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKR0h3YTRFRVA3U2tMUUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJLWksvSzkxalNxUlNaSm9STmpmOHdPQlJBM2dIanR1eHhsZEdGektTeG5JPSIsImFjY291bnRTaWduYXR1cmUiOiJMZjYrdnluSXlkQkY2RHQ4ZTM3Y0w5aXJVdnlWUkFQMEQ2dGlGVE8rYlRrVk01c055S1JJeW5zSEJGaHBER1JOSXZwUkJvcEhxaTZuck50NkY1NnFDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMHdVS2xMbm9ZampqRTE2RVg1dll3WlF6ajViek83d3VQVUxvWHV3bXFNRlJROUtaN0RUb2hyK0l2R1pUNmpFUmJpcGNCVWRzNjlZeW5JVnE1QUZXQkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTg2MTczNDA2Mjc6MTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU21Tdnl2ZFkwcWtVbVNhRVRZMy9NRGdVUU40QjQ3YnNjWlhSaGN5a3NaeSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTkzNzQxOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBSk8ifQ==",
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
