import React from 'react'
import { connect } from 'react-redux';

const User = ({ name, status }) => {
  return (
    <div>
        <p>Name: {name}</p>
        <p>Status: {status}</p>
    </div>
  )
}

// mapStateToProps — получает данные из store и передаёт их в компонент
const mapStateProps  = (state) => ({
    name: state.name,
    status: state.status
});

export default connect(mapStateProps)(User)