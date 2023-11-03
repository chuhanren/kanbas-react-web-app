import React, { useState } from "react";
import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css";

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <div class="row">
        <div className="d-flex flex-row flex-wrap md">
          {courses.map((course, index) => (
            <div class="card p-2 col-lg-3 col-md-4 col-sm-6 col-12  dashboard-card">
              <img
                src="baby-blue-color-solid-background-1920x1080.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">{course.name}</h5>

                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  // className="btn btn-primary"
                >
                  {course.name}
                </Link>
                <p class="card-text">
                  {course._id} {course.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
