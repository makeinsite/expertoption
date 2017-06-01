import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Menu from 'components/Global/Menu';
import LeftNav from 'components/Global/LeftNav';
import AppNav from 'components/Global/AppNav';
import RightNav from 'components/Global/RightNav';

export default class Transaction extends Component {
  static propTypes = {
    children: PropTypes.object,
  }


  render() {
    return (
      <div className='App_Wrapper'>
        交易
      </div>
    );
  }
}
