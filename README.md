20230504 
바뀐 페이지

1. 새로 추가
    ```
    📦buki-buki-client
    ┣ 📂components
    ┃ ┣ 📂common
    ┃ ┃ ┗ 📂Group
    ┃ ┃ ┃ ┣ 📜CalendarTest.tsx
    ┃ ┃ ┃ ┣ 📜GroupCard.tsx
    ┃ ┃ ┃ ┣ 📜GroupDashboard.tsx
    ┃ ┃ ┃ ┗ 📜GroupLayout.tsx
    ┃ ┣ 📜FootterLayout.tsx
    ┃ ┣ 📜HeaderLayout.tsx
    ┣ 📂public
    ┃ ┣ 📜logo.png
    ┃ ┗ 📜logo_image.png
    ```

2. 수정
    ```
    📦buki-buki-client
    ┣ 📂components
    ┃ ┣ 📜BaseLayout.tsx
    ┃ ┣ 📜Sidebar.tsx
    ┣ 📂pages
    ┃ ┣ 📜GroupList.tsx
    ┃ ┣ 📜index.tsx
    ┃ ┣ 📜MybukiLists.tsx
        -  React.Fragment → BaseLayout으로 변경
    ```
    + index.tsx
        ![image](https://user-images.githubusercontent.com/61460836/236065021-2e5c071f-2dbe-42d1-b9f1-c6d0898cb9da.png)
    + MybukiLists
        ![image](https://user-images.githubusercontent.com/61460836/236065292-8b423390-a542-45d2-9f23-5bd8871896c2.png)
