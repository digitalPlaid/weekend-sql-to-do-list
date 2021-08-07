CREATE TABLE "task" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR(1000),
	"complete" BOOLEAN,
    "date_completed" DATE
);

INSERT INTO "task"
("task", "complete", "date_completed")
VALUES
('Example Task A', true, '01-01-2021'),
('Example Task B', false, NULL),
('Example Task C', true, '12-12-2021'),
('Example Task D', false, NULL),
('Example Task E', false, NULL);