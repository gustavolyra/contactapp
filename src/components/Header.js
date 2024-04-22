import React from 'react'

const Header = ({ toggleModal, nbOfUser }) => {
  return (
    <header className='header'>
        <div className='container'>
            <h3>User List ({nbOfUser})</h3>
            <button onClick={() => toggleModal(true)} className='btn'>
                <i className='bi bi-plus-square'></i> Add New User
            </button>
        </div>
    </header>
  )
}

export default Header