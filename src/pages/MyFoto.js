import React, { useEffect, useState } from 'react';
import { getImageCount,getMoiFoto, getMyFotoCountStep, convertStrNum  } from '../redux/actions';
import Gallery from '../components/gallery/Gallery';
import Douland from '../components/douland/Douland';
import Button from '../components/button/Button';
function MyFoto() {
  const [dataImages, setDataImages] = useState({ data: [], status: 0 });
  const [countImg, setCountImg] = useState({ data: [], status: 0 });
  const [countImgStep, setCountImgStep] = useState({ data: {count:0}, status: 0 });
  const [states, setStates] = useState({ count: 0});
  

  
  useEffect(() => {
    getImageCount(setCountImg);
    getMyFotoCountStep(setCountImgStep)
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getMoiFoto(convertStrNum(states.count),setDataImages);
  }, [states.count]);

  useEffect(() => {
    setStates({count:countImgStep.data.count})
  }, [countImgStep.data.count ]);
  return (
   
    <div className="container-fluid" style={{paddingTop:'60px'}}>
    <h1 className = "text-center">Мои Фотографии</h1>
    {(dataImages.status === 200 )?<Gallery dataImages={dataImages.data} countImg={countImg.data} />:
      <Douland/>
    }
    
    
    {
      (states.count < countImg.data) ?
      <Button count = {states.count} countImg ={countImg.data} setStates = {setStates} convertStrNum = {convertStrNum} countImgStep = {countImgStep.data.count}/>
        : ''
    }
    </div>
  );
}


export default MyFoto;
