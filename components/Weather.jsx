import Image from 'next/image';
import React from 'react'

function Weather({ data }) {
    // console.log(data);
    return (
        <div className='relative flex flex-col justify-center max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10'>
            <div className="max-w-5xl overflow-hidden rounded-lg shadow-lg dark:bg-gray-900 dark:text-gray-100">
                <div className="flex justify-between p-4">
                    <div className="flex flex-col flex-1 gap-4">
                        <div className="flex justify-between">
                            <div className="flex gap-2 flex-col">
                                <p className='text-white'>{data.name},{data.sys.country}</p>
                                <span className="text-xl font-semibold">{data.main.temp.toFixed(0)}°C</span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image
                                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                                    alt='/'
                                    width='100'
                                    height='100'
                                />
                                <p className='text-2xl'>{data.weather[0].main}</p>
                            </div>
                        </div>
                        <p>Weather in {data.name}</p>
                        <p className="text-sm">Feels like {data.weather[0].description} {data.main.feels_like.toFixed(0)}&#176;
                        </p>
                    </div>
                    <div className="text-sm leading-loose">
                        <div className="flex items-center"></div>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-8 p-4 border-t dark:text-gray-400 dark:border-gray-700">
                    <div className="flex items-center space-x-1">
                        <span className="font-bold">{data.visibility / 1000}</span>
                        <span className="text-sm">km Visibility</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <span className="font-bold">{data.main.humidity}%</span>
                        <span className="text-sm">Humidity</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <span className="font-bold">{data.wind.speed}m/s</span>
                        <span className="text-sm">Winds</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weather