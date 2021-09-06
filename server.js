import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;
app.listen(PORT, (req, res) => {
  console.log(`Connected to port ${PORT}`);
});
