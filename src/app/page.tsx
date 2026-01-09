import { Sun, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Weather - Know what to expect",
  description:
    "Beautiful, accurate weather forecasts. Simple. Intuitive. Always there when you need it.",
};

export default function Home() {
  return (
    <div
      className="min-h-screen bg-white flex items-center justify-center px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)",
      }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-0 right-0 rounded-full blur-3xl opacity-40"
          style={{
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgb(96, 165, 250) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 rounded-full blur-3xl opacity-20"
          style={{
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgb(34, 211, 238) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-2xl mx-auto text-center space-y-12">
        <div
          className="flex justify-center"
          style={{ animation: "float 4s ease-in-out infinite" }}
        >
          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl blur-2xl opacity-20"
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
              }}
            />
            <div
              className="relative p-6 rounded-3xl"
              style={{
                background: "linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%)",
              }}
            >
              <Sun className="w-20 h-20 text-blue-500" strokeWidth={1.2} />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-light tracking-tight text-gray-950 leading-tight">
            The weather,
            <br />
            <span
              className="font-extralight block"
              style={{
                background: "linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              reimagined
            </span>
          </h1>
        </div>

        <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed max-w-lg mx-auto">
          Stop checking multiple apps. One beautiful, intuitive interface tells
          you everything you need to know.
        </p>

        <div className="pt-8">
          <Link
            href="/weather"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-white rounded-2xl font-medium transition-all duration-200 hover:shadow-xl active:scale-95"
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)",
            }}
          >
            <span>Try Now</span>
            <ArrowRight
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              strokeWidth={2}
            />
          </Link>
        </div>

        <div className="pt-8 space-y-4 text-sm text-gray-600">
          <div className="flex items-center justify-center gap-2">
            <div className="w-1 h-1 rounded-full bg-blue-500" />
            <span>Real-time accuracy</span>
            <div className="w-1 h-1 rounded-full bg-blue-500" />
          </div>
          <p className="font-light text-gray-500">
            Beautiful • Fast • Reliable
          </p>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-16px);
          }
        }
      `}</style>
    </div>
  );
}
