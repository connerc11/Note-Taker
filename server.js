const express = require('express');
const HTMLroutes = require('./routes/html.js');
const apiRoutes = require('./routes/api.js')
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static("public"));
app.use(HTMLroutes);
app.use(apiRoutes);
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });

