import { Button } from "flowbite-react"
import { Link } from "react-router-dom"
import { HiPlus } from "react-icons/hi";
import EmployeeTable from "./EmployeeTable";

function Employees() {
    return(
        <div>
            <div className="mt-9">
                <h1 className="text-center mb-3 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Employee View</h1>               
                <div className="flex justify-center">
                    <Link to='/add-employee' className="">   
                        <Button color="green" className="m-3 bg-green-200 p-0.6"> <HiPlus className="mr-1"/> Add New Employee</Button>
                    </Link>    
                </div>     
            </div>
            <EmployeeTable/>    
        </div>
    );
};

export default Employees