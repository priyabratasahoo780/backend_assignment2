import {getPost} from "@/utils/post";

type PostId = { id: string }

type Props = {
   params: Promise<PostId>
}


export function generateStaticParams():PostId[]{
  return [{id: "1"}, {id : "2"}, {id: "4"}]
}


const StoreSettingPage = async ({params}: props) => {
   const {id} = await params

   const post = await getPost(id);

   return <p>StoreSettingDynamicPage {post.title}</p>;
}