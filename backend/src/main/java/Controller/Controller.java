package Controller;

import Controller.IAction.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;

@WebServlet(name = "Controller" , urlPatterns =  {"/Controller"})

public class Controller extends HttpServlet{

    //http//localhost:8080/VeggieBliss/Controler?action=x.y

    private void processRequest(HttpServletRequest req, HttpServletResponse resp)
        throws ServletException, IOException
    {
        resp.setContentType("text/plan;charset=UTF-8");
        resp.setHeader("Access-Control-Allow-Origin", "*"); // Permitir acceso desde cualquier origen
        resp.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Permitir los métodos HTTP
        resp.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Permitir ciertos encabezadps
        resp.setHeader("Access-Control-Max-Age", "3600"); // Cache de opciones preflight durante 1 hora

        PrintWriter out = resp.getWriter();

        String strAction = req.getParameter("action");
        String [] arrAction = new String[2];

        if (strAction != "")
        {
            arrAction = strAction.split("\\.");
        }
        switch (arrAction[0])
        {
            case "departments":
            {
                out.print(new DepartmentsAction().execute(resp, req, arrAction[1]));
                break;
            }
            case "jobs":
            {
                out.print(new JobsAction().execute(resp, req, arrAction[1]));
                break;
            }
            case "employees":
            {
                out.print(new EmployeesAction().execute(resp, req, arrAction[1]));
                break;
            }
            case "products":
            {
                out.print(new ProductsAction().execute(resp, req, arrAction[1]));
                break;
            }
            case "categories":
            {
                out.print(new CategoriesAction().execute(resp, req, arrAction[1]));
                break;
            }
            case "clients":
            {
                out.print(new ClientsAction().execute(resp, req, arrAction[1]));
                break;
            }
            case "orders":
            {
                out.print(new OrdersAction().execute(resp, req, arrAction[1]));
                break;
            }
            case "allergens":
            {
                out.print(new AllergensAction().execute(resp, req, arrAction[1]));
                break;
            }
            case "allergens_products":
            {
                out.print(new AllergensProductsAction().execute(resp, req, arrAction[1]));
                break;
            }
            case "order_details":
            {
                out.print(new OrderDetailsAction().execute(resp, req, arrAction[1]));
                break;
            }
            default:
            {
                System.out.println(arrAction[0]);
                throw new ServletException("action " + arrAction[0] + " not valid");
            }
        }
    }

    public void doGet(HttpServletRequest req, HttpServletResponse resp)
        throws ServletException, IOException
    {
        processRequest(req, resp);
    }
        ///doPOst -- fuera a dentro
        public void doPost(HttpServletRequest req, HttpServletResponse resp)
        throws ServletException, IOException {
        resp.setContentType("text/plan");
        resp.setCharacterEncoding("UTF-8");

        PrintWriter out = resp.getWriter();
        String strAction = req.getParameter("action");
        String[] arrAction = new String[2];

            if (strAction != "")
            {
                arrAction = strAction.split("\\.");
            }
            switch (arrAction[0])
            {
                case "departments":
                {
                    out.print(new DepartmentsAction().execute(resp, req, arrAction[1]));
                    break;
                }
                case "jobs":
                {
                    out.print(new JobsAction().execute(resp, req, arrAction[1]));
                    break;
                }
                case "employees":
                {
                    out.print(new EmployeesAction().execute(resp, req, arrAction[1]));
                    break;
                }
                case "products":
                {
                    out.print(new ProductsAction().execute(resp, req, arrAction[1]));
                    break;
                }
                case "categories":
                {
                    out.print(new CategoriesAction().execute(resp, req, arrAction[1]));
                    break;
                }
                case "clients":
                {
                    out.print(new ClientsAction().execute(resp, req, arrAction[1]));
                    break;
                }
                case "orders":
                {
                    out.print(new OrdersAction().execute(resp, req, arrAction[1]));
                    break;
                }
                case "allergens":
                {
                    out.print(new AllergensAction().execute(resp, req, arrAction[1]));
                    break;
                }
                case "allergens_products":
                {
                    out.print(new AllergensProductsAction().execute(resp, req, arrAction[1]));
                    break;
                }
                case "order_details":
                {
                    out.print(new OrderDetailsAction().execute(resp, req, arrAction[1]));
                    break;
                }
                default:
                {
                    System.out.println(arrAction[0]);
                    throw new ServletException("action " + arrAction[0] + " not valid");
                }
            }
    }

        //get body
    public static String getBody(HttpServletRequest request)  {

        String body = null;
        StringBuilder stringBuilder = new StringBuilder();
        BufferedReader bufferedReader = null;

        try {
            InputStream inputStream = request.getInputStream();
            if (inputStream != null) {
                bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
                char[] charBuffer = new char[128];
                int bytesRead = -1;
                while ((bytesRead = bufferedReader.read(charBuffer)) > 0) {
                    stringBuilder.append(charBuffer, 0, bytesRead);
                }
            } else {
                stringBuilder.append("");
            }
        } catch (IOException ex) {
            // throw ex;
            return "";
        } finally {
            if (bufferedReader != null) {
                try {
                    bufferedReader.close();
                } catch (IOException ex) {

                }
            }
        }

        body = stringBuilder.toString();
        return body;
    }
}

