const Discord = require('discord.js');
const bluetooth = require('node-bluetooth');s
Game = require ('./game.js')
Help = require ('./helpembed.js')
Shop = require ('./shopembed.js')
Buy = require ('./buy.js')
const client = new Discord.Client();

const prefix = '$'

client.once('ready', () => {
	console.log('i am now Ready!');
	client.user.setStatus('idle');
	client.user.setActivity('you, type $help for more info', { type: 'WATCHING' });
});


var insults = [' smells quite badly', ' is lame', ' is annoying']

var NewMessage = ''

var scores = { '529003883830312963': 10002, '396360255576997893': 2, '273480178632491008': 4 }


client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	switch (command) {
		case 'insult':
			message.channel.send(args[0] + insults[Math.floor(Math.random()*insults.length)]);
			break;
		case 'guess':
			result = Game.game(args, message.author.username,)
			if (result == args){
				if (scores[message.author.id]) {
					scores[message.author.id] = scores[message.author.id] + 1;
				} else {
					scores[message.author.id]  = 1
				}
				console.log(scores)
				message.channel.send(Game.winembed(result, message.author.username, scores[message.author.id]));
			} else {
				message.channel.send(Game.loosembed(result, message.author.username));
			}

			break;
		case 'say':
			console.log ("saying " + args.join(' '))
			message.channel.send(args.join(' '));
			break;
		case 'wave':
			message.channel.send(':wave:')
			break;
		case 'help':
			message.channel.send(Help.helpEmbed())
			break;
		case 'shop':
			message.channel.send(Shop.shopembed())
			break;
		case 'buy':
			const args2 = message.content.slice(prefix.length + 3).trim().split(/ +/);
			const command2 = args2.shift().toLowerCase();

			switch (command2){
				case 'dice':
					scores[message.author.id] = scores[message.author.id] - 10
					message.channel.send(Buy.buyembed(message.author.username, scores[message.author.id], message.content.slice(prefix.length + 3).trim().split(/ +/)))
					console.log(scores)
				//message.channel.send('dice')
					break;
				case 'jellyfish':
					message.channel.send('seriously?? i said dont')
					break;
				default:
					message.channel.send('You cant buy that :flushed:')
			}
			break;

		//scores[message.author.id] = scores[message.author.id] - 10;
			//console.log(scores);
			//bought = Dice.buydice(message.author.username, scores[message.author.id])
			//message.channel.send(bought)
			//break;
		case 'score':
			message.channel.send(scores[message.author.id])
			break;
		default:
			message.channel.send('Thats not a valid command :flushed:');
	//NewMessage = 'you said "' + message.content.substr(1,message.content.length) + '"'
	//message.channel.send(NewMessage)
	}
})


client.login(process.env.DISCORD_KEY)
