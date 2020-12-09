const mqtt = require('mqtt');
const dotenv = require('dotenv')
const { generateRequest } = require('./requestGenerator');
const { stringify } = require('querystring');

const root = 'dentistimo/'

dotenv.config();
const client = mqtt.connect({
    host: process.env.MQTT_HOST,
    port: process.env.MQTT_PORT
});

client.on('connect', (err) => {
    if (err.errorCode === -1) return console.error(err);
    client.subscribe(`${root}bookingresponse`);
    console.log('>> RequestGenerator subscribed...');
    publishrequests();
});

function publishrequests() {
    for(var i = 0; i <= 100; i++) {
        var newRequest = generateRequest();
        client.publish(`${root}appointments`, JSON.stringify(newRequest));
    }
}