package Controller.IAction;

import Model.IDAO.OrdersDao;
import Model.Orders;
import com.google.gson.Gson;
import com.google.gson.JsonParser;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

import static Controller.Controller.getBody;

public class OrdersAction implements IAction{
    @Override
    public String execute(HttpServletResponse response, HttpServletRequest request, String action) {

        String result = "";

        switch (action)
        {
            case "add": {
                result = add(request);
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
        OrdersDao ordersDao = new OrdersDao();
        ArrayList<Orders> orders = ordersDao.findAll(null);
        return Orders.toArrayJson(orders);
    }
    private String add(HttpServletRequest request)
    {
        JsonParser parser = new JsonParser();
        Gson gson = new Gson();

        Orders orders = gson.fromJson(parser.parse(getBody(request)), Orders.class);
        OrdersDao ordersDao = new OrdersDao();
        int response = ordersDao.add(orders);
        return String.valueOf(response);
    }
    private String delete(HttpServletRequest request)
    {
        JsonParser parser = new JsonParser();
        Gson gson = new Gson();

        Orders orders = gson.fromJson(parser.parse(getBody(request)), Orders.class);
        OrdersDao ordersDao = new OrdersDao();
        int response = ordersDao.delete(Integer.parseInt(orders.getOrder_id()));
        return String.valueOf(response);
    }

}
