package Model.IDAO;

import Model.Departments;
import Model.MotorSQL;

import java.sql.ResultSet;
import java.util.ArrayList;

public class DepartmentsDao implements IDao <Departments, Integer>{

    private final String SQL_FIND_ALL = "select * from departments";
    @Override
    public int add(Departments departments) {
        return 0;
    }

    @Override
    public int delete(Integer i) {
        return 0;
    }

    @Override
    public int update(Departments departments) {
        return 0;
    }

    @Override
    public ArrayList<Departments> findAll(Departments object) {
        ArrayList<Departments> departments = new ArrayList<>();
        MotorSQL motor = new MotorSQL();

        try
        {
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_ALL);
            while (rs.next())
            {
                Departments department = new Departments();
                department.setDepartment_id(rs.getString("department_id"));
                department.setDepartment_name(rs.getString("department_name"));
                departments.add(department);
            }
        }catch (Exception ex)
        {
            departments.clear();
        }
        finally {
            motor.disconnect();
        }
        return departments;
    }
}
