'use client'
import { React, Fragment, useState, useEffect} from 'react';
import { Dialog, Transition, Popover } from '@headlessui/react'
// import Vid1 from './components/video/Vid1.mp4'
import './MS.css'
import './Navbar.css'
// import Typewriter from 'typewriter-effect';
import Banner1 from '../../../public/asset/banner1.jpg'

function Content1() {
    //MoError
    let [isError, setIsError] = useState(false)
  
    function closeError() {
        setIsError(false)
    }
  
    function openError() {
        setIsError(true)
    }
    return (
        <div>
            <div className='grid grid-cols-1'>
                <div className="grid grid-cols-3 min-h-screen">
                    <div className="col-span-3">
                        <img src='https://www.arts.chula.ac.th/goz/asset/banner/8dCOiId6lJaxhgVS7UjcEjGy4mpFI4Zg.jpg' className='ssa'></img>                        
                    </div>
                    <div className="col-span-2">
                        <div class="grid grid-rows-1 gap-2 mx-10">
                            <div class="col-span-4">
                                <p className='text-7xl text-[#F8E1EA]'>What is <b>AKSORN</b>?</p>    
                            </div>
                            <div class="col-span-4 ">
                                <div className='flex text-2xl mt-2 text-[#F8E1EA] mb-0'>
                                        อักษรคืออะไร หาคำตอบได้ที่นี่เลย
                                </div>
                            </div>
                            <div class="col-span-4 mt-2">
                                <a type='button' href='https://www.arts.chula.ac.th/th/about/' target='_blank' className='flex px-2 py-1 border-2 border-[#F8E1EA] w-fit h-auto mt-2 text-[#F8E1EA] underline-thickness-1 hover:underline hover:bg-[#F8E1EA] hover:text-[#1F1F1F]
        `                           cursor-pointer transition-colors duration-300'>
                                    เรียนรู้เพิ่มเติม
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <div className='grid grid-cols-1 place-items-end'>
                            <a type='button' className='flex px-2 py-1 border-2 border-[#F8E1EA] w-fit h-auto text-[#F8E1EA] underline-thickness-1 hover:underline hover:bg-[#F8E1EA] hover:text-[#1F1F1F]
        `                           cursor-pointer transition-colors duration-300' href='https://youtu.be/5Aeg80lzhIY?si=N_jc5FcmDMQqjF9-' target='_blank'>
                                    <div ><b>GOZ TV</b></div>
                                    &nbsp;
                                    <div className='grid'>behind GOZ: Arts Welcome</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                            </a>
                    </div> */}
                </div>            
            </div>
            <Transition appear show={isError} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeError}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                 <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    เว็บไซต์อยู่ระหว่างการพัฒนา
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      ขออภัยในความไม่สะดวก หากคุณไม่สามารถเข้าใช้งานบางหน้าเว็บได้ เนื่องจากเว็บไซต์ ก.อศ. รูปแบบใหม่กำลังพัฒนา เพื่อให้นิสิตสามารถเข้าถึงข้อมูลได้อย่างมีประสิทธิภาพ
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="flex px-4 py-2 text-sm font-medium border-2 btn-active underline-thickness-1 hover:underline hover:bg-[#1F1F1F] hover:text-[#F2F2F2]
                      cursor-pointer transition-colors duration-300"
                      onClick={closeError}
                    >
                      รับทราบ
                    </button>
                  </div>
                </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
            </Transition>
        </div>
    );
}

export default Content1;