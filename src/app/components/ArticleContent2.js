import React from 'react'
import './MS.css'

const ArticleContent2 = () => {
  return (
    <div>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='grid'>
                <div className='grid grid-cols-12'>
                    <div className='grid'>
                        <div className='flex bg-[#f2f2f2] text-[#1f1f1f] items-center justify-center '>
                            <span className='-rotate-90 text-lg whitespace-nowrap tracking-widest underline decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer'>
                                Repos
                            </span>                    
                        </div>
                    </div>             
                    <div className='col-span-11 bg-[#f2f2f2] text-[#1f1f1f] border-gray-200 border-l-2'>   
                        <div className='m-5'>
                            <div className='text-2xl font-medium p-5'>AKSORN Repository</div>
                            <div class="max-w-3xl mx-5 mt-4 sm:mt-8 lg:mt-4">
                                <div className='grid grid-cols-2'>
                                    <div>
                                    <a
                                        className="flex items-center justify-center px-2 py-1 border-2 btn-active underline-thickness-1 hover:underline hover:bg-[#1F1F1F] hover:text-[#F2F2F2]
                                        cursor-pointer transition-colors duration-300"
                                        >
                                        เข้าสู่ระบบ
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-1">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                    </a>
                                    </div>
                                    <div>
                                    <a className="flex items-center justify-center px-2 py-1 border-2 btn-active underline-thickness-1 hover:underline hover:bg-[#1F1F1F] hover:text-[#F2F2F2]
                                        cursor-pointer transition-colors duration-300"
                                        >
                                        เข้าสู่ระบบ
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-1">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                    </a>
                                    </div>
                                </div>                                
                            </div>
                        </div>                                        
                    </div>
                </div>            
            </div>
            <div className='grid grid-cols-12'> 
                <div className='grid'>
                    <div className='flex bg-[#1f1f1f] text-[#f2f2f2] items-center justify-center'>
                        <span className='-rotate-90 text-lg underline whitespace-nowrap tracking-widest decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer'>
                            Site
                        </span>                    
                    </div>
                </div>
                <div className='col-span-11 bg-[#1f1f1f] text-[#f2f2f2] border-[#333333] border-l-2'>   
                        <div className='m-5'>
                            <div className='text-2xl font-medium p-5'>หัวข้ออื่น ๆ</div>
                            <div class="max-w-3xl mx-5 mt-4 sm:mt-8 lg:mt-4">                                
                            </div>
                        </div>                                        
                    </div>
                
            </div>
        </div>
    </div>
  )
}

export default ArticleContent2