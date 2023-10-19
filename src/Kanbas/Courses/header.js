import React from "react";
import db from "../../Kanbas/Database";
import { useParams, useLocation, Routes, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import "./index.css";
function Header() {
  const { pathname } = useLocation();
  const [empty, kanbas, courses, id, screen] = pathname.split("/");
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  const currenPage = pathname;
  const previousPage = `/Kanbas/Courses/${id}/Home`;
  return (
    <div className="container-fluid h-10">
      <div className="d-flex align-items-center">
        <button
          type="button"
          id="courseMenuToggle"
          className="Button Button--link ic-app-course-nav-toggle"
          aria-live="polite"
          aria-label="Hide Courses Navigation Menu"
          style={{ border: "none", outline: "none", background: "transparent" }}
        >
          {/* <i class="icon-hamburger" aria-hidden="true"></i> */}

          <RxHamburgerMenu className="wd-icon" aria-hidden="true" />
        </button>
      </div>
      <div className="flex-grow-1">
        <nav className="breadcrumb-bar" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item wd-breadcrumb">
              <Link to={previousPage}>{courseId}</Link>
            </li>
            <li className="breadcrumb-item wd-breadcrumb">
              <Link to={currenPage}>{screen}</Link>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
export default Header;
