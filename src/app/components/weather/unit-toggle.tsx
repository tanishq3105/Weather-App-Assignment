interface UnitToggleProps {
  isCelsius: boolean;
  setIsCelsius: (value: boolean) => void;
}

export const UnitToggle: React.FC<UnitToggleProps> = ({
  isCelsius,
  setIsCelsius,
}) => (
  <div className="flex items-center gap-2 mt-4">
    <button
      onClick={() => setIsCelsius(true)}
      className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
        isCelsius ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
      }`}
    >
      °C
    </button>
    <button
      onClick={() => setIsCelsius(false)}
      className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
        !isCelsius ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
      }`}
    >
      °F
    </button>
  </div>
);
