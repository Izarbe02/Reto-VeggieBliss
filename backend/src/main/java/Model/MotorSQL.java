package Model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;

public class MotorSQL
{
    private Connection con = null;
    private Statement st = null;
    private ResultSet rs = null;
    private static final String URL = "jdbc:oracle:thin:@veggiebliss.ct6larpofgse.us-east-1.rds.amazonaws.com:1521:orcl";
    private static final String USER = "admin";
    private static final String PASSWORD = "VeggieBliss88!";

    public void connect ()
    {
        try {
            Class.forName("oracle.jdbc.driver.OracleDriver").newInstance();
            con = DriverManager.getConnection(URL, USER, PASSWORD);
            st = con.createStatement();
        } 
        catch (SQLException ex)
        {
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLEstate: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
        catch (Exception ex)
        {
            System.out.println(ex.getMessage());
        }
    }

    public ResultSet executeQuery (String sql)
    {
        try
        {
            rs = st.executeQuery(sql);
        }
        catch (SQLException ex)
        {
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLEstate: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
        return rs;
    }

    public int executeUpdate (String sql)
    {
        int iResult = 0;
        try
        {
            iResult = st.executeUpdate(sql);
        }
        catch (SQLException ex)
        {
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLEstate: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
        return iResult;
    }

    public void disconnect ()
    {
        if (rs != null)
        {
            try
            {
                rs.close();
            }
            catch (SQLException sqlEx) { } //ignorar
            rs = null;
        }

        if (st != null)
        {
            try
            {
                st.close();
            }
            catch (SQLException sqlEx) { } //ignorar
            st = null;
        }

        if (con != null)
        {
            try
            {
                con.close();
            }
            catch (SQLException sqlEx) { } //ignorar
            con = null;
        }
    }
}
