import Image from 'next/image'
import ServiceDetail from './ServiceDetail'
import ServiceHeadings from './ServiceHeadings'

export default function Home() {
  return (
    <>
      <ServiceHeadings />
      <ServiceDetail />
    </>
  )
}
