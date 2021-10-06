import Image from "next/dist/client/image"

function MediumCard({ item }) {
    return (
        <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out '>
            <div className='relative h-80 w-80 flex  items-center'>
                <Image className="rounded-xl" src={item.img}
                    layout="fill"
                />
            </div>
            <p className='text-2xl mt-3'>{item.title}</p>
        </div>
    )
}

export default MediumCard
