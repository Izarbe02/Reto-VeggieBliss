package Model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.ArrayList;

public class Employees {
    private String employee_ID;
    public void setEmployee_ID(String sEmployee_ID)
    {
        employee_ID = sEmployee_ID;
    }
    public String getEmployee_ID()
    {
        return employee_ID;
    }

    private String first_name;
    public void setFirst_name(String sFirst_name)
    {
        first_name = sFirst_name;
    }
    public String getFirst_name()
    {
        return first_name;
    }

    private String last_name;
    public void setLast_name(String sLast_name)
    {
        last_name = sLast_name;
    }
    public String getLast_name()
    {
        return last_name;
    }

    private String mail;
    public void setMail(String sMail)
    {
        mail = sMail;
    }
    public String getMail()
    {
        return mail;
    }

    private String employee_password;
    public void setEmployee_password(String sEmployee_password) {employee_password = sEmployee_password;}
    public String getEmployee_password() {return employee_password;}

    private String phone_number;
    public void setPhone_number(String sPhone_number) { phone_number= sPhone_number;}
    public String getPhone_number() {
        return phone_number;
    }

    private String department_id;
    public void setDepartment_id(String sDepartment_id) {department_id = sDepartment_id;}
    public String getDepartment_id() {
        return department_id;
    }

    private String job_id;
    public void setJob_id(String sJob_id) {job_id = sJob_id;}
    public String getJob_id() {
        return job_id;}

    public Employees(String sEmployee_id,String sFirst_name, String sLast_name, String sMail, String sEmployee_password, String sPhone_number, String sDepartment_id, String sJob_id )
    {
        employee_ID=sEmployee_id;
        first_name=sFirst_name;
        last_name=sLast_name;
        mail=sMail;
        employee_password=sEmployee_password;
        phone_number=sPhone_number;
        department_id=sDepartment_id;
        job_id=sJob_id;
    }

    public Employees(){}

    public static String toArrayJson(ArrayList<Employees> employees) {
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();

        Gson gson = builder.create();

        return gson.toJson(employees);
    }

}
