import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../store/users";
import UserCard from "./UserCard";

export class AllUsers extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.props.getUsers();
    this.setState({ loading: false });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.users.length !== this.props.users.length) {
      this.props.getUsers();
    }
  }

  render() {
    const { users } = this.props;
    const { loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <React.Fragment>
        <div>
          <h1 className="title ml-6">ALL USERS (ADMIN ONLY)</h1>
          {users.length > 0 ? (
            <div>
              {users.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          ) : (
            <h1>No users in the database</h1>
          )}
        </div>
      </React.Fragment>
    );
  }
}

const mapState = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapState, mapDispatch)(AllUsers);
