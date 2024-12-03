import { IPost, PostList } from "components/organisms/PostList";
import { SearchResultsTemplateWrapper } from "./styled";
import { EmptyTemplate } from "../EmptyTemplate";

interface ISearchResultsTemplateProps {
  posts: IPost[];
}

export const SearchResultsTemplate = ({
  posts,
}: ISearchResultsTemplateProps) => {
  return (
    <SearchResultsTemplateWrapper>
      <div className="post-con">
        {posts.length === 0 ? (
          <EmptyTemplate type={"search"}></EmptyTemplate>
        ) : (
          <PostList posts={posts} type={"default"}></PostList>
        )}
      </div>
    </SearchResultsTemplateWrapper>
  );
};
