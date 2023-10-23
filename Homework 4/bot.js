const { Client, GatewayIntentBits, Intents, InteractionResponseType, REST, Routes, MessageActionRow, MessageButton } = require('discord.js');



module.exports.bot = (event, context) => {
	console.log("Here1")
	const client = new Client({ 
	  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
	});
	console.log("Here2")
	client.on('ready', () => {
	  console.log(`Logged in as ${client.user.tag}`);
	});

	client.on('messageCreate', (message) => {
	  if (message.content === '!hello') {
	    message.reply('Hello!');
	  } else if (message.content === '!quote') {
	    message.reply('Learn from yesterday, live for today, hope for tomorrow - Albert Einstein');
	  } else if (message.content === '!joke') {
	    message.reply('I was going to tell you a joke about boxing but I forgot the punch line.');
	  } else if (message.content === '!fact') {
	    message.reply('Sloths can hold their breath longer than dolphins.');
	  } else if (message.content === '!references') {
	    message.reply('https://www.funkidslive.com/learn/top-10-facts/top-10-weirdest-facts, \nhttps://www.countryliving.com/life/entertainment/a36178514/hilariously-funny-jokes');
	  }
	});
	console.log(process.env.DISCORD_BOT_TOKEN)
	client.login(process.env.DISCORD_BOT_TOKEN);
}
