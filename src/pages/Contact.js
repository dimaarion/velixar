import React, { useEffect, useState } from 'react';
import { getContact } from '../redux/actions';

function Contact() {
    const [names, setNames] = useState({ data:[] , status: 0 })
    const [content, setContent] = useState({ data:[] , status: 0 })
useEffect(()=>{
    getContact(setNames,'names');
    getContact(setContent,'content');
    
},[])



    return (
        <div className="container-fluid" style={{ paddingTop: '60px' }}>
            <h1 className="text-center">{names.data}</h1>
            <div>
           {content.data}
            </div>
        </div>
    )
}

export default Contact;