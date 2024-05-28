package Model.IDAO;
//allergen_id , allergen_name
import Model.Allergens;

import Model.MotorSQL;
import Model.OrderDetails;

import java.sql.ResultSet;
import java.util.ArrayList;

public class AllergensDao implements IDao<Allergens, Integer> {
    private final String SQL_FIND_ALL = "select * from allergens";

    private final String SQL_ADD = "insert into allergens values (";
    private final String SQL_DELETE = "delete from allergens where allergen_id=";

    private final String SQL_UPDATE = "update allergens set ";
    @Override
    public int add(Allergens allergens) {
        int response = 0;
        MotorSQL motor = new MotorSQL();
        try {
            motor.connect();
            String sql_add = SQL_ADD +
                    allergens.getAllergen_id()+","+
                    allergens.getAllergen_name()+")";

            response= motor.executeUpdate(sql_add);

        } catch (Exception exception){
            response= 0;
        }
        finally {
            motor.disconnect();
        }
        return response;
    }
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
    ///////////update
    @Override
    public int update(Allergens allergens) {
        int response = 0;
        MotorSQL motor = new MotorSQL();
        try {
            motor.connect();
            String sql_update = SQL_UPDATE +
                    "allergen_id = " + allergens.getAllergen_id()+
                    ", 'allergen_name = " + allergens.getAllergen_name()+"' where allergen_id = " + allergens.getAllergen_id();

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
