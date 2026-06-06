create database Practice

create table customers(
  customer_id int primary key,
  first_name varchar(50),
  last_name varchar(50),
  email varchar(100),
  city varchar(50),
  country varchar(50),
  registration_date date
)

create table Books(
  book_id int primary key,
  title varchar(200),
  author varchar(100),
  genre varchar(50),
  price decimal(10,2),
  publication_year int,
  stock_quantity int
)

create table Orders(
  order_id int primary key,
  customer_id int,
  foreign key (customer_id) references customers (customer_id),
  book_id int,
  foreign key (book_id) references Books (book_id),
  order_date date,
 quantity int,
total_amount decimal(10,2)
)

insert into customers (customer_id,first_name,last_name,email,city,country,registration_date) 
values 
(1, 'John', 'Smith', 'john.smith@email.com', 'New York', 'USA', '2023-01-15'),
(2, 'Emma', 'Johnson', 'emma.j@email.com', 'London', 'UK', '2023-02-20'),
(3, 'Michael', 'Brown', 'mbrown@email.com', 'Toronto', 'Canada', '2023-01-10'),
(4, 'Sophia', 'Davis', 'sophia.d@email.com', 'Sydney', 'Australia', '2023-03-05'),
(5, 'James', 'Wilson', 'jwilson@email.com', 'New York', 'USA', '2023-02-28'),
(6, 'Oliver', 'Taylor', 'oliver.t@email.com', 'London', 'UK', '2023-04-12'),
(7, 'Ava', 'Anderson', 'ava.anderson@email.com', 'Los Angeles', 'USA', '2023-03-18'),
(8, 'William', 'Martinez', 'w.martinez@email.com', 'Madrid', 'Spain', '2023-01-25'),
(9, 'Isabella', 'Garcia', 'isabella.g@email.com', 'Mexico City', 'Mexico', '2023-02-14'),
(10, 'Lucas', 'Rodriguez', 'lucas.r@email.com', 'Buenos Aires', 'Argentina', '2023-03-30')

INSERT INTO Books (book_id, title, author, genre, price, publication_year, stock_quantity) VALUES
(1, 'The Great Gatsby', 'F. Scott Fitzgerald', 'Fiction', 12.99, 1925, 45),
(2, 'To Kill a Mockingbird', 'Harper Lee', 'Fiction', 14.99, 1960, 32),
(3, '1984', 'George Orwell', 'Science Fiction', 13.99, 1949, 28),
(4, 'Pride and Prejudice', 'Jane Austen', 'Romance', 11.99, 1813, 50),
(5, 'The Catcher in the Rye', 'J.D. Salinger', 'Fiction', 12.99, 1951, 22),
(6, 'Harry Potter and the Sorcerer Stone', 'J.K. Rowling', 'Fantasy', 19.99, 1997, 60),
(7, 'The Hobbit', 'J.R.R. Tolkien', 'Fantasy', 15.99, 1937, 38),
(8, 'Brave New World', 'Aldous Huxley', 'Science Fiction', 13.99, 1932, 25),
(9, 'The Lord of the Rings', 'J.R.R. Tolkien', 'Fantasy', 29.99, 1954, 41),
(10, 'Animal Farm', 'George Orwell', 'Fiction', 10.99, 1945, 55),
(11, 'Fahrenheit 451', 'Ray Bradbury', 'Science Fiction', 12.99, 1953, 30),
(12, 'The Great Adventure', 'John Anderson', 'Fiction', 16.99, 2020, 18),
(13, 'Mystery in Paris', 'Marie Dubois', 'Mystery', 14.99, 2019, 27),
(14, 'Romance in Rome', 'Isabella Rossi', 'Romance', 13.99, 2021, 35);

INSERT INTO Orders (order_id, customer_id, book_id, order_date, quantity, total_amount) VALUES
(1, 1, 1, '2023-05-10', 2, 25.98),
(2, 1, 6, '2023-05-15', 1, 19.99),
(3, 2, 3, '2023-05-12', 1, 13.99),
(4, 3, 2, '2023-05-11', 3, 44.97),
(5, 4, 7, '2023-05-13', 1, 15.99),
(6, 5, 9, '2023-05-14', 2, 59.98),
(7, 2, 4, '2023-05-16', 1, 11.99),
(8, 6, 6, '2023-05-17', 2, 39.98),
(9, 7, 1, '2023-05-18', 1, 12.99),
(10, 8, 8, '2023-05-19', 1, 13.99),
(11, 1, 10, '2023-06-01', 2, 21.98),
(12, 3, 5, '2023-06-02', 1, 12.99),
(13, 9, 11, '2023-06-03', 3, 38.97),
(14, 10, 12, '2023-06-04', 1, 16.99),
(15, 4, 13, '2023-06-05', 2, 29.98),
(16, 5, 14, '2023-06-06', 1, 13.99),
(17, 2, 6, '2023-06-07', 1, 19.99),
(18, 7, 3, '2023-06-08', 2, 27.98);


-- 1.Display all books with their titles and prices, ordered by price (lowest to highest)
select title, price from Books order by price asc;
-- 2.Find all distinct countries where customers are from
select distinct (country) from customers;
-- 3.Find all books whose titles start with "The"
select * from Books where title like'The%'
--4.Change the column name first_name to customer_first_name in the customers table
alter table customers rename column first_name to customer_first_name
-- 5.Find all books in the Fantasy genre
select * from books where genre='Fantasy'
-- 6.Count the total number of orders in the database
select count(*) as total_order from orders
-- 7.Find the average price of books by genre, but only show genres with an average price greater than $14
select genre,avg(price) from books group by genre having avg(price)>14
-- 8.Find all customers whose email addresses end with .com and are from either USA or UK
select * from customers where email like '%.com' and country in('USA','UK')
-- 9.Display all customers with their full name in uppercase (concatenated first and last name),original email, and city in lowercase.Only show customers from USA or UK.
select upper(concat(customer_first_name,' ',last_name)) as full_name,email,lower(city) from customers where country='USA' or country='UK'
-- 10 Find the total revenue, average order amount, maximum order amount, andminimum order amount from all orders placed in June 2023.
select sum(total_amount),avg(total_amount),max(total_amount),min(total_amount) from orders where order_date between '2023-06-01' and '2023-06-30'








create database prect;
use prect


CREATE TABLE Department (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50)
);

CREATE TABLE Employee (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    salary DECIMAL(10,2),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES Department(dept_id)
);

CREATE TABLE Project (
    project_id INT PRIMARY KEY,
    project_name VARCHAR(50)
);

CREATE TABLE Employee_Project (
    emp_id INT,
    project_id INT,
    hours_worked INT,
    PRIMARY KEY (emp_id, project_id),
    FOREIGN KEY (emp_id) REFERENCES Employee(emp_id),
    FOREIGN KEY (project_id) REFERENCES Project(project_id)
);


INSERT INTO Department VALUES
(1, 'IT'),
(2, 'HR'),
(3, 'Finance'),
(4, 'Marketing');

INSERT INTO Employee VALUES
(101, 'Alice', 60000, 1),
(102, 'Bob', 55000, 1),
(103, 'Carol', 50000, 2),
(104, 'David', 70000, 3),
(105, 'Eva', 45000, 4);

INSERT INTO Project VALUES
(201, 'Website Development'),
(202, 'Recruitment System'),
(203, 'Payroll System'),
(204, 'Marketing Campaign');

INSERT INTO Employee_Project VALUES
(101, 201, 120),
(102, 201, 80),
(103, 202, 60),
(104, 203, 100),
(105, 204, 90);

--Question: Show employee names along with department names.
select e.emp_name,d.dept_name from Employee e join Department d on e.dept_id=d.dept_id
--Display employee name, project name, and hours worked.
select e.emp_name,p.project_name,ep.hours_worked from Employee e join Employee_Project ep on e.emp_id=ep.emp_id
join Project p on p.project_id= ep.project_id
--Find total salary of each department.
select d.dept_name,sum(e.salary) as total_sal from Employee e join Department d on e.dept_id=d.dept_id
group by d.dept_name 
--Find employees who worked more than 80 hours.
select e.emp_name,ep.hours_worked from Employee e join Employee_Project ep on e.emp_id=ep.emp_id
where ep.hours_worked>80
--Count employees in each department.
select count(e.emp_id),d.dept_name from Employee e join Department d on e.dept_id=d.dept_id 
group by d.dept_name
--Create a procedure to show employees of a department.
drop proc empProc
create proc empProc
(@dept varchar(20))
as
begin
select e.salary,d.dept_name from Employee e join Department d on e.dept_id=d.dept_id 
where d.dept_name=@dept
end
exec empProc'HR'

--Create a function to calculate a 10% bonus
CREATE FUNCTION calBonus(@salary FLOAT)
RETURNS FLOAT
AS
BEGIN
    DECLARE @bonus FLOAT

    SET @bonus = @salary * 0.01

    RETURN @bonus
END
select emp_name, dbo.calBonus(salary) from Employee
--Show employee name, department, salary and bonus.
select e.emp_name,d.dept_name,e.salary,dbo.calBonus(e.salary) from Employee e join Department d on e.dept_id=d.dept_id
