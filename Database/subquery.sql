create database subquery
use subquery

-- Create Employee Table
CREATE TABLE Employee (
    TID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Dept VARCHAR(50),
    Age INT,
    Salary INT
);

-- Insert Employee Records
INSERT INTO Employee (TID, FirstName, LastName, Dept, Age, Salary) VALUES
(1, 'Mizanur', 'Rahman', 'CSE', 28, 35000),
(2, 'Delwar', 'Hossain', 'CSE', 26, 33000),
(3, 'Shafiul', 'Islam', 'EEE', 24, 30000),
(4, 'Faisal', 'Imran', 'CSE', 30, 50000),
(5, 'Ahsan', 'Habib', 'English', 28, 28000);

-- Create Department Table
CREATE TABLE Department (
    deptID INT PRIMARY KEY,
    deptName VARCHAR(50),
    location VARCHAR(50)
);

-- Insert Department Records
INSERT INTO Department (deptID, deptName, location) VALUES
(1, 'CSE', 'Talaimari'),
(2, 'EEE', 'Talaimari'),
(3, 'English', 'Kazla'),
(4, 'BBA', 'Talaimari');

-- 1. Update the Salary of Teacher by 15% whose DeptName is 'CSE',
-- otherwise update by 10% Salary

UPDATE Employee
SET Salary = Salary +
(
    CASE
        WHEN Dept IN (
            SELECT deptName
            FROM Department
            WHERE deptName = 'CSE'
        )
        THEN Salary * 0.15
        ELSE Salary * 0.10
    END
);
select * from Employee
------------------------------------------------------------

-- 2. Insert/Copy values from one table to another using (ID IN) subquery

CREATE TABLE Employee_Copy (
    TID INT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Dept VARCHAR(50),
    Age INT,
    Salary INT
);

INSERT INTO Employee_Copy
SELECT *
FROM Employee
WHERE TID IN (
    SELECT TID
    FROM Employee
);

------------------------------------------------------------

-- 3. Find firstname and lastname as fullname, age whose salary is maximum

SELECT 
    FirstName + ' ' + LastName AS FullName,
    Age
FROM Employee
WHERE Salary = (
    SELECT MAX(Salary)
    FROM Employee
);

------------------------------------------------------------

-- 4. Find firstname, age, dept whose age is between 23 to 27

SELECT FirstName, Age, Dept
FROM Employee
WHERE Age BETWEEN 23 AND 27;

------------------------------------------------------------

-- 5. Find TID, firstname whose salary is less than average salary

SELECT TID, FirstName
FROM Employee
WHERE Salary < (
    SELECT AVG(Salary)
    FROM Employee
);

------------------------------------------------------------

-- 6. Update Dept by 'English' where Dept is 'EEE' using subquery

UPDATE Employee
SET Dept = (
    SELECT deptName
    FROM Department
    WHERE deptName = 'English'
)
WHERE Dept IN (
    SELECT deptName
    FROM Department
    WHERE deptName = 'EEE'
);

------------------------------------------------------------

-- 7. Update salary by multiplying salary by 100
-- where salary is greater than 5000 using subquery

UPDATE Employee
SET Salary = Salary * 100
WHERE TID IN (
    SELECT TID
    FROM Employee
    WHERE Salary > 5000
);

------------------------------------------------------------

-- 8. Find the name that starts with 'k' or 's' using subquery

SELECT FirstName
FROM Employee
WHERE TID IN (
    SELECT TID
    FROM Employee
    WHERE FirstName LIKE 'K%'
       OR FirstName LIKE 'S%'
);

------------------------------------------------------------

-- 9. Find firstname, salary for all teachers of CSE
-- who have higher salary than Delwar Hossain

SELECT FirstName, Salary
FROM Employee
WHERE Dept = 'CSE'
AND Salary > (
    SELECT Salary
    FROM Employee
    WHERE FirstName = 'Delwar'
      AND LastName = 'Hossain'
);

------------------------------------------------------------

-- 10. Find id, names of all teachers who belong to the
-- same department as 'Mizanur'

SELECT TID, FirstName, LastName
FROM Employee
WHERE Dept = (
    SELECT Dept
    FROM Employee
    WHERE FirstName = 'Mizanur'
);

------------------------------------------------------------

-- 11. Find TID, salary, deptID whose salary is greater than average salary

SELECT 
    E.TID,
    E.Salary,
    D.deptID
FROM Employee E, Department D
WHERE E.Dept = D.deptName
AND E.Salary > (
    SELECT AVG(Salary)
    FROM Employee
);

------------------------------------------------------------

-- 12. Find minimum salary from Teacher for each department
-- where minimum salary is less than average salary

SELECT Dept, MIN(Salary) AS MinSalary
FROM Employee
GROUP BY Dept
HAVING MIN(Salary) < (
    SELECT AVG(Salary)
    FROM Employee
);

------------------------------------------------------------

-- 13. Find firstname, lastname, dept where location name is Kazla

SELECT FirstName, LastName, Dept
FROM Employee
WHERE Dept IN (
    SELECT deptName
    FROM Department
    WHERE location = 'Kazla'
);

------------------------------------------------------------

-- 14. Find TID, firstname, salary where length of firstname is at least 6

SELECT TID, FirstName, Salary
FROM Employee
WHERE TID IN (
    SELECT TID
    FROM Employee
    WHERE LEN(FirstName) >= 6
);