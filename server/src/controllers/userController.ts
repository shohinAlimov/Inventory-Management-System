import { pool } from "../config/database";
import type { Response, Request } from "express";
import { userQueries } from "../queries/userQueries";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(userQueries.getAll);
    res.json(result.rows);
  } catch (error: any) {
    console.log("Error fetching users:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await pool.query(userQueries.getById, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(result.rows[0]);
  } catch (error: any) {
    console.error("Error fetching user:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
