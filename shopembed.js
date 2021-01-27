
const Discord = require('discord.js');



(function() {
    var shopembed1 = function() {     	
        return new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("Bitch bot shop")
        .setThumbnail('https://gilkalai.files.wordpress.com/2017/09/dice.png')
        .addFields(
            { name: '$buy dice', value: 'buy an extra dice  Cost: 10 points' },
            { name: '$ [blank] ', value: '[havent chosen something yet]', },
            { name: '$[blank]', value: '[havent chosen something yet]', },
            { name: '$[black]', value: '[havent chosen something yet]', },
            //{ name: '$jellyfish', value: 'just.. dont..', },
        )
    }
    module.exports.shopembed = function() {
        return shopembed1();
        }

}());