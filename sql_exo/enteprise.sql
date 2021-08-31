CREATE TABLE employees (
    id serial PRIMARY KEY UNIQUE,
    first_name VARCHAR(25) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    birth_date DATE NOT NULL,
);
CREATE TABLE employees_department(
    id serial PRIMARY KEY UNIQUE,
    employee_id INTEGER NOT NULL REFERENCES emplyees(id) ON DELETE CASCADE,
    department_id INTEGER NOT NULL REFERENCES department(id) ON DELETE CASCADE,
)
CREATE TABLE contract_employee (
    id serial PRIMARY KEY UNIQUE,
    employee_id INTEGER NOT NULL REFERENCES emplyees(id) ON DELETE CASCADE,
    contrat VARCHAR(40) NOT NULL,
    signature_date DATE NOT NULL,
    contract_length VARCHAR(20) NOT NULL,
    salary INTEGER NOT NULL,
);
CREATE TABLE family_members (
    id serial PRIMARY KEY UNIQUE,
    employee_id INTEGER NOT NULL REFERENCES emplyees(id) ON DELETE CASCADE,
    first_name VARCHAR(25),
    last_name VARCHAR(60),
    birth_date DATE
);
CREATE TABLE department (
    id serial PRIMARY KEY UNIQUE,
    department_name VARCHAR(60) NOT NULL,
    manager_id INTEGER NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
);
CREATE TABLE sub_department (
    id serial PRIMARY KEY UNIQUE,
    main_department_id INTEGER NOT NULL REFERENCES department(id) ON DELETE CASCADE,
    sub_department_id INTEGER NOT NULL REFERENCES department(id) ON DELETE CASCADE,
);