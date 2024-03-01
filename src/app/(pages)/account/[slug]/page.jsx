import React from 'react';

export const metadata = {
  title: 'Account Manage',
};

const AccountManagePage = ({ params }) => {
  return <div>{params.slug} page</div>;
};

export default AccountManagePage;
