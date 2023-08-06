import React from 'react'
import '../components/MS.css'
import '../components/Navbar.css'

const Containeranm = () => {
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
                                  <a className='text-7xl text-[#F8E1EA]'>ข่าวสาร/ประชาสัมพันธ์</a>    
                              </div>
                              <div class="col-span-1 ">
                                  <div className='flex text-xl font-semibold mt-2 text-[#F8E1EA] mb-0'>
                                    ข่าวสารและงานประชาสัมพันธ์ทั้งหมด รวมอยู่ไว้ที่หน้านี้
                                  </div>
                              </div>
                          </div>
                      </div>                    
                  </div>            
        </div>
    </div>
  )
}

export default Containeranm