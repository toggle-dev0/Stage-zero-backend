const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/api/response", (req, res) => {
  const data = {
    email: "munachienabulele2505@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/toggle-dev0/Stage-zero-backend",
  };
  res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
