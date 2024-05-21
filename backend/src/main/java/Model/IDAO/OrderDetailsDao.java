package Model.IDAO;

import Model.Categories;
import Model.MotorSQL;
import Model.OrderDetails;

import java.sql.ResultSet;
import java.util.ArrayList;

public class OrderDetailsDao implements IDao <OrderDetails, Integer>{

        private final String SQL_FIND_ALL = "select * from order_details";
        @Override
        public int add(OrderDetails orderDetails) {
            return 0;
        }

        @Override
        public int delete(Integer i) {
            return 0;
        }

        @Override
        public int update(OrderDetails orderDetails) {
            return 0;
        }

        @Override
        public ArrayList<OrderDetails> findAll(OrderDetails object)
        {
            ArrayList<OrderDetails> orderDetails = new ArrayList<>();
            MotorSQL motor = new MotorSQL();

            try{
                motor.connect();
                ResultSet rs = motor.executeQuery(SQL_FIND_ALL);
                while (rs.next())
                {
                    //  order_detail_id,quantity_product, sales_price ,product_id ,employee_id, order_id
                    OrderDetails detail = new OrderDetails();
                    detail.setOrder_detail_id(rs.getString("order_detail_id"));
                    detail.setQuantity_product(rs.getString("quantity_product"));
                    detail.setSales_price(rs.getFloat("sales_price"));
                    detail.setProduct_id(rs.getString("product_id"));
                    detail.setEmployee_id(rs.getString("employee_id"));
                    detail.setOrder_id(rs.getString("order_id"));
                    orderDetails.add(detail);
                }
            }catch ( Exception ex)
            {
                orderDetails.clear();
            }
            finally {
                motor.disconnect();
            }

            return orderDetails;
        }
    }


