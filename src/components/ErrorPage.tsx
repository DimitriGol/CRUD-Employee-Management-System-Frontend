import { Link } from "react-router-dom"

function ErrorPage(){
    return(
        <div className="text-center">
        <h1 className="my-5 mt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            404 ERROR
        </h1>
        <p className="mt-6 text-l text-black-800">Please refrain to these links:</p>
       
        <Link to="/">
            <a className="text-blue-500 font-bold">Home</a>
        </Link>
        {/* <Link to="add-employee">
            <a className="text-blue-500 font-bold">All Employees</a>
        </Link> */}
        
        </div>
    )
}

export default ErrorPage
