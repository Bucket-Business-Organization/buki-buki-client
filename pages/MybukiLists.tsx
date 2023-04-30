import React from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { BsFillPencilFill } from "react-icons/bs";
import { AiFillPieChart } from "react-icons/ai";
import Link from "next/link";

// Generate Order Data
// function createData(id: any, date: any, name: any, start: any) {
//   return { id, date, name, start };
// }

// const rows = [
//   createData(0, "산타기", "Amir Shaikh", "완료버튼"),
//   createData(1, "다이어트", "Akshay Prabhu", "완료버튼"),
//   createData(2, "ㅎㅎ", "Chinmay Tiwari", "완료버튼"),
//   createData(3, "333333333333333333333", "Diploma Holder", "시작버튼"),
//   createData(4, "555555", "xyz", "시작버튼"),
// ];

// function preventDefault(event: any) {
//   event.preventDefault();
// }

// const useStyles = makeStyles((theme) => ({
//   seeMore: {
//     JunginTop: theme.spacing(3),
//   },
// }));

const Lists = () => {
  const bukiItem = (
    <div className={styles.bukiItem}>
      <div className={styles.bukiContainer}>
        <img src="/유럽사진.jpg" alt="유럽사진" className={styles.bukiImage} />
        <div className={styles.titleDescContainer}>
          <div className={styles.bukiTitle}>유럽여행</div>
          <div className={styles.bukiDesc}>한달간 유럽여행 다녀오기</div>
        </div>
      </div>

      <div className={styles.bukiDDay}>D-32</div>
    </div>
  );

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
      <main className={styles.main}>
        <h2 className={styles.bukiListTitle}>내 버킷리스트</h2>
        <div className={styles.addBukiProgressContainer}>
          <button className={styles.addBuki}>
            <BsFillPencilFill size="20" color="white" />
          </button>
          <button className={styles.progress}>
            <AiFillPieChart size="20" color="white" />
          </button>
        </div>
        <div className={styles.filterSearchForm}>
          <ul className={styles.filterMenu}>
            <li className={styles.filterItem}>그룹별</li>
            <li className={styles.filterItem}>카테고리별</li>
            <li className={styles.filterItem}>상태별</li>
          </ul>
          {/* <label htmlFor="search">버키검색</label> */}
          <input
            type="search"
            placeholder="검색어를 입력하세요"
            className={styles.search}
            id="search"
          />
        </div>
        <div className={styles.bucketList}>
          {bukiItem}
          {bukiItem}
          {bukiItem}
          {bukiItem}
          {bukiItem}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Lists;
