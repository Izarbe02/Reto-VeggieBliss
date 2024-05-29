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
            client.setFirst_name(rs.getString("first_name"));
            client.setLast_name(rs.getString("last_name"));
            client.setMail(rs.getString("mail"));
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


        public int login (Clients clients){

        int response = 0;
        ArrayList<Clients> all_clients = findAll (null);

        for ( int contador = 0 ; contador < all_clients.size(); contador ++ ){
                if ((clients.getMail() == all_clients.get(contador).getMail())&&(clients.getClient_password() == all_clients.get(contador).getClient_password()))
                {
                        response = 1 ;
                                //client
                }
        }

               /* for ( int contador = 0 ; contador < all_employees.size(); contador ++ ){
                        if ((clients.mail == all_employees[contador].mail)&&(clients.client_password == all_employees[contador].employee_password))
                        {
                                response = 1 ;
                                //employee
                        }
                }*/
                return response;
        }
}
