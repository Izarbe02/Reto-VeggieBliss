package Model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.ArrayList;

public class Departments {

    private String department_id;
    public void setDepartment_id(String sDepartment_id) {
        department_id = sDepartment_id;
    }
    public String getDepartment_id() {
        return department_id;
    }

    private String department_name;
    public void setDepartment_name(String sDepartment_name) {
        department_name = sDepartment_name;
    }
    public String getDepartment_name() {
        return department_name;
    }

    public Departments(String sDepartment_id, String sDepartment_name)
    {
        department_id = sDepartment_id;
        department_name = sDepartment_name;
    }

    public Departments(){}

    public static String toArrayJson(ArrayList<Departments> departments) {
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();

        Gson gson = builder.create();

        return gson.toJson(departments);
    }
}
