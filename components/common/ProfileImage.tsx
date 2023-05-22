import React from "react";
import Image from "next/image";

interface ProfileImageProps {
  src: string;
  alt: string;
  size?: number;
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  src,
  alt,
  size = "100",
}) => {
  return (
    <div
      className="relative rounded-full overflow-hidden mt-5 mb-5"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
};

export default ProfileImage;
