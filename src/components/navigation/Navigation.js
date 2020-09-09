import React, { useState } from 'react'

function Navigation(props) {
    const [states, setStates] = useState({ count: 1 });

    function arrNav(c, d) {
        c = c / d;
        let a = [];
        for (let i = 0; i < c; i++) {
            a[i] = i;
        }
        return a;
    }


    return (
        <div>
        {props.countImg}
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li onClick={() => setStates({ count: states.count - 1 })} className="page-item disabled">
                        Previous
                    </li>
                    {
                        arrNav(props.countImg, 3).map((x, i)=>
                        <li key = {i} className="page-item">{i + 1}</li>
                        )
                    }
                    
                    <li onClick={() => setStates({ count: states.count + 1 })} className="page-item">
                        Next
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Navigation;