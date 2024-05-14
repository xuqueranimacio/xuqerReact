import logo from '../img/logo/logo-xuquer-animacio-vectors_page-0001.png'
import burger from '../img/MenuHambuger.svg'
import { AsideList } from './AsideList';
import { Link } from "react-router-dom";


export function HeaderComponent(){
    return (
        <>

        <AsideList />

        <div className="container" id="myHeader">
            <header className="header-wrapper">
                <div className="header">
                    <div className="title">
                            <Link to="/"><img
                                src={logo} alt="" />
                            </Link>
                    </div>
                    <div className="list">
                        <div className="nav-element">
                            <Link to="/nosaltres" className='headerClick'>
                                    <span>Nosaltres</span>
                            </Link>
                            <div className="dropdown-menu">
                                <div className="separation">
                                    <Link to="/nosaltres/qui-som" className="info-title">Qui Som</Link>
                                </div>
                                <hr className='hrsep'/>
                                <div className="separation">
                                    <Link to="/nosaltres/metodologia" className="info-title">Metodologia</Link>
                                </div>
                                <hr className='hrsep'/>
                                <div className="separation">
                                    <Link to="/nosaltres/valors" className="info-title">Valors</Link>
                                </div>
                                <hr className='hrsep'/>
                                <div className="separation">
                                    <Link to="/nosaltres/equip" className="info-title">Equip</Link>
                                </div>
                                <hr className='hrsep'/>
                                <div className="separation">
                                    <Link to="/contacte" className="info-title">Treballa amb Nosaltres</Link>
                                </div>
                            </div>
                        </div>
                        <div className="nav-element">
                            <Link to="/campaments">
                                    <span>Campaments</span>
                            </Link>
                            <div className="dropdown-menu">
                                <div className="separation">
                                    <Link to="/campaments/estiu" className="info-title">Estiu</Link>
                                </div>
                                <hr className='hrsep'/>
                                <div className="separation">
                                    <Link to="/campaments/nadal" className="info-title">Nadal</Link>
                                </div>
                                <hr className='hrsep'/>
                                <div className="separation">
                                    <Link to="/campaments/pasqua" className="info-title">Pasqua</Link>
                                </div>
                                <hr className='hrsep'/>
                                <div className="separation">
                                    <Link to="/campaments/adults" className="info-title">Adults</Link>
                                </div>
                                <hr className='hrsep'/>
                                <div className="separation">
                                    <Link to="/campaments/multiaventura" className="info-title">Multiaventura</Link>
                                </div>
                                <hr className='hrsep'/>
                                <div className="separation">
                                    <Link to="/campaments/esportius" className="info-title">Esportius</Link>
                                </div>
                            </div>
                        </div>
                        <div className="nav-element">
                            <Link to="/escoles-de-vacances">
                                <span>Escoles de Vacances</span>
                                <span className="rotate"></span>
                            </Link>
                            <div className="dropdown-menu">
                                <div className="separation">
                                    <Link to="/escoles-de-vacances/estiu" className="info-title">Estiu</Link>
                                </div>
                                <hr className='hrsep'/>
                                <div className="separation">
                                    <Link to="/escoles-de-vacances/nadal" className="info-title">Nadal</Link>
                                </div>
                                <hr className='hrsep'/>
                                <div className="separation">
                                    <Link to="/escoles-de-vacances/pasqua" className="info-title">Pasqua</Link>
                                </div>
                            </div>
                        </div>
                        <div className="nav-element">
                            <Link to="/animacions">
                                <span>Animacions</span>
                                <span className="rotate"></span>
                            </Link>
                            <div className="dropdown-menu">
                                <div className="separation">
                                    <Link to="/animacions/aniversaris" className="info-title">Aniversaris</Link>
                                </div>
                                <hr className='hrsep'/>
                                <div className="separation">
                                    <Link to="/animacions/comunions" className="info-title">Comunions</Link>
                                </div>
                                <hr className='hrsep'/>
                                <div className="separation">
                                    <Link to="/animacions/jocs-de-fusta" className="info-title">Jocs de Fusta</Link>
                                </div>
                                <hr className='hrsep'/>
                                <div className="separation">
                                    <Link to="/animacions/scape-room" className="info-title">Escape Room</Link>
                                </div>
                                <hr className='hrsep'/>
                                <div className="separation">
                                    <Link to="/animacions/jocs-populars" className="info-title">Jocs</Link>
                                </div>
                                <hr className='hrsep'/>
                                <div className="separation">
                                    <Link to="/animacions/gimcanes" className="info-title">Gimcanes</Link>
                                </div>
                                <hr className='hrsep'/>
                                <div className="separation">
                                    <Link to="/animacions" className="info-title">Més...</Link>
                                </div>
                            </div>
                        </div>

                        <div className="nav-element">
                            <Link to="/extraescolars">
                                <span>Extraescolars</span>
                                <span className="rotate"></span>
                            </Link>
                            <div className="dropdown-menu">
                                <div className="separation">
                                    <Link to="/extraescolars/legoblocks" className="info-title">LegoBlocks</Link>
                                </div>
                                <hr className='hrsep'/>
                                <div className="separation">
                                    <Link to="/extraescolars/diverciencia" className="info-title">Diverciència</Link>
                                </div>
                                <hr className='hrsep'/>
                                <div className="separation">
                                    <Link to="/extraescolars/minixef" className="info-title">Minixef</Link>
                                </div>
                                <hr className='hrsep'/>
                                <div className="separation">
                                    <Link to="/extraescolars/imaginart" className="info-title">Imaginart</Link>
                                </div>
                                <hr className='hrsep'/>
                                <div className="separation">
                                    <Link to="/extraescolars/patinatge" className="info-title">Patinatge</Link>
                                </div>
                                <hr className='hrsep'/>
                                <div className="separation">
                                    <Link to="/extraescolars" className="info-title">I moltes més...</Link>
                                </div>
                            </div>
                        </div>

                        <div className="nav-element">
                            <Link to="/contacte">
                                <span>Contacte</span>
                            </Link>
                        </div>
                    </div>
                    <div className="menuBurger">
                        <img src={burger} alt="" />
                    </div>
                </div>
            </header>
        </div>

    </>
    )
    
}