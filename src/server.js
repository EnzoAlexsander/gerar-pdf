const express = require('express');
const ejs = require('ejs');
const path = require('path');
const pdf = require('html-pdf');
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
    ejs.renderFile(filePath, { passengers }, (error, html) => {
        if (error) {
            return response.send('Erro na leitura do arquivo');
        }

        const options = {
            height: '11.25in',
            width: '8.5in',
            header: {
                height: '20mm',
            },
            footer: {
                height: '20mm',
            },
        };

        //criar o pdf
        pdf.create(html, options).toFile('report.pdf', (error, data) => {
            if(error) {
                return response.send('Erro ao gerar o PDF')
            }

            // eviar para o navegador
            return response.send(html);
        })
    });
});

app.listen(3000);
