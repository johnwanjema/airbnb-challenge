import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard'

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
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
          <h2>Live Anywhere</h2>
        </section>
      </main>
    </div>
  )
}


export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  ).catch(error => {
    console.log(error)
  })

  return {
    props: {
      exploreData
    }
  }

}