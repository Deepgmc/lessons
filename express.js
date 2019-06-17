const express = require('express'),
    expr_srv = express(),
    port = 8080;

expr_srv.use(function(req, res, next) {
    res.charset = 'utf-8';
    next();
});

expr_srv.use(express.static('public/'));

const server = expr_srv.listen(port, function(){
    console.log('Server started on port ' + port);
})

expr_srv.get('/tt', function (req, res) {
    res.send('some test string')
})