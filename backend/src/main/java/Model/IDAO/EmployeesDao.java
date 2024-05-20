package Model.IDAO;


import Model.Employees;
import Model.MotorSQL;

import java.sql.ResultSet;
import java.util.ArrayList;

public class EmployeesDao implements IDao <Employees, Integer> {
    private final String SQL_FIND_ALL = "select * from employees";
    @Override
    public int add(Employees employees) {
        return 0;
    }

    @Override
    public int delete(Integer i) {
        return 0;
    }

    @Override
    public int update(Employees employees) {
        return 0;
    }

    @Override
    public ArrayList<Employees> findAll(Employees object) {
        ArrayList<Employees>employees = new ArrayList<>();
        MotorSQL motor =  new MotorSQL();

        try{
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_ALL);
            while (rs.next())
            {
                Employees employee = new Employees();
                employee.setEmployee_ID(rs.getString("employee_id"));
                employee.setFirst_name(rs.getString("first_name"));
                employee.setLast_name(rs.getString("last_name"));
                employee.setMail(rs.getString("mail"));
                employee.setEmployee_password(rs.getString("employee_password"));
                employee.setPhone_number(rs.getString("phone_number"));
                employee.setDepartment_id((rs.getString("department_id")));
                employee.setJob_id(rs.getString("job_id"));

                employees.add(employee);
            }

        }catch ( Exception ex)
        {
            employees.clear();
        }
            finally {
            motor.disconnect();
        }

            return employees;

    }
}
