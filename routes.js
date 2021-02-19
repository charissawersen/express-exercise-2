const express = require('express');
const routes = express.Router();
const fs = require('fs');

// Returns the path to the word list which is separated by `\n`
const wordListPath = require('word-list');

const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
//=> […, 'abmhos', 'abnegate', …]

routes.get("/", (req, res) => {
    const startsWith = req.query.startsWith; 

    if (startsWith) {
        const newArray = wordArray.filter((words) => {
            return words.startsWith(startsWith); 
        })
        res.json(newArray); 
    }
    res.status(200).json(wordArray);
});



module.exports = routes; 