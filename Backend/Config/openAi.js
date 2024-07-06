const OpenAI = require("openai");
const dotenv = require("dotenv");
dotenv.config();

const openai = new OpenAI({
  apikey: process.env.OPENAI_API_KEY,
});

module.exports = openai;
