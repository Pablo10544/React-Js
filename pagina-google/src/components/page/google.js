import React from 'react'
import './google.css'
import Image from '../image/image'

class Google extends React.Component {
    render() {
        return (
            <>
                <nav className="navBar">
                    <div className="navBar-div">
                        <a href="#" className="navBarAnchor">Gmail</a>
                        <a href="#" className="navBarAnchor">Imagens</a>
                        <a href="#" className="ButtonApps">
                            <Image className="NavBarApps" source="square.png" />
                        </a>
                        <a href="#">
                            <Image className="navBarImgUser" source="pablo.jpg" />
                        </a>
                    </div>
                </nav>
                <div className="googleSearchContainer">
                    <Image className="googleImage" source="googlelogo_color.png" />
                    <div className="googleSearchInput">
                        <div className="googleInput">
                            <input type="text" />
                        </div>
                        <div className="googleInputIcons">
                            <a href="#">
                                <i className="far fa-keyboard"></i>
                            </a>
                            <a href="#">
                                <Image className="googleMicrofone" source="microfone.png" />
                            </a>
                        </div>
                    </div>
                    <div className="googleSearchButtons">
                        <button>
                            Pesquisa Google
                </button>
                        <button>
                            Estou com sorte
                </button>
                    </div>
                </div>
                <div className="footer">
                    <a href="#" className="footerMenu">Publicidade</a>
                    <a href="#" className="footerMenu">Negócios</a>
                    <a href="#" className="footerMenu">Sobre Nós</a>
                    <a href="#" className="footerMenu">Como funciona a Pesquisa </a>
                </div>
            </>
        )
    }
}

export default Google
