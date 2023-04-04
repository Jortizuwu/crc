import { REG_BINARY, REG_HEX, REG_POLY } from '@utils/common/regex'

export function convertToBinary(number) {
  return (number >>> 0).toString(2)
}

export function polynomiToBynary(emitter) {
  const regex = /x\^(\d+)/g
  let match
  let expression = 0
  while ((match = regex.exec(emitter))) {
    const power = parseInt(match[1])
    expression += Math.pow(2, power)
  }
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
