const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

const translateText = new Translator();

suite('Unit Tests', () => {

  test('Translate Mangoes are my favorite fruit. to British English', () => {
    let inputText = "Mangoes are my favorite fruit.";
    let inputLocale = "american-to-british";
    let result = translateText.translate(inputText, inputLocale);
    assert.equal(result, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
  });

  test('Translate I ate yogurt for breakfast. to British English', () => {
    let inputText = "I ate yogurt for breakfast.";
    let inputLocale = "american-to-british";
    let result = translateText.translate(inputText, inputLocale);
    assert.equal(result, 'I ate <span class="highlight">yoghurt</span> for breakfast.');
  });

  test(`Translate We had a party at my friend's condo. to British English`, () => {
    let inputText = "We had a party at my friend's condo.";
    let inputLocale = "american-to-british";
    let result = translateText.translate(inputText, inputLocale);
    assert.equal(result, `We had a party at my friend's <span class="highlight">flat</span>.`);
  });
  
  test('Translate Can you toss this in the trashcan for me? to British English', () => {
    let inputText = "Can you toss this in the trashcan for me?";
    let inputLocale = "american-to-british";
    let result = translateText.translate(inputText, inputLocale);
    assert.equal(result, 'Can you toss this in the <span class="highlight">bin</span> for me?');
  });

  test('Translate The parking lot was full. to British English', () => {
    let inputText = "The parking lot was full.";
    let inputLocale = "american-to-british";
    let result = translateText.translate(inputText, inputLocale);
    assert.equal(result, 'The <span class="highlight">car park</span> was full.');
  });

  test('Translate Like a high tech Rube Goldberg machine. to British English', () => {
    let inputText = "Like a high tech Rube Goldberg machine.";
    let inputLocale = "american-to-british";
    let result = translateText.translate(inputText, inputLocale);
    assert.equal(result, 'Like a high tech <span class="highlight">Heath Robinson device</span>.');
  });

  test('Translate To play hooky means to skip class or work. to British English', () => {
    let inputText = "To play hooky means to skip class or work.";
    let inputLocale = "american-to-british";
    let result = translateText.translate(inputText, inputLocale);
    assert.equal(result, 'To <span class="highlight">bunk off</span> means to skip class or work.');
    
  });

  test('Translate No Mr. Bond, I expect you to die. to British English', () => {
    let inputText = "No Mr. Bond, I expect you to die.";
    let inputLocale = "american-to-british";
    let result = translateText.translate(inputText, inputLocale);
    assert.equal(result, 'No <span class="highlight">Mr</span> Bond, I expect you to die.');
  });

  test('Translate Dr. Grosh will see you now. to British English', () => {
    let inputText = "Dr. Grosh will see you now.";
    let inputLocale = "american-to-british";
    let result = translateText.translate(inputText, inputLocale);
    assert.equal(result, '<span class="highlight">Dr</span> Grosh will see you now.');
  });

  test('Translate Lunch is at 12:15 today. to British English', () => {
    let inputText = "Lunch is at 12:15 today.";
    let inputLocale = "american-to-british";
    let result = translateText.translate(inputText, inputLocale);
    assert.equal(result, "Lunch is at <span class=\"highlight\">12.15</span> today.");
  });

  test('Translate We watched the footie match for a while. to American English', () => {
    let inputText = "We watched the footie match for a while.";
    let inputLocale = "british-to-american";
    let result = translateText.translate(inputText, inputLocale);
    assert.equal(result, 'We watched the <span class="highlight">soccer</span> match for a while.');
  });

  test('Translate Paracetamol takes up to an hour to work. to American English', () => {
    let inputText = "Paracetamol takes up to an hour to work.";
    let inputLocale = "british-to-american";
    let result = translateText.translate(inputText, inputLocale);
    assert.equal(result, '<span class="highlight">Tylenol</span> takes up to an hour to work.');
  });

  test('Translate First, caramelise the onions. to American English', () => {
    let inputText = "First, caramelise the onions.";
    let inputLocale = "british-to-american";
    let result = translateText.translate(inputText, inputLocale);
    assert.equal(result, 'First, <span class="highlight">caramelize</span> the onions.');
  });

  test('Translate I spent the bank holiday at the funfair. to American English', () => {
    let inputText = "I spent the bank holiday at the funfair.";
    let inputLocale = "british-to-american";
    let result = translateText.translate(inputText, inputLocale);
    assert.equal(result, 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.');
  });

  test('Translate I had a bicky then went to the chippy. to American English', () => {
    let inputText = "I had a bicky then went to the chippy.";
    let inputLocale = "british-to-american";
    let result = translateText.translate(inputText, inputLocale);
    assert.equal(result, 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.');
  });

  test(`Translate I've just got bits and bobs in my bum bag. to American English`, () => {
    let inputText = "I've just got bits and bobs in my bum bag.";
    let inputLocale = "british-to-american";
    let result = translateText.translate(inputText, inputLocale);
    assert.equal(result, `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`);
  });

  test('Translate The car boot sale at Boxted Airfield was called off. to American English', () => {
    let inputText = "The car boot sale at Boxted Airfield was called off.";
    let inputLocale = "british-to-american";
    let result = translateText.translate(inputText, inputLocale);
    assert.equal(result, 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.');
  });

  test('Translate Have you met Mrs Kalyani? to American English', () => {
    let inputText = "Have you met Mrs Kalyani?";
    let inputLocale = "british-to-american";
    let result = translateText.translate(inputText, inputLocale);
    assert.equal(result, 'Have you met <span class="highlight">Mrs.</span> Kalyani?');
  });

  test(`Translate Prof Joyner of King's College, London. to American English`, () => {
    let inputText = "Prof Joyner of King's College, London.";
    let inputLocale = "british-to-american";
    let result = translateText.translate(inputText, inputLocale);
    assert.equal(result, `<span class="highlight">Prof.</span> Joyner of King's College, London.`);
  });

  test(`Translate Tea time is usually around 4 or 4.30. to American English`, () => {
    let inputText = "Tea time is usually around 4 or 4.30.";
    let inputLocale = "british-to-american";
    let result = translateText.translate(inputText, inputLocale);
    assert.equal(result, 'Tea time is usually around 4 or <span class="highlight">4:30</span>.');
  });

  test(`Highlight translation in Mangoes are my favorite fruit.`, () => {
    let inputText = "Mangoes are my favorite fruit.";
    let inputLocale = "american-to-british";
    let result = translateText.translate(inputText, inputLocale);
    assert.equal(result, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
  });

  test('Highlight translation in I ate yogurt for breakfast.', () => {
    let inputText = "I ate yogurt for breakfast.";
    let inputLocale = "american-to-british";
    let result = translateText.translate(inputText, inputLocale);
    assert.equal(result, 'I ate <span class="highlight">yoghurt</span> for breakfast.');
  });

  test('Highlight translation in We watched the footie match for a while.', () => {
    let inputText = "We watched the footie match for a while.";
    let inputLocale = "british-to-american";
    let result = translateText.translate(inputText, inputLocale);
    assert.equal(result, 'We watched the <span class="highlight">soccer</span> match for a while.');
  });

  test('Highlight translation in Paracetamol takes up to an hour to work.', () => {
    let inputText = "Paracetamol takes up to an hour to work.";
    let inputLocale = "british-to-american";
    let result = translateText.translate(inputText, inputLocale);
    assert.equal(result, '<span class="highlight">Tylenol</span> takes up to an hour to work.');
  });
  
});
