const express = require("express");
const PORT = process.env.PORT || 3000;
const router = require("./routes/lists");
const app = express();
app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
