import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { groups } from "./groupData";

interface Group {
  id: number;
  name: string;
  category: string;
  isPublic: boolean;
  admin: string;
  members: string[];
  description: string;
}

interface GroupSearchModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const GroupSearchModal: React.FC<GroupSearchModalProps> = ({
  isOpen,
  closeModal,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Group[]>(groups);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const results = groups.filter((group) =>
      group.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              그룹 검색
            </Dialog.Title>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
              <ul className="mt-4 space-y-2">
                {searchResults.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default GroupSearchModal;
