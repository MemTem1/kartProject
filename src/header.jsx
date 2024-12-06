import React from 'react'
import './css/header.css'

function header() {
    return (
        <div className='header'>
            <div className='logo'><h1>MY LOGO</h1></div>
            <div className='menu-container'>
                <ul className='menu' >
                    <li><a href="#">Anasayfa</a></li>
                    <li><a href="#">Hakkımda</a></li>
                    <li><a href="#">Kurslarım</a></li>
                    <li><a href="#">İletişim</a></li>
                </ul>
            </div>
            <div className='login'>
                <button>Giriş yap</button>
                <button>Kayıt Ol</button>

            </div>

        </div>
    )
}

export default header