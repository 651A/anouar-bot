const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = 'OTYzNDQ5NTYzMDE0OTA5OTk0.YlWQUw.8cXdwjfpWdJceI-I4M7Z_M2fNFk'

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.once('ready', () =>{
    console.log(`Logged in as ${client.user.tag}`);
}); 

client.login(process.env.TOKEN)