package Model.IDAO;

import Model.AllergensProducts;

import Model.MotorSQL;
import Model.OrderDetails;

import java.sql.ResultSet;
import java.util.ArrayList;

public class AllergensProductsDao implements IDao <AllergensProducts, Integer> {

    private final String SQL_FIND_ALL = "select * from allergens_products";

    private final String SQL_ADD = "insert into allergens_products values (";
    private final String SQL_DELETE = "delete from allergens_products where product_id=";

    private final String SQL_UPDATE = "update allergens_products set ";

    //add
    @Override
    public int add(AllergensProducts allergensProducts) {
        int response = 0;
        MotorSQL motor = new MotorSQL();
        try {
            motor.connect();
            String sql_add = SQL_ADD +
                    AllergensProducts.getProduct_id()+","+
                    AllergensProducts.getAllergen_id()+")";

            response= motor.executeUpdate(sql_add);

        } catch (Exception exception){
            response= 0;
        }
        finally {
            motor.disconnect();
        }
        return response;
    }


    //delete
    @Override
    public int delete(Integer index) {
        int response=0;
        MotorSQL motor = new MotorSQL();

        try{
            motor.connect();
            String sql = SQL_DELETE+index;
            response = motor.executeUpdate(sql);

        }catch ( Exception ex)
        {
            response=0;
        }
        finally {
            motor.disconnect();
        }

        return response;
    }
//update
    @Override
    public int update(AllergensProducts allergensProducts ) {
        int response = 0;
        MotorSQL motor = new MotorSQL();
        try {
            motor.connect();
            String sql_update = SQL_UPDATE +
                    "product_id = " + allergensProducts.getProduct_id()+
                    ", allergen_id = " + allergensProducts.getAllergen_id()+ " where products_id = " + allergensProducts.getProduct_id();

            response= motor.executeUpdate(sql_update);

        } catch (Exception exception){
            response= 0;
        }
        finally {
            motor.disconnect();
        }
        return response;
    }

    @Override
    public ArrayList<AllergensProducts> findAll(AllergensProducts object)
    {
        ArrayList<Model.AllergensProducts> allergensProducts = new ArrayList<>();
        MotorSQL motor = new MotorSQL();

        try{
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_ALL);
            while (rs.next())
            {
                //product_id  allergen_id
                AllergensProducts allergenProduct = new AllergensProducts();
                allergenProduct.setProduct_id(rs.getString("product_id"));
                allergenProduct.setAllergen_id(rs.getString("allergen_id"));
                allergensProducts.add(allergenProduct);
            }
        }catch ( Exception ex)
        {
            allergensProducts.clear();
        }
        finally {
            motor.disconnect();
        }

        return allergensProducts;
    }
}
