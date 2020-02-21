import React, { useState, useEffect } from 'react'
import './Slider.css'
import Description_img from './Description_img'
const Slider = (props) => {
const [descript, Sdescript] = useState(0);
const [descript_op, Sdescript_op] = useState(0);
function opacity_sec_f() {
let s = 0;
const interval = setInterval(()=>{
s = s + 0.5;
Sdescript_op(s);
if(s > 1){
    clearInterval(interval)
}
},10)

}
    return (
        <div>
            <div className="Slider text-center">
                {
                    props.slider.map((x) =>
                        <div className = " text-center" style={{ width: x.width / 4 + 'px', height: x.height / 4 + 'px' }} key={x.id}>
                            <img onMouseOver = {()=>{Sdescript(x.id);opacity_sec_f();}} onMouseOut = {()=>{Sdescript(0);Sdescript_op(0);}} style={{ width: x.width / 4 + 'px', height: x.height / 4 + 'px' }} src={`${props.base_url}/img/slider/${x.img}`} />
                       { (descript == x.id)?<Description_img  opasity_sec = {descript_op}/>:''}
                        
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Slider;