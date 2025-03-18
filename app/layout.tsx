export const metadata = {
  title: 'E-Commerce Store',
  description: 'A modern e-commerce store built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 