const express = require("express");
const request = require("request");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/forismatic", (req, res) => {
  //console.log(req);
  const query = req.query;
  console.log(Object.keys(query));
  const queryStrs = Object.keys(query).map((key) => `${key}=${query[key]}`);
  console.log(queryStrs.join(""));
  const search = `?${queryStrs.join("&")}`;
  request(
    { url: `http://api.forismatic.com/api/1.0/${search}` },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: err.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
