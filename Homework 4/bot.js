const Discord = require('discord.js');
const client = new Discord.Client();
const AWS = require('aws-sdk');


const botToken = process.env.DISCORD_BOT_TOKEN;

// AWS Lambda setup
const lambda = new AWS.Lambda();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', async (message) => {
    if (message.content.startsWith('!generate-doge')) {
        // Extract text from the message content
        const text = message.content.substring('!generate-doge'.length).trim();

        // Prepare the payload for your Lambda function
        const params = {
            FunctionName: 'YOUR_LAMBDA_FUNCTION_NAME', // Replace with your Lambda function's name or ARN
            InvocationType: 'RequestResponse',
            Payload: JSON.stringify({
                queryStringParameters: {
                    text: text,
                },
            }),
        };

        try {
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

// Log in to Discord
client.login(botToken);
