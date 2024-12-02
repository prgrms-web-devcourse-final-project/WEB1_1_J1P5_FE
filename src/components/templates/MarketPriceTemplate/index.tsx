import { MarketPriceTemplateWrapper } from "./styled";
import { IPost, PostList } from "components/organisms/PostList";
import { EmptyTemplate } from "../EmptyTemplate";

interface IMarketPriceTemplateProps {
  posts: IPost[];
}

export const MarketPriceTemplate = ({ posts }: IMarketPriceTemplateProps) => {
  return (
    <MarketPriceTemplateWrapper>
      <div className="post-con">
        {posts.length === 0 ? (
          <EmptyTemplate type={"default"}></EmptyTemplate>
        ) : (
          <PostList posts={posts} type={"default"}></PostList>
        )}
      </div>
    </MarketPriceTemplateWrapper>
  );
};
