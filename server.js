const express = require('express');
const cors = require('cors')
const bcrypt = require ('bcrypt');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const passwordMatch = await bcrypt.compare(password, '$2b$08$99BBTMzh7y0T1M8fKkqWsuUJR0t/uHIk/veG8JlE/QKWGhtwZy4Ey');

  if (passwordMatch && username.toLowerCase() === 'hugo') {
    return res.send({
      token: 'test123'
    }); 
  } else {
    return res.status(401).send();
  }
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));