import React, { useEffect } from 'react'
import { imgSlider } from '../redux/actions'
import { connect } from 'react-redux'

const SliderContainer = (props) => {

    useEffect(() => {
        props.img()

    }, [props])
   
    return (
        <div className="container-fluid p-0">
        <div className="Slider text-center">
        {
            props.slider.map((x) =>
                <div className = " text-center"  key={x.id}>
                 <div className = "img-block di"> <img src={`${props.base_url}/img/slider/${x.img}`} alt = "ssss" /></div>
                 <div className = "descript di" ></div>
                </div>
            )
        }
    </div>
        </div>
    )
}

const setPath = state => ({
    slider: state.slider,
    descriptPosition: state.descriptPosition,
    base_url:state.base_url,
    winWidth:state.winWidth
})

const toProps = dispatch => ({
    img: () => dispatch(imgSlider()),
    descriptPositions: (x, y, p, o) => dispatch({ type: 'DESCRIPT', x: x, y: y, p: p, o:o})
})
const mapDispatchToProps = toProps
const mapStateToProps = setPath

export default connect(mapStateToProps, mapDispatchToProps)(SliderContainer);