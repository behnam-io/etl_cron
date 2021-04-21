const cron = require('node-cron');
const express = require('express');

app = express();
// Schedule tasks to be run on the server.
// six * means every second; they are crontab syntax
// replace * with numbers to replace that time part
cron.schedule('0 19 * * *', function() {
    console.log('running a task every day at 19:00');
  });
app.listen(3000);

