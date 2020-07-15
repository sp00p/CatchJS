const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
let prefix = config.prefix;
const fs = require('fs');
client.commands = new Discord.Collection();
client.login(config.token);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('guildMemberAdded', () => {
  const channel = member.guild.channels.find(ch => ch.name === 'member-log'); // Change this to the channel you'd like to send the join message to

  if(!channel) {
    console.log("Member join channel not found!")
  } else {
    channel.send(`Welcome to the server, ${member}`);
  }
})

// Embeds
const introEmbed1 = {
  color: '#c3ab64',
  image: {
    url: 'https://media.discordapp.net/attachments/467450676671283200/732383744933101599/unknown.png',
  },
}
const introEmbed2 = {
  color: '#c3ab64',
  image: {
    url: 'https://media.discordapp.net/attachments/607687877752520704/728483395759374436/Main_group_Roundel.png?width=581&height=581',
  },
};

const allGroupsEmbed = {
  color: '#c3ab64',
  author: {
    name: 'The Grand Western Ascendancy',
    icon_url: 'https://seancornell.io/ss/tgwa.png',
  },
  fields: [
    {
      color: '#2c2f33',
      name: '__**The Grand Western Military**__',
      color: '#ffffff',
      value: '*The Grand Western Military safeguards our nation against enemies abroad and is the sword of freedom in the war to end all wars. The Army expects every patriot to do their duty and enlist. Within the Military there are countless branches and divisions you can join with various types of roles and responsibilities.*\n*The army is currently led by <@401465687786389525>.*\n[Group Link](https://www.roblox.com/groups/6737125)\n[Discord Invite](https://discord.gg/vxbPPpZ)',
    },
    {
      color: '#2c2f33',
      name: '__**The Empire of Liberty Party**__',
      value: '*The Empire of Liberty Party handles recruitment in the Ascendancy, internal affairs, as well as vital home defense. A beacon to our former banners and our remaining ideals. It is currently lead by <@302532953341296660>*\n[Group Link](https://www.roblox.com/groups/6737140/The-Empire-of-Liberty-Party#!/about)\n[Discord Invite](https://discord.gg/JQpGkch)', inline: true,
      inline: true,
    },
  ],
  timestamp: new Date(),
  footer: {
    text: 'TGWA | The Engineering Department'
  }
};

const divisionsEmbed = {
  color: '#c3ab64',
  author : {
    name: 'Enlistment',
    icon_url: 'https://seancornell.io/ss/tgwa.png',
  },
  fields: [
    {
      color:'#2c2f33',
      name: '—————————————————————————————————',
      value: '*The Grand Western Military safeguards our nation against enemies abroad and is the sword of freedom in the war to end all wars. The Army expects every patriot to do their duty and enlist. Within the Military there are countless branches and divisions you can join with various types of roles and responsibilities. The army is currently led by <@401465687786389525>.*\n\nYou can start your career now.\n\n**HOW TO ENLIST**\n— Join The Grand Western Ascendancy\n[Group Link](https://www.roblox.com/groups/6737092/The-Grand-Western-Ascendancy#!/about)\n[Discord Invite](https://discord.gg/gvM3X5E)\n— Join The Grand Western Army\n[Group Link](https://www.roblox.com/groups/6737125)\n**—————————————————————————————————**',
    },
  ],
}
const helpEmbed = {
  color: 0x0099ff,
title: 'Command List',
  description: 'A list of available commands',
  fields: [
    {
      name: ':kick',
      value: 'Kicks the specified user',
      inline: true,
    },
    {
      name: ':ban',
      value: 'Bans the specified user',
      inline: true,
    },
    {
      name: ':maininfo',
      value: 'Sends information about the main branches in the group',
    },
    {
      name: ':armyinfo',
      value: 'Sends information about the army\'s subdivisions',
    },
  ],
  timestamp: new Date(),
  footer: {
    text: 'Created by Sean#0004',
  }
};


client.on('message', message => {
  if(message.content === `${prefix}help`) {
    message.reply('Would you like the commands in your DMs or in this channel?')
      message.react('1️⃣').then(() => message.react('2️⃣'));

      const filter = (reaction, user) => {
        return ['1️⃣', "2️⃣"].includes(reaction.emoji.name) && user.id == message.author.id;
      };

      message.awaitReactions(filter, {max: 1, time: 10000, errors: ['time'] })
        .then(collected => {
          const reaction = collected.first();

          if (reaction.emoji.name === '1️⃣') {

            message.author.send({embed: helpEmbed})

        } else if (reaction.emoji.name === "2️⃣"){

            message.channel.send({embed: helpEmbed})

          }
      })
  }

  if (message.content === `${prefix}maininfo`) {
    message.reply('Would you like the information in your DMs (1️⃣) or in this channel (2️⃣)?')
      message.react('1️⃣').then(() => message.react('2️⃣'));

      const filter = (reaction, user) => {
        return ['1️⃣', "2️⃣"].includes(reaction.emoji.name) && user.id == message.author.id;
      };

      message.awaitReactions(filter, {max: 1, time: 10000, errors: ['time'] })
        .then(collected => {
          const reaction = collected.first();

          if (reaction.emoji.name === '1️⃣') {

            message.author.send({embed: introEmbed2})
            message.author.send({embed: allGroupsEmbed})

        } else if (reaction.emoji.name === "2️⃣"){

            message.channel.send({embed: introEmbed2})
            message.channel.send({embed: allGroupsEmbed})

          }
      })
  }
  if (message.content === `${prefix}armyinfo`) {
    message.reply('Would you like the information in your DMs (1️⃣) or in this channel (2️⃣)?')
      message.react('1️⃣').then(() => message.react('2️⃣'));

      const filter = (reaction, user) => {
        return ['1️⃣', "2️⃣"].includes(reaction.emoji.name) && user.id == message.author.id;
      };

      message.awaitReactions(filter, {max: 1, time: 10000, errors: ['time'] })
        .then(collected => {
          const reaction = collected.first();

          if (reaction.emoji.name === '1️⃣') {

            message.author.send({embed: introEmbed1})
            message.author.send({embed: divisionsEmbed})

        } else if (reaction.emoji.name === "2️⃣"){

            message.channel.send({embed: introEmbed1})
            message.channel.send({embed: divisionsEmbed})

          }
      })
  }
})
