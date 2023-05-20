const { Events } = require('discord.js');
const getChatCompletion = require('../openAi');
const db = require('../DB');

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
		const startMessage = message.content.slice(0, 23).trim();
		console.log('🔧 message', message.content);

		if (
			![`<@${process.env.botId}>`, `<@&${process.env.mentionLeni}>`].includes(
				startMessage,
			)
		) {
			return false;
		}

		console.log('🗣  mentioned: ', message.author.tag);

		const loadingMessage = await message.channel?.send('🧠 Thinking...');
		try {
			await db.open();
			const user = await db.get(message.author.tag);

			if (!user) {
				await db.create(message.author.tag, 0);
			}

			if (user?.qty >= 10) {
				loadingMessage.delete();
				await db.close();
				return message.channel.send(
					`👽 Hi ${message.author.tag} you don't have questions left. Try again tomorrow.`,
				);
			}

			const response = await getChatCompletion(message.content.slice(23));

			await db.modify(message.author.tag, (user?.qty || 0) + 1);
			const all = await db.getAll();

			console.log('🐯 Ai response:', response);

			console.log('🔌  calls: ', user?.id, all);
			loadingMessage.delete();
			if (!response) {
				await db.close();
				return message.channel.send('😵‍💫 I can\'t response your question now.');
			}
			await db.close();
			return message.channel.send(response);
		}
		catch (error) {
			console.log('  error: ', error);
			loadingMessage.delete();
			await db.close();
			return message.channel.send('😵‍💫 I can\'t response your question now.');
		}
	},
};
