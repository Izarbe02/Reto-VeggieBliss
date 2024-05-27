package Model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.ArrayList;

public class Allergens {
    //allergen_id , allergen_name
    private String allergen_id;
    public void setAllergen_id(String sAllergen_id)
    {
        allergen_id = sAllergen_id;
    }
    public String getAllergen_id()
    {
        return allergen_id;
    }

    private String allergen_name;
    public void setAllergen_name(String sAllergen_name)
    {
        allergen_name = sAllergen_name;
    }
    public String getAllergen_name()
    {
        return allergen_name;
    }

    public Allergens(String sAllergen_id, String sAllergen_name)
    {
        allergen_id = sAllergen_id;
        allergen_name = sAllergen_name;
    }

    public Allergens(){}

    public static String toArrayJson(ArrayList<Allergens> allergens) {
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();

        Gson gson = builder.create();

        return gson.toJson(allergens);
    }
}
