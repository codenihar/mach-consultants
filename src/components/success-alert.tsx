import React from "react";
import { CircleCheck } from "lucide-react";

type SuccessAlertProps = {
  message: string;
  duration?: number;
};

export const SuccessAlert = ({
  message,
  duration = 2000,
}: SuccessAlertProps) => {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="rounded-md bg-green-50 p-4 shadow-lg">
        <div className="flex">
          <div className="flex-shrink-0">
            <CircleCheck
              className="h-5 w-5 text-green-400"
              aria-hidden="true"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-green-800">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
