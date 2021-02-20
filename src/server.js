const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();

const passengers = [
    {
        name: 'Enzo',
        flightNumber: 7859,
        time: '18h00',
    },
    {
        name: 'Alessandra',
        flightNumber: 7859,
        time: '18h00',
    },
    {
        name: 'Fred',
        flightNumber: 7859,
        time: '18h00',
    },
    {
        name: 'Rambo',
        flightNumber: 7859,
        time: '18h00',
    },
];

app.get('/', (request, response) => {
    const filePath = path.join(__dirname, 'print.ejs');
    ejs.renderFile(filePath, { passengers });

    return response.send(passengers);
});

app.listen(3000);
