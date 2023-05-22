import React, { useState } from "react";
import { Group } from "../../types";
import GroupModal from "../modal/GroupModal";

interface GroupCardProps {
  group: Group;
}

const GroupCard: React.FC<GroupCardProps> = ({ group }) => {
  const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);
  const [isGroupEditModalOpen, setIsGroupEditModalOpen] = useState(false);

  const openGroupModal = () => {
    setIsGroupModalOpen(true);
  };
  const closeGroupModal = () => {
    setIsGroupModalOpen(false);
  };

  const openGroupEditModal = () => {
    setIsGroupEditModalOpen(true);
  };
  const closeGroupEditModal = () => {
    setIsGroupEditModalOpen(false);
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden m-4 max-w-xs">
      <img
        className="w-full h-56 object-cover"
        src="https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=13303074&filePath=L2Rpc2sxL25ld2RhdGEvMjAyMi8yMS9DTFMxMDAwNi8xMzMwMzA3NF9XUlRfMjFfQ0xTMTAwMDZfMjAyMjAyMDdfMQ==&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10006"
        alt="Group"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{group.name}</h2>
        <p className="text-sm text-gray-500">{group.category}</p>
        <p className="text-sm text-gray-500">그룹장: {group.admin}</p>
        <p className="text-sm text-gray-500">{group.description}</p>
      </div>
      {/* <button onClick={() => setIsGroupModalOpen(!isGroupModalOpen)}>
        그룹정보
      </button>
      {isGroupModalOpen && (
        <GroupModal group={group} isOpen={isGroupModalOpen} />
      )} */}
    </div>
  );
};

export default GroupCard;
