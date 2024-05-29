package Model.IDAO;


import Model.Employees;
import Model.MotorSQL;
import Model.OrderDetails;

import java.sql.ResultSet;
import java.util.ArrayList;

public class EmployeesDao implements IDao <Employees, Integer> {
    private final String SQL_FIND_ALL = "select * from employees";

    private final String SQL_ADD = "insert into employees values (";

    private final String SQL_DELETE = "delete from employees where employee_id =";

    private final String SQL_UPDATE = "update employees set ";
    @Override
    public int add(Employees employees) {
        int response = 0;
        MotorSQL motor = new MotorSQL();
        try {
/* employee_ID,first_name,last_name,mail,employee_password,phone_number,department_id,job_id*/

            motor.connect();
            String sql_add = SQL_ADD +
                    employees.getEmployee_ID()+","+
                    employees.getFirst_name()+","+
                    employees.getLast_name()+","+
                    employees.getMail()+","+
                    employees.getEmployee_password()+","+
                    employees.getPhone_number()+","+
                    employees.getDepartment_id()+","+
                    employees.getJob_id()+")";

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
    public int update(Employees employees) {
        int response = 0;
        MotorSQL motor = new MotorSQL();
        try {
 /* employee_ID,first_name,last_name=sLast_name,mail,employee_password,phone_number,department_id,job_id*/

            motor.connect();
            String sql_update = SQL_UPDATE +
                    "employee_id = " + employees.getEmployee_ID()+
                    ", first_name = " + employees.getLast_name()+
                    ",last_name = " + employees.getLast_name()+
                    ",mail = " + employees.getMail()+
                    ",employee_password = " + employees.getEmployee_password()+
                    ",phone_number = " + employees.getPhone_number()+
                    ",department_id = " + employees.getDepartment_id()+
                    ", job_id = " + employees.getJob_id()+" where employee_id = " + employees.getEmployee_ID();

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
    public int login (Employees employees){

        int response = 0;
        ArrayList<Employees> all_employees = findAll (null);

        for ( int contador = 0 ; contador < all_employees.size(); contador ++ ){
            if ((employees.getMail() == all_employees.get(contador).getMail())&&(employees.getEmployee_password() == all_employees.get(contador).getEmployee_password()))
            {
                response = 1 ;

            }
        }

        return response;
    }

}
