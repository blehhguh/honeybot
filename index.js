const Discord = require('discord.js')
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const token = process.env['token'] // Add your token in the enviorment variables tab
const prefix = "!" // You can change this to whatever you want

// Status message
client.once('ready', async () => {
    console.log('Honey, I am home');
    client.user.setActivity("honey.", {
        type: "PLAYING" // Change this to PLAYING, WATCHING, or LISTENING Change the text next to set activity to whatever you want
    });
});

// Command handler
client.on('messageCreate', message =>{
  function reply(text){
    message.channel.send(text)
  }
  if(message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase(); // All command checks should be in lowercase
  const channel = message.channel
  const guild = message.guild
  if(!message.content.startsWith(prefix)) return;
  if (command == "honey"){
    reply("Honey, I am home. `Honey bot is somebodys Testing bot. Frappe and Quacker updates are tested here first.`")
  } else if(command == "no"){
    message.reply("frappe is so emo no cap")
  }
})

client.login(token);