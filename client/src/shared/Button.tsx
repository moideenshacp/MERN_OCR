import { Upload } from "lucide-react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-colors flex-1
          ${
            disabled
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }
        `}
      onClick={onClick}
      disabled={disabled}
    >
      <Upload className="h-5 w-5" />
      <span>{label}</span>
    </button>
  );
};

export default Button;
