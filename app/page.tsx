import ClientEffects from '@/components/ClientEffects'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Work from '@/components/Work'
import ProofOfWork from '@/components/ProofOfWork'
import Industries from '@/components/Industries'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <ClientEffects />
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Work />
      <ProofOfWork />
      <Industries />
      <Contact />
      <Footer />
    </>
  )
}
