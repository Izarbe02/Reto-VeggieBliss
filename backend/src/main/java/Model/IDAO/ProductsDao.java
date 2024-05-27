package Model.IDAO;

import Model.MotorSQL;
import Model.Products;

import java.sql.ResultSet;
import java.util.ArrayList;

public class ProductsDao implements IDao <Products, Integer> {

    private final String SQL_FIND_ALL = "select * from products";

    private final String SQL_FIND_BURGUER = "select * from products where category_id = 2";

    private final String SQL_FIND_SALAD = "select * from products where category_id = 4";

    private final String SQL_FIND_RAZZION = "select * from products where category_id = 5";

    private final String SQL_FIND_DESSERT = "select * from products where category_id = 3";

    private final String SQL_FIND_DRINK = "select * from products where category_id = 1";

    @Override
    public int add(Products products) {
        return 0;
    }

    @Override
    public int delete(Integer i) {
        return 0;
    }

    @Override
    public int update(Products products) {
        return 0;
    }

    public ArrayList<Products> findBurger(Products object) {

        ArrayList<Products> products = new ArrayList<>();
        MotorSQL motor = new MotorSQL();

        try {
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_BURGUER);
            while (rs.next())
            {
                Products product = new Products();
                product.setProduct_id(rs.getString("product_id"));
                product.setProduct_image(rs.getString("product_image"));
                product.setProduct_name(rs.getString("product_name"));
                product.setProduct_description(rs.getString("product_description"));
                product.setPrice(rs.getFloat("price"));
                product.setCategory_id(rs.getString("category_id"));
                products.add(product);
            }
        }catch (Exception ex)
        {
            products.clear();
        }
        finally
        {
            motor.disconnect();
        }
        return products;
    }

    public ArrayList<Products> findSalad(Products object) {

        ArrayList<Products> products = new ArrayList<>();
        MotorSQL motor = new MotorSQL();

        try {
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_SALAD);
            while (rs.next())
            {
                Products product = new Products();
                product.setProduct_id(rs.getString("product_id"));
                product.setProduct_image(rs.getString("product_image"));
                product.setProduct_name(rs.getString("product_name"));
                product.setProduct_description(rs.getString("product_description"));
                product.setPrice(rs.getFloat("price"));
                product.setCategory_id(rs.getString("category_id"));
                products.add(product);
            }
        }catch (Exception ex)
        {
            products.clear();
        }
        finally
        {
            motor.disconnect();
        }
        return products;
    }

    public ArrayList<Products> findRazzion(Products object) {

        ArrayList<Products> products = new ArrayList<>();
        MotorSQL motor = new MotorSQL();

        try {
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_RAZZION);
            while (rs.next())
            {
                Products product = new Products();
                product.setProduct_id(rs.getString("product_id"));
                product.setProduct_image(rs.getString("product_image"));
                product.setProduct_name(rs.getString("product_name"));
                product.setProduct_description(rs.getString("product_description"));
                product.setPrice(rs.getFloat("price"));
                product.setCategory_id(rs.getString("category_id"));
                products.add(product);
            }
        }catch (Exception ex)
        {
            products.clear();
        }
        finally
        {
            motor.disconnect();
        }
        return products;
    }

    public ArrayList<Products> findDessert(Products object) {

        ArrayList<Products> products = new ArrayList<>();
        MotorSQL motor = new MotorSQL();

        try {
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_DESSERT);
            while (rs.next())
            {
                Products product = new Products();
                product.setProduct_id(rs.getString("product_id"));
                product.setProduct_image(rs.getString("product_image"));
                product.setProduct_name(rs.getString("product_name"));
                product.setProduct_description(rs.getString("product_description"));
                product.setPrice(rs.getFloat("price"));
                product.setCategory_id(rs.getString("category_id"));
                products.add(product);
            }
        }catch (Exception ex)
        {
            products.clear();
        }
        finally
        {
            motor.disconnect();
        }
        return products;
    }

    public ArrayList<Products> findDrink(Products object) {

        ArrayList<Products> products = new ArrayList<>();
        MotorSQL motor = new MotorSQL();

        try {
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_DRINK);
            while (rs.next())
            {
                Products product = new Products();
                product.setProduct_id(rs.getString("product_id"));
                product.setProduct_image(rs.getString("product_image"));
                product.setProduct_name(rs.getString("product_name"));
                product.setProduct_description(rs.getString("product_description"));
                product.setPrice(rs.getFloat("price"));
                product.setCategory_id(rs.getString("category_id"));
                products.add(product);
            }
        }catch (Exception ex)
        {
            products.clear();
        }
        finally
        {
            motor.disconnect();
        }
        return products;
    }

    @Override
    public ArrayList<Products> findAll(Products object) {

        ArrayList<Products> products = new ArrayList<>();
        MotorSQL motor = new MotorSQL();

        try {
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_ALL);
            while (rs.next())
            {
                Products product = new Products();
                product.setProduct_id(rs.getString("product_id"));
                product.setProduct_image(rs.getString("product_image"));
                product.setProduct_name(rs.getString("product_name"));
                product.setProduct_description(rs.getString("product_description"));
                product.setPrice(rs.getFloat("price"));
                product.setCategory_id(rs.getString("category_id"));
                products.add(product);
            }
        }catch (Exception ex)
        {
            products.clear();
        }
        finally
        {
            motor.disconnect();
        }
        return products;
    }
}
