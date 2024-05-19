package Controller.IAction;

import Model.Products;
import Model.IDAO.ProductsDao;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

public class ProductsAction implements IAction {
    @Override
    public String execute(HttpServletResponse response, HttpServletRequest request, String action) {

        String result = "";

        switch (action)
        {
            case "burgers":
                result = findBurger();
                break;
            case "salads":
                result = findSalad();
                break;
            case "razziones":
                result = findRazzion();
                break;
            case "desserts":
                result = findDessert();
                break;
            case "drinks":
                result = findDrink();
                break;
            case "find_all":
                result = findAll();
                break;
            default:
                result = "ERROR.Invalid Action";
        }

        return result;
    }

    private String findBurger()
    {
        ProductsDao productsDao = new ProductsDao();
        ArrayList<Products> products = productsDao.findBurger(null);
        return Products.toArrayJson(products);
    }

    private String findSalad()
    {
        ProductsDao productsDao = new ProductsDao();
        ArrayList<Products> products = productsDao.findSalad(null);
        return Products.toArrayJson(products);
    }

    private String findRazzion()
    {
        ProductsDao productsDao = new ProductsDao();
        ArrayList<Products> products = productsDao.findRazzion(null);
        return Products.toArrayJson(products);
    }

    private String findDessert()
    {
        ProductsDao productsDao = new ProductsDao();
        ArrayList<Products> products = productsDao.findDessert(null);
        return Products.toArrayJson(products);
    }

    private String findDrink()
    {
        ProductsDao productsDao = new ProductsDao();
        ArrayList<Products> products = productsDao.findDrink(null);
        return Products.toArrayJson(products);
    }

    private String findAll()
    {
        ProductsDao productsDao = new ProductsDao();
        ArrayList<Products> products = productsDao.findAll(null);
        return Products.toArrayJson(products);
    }
}
