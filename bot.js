const Discord = require('discord.js');//تعريف بكج
const client = new Discord.Client();// تعريف الكلينت
const ms = require('ms');
const pms = require('pretty-ms');








var ServerID = "350784468383956992"; // ايدي السيرفر
var ChannelID = "501482150550568970"; // اول روم للسبام

var ChannelIID = "501482164609875979"; // تاني روم للسبام

 

//البكجات
//npm i discord.js
//npm install opusscript
//npm install node-opus
//npm install ffmpeg-binaries
//npm i ms : For Good Quality
//npm i pretty-ms : For Good Quality



client.on('Warn', console.warn);//

client.on('Error', console.error);//

client.on('Disconnect', () => console.log('Disconnected!'));//If The Bot Disconnected You Will See That In The Consol

client.on('Reconnecting', () => console.log('Reconnecting...'));//If The Bot Desconnected And He Comes Online Again Will Say That In The Console

function timerFunc() {
  
  
    client.on('message', msg => {//Rie
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) // 


    });




    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelIID).send(Math.random().toString(36).substring(7)) // 


    });
}





var timer = setTimeout(timerFunc, 870);//Good Speed : 870 Very Fast : 305

client.on('ready', () => console.log('ProBot Credits Miner v2'));//كلام يظهر فل كونسول

client.on('ready', () => console.log('Lets Go'));//كلام يظهر فل كونسول

client.on('ready', () => console.log('This Is A Beta Version And Maybe You Will Get Banned Quiqly Tip : Wait For The Official Release')); 

client.on('ready', () => console.log('By Rie'));//كلام يظهر فل كونسول



//ProBot Miner V3 
//Better Quality & Fast Mining & Better Minning = More Credits


client.login(process.env.BOT_TOKEN);  //لا تحط التوكن حقك هنا
