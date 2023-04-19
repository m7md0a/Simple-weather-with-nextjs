import Image from 'next/image'
// import { Inter } from 'next/font/google'

import axios from "axios";
import  Head  from "next/head";
import { useState } from "react";
import Weather from '../components/Weather';
import Spinner from '../components/Spinner';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const url = `https://openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEBSITE_KEY}` //&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}` //`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url)
      .then(e=> {
        setWeather(e.data);
        // console.log(e.data);
      }).catch(err => console.log(err));
      setCity('');
      setLoading(false);
  }
  const changeValueByInput = (e) => {
    setCity(e.target.value)
  }
  
  if (loading) {
    return <Spinner />
  } else { 
    return (
      <div>
        <Head>
          <title>This is the weather app</title>
          <meta name="descripthion" content="this is weather app with nextjs" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="">
          <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]' />
           <Image src={'https://images.unsplash.com/photo-1560773526-435221de2527?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'}
            layout='fill'
            className='object-cover'
            alt='this is alt for image'
          />
          <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 px-4 text-white z-10'>
            {/* Search */}
              <form onSubmit={fetchWeather} className='flex justify-between items-center w-full m-auto p-2 bg-transparent border border-gray-300 text-white rounded-2xl'>
                <div>
                  <input type="text"
                    className='bg-transparent w-full border-none text-white focus:outline-none text-xl'
                    placeholder='Search city'
                    onChange={changeValueByInput} />
                </div>
                {city}
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                </button>
              </form>
          </div>
          <div>
            {weather.main && <Weather data={weather}/>}
          </div>
         </main>
      </div>
    )
  }
}
