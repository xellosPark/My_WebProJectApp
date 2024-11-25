import React, { useState, useEffect } from "react";
import "./styles/base.css"; // 기본 스타일
import Container from "./components/Container/Container"; // 컨테이너 컴포넌트
import ResponsiveGrid from "./components/ResponsiveGrid/ResponsiveGrid"; // 반응형 그리드 컴포넌트
import Header from "./components/Header/Header"; // 헤더 컴포넌트
import MobileLayout from "./components/MobileLayout/MobileLayout"; // 모바일 전체 레이아웃

function App() {
  const [isMobile, setIsMobile] = useState(false); // 모바일 여부 상태 관리

  // 화면 크기를 감지하는 함수
  const detectDevice = () => {
    setIsMobile(window.innerWidth <= 768); // 화면 너비가 768px 이하일 경우 모바일로 설정
  };

  // 컴포넌트가 마운트될 때와 창 크기가 변경될 때 화면 크기 감지
  useEffect(() => {
    detectDevice(); // 초기 감지
    window.addEventListener("resize", detectDevice); // 화면 크기 변경 이벤트 추가
    return () => {
      window.removeEventListener("resize", detectDevice); // 이벤트 정리
    };
  }, []);

  return (
    <>
      {isMobile ? (
        // 모바일 레이아웃
        <MobileLayout />
      ) : (
        // PC 레이아웃
        <>
          {/* 헤더 영역 */}
          <Header />

          {/* 메인 컨테이너 */}
          <Container>
            {/* 반응형 그리드 */}
            <ResponsiveGrid />
          </Container>

          {/* 푸터 영역 */}
          <footer className="footer">
            <p>© 2024 Responsive Design App. All Rights Reserved.</p>
            <p>
              <a href="#" style={{ color: "#f39c12", textDecoration: "none" }}>
                Terms of Service
              </a>{" "}
              |{" "}
              <a href="#" style={{ color: "#f39c12", textDecoration: "none" }}>
                Privacy Policy
              </a>
            </p>
          </footer>
        </>
      )}
    </>
  );
}

export default App;
