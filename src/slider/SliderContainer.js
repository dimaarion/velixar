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
            many:'200'
        },
        {
            id: 3,
            titl: 'Самураи',
            many:'200'
        },
        {
            id: 4,
            titl: 'Самураи',
            many:'200'
        },
        {
            id: 5,
            titl: 'Склеромокхлус',
            many:'200'
        },
        {
            id: 6,
            titl: 'Крыса',
            many:'200'
        },
        {
            id: 7,
            titl: 'Крыса',
            many:'200'
        },
        {
            id: 8,
            titl: 'София',
            many:'200'
        },
        {
            id: 9,
            titl: 'Цветы',
            many:'200'
        },
        {
            id: 10,
            titl: 'Цветы',
            many:'200'
        }
    ]
    return (
        <div className="container-fluid p-0">
            <Slider base_url = {props.base_url} product = {product}  descriptPosition={props.descriptPosition} descriptPositions={props.descriptPositions} slider={props.slider} />

        </div>
    )
}

const setPath = state => ({
    slider: state.slider,
    descriptPosition: state.descriptPosition,
    base_url:state.base_url
})

const toProps = dispatch => ({
    img: () => dispatch(imgSlider()),
    descriptPositions: (x, y, p, o) => dispatch({ type: 'DESCRIPT', x: x, y: y, p: p, o:o})
})
const mapDispatchToProps = toProps
const mapStateToProps = setPath

export default connect(mapStateToProps, mapDispatchToProps)(SliderContainer);