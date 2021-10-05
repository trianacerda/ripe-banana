DROP TABLE IF EXISTS studio CASCADE, film, actor, reviewer, review;

CREATE TABLE studios (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    city TEXT,
    state TEXT,
    country TEXT
);

-- CREATE TABLE films (
--     id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--     title TEXT NOT NULL,
--     studio BIGINT NOT NULL,
--     FOREIGN KEY(studio) REFERENCES studio(id) ON DELETE CASCADE,
--     released INT NOT NULL
-- );

-- CREATE TABLE actors (
--     id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--     name TEXT NOT NULL,
--     dob DATE FORMAT 'dd.mm.yyyy', 
--     pob TEXT,
--     film_id BIGINT,
--     FOREIGN KEY(film_id) REFERENCES film(id) ON DELETE CASCADE
-- );

-- CREATE TABLE reviewers (
--     id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--     name TEXT NOT NULL,
--     company TEXT NOT NULL
-- );

-- CREATE TABLE reviews (
--     id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--     rating INT,
--     reviewer BIGINT,
--     review TEXT NOT NULL, 
--     film BIGINT,
--     FOREIGN KEY(reviewer) REFERENCES reviewer(id) ON DELETE CASCADE,
--     FOREIGN KEY(film) REFERENCES film(id) ON DELETE CASCADE
-- );

