import Footer from "@/components/footer";
import SendForm from "./send_form";
import Nav from '@/components/nav';

interface PageProps {
    params: {
      user_slug: string;
    };
  }

export default function Page({ params }: PageProps){

    const { user_slug } = params;

    return(
        <div className="h-screen grid place-items-center bg-cover bg-fixed" style={{backgroundImage: 'url(https://raw.githubusercontent.com/tailwindtoolbox/Rainblur-Landing-Page/main/header.png)'}}>
            <Nav/>
            <SendForm slug={user_slug}/>
            <Footer/>
        </div>
    )
}