const express = require("express");

const server = express();

server.get("/", (request, response) => {

    const bodyParser = express.urlencoded({ extended: false });

    server.post("/add-dog", bodyParser, (request, response) => {
        const newMessage = request.body;
        const message = newMessage.message.toLowerCase();
        messages[message] = newMessage;
        response.redirect("/");
});
    console.log(message);
    let items = "";

    const html = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>microblog</title>
        </head>
        <body>
            <h1>#</h1>
            <form method="POST">
                <label for = 'message'>Enter your thoughts</label>
                <input id = 'message' name="message" placeholder = 'message'/>

                <label for = 'name'>Name</label>
                <input id = 'name' name="name" placeholder = 'name'/>

                <button>Submit</button>
            </form>
            <ul>${items}</ul>
        </body>
</html>
    `
  response.send(html);
});

const PORT = 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));