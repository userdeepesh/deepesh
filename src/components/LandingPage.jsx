// "  pt-1 " is used to uperside in wep
// " font-['Founders_Grotesk'] " it is Font

import React from 'react'

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="textstructure mt-40 px-20">
              <div className='masker'>
                <h1 className="uppercase text-9xl leading-[10vw] tracking-tighter font-['Founders_Grotesk'] font-medium">We Create</h1>

              </div>
              <div className='masker'>
                <h1 className="uppercase text-9xl leading-[5vw] tracking-tighter font-['FoundersGrotesk-Semibold'] font-medium">
                    Eye Opening</h1>

              </div>
              <div className='masker'>
                <h1 className="uppercase text-9xl leading-[10vw] tracking-tighter font-['FoundersGrotesk-Semibold'] font-medium">
                    Presentations</h1>

              </div>
        </div>

    </div>
  )
}

export default LandingPage