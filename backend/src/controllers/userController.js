import { pool } from "../config/database.js";
import { userQueries } from "../queries/userQueries.js";

export const getAllUsers = async (req, res) => {
  try {
    const result = await pool.query(userQueries.getAll);
    res.json(result.rows);
  } catch (error) {
    console.log("Error fetching users:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(userQueries.getById, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching user:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
