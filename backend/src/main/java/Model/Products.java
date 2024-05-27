package Model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.ArrayList;

public class Products {

    private String product_id;
    public void setProduct_id(String sProduct_id) {
        product_id = sProduct_id;
    }
    public String getProduct_id() {
        return product_id;
    }

    private String product_image;
    public void setProduct_image(String sProduct_image) {
        product_image = sProduct_image;
    }
    public String getProduct_image() {
        return product_image;
    }

    private String product_name;
    public void setProduct_name(String sProduct_name) {
        this.product_name = sProduct_name;
    }
    public String getProduct_name() {
        return product_name;
    }

    private String product_description;
    public void setProduct_description(String sProduct_description) {
        product_description = sProduct_description;
    }
    public String getProduct_description() {
        return product_description;
    }

    private float price;
    public void setPrice(float fPrice) {
        price = fPrice;
    }
    public float getPrice() {
        return price;
    }

    private String  category_id;
    public void setCategory_id(String sCategory_id) {
        category_id = sCategory_id;
    }
    public String getCategory_id() {
        return category_id;
    }

    public Products(String sProduct_id, String sProduct_image, String sProduct_name, String sProduct_description, Float fPrice, String sCategory_id)
    {
        product_id = sProduct_id;
        product_image = sProduct_image;
        product_name = sProduct_name;
        product_description = sProduct_description;
        price = fPrice;
        category_id = sCategory_id;
    }

    public Products(){}

    public static String toArrayJson(ArrayList<Products> products) {
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();

        Gson gson = builder.create();

        return gson.toJson(products);
    }
}
