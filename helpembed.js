
const Discord = require('discord.js');



(function() {
    var helpEmbed1 = function() {     	
        return new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("Bitch bot help page")
        .setThumbnail('https://gilkalai.files.wordpress.com/2017/09/dice.png')
        .addFields(
            { name: '$guess', value: 'guess a number and i will roll the dice. eg $guess 4' },
            { name: '$shop', value: 'displays the shop page. eg $shop' },
            { name: '$insult', value: 'insult people. eg $insult nathan', },
            { name: '$say', value: 'say something from the bot. eg $say hi im a bot!', },
            { name: '$score', value: 'displays your current score. eg $score', },
            { name: '$wave', value: 'wave at everyone. eg $wave', },
            { name: '$help', value: 'just shows this page again.', },
        )
    }
    module.exports.helpEmbed = function() {
        return helpEmbed1();
        }

}());