import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-info'>
            <h1>Diego G.</h1>
            <p>Sogamoso-Colombia</p>
        </div>
        <div className='footer-contact'>
            <h3>Contactame</h3>
            <p>Y lo resolveremos...</p>
        </div>
        <div className='footer-sns'>
            <div className='desing-by'>
                Diseñado por dirguz - 2022.
            </div>
            <div className='sns-links'>
                <a href='https://www.linkedin.com/in/diego-guzman-sanabria-001872215/' target='_blank' rel="noreferrer">
                    <i className='fab fa-linkedin linkedin'></i>
                </a>
                <a href='https://github.com/dirguz' target='_blank' rel="noreferrer">
                    <i className='fab fa-github github'></i>
                </a>
                <a href='https://web.facebook.com/dirguz/' target='_blank' rel="noreferrer">
                    <i className='fab fa-facebook facebook'></i>
                </a>
            </div>

        </div>
    </footer>
  )
}

export default Footer