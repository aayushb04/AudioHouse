import React from 'react';
import { useState } from 'react';
import { useParams,useHistory } from 'react-router-dom';
import { useWebRTC } from '../../hooks/useWebRTC';
import { useSelector } from 'react-redux';
import styles from './Room.module.css';

const Room = () => {
  const { id: roomId } = useParams();
  const user = useSelector((state)=>state.auth.user);
  const { clients, provideRef } = useWebRTC(roomId, user);
  const history = useHistory();
  
  const handleManualLeave = () => {
    history.push('/rooms');
  }

    return (
    <div>
        <div className="container">
          <button onClick={handleManualLeave} className={styles.goBack}>
            <img src="/images/arrow-left.png" alt="arrow-left" />
            <span>All voice rooms</span>
          </button>
        </div>
        <div className={styles.clientsWrap}>
          <div>className={styles.header}
            <h2 className={styles.topic}>Node js is awsome</h2>
            <div className={styles.actions}>
              <button>
                <img src="/images/palm.png" alt="palm-icon" />
              </button>
              <button>
                <img src="/images/win.png" alt="win-icon" />
                <span>Leave quietly</span>
              </button>
            </div>
          </div>
          <div className={styles.clientsList}>
          {clients.map((client) => {
            return (
              <div  className={styles.userHead} key={client.id}>
                <audio
                  ref={(instance)=>provideRef(instance,client.id)}
                  controls
                  autoPlay >
                </audio>
                <img className={styles.userAvatar}
                  src={client.avatar}
                  alt="avatar"
                />
              <h4>{client.name}</h4>
            </div>
            );
          })
        }
          </div>
        </div>
    </div>
  );
};

export default Room;
