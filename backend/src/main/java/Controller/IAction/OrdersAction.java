package Controller.IAction;

import Model.Categories;
import Model.IDAO.CategoriesDao;
import Model.IDAO.OrdersDao;
import Model.Orders;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

public class OrdersAction implements IAction{
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
        OrdersDao ordersDao = new OrdersDao();
        ArrayList<Orders> orders = ordersDao.findAll(null);
        return Orders.toArrayJson(orders);
    }

}
