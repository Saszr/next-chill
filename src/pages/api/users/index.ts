import type { NextApiHandler } from 'next';

import USER_DATA from 'data/users.json';

const handler: NextApiHandler = async (req, res) => {
  function getUsers() {
    return res.status(200).json({ code: 1, data: USER_DATA });
  }

  switch (req.method) {
    case 'GET':
      return getUsers();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
