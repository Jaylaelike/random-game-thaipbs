import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPinIcon, Clock } from "lucide-react";
import Image from "next/image";

interface EventCardProps {
  eventNumber: number;
  date: string;
  time: string;
  location: string;
}

export function EventCard({
  eventNumber,
  date,
  time,
  location,
}: EventCardProps) {
  return (
    <Card className="mx-auto w-full max-w-2xl">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-blue-500 opacity-50 blur-sm"></div>
              <div className="relative rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-white shadow-lg">
                <span className="text-xs font-semibold uppercase tracking-wider">
                  หมายเลขของคุณ
                </span>
                <div className="text-2xl font-bold">
                  {String(eventNumber).padStart(4, "0")}
                </div>
              </div>
            </div>
          </div>
          <Badge className="bg-green-500 hover:bg-green-600">
            ลงทะเบียนแล้ว
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            กิจกรรมจับรางวัลผู้โชคดี เข้าร่วมอบรม Progira เบื้องต้น
          </h2>
          <p className="text-gray-600">
            ร่วมลุ้นรับของรางวัล และเซตหมอนสุดน่ารักและสุดพิเศษ
            เฉพาะสำหรับสมาชิกที่ลงทะเบียนเท่านั้น exclusive รอคุณอยู่ สมัครเลย!
          </p>
          <div className="rounded-lg bg-yellow-50 p-4">
            <p className="text-yellow-800">
              จะได้สิทธิ์ลุ้นรับ Giftset และ หูฟัง Blutooth สุดล้ำ
              สำหรับผู้โชคดี
            </p>
          </div>

      
            <div className="mt-4 flex justify-center">
              <Image
              src="https://res.cloudinary.com/satjay/image/upload/v1733721563/cxqnqrmly7ykkxcetml2.png"
              width={500}
              height={500}
              alt="Picture of the author"
              />
            </div>
         
        </div>

        <div className="grid gap-4 pt-4">
          <div className="flex items-center gap-2 text-gray-600">
            <CalendarIcon className="h-5 w-5" />
            <span>วันที่จัดกิจกรรม: {date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="h-5 w-5" />
            <span>เวลา: {time}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPinIcon className="h-5 w-5" />
            <span>สถานที่: {location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
