import React from "react";

function CourseDetails({ courses }) {
  return (
    <div className="mystyle1">
      <h1>🎓 Course Info</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <h3>{course.cname}</h3>
            <p>Duration: {course.duration}</p>
            <p>Instructor: {course.instructor}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
