import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { router } from "router";
import { GlobalStyle } from "styles";
import { useForegroundNotification } from "hooks";

const queryClient: QueryClient = new QueryClient();

const App = () => {
  useForegroundNotification();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
