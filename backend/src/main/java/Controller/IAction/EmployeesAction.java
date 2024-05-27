package Controller.IAction;

import Model.Categories;
import Model.Employees;
import Model.IDAO.CategoriesDao;
import Model.IDAO.EmployeesDao;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

public class EmployeesAction implements IAction{
    @Override
    public String execute(HttpServletResponse response, HttpServletRequest request, String action) {

        String result = "";

        switch (action)
        {
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
}
