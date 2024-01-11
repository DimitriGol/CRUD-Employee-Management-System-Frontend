import { EmployeeTable } from "./EmployeeTable"

export const Home = () => {
    return (
        <>
            <div className="px-4 py-2 m-2">
                <div className="">
                    <h1 className="flex justify-center p-4 text-black-900 font-bold text-2xl underline">Employee CRUD Management System</h1>
                </div>
                
                <EmployeeTable/>
            </div>
        </>
    )
} 