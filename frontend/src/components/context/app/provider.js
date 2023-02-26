import { Component } from 'react';
import { AppContext } from '.';
import axios from 'axios';
import { Environment } from '../../data/env/env';

export class AppProvider extends Component {
  login = async (values) => {
    try {
      let email = values.email;
      let password = values.password;
      let { data, status } = await axios.post(
        Environment.apiUrl + '/api/auth/login',
        {
          email,
          password,
        }
      );
      if (status === 200) {
        this.setState({ isLoggedIn: true, user: data.user });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          login: this.login,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
