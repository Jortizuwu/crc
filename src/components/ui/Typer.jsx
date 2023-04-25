import React from 'react'
import Typewriter from 'typewriter-effect'
import PropTypes from 'prop-types'

const TypewriterEffect = ({ words, divident, complement, name }) => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        words.forEach((word, index) => {
          if (index === words.length - 1) {
            if (name === 'emitter') {
              typewriter.typeString(
                `${word} <br/> <h4 className="divition__subtitle">crc: ${complement}</h2>`
              )
            } else {
              if (complement.includes('1')) {
                typewriter.typeString(
                  `${word} <br/> <p className="divition__subtitle">crc: ${complement} el mensaje no fue enviado 💀</p>`
                )
              } else {
                typewriter.typeString(
                  `${word} <br/> <div className="crc_finish"> <p className="divition__subtitle">crc: ${complement} mensaje enviado correctamente 😳</p> </div>`
                )
              }
            }
          } else {
            typewriter.typeString(
              `${word}<br/> ${divident} <br/> <div>${'-'.repeat(
                word.length * 2
              )}</div>`
            )
          }
        })
      }}
      options={{
        autoStart: true,
        loop: false,
        delay: 1,
        strings: ['calculando', '...'],
        cursor: '',
      }}
    />
  )
}

TypewriterEffect.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  divident: PropTypes.string,
  complement: PropTypes.string,
  name: PropTypes.string,
}

export default TypewriterEffect
