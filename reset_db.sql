-- Reset do banco de dados vibra
DROP DATABASE IF EXISTS vibra;
CREATE DATABASE vibra;

-- Conectar ao banco vibra
\c vibra;

-- Criar extensões necessárias se precisar
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";