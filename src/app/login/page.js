import React from 'react';
import './Login.css'
import Link from 'next/link';

function Login() {
  return (
    <div>
      <div className='flex flex-col min-h-screen items-center justify-center'>
      <div className="col-span-3">
          <img src= 'https://www.arts.chula.ac.th/goz/asset/banner/8dCOiId6lJaxhgVS7UjcEjGy4mpFI4Zg.jpg' className='ssa'>
          </img>
      </div>
        <div class="flex flex-col">
          <div className='h-fit bg-white shadow-lg w-96'>
            <div className='flex flex-col'>
                <div className='m-5 flex items-center justify-center'>
                  <img src='https://www.arts.chula.ac.th/goz/asset/icons/ab-nav.png' className='h-10 items-center justify-center'></img>
                </div>
                <div className='mx-5 my-2 flex items-center justify-center'>
                  <p className='text-2xl'>GOZ Portal Login</p>
                </div>
                <div className='mx-5 mt-3'>
                  <span class="block text-sm font-medium text-slate-700">KeyID</span>
                  <input type="text" placeholder='ใส่ KeyID ที่มี' class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 font-mono text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-[#1F1F1F] focus:ring-1 focus:ring-[#1F1F1F]
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                  "/>
                </div>
                <div className='mx-5 mt-3'>
                  <span class="block text-sm font-medium text-slate-700">Token</span>
                  <input type="password" placeholder='ใส่ Token ที่มี' class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 font-mono text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-[#1F1F1F] focus:ring-1 focus:ring-[#1F1F1F]
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                  "/>
                </div>
                <div className='m-5 flex items-center justify-center'>
                  <div className='flex px-2 py-1 mx-2 text-sm border-2 btn-active underline-thickness-1 hover:underline hover:bg-[#1F1F1F] hover:text-[#F2F2F2]
                    cursor-pointer transition-colors duration-300'>เข้าสู่ระบบ</div>
                    <div className='flex px-2 py-1 mx-2 text-sm border-2 btn-active underline-thickness-1 hover:underline hover:bg-[#1F1F1F] hover:text-[#F2F2F2]
                    cursor-pointer transition-colors duration-300'>ลืม Token
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 ml-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                        </div>
                </div>
                
            </div>
            <div className='flex items-center justify-center'>
                    <a className='flex px-2 text-sm w-full items-center justify-center underline-offset-4 underline-thickness-1 border-2 border-[#1F1F1F] text-[#F2F2F2] bg-[#1F1F1F] hover:underline
                    cursor-pointer' href='/'>
                      <div className='mr-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                      </svg>
                      </div>
                      กลับหน้าแรก
                    </a>
                </div>
          </div>
        </div>
        <footer className='mx-10'>
        <div className='mt-5 text-[#F2F2F2] items-center'>
          Copyright © 2023 Artsgoz. สงวนสิทธิ์ทุกประการ
        </div>
        {/* <div className='text-[#F2F2F2] items-center'>WebKit v1.0 – GOZAuth/WEB 1.0 @ STAGING ENVIRONMENT</div> */}
      </footer>
      </div>
    </div>
  );
}

export default Login;