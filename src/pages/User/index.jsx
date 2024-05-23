import {useSelector} from "react-redux";

const User = () => {
    const user = useSelector(state => state.auth.user);

    return (
        <div className="p-4 sm:ml-64">
            <h1 className="text-2xl font-bold text-gray-900 mb-4 mt-14 dark:text-white">User</h1>
            {user ? (
                <div
                    className="z-10 inline-block w-96 text-sm text-gray-500 transition-opacity duration-300 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800">
                    <div className="p-5">
                        <div className="flex items-center mb-6">
                            <img className="w-20 h-20 rounded-lg mr-4" src={user.profile_photo_url}
                                 alt="profile"/>
                            <div>
                                <p className="text-xl font-semibold leading-none text-gray-900 dark:text-white">{user.name}</p>
                                <p className="text-sm font-normal mb-2">@{user.username}</p>
                                <p className="text-sm text-white font-semibold">{user.roles}</p>
                            </div>
                        </div>
                        <p className="text-base">Email address</p>
                        <p className="mb-4 text-base text-white font-semibold">{user.email}</p>

                        <p className="text-base">Phone number</p>
                        <p className="mb-6 text-base text-white font-semibold">{user.phone}</p>

                        <button type="button"
                                className="text-white bg-teal-700 hover:bg-teal-800 font-medium rounded-lg text-sm px-8 py-2 dark:bg-teal-600 dark:hover:bg-teal-700">
                            Edit
                        </button>
                    </div>
                </div>
            ) : (
                <div></div>
            )}

        </div>
    )
}

export default User;
