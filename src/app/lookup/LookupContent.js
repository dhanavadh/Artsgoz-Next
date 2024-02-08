import React from 'react'
import '../components/MS.css'
import { ArrowLongRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import IMG1 from '../components/asset/1.jpg'
import LookUp200823 from '../components/asset/LookUp-200823.jpg'


const RegHeadings = () => {
  return (
    <div>
        <div className='grid grid-cols-1 min-h-fit'>
                    {/* <div>
                        <img src='https://www.arts.chula.ac.th/goz/asset/banner/8dCOiId6lJaxhgVS7UjcEjGy4mpFI4Zg.jpg' className='ssaLU'></img>                        
                    </div> */}
            <div className='grid'>
                <div className='grid grid-cols-12'>
                    <div className='grid'>
                        <div className='flex bg-[#f2f2f2] text-[#1f1f1f] items-center justify-center '>
                            <span className='-rotate-90 text-lg whitespace-nowrap tracking-widest underline decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer'>
                                บทความ
                            </span>                    
                        </div>
                    </div>             
                    <div className='col-span-11 bg-[#f2f2f2] text-[#1f1f1f] border-[##ABABAB] border-l-2'>   
                        <div className='m-5'>
                            <div className='text-4xl font-medium px-5 pt-5 mt-12 underline decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer'>
                                <a href='/reg'>
                                บทความ</a>
                            </div>
                            <div class="mx-5 mt-4 sm:mt-8 lg:mt-4">
                                <div className='pb-5'>
                                    <div>บทความต่าง ๆ จาก ก.อศ. รวมอยู่ที่นี่แล้ว สามารถเลือกดูได้ตามความสนใจ</div>
                                </div>
                                <div className='grid grid-cols-1 gap-4 pb-3'>
                                    <div className="flex flex-col bg-white shadow-lg  md:flex-row">
                                    <Image
                                        className="h-96 w-full object-cover md:h-auto md:w-64"
                                        src={LookUp200823}
                                        alt="" />
                                    <div className="flex flex-col justify-start p-6">
                                        <a
                                        className="mb-5 text-xl font-medium text-neutral-800 underline decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer"
                                        href='/lookup/180823_1'>
                                        ความสัมพันธ์ “ครู-ศิษย์” :  เมื่อศิษย์เคารพ “ติวเตอร์” กับ “ครู” ไม่เท่ากัน
                                        </a>
                                        <p className="mb-5 text-base text-neutral-600 text-ellipsis overflow-hidden">
                                        ในช่วงเดือนเมษายนของทุกปี โรงเรียนกวดวิชาต่างพากันติดป้ายประกาศ ชื่อนักเรียนของตนที่สามารถทำคะแนนสอบเข้ามหาวิทยาลัยสูงติดระดับประเทศ บทสัมภาษณ์ต่าง ๆ ของนักเรียนมักยกย่องความสำเร็จดังกล่าวว่าเป็นผลจากโรงเรียนกวดวิชาหรือ “ติวเตอร์”  โดยมิได้ทันคิดว่า “ครู” ที่โรงเรียนนั้นก็มีส่วนในการสร้างพื้นฐานทางการศึกษาให้กับนักเรียนกลุ่มนั้นเช่นกัน 
                                        </p>
                                        <p className="text-xs font-bold text-neutral-500">
                                        บทความจาก ฝ่ายศิลปวัฒนธรรม
                                        </p>
                                        <p className="text-xs font-bold text-neutral-500">
                                        โพสต์วันที่ 20 สิงหาคม 2566
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                {/* <div className='grid grid-cols-1 gap-4 pb-3'>
                                    <div className="flex flex-col bg-white shadow-lg  md:flex-row">
                                    <Image
                                        className="h-96 w-full object-cover md:h-auto md:w-64"
                                        src={LookUp200823}
                                        alt="" />
                                    <div className="flex flex-col justify-start p-6">
                                        <a
                                        className="mb-5 text-xl font-medium text-neutral-800 underline decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer"
                                        href='/lookup/180823_1'>
                                        ความสัมพันธ์ “ครู-ศิษย์” :  เมื่อศิษย์เคารพ “ติวเตอร์” กับ “ครู” ไม่เท่ากัน
                                        </a>
                                        <p className="mb-5 text-base text-neutral-600 text-ellipsis overflow-hidden">
                                        ในช่วงเดือนเมษายนของทุกปี โรงเรียนกวดวิชาต่างพากันติดป้ายประกาศ ชื่อนักเรียนของตนที่สามารถทำคะแนนสอบเข้ามหาวิทยาลัยสูงติดระดับประเทศ บทสัมภาษณ์ต่าง ๆ ของนักเรียนมักยกย่องความสำเร็จดังกล่าวว่าเป็นผลจากโรงเรียนกวดวิชาหรือ “ติวเตอร์”  โดยมิได้ทันคิดว่า “ครู” ที่โรงเรียนนั้นก็มีส่วนในการสร้างพื้นฐานทางการศึกษาให้กับนักเรียนกลุ่มนั้นเช่นกัน 
                                        </p>
                                        <p className="text-xs font-bold text-neutral-500">
                                        บทความจาก ฝ่ายศิลปวัฒนธรรม
                                        </p>
                                        <p className="text-xs font-bold text-neutral-500">
                                        โพสต์วันที่ 20 สิงหาคม 2566
                                        </p>
                                    </div>
                                    </div>
                                </div> */}
                                
                                
                            </div>

                            {/* <div className='grid grid-cols-1 lg:grid-cols-2'>
                                <div className='col-span-1'>
                                    <div className='text-4xl font-medium px-5 pt-5 mt-32'>
                                        <a href='/reg'>
                                            ประชาสัมพันธ์</a>
                                    </div>
                                    <div class="mx-5 mt-4 mb-5 sm:mt-8 lg:mt-4">
                                        <div className='pb-5'>
                                            <div>ประกาศจากงานทะเบียนเกี่ยวกับภาควิชาและการลงทะเบียนเรียนต่าง ๆ</div>
                                        </div>
                                        <div className='grid grid-cols-1 gap-4'>
                                            <div className='-my-4 divide-y pt-2'>
                                                    <div class="flex flex-col gap-2 py-2 my-2 sm:gap-6 sm:flex-row sm:items-center">         
                                                    <h3 class="font-semibold text-[#f2f2f2] ">
                                                        <div  class="">
                                                            <a className='text-xl bg-pink-500 '>สำหรับนิสิตชั้นปีที่ 2-4 ประกาศจากวิชา 2206103 ทักษะการค้นคว้าและการใช้คอมพิวเตอร์</a>
                                                            <div>
                                                            <p className='font-light text-md'>ขอให้นิสิตในหลักสูตรเก่า (พ.ศ.2561) ที่ยังเก็บรายวิชา 2206103 ซึ่งเป็นวิชาพื้นฐานอักษรศาสตร์ไม่ครบ ให้ลงทะเบียนในภาคต้น 2566 ให้เรียบร้อย เนื่องจากวิชานี้จะเปิดเป็นภาคการศึกษาสุดท้าย</p>
                                                            <p className='font-light text-md'>นิสิตที่ประสบปัญหาในการลงทะเบียนหรือตารางชนให้ติดต่ออาจารย์ผู้สอน อ.นยา สุจฉายา ที่อีเมล naya.s@chula.ac.th ก่อนวันจันทร์ที่ 7 ส.ค. 2566</p>
                                                            </div>
                                                            
                                                        </div>
                                                    </h3>
                                                    </div>

                                                    <div class="flex flex-col gap-2 py-2 my-2 sm:gap-6 sm:flex-row sm:items-center">         
                                                    <h3 class="font-semibold text-[#f2f2f2] ">
                                                        <div  class="">
                                                            <a className='text-xl bg-pink-500 '>วิชา 2202111 English I</a>
                                                            <div>
                                                            <p className='font-light text-md'>นิสิตที่ลงทะเบียนเรียนไม่ได้ ให้เข้าไปเรียนที่กลุ่ม 2 อ.ไมเคิล ในวันอังคารที่ 8 สิงหาคม 2566 ที่ห้อง 302 อาคารบรมราชกุมารี</p>
                                                            <p className='font-light text-md'>นิสิตชั้นปีที่ 2, 3 และ 4 ที่ลงทะเบียนเรียนไม่ได้ในรายวิชากลุ่มให้เข้าไปเรียนที่กลุ่ม 1 ของทุกรายวิชา</p>
                                                            </div>
                                                            
                                                        </div>
                                                    </h3>
                                                    </div>

                                                    <div class="flex flex-col gap-2 py-2 my-2 sm:gap-6 sm:flex-row sm:items-center">         
                                                    <h3 class="font-semibold text-[#f2f2f2] ">
                                                        <div  class="">
                                                            <a className='text-xl bg-pink-500 '>นิสิตปี 2 - 4 ที่ยังไม่ได้ลงทะเบียน 2206103 RES COMP SKILLS หรือ 2206104 RES INFO RETR SKL, 2200220 THAI CIV, 2210260 INTRO LIT  </a>
                                                          <div>
                                                            <p className='font-light text-md'>ขอให้นิสิตลงทะเบียนเรียนรายวิชาดังกล่าวในภาคการศึกษาต้น ปีการศึกษา 2566 เท่านั้น เนื่องจากรายวิชาจะถูกปิดให้บริการ</p>
                                                            <p className='font-light text-md'>หากมีข้อสงสัย ติดต่อได้ที่ งานทะเบียน ห้อง 112 อาคารมหาวชิราวุธ หรือ Line @255kxvbw</p>
                                                            </div>
                                                            
                                                        </div>
                                                    </h3>
                                                    </div>

                                            </div>

                                        </div>
                                        
                                        
                                    </div>
                                </div>
                                <div className='col-span-1'>
                                <div className='text-4xl font-medium px-5 pt-5 mt-32'>วิธีเพิ่ม/ลด/เปลี่ยนตอนเรียน ระหว่างวันที่ 7 – 18 สิงหาคม 2566</div>
                                <div class="mx-5 mt-4 sm:mt-8 lg:mt-4">
                                    <div className='pb-5'>
                                        <div>สามารถดูข้อมูลตารางเวลาเพิ่ม-ลด รายวิชา ช่วงลงทะเบียนเรียนสาย ภาคการศึกษาต้น/ภาคการศึกษาที่หนึ่ง ปีการศึกษา 2566 จากสำนักงานการทะเบียนได้ <a href='https://www.reg.chula.ac.th/th/2023/07/14/%e0%b8%95%e0%b8%b2%e0%b8%a3%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%a7%e0%b8%a5%e0%b8%b2%e0%b9%80%e0%b8%9e%e0%b8%b4%e0%b9%88%e0%b8%a1-%e0%b8%a5%e0%b8%94-%e0%b8%a3%e0%b8%b2%e0%b8%a2%e0%b8%a7%e0%b8%b4%e0%b8%8a/' target='_blank' className='underline decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer'>ที่นี่</a></div>
                                    </div>
                                    <div className='-my-4 divide-y'>
                                        <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p class="w-32 text-lg font-normal text-[#f2f2f2] sm:text-right shrink-0">
                                            00:00 – 08:00 <br></br> 12:00 – 20:00
                                        </p>
                                        
                                        <h3 class="text-lg font-semibold text-[#f2f2f2] ">
                                            <div  class="">เพิ่มรายวิชา/เปลี่ยนตอนเรียน</div>
                                        </h3>
                                        </div>

                                        <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p class="w-32 text-lg font-normal text-[#f2f2f2] sm:text-right shrink-0">
                                            08:00 – 09:00 <br></br> 20:00 – 21:00
                                        </p>
                                        
                                        <h3 class="text-lg font-semibold text-[#f2f2f2] ">
                                            <div class="">ระบบปิดปรับปรุงข้อมูล</div>
                                        </h3>
                                        </div>

                                        <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p class="w-32 text-lg font-normal text-[#f2f2f2] sm:text-right shrink-0">
                                            09:00 <br></br> 21:00
                                        </p>
                                        
                                        <h3 class="text-lg font-semibold text-[#f2f2f2] ">
                                            <div  class="">ประกาศผลลงทะเบียนเรียน/เปลี่ยนตอนเรียน/ลดรายวิชา <br></br>CR54/CR74</div>
                                        </h3>
                                        </div>

                                        <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p class="w-32 text-lg font-normal text-[#f2f2f2] sm:text-right shrink-0">
                                            09:00 – 11:59 <br></br> 21:00 – 23:59
                                        </p>
                                        
                                        <h3 class="text-lg font-semibold text-[#f2f2f2] ">
                                            <div  class="">ลดรายวิชา</div>
                                        </h3>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div> */}
                        </div>                                        
                    </div>
                </div>            
            </div>            
        </div>
    </div>
  )
}

export default RegHeadings