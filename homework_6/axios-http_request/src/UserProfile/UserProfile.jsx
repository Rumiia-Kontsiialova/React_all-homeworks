import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../UserProfile/UserProfile.module.css'

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

        const fetchUser = async () => {
            setLoading(true)
            setError(null)
            try {
                const response = await axios.get('https://randomuser.me/api');
                // API возвращает данные в response.data.results[0]
                setUser(response.data.results[0]);
            } catch(error) {
                console.error('Ошибка:', error);
                setError('Не удалось загрузить данные пользователя');
            } finally {
                setLoading(false);
            }
        };
        useEffect(() => {
            fetchUser();
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                user && (
                    <div className={styles.container}>
                        <img src={user.picture.large} alt="User" className={styles.image}/>
                        <p className={styles.name}>{user.name.first} {user.name.last}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <button onClick={fetchUser} className={styles.button}>Load New User</button>
                    </div>
                )
            )}
        </div>
    );
};

export default UserProfile;