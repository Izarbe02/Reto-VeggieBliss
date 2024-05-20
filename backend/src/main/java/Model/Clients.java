package Model;

//  client_id ,first_name,last_name,mail,phone_number,client_password

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.ArrayList;

public class Clients {
    private String client_id;
    public void setClient_id(String sClient_id) {client_id = sClient_id;}
    public String getClient_id() {
        return client_id;}

    private String first_name ;
    public void setFirst_name(String sFirst_name) {first_name = sFirst_name;}
    public String getFirst_name() {
        return first_name;
    }

    private String last_name;
    public void setLast_name(String sLast_name) {last_name = sLast_name;}
    public String getLast_name() {
        return last_name;
    }


    private String mail;
    public void setMail(String sMail) {mail = sMail;}
    public String getMail() {
        return mail;
    }
    private String phone_number;
    public void setPhone_number(String sPhone_number) {phone_number = sPhone_number;}
    public String getPhone_number() {return phone_number;}

    private String client_password;
    public void setClient_password(String sClient_password) {client_password = sClient_password;}
    public String getClient_password() {return client_password;}

    //  client_id ,first_name,last_name,mail,phone_number,client_password
    public Clients(String sClient_id, String sFirst_name, String sLast_name, String sMail, String sPhone_number, String sClient_password)
    {
        client_id = sClient_id;
        first_name =sFirst_name;
        last_name = sLast_name;
        mail = sMail;
        phone_number = sPhone_number;
        client_password = sClient_password;

    }

    public Clients(){}
    public static String toArrayJson(ArrayList<Clients> clients) {
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();

        Gson gson = builder.create();

        return gson.toJson(clients);
    }

}
