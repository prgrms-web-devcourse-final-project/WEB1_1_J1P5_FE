import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { router } from "router";
import { GlobalStyle } from "styles";
import { useForegroundNotification } from "hooks";
import { Modal } from "components/organisms";
import { useModalStore } from "stores";

const queryClient: QueryClient = new QueryClient();

const App = () => {
  useForegroundNotification();
  const isOpen = useModalStore((store) => store.isOpen);
  const content = useModalStore((store) => store.content);
  const { closeModal } = useModalStore((store) => store.actions);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true
        }}
      />
      <Modal open={isOpen} onClose={closeModal}>
        <Modal.Background hasClickEvent />
        <Modal.Container>{content}</Modal.Container>
      </Modal>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
