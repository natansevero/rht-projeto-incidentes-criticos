const { Pool } = require('pg');
// const connString = 'postgres://postgres:12345@localhost:5432/IncidentesCriticosRHT';

let single_connection;

module.exports = app => {
    if(!single_connection){
        const pool = new Pool({
            connectionString: process.env.DATABASE_URL
        })

        return pool.connect();
    }    
}