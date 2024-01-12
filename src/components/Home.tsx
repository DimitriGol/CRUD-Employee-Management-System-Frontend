import { Button } from "flowbite-react"
import { Link } from "react-router-dom"
import { EmployeeTable } from "./EmployeeTable"

function Home() {
    return (
        <>
            <div className="px-4 py-2 m-2">
                <div className="">
                    <h1 className="flex justify-center p-4 text-black-900 font-bold text-2xl underline">Employee CRUD Management System</h1>
                </div>
                
                <EmployeeTable/>
                <div className="flex justify-center w-90">
                    <Link to='/add-employee'>
                        <Button className="mt-6 py-2" gradientDuoTone="purpleToBlue">Add New Employee</Button>
                    </Link>
                </div>
                
            </div>
        </>
    );
};

export default Home
