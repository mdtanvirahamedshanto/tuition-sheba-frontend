import { GraduationCap } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="animate-pulse">
        <GraduationCap size={48} className="text-primary-600 dark:text-primary-400" />
      </div>
      <h2 className="mt-4 text-xl font-medium text-gray-700 dark:text-gray-300">
        Loading...
      </h2>
      <div className="mt-6 w-48 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-primary-600 dark:bg-primary-400 rounded-full animate-[loading_1.5s_ease-in-out_infinite]"></div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% {
            width: 0%;
            margin-left: 0;
          }
          50% {
            width: 100%;
            margin-left: 0;
          }
          100% {
            width: 0%;
            margin-left: 100%;
          }
        }
      `}</style>
    </div>
  );
}