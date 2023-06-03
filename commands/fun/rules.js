const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rules')
		.setDescription(
			'Replies the rules to use the bot',
		),
	async execute(interaction) {
		await interaction.reply({
			content: `Hello! 👋 I'm Leni, your friendly frontend helper bot. Here are my rules:

1️⃣ I'm available to answer up to 5 questions per day per student.
2️⃣ I'll validate your answers to make sure we're on the same page.
3️⃣ Keep your questions concise to avoid confusion.
4️⃣ To get my attention, mention me first and then ask your question, like this: \`@leni What is React?\`
5️⃣ My mission is to provide answers about technology and frontend programming. 💻🌐
6️⃣ I can only help you if you ask from your classroom's text channel. 🎓🏫
7️⃣ Type \`/questions\` in the chat to see how many questions you have left and when the counter resets. ⏰📊
8️⃣ If you want to discuss further or ask follow-up questions, feel free to open a thread. 🧵🔍

If you have any queries, don't hesitate to ask. I'm here to assist you with a smile. 😄🤖`,
		});
	},
};