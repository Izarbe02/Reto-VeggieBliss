package Controller.IAction;

import Model.Categories;
import Model.IDAO.CategoriesDao;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

public class CategoriesAction implements IAction{

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
        CategoriesDao categoriesDao = new CategoriesDao();
        ArrayList<Categories> categories = categoriesDao.findAll(null);
        return Categories.toArrayJson(categories);
    }
}
