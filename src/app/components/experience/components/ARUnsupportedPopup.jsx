import { useEffect } from "react";
import { X } from "lucide-react"; // Optional icon library
import Link from "next/link";

const ARUnsupportedPopup = ({ show, setShow }) => {

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white max-w-md w-full rounded shadow-xl p-6 relative text-center space-y-6">
        <h2 className="text-xl font-bold text-black mb-2">AR Not Supported</h2>
        <p className="text-gray-600">
          This device doesn’t support Augmented Reality. Try again with a
          compatible mobile device.
        </p>
        <Link
          href="/experience"
          onClick={() => setShow(false)}
          className="text-black px-8 py-2 progress-button-dark border cursor-pointer"
        >
          Continue on website
        </Link>
      </div>
    </div>
  );
};

export default ARUnsupportedPopup;
