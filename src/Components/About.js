import React, { Component } from 'react';
import Resume from './PDF/Ali_resume.pdf'

class About extends Component {
  render() {

    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="Tim Baker Profile Pic" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p style={{ margin: 0 }}>Strong problem-solving skills.</p>
            <p style={{ margin: 0 }}>Create clean, modern, testable, well-documented code.</p>
            <p style={{ margin: 0 }}>Strong understanding of modern JavaScript, SPA, and NodeJs concepts.</p>
            <p style={{ margin: 0 }}> Modern knowledge of front-end and back-end performance.</p>
            <p style={{ margin: 0 }}>HTML and CSS pre-processing platforms, such as LESS and SASS.</p>
            <p>Improve, add new features and build new software solutions.</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span><br />
                  <span>{street}<br />
                    {city} {state}, {zip}
                  </span><br />
                  <span>{phone}</span><br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={Resume} target="_blank" className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default About;
