import React from 'react';
import PropTypes from 'prop-types';

import HeaderBar from '../HeaderBar';

const Layout = ({ children }) => (
  <div >
    <HeaderBar />
    <div className='appContent'>{children}</div>
    {/* <Footer /> */}
  </div>
);

Layout.defaultProps = {
  children: null
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
