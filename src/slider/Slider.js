import React from 'react'
import './Slider.css'
const Slider = (props) => {
console.log(props.slider)
    return (
        <div>
            <div className="Slider text-center">
                <div id="descr" style={{ marginLeft: props.descriptPosition.x + 'px', marginTop: props.descriptPosition.y - 200 + 'px' }} className="img_descript">
                    <b>{props.descriptPosition.o}</b><br />500 usd
                </div>
                {
                    props.slider.map((x) =>
                        <div style={{ width: x.width / 4 + 'px', height: x.height / 4 + 'px' }} key={x.id}>
                            <img
                                onMouseEnter={(e) => {
                                    const d = document.getElementById('descr');
                                    d.style.opacity = 1
                                    const s = e.target.style;
                                    s.width = x.width / 3.5 + 'px';
                                    s.height = x.height / 3.5 + 'px';
                                    s.marginLeft = -15 + 'px';
                                    s.zIndex = 8000;
                                    s.marginTop = -15 + 'px';
                                }}
                                onMouseLeave={(e) => {
                                    const s = e.target.style;
                                    const d = document.getElementById('descr');
                                    d.style.opacity = 0
                                    s.width = x.width / 4 + 'px';
                                    s.height = x.height / 4 + 'px';
                                    s.marginLeft = 0 + 'px';
                                    s.zIndex = 0;
                                    s.marginTop = 0 + 'px';
                                }}
                                onPointerMove={(e) => {
                                    const d = document.getElementById('descr');
                                    let descr_width = e.screenX;
                                    let d_width = d.clientWidth;
                                    let sum_descr_d = descr_width + d_width;
                                    let w, h;
                                    h = e.screenY - 20;
                                    if (sum_descr_d > window.innerWidth) {
                                        w = descr_width - d_width - 20;
                                    } else {
                                        w = descr_width - 20;
                                    }
                                    props.descriptPositions(w, h, x.id, props.product)
                                }}
                                style={{ width: x.width / 4 + 'px', height: x.height / 4 + 'px' }} src={`http://velixar.ru/img/slider/${x.img}`} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Slider;