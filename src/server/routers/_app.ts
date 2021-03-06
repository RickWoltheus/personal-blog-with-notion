/**
 * This file contains the root router of your tRPC-backend
 */
 import { createRouter } from '../createRouter';

 import superjson from 'superjson';
import { postRouter } from './post';
 
 /**
  * Create your application's root router
  * If you want to use SSG, you need export this
  * @link https://trpc.io/docs/ssg
  * @link https://trpc.io/docs/router
  */
 export const appRouter = createRouter()
   /**
    * Add data transformers
    * @link https://trpc.io/docs/data-transformers
    */
   .transformer(superjson)
   /**
    * Merge `postRouter` under `post.`
    */
   .merge('post.', postRouter);
 
 export type AppRouter = typeof appRouter;