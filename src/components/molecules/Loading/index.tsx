import React from "react";
import { LoadingWrapper, Spinner } from "./styled";
import { Text } from "components/atoms";

interface LoadingProps {
  message?: string; // 로딩 메시지
}

// 스타일 정의

export const Loading: React.FC<LoadingProps> = ({ message = "" }) => (
  <LoadingWrapper>
    <Spinner />
    <Text content={message} variant="btn_bold"></Text>
  </LoadingWrapper>
);
