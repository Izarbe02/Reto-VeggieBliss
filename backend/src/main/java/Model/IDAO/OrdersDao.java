package Model.IDAO;


import Model.MotorSQL;

import Model.Orders;

import java.sql.ResultSet;
import java.util.ArrayList;

public class OrdersDao implements IDao<Orders, Integer> {


    private final String SQL_FIND_ALL = "select * from orders";


    private final String SQL_ADD = "insert into orders values (";
    private final String SQL_DELETE = "delete from orders where order_id=";

    @Override
    public int add(Orders orders) {
        int response = 0;
        MotorSQL motor = new MotorSQL();
        try {
            motor.connect();
            String sql_add = SQL_ADD +
            orders.getOrder_id()+","+
            orders.getOrder_date()+","+
            orders.getDirection()+","+
            orders.getClient_id()+")";

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

    @Override
    public int update(Orders orders) {
        return 0;
    }

    @Override
    public ArrayList<Orders> findAll(Orders object)
    {
        ArrayList<Orders> orders= new ArrayList<>();
        MotorSQL motor = new MotorSQL();

        try{
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_ALL);
            while (rs.next())
            //order_id,order_date , direction,client_id
            {
                Orders order = new Orders();
                order.setOrder_id(rs.getString("order_id"));
                order.setOrder_date(rs.getDate("order_date"));
                order.setDirection(rs.getString("direction"));
                order.setClient_id(rs.getString("client_id"));
                orders.add(order);
            }
        }catch ( Exception ex)
        {
            orders.clear();
        }
        finally {
            motor.disconnect();
        }

        return orders;
    }
}
