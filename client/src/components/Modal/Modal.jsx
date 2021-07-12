import React from 'react'
import "./Modal.scss"
import axios from 'axios'


function Modal({ modalClick }) {
    
    const login = () => {
        axios.get('http://localhost:8080/auth/google')
            .then(res => {
            console.log(res)
            }).catch(err => {
            console.log(err)
        })
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
