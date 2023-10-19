import "./index.css";
import { FaBan } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaFileImport } from "react-icons/fa";
import { FaCreativeCommonsShare } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
import { FaChartColumn } from "react-icons/fa6";
import { FaVolumeHigh } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";

function Status() {
  return (
    <div class="col-lg-2 d-none d-lg-block p-3">
      <div class="course-status">
        <h5>Course Status</h5>

        <div class="row no-gutters">
          <div class="col-auto">
            <button type="button" class="btn btn-secondary mb-1 wd-button">
              <FaBan /> Unpublish
            </button>
          </div>
          <div class="col-auto">
            <button
              class="btn btn-secondary dropdown-toggle mb-1 wd-button"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FaCheckCircle
                aria-hidden="true"
                style={{ color: "rgb(92, 202, 92)" }}
              />
              Publish All
            </button>
          </div>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-secondary mb-1 text-left wd-button"
          >
            <FaFileImport />
            Import Existing Content
          </button>
          <button
            type="button"
            class="btn btn-secondary mb-1 text-left wd-button"
          >
            <FaCreativeCommonsShare /> Import from Commons
          </button>
          <button
            type="button"
            class="btn btn-secondary mb-1 text-left wd-button"
          >
            <FaBullseye /> Choose Home Page
          </button>
          <button
            type="button"
            class="btn btn-secondary mb-1 text-left wd-button"
          >
            <FaChartColumn /> View Course Strem
          </button>
          <button
            type="button"
            class="btn btn-secondary mb-1 text-left wd-button"
          >
            <FaVolumeHigh /> New Announcement
          </button>
          <button
            type="button"
            class="btn btn-secondary mb-1 text-left wd-button"
          >
            <FaBell /> View Course Notifications
          </button>
        </div>
      </div>
      <br />

      <div class="to-do mb-5">
        <h5>To Do</h5>
        <nav class="breadcrumb-bar"></nav>
      </div>
    </div>
  );
}

export default Status;
