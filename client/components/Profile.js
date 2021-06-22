import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSingleUser } from "../store/user";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "",
      email: "",
    };
  }

  componentDidMount() {
    this.props.loadUser(this.props.userId);
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      await this.props.loadUser(this.props.userId);
      await this.setState({
        id: this.props.user.id,
        name: this.props.user.name,
        email: this.props.user.email,
      });
    }
  }

  render() {
    const { isAdmin, userId, user } = this.props;

    return (
      <React.Fragment>
        <div id="user-info">
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>
          <Link to={`/users/profiles/edit/${userId}`}>Edit My Profile</Link>
        </div>

        <a>View Order History</a>

        <br></br>
        <br></br>

        {isAdmin ? (
          <div id="admin-dashboard">
            <h1>ADMINS</h1>
            <Link to="/users">Users</Link>
            <br></br>
            <Link to="/shop">Hot Sauces</Link>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

const mapState = (state) => ({
  isAdmin: state.auth.isAdmin,
  userId: state.auth.id,
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  loadUser: (id) => dispatch(fetchSingleUser(id)),
});

export default connect(mapState, mapDispatch)(Profile);
