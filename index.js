require('dotenv').config()
const express = require('express')
const targetUrl = process.env.TARGET_URL
console.log(targetUrl);
if (typeof targetUrl != 'string') {
    throw new Error(`$TARGET_URL must be set.`)
}
const app = express();

app.get('*', (req, res) => {
    res.redirect(targetUrl + req.url)
})

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));