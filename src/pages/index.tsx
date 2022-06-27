import type { NextPage } from 'next'
import Head from 'next/head'
import { NotionRenderer } from 'react-notion-x'

import { trpc } from '../utils/trpc'


const Home: NextPage = () => {
  const {data} = trpc.useQuery(['post.getPage', { id: '130833704f6b4981b59d56d85f6d528c' }])
  return data ? <NotionRenderer recordMap={data} fullPage={true} darkMode={false} /> : null
}

export default Home
