import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import Icons from "../icons/Icons.components";
const Navbar = () => {
  return (
    <div className='navbar h-12 border-solid border-b-2 border-gray-500 flex items-center text-gray-500 text-sm bg-white'>
      <div className="wrapper flex items-center p-5 w-full justify-between">
        <div className="search border-gray-400 border-2 rounded-full p-1 ">
          <input type="text" placeholder='search...' className="b-0 outline-0 bg-transparent mx-1" />
          <Icons>
            <SearchOutlinedIcon className="text-gray-900" />
          </Icons>
        </div>
        <div className="items flex items-center">
          <div className="item flex items-center mr-5">
            <Icons>
              <LanguageOutlinedIcon />
            </Icons>
            English
          </div>
          <div className="item flex items-center mr-5">
            <Icons>
              <DarkModeOutlinedIcon />
            </Icons>

          </div>
          <div className="item flex items-center mr-5">
            <Icons>
              <FullscreenExitOutlinedIcon />
            </Icons>
          </div>
          <div className="item relative flex items-center mr-5">
            <Icons>
              <NotificationsNoneOutlinedIcon />
            </Icons>
            <div className="counter absolute right-[3px] -top-[5px] flex items-center justify-center w-4 h-4 bg-red-600 rounded-lg text-white  text-ssm font-bold">
              1
            </div>
          </div>
          <div className="item relative flex items-center mr-5">
            <Icons>
              <ChatBubbleOutlineOutlinedIcon />
            </Icons>
            <div className="counter absolute right-[3px] -top-[5px] flex items-center justify-center w-4 h-4 bg-red-600 rounded-lg text-white text-ssm font-bold">2</div>
          </div>
          <div className="item flex items-center mr-5">
            <Icons>
              <ListOutlinedIcon />
            </Icons>
          </div>
          <div className="item flex items-center mr-5">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar w-7 h-7 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar