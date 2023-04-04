import { REG_BINARY, REG_HEX, REG_POLY } from '@utils/common/regex'

export function isValidBinary() {
  return this.min(1, 'value min length is 1')
    .matches(REG_BINARY, {
      message: 'the field is not valid, must be binary, hex or polynomial',
      excludeEmptyStrings: true,
    })
    .required('is required')
}

export function isValidHexadecimal() {
  return this.min(1, 'value min length is 1')
    .matches(REG_HEX, {
      message: 'the field is not valid, must be binary, hex or polynomial',
      excludeEmptyStrings: true,
    })
    .required('is required')
}

export function isValidPoly() {
  return this.min(1, 'value min length is 1')
    .matches(REG_POLY, {
      message: 'the field is not valid, must be binary, hex or polynomial',
      excludeEmptyStrings: true,
    })
    .required('is required')
}
