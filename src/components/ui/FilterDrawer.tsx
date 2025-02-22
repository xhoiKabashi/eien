import { X } from "lucide-react";

export const FilterDrawer = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out w-full`}
    >
      <div className="fixed inset-0" onClick={onClose} />
      <div className="relative w-80 h-full bg-white shadow-lg">
        <div className=" p-5">
          <X  onClick={onClose}/>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
