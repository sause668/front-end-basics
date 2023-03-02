import HomeContent from '@/components/HomeContent'
import HomeContentBlock from '@/components/HomeContentBlock'
import HomeTitle from '@/components/HomeTitle'
import Head from 'next/head'
import { mainDir } from '@/lib/directories/mainDir'
import Footer from '@/components/Footer'

export default function Home() {

  const homeKey = 'home';

  return (
    <>
      <Head>
        <title>Front End Basics</title>
        {/* <meta name="viewport" content="initial-scale=1, width=device-width" /> */}
      </Head>
      <div style={{backgroundColor: '#2962ff', height: '200%', pb: ''}}>
        <HomeTitle 
          title={'Front End Basics'} 
          dis={'A Collection of References to Help With Web Site creation for Beginners'} 
        />
        <HomeContent>
        {mainDir.pageDir.map((page)=>(
          <HomeContentBlock page={page} key={`${homeKey}${page.id}`} />
        ))}
        </HomeContent>
        <Footer/>
      </div>
      

    </>
  )
}
