package Model;
import java.util.Date;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.ArrayList;

//order_id,order_date , direction,client_id
public class Orders {


    private String order_id;
    public void setOrder_id(String sOrder_id)
    {
        order_id = sOrder_id;
    }
    public String getOrder_id()
    {
        return order_id;
    }

    private Date order_date;
    public void setOrder_date(Date sOrder_date)
    {
        order_date = sOrder_date;
    }
    public Date getOrder_date()
    {
        return order_date;
    }

    private String direction;
    public void setDirection(String sDirection)
    {
        direction = sDirection;
    }
    public String getDirection()
    {
        return direction;
    }

    private String client_id;
    public void setClient_id(String sClient_id)
    {
        client_id = sClient_id;
    }
    public String getClient_id()
    {
        return client_id;
    }

    public Orders(String sOrder_id, Date sOrder_date, String sDirection, String sClient_id)
    {
        order_id = sOrder_id;
        order_date = sOrder_date;
        direction= sDirection;
        client_id= sClient_id;
    }

    public Orders(){}

    public static String toArrayJson(ArrayList<Orders> orders) {
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();

        Gson gson = builder.create();

        return gson.toJson(orders);
    }

}
