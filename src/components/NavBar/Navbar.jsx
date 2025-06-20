import { useState, forwardRef, useImperativeHandle } from "react";
import logo from '../../assets/logo.png';
import { FaSearch, FaEraser } from "react-icons/fa";
import './Navbar.css';

const NavBar = forwardRef( ( { onSearch }, ref ) => {

    const [search, setSearch] = useState('');

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }

    const handleInputKeyDown = (e) => {
        if(e.key === 'Enter'){
            onSearch(search)
        }
        console.log(e)
    }

    const handleButtonClickSearch = () => {
        console.log("LO QUE SE VA BUSCAR: ", search)
        onSearch(search)
    }

    const cleanInputSearch = () => {
        setSearch('');
        onSearch('');
    }
    
    useImperativeHandle( ref, () => ({
        search,
    }));

    return(
        <div className="nav-container" ref={ref}>

            <div className="logo-nav">
                <img src={logo}  alt="Logo"/>
            </div>

            <div className="input-nav">
                <input
                    className="search-input" 
                    placeholder="Busca tu película favorita" 
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    value={search}
                />
                <div className="btn-container">
                    <button
                        className="btn-search-nav" 
                        onClick={handleButtonClickSearch}
                    ><FaSearch className="btn-icon-seach-nav" /> Buscar
                    </button>
                    <button 
                        className={search?.length ? 'btn-clean-search-nav' : 'btn-clean-search-disable' }
                        onClick={cleanInputSearch}
                        disabled={search?.length ? '': 'disabled'}
                    > <FaEraser className="btn-icon-seach-nav" />Limpiar
                    </button> 

                </div>
            </div>
            
        </div>
    )
});

NavBar.displayName = "NavBar";

export default NavBar;