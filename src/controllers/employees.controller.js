import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  try {

    const [rows] = await pool.query("SELECT * FROM employee");
    res.json(rows);
  } catch (e) {
    res.status(500).json({ message: "algo salio mal" });
  }
};

export const getOneEmployees = async (req, res) => {


  try{
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM employee where id=?", [id]);
  
    if (rows.length === 0) {
      res.status(404).json({ message: "employee not found" });
    } else {
      res.json(rows);
    }    
  }
  catch(e){
    res.status(500).json({ message: "algo salio mal" });
  }

};

export const createEmployees = async (req, res) => {

  try{
    const { name, salery } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO employee (name,salary) VALUES (?,?)",
      [name, salery]
    );
  
    res.json({
      id: rows.insertId,
      name,
      salery,
    });

  }

  catch(e){
    res.status(500).json({ message: "algo salio mal" });
  }


};

export const updareEmployees = async (req, res) => {

  try{

    const { id } = req.params;
    const { name, salery } = req.body;
  
    const [result] = await pool.query(
      "UPDATE employee  set name=ifnull(?,name) , salary=ifnull(?,salary) where id=?",
      [name, salery, id]
    );
  
    if (result.affectedRows <= 0) {
      res.status(404).json({ message: "employee not found" });
    } else {
      const [rows] = await pool.query("SELECT * FROM employee where id=?", [id]);
  
      res.json(rows);
    }

  }

    catch(e){
      res.status(500).json({ message: "algo salio mal" });
    }
};

export const deleteEmployees = async (req, res) => {

  try{
    const { id } = req.params;
    const [rows] = await pool.query("DELETE from employee where id=?", [id]);
  
    if (rows.affectedRows <= 0) {
      res.status(404).json({ message: "employee not found" });
    } else {
      res.sendStatus(204);
    }

  }
  catch(e){
    res.status(500).json({ message: "algo salio mal" });
  }
};
