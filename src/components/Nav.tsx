import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
// import EmployeeTable from "./EmployeeTable";

function Nav() {
    return(
        <div className="drop-shadow-md h-30">
            <Navbar fluid rounded>
                <Navbar.Brand>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Employee CRUD Management System</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="#" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link as={Link} href="#">
                        Employees
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Tasks
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Nav