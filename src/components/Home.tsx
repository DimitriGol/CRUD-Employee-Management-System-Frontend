import { Button } from "flowbite-react"
import { Link } from "react-router-dom"
// import Empl from "./EmployeeTable"

function Home() {
    return (    
        <>
            <div className="px-4 py-2 m-2 mt-14 text-center">
                <div className="">
                    <h1 className="mb-3 text-4xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-6xl">Employee <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-500">CRUD</span> Management System</h1>
                    <p className="mb-5 text-xl font-extralight text-gray-500">
                        Manage your employee database with this CRUD management system.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Link to='/employees'>
                        <Button className="flex-auto mt-6 mr-2 py-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 " gradientDuoTone="purpleToBlue">View All Employees</Button>
                    </Link>
                    <Link to='#'>
                        <Button className="flex-auto mt-6 ml-2 py-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 " gradientDuoTone="purpleToBlue">View All Tasks</Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home
