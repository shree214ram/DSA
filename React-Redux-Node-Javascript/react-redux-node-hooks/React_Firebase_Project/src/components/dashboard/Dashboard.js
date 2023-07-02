
import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import DisplayList from '../projects/DisplayList'
import Plalist from '../projects/PlayList'
import Notifications from './Notifications'
import { getData } from '../../store/actions/displayActions'
import { getPlaylistData } from '../../store/actions/playListAction'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { displays, loading } = useSelector(state => state.display)
  const { loading: loading2, playListData } = useSelector(state => state.playList)
  useEffect(() => {
    dispatch(getData())
    dispatch(getPlaylistData())
  }, [])
  return (
    <div className="dashboard container">
      <div className="row">
        {
          (loading || loading2) &&
          <div className="input-field">
            Loading...
          </div>
        }
        <div className="col s12 m6">
          <DisplayList displays={displays} />
        </div>
        <div className="col s12 m6">
          <Plalist playlists={playListData} />
        </div>
        {/* <div className="col s12 m5 offset-m1">
          <Notifications />
        </div> */}
      </div>
    </div>
  )
}

export default Dashboard