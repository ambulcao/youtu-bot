const Discord = require('discord.js');
const Ytdl = require('ytdl-core');

const token = '';

const app = new Discord.Client();

app.on('ready', () => {
    console.log('Estou conectado!');
});

app.on('message', () => {
    // !join = Bot se junta ao canal de voz
    
    // !leave = Bot sai do canal de voz

    // !play [link] = Bot toca músicas
});

app.login();