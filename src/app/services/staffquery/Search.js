'use client'
import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SL';
import './IDS.css';
import '../../components/MS.css';

function Search({ details }) {

  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false); 

  const filteredPersons = details.filter(
    person => {
      return (
        person
        .abbr
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        person
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return (
        <Scroll>
          <SearchList filteredPersons={filteredPersons} />
        </Scroll>
      );
    }
  }

  return (
    <>
    <div className='grid grid-cols-1'>
      <div className="grid grid-cols-3 min-h-screen">
          <div className="col-span-3">
            <img src='https://www.arts.chula.ac.th/goz/asset/banner/zXLYJSTzyFG5oRX88cPyMpavATWCM7ZN.jpg' className='ssa'>
            </img>
          </div>
          <div className="col-span-3">
              <div class="grid grid-rows-2 gap-2 mx-10">
                  <div class="col-span-3">
                      <div className='text-7xl text-[#F8E1EA]'>ค้นหารายชื่ออาจารย์</div>    
                  </div>
                  <div class="col-span-1 ">
                      <div className='flex text-6xl w-full font-semibold mt-2 underline text-[#F8E1EA] mb-0'>
                        <input 
                          className="mt-1 block w-full px-3 py-2 border-2 bg-[#f2f2f2] text-[#1f1f1f] border-[#F8E1EA] text-sm placeholder-[#1f1f1f]
                          focus:outline-none focus:border-[#F8E1EA] focus:ring-1 focus:ring-[#F8E1EA]
                          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                          type = "search"        
                          placeholder='พิมพ์ ชื่อ/ชื่อย่อ ที่นี่'
                          onChange = {handleChange}
                        />
                      </div>
                  </div>
                  <div class="col-span-3">
                    <div className='grid grid-cols-6 gap-2 text-xl py-2 text-[#f8e1ea] font-bold'>
                      <div className='flex col col-span-fit justify-items-start'>
                          <div>ชื่อย่อ</div>
                      </div>
                      <div className='flex col col-span-3 justify-items-start'>
                          <div>ชื่ออาจารย์</div>
                      </div>
                      <div className='flex col col-span-2 justify-items-start'>
                          <div>สาขาวิชา</div>
                      </div>
                    </div>
                    <div className='col-span-4 mt-2 text-[#f8e1ea] text-lg'>
                      {searchList()}
                    </div>
                  </div>
              </div>
          </div>                    
      </div>                
    </div>
    </>
  );
}

export default Search;