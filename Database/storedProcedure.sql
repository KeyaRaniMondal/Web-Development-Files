create database stored;
use stored;
-- Create Accounts table
CREATE TABLE Accounts (
    Account_no INT PRIMARY KEY,
    Acc_holder_name VARCHAR(50),
    Amount INT,
    Branch_Id VARCHAR(10),
    Zone_Id VARCHAR(10)
);

-- Create Branches table
CREATE TABLE Branches (
    Br_Id VARCHAR(10) PRIMARY KEY,
    Branch_Name VARCHAR(50)
);

-- Create Zones table
CREATE TABLE Zones (
    Zone_Id VARCHAR(10) PRIMARY KEY,
    Name VARCHAR(50)
);

-- Insert values into Accounts
INSERT INTO Accounts (Account_no, Acc_holder_name, Amount, Branch_Id, Zone_Id) VALUES
(1992212, 'Mr. Nazmuzzaman', 200000, 'B-101', 'Z-803'),
(1992213, 'Mr. Jibon', 170000, 'B-102', 'Z-803'),
(1882212, 'Bushra', 180000, 'B-103', 'Z-802'),
(1882213, 'Sajib', 170000, 'B-104', 'Z-801');

-- Insert values into Branches
INSERT INTO Branches (Br_Id, Branch_Name) VALUES
('B-101', 'Bonani'),
('B-102', 'Romna'),
('B-103', 'Shaheb bazar'),
('B-104', 'Ullapara');

-- Insert values into Zones
INSERT INTO Zones (Zone_Id, Name) VALUES
('Z-801', 'Sirajgonj'),
('Z-802', 'Rajshahi'),
('Z-803', 'Dhaka'),
('Z-804', 'Chittagong');


-- 1. Create a simple stored procedure “SPdetails” to find Acc_holder_name, Amount, Branch_Name and Zone_Name.

CREATE PROC SPdetails
AS
BEGIN
    SELECT a.Acc_holder_name, a.Amount, b.Branch_Name, z.Name AS Zone_Name
    FROM Accounts a
    JOIN Branches b ON a.Branch_Id = b.Br_Id
    JOIN Zones z ON a.Zone_Id = z.Zone_Id;
END;

EXEC SPdetails;
GO


-- 2. Create a simple stored procedure “SPaverage” to find Branch_name and Amount of Branch 
--    where amount will be greater than particular amount (say 170000). 
--    Here branch_name and amount will be passed by parameter.
drop PROC SPaverage
CREATE PROC SPaverage
    @branch_name VARCHAR(50),
    @min_amount INT
AS
BEGIN
    SELECT b.Branch_Name, a.Amount
    FROM Accounts a
    JOIN Branches b ON a.Branch_Id = b.Br_Id
    WHERE b.Branch_Name = @branch_name AND a.Amount > @min_amount;
END;

EXEC SPaverage @branch_name = 'Bonani', @min_amount = 170000;
GO


-- 3. Create a simple stored procedure “SPbalance” to find Amount of a particular zone. 
--    Here zone name will be passed by parameter and amount will be shown by using return value.
CREATE PROC SPbalance
    @zone VARCHAR(20)
AS
BEGIN
    DECLARE @amount INT;

    SELECT @amount = a.Amount 
    FROM Accounts a 
    JOIN Zones z ON a.Zone_Id = z.Zone_Id 
    WHERE z.Name = @zone;

    RETURN @amount;
END;
DECLARE @balance INT;
EXEC @balance = SPbalance 'Dhaka';
PRINT @balance;
GO


-- 4. Create a simple stored procedure “SPamount” to Find all account holders name with 
--    their branch name and zone name whose name has substring ‘Mr.’ and Amount Less than Maximum Amount.
CREATE PROC SPamount
AS
BEGIN
    SELECT a.Acc_holder_name, b.Branch_Name, z.Name AS Zone_Name
    FROM Accounts a
    JOIN Branches b ON a.Branch_Id = b.Br_Id
    JOIN Zones z ON a.Zone_Id = z.Zone_Id
    WHERE a.Acc_holder_name LIKE '%Mr.%'
      AND a.Amount < (SELECT MAX(Amount) FROM Accounts);
END;

EXEC SPamount;
GO


-- 5. Create a simple stored procedure “SPdetailsInfo” to find number of customer of each Zone. 
--    Here number of customers need to be printed as output parameter and zone_name will be passed as parameter.
CREATE PROC SPdetailsInfo
    @zone_name VARCHAR(50),
    @customer_count INT OUTPUT
AS
BEGIN
    SELECT @customer_count = COUNT(a.Account_no)
    FROM Accounts a
    JOIN Zones z ON a.Zone_Id = z.Zone_Id
    WHERE z.Name = @zone_name;
END;

DECLARE @total_customers INT;
EXEC SPdetailsInfo @zone_name = 'Dhaka', @customer_count = @total_customers OUTPUT;
PRINT @total_customers;
GO


-- 6. Create procedure like “spEmployeeSalaryDetails1” which has four parameter. Three parameter 
--    match the StartAmount, EndAmount value, Branch_Name Value and another parameter return this value, 
--    in this procedure find the number of Branch_Name where StartAmount, EndAmount value, 
--    Branch_Name value pass by parameter.
--    *(Note: Based on schema context, "EmployeeSalary" relates to "Accounts/Amount" column)*
CREATE PROC spEmployeeSalaryDetails1
    @StartAmount INT,
    @EndAmount INT,
    @Branch_Name VARCHAR(50),
    @branch_count INT OUTPUT
AS
BEGIN
    SELECT @branch_count = COUNT(DISTINCT b.Branch_Name)
    FROM Accounts a
    JOIN Branches b ON a.Branch_Id = b.Br_Id
    WHERE b.Branch_Name = @Branch_Name
      AND a.Amount BETWEEN @StartAmount AND @EndAmount;
END;
GO

-- Execution Example:
DECLARE @br_count INT;
EXEC spEmployeeSalaryDetails1 @StartAmount = 150000, @EndAmount = 250000, @Branch_Name = 'Bonani', @branch_count = @br_count OUTPUT;
PRINT @br_count;
GO

-- 7. Create a simple stored procedure “SPdetailsInfo_Specific” to find Zone_name, number of 
--    customer of a specific Zone.
--    *(Note: Renamed slightly from #5 to avoid SQL naming conflict)*
CREATE PROC SPdetailsInfo_Specific
    @zone_name VARCHAR(50)
AS
BEGIN
    SELECT z.Name AS Zone_name, COUNT(a.Account_no) AS Number_of_customers
    FROM Zones z
    LEFT JOIN Accounts a ON z.Zone_Id = a.Zone_Id
    WHERE z.Name = @zone_name
    GROUP BY z.Name;
END;

EXEC SPdetailsInfo_Specific @zone_name = 'Dhaka';
GO


-- 8. Create a simple stored procedure “SPdetailsInfo1” to find Zone_name, number of 
--    Branch of a specific Zone (Zone name pass by parameter).
CREATE PROC SPdetailsInfo1
    @zone_name VARCHAR(50)
AS
BEGIN
    SELECT z.Name AS Zone_name, COUNT(DISTINCT a.Branch_Id) AS Number_of_Branches
    FROM Zones z
    LEFT JOIN Accounts a ON z.Zone_Id = a.Zone_Id
    WHERE z.Name = @zone_name
    GROUP BY z.Name;
END;
EXEC SPdetailsInfo1 @zone_name = 'Dhaka';
GO