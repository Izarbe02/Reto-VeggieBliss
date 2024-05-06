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

