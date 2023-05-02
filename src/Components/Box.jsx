import React from 'react'

const Boxes = (props) => {
  return (
    <div className="box">
      <div className="info">
        <div className="icon">
         
            <img className='pimage' src={props.pic} alt="verify" />
         
          
        </div>

        <div className="content">
          <h1 className="verify_owner"> {props.title}</h1>
          <p className="verify_para">
            {props.graph}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Boxes