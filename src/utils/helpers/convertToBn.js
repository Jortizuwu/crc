import { REG_BINARY, REG_HEX, REG_POLY } from '@utils/common/regex'

export function detectarValor(value) {
  if (isBinary(value)) {
    return value
  } else if (isPolynomial(value)) {
    return polynomiToBinary(value)
  } else if (isHexadecimal(value)) {
    return hexToBinary(value)
  } else {
    throw new Error('DX and GX values must be HEX, binary or polynomial')
  }
}

export function convertToBinary(number) {
  return (number >>> 0).toString(2)
}

export function polynomiToBinary(emitter = '') {
  const regex = /x\^(\d+)/g
  let match
  let expression = 0
  while ((match = regex.exec(emitter))) {
    const power = parseInt(match[1])
    expression += Math.pow(2, power)
  }
  const lastItem = emitter.split('+')[emitter.split('+').length - 1]
  return convertToBinary(expression)
    .slice(0, -1)
    .concat(convertToBinary(lastItem))
}

export function hexToBinary(number) {
  const expression = parseInt(number, 16)
  return convertToBinary(expression)
}
export function isBinary(number) {
  return REG_BINARY.test(number)
}

export function isHexadecimal(number) {
  return REG_HEX.test(number)
}

export function isPolynomial(number) {
  return REG_POLY.test(number)
}
