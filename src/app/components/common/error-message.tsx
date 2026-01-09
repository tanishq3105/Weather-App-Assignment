interface ErrorMessageProps {
  message: string;
  isDark: boolean;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  isDark,
}) => (
  <div
    className={`${
      isDark ? "bg-red-900/20 border-red-800" : "bg-red-50 border-red-200"
    } rounded-2xl border p-4 text-red-600`}
  >
    <p className="text-sm font-medium">{message}</p>
  </div>
);
