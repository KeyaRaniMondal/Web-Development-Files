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


--List all the employees except ‘Manager’ & ‘Asst. Manager’. 
SELECT *
FROM Worker w
JOIN Title t 
    ON w.WORKER_ID = t.WORKER_REF_ID
WHERE t.WORKER_TITLE NOT IN ('Asst. Manager', 'Manager');

select * from Worker w join Title t on w.WORKER_ID=t.WORKER_REF_ID where t.WORKER_TITLE in('Asst. Manager' ,'Manager')
--List the workers in the ascending order of Designations of those joined after April 2014.
SELECT *
FROM Worker w
JOIN Title t 
    ON w.WORKER_ID = t.WORKER_REF_ID
WHERE w.JOINING_DATE >= '2014-04-01'
ORDER BY t.WORKER_TITLE ASC;
select * from Worker w join Title t on w.WORKER_ID=t.WORKER_REF_ID where w.JOINING_DATE>=2014-04-1 order by t.WORKER_TITLE
--Write an SQL query to fetch the number of employees working in the department ‘Admin’. 
select w.DEPARTMENT,count(t.WORKER_REF_ID) as cnt from Worker w join Title t on w.WORKER_ID=t.WORKER_REF_ID group by w.DEPARTMENT 
SELECT COUNT(*) AS Total_Admin_Employees
FROM Worker
WHERE DEPARTMENT = 'Admin';
--Write an SQL query to fetch worker names with salaries >= 50000 and <= 100000.
SELECT FIRST_NAME + ' ' + LAST_NAME AS FullName,
       SALARY
FROM Worker
WHERE SALARY BETWEEN 50000 AND 100000;

select FIRST_NAME+''+LAST_NAME as FullName , SALARY from Worker where SALARY>= 50000 and SALARY<= 100000
--Write an SQL query to fetch the no. of workers for each department in the descending order.
select DEPARTMENT,count(WORKER_ID) as cnt from Worker group by DEPARTMENT order by cnt desc
--Write an SQL query to print details of the Workers who are also Managers. 
select * from Worker w join Title t on w.WORKER_ID=t.WORKER_REF_ID where t.WORKER_TITLE='Manager'
--Write an SQL query to show only odd rows from a table.
select * from Worker where WORKER_ID%2=1
--rite an SQL query to show only even rows from a table. 
select * from Worker where WORKER_ID%2=0
--9. Write an SQL query to clone a new table from another table. 
select * into clone_worker  from Worker
select * from clone_worker
--10. Write an SQL query to show the current date and time. 
select CURRENT_TIMESTAMP
--11. Write an SQL query to show the top n (say 10) records of a table with Name and Designation. 
select top 5 w.FIRST_NAME,t.WORKER_TITLE from Worker w join Title t on w.WORKER_ID=t.WORKER_REF_ID 
select w.FIRST_NAME,t.WORKER_TITLE from Worker w join Title t on w.WORKER_ID=t.WORKER_REF_ID order by w.WORKER_ID offset 0 rows fetch next 5 rows only
--12. Write an SQL query to determine the nth (say n=5) highest salary from a table. 
SELECT DISTINCT SALARY
FROM Worker
ORDER BY SALARY DESC
OFFSET 4 ROWS FETCH NEXT 1 ROW ONLY;

select * from Worker order by SALARY desc offset 4 rows fetch next 1 row only
--13. Write an SQL query to fetch the list of employees with the same salary. 
SELECT *
FROM Worker
WHERE SALARY IN
(
    SELECT SALARY
    FROM Worker
    GROUP BY SALARY
    HAVING COUNT(*) > 1
);
--14. Write an SQL query to show the second highest salary from a table. 
select * from Worker order by SALARY desc offset 1 rows fetch next 1 row only
SELECT MAX(SALARY) AS Second_Highest_Salary
FROM Worker
WHERE SALARY < (SELECT MAX(SALARY) FROM Worker);

--15. Write an SQL query to fetch the first 50% records from a table. 
SELECT TOP 50 PERCENT *
FROM Worker;
--16. Write an SQL query to fetch the departments that have less than five people in it. 
select DEPARTMENT from Worker group by DEPARTMENT having count(WORKER_ID)<5
--17. Write an SQL query to show all departments along with the number of people in there. 
select DEPARTMENT,count(WORKER_ID) from Worker group by DEPARTMENT
--18. Write an SQL query to show the last record from table.
SELECT TOP 1 *
FROM Worker
ORDER BY WORKER_ID DESC;

select * from Worker order by WORKER_ID desc offset 0 rows fetch next 1 row only
--19. Write an SQL query to fetch the first row of a table. 
select * from Worker order by WORKER_ID offset 0 rows fetch next 1 row only
--20. Write an SQL query to fetch the last five records from table. 
SELECT *
FROM Worker
ORDER BY WORKER_ID DESC
OFFSET 0 ROWS FETCH NEXT 5 ROWS ONLY;

select * from Worker order by WORKER_ID desc offset 0 rows fetch next 5 row only
--21. Write an SQL query to print the name of employees having the highest salary in each department. 
SELECT w.FIRST_NAME,
       w.DEPARTMENT,
       w.SALARY
FROM Worker w
WHERE w.SALARY =
(
    SELECT MAX(SALARY)
    FROM Worker
    WHERE DEPARTMENT = w.DEPARTMENT
);
--22. Write an SQL query to fetch three max salaries from table. 
SELECT DISTINCT TOP 3 SALARY
FROM Worker
ORDER BY SALARY DESC;

--5. Write an SQL query to update all worker bonus 10% whose joining_date before ‘201404-11 09:00:00’ otherwise bonus update 5% and also check department name is ‘Admin’. 
UPDATE b
SET BONUS_AMOUNT =
    CASE
        WHEN w.JOINING_DATE < '2014-04-11 09:00:00'
            THEN BONUS_AMOUNT * 1.10
        ELSE BONUS_AMOUNT * 1.05
    END
FROM Bonus b
JOIN Worker w
    ON w.WORKER_ID = b.WORKER_REF_ID
WHERE w.DEPARTMENT = 'Admin';

select w.WORKER_ID, w.FIRST_NAME,w.DEPARTMENT,b.BONUS_AMOUNT as oldb ,
case 
when w.JOINING_DATE<'2014-04-11 09:00:00' 
then b.BONUS_AMOUNT*1.10
else b.BONUS_AMOUNT*1.05
end as newb
from Worker w join Bonus b on w.WORKER_ID=b.WORKER_REF_ID where w.DEPARTMENT='Admin'

--6. Write an SQL query to delete all workers who have not taken any bonus. 
DELETE w
FROM Worker w
LEFT JOIN Bonus b
    ON w.WORKER_ID = b.WORKER_REF_ID
LEFT JOIN Title t
    ON w.WORKER_ID = t.WORKER_REF_ID
WHERE b.WORKER_REF_ID IS NULL
  AND t.WORKER_REF_ID IS NULL;



