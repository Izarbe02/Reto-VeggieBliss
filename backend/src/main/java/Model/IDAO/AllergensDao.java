package Model.IDAO;
//allergen_id , allergen_name
import Model.Allergens;

import Model.MotorSQL;

import java.sql.ResultSet;
import java.util.ArrayList;

public class AllergensDao implements IDao<Allergens, Integer> {
    private final String SQL_FIND_ALL = "select * from allergens";
    @Override
    public int add(Allergens allergens) {
        return 0;
    }

    @Override
    public int delete(Integer i) {
        return 0;
    }

    @Override
    public int update(Allergens allergens) {
        return 0;
    }

    @Override
    public ArrayList<Allergens> findAll(Allergens object)
    {
        ArrayList<Allergens> allergens = new ArrayList<>();
        MotorSQL motor = new MotorSQL();

        try{
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_ALL);
            while (rs.next())
            {
                Allergens allergen = new Allergens();
                allergen.setAllergen_id(rs.getString("allergen_id"));
                allergen.setAllergen_name(rs.getString("allergen_name"));
                allergens.add(allergen);
            }
        }catch ( Exception ex)
        {
            allergens.clear();
        }
        finally {
            motor.disconnect();
        }

        return allergens;
    }

}
