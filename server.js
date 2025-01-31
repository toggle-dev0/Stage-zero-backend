const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get("/api/response", (req, res) => {
  const data = {
    email: "munachienabulele2505@gmail.com",
    currentDateTime: new Date().toISOString(),
    url: "someplace.com",
  };
  res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
