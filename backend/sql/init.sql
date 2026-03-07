-- Crear tabla de usuarios

CREATE TABLE IF NOT EXISTS users (

id SERIAL PRIMARY KEY,

username VARCHAR(50) UNIQUE NOT NULL,

password TEXT NOT NULL,

role VARCHAR(20) DEFAULT 'admin'

);

-- Usuario administrador automático

INSERT INTO users (username,password,role)

VALUES (

'admin',

'$2a$10$R4pXkP0s7Fq5dYq7M3l7OuNq1Xh3T9m9jzP5zP4qG7m8Hn5Gq8aQK',

'admin'

)

ON CONFLICT (username) DO NOTHING;