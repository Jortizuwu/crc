// function binaryDivision(dividend, divisor) {
//   // Convertir los números binarios a enteros
//   const a = parseInt(dividend, 2)
//   const b = parseInt(divisor, 2)
//   let remainder = a
//   const arrValues = []
//   for (let i = 31; i >= 0; i--) {
//     if (remainder >> i >= b) {
//       remainder ^= b << i
//       console.log(remainder)
//       arrValues.push(remainder.toString(2))
//     }
//   }

//   // Convertir el residuo a binario y retornarlo
//   return { complement: remainder.toString(2), arrValues }
// }

function binaryDivision(dividend, divisor) {
  // Convertir los números binarios a enteros
  const a = parseInt(dividend, 2)
  const b = parseInt(divisor, 2)
  let remainder = a
  const arrValues = []

  // Obtener la longitud del dividendo en binario
  const n = dividend.length

  for (let i = n - 1; i >= 0; i--) {
    if (remainder >> i >= b) {
      remainder ^= b << i
      arrValues.push(remainder.toString(2))
    }
  }

  // Si el bit más significativo del residuo es 1, hacer otra operación XOR
  if (remainder >> (n - 1) === 1) {
    remainder ^= b << (n - 1)
    arrValues.push(remainder.toString(2))
  }

  // Convertir el residuo a binario y retornarlo
  return { complement: remainder.toString(2), arrValues }
}

// function binaryDivision(dividend = '', divisor = '') {
//   let quotient = 0
//   let remainder = 0
//   let bitIndex = 0
//   const arrValues = []

//   while (dividend > 0) {
//     remainder = (remainder << 1) | (dividend & 1)
//     quotient = quotient << 1
//     if (remainder >= divisor) {
//       quotient = quotient | 1
//       remainder = remainder ^ divisor
//     }
//     dividend = dividend >> 1
//     bitIndex++
//     console.log(dividend.toString(2))
//     arrValues.push(dividend.toString(2))
//   }
//   quotient = reverseBits(quotient, bitIndex)

//   return { complement: remainder.toString(2), arrValues: arrValues }
// }

// function reverseBits(num, bitCount) {
//   let reversedNum = 0
//   for (let i = 0; i < bitCount; i++) {
//     reversedNum = (reversedNum << 1) | (num & 1)
//     num = num >> 1
//   }
//   return reversedNum
// }

export default binaryDivision
//x^16+x^15+x^12+x^10+x^9+x^6+x^5+x^2+1
