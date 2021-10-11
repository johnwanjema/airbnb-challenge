import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className="pt-6">
          <h2 className='font-semibold text-4xl pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map((item, key) => (
              <SmallCard key={key} item={item} />
            ))}

          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className="flex items-center space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData.map((item, key) => (
              <MediumCard key={key} item={item} />
            ))}
          </div>
        </section>
        <LargeCard
          img='https://links.papareact.com/4cj'
          title='The greatest outdoors'
          description='Wishlist created by airbnb'
          buttonText='check me out'
        />
      </main>
      <Footer />
    </div>
  )
}


export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  ).catch(error => {
    console.log(error)
  })

  const cardsData = await fetch('https://links.papareact.com/zp1').then(
    (res) => res.json()
  ).catch(error => {
    console.log(error)
  })

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}