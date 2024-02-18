import Image from "next/image";
import config from '@/config';
import Nav from '@/components/nav';
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n      @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");\n\n      html {\n        font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n      }\n    '
    }}
  />
  <body className="leading-normal tracking-normal text-indigo-400 m-6 bg-cover bg-fixed" style={{'backgroundImage': 'url(https://raw.githubusercontent.com/tailwindtoolbox/Rainblur-Landing-Page/main/header.png)'}}>
  <div className="h-full">
    {/*Nav*/}
    <Nav/>
    {/*Main*/}
    <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      {/*Left Col*/}
      <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
          Start sending{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
            Anonynomous{" "}
          </span>
          messages!
        </h1>
        <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
          Say bye to NGL! Welcome to Incogni!
        </p>
        <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-blue-300 py-2 font-bold mb-2"
              htmlFor="emailaddress"
            >
              Enter your webhook url to get registered
            </label>
            <input
              className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              id="emailaddress"
              type="text"
              placeholder="webhook"
            />
          </div>
          <div className="flex items-center justify-between pt-4">
            <button
              className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="button"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      {/*Right Col*/}
      <div className="w-full xl:w-3/5 p-12 overflow-hidden">
        <img
          className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
          src={config.LOGO_URL}
        />
      </div>
      {/*Footer*/}
      <Footer/>
    </div>
  </div>
  </body>
</>
  );
}
