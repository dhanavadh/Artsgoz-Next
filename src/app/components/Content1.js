import React from 'react';
// import Vid1 from './components/video/Vid1.mp4'
import './MS.css'
import './Navbar.css'
// import Typewriter from 'typewriter-effect';
import Banner1 from '../../../public/asset/banner1.jpg'

function Content1() {
    return (
        <div>
            <div className='grid grid-cols-1'>
                {/* <div className='grid justify-left items-end gap-y-0 min-h-screen border-t-2 border-l-0 border-r-2 border-b-2 border-gray-900'>
                    <div className='text-8xl '>สวัสดี ก.อศ.</div>
                    <div className='text-8xl '>สวัสดี ก.อศ.</div>
                </div> */}
                <div className="grid grid-cols-3 min-h-screen">
                    <div className="col-span-3">
                        <img src='https://www.arts.chula.ac.th/goz/asset/banner/8dCOiId6lJaxhgVS7UjcEjGy4mpFI4Zg.jpg' className='ssa'></img>
                        {/* <video autoPlay loop muted className='ssa'> 
                            <source src={Vid1} type='video/mp4'></source>
                        </video> */}
                    </div>
                    <div className="col-span-2">
                        <div class="grid grid-rows-1 gap-2 mx-10">
                            <div class="col-span-4">
                                <p className='text-7xl text-[#F8E1EA]'>What is <b>AKSORN</b>?</p>    
                            </div>
                            <div class="col-span-1 ">
                                <div className='flex text-6xl font-semibold mt-2 underline text-[#F8E1EA] mb-0'>
                                        {/* <Typewriter
                                            options={{
                                                strings: ['language?', 'drama?', 'literature?', 'BRK 503?', 'humanities?', 'philosophy?', 'technology?'],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        /> */}
                                </div>
                            </div>
                            <div class="col-span-4 mt-2">
                                <div type='button' className='flex px-2 py-1 border-2 border-[#F8E1EA] w-fit h-auto mt-2 text-[#F8E1EA] underline-thickness-1 hover:underline hover:bg-[#F8E1EA] hover:text-[#1F1F1F]
        `                           cursor-pointer transition-colors duration-300'>
                                    เรียนรู้เพิ่มเติม
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 place-items-end'>
                            <a type='button' className='flex px-2 py-1 border-2 border-[#F8E1EA] w-fit h-auto text-[#F8E1EA] underline-thickness-1 hover:underline hover:bg-[#F8E1EA] hover:text-[#1F1F1F]
        `                           cursor-pointer transition-colors duration-300' href='https://youtu.be/5Aeg80lzhIY?si=N_jc5FcmDMQqjF9-' target='_blank'>
                                    <div ><b>GOZ TV</b></div>
                                    &nbsp;
                                    <div className='grid'>behind GOZ: Arts Welcome</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                            </a>
                    </div>
                </div>            
            </div>
        </div>
    );
}

export default Content1;