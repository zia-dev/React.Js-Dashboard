import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

function Widget({type}) {
    let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="!text-[30px] p-1 bg-fuchsia-800 rounded-lg self-end"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="!text-[30px] p-1 bg-fuchsia-800 rounded-lg self-end"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="!text-[30px] p-1 bg-fuchsia-800 rounded-lg self-end"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="!text-[30px] p-1 bg-fuchsia-800 rounded-lg self-end"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
    return (
        <div className="widget flex flex-1 justify-between mr-5 p-2.5 drop-shadow-lg bg-white rounded-lg min-h-[100px]">
            <div className="left flex flex-col justify-between">
                <span className="title text-sm font-bold text-gray-400">{data.title}
                </span>
                <span className="counter text-xl font-[300]"> {data.isMoney && "$"} {amount}
                </span>
                <span className="link text-[12px]  max-w-max border-b-2 border-gray-400 ">{data.link}
                </span>
            </div>
            <div className="right flex flex-col justify-between">
                <div className={`percentage flex items-center text-sm ${(diff > 0) ? 'text-green-600' : 'text-red-600'}`}>
                {diff > 0 ? (
        <KeyboardArrowUpIcon/>
      ) : <KeyboardArrowDownIcon/>}
                   {diff} %</div> 
                   {data.icon}
                    {/* <PersonOutlinedIcon className="icon !text-[30px] p-1 bg-fuchsia-800 rounded-lg self-end "/> */}
            </div>
        </div>
    )
}

export default Widget