import { StyleSheet } from "react-native-web"
import StyleRegistry from "react-native-web/dist/cjs/modules/ReactNativePropRegistry"

const emptyStyleObject = StyleRegistry.getByID()
function isStyleArray(v) {
  return Array.isArray(v)
    ? v.every(isStyleArray)
    : !v || (typeof v === "number" && StyleRegistry.getByID(v) !== emptyStyleObject)
}

export const test = (value) => {
  return Array.isArray(value) && isStyleArray(value)
}

export const print = (value, serialize) => {
  return serialize(StyleSheet.flatten(value))
}
