package Controller.IAction;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface IAction {
    String execute
    (
            HttpServletResponse response,
            HttpServletRequest request,
            String action
    );
}
