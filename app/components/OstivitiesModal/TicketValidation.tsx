"use client";

import { IModal } from "@/app/utils/interface";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { useCookies } from "react-cookie";

const CheckInSuccessModal = ({
  open,
  onCancel,
  onClose,
  onOk,
}: IModal): JSX.Element => {
  const router = useRouter();
  const params = useParams<{ id: string, event: string }>();
  const [cookies, setCookie, removeCookie] = useCookies(["event_id"]);

  return (
    <div className="fixed inset-0 bg-black/20 grid place-items-center z-50"
      onClick={(e) => e.stopPropagation()} // prevent clicks outside the modal from closing it
    >
      <div
        onClick={(e) => e.stopPropagation()} // prevent clicks inside the modal from bubbling up
        className="bg-white rounded-2xl px-12 py-12 lg:min-w-[33rem]"
      >
        <div className="flex justify-center">
          <div className=" grid place-items-center">
             <svg
            className="animate-spin h-12 w-12 text-red-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.964 7.964 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          </div>
        </div>
        <div className="mt-8 text-center">
        <h2 style={{ fontFamily: 'Bricolage Grotesque', fontWeight: 'normal', fontSize: '1rem' }}>
          Checking in guest!
          </h2>
          <div className="flex justify-center">
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckInSuccessModal;
