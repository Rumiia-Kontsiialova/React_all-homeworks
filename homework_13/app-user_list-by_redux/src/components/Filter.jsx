import React from 'react'
import styles from '../styles/Filter.module.css'
import { connect } from 'react-redux'
import { setFilter } from '../redux/action';

const Filter = ({ filter, setFilter }) => {

// при изменении inputa вызовется SET_FILTER с новым значением:
const handleChange = (e) => {
    setFilter(e.target.value);
}

  return (
    <div>
        <input 
            type="text"
            placeholder='Enter name...'
            value={filter}
            onChange={handleChange} 
            className={styles.input} />
    </div>
  )
}

// берем из состояния филтр, чтоб отобразить его в input:
const mapStateToProps = (state) => ({
    filter: state.filter
})


export default connect(mapStateToProps, {setFilter})(Filter)