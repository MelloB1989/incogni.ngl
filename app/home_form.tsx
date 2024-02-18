"use client";
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function HomeForm() {

    const [webhook, setWebhook] = useState('');

    return(
        <>
        <Toaster/>
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
              placeholder="Wirepush webhook ID"
              value={webhook}
              style={{color: 'white'}}
              onChange={(e) => setWebhook(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between pt-4">
            <button
              className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              type="button"
              onClick={async(e) => {
                e.preventDefault();
                if (webhook === '') {
                  toast.error('Please enter a valid webhook url');
                  return;
                }
                else {
                  await navigator.clipboard.writeText(`https://incogni.mellob.in/${webhook}`);
                  toast.success(`incogni.mellob.in/${webhook}`)
                  toast.success('Your Incogni Link has been created and copied!');
                }
              }}
            >
              Register
            </button>
          </div>
        </form>
        </>
    )
}