create table departments
(
    department_id varchar2(4) primary key,
    manager_id varchar2(4) primary key,
    department_name varchar2(50)
);

create table jobs
(
    job_id varchar2(4) primary key,
    job_name varchar2(50)
);

create table employees
(
    employee_id varchar2(4) primary key,
    first_name varchar2(50),
    last_name varchar2(50),
    mail varchar2(100),
    phone_number varchar2(12),
    department_id varchar2(4),
    foreign key (department_id) references departments(department_id),
    manager_id varchar2(4),
    foreign key (manager_id) references departments(manager_id),
    job_id varchar2(4),
    foreign key (job_id) references jobs(job_id)
);

create table clients
(
    client_id varchar2(4) primary key,
    first_name varchar2(50) not null,
    last_name varchar2(50),
    mail varchar2(100) not null,
    phone_number varchar2(12),
    client_password varchar2(18) not null
)

create table orders
(
    order_id varchar2(4) primary key,
    order_date date,
    direction varchar2(100),
    client_id varchar2(4),
    foreign key (client_id) references clients(client_id)
);

create table allergens
(
    allergen_id varchar2(4) primary key,
    allergen_name varchar2(20)
);

create table categories
(
    categoriy_id varchar2(4) primary key,
    categoriy_name varchar2(20)
);

create table products
(
    product_id varchar2(4) primary key,
    product_name varchar2(50),
    product_description varchar2(300),
    price number(5,2),
    categoriy_id varchar2(4),
    foreign key (categoriy_id) references categories(categoriy_id)
);

create table allergensproduct
(
    product_id varchar2(4) primary key,
    allergen_id varchar2(4) primary key
);

create table orderdetails
(
    orderdetail_id varchar2(4) primary key,
    product_name varchar2(50),
    quantity_product number(2),
    sales_price number(5,2),
    product_id varchar2(4),
    foreign key (product_id) references products(product_id),
    employee_id varchar2(4),
    foreign key (employee_id) references employees(employee_id)
    order_id varchar2(4),
    foreign key (order_id) references orders(order_id)
);