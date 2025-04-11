import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-sans-bold text-optum-blue mb-6">404</h1>
        <h2 className="text-2xl text-optum-blue mb-4">Page Not Found</h2>
        <p className="text-optum-blue/80 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link to="/" className="btn-primary">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
