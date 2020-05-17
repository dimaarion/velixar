import React,{useState} from 'react'
import './Search.css'
import { Transition } from 'react-transition-group';
const Search = (props) => {
const [forms, setforms] = useState('');
    const duration = 1000;

    const defaultStyleS = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 1,
    }
    const defaultStyleInput = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    }
    const defaultStyleInputIn = { 
        
        transition: `width ${duration}ms ease-in-out`,
       
        width: 30 + 'px',
        marginLeft: -200 + 'px',
    }
    const transitionStylesS = {
        entering: { opacity: 0, zIndex: 0, },
        entered: { opacity: 0, zIndex: 0, },
        exiting: { opacity: 1, zIndex: 8000, },
        exited: { opacity: 1, zIndex: 8000, },
    };

    const transitionStylesInput = {
        entering: { opacity: 1, zIndex: 8000, },
        entered: { opacity: 1, zIndex: 8000, },
        exiting: { opacity: 0, zIndex: 0, },
        exited: { opacity: 0, zIndex: 0, },
    };
    const transitionStylesInputIn = {
        entering: { width: 200 + 'px' },
        entered: { width: 200 + 'px' },
        exiting: { width: 30 + 'px' },
        exited: { width: 30 + 'px' },
    };

    return (
        <Transition in={props.search} timeout={duration}>
            {state => (
                <div className="row ">
                    <div className="col-sm"></div>
                    <div style={{ ...defaultStyleInput, ...transitionStylesInput[state] }} className="Search_form col-sm-3 text-right p-0" >
                        <form>
                            <input  onChange = {(e)=>setforms(e.target.value)}  style={{ ...defaultStyleInputIn, ...transitionStylesInputIn[state] }} placeholder = "Поиск"/>
                            <button type="button"><i className="fa fa-search"></i></button> 
                            <i onClick={() => props.fal()} className="fa fa-times"></i>
                        </form>
                    </div>
                    <div style={{ ...defaultStyleS, ...transitionStylesS[state] }} onClick={() => props.tru()} className="Search_img col-sm-2 text-left p-0" >
                        <i className="fa fa-search"></i> Поиск
                    </div>


                </div>
            )}
        </Transition>
    )





}


export default Search
