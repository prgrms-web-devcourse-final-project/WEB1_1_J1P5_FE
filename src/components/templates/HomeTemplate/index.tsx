import { TextButton } from "components/atoms";
import { HomeTemplateWrapper } from "./styled";
import { IPost, PostList } from "components/organisms/PostList";
import { EmptyTemplate } from "../EmptyTemplate";

interface IHomeTemplateProps {
  posts: IPost[];
  onClick?: () => void;
}

export const HomeTemplate = ({ posts, onClick }: IHomeTemplateProps) => {
  const textBtnContent = "내 물건 판매하기";
  return (
    <HomeTemplateWrapper>
      <div className="post-con">
        {posts.length === 0 ? (
          <EmptyTemplate type={"default"}></EmptyTemplate>
        ) : (
          <PostList posts={posts} type={"default"}></PostList>
        )}
      </div>
      <TextButton text={textBtnContent} onClick={onClick} size="m"></TextButton>
    </HomeTemplateWrapper>
  );
};
