exports.seed = (knex) =>
// Deletes ALL existing entries
  knex("scrapbooks")
    .del()
// Inserts seed entries
    .then(() => knex("scrapbooks").insert([
      {user_id: 1, bird_id: 2},
      {user_id: 1, bird_id: 2},
      {user_id: 1, bird_id: 2},
      {user_id: 1, bird_id: 3},
      {user_id: 1, bird_id: 3},
      {user_id: 1, bird_id: 4},
      {user_id: 1, bird_id: 6},
    ]));
