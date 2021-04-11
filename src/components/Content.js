import React from "react";

const Content = () => {
  return (
    <div id="content-section">
      <div className="container">
        <h1 className="text-center py-5 ">About Me</h1>

        <p style={{ fontSize: "20px" }}>
          This letter is to express my interest in the job posted on your
          website for an experienced, detailed-oriented, front-end web
          developer. As you'll see, I have one year of hands-on experience
          efficiently coding websites and applications using modern HTML, CSS,
          and JavaScript. Building state-of-the-art, easy to use, user-friendly
          websites and applications is truly a passion of mine and I am
          confident I would be an excellent addition to your organization. In
          addition to my knowledge base, I actively seek out new technologies
          and stay up-to-date on industry trends and advancements. This has
          allowed me to stay ahead of the curve and deliver exceptional work to
          all of my employers, including those I've worked for on a project
          basis. I’ve attached a copy of my resume detailing my experience,
          along with links to websites and applications I’ve had the honor of
          working on.
        </p>

        <div className="container my-5 py-5">
          <div className="row text-center">
            <div className="col">
              <i class="fab fa-react"> </i>
            </div>
            <div className="col">
              <i className="fab fa-html5"></i>
            </div>
            <div className="col">
              <i className="fab fa-css3-alt"></i>
            </div>
            <div className="col">
              <i className="fab fa-js-square"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
