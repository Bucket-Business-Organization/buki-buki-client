import { useState } from "react";
import { FaTimes } from "react-icons/fa";

interface DefaultModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const DefaultModal: React.FC<DefaultModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  if (typeof window !== "undefined" && !isMounted) {
    setIsMounted(true);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {isMounted && (
        <div
          className="fixed top-0 left-0 w-full h-full overflow-y-auto bg-black bg-opacity-50 z-40 flex justify-center items-center"
          onClick={onClose}
        >
          <div
            className="bg-white w-96 rounded-lg max-w-full mx-auto p-6 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex  justify-end w-full">
              <h3 className="sr-only">{title}</h3>
            </div>
            <div className="px-3 flex flex-col items-center justify-center">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DefaultModal;
