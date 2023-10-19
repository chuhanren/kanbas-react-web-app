import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { BsFillInboxesFill } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { BsPersonVideo2 } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import "./index.css";

function KanbasNavigation() {
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Help",
  ];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <BsFillInboxesFill className="wd-icon" />,
    History: <BsClock className="wd-icon" />,
    Studio: <BsPersonVideo2 className="wd-icon" />,
    Help: <BsQuestionCircle className="wd-icon" />,
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
