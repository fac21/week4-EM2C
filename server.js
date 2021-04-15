const express = require("express");
const articles = require('./articles');
const staticHandler = express.static("public")
const server = express();

server.use(staticHandler)

server.get("/", (request, response) => {

    const html = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <link rel="stylesheet" href="main-style.css">
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>microblog</title>
        </head>
        <body>
            <img src="micro-logo.png" alt="Micro Blog Logo">
            <form method="POST">
                <label for = 'message'>Sample information:</label>
                <input id = 'message' name="message" placeholder = 'message'/>

                <label for = 'name'>Specimen name:</label>
                <input id = 'name' name="name" placeholder = 'name'/>

                <button>Submit</button>
            </form>
            <input type="button" class="nav-button" onclick="location.href='http://localhost:3000/articles';" value="Navigate to Articles" />
        </body>
</html>
    `
  response.send(html);
});

server.get('/articles', (request, response) => {
    
    let items = "";
    for (const article of Object.values(articles)) {
        
        //   items += `<li>${article.message} ${article.name}</li>`;

        items += `

        <li class="article">
        <div class="filo">~</div><div class="filo">~</div><div class="filo">~</div><div class="filo">~</div><div class="filo">~</div><div class="filo">~</div>
        <div class="nucleus"></div>
        <p class="article-message">"${article.message}"</p>

          <form class="deletform" action="/delete-article" method="POST" style="display: inline;">

            <button name="name" value="${article.message}" aria-label="Delete ${article.message}">
              &times;
            </button>
            <span class="article-name"><i>- ${article.name}</i></span>
          </form>

        </li>`;

        
      }

    const html = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <link rel="stylesheet" href="articles-style.css">
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>microblog</title>
        </head>
        <body>
            <img src="micro-logo.png" alt="Micro Blog Logo">
            <nav>
            <input type="button" class="nav-button" onclick="location.href='http://localhost:3000';" value="Back to Input Page" />
            </nav>

            <ul>${items}</ul>
        </body>
</html>
    `
  response.send(html);
});


const bodyParser = express.urlencoded({ extended: false });

server.post("/", bodyParser, (request, response) => {
    const newMessage = request.body;
    //const newName = request.body;
    console.log(newMessage);
    const message = newMessage.message.toLowerCase();
    //const name = newMessage.name.toLowerCase();
    articles[message] = newMessage;
    //articles[name] = newName;
    //console.log({articles});
    response.redirect("/articles");
});

// server.post("/", bodyParser, (request, response) => {
//     const newMessage = request.body;
//     console.log({newMessage});
//     const message2 = newMessage.message.toLowerCase();
//     //const name2 = newMessage.name.toLowerCase();
//    // articles[message] = message2;
//    // articles[name] = name2;
//     response.redirect("/articles");
// });

/***************** DELET************************ */

server.post("/delete-article", bodyParser, (request, response) => {
    const nameToDelete = request.body.name.toLowerCase();
    delete articles[nameToDelete];
    response.redirect("/articles");
  });

/***************************************** */


const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));