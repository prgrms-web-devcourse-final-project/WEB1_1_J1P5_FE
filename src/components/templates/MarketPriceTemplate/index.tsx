import { MarketPriceTemplateWrapper } from "./styled";
import { IPost, PostList } from "components/organisms/PostList";
import { EmptyTemplate } from "../EmptyTemplate";
import { useHeaderStore } from "stores";
import { useEffect } from "react";

interface IMarketPriceTemplateProps {
  posts: IPost[];
}

export const MarketPriceTemplate = ({ posts }: IMarketPriceTemplateProps) => {
  const { setTitle } = useHeaderStore();

  useEffect(() => {
    setTitle("시세 조회");
  }, []);

  return (
    <MarketPriceTemplateWrapper>
      <div className="post-con">
        {posts.length === 0 ? (
          <EmptyTemplate type={"marketPrice"}></EmptyTemplate>
        ) : (
          <PostList posts={posts} type={"default"}></PostList>
        )}
      </div>
    </MarketPriceTemplateWrapper>
  );
};
