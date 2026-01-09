interface SkeletonLoaderProps {
  isDark: boolean;
  count?: number;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  isDark,
  count = 3,
}) => (
  <div className="space-y-3">
    {Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className={`h-20 rounded-2xl ${
          isDark ? "bg-gray-800" : "bg-gray-100"
        } animate-pulse`}
      />
    ))}
  </div>
);
