import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const env = process.env.NODE_ENV;

function isProduction() {
  return env === "production";
}

//for example; you can use this value to user account timeout.
app.get('/', (req, res) => {
  let TimeOut = 0;

  if (isProduction()) {
    TimeOut = 20;
    res.send("Your app is running in production mode. The settings are getting ready. Your timeout value: " + TimeOut);
  } else {
    TimeOut = 10;
    res.send("Your app is running in other mode. The settings are getting ready. Your timeout value: " + TimeOut);
  }
});

const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
