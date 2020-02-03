import fetch from 'node-fetch';

it('requests the app and check if it is an html document that contains the app', () => {
  fetch('http://localhost:8009/')
    .then(response => response.text())
    .then(nodeText => {
      const reg = RegExp(/<[^>]*>|main.js/g);
      const found = reg.test(nodeText)
      expect(found).toBe(true);
    })
})

