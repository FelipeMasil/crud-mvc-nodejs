CREATE DATABASE USUARIOS;

CREATE TABLE USUARIOS(
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NOME VARCHAR(100) NOT NULL,
    EMAIL VARCHAR(100) NOT NULL,
    IDADE VARCHAR(3) NOT NULL,
)