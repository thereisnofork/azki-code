import { ReactNode } from "react";
import BaseButton from "./BaseButton";

type TBaseModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const BaseModal = ({ isOpen, onClose, children }: TBaseModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30 !m-0">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <div>{children}</div>
        <BaseButton className=" text-gray-500" onClick={onClose}>
          تایید
        </BaseButton>
      </div>
    </div>
  );
};

export default BaseModal;
