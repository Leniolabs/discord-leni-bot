function isAskingLeni(message) {
  return [`<@${process.env.botId}>`, `<@&${process.env.mentionLeni}>`].includes(
    message,
  );
}

// eslint-disable-next-line no-unused-vars
function isAskingInAllowedChannel(message) {
  return (
    process.env.CLASSROOM_IDS.includes(message?.channelId) ||
    process.env.CLASSROOM_IDS.includes(message?.channel?.parentId)
  );
}

function getQuestion(message) {
  return message.content.slice(23);
}

function warningMessageLang(lang) {
  const dictionary = {
    en: "🤖I’m an Artificial Intelligence powered chatbot here to help, but please note that I may provide inaccurate answers at times. So, double-check any information I give you to be safe! 😅🔍",
    es: "🤖Soy un chatbot de inteligencia artificial para ayudar, pero ten en cuenta que a veces puedo proporcionar respuestas inexactas. ¡Así que verifique dos veces cualquier información que te dé para estar seguro! 😅🔍",
    fr: "🤖Je suis un chatbot d'intelligence artificielle pour aider, mais sachez que je peux parfois fournir des réponses inexactes. Alors, vérifiez deux fois les informations que je vous donne pour être en sécurité! 😅🔍",
    it: "🤖Sono un chatbot di intelligenza artificiale per aiutarti, ma tieni presente che a volte posso fornire risposte inesatte. Quindi, controlla due volte le informazioni che ti do per essere al sicuro! 😅🔍",
    pt: "🤖Sou um chatbot de inteligência artificial para ajudar, mas observe que posso fornecer respostas imprecisas às vezes. Então, verifique duas vezes as informações que eu lhe der para ficar seguro! 😅🔍",
  };
  return dictionary[lang] || dictionary.en;
}

module.exports = {
  isAskingLeni,
  isAskingInAllowedChannel,
  getQuestion,
  warningMessageLang,
};
