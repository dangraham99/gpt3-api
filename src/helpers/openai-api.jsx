import { Configuration, OpenAIApi } from 'openai';


export async function getResponse(prompt) {

    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 150,


    }).then((response) => {
        return response.data.choices[0].text
    })
        .catch((e) => {
            return e.message
        });

    return completion.trim()

}


