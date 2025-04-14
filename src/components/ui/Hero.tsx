import { Link } from 'react-router-dom';
import VideoBackground from "../layout/Images/Health2.mp4";

interface HeroProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  overlayColor?: string;
  textColor?: string;
}

const Hero = ({
  title,
  description,
  ctaText,
  ctaLink = '#',
  secondaryCtaText,
  secondaryCtaLink = '#',
  overlayColor = 'bg-optum-blue/80',
  textColor = 'text-white'
}: HeroProps) => {
  return (
    <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={VideoBackground}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayColor} z-10`}></div>

      {/* Content */}
      <div className="container relative z-20">
        <div className="max-w-3xl">
          <h1 className={`${textColor} mb-6 text-4xl md:text-5xl font-bold`}>{title}</h1>
          <p className={`${textColor} text-lg md:text-xl mb-8 max-w-2xl`}>{description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            {ctaText && (
              <Link
                to={ctaLink}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-xl text-sm px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 inline-block"
              >
                {ctaText}
              </Link>
            )}
            {secondaryCtaText && (
              <Link
                to={secondaryCtaLink}
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-semibold rounded-xl text-sm px-6 py-3 text-center dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800 inline-block"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;