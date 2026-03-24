import pg from "pg";
import dotenv from 'dotenv';

// This line reads your .env file and attaches the variables to process.env
dotenv.config({path:'../.env'});

const {Pool} =pg;

const pool=new Pool({
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT,
});

pool.on('connect',()=>{
    console.log('✅ PostgreSQL Connected Successfully to Movie-Site');
})

pool.on('error', (err) => {
    console.error('❌ Unexpected error on idle client', err);
    process.exit(-1);
});

export default pool;


// Temporary Test Logic
const testConnection = async () => {
    try {
        const res = await pool.query('SELECT NOW()');
        console.log('Database Time:', res.rows[0].now);
        console.log('Contract 1 Verified: Connection is alive.');
    } catch (err) {
        console.error('Contract 1 Failed:', err.message);
    }
};

testConnection();