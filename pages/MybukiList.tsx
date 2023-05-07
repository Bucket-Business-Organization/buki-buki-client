import React, { useState } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { BsFillPencilFill } from "react-icons/bs";
import { AiFillPieChart } from "react-icons/ai";
import Link from "next/link";
import DefaultList from "@/components/list/DefaultList";
import EditModal from "@/components/modal/EditModal";

const allBucketListItems = [
  { id: 1, title: "여행 가기", description: "일본, 한국, 태국 여행 가기" },
  { id: 2, title: "스카이다이빙", description: "하늘에서 뛰어내리기" },
  { id: 3, title: "다이어트", description: "목표 체중 달성하기" },
  {
    id: 4,
    title: "영어 회화 마스터",
    description: "유창한 영어 회화를 구사하기",
  },
  {
    id: 5,
    title: "산티아고 순례길",
    description: "스페인에서 산티아고 순례길 걷기",
  },
  {
    id: 6,
    title: "피아노 배우기",
    description: "피아노 연주를 배우고 음악회에 참석하기",
  },
  { id: 7, title: "서핑 배우기", description: "서핑을 배우고 해변에서 즐기기" },
  {
    id: 8,
    title: "요리 클래스 참가",
    description: "요리 클래스를 듣고 신음식 만들어보기",
  },
  {
    id: 9,
    title: "자원봉사활동 참여",
    description: "해외에서 자원봉사활동에 참여하기",
  },
  { id: 10, title: "마라톤 참가", description: "전국 마라톤 대회에 참가하기" },
  {
    id: 11,
    title: "뜨개질 배우기",
    description: "뜨개질을 배우고 스웨터를 짜기",
  },
  { id: 12, title: "영화제 참석", description: "유명한 영화제에 참석하기" },
  {
    id: 13,
    title: "책 출간하기",
    description: "자신의 경험을 바탕으로 한 책을 출간하기",
  },
  {
    id: 14,
    title: "남극 여행",
    description: "남극 대륙을 방문하여 빙하를 보기",
  },
  {
    id: 15,
    title: "미술관 방문",
    description: "세계 유명 미술관을 방문하여 명화 감상하기",
  },
  {
    id: 16,
    title: "스쿠버다이빙",
    description: "스쿠버다이빙을 배우고 아름다운 해양세계를 탐험하기",
  },
  {
    id: 17,
    title: "로드트립",
    description: "친구들과 함께 멋진 로드트립 계획하기",
  },
  {
    id: 18,
    title: "헬스장 가입",
    description: "헬스장에 가입하여 건강한 몸 만들기",
  },
  {
    id: 19,
    title: "피아노 연주",
    description: "피아노 연주를 하여 친구들 앞에서 공연하기",
  },
  {
    id: 20,
    title: "토익 900점",
    description: "토익 시험을 보고 900점 이상 받기",
  },
];

const MybukiList = () => {
  const menuItems = ["전체", "진행 중", "완료"];

  const handleItemClick = (item: any) => {
    console.log("Clicked item:", item);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const initialItems = allBucketListItems.slice(0, itemsPerPage);

  const loadMoreItems = async () => {
    setCurrentPage((prevPage) => prevPage + 1);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return allBucketListItems.slice(startIndex, endIndex);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Buki Buki | 나의 버킷리스트</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="버킷리스트 소셜 네트워킹 서비스" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.logoNickContainer}>
          <div className={styles.welcomeArticle}>
            환영합니다, <span className={styles.nickName}>다람쥐</span>님!
          </div>
        </div>
      </header>
      <DefaultList
        items={initialItems}
        onItemClick={handleItemClick}
        menuItems={menuItems}
        loadMoreItems={loadMoreItems}
      />
    </React.Fragment>
  );
};

export default MybukiList;
