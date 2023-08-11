import Header from "./header"
import Footer from "./footer"
import type { ReactNode } from "react"

export default function Container({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}