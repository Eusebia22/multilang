const express = require('express');
const path = require('node:path');
const fs = require('fs');
const { error } = require('node:console');
const app = express();

app.use(express.static('public'));

app.get('/data', (req,res)=>{
  const lang = req.query.lang || 'en';
  const filePath = path.join(__dirname,`local/${lang}.json`);
  if (fs.existsSync(filePath)){
    const data = JSON.parse(fs.readFileSync(filePath,'utf-8'));
    res.json(data);
    }else{
      res.status(404).json({error:'Language file not found'});
    }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});








// // Configure i18n for localization
// i18n.configure({
//   local: ['en', 'fr','es','ger'], // Supported languages
//   directory: path.join(__dirname, 'local'),
//   defaultLocale: 'en',   // Default language
//   queryParameter: 'lang' // Language switch through query string
// });

// Serve static HTML files
// app.use(express.static(path.join(__dirname, 'public')));

// Route for localization
// app.get('/translate', (req, res) => {
//   res.json({
//     greeting: res.__('greeting'),
//     welcome: res.__('welcome'),
//     title: res.__('title'),
//     subtitle1: res.__('subtitle1'),
//     Citem1: res.__('Citem1'),
//     Citem2: res.__('Citem2'),
//     Citem3: res.__('Citem3'),
//     Citem4: res.__('Citem4'),
//     Citem5: res.__('Citem5'),
//     subtitle2: res.__('subtitle2'),
//     Ditem1: res.__('Ditem1'),
//     Ditem2: res.__('Ditem2'),
//     Ditem3: res.__('Ditem3'),
//     Ditem4: res.__('Ditem4'),
//     bot_line: res.__('bot_line'),
   
//   });
// });

// app.get('/translate',(req,res) => {
//   const lang = req.query.lang || 'en';
//   const data = lang === 'fr' ? french : english;
//   res.json(data);
// });