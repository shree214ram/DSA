
import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import DisplayList from '../projects/DisplayList'
import Notifications from './Notifications'
import { getData } from '../../store/actions/displayActions'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { displays, loading } = useSelector(state => state.display)
  useEffect(() => {
    dispatch(getData())
  }, [])
  return (
    <div className="dashboard container">
      <div className="row">
        {
          loading &&
          <div className="input-field">
            Loading...
          </div>
        }
        <div className="col s12 m6">
          <DisplayList displays={displays} />
        </div>
        {/* <div className="col s12 m5 offset-m1">
          <Notifications />
        </div> */}
      </div>
    </div>
  )
}

export default Dashboard