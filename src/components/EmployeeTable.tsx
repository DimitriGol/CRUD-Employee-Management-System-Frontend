import { Table } from "flowbite-react"


function EmployeeTable() {
    return(
        <>
            <div>
                <h5 className="text-gray-900 font-bold">Employee Listing</h5>
            </div>
            
            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Employee Name</Table.HeadCell>
                        <Table.HeadCell>Department</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Delete</span>
                        </Table.HeadCell>
                    </Table.Head>

                    <Table.Body className="divide-y">

                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Dimitri Golyshev
                            </Table.Cell>
                            <Table.Cell>Software Development</Table.Cell>
                            <Table.Cell>dgolyshev@gmail.com</Table.Cell>
                            <Table.Cell>
                                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                    Edit
                                </a>
                            </Table.Cell>
                            <Table.Cell>
                                <a href="#" className="font-medium text-red-600 hover:underline dark:text-cyan-500">
                                    Delete
                                </a>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Emily Chavez
                            </Table.Cell>
                            <Table.Cell>Law</Table.Cell>
                            <Table.Cell>echavez@gmail.com</Table.Cell>
                            <Table.Cell>
                                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                    Edit
                                </a>
                            </Table.Cell>
                            <Table.Cell>
                                <a href="#" className="font-medium text-red-600 hover:underline dark:text-cyan-500">
                                    Delete
                                </a>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Ya Motha</Table.Cell>
                            <Table.Cell>Psychology</Table.Cell>
                            <Table.Cell>yamotha@gmail.com</Table.Cell>
                            <Table.Cell>
                                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                    Edit
                                </a>
                            </Table.Cell>
                            <Table.Cell>
                                <a href="#" className="font-medium text-red-600 hover:underline dark:text-cyan-500">
                                    Delete
                                </a>
                            </Table.Cell>
                        </Table.Row>

                    </Table.Body>
                </Table>
            </div>
        </>
    )
}

export default EmployeeTable