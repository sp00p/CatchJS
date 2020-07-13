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
const infoEmbed = {
  color: '#c3ab64',
  title: '**Group Links**',
  author: {
    name: 'The Grand Western Ascendancy',
    icon_url: 'https://seancornell.io/ss/tgwa.png',
  },
  fields: [
    {
      color: '#2c2f33',
      name: 'Main Group',
      color: '#ffffff',
      value: 'CO: <@257663701505671169>\nXO: Open\n[Group Link](https://www.roblox.com/groups/6737092)\n[Discord Invite](https://discord.gg/gvM3X5E)', inline: true,
      inline: true,
    },
    {
      color: '#2c2f33',
      name: 'Armed Forces',
      value: 'CO: <@257663701505671169>\nXO: Open\n[Group Link](https://www.roblox.com/groups/6737125)\n[Discord Invite](https://discord.gg/vxbPPpZ)', inline: true,
      inline: true,
    },
    {
      color:'#2c2f33',
      name: '1st Infantry Legion',
      value: 'CO: <@257663701505671169>\nXO: Open\n[Group Link](https://www.roblox.com/groups/6885504)\n[Discord Invite](https://discord.gg/qkVSDT2)', inline: true,
      inline: true,
    },
    {
      color: '#2c2f33',
      name: 'Military Police Corps',
      value: 'CO: <@257663701505671169>\nXO: Open\n[Group Link](https://www.roblox.com/groups/6885441)\nNo Discord Yet', inline: true,
      inline: true,
    },
    {
      color: '#2c2f33',
      name: 'Institute of the Military Leadership',
      value: 'CO: <@257663701505671169>\nXO: Open\n[Group Link](https://www.roblox.com/groups/6920746)\n[Discord Invite](https://discord.gg/XmdPhf)', inline: true,
    },
    {
      color: '#2c2f33',
      name: 'The Empire of Liberty Party',
      value: 'CO: <@257663701505671169>\nXO: Open\n[Group Link](https://www.roblox.com/groups/6737140/The-Empire-of-Liberty-Party#!/about)\n[Discord Invite](https://discord.gg/JQpGkch)', inline: true,
      inline: true,
    },
  ],
  timestamp: new Date(),
  footer: {
    text: 'TGWA | The Engineering Department'
  }
};

const helpEmbed = {
  color: 0x0099ff,
  title: 'Command List',
  url: 'https://seancornell.io/CatchJS/docs',
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
      name: ':info',
      value: 'Sends information about the group',
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

  if (message.content === `${prefix}info`) {
    message.reply('Would you like the information in your DMs (1️⃣) or in this channel (2️⃣)?')
      message.react('1️⃣').then(() => message.react('2️⃣'));

      const filter = (reaction, user) => {
        return ['1️⃣', "2️⃣"].includes(reaction.emoji.name) && user.id == message.author.id;
      };

      message.awaitReactions(filter, {max: 1, time: 10000, errors: ['time'] })
        .then(collected => {
          const reaction = collected.first();

          if (reaction.emoji.name === '1️⃣') {

            message.author.send({embed: infoEmbed})

        } else if (reaction.emoji.name === "2️⃣"){

            message.channel.send({embed: infoEmbed})

          }
      })
  }
})
