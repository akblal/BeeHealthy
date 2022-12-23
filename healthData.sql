DROP TABLE IF EXISTS healthData;

CREATE TABLE healthData (
  id SERIAL PRIMARY KEY,
  created_at timestamp(0) with time zone NOT NULL DEFAULT NOW(),
  diastolic INTEGER NOT NULL,
  systolic INTEGER NOT NULL
  -- meds_list TEXT[],
  -- meds_taken TEXT[]
);

-- INSERT INTO healthData (diastolic, systolic, meds_list, meds_taken) VALUES (100, 100, ARRAY ['tylenol', 'motrin'], ARRAY['motrin']);
-- INSERT INTO healthData (diastolic, systolic, meds_list, meds_taken) VALUES (101, 100, ARRAY ['tylenol', 'motrin'], ARRAY['motrin']);
-- INSERT INTO healthData (diastolic, systolic, meds_list, meds_taken) VALUES (102, 100, ARRAY ['tylenol', 'motrin'], ARRAY['motrin']);
