import React, { useState } from "react";
import BaseLayout from "@/components/BaseLayout";
import GroupCard from "@/components/card/GroupCard";
import { groups } from "@/data";

const GroupList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <BaseLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="group-page">
          <input
            type="text"
            placeholder="그룹 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex flex-wrap justify-center">
            {filteredGroups.map((group) => (
              <>
                <GroupCard key={group.id} group={group} />
              </>
            ))}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default GroupList;
