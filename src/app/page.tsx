import HeroMain from '@/components/hero/HeroMain'
import Navbar from '@/components/navigation/Navbar'
import Portfolio from '@/components/recents/Portfolio'

export default function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <section id="home" className='min-h-screen w-full bg-[url("/imgs/mesh-700.png")] bg-gray-900 flex flex-col items-center justify-center relative'>
          <HeroMain/>
          <div className='absolute bottom-0 w-screen h-1/4 bg-gradient-to-b from-gray-50/0 to to-black'></div>
        </section>
        <section id="portfolio" className='flex flex-col items-center justify-center w-full min-h-screen bg-black'>
          <Portfolio/>
        </section>
      </main>
    </>
  )
}
