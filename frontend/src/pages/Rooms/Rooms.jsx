import React from 'react';
import RoomCard from '../../components/RoomCard/RoomCard';
import styles from './Room.module.css';
import AddRoomModal from'../../components/AddRoomModal/AddRoomModal';
import { useState } from 'react';


const rooms = [
    {
        id: 1,
        topic: 'which framework is best for frontend ?',
        speakers: [
            {
                id: 1,
                name: 'John Doe',
                avatar:'/images/monkey-avatar.png',
            },
            {
                id: 2,
                name: 'John Doe',
                avatar:'/images/monkey-avatar.png',
            },
        ],
        totalPeople:40,
    },
    {
        id: 2,
        topic: 'which framework is best for frontend ?',
        speakers: [
            {
                id: 1,
                name: 'John Doe',
                avatar:'/images/monkey-avatar.png',
            },
            {
                id: 2,
                name: 'John Doe',
                avatar:'/images/monkey-avatar.png',
            },
        ],
        totalPeople:40,
    },
    {
        id: 3,
        topic: 'which framework is best for frontend ?',
        speakers: [
            {
                id: 1,
                name: 'John Doe',
                avatar:'/images/monkey-avatar.png',
            },
            {
                id: 2,
                name: 'John Doe',
                avatar: '/images/monkey-avatar.png',
            },
        ],
        totalPeople:40,
    },
    {
        id: 4,
        topic: 'which framework is best for frontend ?',
        speakers: [
            {
                id: 1,
                name: 'John Doe',
                avatar: '/images/monkey-avatar.png',
            },
            {
                id: 2,
                name: 'John Doe',
                avatar:'/images/monkey-avatar.png',
            },
        ],
        totalPeople:40,
    },
]

const Rooms = () => {
    const [showModal, setShowModal] = useState(false);

    function openModal() {
        setShowModal(true);
    }

    return (
        <>
            <div className="container">
                <div className={styles.roomHeader}>
                    <div className={styles.left}>
                        <span className={styles.heading}>All voice rooms</span>
                        <div className={styles.searchBox}>
                            <img src="/images/search-icon.png" alt="search" />
                            <input type="text" className={styles.searchInput} />
                        </div>
                    </div>
                    <div className={styles.left}>
                        <button onClick={openModal} className={styles.startRoomButton}>
                            <img src="/images/add-room-icon.png" alt="add-room" />
                            <span>
                                Start a room
                            </span>
                        </button>
                    </div>
                </div>

                <div className={styles.roomList}>
                    {
                        rooms.map((room) => (
                            <RoomCard key={room.id} room={ room}/>
                        ))}
                       
                </div>

            </div>       
            {showModal && <AddRoomModal onClose={()=>setShowModal(false)}/> }
        </>
    )
};

export default Rooms;
