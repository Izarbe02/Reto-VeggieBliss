package Controller.IAction;

import Model.Categories;
import Model.IDAO.CategoriesDao;
import Model.IDAO.JobsDao;
import Model.Jobs;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

public class JobsAction implements IAction{

    @Override
    public String execute(HttpServletResponse response, HttpServletRequest request, String action) {

        String result = "";

        switch (action)
        {
            case "find_all":
                result = findAll();
                break;
            default:
                result = "ERROR.Invalid Action";
        }

        return result;
    }

    private String findAll()
    {
        JobsDao jobsDao = new JobsDao();
        ArrayList<Jobs> jobs = jobsDao.findAll(null);
        return Jobs.toArrayJson(jobs);
    }
}
