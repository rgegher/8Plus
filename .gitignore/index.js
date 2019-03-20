const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setActivity("Dev un bot à poil");
    console.log("Connected");


});

bot.login(process.env.TOKEN)

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.send("Voici la liste des commandes disponnibles : \n -*help");
    
}
    if (message.content === "Salut"){
        message.reply("Bien le bonjour.");
        console.log("Commande Hey effectué");
    }
});
