import { WavyBackground } from '@/components/ui/wavy-background'
import { SignUp } from '@clerk/nextjs'
import { dark } from '@clerk/themes'



export default function Page() {
  return (
    <div>
    <WavyBackground>
      <div  >
             <SignUp appearance={{ baseTheme: dark , layout: {
            animations:true
        }}}/>
        </div>
      
    </WavyBackground>
    </div>
  )
}
