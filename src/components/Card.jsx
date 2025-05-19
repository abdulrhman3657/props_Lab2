import React from 'react'


function Card(props) {

  return (
    <>
    
    <div className="card p-3 m-3" style={{width:"18rem", height:"40rem"}}>
      <img  src={props.img} />
      <div className="card-body">
        <p className="card-text">{props.text}</p>
        <ul>
          <div className="product-list">
            {props.list.map((p, index) => (
              <li>{p}</li>
            ))}
          </div>
        </ul>
      </div>
    </div>
    
    </>
  )
}

export default Card