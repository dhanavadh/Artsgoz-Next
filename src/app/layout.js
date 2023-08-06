import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'Artsgoz',
  description: 'เว็บไซต์ Artsgoz โฉมใหม่ พร้อมให้บริการแล้ววันนี้ นิสิตสามารถเข้าใช้งานเพื่อดูรายละเอียดเกี่ยวกับกิจกรรมต่าง ๆ ค้นหาชื่ออาจารย์ และยังสามารถดาวน์โหลดไฟล์ต่าง ๆ ได้อีกด้วย',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
