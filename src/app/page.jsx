"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import { useSession } from "next-auth/react";

export default function Home() {

  const {data: session} = useSession();

  return (
    <main>
      <Navbar session={session}/>
      <div className="container mx-auto">
        {/* <h3 className="my-3 text-4xl">Welcome to D4C Homepage</h3> */}
        <Image src="/d4cbanner.png" width={1900} height={1900}/>
        <h1 className="text-3xl my-4 font-bold text-center">ประตูแมวอัจฉริยะ</h1>
        <h5 className="text-2xl my-3 text-center">ประตูอัจฉริยะสำหรับสัตว์เลี้ยง ให้ความสะดวกสบายและคลายความกังวลแก่เจ้าของสัตว์</h5>
        <h1 className="text-3xl my-4 font-bold text-center">ผลิตภัณฑ์ของเรา</h1>
        <div className="flex mt-10">
          <Image className="ml-80" src="/animal.png" width={180} height={180}/>
          <div className="ml-10">
            <h5 className="text-2xl my-3">ประตูแมวอัจฉริยะ</h5>
            <h4 className="text-xl my-3">ประตูที่เปิด-ปิดอัตโนมัติโดยการตรวจจับชิปจากปลอกคอ ซึ่งจะทำให้สัตว์ตัวอื่นๆเข้ามาไม่ได้</h4>
            <h4 className="text-xl my-3">ราคา:17,800 บาท </h4>
          </div>
        </div>
        <div className="flex mt-5">
          <Image className="ml-80" src="/cat-collar.png" width={180} height={180}/>
          <div className="ml-10">
            <h5 className="text-2xl my-3">ชิป</h5>
            <h4 className="text-xl my-3">แท็กสำหรับปลอกคอสัตว์ มีหน้าที่สแกนประตูทำให้สัตว์ของคุณเข้า-ออกบ้านได้อย่างอิสระ</h4>
            <h4 className="text-xl my-3">ราคา:200 บาท </h4>
          </div>
        </div>
        
        
        <h1 className="text-3xl my-4 font-bold text-center">การสั่งซื้อและบริการ</h1>
        <div className="flex w-100 justify-center">
          <div className="mx-5">
            <Image src="/message.png" width={100} height={100}/>
            <h4 className="text-xl my-3">ติดต่อเราผ่าน</h4>
            <div className="flex my-2">
              <Image src="/fb.png" width={40} height={40}/>
              <h4 className="text-xl my-3 mx-3">Door For Cat</h4>
            </div>
            <div className="flex my-2">
              <Image src="/phone-call.png" width={40} height={40}/>
              <h4 className="text-xl my-3 mx-3">0998876543</h4>
            </div>
            
          </div>
          <div className="mx-5">
            <Image src="/pin.png" width={100} height={100}/>
            <h4 className="text-xl my-3">แจ้งรายละเอียดคำสั่งซื้อ <br />และสถานที่จัดส่ง</h4>
          </div>
          <div className="mx-5">
            <Image src="/baht.png" width={100} height={100}/>
            <h4 className="text-xl my-3">จ่ายเงินมัดจำและจ่ายเต็มหลังจากเราไปติดตั้งให้ <br />*บริการติดตั้งฟรี!</h4>
          </div>
          <div className="mx-5">
            <Image src="/delivery.png" width={100} height={100}/>
            <h4 className="text-xl my-3">รอรับสินค้าจากทางเรา</h4>
          </div>
        </div>
      

        <h1 className="text-3xl my-4 font-bold text-center">ติดต่อเรา</h1>
        <div className="flex justify-center">  
          <div className="mx-5">
            <Image src="/fb.png" width={100} height={100}/>
          <h4 className="text-xl my-3">Facebook</h4>
          </div>
          <div className="mx-5">
            <Image src="/tiktok.png" width={100} height={100}/>
            <h4 className="text-xl my-3 pl-5">Tiktok</h4>
          </div>
          <div className="mx-5">
            <Image src="/phone-call.png" width={100} height={100}/>
            <h4 className="text-xl my-3">0998876543</h4>
          </div>
        </div>
        <div className="flex justify-center">
          <a href='/order' className="text-2xl my-3 font-bold hover:text-blue-500">สั่งซื้อ</a>
        </div>
        
      </div>
    </main>
  );
}
