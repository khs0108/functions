// index.js

module.exports = async function (context, req) {
    context.res = {
        // Set the Content-Type header to application/json
        headers: {
            'Content-Type': 'application/json'
        },
        // Return the current server time in JSON format
        body: {
            serverTime: new Date().toISOString()
        }
    };
};
