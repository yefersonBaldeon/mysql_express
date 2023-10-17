
import { pool } from '../db.js'

export const getIndex= async (req, res) => {

    const [a]= await pool.query('SELECT "pong" as result') 
    res.json(a)
 }