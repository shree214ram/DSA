https://www.javatpoint.com/sql-stored-procedure

https://www.geeksforgeeks.org/what-is-stored-procedures-in-sql/

https://www.w3schools.com/SQL/sql_stored_procedures.asp

CREATE or REPLACE PROCEDURE INC_SAL(eno IN NUMBER, up_sal OUT NUMBER)
IS
BEGIN
UPDATE emp_table SET salary = salary+1000 WHERE emp_no = eno;
COMMIT;
SELECT sal INTO up_sal FROM emp_table WHERE emp_no = eno;
END; 