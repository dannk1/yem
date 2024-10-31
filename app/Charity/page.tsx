import { Progress } from "@/components/ui/progress";
import { Heart } from "lucide-react";

export default function Charity() {
  const donationGoal = 1000000;
  const collectedAmount = 0;

  const donationProgress = (collectedAmount / donationGoal) * 100;

  return (
    <section className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-24">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="flex items-center mb-4 sm:mb-6">
            <Heart className="text-red-500 w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Fund us for a better future
            </h1>
          </div>

          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-600 mb-3 sm:mb-4">
            &quot;Young Engineers Mongolia&quot;
          </h2>

          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            &quot;Young Engineers Mongolia&quot; байгууллага нь залуучуудын
            удирдсан байгууллага бөгөөд бид ирээдүйн Монголын инженерийн ажлын
            хүчийг нэмэгдүүлэх алсын хараатайгаар тууштай, хүчин төгс ажиллаж
            байна. Бидний ажлын урсгалыг нэмэгдүүлж, юм хийе гэсэн залуучуудаа
            дэмжих хүсэлтэй байвал доор дансаар бидэнд хандив өргөөрэй.
          </p>

          <div className="mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">
              Donation Progress
            </h3>
            <Progress value={donationProgress} className="h-3 sm:h-4" />
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              {donationProgress}% of our goal reached
            </p>
          </div>

          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              Donation Account
            </h3>
            <div className="flex items-center">
              <p className="text-xl sm:text-2xl font-bold text-orange-600 mb-1">
                5112419859
              </p>
            </div>
            <p className="text-base sm:text-lg text-gray-700">
              Мөнхбатын Болормаа
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}