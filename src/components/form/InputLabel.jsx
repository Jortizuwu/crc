import React from 'react'
import PropTypes from 'prop-types'

const InputLabel = ({ errors, register, name, label }) => {
  return (
    <div className="input-content">
      <label htmlFor="receptor">{label}</label>
      <input
        className={`${errors?.receptor ? 'input-error' : ''}`}
        name="receptor"
        {...register(name)}
        type="text"
      />
      {errors[name] && <span>{errors[name]?.message}</span>}
    </div>
  )
}

InputLabel.propTypes = {
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default InputLabel
