import Image from 'next/image'
import Content1 from './components/Content1'
import ArticleContent1 from './components/ArticleContent1'
import ArticleContent2 from './components/ArticleContent2'
import News from './components/News'

export default function Home() {
  return (
    <>
      <Content1 />
      <News />
      <ArticleContent1 />
      <ArticleContent2 />
    </>
  )
}
