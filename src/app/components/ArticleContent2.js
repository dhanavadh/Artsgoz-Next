'use client'
import { React, Fragment, useState, useEffect} from 'react';
import { Dialog, Transition, Popover } from '@headlessui/react'
import './MS.css'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

const ArticleContent2 = () => {
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
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='grid'>
                <div className='grid grid-cols-12'>
                    <div className='grid'>
                        <div className='flex bg-[#f2f2f2] text-[#1f1f1f] items-center justify-center '>
                            <span className='-rotate-90 text-lg whitespace-nowrap tracking-widest underline decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer'>
                                Repo
                            </span>                    
                        </div>
                    </div>             
                    <div className='col-span-11 bg-[#f2f2f2] text-[#1f1f1f] border-gray-200 border-l-2'>   
                        <div className='m-5'>
                            <div className='text-2xl font-medium px-5 pt-5'>AKSORN Repository คืออะไร?</div>
                            <div class="max-w-3xl mx-5 mt-4 sm:mt-8 lg:mt-4">
                                <div className='pb-5'>Arts Repository คลังข้อมูลที่จำเป็นสำหรับนิสิตอักษรฯ อีกทั้งยังสามารถดาวน์โหลดไฟล์ที่เพื่อนนิสิตอัปโหลตไว้ได้อีกด้วย โดยจะเปิดให้ใช้งานภายใน ตุลาคม 2566 นี้</div>
                                <div className=''></div>
                                <div className='grid grid-cols-1'>
                                    <div>
                                    <a
                                        className="flex items-center justify-center px-2 py-1 border-2 btn-active underline-thickness-1 hover:underline hover:bg-[#1F1F1F] hover:text-[#F2F2F2]
                                        cursor-pointer transition-colors duration-300" onClick={openError}
                                        >
                                        เข้าสู่ระบบ
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-1">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                    </a>
                                    </div>
                                    {/* <div>
                                    <a className="flex items-center justify-center px-2 py-1 border-2 btn-active underline-thickness-1 hover:underline hover:bg-[#1F1F1F] hover:text-[#F2F2F2]
                                        cursor-pointer transition-colors duration-300"
                                        >
                                        เข้าสู่ระบบ
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-1">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                    </a>
                                    </div> */}
                                </div>                                
                            </div>
                        </div>                                        
                    </div>
                </div>            
            </div>
            <div className='grid grid-cols-12'> 
                <div className='grid'>
                    <div className='flex bg-[#1f1f1f] text-[#f2f2f2] items-center justify-center'>
                        <span className='-rotate-90 text-lg underline whitespace-nowrap tracking-widest decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer'>
                            Site
                        </span>                    
                    </div>
                </div>
                <div className='col-span-11 bg-[#1f1f1f] text-[#f2f2f2] border-[#333333] border-l-2'>   
                        <div className='m-5'>
                            <div className='text-2xl font-medium p-5'>เว็บไซต์ที่เกี่ยวข้อง</div>
                            <div class="max-w-3xl mx-5 mt-4 sm:mt-8 lg:mt-4">
                                <div class="-my-4 divide-y">
                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <ArrowLongRightIcon className='w-10 h-10' />                                    
                                    <h3 class="text-lg font-semibold text-[#f2f2f2]">
                                        <a href="https://www.arts.chula.ac.th/" target='_blank' class="hover:underline">คณะอักษรศาสตร์</a>
                                    </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <ArrowLongRightIcon className='w-10 h-10' />                                    
                                    <h3 class="text-lg font-semibold text-[#f2f2f2]">
                                        <a href="https://sites.google.com/view/regartscu/" target='_blank' class="hover:underline">งานทะเบียน คณะอักษรศาสตร์</a>
                                    </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <ArrowLongRightIcon className='w-10 h-10' />                                    
                                    <h3 class="text-lg font-semibold text-[#f2f2f2]">
                                        <a href="https://www.arts.chula.ac.th/student_affairs/" target='_blank' class="hover:underline">งานกิจการนิสิต คณะอักษรศาสตร์</a>
                                    </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <ArrowLongRightIcon className='w-10 h-10' />                                    
                                    <h3 class="text-lg font-semibold text-[#f2f2f2]">
                                        <a href="https://www.reg.chula.ac.th/th/" target='_blank' class="hover:underline">สำนักงานการทะเบียน (Reg Chula)</a>
                                    </h3>
                                    </div>

                                </div>
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
  )
}

export default ArticleContent2