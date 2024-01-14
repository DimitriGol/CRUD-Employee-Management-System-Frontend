import { Button } from "flowbite-react"
import { Link } from "react-router-dom"
import EmployeeTable from "./EmployeeTable";

function Employees() {
    return(
        <div>
            <EmployeeTable/>
                <div className="flex justify-center w-90">
                    <Link to='/add-employee'>
                        <Button className="mt-6 py-2" gradientDuoTone="purpleToBlue">Add New Employee</Button>
                    </Link>
                </div>
        </div>
    );
};

export default Employees