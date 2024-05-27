package Model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.ArrayList;

public class Categories {

    private String category_ID;
    public void setCategory_ID(String sCategory_ID)
    {
        category_ID = sCategory_ID;
    }
    public String getCategory_ID()
    {
        return category_ID;
    }

    private String category_name;
    public void setCategory_name(String sCategory_name)
    {
        category_name = sCategory_name;
    }
    public String getCategory_name()
    {
        return category_name;
    }

    public Categories(String sCategory_ID, String sCategory_name)
    {
        category_ID = sCategory_ID;
        category_name = sCategory_name;
    }

    public Categories(){}

    public static String toArrayJson(ArrayList<Categories> categories) {
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();

        Gson gson = builder.create();

        return gson.toJson(categories);
    }
}
