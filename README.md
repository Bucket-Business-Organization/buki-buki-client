# 페이지 레이아웃 구조 만들기
![image](https://user-images.githubusercontent.com/61460836/232507032-347674ff-8480-4764-8062-f5eb52d6822c.png)

![image](https://user-images.githubusercontent.com/61460836/232506839-e99b1182-6a09-4d26-8086-09cb719f3c27.png)


```bash
    npm i react-icons
    npm i @material-ui/core
```


<br>

---------------------------------------------------------------
1. 처음 nextjs 시작
    + `npx create-next-app@latest .`
    + `npm run dev`
2. api 폴더 없애기
3. index.tsx 내용 없애고
    ``` tsx
    export default function Home() {
    return <></>
    }
    ```
4. styles에  
    ```css
    * {
    padding : 0;
    margin : 0;
    box-sizing: border-box;
    }
    body{
    background-color: #eee;
    }
    ```

5. components 만들기