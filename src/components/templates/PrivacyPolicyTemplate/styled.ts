/* eslint-disable @rushstack/typedef-var */
import styled from "@emotion/styled";

export const PrivacyPolicyTemplateWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 48px 24px;
`;

export const PrivacyPolicyTemplateTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 32px;
  color: #1a1a1a;
`;

export const PrivacyPolicyTemplateSection = styled.div`
  margin-bottom: 32px;
`;

export const PrivacyPolicyTemplateSectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #2a2a2a;
`;

export const PrivacyPolicyTemplateList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const PrivacyPolicyTemplateListItem = styled.li`
  margin-bottom: 16px;
  line-height: 1.6;
  color: #4a4a4a;
  display: flex;
  flex-direction: column; // 세로 방향으로 정렬되도록 추가
  gap: 8px;

  &:before {
    //content: "•";
    color: #666;
  }
`;

export const PrivacyPolicyTemplateSubList = styled.ul`
  list-style: none;
  padding-left: 24px;
  margin-top: 8px;
`;

export const PrivacyPolicyTemplateSubListItem = styled.li`
  margin-bottom: 8px;
  font-size: 14px;
  color: #666;
  display: flex;
  gap: 8px;

  &:before {
    content: "-";
  }
`;
