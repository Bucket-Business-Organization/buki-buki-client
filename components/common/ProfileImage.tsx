import React from "react";
import Image from "next/image";

interface ProfileImageProps {
  src: string;
  size?: number;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, size = "100" }) => {
  return (
    <div
      className="relative rounded-full overflow-hidden"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <Image src={src} alt="Profile Image" layout="fill" objectFit="cover" />
    </div>
  );
};

export default ProfileImage;
