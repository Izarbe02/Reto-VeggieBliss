package Model.IDAO;

import Model.Clients;
import Model.MotorSQL;


import java.sql.ResultSet;
import java.util.ArrayList;

public class ClientsDao implements IDao <Clients, Integer>{


private final String SQL_FIND_ALL = "select * from clients";

private final String SQL_ADD = "insert into clients values (";

@Override
public int add(Clients clients) {
        int response = 0;
        MotorSQL motor = new MotorSQL();
        try {
               // client_id,first_name,last_name,mail,phone_number,client_password
                motor.connect();
                String sql_add = SQL_ADD +
                        clients.getClient_id()+","+
                        clients.getFirst_name()+","+
                        clients.getLast_name()+","+
                        clients.getMail()+","+
                        clients.getPhone_number()+","+
                        clients.getClient_password()+")";

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
public int delete(Integer i) {
        return 0;
        }

@Override
public int update(Clients clients) {
        return 0;
        }

@Override
public ArrayList<Clients> findAll(Clients object)
        {
        ArrayList<Clients> clients = new ArrayList<>();
        MotorSQL motor = new MotorSQL();

        try{
        motor.connect();
        ResultSet rs = motor.executeQuery(SQL_FIND_ALL);
        while (rs.next())
        {
            //  client_id ,first_name,last_name,mail,phone_number,client_password
        Clients client = new Clients();
            client.setClient_id (rs.getString("client_id"));
            client.setFirst_name(rs.getString("last_name"));
            client.setLast_name(rs.getString("mail"));
            client.setPhone_number(rs.getString("phone_number"));
            client.setClient_password(rs.getString("client_password"));
            clients.add(client);
        }
        }catch ( Exception ex)
        {
        clients.clear();
        }
        finally {
        motor.disconnect();
        }
        return clients;
        }
}
