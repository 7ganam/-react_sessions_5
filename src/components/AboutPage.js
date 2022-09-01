import React from "react";

function AboutPage() {
  return (
    <div>
      <div className="title">about page</div>
      <div style={{ textAlign: "center" }}>this is the about page</div>
      <div style={{ margin: "auto", width: "300px" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXRG2W5wIz7vlIKfCmXDGjwYUCrxRVsbRbZ2jxKSu8poXChlT9QxTyPJBkSBqfjgcRfM&usqp=CAU"
          alt="about"
          style={{ width: "100%", margin: "auto" }}
        />
      </div>
    </div>
  );
}

export default AboutPage;
