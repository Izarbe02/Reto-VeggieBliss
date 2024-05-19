package Controller.IAction;

import Model.Categories;
import Model.Departments;
import Model.IDAO.CategoriesDao;
import Model.IDAO.DepartmentsDao;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

public class DepartmentsAction implements IAction{
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
        DepartmentsDao departmentsDao = new DepartmentsDao();
        ArrayList<Departments> departments = departmentsDao.findAll(null);
        return Departments.toArrayJson(departments);
    }
}
