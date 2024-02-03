'use client'
import { React, Fragment, useState, useEffect} from 'react';
import { Dialog, Transition, Popover } from '@headlessui/react'
import '../components/MS.css'
import { ArrowLongRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import IMG1 from '../components/asset/1.jpg'
import LookUp200823 from '../components/asset/LookUp-200823.jpg'
import Link from 'next/link';

const gozlink = [
    { name: 'คณะกรรมการและสมาชิก', href: '/about', target: '' },
    { name: 'หน่วยงานในสังกัด ก.อศ.', href: '/about/dept', target: '' },
    { name: 'การบริหารงานและความโปร่งใส', href: '/about/transparency', target: '' },
    { name: 'ช่องทางการติดต่อ', href: '/about/connect', target: '' },
    { name: 'เอกสาร/แบบฟอร์ม', href: '/about/docs', target: '' },
]
const prlink = [
    { name: 'ตารางงานประชาสัมพันธ์ทั้งหมด', href: 'https://airtable.com/appL41ESosi23CmVb/shrbDR35qe9WQfRP5', target: '_blank', onClick: '' },
    { name: 'ติดต่อขอลงงานประชาสัมพันธ์', href: 'https://airtable.com/appL41ESosi23CmVb/shrOw4kbtV4ghnpRW', target: '_blank', onClick: '' },
    { name: 'ตราสัญลักษณ์องค์กร', href: '/about/asset', target: '', onClick: '' },
    { name: 'Asset งานประชาสัมพันธ์', href: '/about/asset', target: '', onClick: '' },
]
const servlink = [
    { name: 'งานทะเบียน', href: '/reg', target: '' },
    { name: 'บริการทั้งหมด', href: '/service', target: '' },
    { name: 'ค้นหาชื่ออาจารย์', href: '/service/staffquery', target: '' },
    { name: 'คำนวณเกรด', href: '/service/calc', target: '' },
    { name: 'คลังข้อมูลสำหรับนิสิต', href: '/service/asset', target: '' },
    { name: 'ตรวจสอบรายวิชาและอาจารย์ที่ปรึกษา', href: '/service/query/ttb', target: '' },
    { name: 'ตรวจสอบผลการสมัครกิจกรรมต่าง ๆ', href: '/service/query/activity', target: '' },
    { name: 'ตรวจสอบผลการคัดเลือกเอก', href: '/service/query/major', target: '' },
    { name: 'รีวิวรายวิชา', href: '/review/class', target: '' },
    { name: 'รีวิวเอกในคณะ', href: '/review/major', target: '' },
]
const UnivServ = [
    { name: 'Cisco AnyConnect', href: 'https://www.it.chula.ac.th/service/cunet-vpn-service/', target: '_blank' },
    { name: 'Office 365', href: 'https://login.microsoftonline.com/?whr=chula.ac.th', target: '_blank' },
    { name: 'Google Workspace', href: 'https://apps.google.com/user/hub', target: '_blank' },
    { name: 'Adobe Creative Cloud', href: 'https://creativecloud.adobe.com/apps/all', target: '_blank' },
    { name: 'อักขราวิสุทธิ์', href: 'http://plag.grad.chula.ac.th/', target: '_blank' },
    { name: 'คลังปัญญาจุฬา', href: 'https://cuir.car.chula.ac.th/', target: '_blank' },
    { name: 'Chula EZProxy', href: 'https://login.chula.idm.oclc.org/login', target: '_blank' },
    { name: 'Chula Student Wellness', href: 'https://chula.wellness.in.th', target: '_blank' },
    { name: 'CUNET Account Management', href: 'https://userportal.it.chula.ac.th/Login.aspx', target: '_blank' },
    { name: 'Chula Zoom', href: 'https://chula.zoom.us/', target: '_blank' },
    { name: 'Chula License Portal System', href: 'https://licenseportal.it.chula.ac.th/', target: '_blank' },    
    { name: 'สำนักงานวิทยทรัพยาการ', href: 'https://www.car.chula.ac.th/', target: '_blank' },
    { name: 'Chula Reference Databases', href: 'https://www.car.chula.ac.th/curef.php', target: '_blank' },
    { name: 'ดาวน์โหลดโปรแกรม EndNote', href: 'https://www.car.chula.ac.th/endnotedownload/index.php', target: '_blank' },
    { name: 'CUSC Booking', href: 'https://book.cusc.chula.ac.th/', target: '_blank' },
]
const UnivPartnerServ = [
    { name: 'CU Get Reg', href: 'https://cugetreg.com/', target: '' },
    { name: 'Gen อย่าได้ Ed', href: 'https://www.facebook.com/genedahs/', target: '_blank' },
    { name: 'CU POP Bus', href: 'https://www.facebook.com/CUPOPBUS', target: '_blank' },    
]
const actlink = [
    { name: 'ข่าวสาร/กิจกรรม', href: '/activity', target: '' },
    { name: 'บทความ', href: '/lookup', target: '' },
    { name: 'ชมรม', href: '/club', target: '' },
    { name: 'Arts Podcast', href: '/podcast', target: '' },
]
const supportlink = [
    { name: 'คำถามที่พบบ่อย', href: '/support/faq', target: '' },
    { name: 'ร้องเรียนปัญหาต่าง ๆ', href: '/support/report', target: '' },
    { name: 'ข้อเสนอแนะ/ความคิดเห็น', href: '/support/feedback', target: '' },
    { name: 'ตรวจสอบเรื่องที่ร้องเรียน', href: '/support/ticketchecker', target: '' },
]
const aboutlink = [
    { name: 'นโยบายความเป็นส่วนตัว', href: '/support/privacy', target: '' },
    { name: 'ข้อกำหนดการใช้งาน', href: '/support/terms', target: '' },
    { name: 'ArtsLabs', href: '/artslabs', target: '' },
    { name: 'คลังข้อมูล', href: '/about/asset', target: '' },
    { name: 'แผนผังเว็บไซต์', href: '/sitemap', target: '' },
]
const weblink = [
    { name: 'GOZ Portal', href: '/login', target: '' },
    { name: 'PR Portal', href: '/login', target: '' },
    { name: 'Knowledge Management', href: '/ids/ikm', target: '' },
    { name: 'Helpdesk Support', href: '/support/helpdesk', target: '' },
    { name: 'WebKit', href: '/login', target: '' },
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
                        <p className='font-medium'>ข้อมูลอาจมีการเปลี่ยนแปลง</p>
                    </div>                   
                    <div className='divide-y-2'>
                        <div>
                        </div>
                        <div className='pb-5'>
                        </div>
                    </div>
                    <div className='grid'>
                        <div className='text-xl pb-3 font-medium'>บริการจากคณะอักษรศาสตร์</div>
                        <div className=' py-1'>ข้อมูลยังไม่พร้อมใช้งาน</div>
                    </div>                                            
                        <div className='pb-5'>
                        </div>
                    <div className='grid'>
                        <div className='text-xl pb-3 font-medium'>บริการจากมหาวิทยาลัย</div>
                        <div className=' py-1'>ข้อมูลยังไม่พร้อมใช้งาน</div>
                    </div>
                        <div className='pb-5'>
                        </div>
                    <div className='grid'>
                        <div className='text-xl pb-3 font-medium'>บริการอื่น ๆ จากเพื่อนนิสิต</div>
                        <div className=' py-1'>ข้อมูลยังไม่พร้อมใช้งาน</div>
                    </div>
                        <div className='pb-5'>
                        </div>
                    <div className='grid'>
                        <div className='text-xl pb-3 font-medium'>บริการด้านวิชาการ</div>
                        <div className=' py-1'>ข้อมูลยังไม่พร้อมใช้งาน</div>
                    </div>
                        <div className='pb-5'>
                        </div>
                    <div className='grid'>
                        <div className='text-xl pb-3 font-medium'>บริการด้านสุขภาพ</div>
                        <div className=' py-1'>ข้อมูลยังไม่พร้อมใช้งาน</div>
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
    </div>
  )
}

export default ServiceDetail