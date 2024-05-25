package Controller.IAction;



import Model.IDAO.OrderDetailsDao;

import Model.OrderDetails;

import com.google.gson.Gson;
import com.google.gson.JsonParser;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

import static Controller.Controller.getBody;

public class OrderDetailsAction implements IAction{

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
            OrderDetailsDao orderDetailsDao = new OrderDetailsDao();
            ArrayList<OrderDetails> orderDetails = orderDetailsDao.findAll(null);
            return OrderDetails.toArrayJson(orderDetails);
        }
        private String add(HttpServletRequest request)
        {
            JsonParser parser = new JsonParser();
            Gson gson = new Gson();

            OrderDetails orderDetail = gson.fromJson(parser.parse(getBody(request)), OrderDetails.class);
            OrderDetailsDao orderDetailsDao = new OrderDetailsDao();
            int response = orderDetailsDao.add(orderDetail);
            return String.valueOf(response);
        }
    private String update(HttpServletRequest request)
    {
        JsonParser parser = new JsonParser();
        Gson gson = new Gson();

        OrderDetails orderDetail = gson.fromJson(parser.parse(getBody(request)), OrderDetails.class);
        OrderDetailsDao orderDetailsDao = new OrderDetailsDao();
        int response = orderDetailsDao.update(orderDetail);
        return String.valueOf(response);
    }
    private String delete(HttpServletRequest request)
    {
        JsonParser parser = new JsonParser();
        Gson gson = new Gson();

        OrderDetails orderDetails = gson.fromJson(parser.parse(getBody(request)), OrderDetails.class);
        OrderDetailsDao orderDetailsDao = new OrderDetailsDao();
        int response = orderDetailsDao.delete(Integer.parseInt(orderDetails.getOrder_id()));
        return String.valueOf(response);
    }

}

