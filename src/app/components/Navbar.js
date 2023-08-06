'use client'
import { React, Fragment, useState, useEffect} from 'react';
import { Dialog, Transition, Popover } from '@headlessui/react'
import {
    CursorArrowRaysIcon,
    FingerPrintIcon,
    ArrowUpRightIcon,
    ArrowLongRightIcon,
    PencilIcon,
    MagnifyingGlassIcon,
    UserGroupIcon,
    CalculatorIcon,
    ArchiveBoxIcon,
    MicrophoneIcon,
    CodeBracketIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    FlagIcon,
    QuestionMarkCircleIcon,
    SparklesIcon,
    BuildingOfficeIcon,
    BriefcaseIcon,
    ShieldCheckIcon,
    CommandLineIcon,
    MegaphoneIcon,
  } from '@heroicons/react/24/outline'
import '@/app/components/Navbar.css'
import Link from 'next/link';

const mainMenu = [
    { name: 'หน้าแรก', description: 'คลิกที่นี่เพื่อไปที่หน้าหลัก', href: '' },
    { name: 'วิชาการ', description: 'ดูบริการวิชาการทั้งหมดได้ที่นี่', href: '' },
    { name: 'สวัสดิการ', description: 'สวัสดิการทั้งหมดสำหรับนิสิต', href: '' },
]
const mainMenu1 = [
    { name: 'กิจกรรม', description: 'กิจกรรมอยู่นี่เลย', href: '' },
    { name: 'ช่วยเหลือ', description: 'สงสัย/ต้องการข้อมูล มาที่นี่เลย', href: '' },
    { name: 'เกี่ยวกับเรา', description: 'ดูข้อมูลเกี่ยวกับ ก.อศ. ได้ที่นี่', href: '' },
]
const readings = [
    { name: 'ข่าวประชาสัมพันธ์', description: 'ดูข่าวประชาสัมพันธ์ทั้งหมดได้ที่นี่', href: '/services/review', target: '', icon: PencilIcon },
    { name: 'งานทะเบียน', description: 'ดูข้อมูลเกี่ยวกับงานทะเบียนได้ที่นี่', href: '/reg', target: '', icon: PencilIcon },
    { name: 'รีวิวรายวิชา', description: 'อยากรู้วิชาไหนเป็นอย่างไร คลิกเลย', href: '/services/review', target: '', icon: PencilIcon },
    { name: 'ค้นหาชื่ออาจารย์', description: 'ดูชื่อย่ออาจารย์ในคณะฯ ได้ที่นี่', href: 'https://www.arts.chula.ac.th/goz/dev/temptable', target: '', icon: MagnifyingGlassIcon },
    { name: 'ค้นหารายวิชาและอาจารย์ที่ปรึกษา สำหรับนิสิต ปี 1', description: 'สำหรับตรวจสอบข้อมูลลงทะเบียนเรียนของนิสิตปี 1', href: '/services/year1', target: '', icon: UserGroupIcon },
    { name: 'คำนวณ/คาดการณ์เกรด', description: 'เกรดรวมจะเป็นอย่างไร จะได้เข้าเอกไหม คำนวณได้ที่นี่', href: '/services/calc', target: '', icon: CalculatorIcon },
  ]
  const rcallsAct = [
    { name: 'ดูบริการวิชาการทั้งหมด', href: '/topics', icon: ArrowLongRightIcon },
  ]

  const tools = [
    
    { name: 'สวัสดิการสำหรับนิสิต', description: 'เป็นนิสิตอักษรฯ ได้อะไรบ้าง?', href: '/benefit', target: '', icon: SparklesIcon },
    { name: 'ฝากประชาสัมพันธ์ อบจ.', description: 'สำหรับฝากประชาสัมพันธ์ อบจ.', href: '/cusgform', target: '', icon: SparklesIcon },
    
    
  ]
  const toolsAll = [
    { name: 'ดูสวัสดิการทั้งหมด', href: '/services', icon: ArrowLongRightIcon },
  ]
  const projectArts = [
    { name: 'Arts Podcast', description: 'รายการ Podcast จากก.อศ.', href: '/podcast', icon: MicrophoneIcon },
    { name: 'บทความ', description: 'รวมบทความจากนิสิตมาไว้ที่นี่แล้ว', href: '/podcast', icon: MicrophoneIcon },
    { name: 'ชมรม', description: 'อักษรฯ มีชมรมอะไรบ้าง ดูได้ที่นี่เลย', href: '/podcast', icon: MicrophoneIcon },
    { name: 'ผลงานนิสิต', description: 'ผลงานทั้งหมดของนิสิตอักษร ฯ', href: '/podcast', icon: MicrophoneIcon },
  ]
  const projectAll = [
    { name: 'ดูกิจกรรมทั้งหมด', href: '/projects', icon: ArrowLongRightIcon },
  ]
  const clubs = [
    { name: 'Artstreet', description: 'รอคำอธิบายขนาดย่อม', href: '/clubs/artstreet', icon: PencilIcon },
    { name: 'Artsting', description: 'รอคำอธิบายขนาดย่อม', href: '/clubs/artsting', icon: MagnifyingGlassIcon },
    { name: 'Artsband', description: 'รอคำอธิบายขนาดย่อม', href: '/clubs/artsband', icon: UserGroupIcon },
    { name: 'Arts Repository (ใช้ ArtsID)', description: 'อยากได้ไฟล์ไหน ค้นหาได้ที่นี่เลย', href: '/repos', target: '', icon: ArchiveBoxIcon },
  ]
  const clubsAll = [
    { name: 'ดูชมรมทั้งหมด', href: '/club', icon: ArrowLongRightIcon },
  ]
  const support = [
    { name: 'ร้องเรียนปัญหาทางกายภาพภายในคณะ', description: 'หากพบปัญหาเกี่ยวกับอาคารหรือพื้นที่ในคณะ สามารถแจ้งได้ที่นี่', href: '/support/physical', icon: FlagIcon },
    { name: 'ร้องเรียนปัญหาทางสังคม', description: 'หากพบปัญหาเกี่ยวกับสังคม เช่น ถูกล่วงละเมิด สามารถแจ้งได้ที่นี่', href: '/support/self', icon: FlagIcon },
    { name: 'ร้องเรียนเจ้าหน้าที่ ก.อศ.', description: 'หากพบปัญหาเกี่ยวกับก.อศ. สามารถแจ้งได้ที่นี่', href: '/support/gozstaff', icon: UserGroupIcon },
    { name: 'ร้องเรียนปัญหาในการใช้งานเว็บไซต์', description: 'เว็บไซต์ก.อศ. เข้าใช้งานไม่ได้ สามารถแจ้งได้ที่นี่', href: 'https://airtable.com/appA8ImL9XTyWJrdr/shrjJycDMqOzuxShq', target: '_blank',icon: CodeBracketIcon },
    { name: 'ข้อเสนอแนะ/ความคิดเห็นเพิ่มเติม', description: 'อยากแนะนำ หรือ อยากให้ก.อศ. พัฒนาส่วนไหน แจ้งมาได้เลย', href: '/support/feedback', icon: ChatBubbleOvalLeftEllipsisIcon },
    { name: 'คำถามที่ถูกถามบ่อย', description: 'ดูคำถามที่พบบ่อยเกี่ยวกับนิสิตคณะอักษรฯได้ที่นี่', href: '/support/faq', icon: QuestionMarkCircleIcon },
  ]
  const supportAll = [
    { name: 'ดูข้อมูลทั้งหมด', href: '/support', icon: ArrowLongRightIcon },
  ]
  const about = [
    { name: 'คณะกรรมการนิสิตอักษรศาสตร์ (ก.อศ.)', description: 'ดูข้อมูลเกี่ยวกับเราเพิ่มเติม', href: '/about/us', icon: UserGroupIcon },
    { name: 'ทำเนียบประธานฝ่าย และช่องทางการติดต่อ', description: 'ก.อศ. 66 มีใครบ้าง ดูได้ที่นี่เลย', href: '/about/us', icon: UserGroupIcon },
    { name: 'โครงการ', description: 'โครงการทั้งหมดจาก ก.อศ. 66', href: '/about/projects', icon: BriefcaseIcon },
    { name: 'ติดต่อเรา', description: 'ข้อมูลติดต่อกับก.อศ.', href: '/about/connect', icon: QuestionMarkCircleIcon },
    { name: 'งานประชาสัมพันธ์ ก.อศ.', description: 'ติดตาม/ขอลงงานประชาสัมพันธ์ได้ที่นี่', href: 'https://www.arts.chula.ac.th/goz/dev/atb/', icon: MegaphoneIcon },
    { name: 'ดาวน์โหลดข้อมูล', description: 'สามารถดาวน์โหลดเอกสาร ฟอร์ม และตราสัญลักษณ์องค์กรได้ที่นี่', href: '/artslabs', icon: CommandLineIcon },
  ]
  const aboutAll = [
    { name: 'เข้าสู่ระบบ สำหรับ ก.อศ.', href: '/login', icon: ArrowLongRightIcon },
  ]
  const logo = [
    'https://www.arts.chula.ac.th/goz/asset/icons/aw-nav.png',
    'https://www.arts.chula.ac.th/goz/asset/icons/ab-nav.png',
    'https://www.arts.chula.ac.th/goz/asset/icons/ap-nav.png'
  ]
  const btnDec = [
    `flex px-2 py-1 border-2 btn underline-thickness-1 hover:underline hover:bg-[#F2F2F2] hover:text-[#1F1F1F]
    cursor-pointer transition-colors duration-300`,
    `flex px-2 py-1 border-2 btn-active underline-thickness-1 hover:underline hover:bg-[#1F1F1F] hover:text-[#F2F2F2]
    cursor-pointer transition-colors duration-300`
  ]
  const navtext = [
    `flex font-medium text-[#F2F2F2] underline-thickness-1 underline-offset-4 hover:underline 
    cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-21 focus:ring-offset-1 focus:ring-[#f2f2f2]`,
    `flex font-medium text-[#1F1F1F] underline-thickness-1 underline-offset-4 hover:underline 
    cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-21 focus:ring-offset-1 focus:ring-[#1f1f1f]`
  ]
  const popupP = [
    `group relative flex items-center gap-x-2 rounded p-2 text-sm leading-4`,
    `block font-semibold text-[#1f1f1f] underline-thickness-1 underline-offset-4 hover:underline cursor-pointer transition-colors duration-300`,
    `flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#1f1f1f] underline-thickness-1 underline-offset-4 hover:underline cursor-pointer transition-colors duration-300`,
  ]

const isBrowser = () => typeof window !== 'undefined';

function Navbar() {
    let [isOpen, setIsOpen] = useState(false)
  
    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
    //MoNav
    let [isStart, setIsStart] = useState(false)
  
    function closeModal1() {
        setIsStart(false)
    }
  
    function openModal1() {
        setIsStart(true)
    }
    //MoError
    let [isError, setIsError] = useState(false)
  
    function closeError() {
        setIsError(false)
    }
  
    function openError() {
        setIsError(true)
    }
    //NavCo
    const [color, setColor ] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 500){
            setColor(true)
        }else {
            setColor(false)
        }        

    }
    useEffect(() => {
      window.addEventListener('scroll', changeColor);
    }) 
    
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col">
                    
                    {/* <div class="fixed inset-x-0 top-0 z-50 h-0.5 mt-0.5
                        bg-blue-500"></div> */}

                    
                    <nav className={color ? 'navbar-active' : 'navbar'}>

                    
                        <div className="flex items-center transition-colors duration-300">
                            <a className="cursor-pointer" href='/'>
                                    <img className="h-12 object-cover"
                                        src={color ? logo[1] : logo[0]} alt="Artsgoz">
                                    </img>
                            </a>
                        </div>

                    
                        <div className="items-center hidden space-x-8 lg:flex">
                            <a className={color ? navtext[1] : navtext[0]} href='/'>
                                หน้าแรก
                            </a>
                            <Popover.Group className="hidden lg:flex lg:gap-x-12">
                                <Popover className="relative">
                                
                                    <Popover.Button className={color ? navtext[1] : navtext[0]}>
                                    วิชาการ
                                    {/* <ChevronDownIcon className="h-5 w-5 flex-none text-gray-900" aria-hidden="true" /> */}
                                    </Popover.Button>
                                    <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                    >
                                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 rounded w-screen max-w-md overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5">
                                        <div className="p-4">
                                        {readings.map((item) => (
                                            <div
                                            key={item.name}
                                            className={popupP[0]}
                                            >
                                            {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-pink-600" aria-hidden="true" />
                                            </div> */}
                                            <div className="flex-auto">
                                                <a href={item.href} className={popupP[1]}>
                                                {item.name}
                                                <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                            {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-pink-600" aria-hidden="true" />
                                            </div> */}
                                            </div>
                                        ))}
                                        </div>
                                        <div className="grid grid-cols-1 divide-x divide-gray-900/5 bg-gray-50">
                                        {rcallsAct.map((item) => (
                                            <a
                                            key={item.name}
                                            href={item.href}
                                            className={popupP[2]}
                                            >
                                            {item.name}
                                            <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                            </a>
                                        ))}
                                        </div>
                                    </Popover.Panel>
                                    </Transition>
                                </Popover>
                            </Popover.Group>

                            <Popover.Group className="hidden lg:flex lg:gap-x-12">
                                <Popover className="relative">
                                
                                    <Popover.Button className={color ? navtext[1] : navtext[0]}>
                                    สวัสดิการ
                                    {/* <ChevronDownIcon className="h-5 w-5 flex-none text-gray-900" aria-hidden="true" /> */}
                                    </Popover.Button>
                                    <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                    >
                                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 rounded w-screen max-w-md overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5">
                                        <div className="p-4">
                                        {tools.map((item) => (
                                            <div
                                            key={item.name}
                                            className={popupP[0]}
                                            >
                                            {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-[#1f1f1f] group-hover:text-pink-500" aria-hidden="true" />
                                            </div> */}
                                            <div className="flex-auto">
                                                <a href={item.href} className={popupP[1]} target={item.target}>
                                                {item.name}
                                                <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-2 text-gray-600">{item.description}</p>
                                            </div>
                                            {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-pink-600" aria-hidden="true" />
                                            </div> */}
                                            </div>
                                        ))}
                                        </div>
                                        <div className="grid grid-cols-1 divide-x divide-gray-900/5 bg-gray-50">
                                        {toolsAll.map((item) => (
                                            <Link
                                            key={item.name}
                                            href={item.href}
                                            className={popupP[2]}
                                            >
                                            {item.name}
                                            <item.icon className="h-5 w-5 flex-none text-[#1f1f1f]" aria-hidden="true" />
                                            </Link>
                                        ))}
                                        </div>
                                    </Popover.Panel>
                                    </Transition>
                                </Popover>
                            </Popover.Group>

                            <Popover.Group className="hidden lg:flex lg:gap-x-12">
                                <Popover className="relative">
                                
                                    <Popover.Button className={color ? navtext[1] : navtext[0]}>
                                    กิจกรรม
                                    {/* <ChevronDownIcon className="h-5 w-5 flex-none text-gray-900" aria-hidden="true" /> */}
                                    </Popover.Button>
                                    <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                    >
                                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 rounded w-screen max-w-md overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5">
                                        <div className="p-4">
                                        {projectArts.map((item) => (
                                            <div
                                            key={item.name}
                                            className={popupP[0]}
                                            >
                                            <div className="flex-auto">
                                                <a href={item.href} className={popupP[1]}>
                                                {item.name}
                                                <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                            {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-pink-600" aria-hidden="true" />
                                            </div> */}
                                            </div>
                                        ))}
                                        </div>
                                        <div className="grid grid-cols-1 divide-x divide-gray-900/5 bg-gray-50">
                                        {projectAll.map((item) => (
                                            <a
                                            key={item.name}
                                            href={item.href}
                                            className={popupP[2]}
                                            >
                                            {item.name}
                                            <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                            </a>
                                        ))}
                                        </div>
                                    </Popover.Panel>
                                    </Transition>
                                </Popover>
                            </Popover.Group>

                            <Popover.Group className="hidden lg:flex lg:gap-x-12">
                                <Popover className="relative">
                                
                                    <Popover.Button className={color ? navtext[1] : navtext[0]}>
                                    ช่วยเหลือ
                                    {/* <ChevronDownIcon className="h-5 w-5 flex-none text-gray-900" aria-hidden="true" /> */}
                                    </Popover.Button>
                                    <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                    >
                                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 rounded w-screen max-w-md overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5">
                                        <div className="p-4">
                                        {support.map((item) => (
                                            <div
                                            key={item.name}
                                            className={popupP[0]}
                                            >
                                            <div className="flex-auto">
                                                <a href={item.href} target={item.target} className={popupP[1]}>
                                                {item.name}
                                                <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                            {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-pink-600" aria-hidden="true" />
                                            </div> */}
                                            </div>
                                        ))}
                                        </div>
                                        <div className="grid grid-cols-1 divide-x divide-gray-900/5 bg-gray-50">
                                        {supportAll.map((item) => (
                                            <a
                                            key={item.name}
                                            href={item.href}
                                            className={popupP[2]}
                                            >
                                            {item.name}
                                            <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                            </a>
                                        ))}
                                        </div>
                                    </Popover.Panel>
                                    </Transition>
                                </Popover>
                            </Popover.Group>

                            <Popover.Group className="hidden lg:flex lg:gap-x-12">
                                <Popover className="relative">
                                
                                    <Popover.Button className={color ? navtext[1] : navtext[0]}>
                                    เกี่ยวกับเรา
                                    {/* <ChevronDownIcon className="h-5 w-5 flex-none text-gray-900" aria-hidden="true" /> */}
                                    </Popover.Button>
                                    <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                    >
                                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 rounded w-screen max-w-md overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5">
                                        <div className="p-4">
                                        {about.map((item) => (
                                            <div
                                            key={item.name}
                                            className={popupP[0]}
                                            >
                                            <div className="flex-auto">
                                                <a href={item.href} className={popupP[1]}>
                                                {item.name}
                                                <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                            {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-pink-600" aria-hidden="true" />
                                            </div> */}
                                            </div>
                                        ))}
                                        </div>
                                        <div className="grid grid-cols-1 divide-x divide-gray-900/5 bg-gray-50">
                                        {aboutAll.map((item) => (
                                            <a
                                            key={item.name}
                                            href={item.href}
                                            className={popupP[2]}
                                            >
                                            {item.name}
                                            <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                            </a>
                                        ))}
                                        </div>
                                    </Popover.Panel>
                                    </Transition>
                                </Popover>
                            </Popover.Group>
                        </div>

                        <div className="items-center hidden space-x-5 lg:flex">
                            {/* // onClick={openModal} */}

                            <a className={color ? btnDec[1] : btnDec[0]} onClick={openModal}>
                                เข้าสู่ระบบ
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </a>
                            {/* <a class="flex px-2 py-1 border-2 btn underline-thickness-1 underline-offset-4 hover:underline hover:bg-[#1F1F1F] hover:text-[#F2F2F2]
                                cursor-pointer transition-colors duration-300" onClick={openModal}>
                                เข้าสู่ระบบ
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </a> */}
                        </div>
                        <div className="lg:hidden flex items-center space-x-5">
                                <button
                                type="button"
                                className={color ? btnDec[1] : btnDec[0]}   
                                onClick={openModal1}                
                                >
                                <span className="sr-only">Open menu</span>
                                {/* Heroicon name: outline/menu */}
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                                </button>
                        </div>
                    </nav>
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
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                    //   className="text-lg font-medium leading-6 text-gray-900"
                    >
                        <div className="grid justify-items-end">
                            <button
                                className="inline-flex text-[#1F1F1F] *text-sm font-medium underline-thickness-1 underline-offset-4 hover:underline "
                                onClick={closeModal}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className='mx-5 mb-5 flex items-center justify-center'>
                            <img src='https://www.arts.chula.ac.th/goz/asset/icons/ab-nav.png' className='h-10 items-center justify-center'></img>
                        </div>
                        <div className='mx-5 my-2 flex items-center justify-center'>
                            <p className='text-2xl'>ArtsID Login</p>
                        </div>
                    </Dialog.Title>
                <div className='mx-5 mt-3'>
                  <span class="block text-sm font-medium text-[#1F1F1F]">รหัสนิสิต</span>
                  <input type="text" placeholder='ป้อนรหัสนิสิตที่นี่' class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 font-mono text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-[#1F1F1F] focus:ring-1 focus:ring-[#1F1F1F]
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                  "/>
                </div>
                <div className='mx-5 mt-3'>
                  <span class="block text-sm font-medium text-[#1F1F1F]">รหัสผ่าน</span>
                  <input type="password" placeholder='ป้อนรหัสผ่านที่นี่' class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 font-mono text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-[#1F1F1F] focus:ring-1 focus:ring-[#1F1F1F]
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                  "/>
                </div>
                <div className='m-5 flex items-center justify-center'>
                  <a className='flex px-4 py-2 mx-2 text-sm font-medium border-2 btn-active underline-thickness-1 hover:underline hover:bg-[#1F1F1F] hover:text-[#F2F2F2]
                    cursor-pointer transition-colors duration-300' onClick={openError}>เข้าสู่ระบบ</a>
                    <a className='flex px-4 py-2 mx-2 text-sm font-medium border-2 btn-active underline-thickness-1 hover:underline hover:bg-[#1F1F1F] hover:text-[#F2F2F2]
                    cursor-pointer transition-colors duration-300' href='https://airtable.com/shrjJycDMqOzuxShq' target='_blank'>ลืมรหัสผ่าน
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
        <Transition appear show={isStart} as={Fragment}>
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
              <div className="lg:hidden fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
                                {/* gml */}
            <div className="lg:hidden fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-start justify-center text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-full transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                    //   className="text-lg font-medium leading-6 text-gray-900"
                    >
                    </Dialog.Title>
                {/* <div className='flex flex-col'>
                    <div className='flex flex-row items-end'>
                        <div className='flex justify-start items-start'>
                        mflv
                        </div>
                    </div>
                    <div className='flex justify-end items-end'>
                        mflv
                    </div>
                    
                    <div className='flex items-start'>
                        mdks
                    </div>
                </div> */}
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
                    <div>
                    <img src='https://www.arts.chula.ac.th/goz/asset/icons/ab-nav.png' className='h-10 items-center justify-center'></img>
                    </div>                    
                </div>
                <div className='flex justify-between'>
                    <div className='order-last'>
                        
                    </div>
                    <div className=''>
                    <div className="py-4">
                        {mainMenu.map((item) => (
                            <div
                            key={item.name}
                            className="group relative flex items-center gap-x-2 rounded py-2 text-sm leading-4 mr-1"
                            >                            
                            <div className="flex-auto">
                                <a href={item.href} className="block font-semibold text-[#1f1f1f] underline-thickness-1 underline-offset-4 hover:underline cursor-pointer transition-colors duration-300">
                                {item.name}
                                <span className="absolute inset-0" />
                                </a>
                                <p className="mt-2 text-gray-600">{item.description}</p>
                            </div>
                            </div>
                        ))}
                    </div>                    
                    </div>
                    <div>
                    <div className="py-4">
                        {mainMenu1.map((item) => (
                            <div
                            key={item.name}
                            className="group relative flex items-center gap-x-2 rounded py-2 text-sm leading-4 mr-1"
                            >
                            <div className="flex-auto">
                                <a href={item.href} className="block font-semibold text-[#1f1f1f] underline-thickness-1 underline-offset-4 hover:underline cursor-pointer transition-colors duration-300">
                                {item.name}
                                <span className="absolute inset-0" />
                                </a>
                                <p className="mt-2 text-gray-600">{item.description}</p>
                            </div>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
                <div>
                <div className="grid grid-cols-1">
                    
                        <a onClick={openModal}
                        className="flex items-center justify-center px-2 py-1 border-2 btn-active underline-thickness-1 hover:underline hover:bg-[#1F1F1F] hover:text-[#F2F2F2]
                        cursor-pointer transition-colors duration-300"
                        >
                        เข้าสู่ระบบ
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                        </a>
                    
                    </div>
                </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>

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
                    เนื้อหานี้ยังไม่เปิดใช้งาน
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      ขออภัยในความไม่สะดวก หน้าที่คุณกำลังจะไปยังไม่เปิดใช้งานสำหรับบุคคลทั่วไป
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
        </div>
    );
}

export default Navbar;