import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema, useDefaultValues } from './components/form-utils'

const Crc = () => {
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
    <div className="">
      <h1 className="title">CRC SIMULATOR</h1>
      <form onSubmit={handleSubmit(submit)} className="card">
        <section className="card-form">
          <div className="input-content">
            <label htmlFor="emitter">Emitter</label>
            <input
              className={`${errors.emitter ? 'input-error' : ''}`}
              name="emitter"
              {...register('emitter')}
              type="text"
            />
            {errors.emitter && <span>{errors.emitter.message}</span>}
          </div>
          <div className="input-content">
            <label htmlFor="receptor">Receptor</label>
            <input
              className={`${errors.receptor ? 'input-error' : ''}`}
              name="receptor"
              {...register('receptor')}
              type="text"
            />
            {errors.receptor && <span>{errors.receptor.message}</span>}
          </div>
        </section>
        <button type="submit">count is</button>
      </form>
    </div>
  )
}

export default Crc
