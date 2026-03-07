CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(20) NOT NULL,
  full_name VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Usuario inicial (admin / admin)
INSERT INTO users (username, password, role, full_name)
VALUES (
  'admin',
  '$2a$10$AKpY3XGwJs6Sp7zb5o8SneClse4l0EKuQYzp3u47G6MoZnXZ2PeCS',
  'ADMIN',
  'Administrador General'
)
ON CONFLICT (username) DO NOTHING;