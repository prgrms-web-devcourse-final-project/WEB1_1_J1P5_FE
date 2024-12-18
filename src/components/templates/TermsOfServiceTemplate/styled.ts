/* eslint-disable @rushstack/typedef-var */
import styled from "@emotion/styled";

export const TermsOfServiceTemplateWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 48px 24px;
`;

export const TermsOfServiceTemplateTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 32px;
  color: #1a1a1a;
`;

export const TermsOfServiceTemplateSection = styled.div`
  margin-bottom: 32px;
`;

export const TermsOfServiceTemplateSectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #2a2a2a;
`;

export const TermsOfServiceTemplateList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TermsOfServiceTemplateListItem = styled.li`
  margin-bottom: 16px;
  line-height: 1.6;
  color: #4a4a4a;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &:before {
    color: #666;
  }
`;

export const TermsOfServiceTemplateSubList = styled.ul`
  list-style: none;
  padding-left: 24px;
  margin-top: 8px;
`;

export const TermsOfServiceTemplateSubListItem = styled.li`
  margin-bottom: 8px;
  font-size: 14px;
  color: #666;
  display: flex;
  gap: 8px;

  &:before {
    content: "-";
  }
`;
