import {
  TERMS_OF_SERVICE,
  TERMS_OF_SERVICE_TITLE,
  TermsSection,
} from "constants/TermsOfServicePageConstants";
import {
  TermsOfServiceTemplateList,
  TermsOfServiceTemplateListItem,
  TermsOfServiceTemplateSection,
  TermsOfServiceTemplateSectionTitle,
  TermsOfServiceTemplateSubList,
  TermsOfServiceTemplateSubListItem,
  TermsOfServiceTemplateTitle,
  TermsOfServiceTemplateWrapper,
} from "./styled";

export const TermsOfServiceTemplate = () => {
  const renderContent = (content: TermsSection[]) => {
    return content.map((item: TermsSection, index: number) => (
      <TermsOfServiceTemplateSection key={index}>
        <TermsOfServiceTemplateSectionTitle>
          {item.title}
        </TermsOfServiceTemplateSectionTitle>
        {item.content && (
          <TermsOfServiceTemplateList>
            {typeof item.content === "string" ? (
              <TermsOfServiceTemplateListItem>
                <span>{item.content}</span>
              </TermsOfServiceTemplateListItem>
            ) : (
              Array.isArray(item.content) &&
              item.content.map(
                (
                  item: { text: string; subtitle?: string[] },
                  textIndex: number
                ) => (
                  <TermsOfServiceTemplateListItem key={textIndex}>
                    <span>{item.text}</span>
                    {item.subtitle && (
                      <TermsOfServiceTemplateSubList>
                        {item.subtitle.map((sub: string, subIndex: number) => (
                          <TermsOfServiceTemplateSubListItem key={subIndex}>
                            <span>{sub}</span>
                          </TermsOfServiceTemplateSubListItem>
                        ))}
                      </TermsOfServiceTemplateSubList>
                    )}
                  </TermsOfServiceTemplateListItem>
                )
              )
            )}
          </TermsOfServiceTemplateList>
        )}
      </TermsOfServiceTemplateSection>
    ));
  };

  return (
    <TermsOfServiceTemplateWrapper>
      <TermsOfServiceTemplateTitle>
        {TERMS_OF_SERVICE_TITLE}
      </TermsOfServiceTemplateTitle>
      <section>{renderContent(TERMS_OF_SERVICE)}</section>
    </TermsOfServiceTemplateWrapper>
  );
};
