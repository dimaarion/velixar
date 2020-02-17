import React, { useEffect } from 'react'
import { imgSlider } from '../redux/actions'
import { connect } from 'react-redux'
import Slider from './Slider'

const SliderContainer = (props) => {

    useEffect(() => {
        props.img()

    }, [])
    const product = [
        {
            id: 2,
            titl: 'Анурогнатус',
        },
        {
            id: 3,
            titl: 'Самураи',
        },
        {
            id: 4,
            titl: 'Самураи',
        },
        {
            id: 5,
            titl: 'Склеромокхлус',
        },
        {
            id: 6,
            titl: 'Крыса',
        },
        {
            id: 7,
            titl: 'Крыса',
        },
        {
            id: 8,
            titl: 'София',
        },
        {
            id: 9,
            titl: 'Цветы',
        },
        {
            id: 10,
            titl: 'Цветы',
        }
    ]
    return (
        <div className="container-fluid p-0">
            <Slider product = {product}  descriptPosition={props.descriptPosition} descriptPositions={props.descriptPositions} slider={props.slider} />

        </div>
    )
}

const setPath = state => ({
    slider: state.slider,
    descriptPosition: state.descriptPosition
})

const toProps = dispatch => ({
    img: () => dispatch(imgSlider()),
    descriptPositions: (x, y, p, o) => dispatch({ type: 'DESCRIPT', x: x, y: y, p: p, o:o})
})
const mapDispatchToProps = toProps
const mapStateToProps = setPath

export default connect(mapStateToProps, mapDispatchToProps)(SliderContainer);