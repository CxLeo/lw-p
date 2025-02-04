import type { Metadata } from "next";
import localfont from 'next/font/local'
import "./globals.css";

const supply = localfont({
  src:[
    {
      path:"../public/fonts/PPSupplySans-Regular.ttf",
      weight:'400'
    },
  ],
  variable:'--font-supply',
})
const formula = localfont({
  src:[
    {
      path:"../public/fonts/PPFormula-Regular.ttf",
      weight:'400'
    },
  ],
  variable:'--font-formula',
})
const formulaMedium = localfont({
  src:[
    {
      path:"../public/fonts/PPFormula-Medium.ttf",
      weight:'500'
    },
  ],
  variable:'--font-formula-medium',
})

export const metadata: Metadata = {
  title: "Leo Wang's Portfolio",
  description: "Get to know Leo Wang, a full stack engineer based in Canada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${supply.variable} ${formula.variable} ${formulaMedium.variable}`}>
      <body
        className={`antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
