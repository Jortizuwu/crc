function binaryDivision(dividend, divisor) {
  // Convertir los números binarios a enteros
  const a = parseInt(dividend, 2)
  const b = parseInt(divisor, 2)
  let remainder = a
  const arrValues = []
  // Realizar la división binaria con XOR
  //   El número 31 se utiliza en el algoritmo como límite superior del bucle for para realizar la división binaria con XOR porque en JavaScript, los números enteros de 32 bits (que son utilizados para representar los números binarios) tienen un rango de -2^31 a 2^31-1.
  // En el algoritmo, se asume que ambos números binarios tienen una longitud máxima de 32 bits (porque estamos trabajando con números enteros de 32 bits en JavaScript). Por lo tanto, se comienza a realizar la división binaria con XOR en la posición más alta del número binario (es decir, en la posición 31), y se continúa hasta la posición más baja (posición 0).
  // Así, el límite superior del bucle for es 31, ya que es la posición más alta en la que se puede tener un bit en un número binario de 32 bits. Si se estuviera trabajando con números binarios de longitud diferente, el límite superior del bucle for debería ajustarse en consecuencia.
  for (let i = 31; i >= 0; i--) {
    if (remainder >> i >= b) {
      remainder ^= b << i
      arrValues.push(remainder.toString(2))
    }
  }

  // Convertir el residuo a binario y retornarlo
  return { complement: remainder.toString(2), arrValues }
}

export default binaryDivision
