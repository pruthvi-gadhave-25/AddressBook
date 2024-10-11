use EmployeeDB ;


SELECT  * FROM Employees ;

 SELECT *FROM Employees where EmployeeId = 1 ;

CREATE TABLE Employees (
    EmployeeId INT IDENTITY(1,1) PRIMARY KEY,
    EmployeeName VARCHAR(100),
    EmployeeEmail VARCHAR(100),
    EmployeeMobile VARCHAR(20),
    EmployeeAddress VARCHAR(255)
);

DROP TABLE if EXISTS Employees

