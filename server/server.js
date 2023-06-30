const express = require("express");
// const puppeteer = require("puppeteer");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Custom Middleware
// const customMiddleware = async (req, res, next) => {
//   // Perform some actions or checks
//   const browser = await puppeteer.launch({
//     headless: "new",
//   });
//   const page = await browser.newPage();
//   await page.goto("https://cukr.city");
//   const [el] = await page.$x('//*[@id="menu-item-36120"]/a');
//   const text = await page.evaluate((elements) => elements.textContent, el);
//   browser.close();
//   console.log("Custom Middleware executed", text);
//   // Call the next middleware
//   next();
// };

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

console.log(process.env.PORT);
