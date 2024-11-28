import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPinIcon, Clock } from "lucide-react";

interface EventCardProps {
  eventNumber: number;
  date: string;
  time: string;
  location: string;
}

export function EventCard({ eventNumber, date, time, location }: EventCardProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-sm">
            หมายเลขของคุณคือ: {eventNumber}
          </Badge>
          <Badge className="bg-green-500 hover:bg-green-600">ลงทะเบียนแล้ว</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">ร่วมลุ้นรับตุ๊กตาจับจับ ตุ๊กตาพวงกุญแจจับจับ</h2>
          <p className="text-gray-600">
            และเซตปากกาสุดน่ารักและสุดพิเศษ เฉพาะสำหรับสมาชิกเท่านั้น ความน่ารักสุด exclusive รอคุณอยู่ สมัครเลย!
          </p>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-yellow-800">
              จะได้สิทธิ์ลุ้นรับตุ๊กตาจับจับตัวใหญ่ 4 รางวัล, ตุ๊กตาพวงกุญแจจับจับ 12 รางวัล และเซตปากกาสุดน่ารัก 20 รางวัล
            </p>
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