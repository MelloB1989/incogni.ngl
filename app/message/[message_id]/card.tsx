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
import { Message } from "@/types/global";
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

export default function SendForm({data}: {data: Message}){

    const downloadImage = () => {
        const node = document.getElementById('template');
      
        if (node) {
          domtoimage.toBlob(node)
            .then((blob) => {
              saveAs(blob, 'template.png');
            })
            .catch((error) => {
              console.error('oops, something went wrong!', error);
            });
        } else {
          console.error('Could not find element with id "template"');
        }
      };

    return(
        <>
          <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Incogni Message</CardTitle>
        <CardDescription>Timestamp: {data.message_timestamp}</CardDescription>
        <CardDescription>Sender Location: {data.metadata_location}</CardDescription>
        <CardDescription>Sender agent: {data.metadata_agent}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" >Message: {data.message}</Label>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={(e)=>{
downloadImage();
        }}>Download template</Button>
        <Button onClick={() => window.location.href = 'instagram://story-camera'}>Reply on Insta</Button>
      </CardFooter>
    </Card>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
<br/><br/><br/>
<div id="template">
<Card className="w-[350px] place-items-center">
      <CardHeader>
        <CardTitle>Message: {data.message}</CardTitle>
      </CardHeader>
      <br/><br/>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4 place-items-center">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" >Powered by Incogni NGL</Label>
              <img
          width="120px"
          src={config.LOGO_URL}
        />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
        </>
    )
}