let express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.set("views", __dirname + "/views")

const pages = [
    { route: '/', title: 'Home', content: 'Welcome to the homepage!' },
    { route: '/about', title: 'About', content: 'Learn more about us.' },
    { route: '/contact', title: 'Contact', content: 'Get in touch with us.' }
    ];

app.get('/', (req, res) => {
  const page = pages.find(page => page.route ==="/");
  res.render("home", {page});
});

app.get('/about', (req, res) => {
    const page = pages.find(page => page.route ==="/about");
    res.render("about", {page});
  });

app.get('/contact', (req, res) => {
const page = pages.find(page => page.route ==="/contact");
res.render("contact", {page});
});


app.listen(4000, () => console.log('Example app listening on port 4000!'));