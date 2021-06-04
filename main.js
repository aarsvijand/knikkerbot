const Discord = require('discord.js');

const client = new Discord.Client();

const keepAlive = require("./server.js")

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./Commands/${file}`);
    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Knikkerbot is online!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;
    try {
        client.commands.get(command).execute(message, args);
    } catch(error){
        console.error(error);
        message.reply('Dat kan helemaal niet11!!')
    }
       

});

keepAlive()
client.login(process.env.token);