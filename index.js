const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const { connectToDatabase } = require('./database/index');

// Import routes

const enrollRoutes = require('./routes/enrolledStudentRoutes'); 

app.use(bodyParser.json());

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Log requests
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// Routes

app.use('/api/enroll', enrollRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    connectToDatabase();
    console.log(`Server running on port ${PORT}`);
});
