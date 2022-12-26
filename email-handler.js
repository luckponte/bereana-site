require('dotenv').config();
const axios = require(axios);

async function sendEmail(name, email, subject, message) {
    const data = JSON.stringify({
        "Messages": [{
            "From": { "Email": "<YOUR EMAIL>", "Name": "<YOUR NAME>" },
            "To": [{ "Email": email, "Name": name }],
            "Subject": subject,
            "TextPart": message
        }]
    });

    const config = {
        method: 'post',
        url: 'https://api.mailjet.com/v3.1/send',
        data: data,
        headers: { 'Content-Type': 'application/json' },
        auth: { username: process.env.EMAIL_API_KEY, password: process.env.EMAIL_API_PASS },
    };

    return axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

}