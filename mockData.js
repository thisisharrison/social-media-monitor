const faker = require("faker");
const { nanoid } = require("nanoid");

const MEDIA_PLATFORMS = [
  "Facebook",
  "Instagram",
  "HK01",
  "Twitter",
  "Weibo",
  "BuzzFeed",
  "WeChat",
  "Line",
  "LinkedIn",
];

const SENTIMENTS = ["Negative", "Neutral", "Positive"];

const CLIENTS = [
  { id: nanoid(), name: "Sony" },
  { id: nanoid(), name: "Panasonic" },
  { id: nanoid(), name: "Samsung" },
  { id: nanoid(), name: "Apple" },
];

function randomElement(array) {
  const idx = Math.floor(Math.random() * array.length);
  return array[idx];
}

function generateRandomPosts(target) {
  let counter = 0;
  const fakePosts = [];
  while (counter < target) {
    const post = {
      id: nanoid(),
      author: faker.name.findName(),
      img: "http://lorempixel.com/640/480/cats",
      client: randomElement(CLIENTS).name,
      media: randomElement(MEDIA_PLATFORMS),
      date: `${faker.date.between("2021-05-01", "2021-06-30")}`,
      post: faker.lorem.paragraphs(),
      sentiment: randomElement(SENTIMENTS),
      impact: Math.floor(Math.random() * 5),
      data: {
        likes: faker.datatype.number({ min: 0, max: 100 }),
        comments: faker.datatype.number({ min: 0, max: 100 }),
        laughs: faker.datatype.number({ min: 0, max: 100 }),
        cries: faker.datatype.number({ min: 0, max: 100 }),
        surprises: faker.datatype.number({ min: 0, max: 100 }),
        angry: faker.datatype.number({ min: 0, max: 100 }),
      },
    };
    fakePosts.push(post);
    counter++;
  }
  return fakePosts;
}

const mockData = generateRandomPosts(50);

module.exports = {mockData, CLIENTS, MEDIA_PLATFORMS}