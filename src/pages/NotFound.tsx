
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center max-w-md px-4">
        <div className="text-8xl font-bold text-primary mb-6">404</div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Button asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
