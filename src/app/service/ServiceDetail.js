'use client'
import { React, Fragment, useState, useEffect} from 'react';
import { Dialog, Transition, Popover } from '@headlessui/react'
import '../components/MS.css'
import { ArrowLongRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import IMG1 from '../components/asset/1.jpg'
import LookUp200823 from '../components/asset/LookUp-200823.jpg'
import Link from 'next/link';
import RainBanner from '../components/asset/379976066_728358882662283_6502025623869856416_n.jpg'
import TamBanner from '../components/asset/380330773_728358852662286_5454192949241592895_n.jpg'
import KusBanner from '../components/asset/380485964_728358889328949_4125213418895721902_n.jpg'
import GozLocation from '../components/asset/GOZLocation.jpg'

const BannerIn = [
    { name: 'บริการยืมร่ม', description: `ในวันที่ฝนตกแต่ลืมร่ม ให้ ก.อศ. ได้ดูแลคุณด้วย "บริการยืมร่ม" รายละเอียดเพิ่มเติมสามารถอ่านได้ผ่านฟอร์มต่าง ๆ ใน https://linktr.ee/artsgoz 
    บนหน้าไบโอแถบ "รวมฟอร์มสำหรับเพื่อนนิสิต" ได้เลย`, href: 'https://linktr.ee/artsgoz', target: '_blank', image: 'https://www.arts.chula.ac.th/goz/asset/banner/service/379976066_728358882662283_6502025623869856416_n.jpg' },    
    { name: 'บริการผ้าอนามัยฟรี', description: `ในวันนั้นของเดือน ให้ ก.อศ. ได้ดูแลคุณด้วย "บริการผ้าอนามัยฟรี"
    รายละเอียดเพิ่มเติมสามารถอ่านได้ผ่านฟอร์มต่าง ๆ ใน https://linktr.ee/artsgoz บนหน้าไบโอแถบ "รวมฟอร์มสำหรับเพื่อนนิสิต" ได้เลย`, href: 'https://linktr.ee/artsgoz', target: '_blank', image: 'https://www.arts.chula.ac.th/goz/asset/banner/service/380330773_728358852662286_5454192949241592895_n.jpg' },    
    { name: 'บริการยาสามัญฟรีและซื้อชุดตรวจโควิด', description: `ในวันที่เจ็บป่วย ให้ ก.อศ. ได้ดูแลคุณด้วย "บริการยาสามัญฟรีและซื้อชุดตรวจโควิด"
    รายละเอียดเพิ่มเติมสามารถอ่านได้ผ่านฟอร์มต่าง ๆ ใน https://linktr.ee/artsgoz บนหน้าไบโอแถบ "รวมฟอร์มสำหรับเพื่อนนิสิต" ได้เลย`, href: 'https://linktr.ee/artsgoz', target: '_blank', image: 'https://www.arts.chula.ac.th/goz/asset/banner/service/380485964_728358889328949_4125213418895721902_n.jpg' },    
]
const BannerIt = [
    { name: 'Adobe Creative Cloud', notice:'', description: `โปรแกรม Adobe เป็นโปรแกรมสำหรับสร้างสื่อมัลติมีเดียต่าง ๆ ประกอบด้วยชุดเครื่องมือที่เรียกว่า Adobe Creative Cloud
    ปรับเปลี่ยนวิธีการใช้งานใหม่ เริ่มใช้งานตั้งแต่วันที่ 28 เมษายน 2566 นิสิตสามารถดูรายละเอียดเพิ่มเติมได้ที่เว็บไซต์ https://www.it.chula.ac.th/`, href: 'https://creativecloud.adobe.com/apps/all', target: '_blank', image: '' },    
    { name: 'CUNET Account Management', notice:'* ต้องใช้งานผ่าน VPN', description: `บริการเปลี่ยนรหัสผ่าน CUNET ด้วยตนเอง/รีเซ็ตรหัสผ่านด้วยตนเอง/ตั้งคำถาม-คำตอบเพื่อใช้ในการรีเซ็ตรหัสผ่าน นิสิตสามารถดูรายละเอียดเพิ่มเติมได้ที่เว็บไซต์ https://www.it.chula.ac.th/`, href: 'https://userportal.it.chula.ac.th/', target: '_blank', image: '' },
    { name: 'Chula Zoom', notice:'', description: `โปรแกรม Zoom เป็นโปรแกรมสำหรับการเรียนการสอน การประชุม ออนไลน์ นิสิตสามารถดูรายละเอียดเพิ่มเติมได้ที่เว็บไซต์ https://www.it.chula.ac.th/`, href: 'https://chula.zoom.us/', target: '_blank', image: '' },
    { name: 'Cisco Anyconnect', notice:'', description: `บริการ VPN เป็นบริการที่ทำให้ใช้บริการออนไลน์ต่าง ๆ จากภายนอกมหาวิทยาลัยได้ นิสิตสามารถดูรายละเอียดเพิ่มเติมได้ที่เว็บไซต์ https://www.it.chula.ac.th/`, href: 'https://www.it.chula.ac.th/service/cunet-vpn-service/', target: '_blank', image: '' },
    { name: 'Google Workspace', notice:'', description: `Google Workspace for Education สำหรับนิสิต และบุคลากรจุฬาฯ เป็นบริการทางเลือกในการทำงาน โดยมีเครื่องมือสำหรับทำงาน เช่น ระบบเอกสาร ระบบประชุมทางไกล ระบบเก็บข้อมูล และอื่น ๆ อีกมากมาย นิสิตสามารถดูรายละเอียดเพิ่มเติมได้ที่เว็บไซต์ https://www.it.chula.ac.th/`, href: 'https://apps.google.com/user/hub', target: '_blank', image: '' },
    { name: 'Office 365', notice:'', description: `Microsoft 365 เป็นบริการในการทำงาน โดยมีเครื่องมือสำหรับทำงาน เช่น ระบบเอกสาร ระบบการทำงานร่วมกัน ระบบประชุมทางไกล และบริการอื่น ๆ บน Cloud ของไมโครซอฟต์ นิสิตสามารถดูรายละเอียดเพิ่มเติมได้ที่เว็บไซต์ https://www.it.chula.ac.th/`, href: 'https://login.microsoftonline.com/?whr=chula.ac.th', target: '_blank', image: '' },
    { name: 'ระบบยืมใช้งานซอฟต์แวร์', notice:'', description: `ยืมใช้งานซอฟต์แวร์ต่าง ๆ เช่น Zoom นิสิตสามารถดูรายละเอียดเพิ่มเติมได้ที่เว็บไซต์ https://www.it.chula.ac.th/`, href: 'https://licenseportal.it.chula.ac.th/', target: '_blank', image: '' },        
    
]
const BannerUniv = [
    { name: 'MindSpace โดย Chula Student Wellness', notice:'', description: `พื้นที่ของการดูแลจิตใจที่ Chula Student Wellness ได้รวบรวมบริการและความรู้ทางจิตวิทยาให้นิสิตและบุคคลทั่วไปที่สนใจ สามารถดูแลใจตนเองในเบื้องต้น รวมทั้งทำนัดหมายปรึกษานักจิตวิทยาหรือจิตแพทย์ ให้อยู่บนรูปแบบออนไลน์แพลตฟอร์ม`, href: 'https://chula.wellness.in.th', target: '_blank', image: '' },    
    { name: 'ศูนย์บริการสุขภาพแห่งจุฬาลงกรณ์มหาวิทยาลัย', notice:'', description: `ศูนย์บริการสุขภาพแห่งจุฬาฯ เปิดให้บริการทุกวันจันทร์ – วันศุกร์ ตั้งแต่ 8.00 – 15.00 น.`, href: 'http://www.cuhc.chula.ac.th/th/', target: '_blank', image: '' },
    { name: 'ศูนย์กีฬาแห่งจุฬาลงกรณ์มหาวิทยาลัย', notice:'', description: `ศูนย์กีฬาแห่งจุฬาลงกรณ์มหาวิทยาลัย จองสนามกีฬาออนไลน์และเช็คอินได้ง่ายๆในที่เดียว`, href: 'https://book.cusc.chula.ac.th', target: '_blank', image: '' },
    { name: 'ศูนย์นวัตกรรมการเรียนรู้', notice:'', description: `ศูนย์นวัตกรรมการเรียนรู้ เป็นหน่วยงานภายใต้สำนักงานมหาวิทยาลัย ก่อตั้งขึ้นเมื่อปี พ.ศ. 2553 เพื่อสนับสนุนนโยบายการปฏิรูปการเรียนรู้ของอุดมศึกษาไยในศตวรรษที่ 21`, href: 'https://lic.chula.ac.th', target: '_blank', image: '' },
    { name: 'CU POP BUS', notice:'', description: `สามารถดูตารางเดินรถแต่ละสายได้ที่นี่`, href: 'https://www.facebook.com/CUPOPBUS', target: '_blank', image: '' },
]
const BannerLearning = [
    { name: 'myCourseVille', notice:'', description: `ระบบการจัดการการเรียนการสอน (Learning Management System: LMS) ที่เชื่อมต่อกับสังคมออนไลน์`, href: 'http://mycourseville.com', target: '_blank', image: '' },    
    { name: 'Echo360', notice:'', description: `Echo360 ALP เป็นเทคโนโลยีสมัยใหม่ ใช้ในการบันทึกการบรรยายของอาจารย์และนำไปเผยแพร่ผ่านเครือข่ายต่างๆ เพื่อให้นิสิต สามารถศึกษาด้วยตนเองได้หลายช่องทาง เช่น ระบบ Blackboard, myCourseville, Google Classroom และเว็บไซต์อื่นๆ`, href: 'http://echo360.net.au', target: '_blank', image: '' },    
    { name: 'CHULA MOOC', notice:'', description: `การเรียนการสอนออนไลน์ในระบบเปิดสำหรับมหาชน (Massive Open Online Course : MOOC) ภายใต้โครงการ CHULA MOOC โดยมีศูนย์นวัตกรรมการเรียนรู้ เป็นผู้อยู่เบื้องหลังในการผลิตสื่อและจัดการเรียนการสอนออนไลน์ครอบคลุมเนื้อหาวิชา 5 หมวด`, href: 'https://mooc.chula.ac.th', target: '_blank', image: '' },        
    { name: 'Chula Reference Databases', notice:'', description: `บริการฐานข้อมูลทางวิชาการ นิสิตสามารถเข้าใช้งานได้เพียงใช้ CUNET Account ในการเข้าใช้งาน`, href: 'https://www.car.chula.ac.th/curef.php', target: '_blank', image: '' },    
    { name: 'CU CAS', notice:'* ปัจจุบันสามารถประเมินได้ผ่านทาง myCourseVille', description: `ระบบประเมินการสอน`, href: 'https://cas.chula.ac.th/cas/', target: '_blank', image: '' },        
    { name: 'Endnote', notice:'', description: `โปรแกรมสำเร็จรูปที่ใช้ในการจัดการกับรายการทางบรรณานุกรม หรือรายการอ้างอิงที่ผู้ใช้ได้ไปสืบค้นมาจากแหล่งข้อมูลต่าง ๆ ซึ่งสำนักงานวิทยทรัพยากรจัดหามาเพื่อให้ประชาคมจุฬาได้ใช้งานในเครื่องคอมพิวเตอร์ส่วนบุคคลที่มีระบบปฎิบัติการ Windows หรือ Mac`, href: 'https://www.car.chula.ac.th/endnote.php', target: '_blank', image: '' },    
    { name: 'Mendeley MIE Version', notice:'', description: `สำนักงานวิทยทรัพยากร จุฬาฯ ได้รับสิทธิ์การใช้งาน Mendeley Institutional Edition ซึ่งเป็นเวอร์ชั่น Premium upgrades สามารถใช้งานได้เพิ่มขึ้นจาก Mendeley เวอร์ชันปกติที่ไม่มีค่าใช้จ่าย`, href: 'https://www.car.chula.ac.th/mendeley.php', target: '_blank', image: '' },    
    { name: 'Turnitin', notice:'', description: `For instructor who need to use Turnitin, please fill out the request form to https://forms.gle/kvJ2PW1Mx5n9xYue7. After admin add your email to system, the email from Turnitin will be sent to you in your Chula mailbox.`, href: 'https://www.car.chula.ac.th/turnitin.php', target: '_blank', image: '' },    
    { name: 'อักขราวิสุทธิ์', notice:'', description: `ระบบตรวจสอบการลอกเลียนวรรณกรรมทางวิชาการ โดย จุฬาลงกรณ์มหาวิทยาลัย`, href: 'https://app.akarawisut.com', target: '_blank', image: '' },    
    { name: 'SciVal', notice:'', description: `ฐานข้อมูลที่ผู้ใช้สามารถเข้าถึงข้อมูลศักยภาพการวิจัย ทั้งในระดับโลก ระดับประเทศ ระดับมหาวิทยาลัย หรือระดับนักวิจัย สามารถดูข้อมูลการเปรียบเทียบศักยภาพการวิจัย รวมถึงข้อมูลความร่วมมือด้านการวิจัย`, href: 'https://www.car.chula.ac.th/scival.php', target: '_blank', image: '' },    
    
]
const BannerPartner = [
    { name: 'CU Get Reg', notice:'', description: `สามารถค้นหาและเลือกรายวิชาได้อย่างสะดวก และจัดตารางเรียนตามข้อจำกัดของหลักสูตรของแต่ละคนได้ง่ายขึ้น โดย ชมรม Thinc. จุฬาลงกรณ์มหาวิทยาลัย`, href: 'https://cugetreg.com/', target: '_blank', image: 'https://cugetreg.com/_next/static/media/cgrLogoDark.1e8c4bde.svg' },    
    { name: 'Gen อย่าได้ Ed', notice:'', description: `ศูนย์กลางการแลกเปลี่ยนข้อมูลและคำแนะนำรายวิชา Gened`, href: 'https://www.facebook.com/genedahs', target: '_blank', image: '' },        
]
const unb = `underline-thickness-1 underline-offset-4 hover:underline cursor-pointer transition-colors duration-300`
const hds = `text-xl font-medium pt-5`
const MapList = [
    { name: 'ค้นหาชื่ออาจารย์', description: 'ดูชื่อย่ออาจารย์ในคณะฯ ได้ที่นี่', href: '/services/staffquery', target: '',},
]
const ServiceDetail = () => {
    let [isError, setIsError] = useState(false)
  
    function closeError() {
        setIsError(false)
    }
  
    function openError() {
        setIsError(true)
    }
    let [isShow, setIsShow] = useState(false)
  
    function closeShow() {
        setIsShow(false)
    }
  
    function openShow() {
        setIsShow(true)
    }
  return (
    <div>
        <div className='grid bg-[#f2f2f2]'>
            <div className='grid grid-cols-12 mt-10'>
                <div className='grid col-span-1 lg:col-span-2'>
                </div>
                <div className='grid col-span-10 lg:col-span-8 px-1'>
                    <div className='grid text-4xl font-medium leading-relaxed text-[#1f1f1f] pt-5 pb-2'>
                        บริการทั้งหมด
                    </div>
                    {/* <div className='flex text-xl leading-relaxed text-[#1f1f1f] pb-1'>
                        <p className='font-medium pr-1'>วันที่</p>
                        <p className='pr-3'>20 สิงหาคม 2566</p>
                    </div>                    */}
                    <div className='flex text-xl leading-relaxed text-[#1f1f1f] pb-5'>
                        <p className='font-medium'>นิสิตสามารถดูบริการทั้งหมดที่สามารถใช้งานได้ที่นี่ ทั้งนี้ ข้อมูลอาจมีการเปลี่ยนแปลง โปรดตรวจสอบข้อมูลจากผู้ให้บริการอีกครั้ง</p>
                    </div>                   
                    <div className='divide-y-2'>
                        <div>
                        </div>
                        <div className='pb-5'>
                        </div>
                    </div>
                    <div className='grid'>
                        <div className='text-xl pb-3 font-medium'>บริการจากคณะอักษรศาสตร์</div>
                        <div className=' pb-3 pl-3'>นิสิตอักษรศาสตร์สามารถเข้ารับบริการเหล่านี้ที่ห้อง ก.อศ. ชั้น M1 อาคารมหาจักรีสิรินธร&nbsp;
                          <a className='font-medium text-neutral-800 underline decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer' onClick={openShow}>ห้องก.อศ. อยู่ตรงไหน?</a>
                        </div>
                                <div className='grid grid-cols-1 gap-4 pb-3 pl-3'>
                                  {BannerIn.map((item) => (
                                    <div className="flex flex-col bg-white shadow-lg  md:flex-row">
                                    <img
                                        className="h-96 w-full object-cover md:h-auto md:w-64"
                                        src={item.image}
                                        alt="" />
                                    <div className="flex flex-col justify-start p-6">
                                        <a
                                        className="mb-5 text-xl font-medium text-neutral-800 underline decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer"
                                        href={item.href} target={item.target}>
                                        {item.name}
                                        </a>
                                        <p className="mb-5 text-base text-neutral-600 text-ellipsis overflow-hidden">
                                        {item.description}
                                        </p>
                                    </div>
                                    </div>
                                  ))}
                                </div>
                        </div>                                            
                        <div className='pb-5'>
                    </div>
                    <div className='divide-y-2'>
                        <div>
                        </div>
                        <div className='pb-5'>
                        </div>
                    </div>
                    <div className='grid'>
                        <div className='text-xl pb-3 font-medium'>บริการจาก IT Chula</div>
                        <div className=' pb-3 pl-3'>สามารถดูบริการสำหรับนิสิตโดยมหาวิทยาลัยได้ที่นี่</div>
                                <div className='grid grid-cols-2 gap-4 pb-3 pl-3'>
                                  {BannerIt.map((item) => (
                                    <div className="flex flex-col bg-white shadow-lg  md:flex-row">
                                    {/* <img
                                        className="h-96 w-full object-cover md:h-auto md:w-64"
                                        src={item.image}
                                        alt="" /> */}
                                    <div className="flex flex-col justify-start p-6">
                                        <a
                                        className="mb-2 text-xl font-medium text-neutral-800 underline decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer"
                                        href={item.href} target={item.target}>
                                        {item.name}
                                        </a>
                                        <a className='mb-3 text-md font-medium text-pink-500'>{item.notice}</a>
                                        <p className="mb-5 text-base text-neutral-600 text-ellipsis overflow-hidden">
                                        {item.description}
                                        </p>
                                    </div>
                                    </div>
                                  ))}
                                </div>
                        </div>                                            
                        <div className='pb-5'>
                    </div>
                    <div className='divide-y-2'>
                        <div>
                        </div>
                        <div className='pb-5'>
                        </div>
                    </div>
                    <div className='grid'>
                        <div className='text-xl pb-3 font-medium'>บริการจากมหาวิทยาลัย</div>
                        <div className=' pb-3 pl-3'>สามารถดูบริการด้าน IT สำหรับนิสิตได้ที่นี่</div>
                                <div className='grid grid-cols-2 gap-4 pb-3 pl-3'>
                                  {BannerUniv.map((item) => (
                                    <div className="flex flex-col bg-white shadow-lg  md:flex-row">
                                    {/* <img
                                        className="h-96 w-full object-cover md:h-auto md:w-64"
                                        src={item.image}
                                        alt="" /> */}
                                    <div className="flex flex-col justify-start p-6">
                                        <a
                                        className="mb-2 text-xl font-medium text-neutral-800 underline decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer"
                                        href={item.href} target={item.target}>
                                        {item.name}
                                        </a>
                                        <a className='mb-3 text-md font-medium text-pink-500'>{item.notice}</a>
                                        <p className="mb-5 text-base text-neutral-600 text-ellipsis overflow-hidden">
                                        {item.description}
                                        </p>
                                    </div>
                                    </div>
                                  ))}
                                </div>
                        </div>                                            
                        <div className='pb-5'>
                    </div>
                    <div className='divide-y-2'>
                        <div>
                        </div>
                        <div className='pb-5'>
                        </div>
                    </div>
                    <div className='grid'>
                        <div className='text-xl pb-3 font-medium'>บริการทางการศึกษา</div>
                        <div className=' pb-3 pl-3'>สามารถดูบริการทางการศึกษาได้ที่นี่</div>
                                <div className='grid grid-cols-2 gap-4 pb-3 pl-3'>
                                  {BannerLearning.map((item) => (
                                    <div className="flex flex-col bg-white shadow-lg  md:flex-row">
                                    {/* <img
                                        className="h-96 w-full object-cover md:h-auto md:w-64"
                                        src={item.image}
                                        alt="" /> */}
                                    <div className="flex flex-col justify-start p-6">
                                        <a
                                        className="mb-2 text-xl font-medium text-neutral-800 underline decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer"
                                        href={item.href} target={item.target}>
                                        {item.name}
                                        </a>
                                        <a className='mb-3 text-md font-medium text-pink-500'>{item.notice}</a>
                                        <p className="mb-5 text-base text-neutral-600 text-ellipsis overflow-hidden">
                                        {item.description}
                                        </p>
                                    </div>
                                    </div>
                                  ))}
                                </div>
                        </div>                                            
                        <div className='pb-5'>
                    </div>
                    <div className='divide-y-2'>
                        <div>
                        </div>
                        <div className='pb-5'>
                        </div>
                    </div>
                    <div className='grid'>
                        <div className='text-xl pb-3 font-medium'>บริการอื่น ๆ จากเพื่อนนิสิต</div>
                        <div className=' pb-3 pl-3'>สามารถดูบริการสำหรับนิสิตโดยเพื่อนนิสิตได้ที่นี่</div>
                                <div className='grid grid-cols-1 gap-4 pb-3 pl-3'>
                                  {BannerPartner.map((item) => (
                                    <div className="flex flex-col bg-white shadow-lg  md:flex-row">
                                    {/* <img
                                        className="h-96 w-full object-cover md:h-auto md:w-64"
                                        src={item.image}
                                        alt="" /> */}
                                    <div className="flex flex-col justify-start p-6">
                                        <a
                                        className="mb-2 text-xl font-medium text-neutral-800 underline decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer"
                                        href={item.href} target={item.target}>
                                        {item.name}
                                        </a>
                                        <a className='mb-3 text-md font-medium text-pink-500'>{item.notice}</a>
                                        <p className="mb-5 text-base text-neutral-600 text-ellipsis overflow-hidden">
                                        {item.description}
                                        </p>
                                    </div>
                                    </div>
                                  ))}
                                </div>
                        </div>                                            
                        <div className='pb-5'>
                    </div>                    
                </div>
                <div className='grid col-span-1 lg:col-span-2'>
                </div>
            </div>
            <div className='flex items-center justify-center mt-10 text-xl font-medium'>
                <a className='px-3 underline decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer' href='/lookup'>กลับหน้าแรก</a>
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
                 <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    กฎการขออนุญาตลงประชาสัมพันธ์ผ่านช่องทางการสื่อสารของคณะกรรมการนิสิตอักษรศาสตร์
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm mt-3 text-gray-500">
                    <p>1. ก่อนกรอกข้อมูล รบกวนเช็คตารางเวลาประชาสัมพันธ์บนหน้าเว็บไซต์คณะอักษรศาสตร์เพื่อเลือกช่วงเวลาที่ต้องการประชาสัมพันธ์ได้ที่ <a className='font-bold underline-thickness-1 underline-offset-4 hover:underline cursor-pointer transition-colors duration-300' href='https://airtable.com/shrbDR35qe9WQfRP5' target='_blank'>ลิงก์นี้</a> และหากเลือกเวลาตรงกับงานที่ขอมาก่อนหน้า (คอนเทนต์แต่ละวันไม่ควรเกิน 3 อัน) ทางฝ่ายจะขออนุญาตลงให้งานก่อนหน้าก่อนตามด้วยงานของท่าน</p>
<p className="text-sm mt-3 text-gray-500">2. กรอกข้อมูลทุกช่องและเลือกสรรการลงประชาสัมพันธ์ตามสะดวก</p>
<p className="text-sm mt-3 text-gray-500">3. ทางฝ่ายจะลงประชาสัมพันธ์ในช่วงเวลา 9.00 , 12.00, 16.00-20.00 น. และทางแอดมินจะคอยตรวจสอบชีทตารางเวลาทุก ๆ 12.00 และ 16.00 น. ของทุกวัน</p>
<p className="text-sm mt-3 text-gray-500">4. กรุณากรอกความต้องการลงประชาสัมพันธ์ล่วงหน้าก่อนวันลงจริงอย่างน้อย 7 วัน หากลงความประสงค์มาแล้วและต้องการแก้ไขข้อความหรือสื่อเร่งด่วน ให้ติดต่อกับแอดมินที่รับผิดชอบและแจ้งแก้ไขอย่างช้าที่สุดสำหรับกราฟิก 1 วัน ส่วนแคปชั่น 3 ชั่วโมงก่อนลงจริง หากช้ากว่านั้นจะไม่รับการแก้ไขใด ๆ </p>
<p className="text-sm mt-3 text-gray-500">5. ฝ่ายสื่อและประชาสัมพันธ์ คณะกรรมการนิสิตอักษรศาสตร์ มีสิทธิ์ในการปรับปรุงแก้ไขเนื้อหา หรือให้ผู้ประสงค์แก้ไขเนื้อหา หรือไม่ประชาสัมพันธ์ หากพิจารณาแล้วว่าสื่อดังกล่าวไม่เหมาะสมหรือจะแสดงถึงภาพลักษณ์ที่ไม่ดีต่อองค์กร โดยทางแอดมินที่รับผิดชอบจะติดต่อไปเพื่อหาข้อตกลง </p>
<p className="text-sm mt-3 text-gray-500 indent-8">5.1 ไม่เหมาะสม หมายความว่า

–เนื้อหาหรือภาพที่ยั่วยุให้เกิดความเกลียดชัง ส่งเสริมการเลือกปฏิบัติ หรือดูถูกดูหมิ่นบุคคลหรือกลุ่มบุคคลอันมีพื้นฐานจากเชื้อชาติหรือกลุ่มชาติพันธุ์ ศาสนา ความพิการ อายุ สัญชาติ สถานะทหารผ่านศึก วิถีทางเพศ เพศสภาพ อัตลักษณ์ทางเพศ สีผิว หรือลักษณะอื่นใดที่เกี่ยวข้องกับการเลือกปฏิบัติหรือดูแคลนอย่างเป็นระบบ
เนื้อหาที่คุกคาม ข่มขู่ หรือกลั่นแกล้งบุคคลหรือกลุ่มบุคคล
เนื้อหาที่ข่มขู่หรือสนับสนุนให้ทำอันตรายทางด้านร่างกายหรือจิตใจต่อตนเองหรือบุคคลอื่น

–การโปรโมตที่ใช้ภาษารุนแรง ภาพที่น่ากลัว หรือรูปภาพหรือเรื่องราวที่บรรยายเกี่ยวกับการบาดเจ็บทางร่างกายอย่างโจ่งแจ้ง

–ถ่ายภาพหรือการถ่ายของเหลวในร่างกาย ของเสียจากมนุษย์ หรือเนื้อเยื่อของมนุษย์โดยไม่มีเหตุอันควร</p>

<p className="text-sm mt-3 text-gray-500 indent-8">5.2 ฝ่ายสื่อและประชาสัมพันธ์ คณะกรรมการนิสิตอักษรศาสตร์จะโพสต์ ลงคลิปและทำสตอรี่ให้กับงานที่เกี่ยวข้องกับคณะอักษรศาสตร์และคณะกรรมการนิสิตอักษรศาสตร์เท่านั้น หากเป็นการประชาสัมพันธ์ประเภทโปรโมตจะเพียงแค่แชร์โพสต์ที่มีอยู่แล้วและประชาสัมพันธ์ในLine Group แต่ละชั้นปีแทน</p>









                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="flex px-4 py-2 text-sm font-medium border-2 btn-active underline-thickness-1 hover:underline hover:bg-[#1F1F1F] hover:text-[#F2F2F2]
                      cursor-pointer transition-colors duration-300"
                      onClick={closeError}
                    >
                      ปิด
                    </button>
                  </div>
                </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        <Transition appear show={isShow} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeShow}>
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
                 <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    ห้อง ก.อศ. ชั้น M1 อาคารมหาจักรีสิรินธร
                  </Dialog.Title>
                  <div className="mt-2">
                    <Image src={GozLocation}/>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="flex px-4 py-2 text-sm font-medium border-2 btn-active underline-thickness-1 hover:underline hover:bg-[#1F1F1F] hover:text-[#F2F2F2]
                      cursor-pointer transition-colors duration-300"
                      onClick={closeShow}
                    >
                      ปิด
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

export default ServiceDetail