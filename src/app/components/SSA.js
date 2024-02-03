'use client'
import { React, Fragment, useState, useEffect} from 'react';
import { Dialog, Transition, Popover } from '@headlessui/react'
// import Vid1 from './components/video/Vid1.mp4'
import '../components/MS.css'
import IMG1 from '../components/asset/1.jpg'
import Image from 'next/image';
import LookUp200823 from '../components/asset/LookUp-200823.jpg'
// import Typewriter from 'typewriter-effect';

function SSA() {
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
            <div className='grid grid-cols-1 mt-48 sm:mt-96'>
                <div className="grid min-h-min">
                    <div className="col-span-3">
                      <img src='https://www.arts.chula.ac.th/goz/asset/banner/8dCOiId6lJaxhgVS7UjcEjGy4mpFI4Zg.jpg' className='ssa'></img>                        
                    </div>
                    <div className="col-span-2">
                        <div class="grid gap-2 mx-10">
                            <div class="col-span-4">
                                <p className='text-7xl text-[#F8E1EA]'><b>Sitemap</b></p>    
                            </div>
                            <div class="col-span-4">
                                <div className='flex text-2xl mt-2 text-[#F8E1EA] mb-2'>
                                สามารถดูข้อมูลแผนผังเว็บไซต์ได้ที่หน้านี้
                                </div>
                            </div>
                            <div class="col-span-4 mt-2">
                                                          
                            </div>
                        </div>
                    </div>                    
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

export default SSA;