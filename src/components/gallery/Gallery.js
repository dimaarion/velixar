import React from 'react'
import { inital_base_url } from '../../redux/actions';
import '../../style/gallery.css';
function Gallery(props) {
  
    return (
        <div className="container-fluid">
       
            <div className="row text-center">
                {
                    props.dataImages.map((x) => 
                        
<<<<<<< HEAD
                        <div key={x.work_id + 5} className="col-2 text-center" style={{marginBottom:20 + 'px',marginTop:20 + 'px'}}>
                            <img src={`${inital_base_url}/img/slider/${x.work_img}`} alt={x.work_name}  className="img-fluid" style={{maxHeight:'500px'}} />
=======
                            <div key={x.id + 5} className="col-2 text-center" style={{marginBottom:20 + 'px',marginTop:20 + 'px'}}>
                                <img src={`${inital_base_url}/img/slider/${x.img}`} alt={x.names}  className="img-fluid" style={{maxHeight:'500px'}} />
>>>>>>> f32fc0c0e0130ee08e0a7e32a11b52c5ab9dc931
                                <div className = "gal_descript">{x.names}</div>
                            </div>
                        
                    )
                }

            </div>
           
            
        </div>
    )
}
export default Gallery;