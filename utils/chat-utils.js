function isAskingLeni(message) {
	return [`<@${process.env.botId}>`, `<@&${process.env.mentionLeni}>`].includes(
		message,
	);
}

function 	isAskingInAnAllowedChannel(message) {
	return (
		process.env.ALLOWED_CHANNEL_IDS.includes(message?.channelId) ||
    process.env.ALLOWED_CHANNEL_IDS.includes(message?.channel?.parentId)
	);
}

function getQuestion(message) {
	return message.content.slice(23);
}

module.exports = {
	isAskingLeni,
	isAskingInAnAllowedChannel,
	getQuestion,
};
