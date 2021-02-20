const express = require('express');
const app = express();

app.get('/', (request, response) => {
    return response.send('ok')
})


app.listen(3000);
