import { pool } from "../db.js";

export const getTareas = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM orquideas"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTarea = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM orquideas WHERE id= ?", [
      req.params.id,
    ]);

    if (result.length === 0) {
      return res.status(404).json("No existe el id");
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const crearTarea = async (req, res) => {
  try {
    const { nombre, cientifico } = req.body;
    const result = await pool.query(
      "INSERT INTO orquideas  (nombre, cientifico) VALUES (?,?)",
      [nombre, cientifico]
    );
    res.send("creando tareas");
    console.log(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const editarTarea = async (req, res) => {
  try {
    const { nombre, cientifico } = req.body;
    const [result] = await pool.query("UPDATE orquideas SET ? WHERE id= ?", [
      req.body,
      req.params.id,
    ]);
    res.send(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const borrarTarea = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM orquideas WHERE id= ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json("No existe el id");
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
