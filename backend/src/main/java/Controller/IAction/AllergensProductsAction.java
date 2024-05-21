package Controller.IAction;

import Model.AllergensProducts;

import java.util.ArrayList;

public class AllergensProductsAction {

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
        AllergensProductsDao allergensProductsDao = new AllergensProductsDao();
        ArrayList<AllergensProducts> allergensProducts = allergensProductsDao.findAll(null);
        return AllergensProducts.toArrayJson(allergensProducts);
    }
}

