'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
    
      if (req.body.text === undefined || req.body.locale === undefined) return res.json({ error: "Required field(s) missing" });

      if (req.body.text.match(/^\s*$/)) return res.json({ error: 'No text to translate' });

      if (req.body.locale !== "american-to-british" && req.body.locale !== "british-to-american") {
        return res.json({ error: "Invalid value for locale field" });
      }

      let result = translator.translate(req.body.text, req.body.locale);

      res.json({
        text: req.body.text,
        translation: result
      });
      
    });
};
