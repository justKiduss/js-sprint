import pool from "../config/db.js";
export function reviewModel(){

    return{
        getAll:async ()=>{
            const res=await pool.query('SELECT * FROM reviews');
            return res.rows;
        },
        getById:async (id)=>{
            const res=await pool.query(
                `SELECT * FROM reviews WHERE id = $1`, [id]
            );
            return res.rows[0];
        },
        getReviewsByMovieId:async (movie_id)=>{
            const res=await pool.query(
                `SELECT * FROM reviews WHERE movie_id=$1`,[movie_id]
            );
            return res.rows;
        },
        create:async (data)=>{
            const {movie_id,movie_title,rating,review}=data;
            const query=`INSERT INTO reviews (movie_id,movie_title,rating,review)
            VALUES ($1, $2, $3, $4) RETURNING *`;

            const values=[movie_id,movie_title,rating,review];
            const res=await pool.query(query,values);
            return res.rows[0];
        },
        update:async(id,data)=>{
            const {movie_id,movie_title,rating,review}=data;
            const query=`UPDATE reviews SET movie_id=$1, movie_title=$2, rating=$3,review=$4,updated_at=NOW() WHERE id=$5 RETURNING *`;
            const values=[movie_id,movie_title,parseFloat(rating),review,id];
            const res=await pool.query(query,values);
            return res.rows[0];
        },
        delete:async(id)=>{
            const res=await pool.query(
                `DELETE FROM reviews WHERE id=$1 RETURNING *`,[id]
            );
            return res.rows[0];
        }
    }
    

}

const model=reviewModel();

export default model;

