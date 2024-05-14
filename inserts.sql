

--faltan foreign
-- DEPARTMENTS
BEGIN

INSERT INTO departments VALUES(1,'IT',1);

INSERT INTO departments VALUES(2,'HHRR',2);

INSERT INTO departments VALUES(3,'DELIVERY',3);

INSERT INTO departments VALUES(4,'LOCAL',4);

COMMIT;

EXCEPTION

WHEN OTHERS THEN 

ROLLBACK;

END;


-- JOBS
BEGIN

INSERT INTO jobs VALUES(1,'CHEF');

INSERT INTO jobs VALUES(2,'WAITER');

INSERT INTO jobs VALUES(3,'DEVELOPER');

INSERT INTO jobs VALUES(4,'RIDER');

INSERT INTO jobs VALUES(5,'GENERAL MANAGER');

INSERT INTO jobs VALUES(6'ASSISTANT MANAGER');

INSERT INTO jobs VALUES(7,'HUMAN RESOURCES');

INSERT INTO jobs VALUES(8,'MARKETING MANAGER');

INSERT INTO jobs VALUES(9,'ACCOUNTANT');

INSERT INTO jobs VALUES(10,'ADMINISTRATIVE ASSISTANT');

INSERT INTO jobs VALUES(11,'CASHIER');

INSERT INTO jobs VALUES(10,'DELIVERY COOK');

COMMIT;

EXCEPTION

WHEN OTHERS THEN 

ROLLBACK;

END;

-- EMPLOYEES

BEGIN

INSERT INTO employees VALUES(11,'Emily', 'Davis','davisveggiebliss@gmail.com','123','123 456 789',4,4,6);

INSERT INTO employees VALUES(12,'Michael', 'Johnson','johnsonveggiebliss@gmail.com','123','234 567 890',4,4,1);

INSERT INTO employees VALUES(13,'Sophie', 'Anderson','andersonveggiebliss@gmail.com','123','345 678 901',3,4,6);

INSERT INTO employees VALUES(14,'David', 'Smith','smithveggiebliss@gmail.com','123','456 789 012',4,4,5);

INSERT INTO employees VALUES(15,'Emma', 'Brown','brownveggiebliss@gmail.com','123','567 890 123',3,4,6);

INSERT INTO employees VALUES(16,'Oliver', 'Wilson','wilsonveggiebliss@gmail.com','123','678 901 234',4,4,5);

INSERT INTO employees VALUES(17,'Isabella', 'Taylor','taylorveggiebliss@gmail.com','123','789 012 345',4,4,5);

INSERT INTO employees VALUES(18,'Liam', 'Moore','mooreveggiebliss@gmail.com','123','890 123 456',4,4,5);

INSERT INTO employees VALUES(19,'Ava', 'Jackson','jacksonveggiebliss@gmail.com','123','901 234 567',4,4,5);

INSERT INTO employees VALUES(20,'Noah', 'Harris','harrisveggiebliss@gmail.com','123','012 345 678',4,4,5);

INSERT INTO employees VALUES(21,'Sophia', 'Martin','martinveggiebliss@gmail.com','123','987 654 321',4,4,5);

INSERT INTO employees VALUES(22,'James', 'Thompson','thompsonveggiebliss@gmail.com','123','876 543 210',4,4,5);

INSERT INTO employees VALUES(23,'Charlotte', 'White','whiteveggiebliss@gmail.com','123','765 432 109',4,4,5);

INSERT INTO employees VALUES(24,'Mason', 'Lee','leeveggiebliss@gmail.com','123','654 321 098',4,4,5);

INSERT INTO employees VALUES(25,'Amelia', 'Clark','clarkveggiebliss@gmail.com','123','543 210 987',4,4,5);

INSERT INTO employees VALUES(26,'Ethan', 'Lewis','lewisveggiebliss@gmail.com','123','432 109 876',4,4,5);

INSERT INTO employees VALUES(27,'Evelyn', 'Walker','walkerveggiebliss@gmail.com','123','321 098 765',4,4,5);

INSERT INTO employees VALUES(28,'Alexander', 'Hall','hallveggiebliss@gmail.com','123','210 987 654',4,4,5);

INSERT INTO employees VALUES(29,'Luna', 'Young','youngveggiebliss@gmail.com','123','098 765 432',4,4,5);

INSERT INTO employees VALUES(30,'Henry', 'Wright','wrightveggiebliss@gmail.com','123','876 543 210',4,4,5);

INSERT INTO employees VALUES(31,'Mia', 'King','kingveggiebliss@gmail.com','123','765 432 109',4,4,5);

INSERT INTO employees VALUES(32,'William', 'Evans','evansveggiebliss@gmail.com','123','654 321 098',4,4,5);

INSERT INTO employees VALUES(33,'Harper', 'Allen','allenveggiebliss@gmail.com','123','543 210 987',4,4,5);

INSERT INTO employees VALUES(34,'Benjamin', 'Green','greenveggiebliss@gmail.com','123','432 109 876',4,4,5);

INSERT INTO employees VALUES(35,'Camila', 'Baker','bakerveggiebliss@gmail.com','123','321 098 765',4,4,5);

INSERT INTO employees VALUES(36,'Elijah', 'Adams','adamsveggiebliss@gmail.com','123','210 987 654',4,4,5);

INSERT INTO employees VALUES(37,'Stella', 'Ward','wardveggiebliss@gmail.com','123','098 765 432',4,4,5);

INSERT INTO employees VALUES(38,'Lucas', 'Rivera','riveraveggiebliss@gmail.com','123','876 543 210',4,4,5);

INSERT INTO employees VALUES(39,'Zoe', 'Cooper','cooperveggiebliss@gmail.com','123','765 432 109',4,4,5);

INSERT INTO employees VALUES(40,'Aiden', 'Perez','perezveggiebliss@gmail.com','123','654 321 098',4,4,5);

INSERT INTO employees VALUES(41,'Mila', 'Gonzalez','gonzalezveggiebliss@gmail.com','123','543 210 987',4,4,5);

INSERT INTO employees VALUES(42,'Jacob', 'Hill','hillveggiebliss@gmail.com','123','432 109 876',4,4,5);

INSERT INTO employees VALUES(43,'Avery', 'Roberts','robertsveggiebliss@gmail.com','123','321 098 765',4,4,5);

INSERT INTO employees VALUES(44,'Layla', 'Cook','cookveggiebliss@gmail.com','123','210 987 654',4,4,5);

INSERT INTO employees VALUES(45,'Logan', 'Nelson','nelsonveggiebliss@gmail.com','123','098 765 432',4,4,5);

INSERT INTO employees VALUES(46,'Ella', 'Hill','hillveggiebliss@gmail.com','123','876 543 210',4,4,5);

INSERT INTO employees VALUES(47,'Carter', 'Howard','howardveggiebliss@gmail.com','123','765 432 109',4,4,5);

INSERT INTO employees VALUES(48,'Grace', 'Ramirez','ramirezveggiebliss@gmail.com','123','654 321 098',4,4,5);

INSERT INTO employees VALUES(49,'Sebastian', 'Campbell','campbellveggiebliss@gmail.com','123','543 210 987',4,4,5);

INSERT INTO employees VALUES(50,'Liam', 'Sanders','sandersveggiebliss@gmail.com','123','432 109 876',4,4,5);

COMMIT;

EXCEPTION

WHEN OTHERS THEN 

ROLLBACK;

END;

-- CLIENTS autorellenar???
BEGIN

INSERT INTO clients VALUES

INSERT INTO clients VALUES

INSERT INTO clients VALUES

INSERT INTO clients VALUES

INSERT INTO clients VALUES

INSERT INTO clients VALUES


COMMIT;

EXCEPTION

WHEN OTHERS THEN 

ROLLBACK;

END;


-- ORDERS autorellenar???
BEGIN

INSERT INTO orders VALUES()

INSERT INTO orders VALUES

INSERT INTO orders VALUES

INSERT INTO orders VALUES

INSERT INTO orders VALUES

COMMIT;

EXCEPTION

WHEN OTHERS THEN 

ROLLBACK;

END;

-- ALLERGENS

BEGIN

INSERT INTO allergens VALUES(1,'Cereals ')

INSERT INTO allergens VALUES(2,'Gluten ')

INSERT INTO allergens VALUES(3,'Crustaceans')

INSERT INTO allergens VALUES(4,'Eggs')

INSERT INTO allergens VALUES(5,'Fish')

INSERT INTO allergens VALUES(6,'Peanuts')

INSERT INTO allergens VALUES(7,'Soybeans')

INSERT INTO allergens VALUES(8,'Milk')

INSERT INTO allergens VALUES(9,'Nuts')

COMMIT;

EXCEPTION

WHEN OTHERS THEN 

ROLLBACK;

END;


-- CATEGORIES revisar nombres
BEGIN

INSERT INTO categories VALUES(1,'Bebidas ')

INSERT INTO categories VALUES(2,'Hamburguesas ')

INSERT INTO categories VALUES(3,'Postres')

INSERT INTO categories VALUES(4,'Bebidas')

INSERT INTO categories VALUES(5,'Ensaladas')

INSERT INTO categories VALUES(6,'Raciones')

COMMIT;

EXCEPTION

WHEN OTHERS THEN 

ROLLBACK;

END;

-- PRODUCTS
BEGIN

INSERT INTO products VALUES(1,'ambar'--description,price number,categoriy_id(fk) --)

INSERT INTO products VALUES(2,'ambar0')

INSERT INTO products VALUES(3,'ambarSinGluten')

INSERT INTO products VALUES(4,'agua')

INSERT INTO products VALUES(5,'frixen')

INSERT INTO products VALUES(6,'redWine')

INSERT INTO products VALUES(7,'whiteWine')

INSERT INTO products VALUES(8,'cider')

INSERT INTO products VALUES(9,'oatmeal_burguer')

INSERT INTO products VALUES(10,'blackbeans_burguer')

INSERT INTO products VALUES(11,'jackfruit_burguer')

INSERT INTO products VALUES(12,'quinoa_burguer')

INSERT INTO products VALUES(13,'beet_burguer')

INSERT INTO products VALUES(14,'beet2_burguer ')

INSERT INTO products VALUES(15,'crepes')

INSERT INTO products VALUES(16,'lemonPie')

INSERT INTO products VALUES(17,'pancakes')

INSERT INTO products VALUES(18,'cheesecake')

INSERT INTO products VALUES(19,'tofuSalad')

INSERT INTO products VALUES(20,'cucumberSalad ')

INSERT INTO products VALUES(21,'falafelSalad')

INSERT INTO products VALUES(22,'beetSalad')

INSERT INTO products VALUES(23,'avocadoSalad')

INSERT INTO products VALUES(24,'bolitasBoniato')

INSERT INTO products VALUES(25,'cebolleta')

INSERT INTO products VALUES(26,'croquetas1')

INSERT INTO products VALUES(27,'croquetas2')

INSERT INTO products VALUES(28,'hummus')

INSERT INTO products VALUES(29,'muhamara')

INSERT INTO products VALUES(30,'babaganoush')

COMMIT;

EXCEPTION

WHEN OTHERS THEN 

ROLLBACK;

END;




--ALLERGENSPRODUCT product_id ,allergen_id 


--ORDERDETAILS autorellenado? 
--orderdetail_id ,product_name,quantity_product ,sales_price ,product_id ,employee_id,order_id 
