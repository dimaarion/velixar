import React from 'react';
import { Link } from "react-router-dom";
import { array_obj, getRandomArbitrary } from '../../redux/actions';
import '../../style/Menu.css';
import '../../style/Logo.css';
const MenuLogoContainer = (props) => {

    function menuPod(x) {
        return (
            (array_obj(x.cild).length !== 0) ?
                <ul className = "nav">
                    {
                        array_obj(x.cild).map((y) =>
                            <li className = "nav-item" key={y.id}><Link to={`${y.alias}`} >{y.names}</Link>{menuPod(y)}</li>
                        )
                    }
                </ul>
                : ''
        )
    }


    return (
        <div className="container-fluid" style={{position:'fixed',zIndex:8000,backgroundColor:'#ffffff'}}>
        <div className="row text-right" style={{ height: 50 + 'px' }}>
        <div className="Logo col-sm-1 ">Velixar.ru</div>
                <div className="Menu col-sm">
                    <ul className = "nav justify-content-end">
                        {
                            array_obj(props.menu).map((x) =>
                                (x !== null) ?
                                    <li className = "nav-item" key={x.id + 5}>
                                        <Link className = "nav-link" to={`${x.alias}`}>{x.names}</Link>
                                        {
                                            menuPod(x)
                                        }
                                    </li>
                                    : ''
                            )
                        }
                    </ul>
                </div>
            </div>
            <div style={{ height: 3 + 'px', backgroundColor: '#' + getRandomArbitrary(100000, 999999), transition: 1 + 's' }}></div>
        </div>
    )
}



export default MenuLogoContainer;