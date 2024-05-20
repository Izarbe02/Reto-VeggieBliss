package Model.IDAO;

import Model.Categories;
import Model.MotorSQL;
import Model.Orders;

import java.sql.ResultSet;
import java.util.ArrayList;

public class OrdersDao implements IDao<Orders, Integer> {


    private final String SQL_FIND_ALL = "select * from orders";
    @Override
    public int add(Orders orders) {
        return 0;
    }

    @Override
    public int delete(Integer i) {
        return 0;
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
