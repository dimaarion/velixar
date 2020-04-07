import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { menuNorm, array_obj } from '../redux/actions'
import '../menuLogo/Menu.css';
import '../menuLogo/Logo.css';
const MenuLogoContainer = (props) => {

    useEffect(() => {
        props.menuNorm();
    }, [props])
  
   function menuPod(x) {
    return(
     (array_obj(x.cild).length !== 0)?
    <ul>
        {
            array_obj(x.cild).map((y)=>
            <li key = {y.id}><Link to={`${y.alias}`} >{y.names}</Link>{menuPod(y)}</li>
            )
        }
    </ul>
    :''
    )
   }
   
   
    return (
        <div className="container-fluid">
            
                
                    <div className="Logo">Velixar.ru</div>
               
                <div className="container-fluid text-center" style = {{height: 50 + 'px'}}>
                    <div className="Menu">
                        <ul>
                            {
                                props.menu.map((x) =>
                                    (x !== null) ?
                                        <li key={x.id + 5}>
                                            <Link to={`${x.alias}`}>{x.names}</Link>
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
            
        </div>
    )
}

const setPath = state => ({
    menu: state.menu
})

const toProps = dispatch => ({
    menuNorm: () => dispatch(menuNorm())
})
const mapDispatchToProps = toProps
const mapStateToProps = setPath

export default connect(mapStateToProps, mapDispatchToProps)(MenuLogoContainer);