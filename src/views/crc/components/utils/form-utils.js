import * as yup from 'yup'
import { useDispatch } from 'react-redux'

import { Notify } from '@src/components/ui/Notify'
import { detectarValor } from '@utils/helpers/convertToBn'
import binaryDivision from '@src/utils/helpers/binaryDivision'
import { setEmitter, setReceptor } from '@src/redux/features/crc/crcSlice'

export const schema = yup.object().shape({
  Dx: yup.string().required('Dx field is required'),
  Gx: yup.string().required('Gx field is required'),
})

const defaultValues = {
  Dx: '',
  Gx: '',
}

export function useDefaultValues() {
  const dispatch = useDispatch()

  const submit = ({ Dx, Gx }) => {
    try {
      const DxBinary = detectarValor(Dx)
      const GxBinary = detectarValor(Gx)

      // emitter
      const respEmitter = binaryDivision(
        DxBinary.concat('0'.repeat(GxBinary.length - 1)),
        GxBinary
      )
      // receptor
      const respReceptor = binaryDivision(
        DxBinary.concat(respEmitter.complement),
        GxBinary
      )

      console.log({ respEmitter, respReceptor })
      // save redex store
      dispatch(setEmitter({ ...respEmitter, Gx: GxBinary, Dx: DxBinary }))
      dispatch(setReceptor({ ...respReceptor, Gx: GxBinary, Dx: DxBinary }))
    } catch (error) {
      Notify(`${error}`, 'error')
    }
  }

  return {
    submit,
    defaultValues,
  }
}
