create database lab;
use lab;

CREATE TABLE Worker (
    WORKER_ID INT NOT NULL PRIMARY KEY,
    FIRST_NAME CHAR(25),
    LAST_NAME CHAR(25),
    SALARY INT,
    JOINING_DATE DATETIME,
    DEPARTMENT CHAR(25)
);
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

select * from Worker

select substring(FIRST_NAME,1,3) as fn from Worker
select * from Worker where year(JOINING_DATE)=2014 and month(JOINING_DATE)in(2,3) 
select * from Worker where (CURRENT_TIMESTAMP-JOINING_DATE)>=6;
select * from Worker where FIRST_NAME='Rana'or FIRST_NAME='Sajib'
select * from Worker where FIRST_NAME not in('Rana' , 'Sajib')
select * from Worker where FIRST_NAME like'%a%'
select * from Worker where FIRST_NAME like'k%'
select * from Worker where FIRST_NAME like'%r' and len(FIRST_NAME)=7
select CHARINDEX('n','Sanjoy')
select DEPARTMENT, avg(SALARY) as average from Worker group by DEPARTMENT
select * from Worker w where 
w.SALARY=(select min(SALARY) as MINI from Worker where DEPARTMENT=w.DEPARTMENT)
or
w.SALARY=(select max(SALARY) as maxi from Worker where DEPARTMENT=w.DEPARTMENT)