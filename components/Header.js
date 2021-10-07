import Image from 'next/image';
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

function Header() {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date);
    const [endDate, setEndDate] = useState(new Date);
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* left */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left" />
            </div>

            {/* centre */}
            <div className="flex items-center rounded-full md:border-2 md:shadow-md">
                <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="flex-grow pl-4 bg-transparent outline-none text-gray-600 placeholder-gray-400" type="text" placeholder="start your search" />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-500 text-white rounded-full p-2 cursor-pointer" />
            </div>

            {/* left */}
            <div className="flex items-center space-x-4 text-gray-600 justify-end">
                <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
                <GlobeAltIcon className=" h-6 cursor-pointer" />
                <div className="flex border-2 border-gray-400 rounded-full cursor-pointer ">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>
            {searchInput &&
                <div className="flex flex-col col-span-3 mx-auto mt-5">
                    <DateRangePicker ranges={[selectionRange]} minDate={new Date}
                        rangeColors={["#FDSB61"]}
                        onChange={handleSelect}
                    />
                </div>
            }
        </header>
    )
}

export default Header