"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import config from "@/config";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

export default function SendForm({slug}: {slug: string}){

    const [message, setMessage] = useState<string>("");

    const send_incogni = async () => {
        try{
            const res = await axios.get(`https://wirepusher.com/send?id=${slug}&title=${"New message from Incogni!"}&message=${message}&type=Default&image_url=${config.LOGO_WHITE}`);
            toast.success("Message sent successfully!");
        }catch(e){
            toast.error("Failed to send the message!");
        }
    };

    return(
        <>
          <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Send the message!</CardTitle>
        <CardDescription>We do not store any of the messages!</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e)=>{
            e.preventDefault();
            send_incogni();
        }}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" >Your message</Label>
              <Input id="name" placeholder="My secret message" value={message} onChange={(e)=>{setMessage(e.target.value)}} />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Create your Incogni</Button>
        <Button onClick={(e)=>{
            e.preventDefault();
            send_incogni();
        }}>Send 😏</Button>
      </CardFooter>
    </Card>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </>
    )
}