import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '../ui/button';

interface ErrorMessageProps {
  title?: string;
  message?: string;
  error?: Error | unknown;
  onRetry?: () => void;
  fullScreen?: boolean;
}

export function ErrorMessage({
  title = 'Error',
  message,
  error,
  onRetry,
  fullScreen = false
}: ErrorMessageProps) {
  const containerClass = fullScreen
    ? 'flex items-center justify-center min-h-screen'
    : 'flex items-center justify-center min-h-[400px]';

  const errorMessage = message || (error instanceof Error ? error.message : 'An unexpected error occurred');

  return (
    <div className={containerClass}>
      <div className="text-center max-w-md px-4">
        <div className="flex justify-center mb-4">
          <AlertCircle className="h-12 w-12 text-destructive" />
        </div>
        <h3 className="text-destructive font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">
          {errorMessage}
        </p>
        {onRetry && (
          <Button onClick={onRetry} variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
        )}
      </div>
    </div>
  );
}
