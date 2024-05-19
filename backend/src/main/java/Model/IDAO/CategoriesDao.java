package Model.IDAO;

import Model.Categories;
import Model.MotorSQL;

import java.sql.ResultSet;
import java.util.ArrayList;

public class CategoriesDao implements IDao <Categories, Integer> {

    private final String SQL_FIND_ALL = "select * from categories";
    @Override
    public int add(Categories categories) {
        return 0;
    }

    @Override
    public int delete(Integer i) {
        return 0;
    }

    @Override
    public int update(Categories categories) {
        return 0;
    }

    @Override
    public ArrayList<Categories> findAll(Categories object)
    {
        ArrayList<Categories> categories = new ArrayList<>();
        MotorSQL motor = new MotorSQL();

        try{
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_ALL);
            while (rs.next())
            {
                Categories category = new Categories();
                category.setCategory_ID(rs.getString("category_id"));
                category.setCategory_name(rs.getString("category_name"));
                categories.add(category);
            }
        }catch ( Exception ex)
        {
            categories.clear();
        }
        finally {
            motor.disconnect();
        }

        return categories;
    }
}
