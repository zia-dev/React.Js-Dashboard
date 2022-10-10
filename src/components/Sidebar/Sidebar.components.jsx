import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Sidebar = () => {
    return (
        <div className='sidebar bg-white flex flex-col w-2/12 border-solid border-r-2 border-gray-200 min-h-screen'>
            <div className="top h-12 flex flex-row align-center justify-center">
                <p className='text-lg text-[#6439ff]'>
                    logo
                </p>
            </div>
            <div className='min-w-full border-solid border-t-2 border-gray-200'>
            </div>
            <div className="center pl-4">
                <ul className='list-none p-0 m-0 uppercase '>
                <p className="title text-ssm font-bold text-gray-400 mt-2.5 mb-1">MAIN</p>
                    <li className="flex items-center p-1 cursor-pointer hover:bg-purple-100">
                        <DashboardIcon  className="icon !text-lg text-purple-600"/>
                        <span className="font-semibold text-sm text-gray-500 ml-2.5">dashboard</span>
                    </li>
                    <p className="title text-ssm font-bold text-gray-400 mt-2.5 mb-1">LISTS</p>

                    <li className="flex items-center p-1 cursor-pointer hover:bg-purple-100">
                        <PersonOutlineIcon  className="icon !text-lg text-purple-600"/>
                        <span className="font-semibold text-sm text-gray-500 ml-2.5">Users</span>
                    </li>
                    <li className="flex items-center p-1 cursor-pointer hover:bg-purple-100">
                        <StoreIcon className="icon !text-lg text-purple-600"/>
                        <span className="font-semibold text-sm text-gray-500 ml-2.5">Products</span>
                    </li>
                    <li className="flex items-center p-1 cursor-pointer hover:bg-purple-100">
                        <CreditCardIcon className="icon !text-lg text-purple-600"/>
                        <span className="font-semibold text-sm text-gray-500 ml-2.5">Orders</span>
                    </li>
                    <li className="flex items-center p-1 cursor-pointer hover:bg-purple-100">
                        <LocalShippingIcon className="icon !text-lg text-purple-600"/>
                        <span className="font-semibold text-sm text-gray-500 ml-2.5">Delivery</span>
                    </li>
                    <p className="title text-ssm font-bold text-gray-400 mt-2.5 mb-1">USEFUL</p>

                    <li className="flex items-center p-1 cursor-pointer hover:bg-purple-100">
                        <InsertChartIcon className="icon !text-lg text-purple-600"/>
                        <span className="font-semibold text-sm text-gray-500 ml-2.5">Stats</span>
                    </li>
                    <li className="flex items-center p-1 cursor-pointer hover:bg-purple-100">
                        <NotificationsNoneIcon className="icon !text-lg text-purple-600"/>
                        <span className="font-semibold text-sm text-gray-500 ml-2.5">Notification</span>
                    </li>
                    <li className="flex items-center p-1 cursor-pointer hover:bg-purple-100">
                        <SettingsSystemDaydreamOutlinedIcon  className="icon !text-lg text-purple-600"/>
                        <span className="font-semibold text-sm text-gray-500 ml-2.5">System Health</span>
                    </li>
                    <li className="flex items-center p-1 cursor-pointer hover:bg-purple-100">
                        <PsychologyOutlinedIcon   className="icon !text-lg text-purple-600"/>
                        <span className="font-semibold text-sm text-gray-500 ml-2.5">Logs</span>
                    </li>
                    <li className="flex items-center p-1 cursor-pointer hover:bg-purple-100">
                        <SettingsApplicationsIcon  className="icon !text-lg text-purple-600"/>
                        <span className="font-semibold text-sm text-gray-500 ml-2.5">Settings</span>
                    </li>
                    <p className="title text-ssm font-bold text-gray-400 mt-2.5 mb-1">USER</p>

                    <li className="flex items-center p-1 cursor-pointer hover:bg-purple-100">
                        <AccountCircleOutlinedIcon  className="icon !text-lg text-purple-600"/>
                        <span className="font-semibold text-sm text-gray-500 ml-2.5">Profile</span>
                    </li>
                    <li className="flex items-center p-1 cursor-pointer hover:bg-purple-100">
                        <ExitToAppIcon className="icon !text-lg text-purple-600"/>
                        <span className="font-semibold text-sm text-gray-500 ml-2.5">Log Out</span>
                    </li>
                </ul>
            </div>
            <div className="bottom flex items-center m-2.5">
                <div className="colorOption w-7 h-7 rounded-full border-solid border-2 border-gray-400 bg-whitesmoke cursor-pointer m-1"></div>
                <div className="colorOption w-7 h-7 rounded-full border-solid border-2 border-black bg-black cursor-pointer m-1"></div>
            </div>
        </div>
    )
}

export default Sidebar