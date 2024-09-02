db = db.getSiblingDB('chat');

db.createUser({
  user: 'root',
  pwd: 'root',
  roles: [
    {
      role: 'readWrite',
      db: 'chat',
    },
  ],
});
