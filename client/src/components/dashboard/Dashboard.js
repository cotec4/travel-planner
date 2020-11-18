import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Logout from "../layout/Logout"
import Budget from "../layout/Budget"
import SearchFlight from "../Search/SearchFlight.js"



class Dashboard extends Component {

  
  render() {

    
    const { user } = this.props.auth;

    return (
      

        <div>
          <Logout />

          <div className="container">

            <div className="row">
              <div className="col s12 center-align">

                <h4>
                  Hello, <b>{user.name.split(" ")[0]}</b>👋 Ready to Getaway?
              </h4>
                <br></br>
                <Budget />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="col s12 center-align">
              <SearchFlight />
            </div>
          </div >
        </div>
      
    );

  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);

