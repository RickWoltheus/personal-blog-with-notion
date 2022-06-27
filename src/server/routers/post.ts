

/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */
import { z } from 'zod';
import { createRouter } from '../createRouter';
import { notion } from '../notion';

export const postRouter = createRouter()
.query('getPage', {
    input: z.object({
        id: z.string()
    }),
    async resolve({ input }) {
        const resp = await notion.getPage(input.id)
console.log('my resp', resp)
        return resp
    }
})
