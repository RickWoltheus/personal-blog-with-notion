import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { NotionRenderer } from 'react-notion-x'
import { trpc } from '../utils/trpc'


const Post: NextPage = () => {
    const router = useRouter()
    const { post } = router.query
    const { data } = trpc.useQuery(['post.getPage', { id: post as string }])

    return data ? <NotionRenderer recordMap={data} fullPage={true} darkMode={false} /> : null
}

export default Post
