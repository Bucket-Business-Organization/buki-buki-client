import React, { useState, useRef, useEffect, useCallback, forwardRef } from "react";

type ListItem = {
  id: string | number;
  title: string;
  description: string;
};

type DefaultListProps = {
  items: ListItem[];
  menuItems: string[];
  loadMoreItems: () => Promise<ListItem[]>;
  onItemClick?: (item: ListItem) => void;
};

const DefaultList: React.FC<DefaultListProps> = ({
  items,
  menuItems,
  loadMoreItems,
  onItemClick,
}) => {
  const [activeTab, setActiveTab] = useState(menuItems[0]);
  const [listItems, setListItems] = useState<ListItem[]>(items);
  const [isLoading, setIsLoading] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const loadMore = useCallback(async () => {
    setIsLoading(true);
    const newItems = await loadMoreItems();
    setListItems((prevItems) => [...prevItems, ...newItems]);
    setIsLoading(false);
  }, [loadMoreItems]);

  const lastItemRef = useCallback(
    (node: Element) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, loadMore]
  );

  useEffect(() => {
    setListItems(items);
  }, [items]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const getFilteredItems = () => {
    switch (activeTab) {
      case menuItems[0]:
        // 필터링 로직에 따라 다른 목록을 반환합니다.
        return items;
      case menuItems[1]:
        // 필터링 로직에 따라 다른 목록을 반환합니다.
        return items;
      case menuItems[2]:
        // 필터링 로직에 따라 다른 목록을 반환합니다.
        return items;
      default:
        return items;
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-3/4">
        <div className="flex mb-4">
          {menuItems.map((menuItem, index) => (
            <button
              key={index}
              className={`mr-4 py-2 px-4 font-semibold ${
                activeTab === menuItem
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-600"
              }`}
              onClick={() => handleTabClick(menuItem)}
            >
              {menuItem}
            </button>
          ))}
        </div>
        <ul className="divide-y divide-gray-200">
          {listItems.map((item, index) => (
            <li
              key={item.id}
              ref={index === listItems.length - 1 ? lastItemRef : null}
              className="py-4 px-4 cursor-pointer hover:bg-gray-100"
              onClick={() => onItemClick && onItemClick(item)}
            >
              <div className="text-lg font-semibold">{item.title}</div>
              <div className="text-sm text-gray-600">{item.description}</div>
            </li>
          ))}
          {isLoading && <li className="py-4 px-4">Loading...</li>}
        </ul>
      </div>
    </div>
  );
};

export default DefaultList;
