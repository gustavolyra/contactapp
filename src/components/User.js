import React from 'react'
import { Link } from 'react-router-dom'

const User = ({ user }) => {
  return (
    <Link to={`/users/${user.id}`} className="contact__item">
            <div className="contact__header">
                
                <div className="contact__details">
                    <p className="contact_name">{user.name.substring(0, 15)} </p>
                    <p className="contact_title">{user.title}</p>
                </div>
            </div>
            <div className="contact__body">
                <p><i className="bi bi-person-vcard"></i> {user.cpf} </p>
                <p><i className="bi bi-calendar"></i> {user.birthday.substring(0, 10)}</p>
            </div>
        </Link>
  )
 
}

export default User