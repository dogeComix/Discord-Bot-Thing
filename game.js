const Discord = require('discord.js');



(function() {
    var newgame = function(guess, player, message){



        var numbers = ['1', '2', '3', '4', '5', '6']
        
        
        const shutTheDroot = numbers[Math.floor(Math.random() * numbers.length)];
        return shutTheDroot
        
        }
    var awesomeFunc = function() {
        console.log('Youre awesome!')
      }

    var winembed = function(result, player, score) {     	
        return new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(player + "'s Dice game")
        //.setURL('https://discord.js.org/')
        //.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
        //.setDescription('You win!')
        .setThumbnail('https://gilkalai.files.wordpress.com/2017/09/dice.png')
        .addFields(
            { name: 'You win!', value: ':partying_face:' },
            //{ name: '\u200B', value: '\u200B' },
            { name: 'Current Score: ', value: score, inline: true },
            //{ name: 'Inline field title', value: 'Some value here', inline: true },
        )
        //.addField('Inline field title', 'Some value here', true)
        //.setImage('https://gilkalai.files.wordpress.com/2017/09/dice.png')
        //.setTimestamp()
        //.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
    }
    var loosembed = function(result, player) {
        return new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(player+ "'s Dice game")
        //.setURL('https://discord.js.org/')
        //.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
        //.setDescription('unlucky you lost! :cry:')
        .setThumbnail('https://gilkalai.files.wordpress.com/2017/09/dice.png')
        .addFields(
            { name: 'unlucky you lost! :cry:', value: 'The correct number was ' + result },
            //{ name: '\u200B', value: '\u200B' },
            //{ name: 'Inline field title', value: 'Some value here', inline: true },
            //{ name: 'Inline field title', value: 'Some value here', inline: true },
        )
        //.addField('Inline field title', 'Some value here', true)
        //.setImage('https://gilkalai.files.wordpress.com/2017/09/dice.png')
        //.setTimestamp()
        //.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
    }
    module.exports.awesome = function() {
        return awesomeFunc();
    }
    module.exports.game = function(guess, player) {
        return newgame(guess, player);
    }
    module.exports.winembed = function(result, player, score) {
        return winembed(result, player, score);
    }
    module.exports.loosembed = function(result, player) {
        return loosembed(result, player);
        }

}());


// const userID = '123'
// args = ['3']

// result = game(args, userID)
// console.log(output)