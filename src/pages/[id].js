import Nav from '@/components/Nav';
import PageContent from '@/components/PageContent';
import PageNav from '@/components/PageNav';
import { mainDir } from '@/lib/directories/mainDir';
import { useMediaQuery } from '@mui/material';
import { getAllDirIds } from '@/lib/directoryFunctions';
import { getDir } from '@/lib/directoryFunctions';
import Head from 'next/head'



export async function getStaticPaths() {
  const paths = getAllDirIds(mainDir);
  return {
    paths,
    fallback: false,
  };
}
  
export async function getStaticProps({ params }) {
  const pageDirIndex = getDir(params.id);
  return {
    props: {
      pageDirIndex,
    },
  };
}  

export default function Table({pageDirIndex}) {

    const mobile = useMediaQuery('(min-width:1000px)');

    return (
        <div style={{backgroundColor: '', height: '100%', width: '100%', position:'absolute', zIndex:-1, display: 'flex'}}>
            <Head>
            <title>{mainDir.pageDir[pageDirIndex].title}</title>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <Nav mobile={mobile} mainDir={mainDir} pageDirIndex={pageDirIndex}/>
            <PageNav mobile={mobile} page={mainDir.pageDir[pageDirIndex]}/>
            <PageContent mobile={mobile} page={mainDir.pageDir[pageDirIndex]}/>
        </div>
    );
}