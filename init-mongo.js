db.createUser({
  user: 'vitor',
  pwd: 'pepperonipizza',
  roles: [
    {
      role: 'readWrite',
      db: 'call_of_cthulhu',
    },
  ],
});
