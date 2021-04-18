# week4 MicroBlog EM2C

<img style="background-color: white" src="https://i.imgur.com/yVgcQyr.png">

---

## Roles

Evgeny - User
Maryam - Quality
Mariya - Deployment
Craig - Facilitation

![](https://media.giphy.com/media/l0ceuNvw1wI1591B1x/giphy.gif)

---

## No Styling!

![](https://media.giphy.com/media/9fulYnA7MR1oQ/giphy.gif)

---

<img style="float: right;" src="https://media.giphy.com/media/UuZRzEoqTlV9yzooAZ/giphy.gif">

### "It is important to learn, even if you cannot finish the project"
#### _The mentors_

---

Whednesday - together
Thursday - split in pairs/1 hour 

![](https://media.giphy.com/media/PynI5JeYJR7Ow/giphy.gif)

---

## How we came up with our name:

We didn't!

We followed the instructions and only worked on the backend, but by the time it came to designing we still hadn't thought of anything so we stuck with MicroBlog.

Micro > Microbes > Magnifying glass...

The rest fell into place!

---

## Main page

We have a big text box to make sure that it's obvious to the user that the bulk of the message should go in here, also so that all the text is visible while being input.

We were **not** able to do this with an "<input>" tag as they are very hard to style.

We had to use a "<textarea>" tag instead, which we were able to alter easily and still able to make accessible.


---

![](https://i.imgur.com/Ev8mDhG.jpg)

---

## Articles page

The default layout of html worked perfectly for such a simple page so we didn't have to do much for responsivity. 

We just set a min-width and percentage width for some things such as the ul and body and let the browser do the rest.

No grid or flex so we could just put our feet up and have a cup of tea 

---

<img src="https://i.imgur.com/Vsfez2m.png" height=600>

---


## Project board

https://github.com/fac21/week4-EM2C/projects/1

---

# Demo

https://whispering-sierra-27034.herokuapp.com/

---

## User stories

- Delete my posts so no one can see them :white_check_mark:
- - Delete only my own posts :x:
- Navigate between pages :white_check_mark:

---

# we've learned (Maryam)

![](https://i.imgur.com/BhYpm6Y.gif)

---

![](https://i.imgur.com/56yaKt7.png)

---

![](https://i.imgur.com/XlbF6aU.png)


---


```javascript
it("can delete article", () => {
    cy.visit("http://localhost:3000");
    cy.get("#message").type("information");
    cy.get("#name").type("my name");
    cy.get('form').submit();
    cy.visit("http://localhost:3000/articles");
    cy.get("p").contains("information")
    cy.get("button[value='information']").click();
    cy.get("p").contains("information").should('not.exist');
    cy.get("span").contains("my name").should('not.exist');
});
```

---

![](https://i.imgur.com/pwCWNJD.gif)

---

![](https://i.imgur.com/2eVcPox.png)

---

![](https://i.imgur.com/faXYg6b.png)

---

***Heroku***

![](https://media.giphy.com/media/jok2gx7IQJZLi/giphy.gif)

---

```
const PORT = process.env.PORT || 3000
```

```
"scripts": {
    "test": "cypress open",
    "start": "node server.js",
    "dev": "nodemon server.js"
}
```


---


--- 


![](https://i.imgur.com/JYh7Act.png)


---

![](https://media.giphy.com/media/XI2AyD3UYA0H9IWdKn/giphy.gif)

---

Thanks to Jo and Rihards we found a solution!!

![](https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif)

---

```killall node```

in bash would kill all NodeJS instances running on your machine

---

Thanks to issues raised to us we learned how to separate tests instead of having just one file:

![](https://i.imgur.com/iMXAjlB.png)

---

And how to delete node_modules pushed to gitHub before creating .gitignore file:
```
git rm -r --cached .
git add .
git commit -m "remove gitignore files"
git push
```

---

![](https://media.giphy.com/media/fxI1G5PNC5esyNlIUs/giphy.gif)

---


