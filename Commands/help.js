module.exports = {
    name: 'help',

    async run(client, message, args, con) {
        fs.readdir("./Commands/", (err, files) => {
            if(err) console.error(err);
                
            var namelist = "";
            var desclist = "";
            var usage = "";
            
            let result = jsfiles.forEach((f, i) => {
                let props = require(`./${f}`);
                namelist = props.name;
                message.author.send(`**${namelist}** \n${desclist} \n`);
            });
         
        });
    },
};

// const { Channel } = require("discord.js")

// const Discord = Require("discord.js");

// module.exports = {
//     name:'help',

//     async run (bot, message, args) {
//         const help = new Discord.MessageEmbed()
//         .setColor('RANDOM')
//         .setTitle('Commando lijst')
//         .setDescription('adkennen' | 'babybel' | 'branca' | 'docu' | 'interlude' | 'keta' | 'legacy' | 'limits' | 'spekpatatje' | 'stand' | 'vriend' | 'vechain');
        

// message.channel.send(help);
//     }
// }