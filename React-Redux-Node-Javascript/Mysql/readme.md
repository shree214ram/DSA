### MYSQL 
https://www.fullstack.cafe/blog/mysql-interview-questions

1. having 
2. GroupBy 

select count(Country),country from Customers group by Country having count(Country) > 1 order by Country ASC

Select count(Country) , Country from Customers 
group by Country 
having count(Country) > 5
order by Country DESC 


https://www.youtube.com/watch?v=RZc4QSRRk98&ab_channel=CrackConcepts
https://www.youtube.com/watch?v=s1QkS4PfiFg&ab_channel=CrackConcepts

1. Difference between JOIN/UNION
2. Difference between WHERE/HAVING
3. Difference between UNION/UNION All 
4. Difference between GROUP BY/ORDER BY
5. Difference between JOIN/SUBQUERY
6. Difference between IN/EXISTS

### Find the Second Largest Salary in mysql ?
https://www.geeksforgeeks.org/sql-query-to-find-second-largest-salary/
1. If AS Working
SELECT name, MAX(salary) AS salary 
FROM employee 
WHERE salary <> (SELECT MAX(salary) 
FROM employee);
2.  If AS NOT Working
SELECT  MAX(Price)  FROM Products WHERE Price <> (SELECT MAX(Price) FROM Products);

### How to find the third largest salary? 
Simple, we can do one more nesting.  

SELECT name, MAX(salary) AS salary
  FROM employee
 WHERE salary < (SELECT MAX(salary) 
                 FROM employee
                 WHERE salary < (SELECT MAX(salary)
                 FROM employee)
                ); 


### Find the Second Max Count in mysql ?
SELECT MAX(Price) as maximum FROM Products 
having maximum > MAX(Price)
group by Price 
order by Price desc  
limit 1,1;


