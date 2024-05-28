package Controller.IAction;

import Model.AllergensProducts;
import Model.IDAO.AllergensProductsDao;
import Model.IDAO.OrderDetailsDao;
import Model.OrderDetails;
import com.google.gson.Gson;
import com.google.gson.JsonParser;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

import static Controller.Controller.getBody;

public class AllergensProductsAction implements IAction {

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
        AllergensProductsDao allergensProductsDao = new AllergensProductsDao();
        ArrayList<AllergensProducts> allergensProducts = allergensProductsDao.findAll(null);
        return AllergensProducts.toArrayJson(allergensProducts);
    }

    private String add(HttpServletRequest request)
    {
        JsonParser parser = new JsonParser();
        Gson gson = new Gson();

        AllergensProducts allergensProducts = gson.fromJson(parser.parse(getBody(request)), AllergensProducts.class);
        AllergensProductsDao allergensProductsDao = new AllergensProductsDao();
        int response = allergensProductsDao.add(allergensProducts);
        return String.valueOf(response);
    }
    private String update(HttpServletRequest request)
    {
        JsonParser parser = new JsonParser();
        Gson gson = new Gson();

        AllergensProducts allergensProducts = gson.fromJson(parser.parse(getBody(request)), AllergensProducts.class);
        AllergensProductsDao allergensProductsDao = new AllergensProductsDao();
        int response = allergensProductsDao.update(allergensProducts);
        return String.valueOf(response);
    }
    private String delete(HttpServletRequest request)
    {
        JsonParser parser = new JsonParser();
        Gson gson = new Gson();

        AllergensProducts allergensProducts = gson.fromJson(parser.parse(getBody(request)), AllergensProducts.class);
        AllergensProductsDao allergensProductsDao = new AllergensProductsDao();
        int response = allergensProductsDao.delete(Integer.parseInt(allergensProducts.getProduct_id()));
        return String.valueOf(response);
    }
}

