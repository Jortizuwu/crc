import React from 'react'
import PropTypes from 'prop-types'
import TypewriterEffect from '../ui/Typer'

const Divition = ({ name, data }) => {
  return (
    <section className="divition">
      <section className="divition__header">
        <h3 className="divition__title">data {name}</h3>
        <p className="divition__subtitle">
          <strong>D(x):</strong> {data?.Dx}
        </p>
        <p className="divition__subtitle">
          <strong>D:</strong>
          {data.DxBinary}
        </p>
        <p className="divition__subtitle">
          <strong>G(x):</strong>
          {data?.Gx}
        </p>
        <p className="divition__subtitle">
          <strong>G:</strong>
          {data.GxBinary}
        </p>
      </section>
      <div className="divition__main">
        <h4 className="divition__main--title">{name}</h4>
        <TypewriterEffect
          name={name}
          words={data.arrValues}
          divident={data.GxBinary}
          complement={data.complement}
        />
      </div>
    </section>
  )
}

Divition.propTypes = {
  data: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
}

export default Divition
