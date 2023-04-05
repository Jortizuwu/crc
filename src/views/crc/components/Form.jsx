import React from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema, useDefaultValues } from '../components/utils/form-utils'
import InputLabel from '@src/components/form/InputLabel'

const Form = () => {
  const { defaultValues, submit } = useDefaultValues()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  })
  return (
    <form onSubmit={handleSubmit(submit)} className="card">
      <section className="card-form">
        <div className="input-content">
          <InputLabel
            errors={errors}
            label="D(x)"
            name="Dx"
            register={register}
          />
          <InputLabel
            errors={errors}
            label="G(x)"
            name="Gx"
            register={register}
          />
        </div>
      </section>
      <button type="submit">start</button>
    </form>
  )
}

export default Form
