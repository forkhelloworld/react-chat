const { Message, Chat } = require("../models");

module.exports.addMessage = async (message) => {
  try {
    const { body, chat, author, imagePath } = message;
    // Треба передбачити відсутність картинок як таких

    const newMessageInstanse = await Message.create({
      body,
      chat,
      author,
      imagePath,
    });

    const chatInstanse = await Chat.findById(chat);

    chatInstanse.messages.push(newMessageInstanse);
    await chatInstanse.save();

    return newMessageInstanse;
    //    res.status(201).send({data: newMessageInstanse});
  } catch (error) {}
};
