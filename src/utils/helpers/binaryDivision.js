function binaryDivision(dividend = '', divisor = '') {
  let remainder = dividend
  const arrValues = []
  while (remainder.length >= divisor.length) {
    let shiftedDivisor = divisor.padEnd(remainder.length, '0')
    remainder = (parseInt(remainder, 2) ^ parseInt(shiftedDivisor, 2)).toString(
      2
    )
    arrValues.push(remainder)
  }
  if (divisor.length - 1 - remainder.length === 0) {
    return { complement: remainder, arrValues }
  }
  return {
    complement: '0'
      .repeat(divisor.length - 1 - remainder.length)
      .concat(remainder),
    arrValues,
  }
}

export default binaryDivision
