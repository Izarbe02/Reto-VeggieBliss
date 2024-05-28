package Controller.IAction;
//allergen_id , allergen_name
import Model.Allergens;
import Model.Categories;
import Model.IDAO.AllergensDao;
import Model.IDAO.CategoriesDao;
import Model.IDAO.OrderDetailsDao;
import Model.OrderDetails;
import com.google.gson.Gson;
import com.google.gson.JsonParser;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

import static Controller.Controller.getBody;

public class AllergensAction implements IAction{

    @Override
    public String execute(HttpServletResponse response, HttpServletRequest request, String action) {

        String result = "";

        switch (action)
        {
            case "add":
            {
                result = add(request);
                break;
            }
            case "update":
            {
                result = update(request);
                break;
            }
            case "delete":{
                result = delete(request);
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
       AllergensDao allergensDao = new AllergensDao();
        ArrayList<Allergens> allergens = allergensDao.findAll(null);
        return Allergens.toArrayJson(allergens);
    }


    //add
    private String add(HttpServletRequest request)
    {
        JsonParser parser = new JsonParser();
        Gson gson = new Gson();

        Allergens allergens = gson.fromJson(parser.parse(getBody(request)),Allergens.class);
        AllergensDao allergensDao = new AllergensDao();
        int response = allergensDao.add(allergens);
        return String.valueOf(response);
    }



    ////update
    private String update(HttpServletRequest request)
    {
        JsonParser parser = new JsonParser();
        Gson gson = new Gson();

        Allergens allergens = gson.fromJson(parser.parse(getBody(request)), Allergens.class);
        AllergensDao allergensDao = new AllergensDao();
        int response = allergensDao.update(allergens);
        return String.valueOf(response);
    }

    //delete
    private String delete(HttpServletRequest request)
    {
        JsonParser parser = new JsonParser();
        Gson gson = new Gson();

        Allergens allergens = gson.fromJson(parser.parse(getBody(request)), Allergens.class);
        AllergensDao allergensDao = new AllergensDao();
        int response = allergensDao.delete(Integer.parseInt(allergens.getAllergen_id()));
        return String.valueOf(response);
    }
}
