import React, { useState } from 'react'
import { connect } from 'react-redux';
import { setUserInfo } from '../redux/аctions';

const UserForm = ({ setUserInfo }) => {
    const [ name, setName ] = useState('');
    const [ status, setStatus ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();   // чтоб не перезагружалась страница
        setUserInfo({ name, status }); // обновляем store
        setName('');
        setStatus('')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <input 
                type="text" 
                value={status}
                onChange={(e) => setStatus(e.target.value)} />
            <button type='submit'>Save</button>
        </form>
    </div>
  )
}

export default connect(null, { setUserInfo })(UserForm);