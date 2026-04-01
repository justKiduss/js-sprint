import pool from "../config/db";
import { reviewModel } from "./reviewModel";
export function userModel(){
    return{
        getall:async()=>{
            const res=await pool.query('SELECT * FROM users');
            return res.rows;
        },
        getById:async(id)=>{
            const res=await pool.query('SELECT * FROM users WHERE id= $1',[id]
            );
            return res.rows[0];
        },
        create:async(data)=>{
            const {username,email,password,avatar}=data;
            const query=`INSERT INTO users (username,email,password,avatar)
                VALUES ($1, $2, $3, $4) RETURNING *`;
            const values=[username,email,password,avatar];
            const res=await pool.query(query,values);
            return res.rows[0];
        },
        update:async (id,data)=>{
            const {username,email,password,avatar}=data;
            const query=`UPDATE users SET username=$1, email=$2, password=$3, avatar=$4, updated_at=NOW() WHERE id=$5 RETURNING *`;
            const values=[username,email,password,avatar,id];
            const res=await pool.query(query,values);
            return res.rows[0];
        },
        delete:async (id)=>{
            const res=await pool.query(
                `DELETE FROM users WHERE id=$1 RETURNING *`,[id]
            );
            return res.rows[0];
        }

    }
}

const userModel=userModel;
export default userModel;
