const Discord = require('discord.js');
const client = new Discord.Client();
const AWS = require('aws-sdk');

// Your Discord bot token
const botToken = process.env.DISCORD_BOT_TOKEN;

// AWS Lambda setup
const lambda = new AWS.Lambda();

client.on('message', async (message) => {
    if (message.content.startsWith('!generate-doge')) {
        try {
            // Prepare the payload for your Lambda function
            const params = {
                FunctionName: 'your-lambda-function-name',
                InvocationType: 'RequestResponse',
                Payload: JSON.stringify({
                    queryStringParameters: {
                        text: 'your text here', // Provide the text as needed
                    },
                }),
            };

            // Invoke the Lambda function
            const result = await lambda.invoke(params).promise();
            const response = JSON.parse(result.Payload);

            // Send the response to the Discord channel
            message.channel.send(response.text);
        } catch (error) {
            console.error('Error generating Doge meme:', error);
        }
    }
});

client.login(botToken);
