// Init
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_VOICE_STATES']});
var roles = ["500973287128563714","786976035387736129","802572048924409856","802624098407677952","802871794628427796","803940447420022795"]


// Login du bot
client.login('ODgzMDAxODM1MDU1NjQwNjk2.YTDlig.cTHm6rH0gwlcNh-OcGdWhHdybvQ');


// Confirme que le bot est prêt
client.once('ready', () => {
	console.log('Ready!')
;
});


//Messages
client.on("messageCreate", function (message) {
    messRecu=message.content
    channelMess=message.channel
    switch(messRecu){ //verification du message envoyé
        case "-salut": channelMess.send("Howdy Partner !") //si envoi salut
        break;    
        case "-extreme": channelMess.send("ET OUAI MON GARS TOUT EST EXTREME ICI") //si envoi extreme
        break;
        case "-ping": message.reply("pong !!!") //si envoi ping
        break;
    }
    if (messRecu.startsWith("-clear")) {
        //Verification role utilisateur
        valid=false
        for(var i=0; i<roles.length; i++) {
            if(message.member.roles.cache.has(roles[i])){
                 valid = true;
            }
        }
        //Si il a un role autorisé
        if(valid){
            membre=message.member.displayName //stock nom de l'utilisateur
            suppr=messRecu.substr(7) //on cherche le nombre
            suppr=parseInt(suppr) //converti en number
            if(typeof suppr == "number"){ //si suppr est bien un nombre
                channelMess.bulkDelete(suppr+1) //supprimer le nombre de messages indiqués
                channelMess.send(suppr+" messages ont été supprimés par "+membre) //afficher combien de messages ont été supprimés par qui
            }
            else{ //si suppr n'est pas un nombre, donc il y a une faute de frappe
                channelMess.send("alors, ouai mais c'est pas comme ça que ça marche en fait...") //envoyer message d'erreur
            }
        }
        //Si il n'a pas le role requis
        else{
            message.reply("ptdr t'as cru tu pouvais faire ça toi ")
        }
    }
});


