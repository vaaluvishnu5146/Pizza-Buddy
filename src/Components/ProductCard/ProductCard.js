import React from 'react'

export default function ProductCard({ data = {}, add }) {
  return (
    <div className="card col-lg-3 col-md-4 col-sm-6">
      <img src={data.uri || ''} className="card-img-top" alt={data.name} />
        <div className="card-body">
            <h5 className="card-title">{data.name || ''}</h5>
            <div height="10px" />
            <p>{data.price}</p>
            {
                add && <a href="#" className="btn btn-danger" onClick={() => add(data)}>Add to oven</a>
            }
        </div>
    </div>
  )
}
