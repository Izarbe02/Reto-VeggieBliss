package Model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.ArrayList;

public class AllergensProducts {

//product_id  allergen_id
    private String product_id;
    public void setProduct_id(String sProduct_id)
    {
        product_id = sProduct_id;
    }
    public String getProduct_id()
    {
        return product_id;
    }

    private String allergen_id;
    public void setAllergen_id(String sAllergen_id)
    {
        allergen_id = sAllergen_id;
    }
    public String getAllergen_id()
    {
        return allergen_id;
    }

    public AllergensProducts(String sProduct_id, String sAllergen_id;)
    {
        product_id = sProduct_id;
        allergen_id = sAllergen_id;
    }

    public AllergensProducts(){}

    public static String toArrayJson(ArrayList<AllergensProducts> allergensProducts) {
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();

        Gson gson = builder.create();

        return gson.toJson(allergensProducts);
    }
}
