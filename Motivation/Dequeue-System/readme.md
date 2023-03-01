
You
to
Everyone
02:21 PM
SP
shree214ram@gmail.com
Abhisheik Deo
to
Everyone
02:50 PM

Employee table: id, name, dept_id
Department table: id, name
Output: Department Name, Count Of Employees
You
to
Everyone
02:54 PM
SP
select DeparttmentName, sum(employee) as empCount groupby departmentname having empCount>=20
select dept_id as  DeparttmentName , sum(employee) as empCount from table_name , groupby departmentname having empCount>=20