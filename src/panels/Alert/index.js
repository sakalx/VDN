import React from 'react';

import {connect} from 'react-redux';

import Header from './Header';
import Alert from './Alert';
import CloseCallBtn from './CloseCallBtn';

function AlertPanel({notifications}) {
  return (
    <section>
      <Header/>
      {notifications.map((notification, index) => (
        <ul
          key={String(index)}
          className='alert alert-active'
        >
          <Alert selected={index} notification={notification}/>
          <CloseCallBtn selected={index} notification={notification}/>
        </ul>
      ))}
    </section>
  )
}

const mapStateToProps = ({
                           notifications,
                         }) => ({
  notifications,
});

export default connect(mapStateToProps, null)(AlertPanel);