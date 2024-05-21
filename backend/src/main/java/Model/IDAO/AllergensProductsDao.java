package Model.IDAO;

import Model.AllergensProducts;
import Model.Categories;
import Model.MotorSQL;

import java.sql.ResultSet;
import java.util.ArrayList;

public class AllergensProductsDao implements IDao <AllergensProducts, Integer> {

    private final String SQL_FIND_ALL = "select * from allergens_products";
    @Override
    public int add(Model.AllergensProducts allergensProducts) {
        return 0;
    }

    @Override
    public int delete(Integer i) {
        return 0;
    }

    @Override
    public int update(Model.AllergensProducts allergensproducts) {
        return 0;
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
