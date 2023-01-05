DROP TABLE IF EXISTS healthData;
DROP TABLE IF EXISTS alert;

CREATE TABLE healthData (
  id SERIAL PRIMARY KEY,
  created_at timestamp(0) with time zone NOT NULL DEFAULT NOW(),
  diastolic INTEGER NOT NULL,
  systolic INTEGER NOT NULL,
  meds_list TEXT[],
  meds_taken TEXT[]
);

CREATE TABLE alert (
  id SERIAL PRIMARY KEY,
  created_at timestamp(0) with time zone NOT NULL DEFAULT NOW(),
  patient_name TEXT,
  doctor_name TEXT,
  diastolic INTEGER NOT NULL,
  systolic INTEGER NOT NULL,
  meds_list TEXT[],
  meds_taken TEXT[]

);