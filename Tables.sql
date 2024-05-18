CREATE TABLE departments (
    department_id VARCHAR2(4) PRIMARY KEY,
    department_name VARCHAR2(50) NOT NULL
);

CREATE TABLE jobs (
    job_id VARCHAR2(4) PRIMARY KEY,
    job_name VARCHAR2(50) NOT NULL
);

CREATE TABLE employees (
    employee_id VARCHAR2(4) PRIMARY KEY,
    first_name VARCHAR2(50),
    last_name VARCHAR2(50),
    mail VARCHAR2(100) NOT NULL,
    employee_password VARCHAR2(18) NOT NULL,
    phone_number VARCHAR2(12),
    department_id VARCHAR2(4),
    job_id VARCHAR2(4),
    FOREIGN KEY (department_id) REFERENCES departments(department_id),
    FOREIGN KEY (job_id) REFERENCES jobs(job_id)
);

CREATE TABLE clients (
    client_id VARCHAR2(4) PRIMARY KEY,
    first_name VARCHAR2(50) NOT NULL,
    last_name VARCHAR2(50),
    mail VARCHAR2(100) NOT NULL,
    phone_number VARCHAR2(12),
    client_password VARCHAR2(18) NOT NULL
);

CREATE TABLE orders (
    order_id VARCHAR2(4) PRIMARY KEY,
    order_date DATE,
    direction VARCHAR2(100),
    client_id VARCHAR2(4),
    FOREIGN KEY (client_id) REFERENCES clients(client_id)
);

CREATE TABLE allergens (
    allergen_id VARCHAR2(4) PRIMARY KEY,
    allergen_name VARCHAR2(20) NOT NULL
);

CREATE TABLE categories (
    category_id VARCHAR2(4) PRIMARY KEY,
    category_name VARCHAR2(20) NOT NULL
);

CREATE TABLE products (
    product_id VARCHAR2(4) PRIMARY KEY,
    product_image VARCHAR2(200),
    product_name VARCHAR2(50) NOT NULL,
    product_description VARCHAR2(300),
    price NUMBER(5,2) NOT NULL,
    category_id VARCHAR2(4),
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);



CREATE TABLE allergens_products (
    product_id VARCHAR2(4) NOT NULL,
    allergen_id VARCHAR2(4) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (allergen_id) REFERENCES allergens(allergen_id)
);


CREATE TABLE order_details (
    order_detail_id VARCHAR2(4) PRIMARY KEY,
    quantity_product NUMBER(2) NOT NULL,
    sales_price NUMBER(5,2) NOT NULL,
    product_id VARCHAR2(4) NOT NULL,
    employee_id VARCHAR2(4) NOT NULL,
    order_id VARCHAR2(4) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id),
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
);
