import React from 'react';
import inital_base_url from '../../redux/actions';
function Douland() {
    return (

        <div className="text-center" style = {{marginTop:'100px', height:window.innerHeight + 'px'}}>
            <img src= {`${inital_base_url}/img/icon/30.gif`} alt = "Загрузка"/>
        </div>

    )
}

export default Douland;