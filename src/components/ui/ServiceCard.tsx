import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  ctaText?: string;
  ctaLink?: string;
  bgColor?: string;
  textColor?: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  ctaText = 'Find out more',
  ctaLink = '#',
  bgColor = 'bg-white',
  textColor = 'text-optum-blue'
}: ServiceCardProps) => {
  return (
    <div className={`${bgColor} rounded-lg p-6 h-full flex flex-col shadow-sm transition-all hover:shadow-md`}>
      {/* Icon */}
      {icon && <div className="mb-4">{icon}</div>}

      {/* Content */}
      <div className="flex-grow">
        <h4 className={`${textColor} mb-3 text-xl font-sans-bold`}>{title}</h4>
        <p className={`${textColor}/80 mb-5`}>{description}</p>
      </div>

      {/* CTA */}
      {ctaText && (
        <Link
          to={ctaLink}
          className={`${textColor} font-sans-bold hover:text-optum-red transition-colors mt-4 inline-block`}
        >
          {ctaText}
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;
