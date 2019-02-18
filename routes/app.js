var express = require('express'),
    app     = express()

app.get('/id', (req, res) => {

    res.status(200).json({
        success: true,
        message: 'Petición correcta'
    })
})

module.exports = app