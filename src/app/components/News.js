import React from 'react'
import './MS.css'

const News = () => {
  return (
    <div>
        <div className='grid grid-cols-1 lg:grid-cols-2 text-[#1f1f1f] bg-[#f2f2f2]'>
            <div className='grid'>
                <div className='grid grid-cols-12'>
                    <div className='grid'>
                        <div className='flex bg-[#f2f2f2] text-[#1f1f1f] items-center justify-center border-b-2 '>
                            <span className='-rotate-90 text-lg underline whitespace-nowrap tracking-widest decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer'>
                                ข่าว
                            </span>                    
                        </div>
                    </div>             
                    <div className='col-span-11 bg-[#f2f2f2] text-[#1f1f1f] border-l-2 border-b-2'>   
                        <div className='m-5'>
                            <div className='text-2xl font-medium p-5'>ข่าวสาร</div>
                            <div class="max-w-3xl mx-5 mt-4 sm:mt-8 lg:mt-4">
                                <div class="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                    <p class="w-32 text-lg font-normal text-gray-500 sm:text-right shrink-0">
                                        งานทะเบียน
                                    </p>
                                    <h3 class="text-lg font-semibold text-gray-900 ">
                                        <a href="#" class="hover:underline">วันเปิดเรียนภาคการศึกษาต้น ปีการศึกษา 2566</a>
                                    </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                    <p class="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">
                                        Artsgoz
                                    </p>
                                    <h3 class="text-lg font-semibold text-gray-900 ">
                                        <a href="#" class="hover:underline">ลงทะเบียนเรียนสาย เพิ่มรายวิชา/เปลี่ยนตอนเรียน</a>
                                    </h3>
                                    </div>
                                    
                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                    <p class="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">
                                        งานทะเบียน
                                    </p>
                                    <h3 class="text-lg font-semibold text-gray-900 ">
                                        <a href="#" class="hover:underline">ลงทะเบียนเรียนสาย เพิ่มรายวิชา/เปลี่ยนตอนเรียน</a>
                                    </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                    <p class="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">
                                        งานทะเบียน
                                    </p>
                                    <h3 class="text-lg font-semibold text-gray-900 ">
                                        <a href="#" class="hover:underline">ลงทะเบียนเรียนสาย เพิ่มรายวิชา/เปลี่ยนตอนเรียน</a>
                                    </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                    <p class="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">
                                        
                                    </p>
                                    <h3 class="text-lg font-semibold text-gray-900 ">
                                        <a href="#" class="hover:underline">อ่านข่าวทั้งหมด</a>
                                    </h3>
                                    </div>                                                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
            <div className='grid'>
                <div className='grid grid-cols-12'>
                    <div className='grid'>
                        <div className='flex bg-[#1f1f1f] text-[#f2f2f2] items-center justify-center'>
                            <span className='-rotate-90 text-lg underline whitespace-nowrap tracking-widest decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer'>
                                Portal
                            </span>                    
                        </div>
                    </div>
                    <div className='flex col-span-11'>                        
                        <div className='grid grid-cols-2 grid-rows-2 '>
                            <div className='grid'>
                                Test
                            </div>
                            <div className='grid'>
                                Test
                            </div>
                            <div className='grid'>
                                Test
                            </div>
                            <div className='grid'>
                                Test
                            </div>
                        </div>                 
                    </div>
                    
                </div>            
            </div>
        </div>
    </div>
  )
}

export default News