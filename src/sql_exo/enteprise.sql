CREATE TABLE salaries (
    employee_id serial PRIMARY KEY UNIQUE,
    first_name VARCHAR(25) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    birth_date DATE NOT NULL,
);
CREATE TABLE contract_employee AS SELECT employee_id from salaries (
    contract_type VARCHAR(40) NOT NULL,
    signature_date DATE NOT NULL,
    contract_length VARCHAR(20) NOT NULL,
    salary INT NOT NULL,
);
CREATE TABLE family_member AS SELECT employee_id from salaries (
    has_family_members BOOLEAN,
    first_name VARCHAR(25),
    last_name VARCHAR(60),
    birth_date DATE
);
CREATE TABLE serices AS SELECT employee_id from salaries (
    department VARCHAR(50),
    directed_by VARCHAR(85)
)