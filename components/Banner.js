import Image from "next/dist/client/image"
function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px]  lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image src="https://links.papareact.com/0fm" layout="fill" objectFit="cover" />
            <p>Not sure where to go? Perfec ewrt</p>
            <div className="p-5 bg-red-500 rounded-full z-50">
              <p className=''>Check Me Out</p>
            </div>
        </div>
    )
}

export default Banner
