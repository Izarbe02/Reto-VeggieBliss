package Model.IDAO;


import Model.MotorSQL;
import Model.OrderDetails;

import java.sql.ResultSet;
import java.util.ArrayList;

public class OrderDetailsDao implements IDao <OrderDetails, Integer>{

        private final String SQL_FIND_ALL = "select * from order_details";

        private final String SQL_ADD = "insert into order_details values (";
    private final String SQL_DELETE = "delete from orders where order_id=";

    private final String SQL_UPDATE = "update orders set ";
        @Override
        public int add(OrderDetails orderDetails) {
            int response = 0;
            MotorSQL motor = new MotorSQL();
            try {
                motor.connect();
                String sql_add = SQL_ADD +
                        orderDetails.getOrder_detail_id()+","+
                        orderDetails.getQuantity_product()+","+
                        orderDetails.getSales_price()+","+
                        orderDetails.getSales_price()+","+
                        orderDetails.getEmployee_id()+","+
                        orderDetails.getOrder_id()+")";

                response= motor.executeUpdate(sql_add);

            } catch (Exception exception){
                response= 0;
            }
            finally {
                motor.disconnect();
            }
            return response;
        }
    @Override
    public int delete(Integer index) {
        int response=0;
        MotorSQL motor = new MotorSQL();

        try{
            motor.connect();
            String sql = SQL_DELETE+index;
            response = motor.executeUpdate(sql);

        }catch ( Exception ex)
        {
            response=0;
        }
        finally {
            motor.disconnect();
        }

        return response;
    }
///////////update
    @Override
    public int update(OrderDetails orderDetails) {
        int response = 0;
        MotorSQL motor = new MotorSQL();
        try {
            motor.connect();
            String sql_update = SQL_UPDATE +
                    "order_detail_id = " + orderDetails.getOrder_detail_id()+
                    ", quantity_product = " + orderDetails.getQuantity_product()+
                    ",sales_price = " +  orderDetails.getSales_price()+
                    ",employees_id = " + orderDetails.getEmployee_id()+
                    ", order_id = " + orderDetails.getOrder_id()+" where order_detail_id = " + orderDetails.getOrder_detail_id();

            response= motor.executeUpdate(sql_update);

        } catch (Exception exception){
            response= 0;
        }
        finally {
            motor.disconnect();
        }
        return response;
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
        /*
public int deleteCart(){
            int respuesta = 0 ;
            MotorSQL motor = new MotorSQL();

            try{
                motor.connect();

            }*/
}



