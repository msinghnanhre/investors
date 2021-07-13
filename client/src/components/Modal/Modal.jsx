import React from 'react'
import "./Modal.scss"
import axios from 'axios'

const API_URL = 'http://localhost:8080'

function Modal({ modalClick }) {
    
    const login = () => {
        window.location = `${API_URL}/auth/google`
    }

    return (
        <div className="modal display-block">
            <button className="modal__cancel" onClick={modalClick}>X</button>
            <section className='modal__main'>
                <div className="modal__container">
                    <button className="modal__btn" onClick={login}> With Google</button>
                </div>
            </section>
        </div>
    )
}

export default Modal
