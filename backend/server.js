const express = require("express");
const cors = require("cors");
const carRoutes = require("./routes/cars");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
  }),
);
app.use(express.json());

app.use("/api/cars", carRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
