package Model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.ArrayList;

public class Jobs { //job_id job_name

    private String job_id;
    public void setJob_id(String sJob_id){ job_id = sJob_id;}
    public String getJob_id() {return job_id;}

    private String job_name;
    public void setJob_name(String sJob_name) { job_name = sJob_name;}
    public String getJob_name() {return job_name;}

public Jobs (String sJob_id, String sJob_name){
        job_id = sJob_id;
        job_name = sJob_name;
}
public Jobs(){}
    public static String toArrayJson(ArrayList<Jobs> jobs) {
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();

        Gson gson = builder.create();

        return gson.toJson(jobs);
    }

}
