const Discord = require('discord.js');

module.exports.run = async(client, message) => {

  if (message.member.hasPermission("BAN_MEMBERS", "ADMINISTRATOR")){
    var member = message.mentions.members.first();

    member.ban().then((member) => {
        message.channel.send(":slight_smile: " + member.displayName + " has been successfully banned!");
    }).catch(() => {
        message.channel.send(":slight_frown: You don't have permission to use that command.");
    });
  }

}
