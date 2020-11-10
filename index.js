const Discord = require('discord.js');
const client = new Discord.Client();
const jokes = [""]
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.channel.send('Pong!');
    }
    else if(msg.content == 'dazomen hello') {
        msg.channel.send('Hello my friend')
    }
    else if(msg.content == 'dazomen help') {
        msg.channel.send("I'm dumb right know, I'm under construction...")
    }
    else if(msg.content == 'dazomen avatar') {
        // Send the user's avatar URL
        msg.channel.send(msg.author.displayAvatarURL());
    }
});

client.login('Nzc1NzA3NDI3NzIzMDE4Mjkx.X6qP1g.LQZBCqGV9zDRoyEZ_sOggJEQ-W0');