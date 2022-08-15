import { createColumnHelper } from '@tanstack/react-table';
import { Button } from '@chakra-ui/react';

import DataTable from './DataTable';
import { useGetUserListQuery } from 'lib/store/api/user.service';

const columnHelper = createColumnHelper<object>();

const columns = [
  columnHelper.accessor('id', {
    header: 'Id',
  }),
  columnHelper.accessor('username', {
    header: 'Username',
  }),
  columnHelper.accessor('password', {
    header: 'Password',
  }),
];

function UserTable() {
  const { data: userList, refetch } = useGetUserListQuery(undefined, {
    selectFromResult: ({ data }) => ({ data: data ? data.data : [] }),
  });

  return (
    <>
      <Button
        size="sm"
        onClick={() => {
          refetch();
        }}
      >
        refresh table
      </Button>
      {userList && <DataTable columns={columns} data={userList} />}
    </>
  );
}

export default UserTable;
