### MYSQL 
https://www.fullstack.cafe/blog/mysql-interview-questions

1. having 
2. GroupBy 

select count(Country),country from Customers group by Country having count(Country) > 1 order by Country ASC

Select count(Country) , Country from Customers 
group by Country 
having count(Country) > 5
order by Country DESC 