const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const getGPTResponse = async (question) => {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Answer the question strictly based on the content provided like a helpful assistant",
      },
      { role: "assistant", content: question },
      { role: "user", content: question },
    ],
  });

  console.log(completion["data"]["choices"][0]["message"]["content"]);
  return completion["data"]["choices"][0]["message"]["content"];
};

export { getGPTResponse };