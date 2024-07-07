const OpenAI = require("openai");
const openai = require("../Config/openAi");
const Chat = require("../Model/chatModel");

const getMessages = async (req, res) => {
  try {
    const messages = await Chat.find({}, "text type").sort({ timestamp: 1 });
    console.log(messages);
    res.json(messages);
  } catch (error) {
    console.error(error.message);
  }
};

const postMessage = async (req, res) => {
  try {
    const { chats } = req.body;
    console.log("This is chats from body", chats);
    const chatCompletion = await openai.completions.create({
      model: "gpt-3.5-turbo",
      prompt: chats,
      max_tokens: 150,
    });
    const chatResponse = chatCompletion.data.choices[0].text.trim();
    const messageFromBot = new Chat({
      text: chatResponse,
      type: "bot",
    });
    await messageFromBot.save();
    const messageToBot = new Chat({
      text: chats,
      type: "user",
    });
    await messageToBot.save();
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { getMessages, postMessage };
