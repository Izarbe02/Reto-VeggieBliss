package Model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.ArrayList;

//  ,quantity_product, sales_price ,product_id ,employee_id, order_id
public class OrderDetails {
   // order_detail_id
        private String order_detail_id;
        public void setOrder_detail_id(String sOder_detail_id)
        {
            order_detail_id = sOder_detail_id;
        }
        public String getOrder_detail_id()
        {
            return order_detail_id;
        }
//quantity_product
        private String quantity_product;
        public void setQuantity_product(String sQuantity_product)
        {
            quantity_product = sQuantity_product;
        }
        public String getQuantity_product()
        {
            return quantity_product;
        }
//sales_price
        private Float sales_price;
        public void setSales_price(Float fSales_price)
        {
            sales_price = fSales_price;
        }
        public Float getSales_price()
        {
            return sales_price;
        }
//product_id
        private String product_id;
        public void setProduct_id(String sProduct_id){product_id = sProduct_id;}
    public String getProduct_id(){return  product_id;}

    //employee_id
    private String employee_id;
    public void setEmployee_id(String sEmployee_id)
    {
        employee_id = sEmployee_id;
    }
    public String getEmployee_id()
    {
        return employee_id;
    }
    //order_id
    private String order_id;
    public void setOrder_id(String sOrder_id)
    {
        order_id = order_id;
    }
    public String getOrder_id()
    {
        return order_id;
    }






        public OrderDetails(String sOrder_detail_id, String sQuantity_product, float fSales_price, String sProduct_id, String sEmployee_id, String sOrder_id  )
        //  order_detail_id,quantity_product, sales_price ,product_id ,employee_id, order_id
        {
            order_detail_id = sOrder_detail_id;
            quantity_product = sQuantity_product;
            sales_price = fSales_price;
            product_id = sProduct_id;
            employee_id = sEmployee_id;
            order_id = sOrder_id;
        }

        public OrderDetails(){}

        public static String toArrayJson(ArrayList<Model.OrderDetails> orderDetails) {
            GsonBuilder builder = new GsonBuilder();
            builder.setPrettyPrinting();

            Gson gson = builder.create();

            return gson.toJson(orderDetails);
        }
    }


