import { Router } from 'express';

const router = new Router();

const users = [
  { id: 1, avatar: 'http://ogcmeet.org/img/speakers/mysteryman-300x300.png', name: 'John', age: 23 },
  { id: 2, avatar: 'http://cirfa.uit.no/wp-content/uploads/2016/05/avatar150.png', name: 'Amy', age: 18 },
];

// Write your restful api here:
router.get('/users', (req, res) => {
  res.json({ users });
});

router.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const result = users.find(user => user.id === Number(id));
  res.json(result);
});

export default router;