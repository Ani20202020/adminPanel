import React from "react";
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartCheckoutSharpIcon from '@mui/icons-material/ShoppingCartCheckoutSharp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
const Widget = ({ type }) => {
  let data;
  const amount = 100;
  const diff = 20;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: "false",
        Link: "See all users",
        icon: (
          <PersonOutlineIcon className="icon" style={{
            color: "goldenrod",
          backgroundColor: "rgba(218,16532,0.2)"
          }} />
        )
      }
      break;
      case "order":
      data = {
        title: "Orders",
        isMoney: "false",
        Link: "Viev all orders",
        icon: (
          <ShoppingCartCheckoutSharpIcon className="icon" style={{
            color: "goldenrod",
            backgroundColor: "rgba(218,16532,0.2)"
          }}/>
        )
      }
      break;
      case "earning":
        data = {
          title: "EARNINGS",
          isMoney: "true",
          Link: "View net earnings",
          icon: (
            <AttachMoneyIcon className="icon" style={{
              color: "goldenrod",
              backgroundColor: "rgba(218,16532,0.2)"
            }}/>
          )
        }
      break;
      case "balance":
        data = {
          title: "Balance",
          isMoney: "true",
          Link: "See detalice",
          icon: (
            <AccountBalanceWalletIcon className="icon" style={{
              color: "goldenrod",
              backgroundColor: "rgba(218,16532,0.2)"
            }}/>
          )
        }
        break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
       <span className="title">{data.title}</span>
        <span className="counetr">{data.isMoney && "$"} { amount}</span>
        <span className="link">{data.Link }</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
