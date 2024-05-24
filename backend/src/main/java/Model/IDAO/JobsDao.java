package Model.IDAO;
import Model.Jobs;
import Model.MotorSQL;
import java.sql.ResultSet;
import java.util.ArrayList;

public class JobsDao implements IDao <Jobs, Integer> {

    private final String SQL_FIND_ALL = "select * from jobs";
    @Override
    public int add(Jobs jobs) {
        return 0;
    }

    @Override
    public int delete(Integer i) {
        return 0;
    }

    @Override
    public int update(Jobs jobs) {
        return 0;
    }

    @Override
    public ArrayList<Jobs> findAll(Jobs object)
    {
        ArrayList<Jobs> jobs = new ArrayList<>();
        MotorSQL motor = new MotorSQL();

        try{
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_ALL);
            while (rs.next())
            {
                Jobs job = new Jobs();
                job.setJob_id(rs.getString("job_id"));
                job.setJob_name(rs.getString("job_name"));
                jobs.add(job);
            }
        }catch ( Exception ex)
        {
            jobs.clear();
        }
        finally {
            motor.disconnect();
        }

        return jobs;
    }
}

