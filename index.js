var express = require('express');
var middleware = require('swagger-express-middleware');
 
var app = express();
 
middleware('swagger-ui/dist/zipskee-v1.swagger.yaml', app, function(err, middleware) {
    // Add all the Swagger Express Middleware, or just the ones you need. 
    // NOTE: Some of these accept optional options (omitted here for brevity) 
    app.use(
        middleware.metadata(),
        middleware.CORS(),
        middleware.files(),
        middleware.parseRequest(),
        middleware.validateRequest(),
        middleware.mock()
    );
    app.use('/swagger', express.static('./swagger-ui/dist'));
    app.listen(8000, function() {
        console.log('The zipskee sample is now running at http://localhost:8000');
    });
});
