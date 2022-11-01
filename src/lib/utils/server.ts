import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import * as Boom from '@hapi/boom';

export const handler = nc<NextApiRequest, NextApiResponse>({
  onError(err, _, res) {
    if (Boom.isBoom(err)) {
      res.status(err.output.payload.statusCode);
      res.json({
        error: err.output.payload.error,
        message: err.output.payload.message,
      });
    } else {
      res.status(500);
      res.json({
        message: 'Unexpected error',
      });
    }
  },
});
