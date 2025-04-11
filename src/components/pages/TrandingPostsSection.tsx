import React, { FC } from "react";
import PostCard, { IPostCard } from "./PostCardSection";

type ITrandingPostsSectionProps = {
  title?: string;
  posts: IPostCard[];
};

const TrandingPostsSection: FC<ITrandingPostsSectionProps> = (props) => {
  const { title, posts } = props;

  return (
    <section className="flex flex-col gap-12">
      <h2 className="text-h5 font-bold">{title}</h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-[45px] gap-y-12">
        {posts.map((post, index) => (
          <PostCard
            key={index}
            {...post}
            isHorizontal={index >= 2}
          />
        ))}
      </div>
    </section>
  );
};

export default TrandingPostsSection;
