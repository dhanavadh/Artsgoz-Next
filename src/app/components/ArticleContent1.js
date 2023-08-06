'use client'
import React, {useState, Fragment} from 'react'
import './MS.css'
import { Dialog, Transition, Popover } from '@headlessui/react'

const ArticleContent1 = () => {
    let [isOpen, setIsOpen] = useState(false)
  
    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
    let [isOpen1, setIsOpen1] = useState(false)
  
    function closeModal1() {
      setIsOpen1(false)
    }
  
    function openModal1() {
      setIsOpen1(true)
    }

    let [isOpen2, setIsOpen2] = useState(false)
  
    function closeModal2() {
      setIsOpen2(false)
    }
  
    function openModal2() {
      setIsOpen2(true)
    }
  return (
    <div>
        <div className='grid grid-cols-1 lg:grid-cols-2 text-[#1f1f1f]'>
            <div className='grid'>
                <div className='grid grid-cols-12'>
                    <div className='grid'>
                        <div className='flex bg-[#f2f2f2] text-[#1f1f1f] items-center justify-center border-b-2'>
                            <span className='-rotate-90 text-lg underline whitespace-nowrap tracking-widest decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer'>
                                ปฏิทิน
                            </span>                    
                        </div>
                    </div>             
                    <div className='col-span-11 bg-[#f2f2f2] text-[#1f1f1f] border-l-2 border-b-2'>   
                        <div className='m-5'>
                            <div className='text-2xl font-medium p-5'>ปฏิทินรวม</div>
                            <div class="max-w-3xl mx-5 mt-4 sm:mt-8 lg:mt-4">
                                <div class="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                    <p class="w-32 text-lg font-normal text-gray-500 sm:text-right shrink-0">
                                        7 สิงหาคม 2566
                                    </p>
                                    <h3 class="text-lg font-semibold text-gray-900 ">
                                        <a href="#" class="hover:underline">วันเปิดเรียนภาคการศึกษาต้น ปีการศึกษา 2566</a>
                                    </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                    <p class="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">
                                        7 – 18 สิงหาคม 2566
                                    </p>
                                    <h3 class="text-lg font-semibold text-gray-900 ">
                                        <a href="#" class="hover:underline">ลงทะเบียนเรียนสาย เพิ่มรายวิชา/เปลี่ยนตอนเรียน</a>
                                    </h3>
                                    </div>
                                    
                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                    <p class="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">
                                        7 – 18 สิงหาคม 2566
                                    </p>
                                    <h3 class="text-lg font-semibold text-gray-900 ">
                                        <a href="#" class="hover:underline">ลงทะเบียนเรียนสาย เพิ่มรายวิชา/เปลี่ยนตอนเรียน</a>
                                    </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                    <p class="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">
                                        7 – 18 สิงหาคม 2566
                                    </p>
                                    <h3 class="text-lg font-semibold text-gray-900 ">
                                        <a href="#" class="hover:underline">ลงทะเบียนเรียนสาย เพิ่มรายวิชา/เปลี่ยนตอนเรียน</a>
                                    </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                    <p class="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">
                                        7 – 18 สิงหาคม 2566
                                    </p>
                                    <h3 class="text-lg font-semibold text-gray-900 ">
                                        <a href="#" class="hover:underline">ลงทะเบียนเรียนสาย เพิ่มรายวิชา/เปลี่ยนตอนเรียน</a>
                                    </h3>
                                    </div>                                                                
                                </div>
                            </div>
                        </div>
                        <div className='m-5'>
                            <div className='text-2xl font-medium p-5'>ปฏิทินอื่น ๆ</div>
                            <div class="max-w-3xl mx-5 mt-4 sm:mt-8 lg:mt-4">
                                <div class="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                    <p class="w-32 text-lg font-normal text-gray-500 sm:text-right shrink-0">
                                        กิจกรรมที่จัดโดย ก.อศ.​
                                    </p>
                                    <h3 class="text-lg font-semibold text-gray-900 ">
                                        <a class="hover:underline cursor-pointer" onClick={openModal}>คลิกที่นี่เพื่อดูข้อมูลเพิ่มเติม</a>
                                    </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                    <p class="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">
                                        ตารางงานประชาสัมพันธ์
                                    </p>
                                    <h3 class="text-lg font-semibold text-gray-900 ">
                                        <a class="hover:underline cursor-pointer" onClick={openModal1}>คลิกที่นี่เพื่อดูข้อมูลเพิ่มเติม</a>
                                    </h3>
                                    </div>
                                    
                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                    <p class="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">
                                        ปฏิทินวิชาการ
                                    </p>
                                    <h3 class="text-lg font-semibold text-gray-900 ">
                                        <a class="hover:underline cursor-pointer" onClick={openModal2}>คลิกที่นี่เพื่อดูข้อมูลเพิ่มเติม</a>
                                    </h3>
                                    </div>                                                                
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>            
            </div>
            <div className='grid grid-cols-12'> 
                <div className='grid'>
                    <div className='flex bg-[#1f1f1f] text-[#f2f2f2] items-center justify-center border-[#333333] border-b-2'>
                        <span className='-rotate-90 text-lg underline whitespace-nowrap tracking-widest decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer'>
                            กิจกรรม
                        </span>                    
                    </div>
                </div>             
                <div className='grid overflow-y-auto h-screen col-span-11 border-[#333333] border-l-2 border-b-2'>
                    <div className='flex flex-grow bg-slate-400'>
                        <img src='https://www.arts.chula.ac.th/goz/wordpress/wp-content/uploads/2022/07/1-1024x1024.png'>
                        </img>
                    </div>
                    <div className='flex flex-grow bg-[#1f1f1f] text-white'>
                        <div className='p-5 text-xl font-medium'>
                            <span className='leading-loose'><a className='underline decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer'>☁️ รักอาจารย์เท่าไหน? “รักอาจารย์เท่าฟ้า” ☁️</a> วันไหว้ครูประจำปี 2566 ของคณะอักษรศาสตร์ใกล้เข้ามาแล้ว<a className='underline decoration-pink-500 decoration-4 underline-offset-4 hover:decoration-blue-500 cursor-pointer'>ศิลป์วัฒน์</a> จะพาไปค้นหาคำตอบเกี่ยวกับพิธีไหว้ครู <a className='underline decoration-pink-500 decoration-4 underline-offset-4 hover:decoration-blue-500 cursor-pointer'>อ่านได้ที่นี่</a></span>
                        </div>                        
                    </div>
                    <div className='flex flex-grow bg-slate-400'>
                        <img src='https://www.arts.chula.ac.th/goz/wordpress/wp-content/uploads/2022/07/1-1024x1024.png'>
                        </img>
                    </div>
                    <div className='flex flex-grow bg-[#1f1f1f] text-white sm:text-lg'>
                        <div className='p-5 text-xl font-medium'>
                            <span className='leading-loose'><a className='underline decoration-pink-500 decoration-4 underline-offset-4'>ไหว้ครู-ไหว้อะไร ?</a> : เมื่อพิธีไหว้ครู ไม่ได้ไหว้ครู (มนุษย์) บทความจาก<a className='underline decoration-pink-500 decoration-4 underline-offset-4 hover:decoration-blue-500'>ศิลป์วัฒน์</a> จะพาไปค้นหาคำตอบเกี่ยวกับพิธีไหว้ครู <a className='underline decoration-pink-500 decoration-4 underline-offset-4 hover:decoration-blue-500'>อ่านได้ที่นี่</a></span>
                        </div>                        
                    </div>                    
                </div>
                
            </div>
        </div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                                {/* gml */}
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
                  <Dialog.Panel className="w-9/12 transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                    //   className="text-lg font-medium leading-6 text-gray-900"
                    >
                        <div class="flex justify-between ...">
                            <div class="order-last">
                                <button
                                        className="inline-flex text-[#1F1F1F] *text-sm font-medium underline-thickness-1 underline-offset-4 hover:underline focus:outline-none focus:ring-21 focus:ring-offset-1 focus:ring-[#1f1f1f] "
                                        onClick={closeModal}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                </button>
                            </div>                            
                            <div className='text-xl font-medium'>
                                กิจกรรมที่จัดโดย ก.อศ.
                            </div>
                        </div>
                    </Dialog.Title>
                <div className='mx-5 my-5 justify-center'>
                  <span class="block text-md font-medium mb-2 text-[#1F1F1F]">หมายเหตุ: คลิกในแต่ละงานเพื่อดูรายละเอียด/วันสิ้นสุดกิจกรรม</span>
                  {/* <iframe class="airtable-embed" src="https://airtable.com/embed/appL41ESosi23CmVb/shrqOQnHoyQnHHb2J?backgroundColor=red" width="100%" height="533"></iframe> */}
                    <div className='flex xl:hidden'>
                        <iframe class="airtable-embed" src="https://airtable.com/embed/appL41ESosi23CmVb/shr8GmetBSh7OEJM7?backgroundColor=red&layout=card" width="100%" height="533"></iframe>
                    </div>
                    <div className='hidden xl:flex'>
                        <iframe className="airtable-embed " src="https://airtable.com/embed/appL41ESosi23CmVb/shrqOQnHoyQnHHb2J?backgroundColor=red" height="533" width="100%"></iframe>
                    </div>
                  
                </div>                                            
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>

        <Transition appear show={isOpen1} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal1}>
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
                                {/* gml */}
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
                  <Dialog.Panel className="w-9/12 transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                    //   className="text-lg font-medium leading-6 text-gray-900"
                    >
                        <div class="flex justify-between ...">
                            <div class="order-last">
                                <button
                                        className="inline-flex text-[#1F1F1F] *text-sm font-medium underline-thickness-1 underline-offset-4 hover:underline focus:outline-none focus:ring-21 focus:ring-offset-1 focus:ring-[#1f1f1f] "
                                        onClick={closeModal1}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                </button>
                            </div>
                            {/* <div>
                            <img src='https://www.arts.chula.ac.th/goz/asset/icons/ab-nav.png' className='h-10 items-center justify-center'></img>
                            </div> */}
                            <div className='text-xl font-medium'>
                                ตารางงานประชาสัมพันธ์
                            </div>
                        </div>
                    </Dialog.Title>
                <div className='mx-5 my-5 justify-center'>
                  {/* <span class="block text-lg font-medium text-[#1F1F1F]">รหัสนิสิต</span> */}
                  {/* <iframe class="airtable-embed" src="https://airtable.com/embed/appL41ESosi23CmVb/shrbDR35qe9WQfRP5?backgroundColor=red" width="100%" height="533"></iframe> */}
                  <div className='flex xl:hidden'>
                        <iframe class="airtable-embed" src="https://airtable.com/embed/appL41ESosi23CmVb/shr723vi1scai4O97?backgroundColor=red&layout=card" width="100%" height="533"></iframe>
                    </div>
                    <div className='hidden xl:flex'>
                        <iframe className="airtable-embed " src="https://airtable.com/embed/appL41ESosi23CmVb/shrbDR35qe9WQfRP5?backgroundColor=red" height="533" width="100%"></iframe>
                    </div>
                  
                </div>                
                <div className='m-5 flex items-center justify-center'>
                  <a className='flex px-4 py-2 mx-2 text-sm font-medium border-2 btn-active underline-thickness-1 hover:underline hover:bg-[#1F1F1F] hover:text-[#F2F2F2]
                    cursor-pointer transition-colors duration-300'>เข้าสู่ระบบ</a>
                    <a className='flex px-4 py-2 mx-2 text-sm font-medium border-2 btn-active underline-thickness-1 hover:underline hover:bg-[#1F1F1F] hover:text-[#F2F2F2]
                    cursor-pointer transition-colors duration-300'>ขอลงงานประชาสัมพันธ์
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 ml-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                        </a>
                </div>
                {/* gml */}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>


        <Transition appear show={isOpen2} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal2}>
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
                                {/* gml */}
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
                  <Dialog.Panel className="w-9/12 transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                    //   className="text-lg font-medium leading-6 text-gray-900"
                    >
                        <div class="flex justify-between ...">
                            <div class="order-last">
                                <button
                                        className="inline-flex text-[#1F1F1F] *text-sm font-medium underline-thickness-1 underline-offset-4 hover:underline focus:outline-none focus:ring-21 focus:ring-offset-1 focus:ring-[#1f1f1f] "
                                        onClick={closeModal2}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                </button>
                            </div>
                            {/* <div>
                            <img src='https://www.arts.chula.ac.th/goz/asset/icons/ab-nav.png' className='h-10 items-center justify-center'></img>
                            </div> */}
                            <div className='text-xl font-medium'>
                                ปฏิทินวิชาการ
                            </div>
                        </div>
                    </Dialog.Title>
                <div className='mx-5 my-5 justify-center'>
                    <span class="block text-md font-medium mb-2 text-[#1F1F1F]">หมายเหตุ: คลิกในแต่ละงานเพื่อดูรายละเอียด/วันสิ้นสุดกิจกรรม</span>
                  {/* <iframe class="airtable-embed" src="https://airtable.com/embed/appL41ESosi23CmVb/shrbDR35qe9WQfRP5?backgroundColor=red" width="100%" height="533"></iframe> */}
                  <div className='flex xl:hidden'>
                        <iframe class="airtable-embed" src="https://airtable.com/embed/appchXYwm4EExRae7/shrfPR4hBN7AQUpRY?backgroundColor=purple&layout=card" width="100%" height="533"></iframe>
                    </div>
                    <div className='hidden xl:flex'>
                        <iframe className="airtable-embed " src="https://airtable.com/embed/appchXYwm4EExRae7/shrdu1BvBC7quvcMr?backgroundColor=purple" height="533" width="100%"></iframe>
                    </div>
                  
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

export default ArticleContent1