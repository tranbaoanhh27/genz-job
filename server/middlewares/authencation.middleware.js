'use strict';
const middleware = (req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );

    next();
}

module.exports = middleware;