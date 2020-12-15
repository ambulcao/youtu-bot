const Discord = require('discord.js');
const Ytdl = require('ytdl-core');

if(ProcessingInstruction.env.bot_KEY){
    require("dotenv").load();
}

const app = new Discord.Client();

let estouPronto = false;

app.on('ready', () => {
    console.log('Estou conectado!');
});

app.on('message', (msg) => {
    // !join = Bot se junta ao canal de voz
    if(msg.content === '!join'){
        if(msg.member.voiceChannel){
            msg.member.voiceChannel.join();
            estouPronto = true;
            // verifica de a pessoa esta no canal de voz

        } else {
            // caso nao esteja em um 
            msg.channel.send('Você precisa estar conectado a um Canal de Voz!');
        }
    }
    // !leave = Bot sai do canal de voz
    else if(msg.content === '!leave'){
            if(msg.member.voiceChannel){
                msg.member.voiceChannel.leave();
                estouPronto = false;    
            } else {
                msg.channel.send('Você precisa estar conectado a um Canal de Voz!');
            }
    }
    // !play [link] = Bot toca músicas
    else if(msg.content.startsWith('!play ')){
        if(estouPronto){
            let oQTocar = msg.content.replace('!play ','');
            if(Ytdl.validateURL(oQTocar)){
                msg.member.voiceChannel.connection.playStream(Ytdl(oQTocar));
            } else {
                msg.channel.send('O link não é válido!');
            }
        }
    }
});

app.login();