use lab
-- Worker Information Table
CREATE TABLE Worker (
    WORKER_ID INT PRIMARY KEY,
    FIRST_NAME VARCHAR(50),
    LAST_NAME VARCHAR(50),
    SALARY DECIMAL(10,2),
    JOINING_DATE DATETIME,
    DEPARTMENT VARCHAR(50)
);

-- Bonus Table
CREATE TABLE Bonus (
    WORKER_REF_ID INT,
    BONUS_DATE DATE,
    BONUS_AMOUNT DECIMAL(10,2),
    FOREIGN KEY (WORKER_REF_ID) REFERENCES Worker(WORKER_ID)
);

-- Title Table
CREATE TABLE Title (
    WORKER_REF_ID INT,
    WORKER_TITLE VARCHAR(50),
    AFFECTED_FROM DATE,
    FOREIGN KEY (WORKER_REF_ID) REFERENCES Worker(WORKER_ID)
);

-- Insert data into Worker table
INSERT INTO Worker 
    (WORKER_ID, FIRST_NAME, LAST_NAME, SALARY, JOINING_DATE, DEPARTMENT) VALUES
    (1, 'Rana', 'Hamid', 100000, '2014-02-20 09:00:00', 'HR'),
    (2, 'Sanjoy', 'Saha', 80000, '2014-06-11 09:00:00', 'Admin'),
    (3, 'Mahmudul', 'Hasan', 300000, '2014-02-20 09:00:00', 'HR'),
    (4, 'Asad', 'Zaman', 500000, '2014-02-20 09:00:00', 'Admin'),
    (5, 'Sajib', 'Mia', 500000, '2014-06-11 09:00:00', 'Admin'),
    (6, 'Alamgir', 'Kabir', 200000, '2014-06-11 09:00:00', 'Account'),
    (7, 'Foridul', 'Islam', 75000, '2014-01-20 09:00:00', 'Account'),
    (8, 'Keshob', 'Ray', 90000, '2014-04-11 09:00:00', 'Admin');

-- Insert data into Bonus table
INSERT INTO Bonus (WORKER_REF_ID, BONUS_DATE, BONUS_AMOUNT) VALUES
(1, '2019-02-20', 5000),
(2, '2019-06-11', 3000),
(3, '2019-02-20', 4000),
(4, '2019-02-20', 4500),
(5, '2019-06-11', 3500),
(6, '2019-06-12', NULL);

-- Insert data into Title table
INSERT INTO Title (WORKER_REF_ID, WORKER_TITLE, AFFECTED_FROM) VALUES
(1, 'Manager', '2019-02-20'),
(2, 'Executive', '2019-06-11'),
(8, 'Executive', '2019-06-11'),
(5, 'Manager', '2019-06-11'),
(4, 'Asst. Manager', '2019-06-11'),
(6, 'Lead', '2019-06-11'),
(3, 'Lead', '2019-06-11');


select * from Worker w join Title t on w.WORKER_ID=t.WORKER_REF_ID where t.WORKER_TITLE in('Asst. Manager' ,'Manager')
select * from Worker w join Title t on w.WORKER_ID=t.WORKER_REF_ID where w.JOINING_DATE>=2014-04-1 order by t.WORKER_TITLE
select w.DEPARTMENT,count(t.WORKER_REF_ID) as cnt from Worker w join Title t on w.WORKER_ID=t.WORKER_REF_ID group by w.DEPARTMENT 
select FIRST_NAME+''+LAST_NAME as FullName , SALARY from Worker where SALARY>= 50000 and SALARY<= 100000