import React from 'react'
import './MS.css'
import Ads5 from "@/app/components/asset/5.jpg"
import Ads6 from "@/app/components/asset/6.jpg"
import Ads7 from "@/app/components/asset/7.jpg"
import Image from 'next/image'
import LookUp200823 from '../components/asset/LookUp-200823.jpg'

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
                            <div className='text-2xl font-medium px-5 pt-5 pb-2'>ข่าวสาร</div>
                            <div className='text-xl px-10'>ยังไม่มีข่าวสารประกาศในขณะนี้</div>
                            {/* <div class="max-w-3xl mx-5 mt-4 sm:mt-8 lg:mt-4">
                                <div class="-my-4 divide-y ">
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

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                    <p class="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">   
                                    </p>
                                    <h3 class="text-lg font-semibold text-gray-900 ">
                                        <a href="#" class="hover:underline">อ่านข่าวทั้งหมด</a>
                                    </h3>
                                    </div>                                                                
                                </div>
                            </div> */}
                        </div>
                        {/* <div className='m-5'>
                            <div className='text-2xl font-medium p-5'>กำลังมองหาอะไรอยู่</div>
                            <div class="max-w-3xl mx-5 mt-4 sm:mt-8 lg:mt-4">
                                <div class="-my-4 divide-y  ">
                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <ArrowLongRightIcon className='w-10 h-10' />                                    
                                    <h3 class="text-lg font-semibold text-gray-900 ">
                                        <a href="https://www.arts.chula.ac.th/" target='_blank' class="hover:underline">เอกสารหลักสูตร</a>
                                    </h3>
                                    
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <ArrowLongRightIcon className='w-10 h-10' />                                    
                                    <h3 class="text-lg font-semibold text-gray-900 ">
                                        <a href="https://sites.google.com/view/regartscu/" target='_blank' class="hover:underline">ค้นหาชื่ออาจารย์</a>
                                    </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <ArrowLongRightIcon className='w-10 h-10' />                                    
                                    <h3 class="text-lg font-semibold text-gray-900 ">
                                        <a href="https://www.reg.chula.ac.th/th/" target='_blank' class="hover:underline">เว็บไซต์สำนักงานการทะเบียน (Reg Chula)</a>
                                    </h3>
                                    </div>

                                </div>
                            </div>
                        </div> */}
                        <div className='m-5'>
                            <div>
                                        <div className='text-2xl font-medium px-5 pt-5 mt-32'>
                                            <a href='/reg' className='underline decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer'>
                                                ประชาสัมพันธ์งานทะเบียน</a>
                                        </div>
                                        <div class="mx-5 mt-4 mb-5 sm:mt-8 lg:mt-4">
                                            <div className='pb-5'>
                                                <div>ประกาศจากงานทะเบียนเกี่ยวกับภาควิชาและการลงทะเบียนเรียนต่าง ๆ</div>
                                            </div>
                                            <div className='grid grid-cols-1 gap-4'>
                                                <div className='-my-4 divide-y pt-2'>
                                                        <div class="flex flex-col gap-2 py-2 my-2 sm:gap-6 sm:flex-row sm:items-center">         
                                                        <h3 class="font-semibold text-[#1f1f1f] ">
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
                                                        <h3 class="font-semibold text-[#1f1f1f] ">
                                                            <div  class="">
                                                                <a className='text-xl bg-pink-500 '>วิชา 2202111 English I</a>
                                                                <div>
                                                                <p className='font-light text-md'>นิสิตที่ลงทะเบียนเรียนไม่ได้ ให้เข้าไปเรียนที่กลุ่ม 2 อ.ไมเคิล ในวันอังคารที่ 8 สิงหาคม 2566 ที่ห้อง 302 อาคารบรมราชกุมารี</p>
                                                                <p className='font-light text-md'>นิสิตชั้นปีที่ 2, 3 และ 4 ที่ลงทะเบียนเรียนไม่ได้ในรายวิชากลุ่มให้เข้าไปเรียนที่กลุ่ม 1 ของทุกรายวิชา</p>
                                                                </div>
                                                                
                                                            </div>
                                                        </h3>
                                                        </div>

                                                        {/* <div class="flex flex-col gap-2 py-2 my-2 sm:gap-6 sm:flex-row sm:items-center">         
                                                        <h3 class="font-semibold text-[#1f1f1f] ">
                                                            <div  class="">
                                                                <a className='text-xl bg-pink-500 '>นิสิตปี 2 - 4 ที่ยังไม่ได้ลงทะเบียน 2206103 RES COMP SKILLS หรือ 2206104 RES INFO RETR SKL, 2200220 THAI CIV, 2210260 INTRO LIT  </a>
                                                            <div>
                                                                <p className='font-light text-md'>ขอให้นิสิตลงทะเบียนเรียนรายวิชาดังกล่าวในภาคการศึกษาต้น ปีการศึกษา 2566 เท่านั้น เนื่องจากรายวิชาจะถูกปิดให้บริการ</p>
                                                                <p className='font-light text-md'>หากมีข้อสงสัย ติดต่อได้ที่ งานทะเบียน ห้อง 112 อาคารมหาวชิราวุธ หรือ Line @255kxvbw</p>
                                                                </div>
                                                                
                                                            </div>
                                                        </h3>
                                                        </div> */}
                                                        
                                                        <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                                            <p class="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">
                                                                
                                                            </p>
                                                            <h3 class="text-lg font-semibold text-gray-900 ">
                                                                <a href="/reg" class="hover:underline">อ่านประชาสัมพันธ์ทั้งหมด</a>
                                                            </h3>
                                                            </div>

                                                </div>

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
                                ประกาศ
                            </span>                    
                        </div>
                    </div>
                    <div className='grid overflow-y-auto h-screen col-span-11 border-[#333333] border-l-2 border-b-2'>
                    
                    <div className='flex flex-grow bg-slate-400'>
                        <Image src={LookUp200823}></Image>
                    </div>
                    <div className='flex flex-grow bg-[#1f1f1f] text-white'>
                        <div className='p-5 text-xl font-medium'>
                            <span className='leading-loose'>เมื่อศิษย์เคารพ “ติวเตอร์” กับ “ครู” ไม่เท่ากัน – บทความล่าสุดจากฝ่ายศิลปวัฒนธรรม สามารถอ่านได้แล้ววันนี้ <a href='/lookup/180823_1' className='underline decoration-pink-500 decoration-4 underline-offset-4 hover:decoration-blue-500 cursor-pointer'>ดูข้อมูลเพิ่มเติมที่นี่</a></span>
                        </div>                        
                    </div>

                    <div className='flex flex-grow bg-slate-400'>
                        <Image src={Ads6}></Image>
                    </div>
                    <div className='flex flex-grow bg-[#1f1f1f] text-white'>
                        <div className='p-5 text-xl font-medium'>
                            <span className='leading-loose'>เมื่อการเเพทย์เเละมนุษย์ศาสตร์มาเจอกัน จะเป็นอย่างไร?? มาร่วมหาคำตอบกันได้เเล้ววันนี้ <a href='https://www.instagram.com/p/CvmqSV1p-kt/' target='_blank' className='underline decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer'>มนุดโรงบาล</a> รายการ podcast ที่ทำร่วมกันระหว่าง AMSA Thailand คณะอักษรศาสตร์ และคณะแพทยศาสตร์ จุฬาฯ ที่จะพาทุกคนไปเจาะลึกกับมุมมองความเป็นมนุษย์ที่ซ่อนอยู่ในศาสตร์การเเพทย์ <a href='https://www.instagram.com/p/CvmqSV1p-kt/' target='_blank' className='underline decoration-pink-500 decoration-4 underline-offset-4 hover:decoration-blue-500 cursor-pointer'>ดูข้อมูลเพิ่มเติมที่นี่</a></span>
                        </div>                        
                    </div>

                    <div className='flex flex-grow bg-slate-400'>
                        <Image src={Ads5}></Image>
                    </div>

                    

                    <div className='flex flex-grow bg-[#1f1f1f] text-white'>
                        <div className='p-5 text-xl font-medium'>
                            <span className='leading-loose'><a href='https://www.instagram.com/p/CihnoVFpBfk/' target='_blank' className='underline decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer'>สวัสดิการเด็ด ๆ จาก ก.อศ.</a> นิสิตอักษรศาสตร์ทุกคนสามารถเข้ารับบริการเหล่านี้ที่ห้อง ก.อศ. ชั้น M1 อาคารมหาจักรีสิรินธรได้เลย <a href='https://www.instagram.com/p/CihnoVFpBfk/' target='_blank' className='underline decoration-pink-500 decoration-4 underline-offset-4 hover:decoration-blue-500 cursor-pointer'>ดูข้อมูลเพิ่มเติมได้ที่นี่</a></span>
                        </div>                        
                    </div>


                    <div className='flex flex-grow bg-slate-400'>
                        <Image src={Ads7}></Image>
                    </div>
                    <div className='flex flex-grow bg-[#1f1f1f] text-white sm:text-lg'>
                        <div className='p-5 text-xl font-medium'>
                            <span className='leading-loose'><a href='https://discord.com/invite/2QrmYg88a9' target='_blank' className='underline decoration-pink-500 decoration-4 underline-offset-4 hover:decoration-blue-500 cursor-pointer'>Discord ของชาวอักษรฯ</a> ต้อนรับนิสิตใหม่ Arts 91 แล้วตั้งแต่วันนี้เป็นต้นไป นิสิตชั้นปีอื่น ๆ ที่ยังไม่ได้เข้าก็สามารถเข้าได้น้า</span>
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