import { Link } from 'react-router-dom';

interface SolutionCardProps {
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

const SolutionCard = ({
  title,
  description,
  imageUrl,
  ctaText,
  ctaLink
}: SolutionCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
      {/* Image */}
      <div className="aspect-[4/5] w-full relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h4 className="mb-3 text-optum-blue">{title}</h4>
        <p className="text-optum-blue/80 mb-5 flex-grow">{description}</p>
        <Link
          to={ctaLink}
          className="text-optum-blue font-sans-bold hover:text-optum-red transition-colors mt-auto"
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
};

export default SolutionCard;
