import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { getImage, getImageCount } from '../redux/actions';
import Gallery from '../components/gallery/Gallery';

function Mywork(props) {
  const [dataImages, setDataImages] = useState({ data: [], status: 0 });
  const [countImg, setCountImg] = useState({ data: [], status: 0 });
  const [states, setStates] = useState({ count: numCount() });
  

  function numCount(a = 9) {
    return a;
  }
  useEffect(() => {
    getImageCount(setCountImg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getImage(states.count,setDataImages);
  }, [states.count]);
  return (
   
    <div className="container-fluid" style={{paddingTop:'60px'}}>
    <h1 className = "text-center">Мои работы</h1>
    <Gallery dataImages={dataImages.data} countImg={countImg.data} />
        {
          (states.count < countImg.data) ?
            <button onClick={() => setStates({ count: states.count + numCount() })} type="button" className="btn btn-primary btn-lg btn-block">Загрузить еще</button>
=======
import { getMoiRaboti, getImageCount, getMyworkCountStep, convertStrNum } from '../redux/actions';
import Gallery from '../components/gallery/Gallery';
import Douland from '../components/douland/Douland';
import Button from '../components/button/Button';
function Mywork() {
  const [dataImages, setDataImages] = useState({ data: [], status: 0 });
  const [countImg, setCountImg] = useState({ data: [], status: 0 });
  const [countImgStep, setCountImgStep] = useState({ data: {count:0}, status: 0 });
  const [states, setStates] = useState({ count: 0});
  

 
  useEffect(() => {
    getImageCount(setCountImg);
    getMyworkCountStep(setCountImgStep)
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getMoiRaboti(convertStrNum(states.count),setDataImages);
  }, [states.count]);

  useEffect(() => {
    setStates({count:countImgStep.data.count})
  }, [countImgStep.data.count ]);
  return (
   
    <div className="container-fluid" style={{paddingTop:'60px'}}>
    
    <h1 className = "text-center">Мои работы</h1>
    {(dataImages.status === 200 && states.count > 0)?<Gallery dataImages={dataImages.data} countImg={countImg.data} />:
      <Douland/>
    }
    
    
        {
          (states.count < countImg.data) ?
          <Button count = {states.count} countImg ={countImg.data} setStates = {setStates} convertStrNum = {convertStrNum} countImgStep = {countImgStep.data.count}/>
>>>>>>> f32fc0c0e0130ee08e0a7e32a11b52c5ab9dc931
            : ''
        }
    </div>
  );
}


export default Mywork;
