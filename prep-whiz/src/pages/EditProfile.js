import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
export default function EditProfile(props) {
  return (
    <div className="edit-profile" style={{display: "flex"}}>
        <div className={`mt-24 ml-48 w-10/12 flex flex-col items-center md:ml-24 sm:ml-12`}>
            <h1 className="text-center font-extrabold text-5xl text-gray-700">Account</h1>
            <div className="flex py-8 w-6/12 flex-col ">
                <div className="flex items-center">
                    <label className="font-bold text-lg w-3/12 my-8">Profile</label>
                        <div className="col-span-full">
                            <div className="flex items-center gap-x-3">
                                <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                                <button
                                    type="button"
                                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
                                    Change
                                </button>
                            </div>
                        </div>
                </div>
                
                <hr className="border border-gray-200 rounded-full mx-2;" />

                <div className="flex items-center">
                    <label className="font-bold text-lg w-3/12 my-8">Username</label>
                    <div className="w-full">
                        <div className="sm:col-span-3">
                            <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder={props.user?.username}
                            autoComplete="username"
                            className="w-full block w-12/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
                <hr className="border border-gray-200 rounded-full mx-2;" />

                <div className="flex items-center">
                    <label className="font-bold text-lg w-3/12 my-8">Email</label>
                    <div className="w-full">
                        <div className="sm:col-span-3">
                            <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder={props.user?.email}
                            autoComplete="email"
                            className="w-full block w-12/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
                
                <hr className="border border-gray-200 rounded-full mx-2;" />

                <div className="flex items-center">
                    <label className="font-bold text-lg w-3/12 my-8">Phone</label>
                    <div className="w-full">
                        <div className="sm:col-span-3">
                            <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder={props.user?.phone}
                            autoComplete="phone"
                            className="w-full block w-12/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>

                <hr className="border border-gray-200 rounded-full mx-2;" />
            <div className="flex items-center">
                <div className="w-9/12">
                    <Link to="/testprep/sat">
                        <button className="border bg-gray-500 py-3 px-6 rounded-xl text-white font-bold hover:bg-gray-800 my-8 mr-4">Cancel</button>
                    </Link>
                    <Link to="/testprep/sat">
                        <button className="border border-gray-500 py-3 px-6 rounded-xl text-gray-500 font-bold hover:bg-gray-200 my-8">Save</button>
                    </Link>
                </div>
                <div className="w-3/12">
                    <Link to="/">
                        <button className=" text-gray-400 hover:text-gray-500 cursor-pointer mx-4">Delete</button>
                    </Link>
                    <Link to="/">
                        <button className="text-gray-400 hover:text-gray-500 cursor-pointer">Log out</button>
                    </Link>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
