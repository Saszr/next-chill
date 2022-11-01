import { faker } from '@faker-js/faker';
import type { SexType } from '@faker-js/faker';

import { handler } from 'lib/utils/server';

type SubscriptionTier = 'free' | 'basic' | 'business';

export type User = {
  _id: string;
  avatar: string;
  birthday: Date;
  email: string;
  firstName: string;
  lastName: string;
  sex: SexType;
  subscriptionTier: SubscriptionTier;
};

function createRandomUser(): User {
  return {
    _id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    sex: faker.name.sexType(),
    subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
  };
}

export default handler.get((req, res) => {
  const list = [...Array(5)].map(() => createRandomUser());

  res.json(list);
});
