import React, { useEffect, useState } from 'react'
import ImgBlock from './ImgBlock';


const SliderContainer = (props) => {

    const [scrols, setScrols] = useState(0);
    const [imgleft, setImgLeft] = useState(0);
    const [imgleft2, setImgLeft2] = useState(props.winWidth.winWidth);
    const [imgleft3, setImgLeft3] = useState(props.winWidth.winWidth);
    const [countImg, setCountImg] = useState(1);
    const [countImg2, setCountImg2] = useState(2);
    const [countImg3, setCountImg3] = useState(3);
    const [transitionImg, setTransitionImg] = useState(1);
    function scrolImgTop() {
        window.onscroll = function () {
            let s = window.scrollY
            setScrols(s);
            setTransitionImg(0);
        }
    }
    
    function animateImg() {

    setImgLeft(-props.winWidth.winWidth);
    setImgLeft2(0);
    setImgLeft3(props.winWidth.winWidth);
    setTransitionImg(1);
 }

    function intervale() {
        let a = 0;
        let b = 1;
        let c = 2;
       
        setInterval(() => {
            a = a + 1;
            b = b + 1;
            c = c + 1;

            if (a === 9) {
                a = 0;
                b = 1;
                c = 2;
            }
            setTransitionImg(1);
            setCountImg(a);
            setCountImg2(b);
            setCountImg3(c);
            animateImg();
        }, 5000)
       
    }
    useEffect(() => {
        scrolImgTop();
        intervale();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

   



    return (
        <div style={{ height: props.winWidth.winHeight }} className="Slider text-center container-fluid">
        
            {
                props.slider.map((x) =>
                    (x.work_id === countImg.toString()) ?
                        <ImgBlock key={x.work_id} work_name={x.work_name} work_img={x.work_img} base_url={props.base_url} winWidth={props.winWidth} scrols={scrols} imgleft={imgleft} transitionImg={transitionImg} />
                        : (x.work_id === countImg2.toString()) ?
                            <ImgBlock key={x.work_id} work_name={x.work_name} work_img={x.work_img} base_url={props.base_url} winWidth={props.winWidth} scrols={scrols} imgleft={imgleft2} transitionImg={transitionImg} />
                            : (x.work_id === countImg3.toString()) ?
                                <ImgBlock key={x.work_id} work_name={x.work_name} work_img={x.work_img} base_url={props.base_url} winWidth={props.winWidth} scrols={scrols} imgleft={imgleft3} transitionImg={transitionImg} />
                                :''
                )
            }

        </div>
    )
}



export default SliderContainer;