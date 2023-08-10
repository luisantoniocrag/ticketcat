export default function Page() {
  return (
    <div id="mobile-wrapper" className="bg-slate-200 w-screen min-h-screen">


      <div id="container" className="w-4/12 mx-auto">

        <div className="pt-24">
          
          <div id="login-card" className="bg-white w-full h-min-[1200px] rounded-lg border border-slate-300 p-4">

            <div className="flex flex-col">

              <h3 className="text-black font-bold text-2xl">Authenticate</h3>
              <span className="text-slate-400 font-normal text-normal">Please select the method to authenticate</span>

            </div>

            <div>

                <p className="text-black mt-8">Aquí va a ir el logo de ticketcat</p>

            </div>

            <div className="flex w-full mt-8 mb-8">

              <div className="flex flex-row w-full items-center mx-auto rounded-lg border border-slate-200 p-4 cursor-pointer hover:bg-slate-100">
                  <div className="text-black mr-4">logo</div>
                  <span className="text-black">Worldcoin ID</span>
              </div>

            </div>

          </div>

        </div>


      </div>
    </div>
  )
}