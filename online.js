const https = require('https');

const token = process.env.VK_TOKEN;

function setOnline() {
  const url = `https://api.vk.com/method/account.setOnline?v=5.199&voip=0&access_token=${token}`;
  
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log('Ответ VK API:', data);
    });
  }).on('error', (err) => {
    console.error('Ошибка запроса:', err.message);
  });
}

setOnline();

setTimeout(() => {
  setOnline();
}, 240000);
