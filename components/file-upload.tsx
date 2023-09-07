"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";

import { X } from "lucide-react";
import Image from "next/image";

interface IFileUploadProps {
  value: string;
  onChange: (url?: string) => void;
  endPoint: "messageFile" | "serverImage";
}

const FileUpload = ({ value, endPoint, onChange }: IFileUploadProps) => {
  const fileType = value?.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image fill src={value} alt="serverImage" className="rounded-full" />
        <button
          type="button"
          onClick={() => onChange("")}
          className="bg-red-600 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }
  return (
    <UploadDropzone
      endpoint={endPoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
};

export default FileUpload;
