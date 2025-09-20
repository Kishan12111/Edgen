import { WavyBackground } from '@/components/ui/wavy-background'
import { SignIn } from '@clerk/nextjs'
import { dark } from '@clerk/themes'



export default function Page() {
  return (
    <div>
    <WavyBackground>
      <div  >
             <SignIn appearance={{ baseTheme: dark , layout: {
            animations:true
        }}}/>
        </div>
      
    </WavyBackground>
    </div>
  )
}
