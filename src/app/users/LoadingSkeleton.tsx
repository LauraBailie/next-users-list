export default function LoadingSkeleton({ count = 6 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 animate-pulse"
        >
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-gray-300 dark:bg-gray-700 rounded-full" />
            <div className="flex-1 space-y-3">
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
              <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-1/2" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}