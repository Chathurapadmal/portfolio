import './globals.css'

export const metadata = {
  title: 'CHATHURA | Software Engineer',
  description: 'Portfolio of Chathura Padmal — Software Engineering Undergraduate',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
