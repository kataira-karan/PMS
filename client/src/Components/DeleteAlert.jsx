import React from 'react'
import { useEffect } from 'react';

const DeleteAlert = (props) => {

const {issue} = props;

useEffect(() => {
    console.log(issue)
}, []);

  return (
   <></>
  )
}

export default DeleteAlert
