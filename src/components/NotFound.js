import React from 'react';
import { Redirect } from 'react-router-dom';

const NotFound = ({redirect}) => {
  return (
    <Redirect to={redirect} />
  )
}

export default NotFound