const requestHandler = (req, res) => {
    const URL = req.url;
    const METHOD = req.method;

    if (URL === '/') {
        res.setHeader('Content-Type', 'html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username" /><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (URL === '/users') {
        res.setHeader('Content-Type', 'html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
        res.write('</html>');
        return res.end();
    }

    if (URL === '/create-user' && METHOD === 'POST') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(`The parsed body is: ${parsedBody}`);

            username = parsedBody.split('=')[1];
            console.log(`The username entered is: ${username}`);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
}

exports.handler = requestHandler;