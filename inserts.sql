
BEGIN

INSERT INTO departments VALUES(1,'IT');

INSERT INTO departments VALUES(2,'HHRR');

INSERT INTO departments VALUES(3,'DELIVERY');

INSERT INTO departments VALUES(4,'LOCAL');

COMMIT;

EXCEPTION

WHEN OTHERS THEN 

ROLLBACK;

END;


BEGIN

INSERT INTO jobs VALUES(1,'CHEF');

INSERT INTO jobs VALUES(2,'WAITER');

INSERT INTO jobs VALUES(3,'DEVELOPER');

INSERT INTO jobs VALUES(4,'RIDER');

INSERT INTO jobs VALUES(5,'GENERAL MANAGER');

INSERT INTO jobs VALUES(6, 'ASSISTANT MANAGER'); 

INSERT INTO jobs VALUES(7,'HUMAN RESOURCES');

INSERT INTO jobs VALUES(8,'MARKETING MANAGER');

INSERT INTO jobs VALUES(9,'ACCOUNTANT');

INSERT INTO jobs VALUES(10,'ADMINISTRATIVE ASSISTANT');

INSERT INTO jobs VALUES(11,'CASHIER');

INSERT INTO jobs VALUES(12,'DELIVERY COOK');

COMMIT;

EXCEPTION

WHEN OTHERS THEN 

ROLLBACK;

END;


BEGIN

INSERT INTO employees VALUES(11,'Emily','Davis','davisveggiebliss@gmail.com','123','123 456 789',4,6);

INSERT INTO employees VALUES(12,'Michael','Johnson','johnsonveggiebliss@gmail.com','123','234 567 890',4,11);

INSERT INTO employees VALUES(13,'Sophie','Anderson','andersonveggiebliss@gmail.com','123','345 678 901',4,1);

INSERT INTO employees VALUES(14,'David','Smith','smithveggiebliss@gmail.com','123','456 789 012',4,2);

INSERT INTO employees VALUES(15,'Emma','Brown','brownveggiebliss@gmail.com','123','567 890 123',4,12);

INSERT INTO employees VALUES(16,'Oliver','Wilson','wilsonveggiebliss@gmail.com','123','678 901 234',4,2);

INSERT INTO employees VALUES(17,'Isabella','Taylor','taylorveggiebliss@gmail.com','123','789 012 345',4,2);

INSERT INTO employees VALUES(18,'Liam','Moore','mooreveggiebliss@gmail.com','123','890 123 456',4,11);

INSERT INTO employees VALUES(19,'Ava','Jackson','jacksonveggiebliss@gmail.com','123','901 234 567',4,1);

INSERT INTO employees VALUES(20,'Noah','Harris','harrisveggiebliss@gmail.com','123','012 345 678',4,2);

INSERT INTO employees VALUES(21,'Sophia','Martin','martinveggiebliss@gmail.com','123','987 654 321',4,1);

INSERT INTO employees VALUES(22,'James','Thompson','thompsonveggiebliss@gmail.com','123','876 543 210',4,1);

INSERT INTO employees VALUES(23,'Charlotte','White','whiteveggiebliss@gmail.com','123','765 432 109',4,2);

INSERT INTO employees VALUES(24,'Mason','Lee','leeveggiebliss@gmail.com','123','654 321 098',4,2);

INSERT INTO employees VALUES(25,'Amelia','Clark','clarkveggiebliss@gmail.com','123','543 210 987',3,4);

INSERT INTO employees VALUES(26,'Ethan','Lewis','lewisveggiebliss@gmail.com','123','432 109 876',3,4);

INSERT INTO employees VALUES(27,'Evelyn','Walker','walkerveggiebliss@gmail.com','123','321 098 765',3,4);

INSERT INTO employees VALUES(28,'Alexander','Hall','hallveggiebliss@gmail.com','123','210 987 654',3,4);

INSERT INTO employees VALUES(29,'Luna', 'Young','youngveggiebliss@gmail.com','123','098 765 432',3,10);

INSERT INTO employees VALUES(30,'Henry','Wright','wrightveggiebliss@gmail.com','123','876 543 210',3,10);

INSERT INTO employees VALUES(31,'Mia','King','kingveggiebliss@gmail.com','123','765 432 109',3,10);

INSERT INTO employees VALUES(32,'William','Evans','evansveggiebliss@gmail.com','123','654 321 098',3,10);

INSERT INTO employees VALUES(33,'Harper','Allen','allenveggiebliss@gmail.com','123','543 210 987',3,10);

INSERT INTO employees VALUES(34,'Benjamin','Green','greenveggiebliss@gmail.com','123','432 109 876',3,4);

INSERT INTO employees VALUES(35,'Camila', 'Baker','bakerveggiebliss@gmail.com','123','321 098 765',3,4);

INSERT INTO employees VALUES(36,'Elijah', 'Adams','adamsveggiebliss@gmail.com','123','210 987 654',4,5);

INSERT INTO employees VALUES(37,'Stella','Ward','wardveggiebliss@gmail.com','123','098 765 432',2,6);

INSERT INTO employees VALUES(38,'Lucas','Rivera','riveraveggiebliss@gmail.com','123','876 543 210',2,8);

INSERT INTO employees VALUES(39, 'Zoe', 'Cooper', 'cooperveggiebliss@gmail.com', '123', '765 432 109', 2,9); 

INSERT INTO employees VALUES(40,'Aiden','Perez','perezveggiebliss@gmail.com','123','654 321 098',2,10);

INSERT INTO employees VALUES(41,'Mila','Gonzalez','gonzalezveggiebliss@gmail.com','123','543 210 987',1,5);

INSERT INTO employees VALUES(42,'Jacob','Hill','hillveggiebliss@gmail.com','123','432 109 876',1,3);

INSERT INTO employees VALUES(43,'Avery','Roberts','robertsveggiebliss@gmail.com','123','321 098 765',1,3);

INSERT INTO employees VALUES(44,'Layla','Cook','cookveggiebliss@gmail.com','123','210 987 654',1,3);

INSERT INTO employees VALUES(45,'Logan','Nelson','nelsonveggiebliss@gmail.com','123','098 765 432',1,3);

INSERT INTO employees VALUES(46,'Ella','Hill','hillveggiebliss@gmail.com','123','876 543 210',4,2);

INSERT INTO employees VALUES(47,'Carter','Howard','howardveggiebliss@gmail.com','123','765 432 109',4,2);

INSERT INTO employees VALUES(48,'Grace','Ramirez','ramirezveggiebliss@gmail.com','123','654 321 098',3,10);

INSERT INTO employees VALUES(49,'Sebastian','Campbell','campbellveggiebliss@gmail.com','123','543 210 987',4,2);

INSERT INTO employees VALUES(50,'Liam','Sanders','sandersveggiebliss@gmail.com','123','432 109 876',3,4);

COMMIT;

EXCEPTION

WHEN OTHERS THEN 

ROLLBACK;

END;


BEGIN

INSERT INTO clients VALUES(1,'Aiko','Tanaka','aitveggiebliss@gmail.com','543 210 557','456');

INSERT INTO clients VALUES(2,'Luca','Rossi','alucarveggiebliss@gmail.com','543 210 557','456');

INSERT INTO clients VALUES(3,'Nikolai','Khan','kahaiveggiebliss@gmail.com','543 210 557','456');

COMMIT;

EXCEPTION

WHEN OTHERS THEN 

ROLLBACK;

END;



BEGIN

INSERT INTO allergens VALUES(1,'Cereals');

INSERT INTO allergens VALUES(2,'Gluten');

INSERT INTO allergens VALUES(3,'Crustaceans');

INSERT INTO allergens VALUES(4,'Eggs');

INSERT INTO allergens VALUES(5,'Fish');

INSERT INTO allergens VALUES(6,'Peanuts');

INSERT INTO allergens VALUES(7,'Soybeans');

INSERT INTO allergens VALUES(8,'Milk');

INSERT INTO allergens VALUES(9,'Nuts');

COMMIT;

EXCEPTION

WHEN OTHERS THEN 

ROLLBACK;

END;



BEGIN

INSERT INTO categories VALUES(1,'Drinks');

INSERT INTO categories VALUES(2,'Burguers');

INSERT INTO categories VALUES(3,'Desserts');

INSERT INTO categories VALUES(4,'Salads');

INSERT INTO categories VALUES(5,'Razziones');

COMMIT;

EXCEPTION

WHEN OTHERS THEN 

ROLLBACK;

END;

BEGIN
    INSERT INTO products VALUES(1,'Ambar','fresh beer from Zaragossa','../images/ambar.jpg',2.10,1);
    
    INSERT INTO products VALUES(2,'Ambar O%','Enjoy your beer with 0 alcohol!','../images/ambar-0.jpg',2.10,1);
    
    INSERT INTO products VALUES(3,'Ambar Gluten Free','Ambar now suitable for celiacs','../images/ambar-sin-gluten.jpg',2.10,1);
    
    INSERT INTO products VALUES(4,'Water','mineral water to keep you hydrated (1l)','../images/agua.jpg',3.10,1);
    
    INSERT INTO products VALUES(5,'Frixen','ethical and social soft cola drink','../images/frixen.jpg',3.30,1);
    
    INSERT INTO products VALUES(6,'Tempore Vendimia', 'Garnacha, (Bajo Aragón) and Tempranillo','../images/vino-tinto.png',15.50,1);
    
    INSERT INTO products VALUES(7,'Idrias Ecologico','Chadornnay, (Somontano)','../images/vino-blanco.jpg',17.50,1);
    
    INSERT INTO products VALUES(8,'Organic Apple Juice', 'get those vitamins in!','../images/zumo-manzana-ecologico.jpg',4.80,1);
    
    INSERT INTO products VALUES(9,'Organic Cider', 'Organic cider, (Astigarraga)','../images/sidra.jpg',12.30,1);
    
    INSERT INTO products VALUES(10,'Golden Harvest Oat Burger','Delight in our hearty oatmeal burger, layered with crisp lettuce, juicy tomato, a blend of fresh greens, tangy pickles, and our creamy homemade veganesa. A nutritious and satisfying bite','../images/avena.jpg',8.50,2);
    
    INSERT INTO products VALUES(11,'Smoky Black Bean Bliss','Savor the rich flavors of our black bean burger, enhanced with vegetable protein and smoky paprika. Topped with a medley of greens, zesty pico de gallo, and creamy diced avocado, all embraced by soft artisan bread.','../images/blackbeans.png',8.70,2);
    
    INSERT INTO products VALUES(12,'Tropical Pulled Pork','Experience the exotic with our BBQ jackfruit "pulled pork" burger, perfectly complemented by mixed lettuce, crunchy sliced carrot, tangy ketchup, and our luscious homemade veganesa. Served on a hearty whole wheat seed bun, it is a tropical vacation for your taste buds.','../images/burguer-jackfruit.jpg',9.50,2);
    
    INSERT INTO products VALUES(13,'Quinoa Crunch Supreme','Indulge in our protein-packed quinoa burger, featuring layers of ripe tomato, roasted red peppers, savory tofu, and smooth guacamole. Nestled between soft corn bread buns, this burger is a crunchy, flavorful delight.','../images/quinoa.jpg',9.50,2);
    
    INSERT INTO products VALUES(14,'Ruby Red Beet Burger','Treat yourself to the vibrant flavors of our soy and beet vegetable protein burger, topped with tender baby spinach, crunchy sliced carrots, roasted peppers, and rich homemade tomato sauce. A deliciously colorful feast.','../images/burguer-remolacha.jpg',8.50,2);
    
    INSERT INTO products VALUES(15,'Double Beet Fusion Burger','Discover the perfect blend of flavors with our beet and soy burger, adorned with creamy guacamole, roasted pumpkin, and a fresh cilantro sauce. All encased in artisan chia and pumpkin seed buns, this burger offers a fusion of taste and texture that is simply irresistible.','../images/remolacha.jpg',9.50,2);
    
    INSERT INTO products VALUES(16,'Choco Delight Crepes','Light and fluffy homemade crepes drizzled with rich, velvety chocolate syrup. A perfect balance of sweetness and texture, making every bite a heavenly treat.','../images/crepes.jpeg',3.50,3);
    
    INSERT INTO products VALUES(17,'Citrus Bliss Pie','A refreshing soya and lemon pie with a cookie crunch base, topped with fresh strawberries. A delightful burst of citrusy goodness in every bite.','../images/lemon-pie.jpg',3.50,3);
    
    INSERT INTO products VALUES(18,'Cinnamon Dream Pancakes','Homemade cinnamon pancakes served with warm toffee sauce, fresh strawberries, sliced banana, and a scoop of creamy vanilla ice cream.','../images/pankakes.jpg',4.70,3);
    
    INSERT INTO products VALUES(19,'Tropical Tofu Cheesecake','A creamy tofu cheesecake on a crunchy cookie base, finished with a zesty lemon and passion fruit marmalade.','../images/cheesecake.jpg',4.50,3);
    
    INSERT INTO products VALUES(20,'Tofu Garden Delight','A vibrant mix of fresh greens topped with golden baked tofu cubes, drizzled with a fragrant fennel sauce. A refreshing and satisfying salad perfect for any meal.','../images/ensaladatofu.jpg',6.50,4);
    
    INSERT INTO products VALUES(21,'Crisp Cucumber Radiance','A refreshing medley of mixed greens, crunchy radishes, crisp apples, juicy tomatoes, and cucumbers, all topped with a delightful strawberry dressing. A burst of flavor and freshness in every bite.','../images/ensalada3.jpg',7.80,4);
    
    INSERT INTO products VALUES(22,'Avocado Bliss Bowl','A delicious blend of baby spinach, sweet cherry tomatoes, briny black olives, savory tofu, crunchy whole wheat bread, and walnuts, all tossed in aromatic basil oil. A rich and wholesome salad that is simply irresistible.','../images/ensalada-aguacate.jpg',7.50,4);
    
    INSERT INTO products VALUES(23,'Falafel Fiesta','Enjoy a flavorful mix of semolina, fresh cucumber, juicy cherry tomatoes, creamy hummus, and hearty pumpkin falafel. A delicious and satisfying salad that brings a taste of the Mediterranean to your table.','../images/ensalada-falafel.jpg',8.50,4);
    
    INSERT INTO products VALUES(24,'Beet and Lentil Harmony','A nourishing bowl of peppery arugula, tender lentils, crisp broccoli, savory tofu with soy sauce, earthy mushrooms, and sweet beets, all brought together with a creamy tahini dressing. A symphony of flavors and textures.','../images/ensalada-remolacha.jpg',6.50,4);
    
    INSERT INTO products VALUES(25,'Sweet Potato Bliss Balls','Indulge in two sweet potato dumplings stuffed with melty vegan cheese and topped with a fresh tomato sauce. A delightful and comforting treat.','../images/bolas-boniato.jpg',4.50,5);
    
    INSERT INTO products VALUES(26,'Spiced Onion Rings','Enjoy perfectly spiced and baked onion rings, crispy on the outside and tender on the inside. A savory snack that is hard to resist.','../images/cebolleta.jpg',4.50,5);
    
    INSERT INTO products VALUES(27,'Mushroom Croquetas','Savor the crispy goodness of mushroom croquetas, served with our creamy homemade veganesa. A delectable bite of comfort and flavor.','../images/croquetas(1).jpg',4.50,5);
    
    INSERT INTO products VALUES(28,'Broccoli Panko Croquetas','Delight in the crunch of broccoli panko croquetas, golden and crispy on the outside, tender and flavorful on the inside. A perfect bite-sized treat.','../images/bolas-boniato.jpg',4.50,5);
    
    INSERT INTO products VALUES(29,'Classic Babaganoush','Relish the traditional Arabian eggplant cream, seasoned with spices and served with fresh asparagus. A creamy and exotic dip that is perfect for sharing.','../images/croquetas.jpg',4.50,5);
    
    INSERT INTO products VALUES(30,'Pumpkin Spice Hummus','Dive into our chickpea and pumpkin hummus, infused with paprika and spices. A creamy and flavorful spread that adds a touch of autumn to every bite.','../images/humus.jpg',4.50,5);
    
    INSERT INTO products VALUES(31,'Red Pepper Muhammara','Enjoy the rich and savory flavors of our traditional Arabian red pepper cream, blended with black olives, fresh tomato, and aromatic basil. A vibrant and tasty dip that pairs well with any meal.','../images/muhammara.jpg',6.50,5);
    
    COMMIT;

EXCEPTION

    WHEN OTHERS THEN 

        ROLLBACK;

END;






BEGIN

INSERT INTO allergens_products VALUES(1,2);

INSERT INTO allergens_products VALUES(2,2);

INSERT INTO allergens_products VALUES(3,1);

INSERT INTO allergens_products VALUES(10,7);

INSERT INTO allergens_products VALUES(11,2);

INSERT INTO allergens_products VALUES(12,2);

INSERT INTO allergens_products VALUES(13,7);

INSERT INTO allergens_products VALUES(14,2);

INSERT INTO allergens_products VALUES(15,2);

INSERT INTO allergens_products VALUES(16,2);

INSERT INTO allergens_products VALUES(17,7);

INSERT INTO allergens_products VALUES(18,2);

INSERT INTO allergens_products VALUES(19,7);

INSERT INTO allergens_products VALUES(20,7);

INSERT INTO allergens_products VALUES(21,9);

INSERT INTO allergens_products VALUES(22,9);

INSERT INTO allergens_products VALUES(23,1);

INSERT INTO allergens_products VALUES(24,7);

INSERT INTO allergens_products VALUES(25,1);

INSERT INTO allergens_products VALUES(26,2);

INSERT INTO allergens_products VALUES(27,9);

INSERT INTO allergens_products VALUES(28,9);

INSERT INTO allergens_products VALUES(29,1);

INSERT INTO allergens_products VALUES(30,1);

INSERT INTO allergens_products VALUES(31,1);

COMMIT;

EXCEPTION

WHEN OTHERS THEN 

ROLLBACK;

END;



