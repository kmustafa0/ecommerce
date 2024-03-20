import React from 'react';

const CategoryPage = ({ params }) => {
  const formattedSlug = params.slug
    .map((slug) => slug.charAt(0).toUpperCase() + slug.slice(1))
    .join(' ');
  return <div>{formattedSlug} Page</div>;
};

export default CategoryPage;
