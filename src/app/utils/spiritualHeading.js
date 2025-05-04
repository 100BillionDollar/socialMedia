import React from 'react'

export default function SpiritualHeading({text}) {
  return (
        <div className="position-relative">
        <hr className="my-0" />
        <h2 className="position-absolute featured_font fw-bold top-50 start-50 translate-middle bg-white px-4 ">{text}</h2>
        </div>  )
}
