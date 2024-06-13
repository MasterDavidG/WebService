// Import the MariaDB library
const mariadb = require('mariadb');

// Create a connection pool
const pool = mariadb.createPool({
  host: 'database',  // Name of the MariaDB service as defined in docker-compose.yml
  user: 'your_database_user',
  password: 'your_database_password',
  database: 'your_database_name',
  connectionLimit: 5
});

// Function to get a connection from the pool
async function getConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to MariaDB!');
    return connection;
  } catch (err) {
    console.error('Unable to connect to MariaDB:', err);
    throw err;
  }
}

// Export the pool and the connection function
module.exports = {
  pool,
  getConnection
};
