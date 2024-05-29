package Controller.IAction;

import Model.Categories;
import Model.Employees;
import Model.IDAO.CategoriesDao;
import Model.IDAO.EmployeesDao;
import Model.IDAO.OrderDetailsDao;
import Model.OrderDetails;
import com.google.gson.Gson;
import com.google.gson.JsonParser;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

import static Controller.Controller.getBody;

public class EmployeesAction implements IAction{
    @Override
    public String execute(HttpServletResponse response, HttpServletRequest request, String action) {

        String result = "";

        switch (action) {

            case "add": {
                result = add(request);
                break;
            }
            case "update": {
                result = update(request);
                break;
            }
            case "delete": {
                result = delete(request);
                break;
            }
            case "login": {
                result = login(request);
                break;
            }
            case "find_all":
                result = findAll();
                break;
            default:
                result = "ERROR.Invalid Action";
        }

        return result;
    }

    private String findAll()
    {
        EmployeesDao employeesDao = new EmployeesDao();
        ArrayList<Employees> employees = employeesDao.findAll(null);
        return Employees.toArrayJson(employees);
    }

    //add
    private String add(HttpServletRequest request) {
        JsonParser parser = new JsonParser();
        Gson gson = new Gson();

        Employees employees = gson.fromJson(parser.parse(getBody(request)), Employees.class);
        EmployeesDao employeesDao = new EmployeesDao();
        int response = employeesDao.add(employees);
        return String.valueOf(response);
    }


    ////update
    private String update(HttpServletRequest request) {
        JsonParser parser = new JsonParser();
        Gson gson = new Gson();

        Employees employees = gson.fromJson(parser.parse(getBody(request)), Employees.class);
        EmployeesDao employeesDao = new EmployeesDao();
        int response = employeesDao.update(employees);
        return String.valueOf(response);
    }

    //delete
        private String delete(HttpServletRequest request) {
            JsonParser parser = new JsonParser();
            Gson gson = new Gson();

            Employees employees = gson.fromJson(parser.parse(getBody(request)), Employees.class);
            EmployeesDao employeesDao = new EmployeesDao();
            int response = employeesDao.delete(Integer.parseInt(employees.getEmployee_ID()));
            return String.valueOf(response);
        }

    private String login(HttpServletRequest request)
    {
        JsonParser parser = new JsonParser();
        Gson gson = new Gson();

        Employees employees = gson.fromJson(parser.parse(getBody(request)), Employees.class);
        EmployeesDao employeesDao = new EmployeesDao();
        int response = employeesDao.login(employees);
        return String.valueOf(response);
    }


}
