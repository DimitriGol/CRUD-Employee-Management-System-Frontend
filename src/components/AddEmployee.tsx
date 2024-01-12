import { Button, Label, TextInput } from 'flowbite-react';
// import { Link } from "react-router-dom"
import { HiMail } from 'react-icons/hi';

function AddEmployee() {

    return(
        <div>

            <h1 className='flex justify-center mt-4 text-black-900 font-bold text-2xl'>Add New Employee</h1>
            <div className='flex justify-center pt-2'>
                <div className='pt-5'>
                    <form className="flex max-w-md flex-col gap-4">
                        
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="firstName" value="First Name" />
                            </div>
                            <TextInput id="firstName" type="text" required shadow />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="lastName" value="Last Nmae" />
                            </div>
                            <TextInput id="lastName" type="text" required shadow />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="repeat-password" value="Department" />
                            </div>
                            <TextInput id="repeat-password" type="text" required shadow />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email2" value="Your email" />
                            </div>
                            <TextInput id="email2" type="email" icon={HiMail} placeholder="name@domain.com" required shadow />
                        </div>
                        <Button type="submit" className='mt-4'>Add New Employee</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEmployee