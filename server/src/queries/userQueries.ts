export const userQueries = {
  getAll: "SELECT * FROM users ORDER BY id ASC",
  getById: "SELECT * FROM users WHERE id = $1",
  create: `
    INSERT INTO users (name, email, password_hashed, status)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `,
  update: `
    UPDATE users
    SET name = $1, email = $2, status = $3
    WHERE id = $4
    RETURNING *
  `,
  delete: "DELETE FROM users WHERE id = $1 RETURNING *",
};
