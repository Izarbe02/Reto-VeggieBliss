package Controller.IAction;

import Model.Categories;
import Model.IDAO.CategoriesDao;
import Model.IDAO.OrderDetailsDao;
import Model.OrderDetails;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

public class OrderDetailsAction implements IAction{

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
            OrderDetailsDao orderDetailsDao = new OrderDetailsDao();
            ArrayList<OrderDetails> orderDetails = orderDetailsDao.findAll(null);
            return OrderDetails.toArrayJson(orderDetails);
        }
    }

