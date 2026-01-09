interface CardProps {
  children: React.ReactNode;
  isDark: boolean;
  className?: string;
  isHoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  isDark,
  className = "",
  isHoverable = false,
}) => {
  const cardClass = isDark
    ? "bg-gray-900 border-gray-800"
    : "bg-gray-50 border-gray-200";
  const hoverClass = isHoverable ? "hover:shadow-xl transition-all" : "";

  return (
    <div
      className={`${cardClass} rounded-2xl border p-4 ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
};
