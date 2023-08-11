import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import { ArrowRightOnRectangleIcon } from "@heroicons/react/20/solid"
import { TicketcatLogoHorizontal } from "./svg"

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const { data: session, status } = useSession()
  const loading = status === "loading"


  const onLogin = () => {
    signIn()
  }

  return (
    <header className="w-screen flex justify-between px-8 py-4">
      <div id="title">
        <div className="w-8 h-8">
          <Link href="/">
            <TicketcatLogoHorizontal />
          </Link>
        </div>
      </div>
      <div>
        <div
          onClick={onLogin} 
          className="p-2 rounded-full border border-slate-200 text-slate-600 flex items-center justify-center cursor-pointer hover:bg-slate-400 hover:text-white active:scale-110">
            <ArrowRightOnRectangleIcon className="w-5 h-5 text-inherit" />
        </div>
      </div>
    </header>
  )
}