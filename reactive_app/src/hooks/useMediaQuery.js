// 미디어 쿼리와 반응형 동작을 관리하는 커스텀 훅.
// 특정 화면 크기 조건에 따라 컴포넌트의 동작 변경 가능.
import { useState, useEffect } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query); // 미디어 쿼리 객체 생성
    if (media.matches !== matches) {
      setMatches(media.matches); // 초기 일치 상태 설정
    }
    const listener = () => setMatches(media.matches); // 쿼리 변경 시 상태 업데이트
    media.addEventListener("change", listener); // 이벤트 리스너 등록
    return () => media.removeEventListener("change", listener); // 이벤트 리스너 제거
  }, [matches, query]);

  return matches; // 현재 미디어 쿼리 일치 여부 반환
}

export default useMediaQuery;