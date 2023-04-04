import * as yup from 'yup'
import {
  polynomiToBynary,
  convertToBinary,
  isBinary,
  isPolynomial,
  isHexadecimal,
} from '@utils/helpers/convertToBn'

export const schema = yup.object().shape({
  emitter: yup.string().required('emitter field is required'),
  receptor: yup.string().required('receptor field is required'),
})

const defaultValues = {
  emitter: '',
  receptor: '',
}

export function useDefaultValues() {
  const submit = ({ emitter }) => {
    try {
      if (isBinary(emitter)) {
        console.log({ emitter })
      }
      if (isPolynomial(emitter)) {
        const resp = polynomiToBynary(emitter)
        const lastItem = emitter.split('+' || '-')[
          emitter.split('+').length - 1
        ]
        const data = resp.concat(convertToBinary(lastItem))
        console.log({ data })
      }
      if (isHexadecimal(emitter)) {
        const decimalNumber = parseInt(emitter, 16)
        const data = convertToBinary(decimalNumber)
        console.log({ data })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return {
    submit,
    defaultValues,
  }
}
