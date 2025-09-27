import HeroButton from "../Buttons/HeroButton"
import HeroButtonOutline from "../Buttons/HeroButtonOutline"

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[80vh] flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1684407616442-8d5a1b7c978e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXR5JTIwbWFrZXVwfGVufDB8fDB8fHww')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left space-y-6">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          Unleash Your{" "}
          <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
            True Beauty
          </span>
        </h1>

        <p className="text-gray-200 text-base sm:text-lg lg:text-xl max-w-xl mx-auto md:mx-0">
          Discover premium makeup essentials designed to bring out your natural
          glow. From lipsticks to foundations, we’ve got everything to enhance
          your look.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <HeroButton />
          <HeroButtonOutline />
        </div>
      </div>
    </section>
  )
}
