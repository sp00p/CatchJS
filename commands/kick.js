const Discord = require('discord.js');

module.exports.run = async(client, message) => {

  if (message.member.hasPermission("KICK_MEMBERS", "ADMINISTRATOR")){
    var member = message.mentions.members.first();

    member.kick().then((member) => {
        message.channel.send(":slight_smile: " + member.displayName + " has been successfully kicked!");
    }).catch(() => {
        message.channel.send(`:slight_frown: You don't have permission to use this command ${message.author}`+ ".");
    });
  }

}
