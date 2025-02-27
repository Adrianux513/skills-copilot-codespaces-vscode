// Create web server
// 1. Create a web server
// 2. Handle requests
// 3. Return responses
// 4. Listen for incoming requests
// 5. Read the comments.json file
// 6. Write to the comments.json file
// 7. Append comments to the comments.json file

// 1. Create a web server
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

// 5. Read the comments.json file
function readComments() {
    const commentsPath = path.join(__dirname, 'comments.json');
    const commentsJSON = fs.readFileSync(commentsPath, 'utf8');
    return JSON.parse(commentsJSON);
}

// 6. Write to the comments.json file
function writeComments(comments) {
    const commentsPath = path.join(__dirname, 'comments.json');
    fs.writeFileSync(commentsPath, JSON.stringify(comments, null, 2));
}

// 2. Handle requests
app.get('/comments', (req, res) => {
    res.json(readComments());
});

// 7. Append comments to the comments.json file
app.post('/comments', express.json(), (req, res) => {
    const comments = readComments();
    comments.push(req.body);
    writeComments(comments);
    res.json({ status: 'success' });
});

// 3. Return responses
app.get('/', (req, res) => {
    res.send('Hello World');
});

// 4. Listen for incoming requests
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});