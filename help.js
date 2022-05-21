const { Message } = require('discord.js');
const { rawEmb } = require('../index')

module.exports = {
    name: 'help',
    syntax: 'help',
    args: false,
    description: 'Shows you all my Commands',
    commands: ['help'],

    /**
     *@document
     * @this
     * @param {Message} msg 
     * @param {String[]} args 
     */
    async execute(msg, args) {
        const { colors, emotes } = msg.client;
        let guildData = await msg.client.database.server_cache.getGuild(msg.guild.id)
        let emb = rawEmb(msg)
            .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
         .setColor(guildData.color != 0 ? guildData.color : colors.info)
       
            let A = []
            for (cmd of msg.client.commands) {
                let command = cmd[1]
                A.push(`• \`${command.syntax}\` - ${command.beschreibung ? command.beschreibung : command.description}\n\n`)
            }
                emb.setDescription(A.join(" "))
          msg.channel.send(emb);
        }
    };