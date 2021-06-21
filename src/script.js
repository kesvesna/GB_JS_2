const express = require("express");
const bodyParser = require('body-parser');
const fs = require("fs");
var cors = require('cors');

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(express.static("."));
app.use(cors())

app.listen(3000, () => {
  console.log("Server is running at port 3000!!");
});

app.get('/cartData', (req, res) => {
    fs.readFile('./src/cart.json', 'utf-8', (err,data) => {
      if(err){
        res.send(err);
      }
        res.send(data)
    })
})

app.get("/catalogData", (req, res) => {
  fs.readFile("./src/catalogData.json", "utf-8", (err, data) => {
    if(err){
      res.send(err);
    }
    res.send(data);
  });
});

app.post("/addToCart", (req, res) => {
  fs.readFile("./src/cart.json", "utf-8", (err, data) => {
    if (err) {
      res.send(err);
    } else {

      const cart = JSON.parse(data);
      const item = req.body;
      let pushToTheCart = true;

      cart.forEach(function(product){
        if(product.id_product === item.id_product){
          product.value += 1;
          pushToTheCart = false;
        }
      })

      if(pushToTheCart){
        cart.push(item);
      }

      fs.writeFile("./src/cart.json", JSON.stringify(cart), (err) => {
        if (err) {
          res.send(err);
        } else {
          res.send(cart);
        }
      });
    }
  });
});

app.post("/removeFromCart", (req, res) => {
  fs.readFile("./src/cart.json", "utf-8", (err, data) => {
    if (err) {
      res.send(err);
    } else {

      const cart = JSON.parse(data);
      const item = req.body;

      cart.forEach(function(product){
        if(product.id_product === item.id_product){
          let idx = cart.indexOf(product);
          if(idx > -1){
            cart.splice(idx, 1);
          }
        }
      })

      fs.writeFile("./src/cart.json", JSON.stringify(cart), (err) => {
        if (err) {
          res.send(err);
        } else {
          res.send(cart);
        }
      });
    }
  });
});

app.post("/addOne", (req, res) => {
  fs.readFile("./src/cart.json", "utf-8", (err, data) => {
    if (err) {
      res.send(err);
    } else {

      const cart = JSON.parse(data);
      const item = req.body;

      cart.forEach(function(product){
        if(product.id_product === item.id_product){
          product.value += 1;
        }
      })

      fs.writeFile("./src/cart.json", JSON.stringify(cart), (err) => {
        if (err) {
          res.send(err);
        } else {
          res.send(cart);
        }
      });
    }
  });
});

app.post("/minusOne", (req, res) => {
  fs.readFile("./src/cart.json", "utf-8", (err, data) => {
    if (err) {
      res.send(err);
    } else {

      const cart = JSON.parse(data);
      const item = req.body;

      cart.forEach(function(product){
        if(product.id_product === item.id_product){
          if(product.value > 1){
            product.value -= 1;
          }
        }
      })

      fs.writeFile("./src/cart.json", JSON.stringify(cart), (err) => {
        if (err) {
          res.send(err);
        } else {
          res.send(cart);
        }
      });
    }
  });
});
