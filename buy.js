
const Discord = require('discord.js');



(function() {
    var buyembed = function(player, score, item) {     	
        return new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("Bought: " + item)
        .setThumbnail('https://gilkalai.files.wordpress.com/2017/09/dice.png')
        .addFields(
            { name: player + "'s new balance", value: score },
            //{ name: '$buy ', value: 'insult people. eg $insult nathan', },
            //{ name: '$say', value: 'say something from the bot. eg $say hi im a bot!', },
            //{ name: '$wave', value: 'wave at everyone. eg $wave', },
            //{ name: '$help', value: 'just shows this page again.', },
        )
    }
    module.exports.buyembed = function(player, score, item) {
        return buyembed(player, score, item);
        }

}());