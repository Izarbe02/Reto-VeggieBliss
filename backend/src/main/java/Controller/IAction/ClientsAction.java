package Controller.IAction;


import Model.Categories;
import Model.Clients;
import Model.IDAO.CategoriesDao;
import Model.IDAO.ClientsDao;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;


public class ClientsAction implements IAction{

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
        ClientsDao clientsDao = new ClientsDao();
        ArrayList<Clients> clients = clientsDao.findAll(null);
        return Clients.toArrayJson(clients);
    }




}
