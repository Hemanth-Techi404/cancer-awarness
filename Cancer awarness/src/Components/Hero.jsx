import { Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-white to-rose-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Heart className="w-16 h-16 text-rose-500" fill="currentColor" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Cancer Awareness & Support
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Together we stand strong. Every step, every story, every moment of hope matters in our journey toward a cancer-free future.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
          <img
            src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Cancer awareness and support"
            className="w-full h-[400px] sm:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <p className="text-2xl font-semibold">Hope. Strength. Courage.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
