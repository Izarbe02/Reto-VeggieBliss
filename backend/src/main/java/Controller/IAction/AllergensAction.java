package Controller.IAction;

import Model.Allergens;
import Model.Categories;
import Model.IDAO.AllergensDao;
import Model.IDAO.CategoriesDao;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

public class AllergensAction implements IAction{

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
       AllergensDao allergensDao = new AllergensDao();
        ArrayList<Allergens> allergens = allergensDao.findAll(null);
        return Allergens.toArrayJson(allergens);
    }
}
