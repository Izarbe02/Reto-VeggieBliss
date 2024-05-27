package Controller.IAction;



import Model.Clients;

import Model.IDAO.ClientsDao;

import com.google.gson.Gson;
import com.google.gson.JsonParser;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

import static Controller.Controller.getBody;


public class ClientsAction implements IAction{

    @Override
    public String execute(HttpServletResponse response, HttpServletRequest request, String action) {

        String result = "";

        switch (action)
        {
            case "add": {
                result = add(request);
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
        ClientsDao clientsDao = new ClientsDao();
        ArrayList<Clients> clients = clientsDao.findAll(null);
        return Clients.toArrayJson(clients);
    }
    private String add(HttpServletRequest request)
    {
        JsonParser parser = new JsonParser();
        Gson gson = new Gson();

        Clients clients = gson.fromJson(parser.parse(getBody(request)), Clients.class);
        ClientsDao clientsDao = new ClientsDao();
        int response = clientsDao.add(clients);
        return String.valueOf(response);
    }

}
