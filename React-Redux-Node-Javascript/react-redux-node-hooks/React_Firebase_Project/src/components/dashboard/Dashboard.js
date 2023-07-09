
import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import DisplayList from '../projects/DisplayList'
import Plalist from '../projects/PlayList'
import Notifications from './Notifications'
import { getData } from '../../store/actions/displayActions'
import { getPlaylistData } from '../../store/actions/playListAction'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { userData } = useSelector(state => state.auth)
  const { displays, loading } = useSelector(state => state.display)
  const { loading: loading2, playListData } = useSelector(state => state.playList)
  const [org, setOrganization] = useState(null)
  useEffect(() => {
    const organizationName = userData?.profileData?.data?.org;
    const uid = userData?.uid;
    if (uid) {
      dispatch(getData(uid))
    }
    if (organizationName) {
      dispatch(getPlaylistData(organizationName))
    }
    setOrganization(organizationName)
  }, [userData])
  return (
    <div className="dashboard container">
      <div className="row">
        {
          (loading || loading2) &&
          <div className="input-field">
            Loading...
          </div>
        }
        {org && <div className="col s12 m12">
          <div className="project-list section">
            <div className="card z-depth-0 display-summary">
              <div className="card-content grey-text text-darken-3">
                Organization : {org}
              </div>
            </div>
          </div>
        </div>
        }
        {displays && displays[0] && displays[0].data && displays[0].data.data &&
          <div className="col s12 m6">
            <DisplayList displays={displays[0] || []} />
          </div>
        }
        {playListData && playListData.length > 0 &&
          <div className="col s12 m6">
            <Plalist playlists={playListData} />
          </div>
        }
        {/* <div className="col s12 m5 offset-m1">
          <Notifications />
        </div> */}
      </div>
    </div>
  )
}

export default Dashboard