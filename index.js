require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

const TOKEN = process.env.TOKEN;

client.login(TOKEN);

client.on('ready', () => {
    console.info(`Logged in as ${client.user.tag}!`);

  });

client.on('message', msg => {
    if (msg.content.includes('hey')) {

      let role = msg.guild.roles.cache.find(role => role.name === "Server Member")

      console.log(msg.guild.members.cache.toJSON())


    } else if (msg.author.bot){
       var member_id = ""

       let responses = msg.embeds[0].fields

       responses.forEach(function (arrayItem) {
       var value = arrayItem.value;
       console.log(`Form Submission ${value}`);

       if (arrayItem.name.includes('Discord Username')){
           member_id = String(arrayItem.value);
           console.log(` Discord ID: ${member_id}`)
           
           if (member_id.length > 2 && member_id.length < 32) {

           let role = msg.guild.roles.cache.find(role => role.name === "beginner")
           let member = msg.guild.members.cache.find(mem => mem.displayName === member_id)
          
           member.roles.add(role)
           }
       }

    });
  }});

       

