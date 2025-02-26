import { ColorMode, Theme } from '@chakra-ui/vue-theme'
import { inject, ref } from 'vue'

/** Provides theme object in component context */
export const useTheme = (): Theme => {
  const theme = inject('$chakraTheme') as Theme
  return theme
}

/** Injects color mode into component instance */
export const useColorMode = () => {
  const _colorMode = inject('$chakraColorMode') as ColorMode
  const colorMode = ref(_colorMode)

  const toggleColorMode = () => {
    colorMode.value = 'light'
      ? (colorMode.value = 'dark')
      : (colorMode.value = 'light')
  }

  return {
    colorMode,
    toggleColorMode,
  }
}

/** Single hook to provide theme and color mode values */
export const useChakra = () => {
  const theme = useTheme()
  const { colorMode } = useColorMode()
  return {
    theme,
    colorMode,
  }
}
