import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getRelativeTime, getTimeRemaining } from "utils/dayFormatter";

const queryClient: QueryClient = new QueryClient();

const App = () => {
  console.log(getRelativeTime("2024-11-25T14:36:00"));
  // 출력 예시 (현재 시간 기준): "1일 전"

  console.log(getRelativeTime("2023-11-25T14:36:00"));
  // 출력 예시: "1년 전"

  console.log(getRelativeTime("2024-11-25T14:35:50"));
  // 출력 예시: "10초 전"
  return (
    <QueryClientProvider client={queryClient}>
      <>App</>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
