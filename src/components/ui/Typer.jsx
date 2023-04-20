import React from 'react'
import Typewriter from 'typewriter-effect'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { setFinishEmmitter } from '@src/redux/features/crc/crcSlice'

const TypewriterEffect = ({ words, divident, complement, name }) => {
  const dispacth = useDispatch()

  return (
    <Typewriter
      onInit={(typewriter) => {
        words.forEach((word, index) => {
          if (index === words.length - 1) {
            typewriter.typeString(
              `${word} <br/> <p className="divition__subtitle">crc: ${complement}</p>`
            )
            if (name === 'emitter') {
              dispacth(setFinishEmmitter())
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
