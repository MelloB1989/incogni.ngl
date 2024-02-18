import Nav from '@/components/nav';
import Footer from "@/components/footer";
import Card from "./card";
import { getMessage } from '@/helpers/graphql';

export default async function MessageDetails({params}: {params: {message_id: string}}){

    const message_id = params.message_id;
    const data = await getMessage({id: message_id});

    return(
        <div className="h-screen grid place-items-center bg-cover bg-fixed" style={{backgroundImage: 'url(https://raw.githubusercontent.com/tailwindtoolbox/Rainblur-Landing-Page/main/header.png)'}}>
            <Nav/>
            <Card data={data}/>
            <Footer/>
        </div>
    )
}
/*<div>
            <h1>Message Details</h1>
            <a href="instagram://story-camera">Reply to NGL</a>
        </div>*/