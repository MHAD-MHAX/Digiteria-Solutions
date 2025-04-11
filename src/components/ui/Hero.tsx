import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
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
  backgroundImage = 'https://ext.same-assets.com/4069049614/3026743253.webp',
  overlayColor = 'bg-optum-blue/80',
  textColor = 'text-white'
}: HeroProps) => {
  return (
    <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayColor} z-10`}></div>

      {/* Content */}
      <div className="container relative z-20">
        <div className="max-w-3xl">
          <h1 className={`${textColor} mb-6`}>{title}</h1>
          <p className={`${textColor} text-lg md:text-xl mb-8 max-w-2xl`}>{description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            {ctaText && (
              <Link to={ctaLink} className="btn-primary inline-block text-center">
                {ctaText}
              </Link>
            )}
            {secondaryCtaText && (
              <Link to={secondaryCtaLink} className="btn-secondary inline-block text-center">
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
