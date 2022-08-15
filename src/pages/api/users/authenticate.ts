import type { NextApiHandler } from 'next';
import USER_DATA from 'data/users.json';

const handler: NextApiHandler = async (req, res) => {
  function authenticate() {
    const { username, password } = req.body;
    const user = USER_DATA.find((u) => u.username === username && u.password === password);

    if (!user) {
      return res.status(200).json({
        code: 2,
        msg: 'Username or password is incorrect',
      });
    }

    return res.status(200).json({
      code: 1,
      data: {
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  }

  switch (req.method) {
    case 'POST':
      return authenticate();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
