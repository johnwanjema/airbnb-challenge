import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
function Search() {
    const router = useRouter();
    console.log(router.query);

    const {location ,startDate,endDate,numberOfGuests} = router.query;
    return (
        <div>
            <Header />
            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>300+ Stays - 07 October 21 - 07 October 21 - for 1 guests</p>
                    <h1 className='text-3xl text-semi-bold mt-2 mb-6'>Stays in </h1>
                    <div className='hidden lg:inline-flex border-b mb-5 space-x-3 text-gray-800  whitespace-nowrap'>
                        <p className='button'>Cancellation flexibility</p>
                        <p className='button'>Type of place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and beds</p>
                        <p className='button'>More filters</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Search
