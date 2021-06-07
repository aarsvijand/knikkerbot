module.exports = {
    name: 'knuffel **${user.tag}**',
    execute(message, args){
        message.channel.send('Je hebt nu een gratis knuffel aan **${user.tag}** gegeven');
    },
};