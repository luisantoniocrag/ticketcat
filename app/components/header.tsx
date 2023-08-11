import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import { ArrowRightOnRectangleIcon } from "@heroicons/react/20/solid"
import { TicketcatLogoHorizontal } from "./svg"
import { MoonLoader } from "react-spinners"
import { useEffect } from "react"


export default function Header() {
  const { data: session, status } = useSession()

  useEffect(() => {
    console.log(session)
  }, [session])

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
      <button
                onClick={onLogin} 

        type="button"
        className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {!loading ? <ArrowRightOnRectangleIcon className="w-5 h-5 text-inherit" /> : <MoonLoader size={15} />}
        Authenticate
      </button>
        
      </div>
    </header>
  )
}