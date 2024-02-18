import {NextRequest, NextResponse} from "next/server";
import { createMessage } from "@/helpers/graphql";
import axios from "axios";
import config from "@/config";

export async function POST (request: NextRequest){
    const data = await request.json()
    try{
      const id = await createMessage({
        mgs: {
          id: Math.random().toString(36).substring(7),
          message: data.message,
          user_slug: data.slug,
          metadata_ip: data.ip,
          metadata_location: data.location,
          metadata_agent: data.agent,
          message_timestamp: new Date().toISOString()
        }
      });
      const res = await axios.get(`https://wirepusher.com/send?id=${data.slug}&title=${"New message from Incogni!"}&message=${data.message}&type=Default&image_url=${config.LOGO_WHITE}&action=${`https://incogni.mellob.in/message/${id.createIncogniMessage.id}`}`);
      return NextResponse.json({success: true, id});
    } catch(e){
      return NextResponse.json({success: false, error: e});
    }
}