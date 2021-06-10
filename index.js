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
 
      // console.log(msg.mentions.members.first().user.id)

      let role = msg.guild.roles.cache.find(role => role.name === "Server Member")
      // console.log(role)
      // let member = msg.mentions.members.first()
      // console.log(member.user.username)
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
    // console.info("Members! " + msg.guild)

    // msg.guild.members.cache.forEach(member => console.log(member.user.username))
    // // Get the Guild and store it under the variable "list"
    // console.log(client.guilds.cache);
// const server = client.guilds.cache.get('819500258635022336').members; 
// client.guilds.first().fetchMembers().then((guild) => {
//   forEach
// }
// console.log('server: ' + server);
// console.log('server members: ' + require('util').inspect(server.members));
// Iterate through the collection of GuildMembers from the Guild getting the username property of each member 
// server.members.cache.each(member => {
//   console.log("member: " + JSON.stringify(member))
// });
// console.log("\n :) /////////")
// server.members.cache.forEach(member => console.log(member.user.username))

// console.log("member count: " + JSON.stringify(server.members.cache.filter(member => !member.user.bot).size));
// require('util').inspect(server.members).forEach(member => console.log(member.user.username)); 
    // let role = msg.guild.roles.find(r => r.name === '{Server Member}')
    // console.info('${role}')
    // let member = bot.users.fetch(member_id);
    //    var role= bot.guild.roles.cache.find(role => role.name === "Server Member");
    //    member.roles.add(role);

          // console.log(client.users.cache.toJSON())
      // console.log(msg.guild.members.cache.toJSON())
      // member.roles.add(role);
       

