import React from 'react';

function Button(props) {
    return (
        <div>
              <button onClick={() => props.setStates({ count: props.convertStrNum(props.count) + props.convertStrNum(props.countImgStep)})} type="button" className="btn btn-primary btn-lg btn-block">Загрузить еще</button>
        </div>
    )
}

export default Button;