// function binaryDivision(dividend = '', divisor = '') {
//   // Convertir los números binarios a enteros
//   const a = parseInt(dividend, 2)
//   const b = parseInt(divisor, 2)
//   let remainder = a
//   const arrValues = []
//   for (let i = a; i >= 0; i--) {
//     if (remainder >> i >= b) {
//       remainder ^= b << i
//       console.log(remainder)
//       arrValues.push(remainder.toString(2))
//     }
//   }
//   if (remainder === 1 || remainder === 0) {
//     remainder = '000' + remainder.toString(2)
//   } else if (remainder === 2 || remainder === 3) {
//     remainder = '00' + remainder.toString(2)
//   } else if (remainder === 4) {
//     remainder = '0' + remainder.toString(2)
//   }
//   // Convertir el residuo a binario y retornarlo
//   return { complement: remainder.toString(2), arrValues }
// }

function binaryDivision(dividend, divisor) {
  let remainder = dividend
  const arrValues = []

  while (remainder.length >= divisor.length) {
    // let shiftAmount = remainder.length - divisor.length
    let shiftedDivisor = divisor.padEnd(remainder.length, '0')
    console.log(shiftedDivisor)
    remainder = (parseInt(remainder, 2) ^ parseInt(shiftedDivisor, 2)).toString(
      2
    )
    arrValues.push(remainder)
    // remainder = remainder.replace(/^0+/, '')
  }

  return { complement: remainder, arrValues }
}

export default binaryDivision
//x^16+x^15+x^12+x^10+x^9+x^6+x^5+x^2+1
