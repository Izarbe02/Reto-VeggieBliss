package Controller.IAction;

import Model.IDAO.OrderDetailsDao;
import Model.MotorSQL;
import Model.OrderDetails;
import Model.Products;
import Model.IDAO.ProductsDao;
import com.google.gson.Gson;
import com.google.gson.JsonParser;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

import static Controller.Controller.getBody;

public class ProductsAction implements IAction {
    @Override
    public String execute(HttpServletResponse response, HttpServletRequest request, String action) {

        String result = "";

        switch (action) {
            case "delete": { result = delete(request);
                break;}


                case "update": {
                    result = update(request);
                    break;}

                    case "add":{
                        result = add(request);
                        break;}

                    case "burgers":{
                        result = findBurger();
                        break;}

                    case "salads":{
                        result = findSalad();
                        break;}

                    case "razziones":{
                        result = findRazzion();
                        break;}

                    case "desserts":{
                        result = findDessert();
                        break;}

                    case "drinks":{
                        result = findDrink();
                        break;}

                    case "find_all":
                        result = findAll();
                        break;
                    default:
                        result = "ERROR.Invalid Action";
                }

                return result;
            }

            private String findBurger ()
            {
                ProductsDao productsDao = new ProductsDao();
                ArrayList<Products> products = productsDao.findBurger(null);
                return Products.toArrayJson(products);
            }

            private String findSalad ()
            {
                ProductsDao productsDao = new ProductsDao();
                ArrayList<Products> products = productsDao.findSalad(null);
                return Products.toArrayJson(products);
            }

            private String findRazzion ()
            {
                ProductsDao productsDao = new ProductsDao();
                ArrayList<Products> products = productsDao.findRazzion(null);
                return Products.toArrayJson(products);
            }

            private String findDessert ()
            {
                ProductsDao productsDao = new ProductsDao();
                ArrayList<Products> products = productsDao.findDessert(null);
                return Products.toArrayJson(products);
            }

            private String findDrink ()
            {
                ProductsDao productsDao = new ProductsDao();
                ArrayList<Products> products = productsDao.findDrink(null);
                return Products.toArrayJson(products);
            }


            //findall
            private String findAll ()
            {
                ProductsDao productsDao = new ProductsDao();
                ArrayList<Products> products = productsDao.findAll(null);
                return Products.toArrayJson(products);
            }


            //add
            private String add (HttpServletRequest request)
            {
                JsonParser parser = new JsonParser();
                Gson gson = new Gson();

                Products products = gson.fromJson(parser.parse(getBody(request)), Products.class);
                ProductsDao productsDao = new ProductsDao();
                int response = productsDao.add(products);
                return String.valueOf(response);
            }
//delete
            private String delete (HttpServletRequest request)
            {
                JsonParser parser = new JsonParser();
                Gson gson = new Gson();

                Products products = gson.fromJson(parser.parse(getBody(request)), Products.class);
                ProductsDao productsDao = new ProductsDao();
                int response = productsDao.delete(Integer.parseInt(products.getProduct_id()));
                return String.valueOf(response);
            }

            private String update (HttpServletRequest request)
            {
                JsonParser parser = new JsonParser();
                Gson gson = new Gson();

                Products products = gson.fromJson(parser.parse(getBody(request)), Products.class);
                ProductsDao productsDao = new ProductsDao();
                int response = productsDao.update(products);
                return String.valueOf(response);
            }
        }