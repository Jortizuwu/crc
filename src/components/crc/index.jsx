import React from 'react'

const Crc = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <main className=''>
      <h1>CRC SIMULATOR</h1>
      <div className='card'>
        <section className='card-form'>
          <div className='input-content'>
            <label>Emisor</label>
            <input type='text' />
          </div>
          <div className='input-content'>
            <label>Receptor</label>
            <input type='text' />
          </div>
        </section>
        <button type='submit' onClick={handleSubmit}>
          count is {count}
        </button>
      </div>
    </main>
  )
}

export default Crc
