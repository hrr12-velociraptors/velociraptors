DROP DATABASE learnItNowdb;
Create DATABASE learnItNowdb;

USE learnItNowdb;

CREATE TABLE tutors (
  userId INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(15) NOT NULL,
  email VARCHAR(24) NOT NULL,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE sessions (
  sessionId INT PRIMARY KEY AUTO_INCREMENT,
  userId INT,
  topic VARCHAR(20) NOT NULL,
  description VARCHAR(100) NOT NULL,
  startTime DATETIME NOT NULL,
  link TEXT NOT NULL,
  status BOOLEAN NOT NULL.
  FOREIGN KEY (userId) REFERENCES tutors (userId)
);


-- INSERT tutors (userId, username, email, password) VALUES ('12345', 'tinymonster', 'password123');