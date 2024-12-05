import { PostRegisterForm } from "components/organisms";
import { PostRegisterTemplateWrapper } from "./styled";
import type { IPostForm } from "types";

interface IPostRegisterTemplateProps {
  /** product Id */
  productId?: string;
  /** 글 등록할 때 필요한 form 데이터 */
  postForm?: IPostForm;
  /** Submit 이벤트 발생 시 실행할 함수 */
  onSubmit: (data: IPostForm) => void;
  /** 거래 희망 장소 클릭 시 실행할 함수 */
  onClick: (data: IPostForm) => void;
}

export const PostRegisterTemplate = ({
  productId,
  postForm,
  onSubmit,
  onClick
}: IPostRegisterTemplateProps) => {
  return (
    <PostRegisterTemplateWrapper>
      <PostRegisterForm
        productId={productId}
        postForm={postForm}
        onSubmit={onSubmit}
        onClick={onClick}
      />
    </PostRegisterTemplateWrapper>
  );
};
