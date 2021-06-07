module.exports = {
    name: 'knuffel @${person.user.tag}',
    execute(message, args){
        message.channel.send('Je hebt nu een gratis knuffel aan @${person.user.tag} gegeven');
    },
};