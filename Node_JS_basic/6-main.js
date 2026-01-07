const app = require('./6-http_express');

const PORT = 1245;

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
