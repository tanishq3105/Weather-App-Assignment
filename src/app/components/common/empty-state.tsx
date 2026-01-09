import { Cloud } from "lucide-react";

interface EmptyStateProps {
  isDark: boolean;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ isDark }) => {
  const cardClass = isDark
    ? "bg-gray-900 border-gray-800"
    : "bg-gray-50 border-gray-200";

  return (
    <div
      className={`${cardClass} rounded-2xl border p-12 text-center opacity-70`}
    >
      <Cloud className="w-12 h-12 mx-auto mb-3 opacity-50" />
      <p>Search for a city to see its weather forecast</p>
    </div>
  );
};
