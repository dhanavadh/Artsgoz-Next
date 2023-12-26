import Image from 'next/image'
import Content1 from './components/Content1'
import ArticleContent1 from './components/ArticleContent1'
import ArticleContent2 from './components/ArticleContent2'
import News from './components/News'
import Banner1 from './lookup/LookUpContent1-banner'

export default function Home() {
  return (
    <>
      <Banner1 />
      {/* <Content1 /> */}
      <News />
      <ArticleContent1 />
      <ArticleContent2 />
    </>
  )
}
