module.exports = {
    name: 'knuffel ${user.username}',
    execute(message, args){
        message.channel.send('Je hebt nu een gratis knuffel aan ${user.username} gegeven');
    },
};