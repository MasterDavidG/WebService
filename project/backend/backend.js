const express = require('express');
const { getConnection } = require('./db'); // Import the database connection function

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Example route to test the database connection
app.get('/test-db', async (req, res) => {
  try {
    // Get a connection from the pool
    const connection = await getConnection();
    
    // Perform a simple query
    const rows = await connection.query('SELECT 1 + 1 AS result');
    console.log(rows); // Logs the query result

    // Send the result as the response
    res.json({ message: 'Database connected successfully!', result: rows[0].result });
    
    // Release the connection back to the pool
    connection.release();
  } catch (err) {
    console.error('Error connecting to the database:', err);
    res.status(500).json({ error: 'Failed to connect to the database' });
  }
});

app.listen(port, () => {
  console.log(`Backend service running on port ${port}`);
});
