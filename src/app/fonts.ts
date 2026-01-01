import localFont from 'next/font/local'

export const montserrat = localFont({
  src: [
    {
      path: '../../public/fonts/Montserrat-VariableFont_wght.ttf',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Montserrat-Italic-VariableFont_wght.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-montserrat',
  display: 'swap',
})
