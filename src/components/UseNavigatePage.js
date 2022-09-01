import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function UseNavigatePage() {
  const navigate = useNavigate();

  const clickHandle = () => {
    console.log("navigating to course 2");
    navigate("/courses/2");
  };

  return (
    <div>
      <div className="title"> use navigate page </div>
      <button onClick={clickHandle}>
        navigate to course 2 with useNavigate
      </button>
      <br />
      <br />
      <Link to="about/dd">
        <button>relative path link</button>
      </Link>
    </div>
  );
}

export default UseNavigatePage;
