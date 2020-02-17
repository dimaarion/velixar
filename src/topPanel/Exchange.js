import React, { useState } from 'react'
import './Exchange.css'
import { Transition } from 'react-transition-group';
const Exchange = (props) => {
    const [slide, setSlide] = useState(false)
    const duration = 1000;
    const slideExDefaut = {
        transition: `margin-top ${duration}ms ease-in-out`,
        height: -150 + 'px',

    }

    const slideExTranslition = {
        entering: { marginTop: 0 },
        entered: { marginTop: 0 },
        exiting: { marginTop: -150 },
        exited: { marginTop: -150 },
    }

    const clideExIn = () => {
        if (props.exange === true) {
            return props.falEx()
        } else {
            return props.truEx()
        }
    }
    return (
        <div className="Exchange text-center">
            <Transition in={props.exange} timeout={duration}>
                {state => (<div>
                    <div onClick={() => clideExIn()} className="slide-titl">usd {(props.exange === false)?<i className="fa fa-angle-down"></i>:<i className = "fa fa-angle-up"></i>}</div>
                    <div style={{ ...slideExDefaut, ...slideExTranslition[state] }} className="slide-ex" >
                        <div>USD</div>
                        <div>LEI</div>
                        <div>RUB</div>
                    </div>
                </div>)}
            </Transition>
            {slide}
        </div>
    )
}
export default Exchange