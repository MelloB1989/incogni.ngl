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

    const share = async () => {
      const node = document.getElementById('template');
      if (node) {
        domtoimage.toBlob(node)
          .then((blob) => {
            const filesArray = [
              new File(
                [blob],
                "IncogniMessage.png",
                {
                  type: blob.type,
                  lastModified: new Date().getTime()
                }
             )
            ];
            const shareData = {
              files: filesArray,
            };
  
             navigator.share(shareData);
          })
          .catch((error) => {
            toast.error('oops, something went wrong!', error);
          });
    }
  }

    return(
        <>
          <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Incogni Message</CardTitle>
        <CardDescription>Timestamp: {data.message_timestamp}</CardDescription>
        <CardDescription>Sender IP: {data.metadata_ip}</CardDescription>
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
        <Button onClick={() => share()}>Reply on Insta</Button>
      </CardFooter>
    </Card>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
<br/><br/><br/>
    <div id="template">
  <div className="p-6 m-4 border border-orange-900 rounded-full bg-gray-900 text-gray-100 flex items-center space-x-4">
    <img src={config.LOGO_URL} alt="Incogni Logo" className="w-16 h-16" />
    <div>
      <p className="text-2xl font-bold">{data.message}</p>
      <p className="text-sm text-gray-500 mt-2">Powered by Incogni NGL</p>
    </div>
  </div>
</div>

        </>
    )
}
/*

    secondHeader("dm","/inbox/")

    var dm_options_cont = document.querySelector(".dm-options-cont")
    function toggleDmOptions(){
      dm_options_cont.classList.toggle("hide")
    }

    var elem = document.querySelector(".dms-bowl");

    html2canvas(elem,{backgroundColor:"#060606"}).then(canvas => {
        var myImage = canvas.toDataURL("image/png");
        var img = new Image();
        img.src = myImage;
        img.style.display = "none";
        img.id = "shareableImg";
        document.body.appendChild(img);
        elem.style.display = 'none'
    })

    document.getElementById("dm-story-btn").addEventListener("click", function (){
      var simg = document.getElementById("shareableImg")
      shareImage(simg.src,"dm.png");
    });

    // textarea
    const tx = document.getElementsByTagName("textarea");
    for (let i = 0; i < tx.length; i++) {
      tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
      tx[i].addEventListener("input", OnInput, false);
    }
    function OnInput() {
      this.style.height = 0;
      this.style.height = (this.scrollHeight) + "px";
    }

  */