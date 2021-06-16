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

const posts = generateRandomPosts(50);

module.exports = [
  {
    id: "1TgxKrS1jsz758zJ_OItC",
    author: "Karla Hermann",
    img: "http://lorempixel.com/640/480/cats",
    client: "Apple",
    media: "BuzzFeed",
    date: "Fri Jun 04 2021 09:14:45 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Omnis eligendi soluta perspiciatis temporibus ut. Inventore a commodi commodi numquam molestiae excepturi ex consectetur nostrum. Vero perspiciatis neque. Ea assumenda perspiciatis soluta facere voluptatum similique nihil iste rem.\n" +
      " \rQuia suscipit est fuga qui id rerum corrupti blanditiis voluptatem. Libero doloremque rerum sed architecto qui possimus. Beatae aut aperiam.\n" +
      " \rDoloremque neque ipsa maiores velit repudiandae. Repellat excepturi aspernatur autem ipsam repudiandae. Nisi fuga eveniet.",
    sentiment: "Negative",
    impact: 4,
    data: {
      likes: 11,
      hearts: 10,
      comments: 80,
      laughs: 13,
      cries: 56,
      surprises: 44,
      angry: 83,
    },
  },
  {
    id: "i5B9To8R4w0epmYGKK9uO",
    author: "Tommie Fay DVM",
    img: "http://lorempixel.com/640/480/cats",
    client: "Apple",
    media: "LinkedIn",
    date: "Tue Jun 29 2021 14:03:05 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Deleniti exercitationem corrupti illum dolore est. Totam dolore qui quasi aliquid. Quia incidunt quo aliquam laudantium a. Assumenda eius quia. Explicabo id et libero.\n" +
      " \rTempora sapiente odit. Consectetur cupiditate ut eos sed voluptatem officia aut enim. Laborum dolorem eaque voluptas exercitationem impedit consequatur et. Id delectus vel eos consequuntur. Magnam consequatur itaque consequuntur nulla voluptatem.\n" +
      " \rOccaecati porro nam commodi occaecati. Aut asperiores voluptate aut repudiandae debitis non at et quam. Voluptate et consequatur esse eum ut voluptas aut sequi. Officia facilis et delectus rerum. Ut veniam exercitationem.",
    sentiment: "Neutral",
    impact: 2,
    data: {
      likes: 71,
      comments: 75,
      laughs: 44,
      cries: 70,
      surprises: 17,
      angry: 83,
    },
  },
  {
    id: "g_kQa1TUABJgow6AFSElc",
    author: "Mitchell Kshlerin V",
    img: "http://lorempixel.com/640/480/cats",
    client: "Panasonic",
    media: "Facebook",
    date: "Tue May 11 2021 01:11:01 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Soluta est quis. Nisi facilis eaque maiores qui quia voluptatem pariatur molestias libero. Ut expedita velit voluptatem quaerat nihil cum saepe officiis. Nostrum debitis atque ut tempore fuga. A aut quidem esse sit reprehenderit ab ea nam. Eveniet eius maxime.\n" +
      " \rVeniam blanditiis perspiciatis aliquam eveniet molestiae. Et molestiae beatae harum molestiae. Quia iure blanditiis velit aut numquam maiores amet enim est. Dolore sit ut dicta non molestias voluptas quasi perferendis. Voluptatem eos reiciendis ex inventore qui. Qui consequatur id ullam et placeat dolor nostrum quod sed.\n" +
      " \rAut asperiores molestiae cum et. Dolorem repudiandae debitis et animi accusamus ut vero. Est voluptate vitae amet et at. Necessitatibus nisi est laboriosam eius nobis laudantium fugit. Voluptas expedita dolorem asperiores eveniet. Sed error perspiciatis voluptatum aliquam unde iure.",
    sentiment: "Neutral",
    impact: 2,
    data: {
      likes: 17,
      comments: 43,
      laughs: 4,
      cries: 63,
      surprises: 16,
      angry: 41,
    },
  },
  {
    id: "UjxPDDl2sax5D1oA4DeNM",
    author: "Terrence Wisoky",
    img: "http://lorempixel.com/640/480/cats",
    client: "Apple",
    media: "WeChat",
    date: "Fri May 21 2021 01:42:37 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Dolor eveniet facere voluptas neque tenetur hic. Eaque modi itaque ratione perspiciatis ipsam unde temporibus quisquam. Qui ducimus expedita veritatis consectetur dicta quis aut voluptatem. Rerum quidem aperiam molestiae deserunt nesciunt aperiam atque. Officia error voluptate quo est nobis maxime excepturi itaque odio.\n" +
      " \rExpedita quia iste magnam consequatur nam inventore. Non est perspiciatis est et est. Saepe et aspernatur nihil impedit neque. Et qui quod maxime modi eveniet fuga dolor beatae fuga. Provident quisquam aut quia ut vitae ipsa sed commodi.\n" +
      " \rQuis eos temporibus dolor voluptas et et officiis error itaque. Numquam maiores sunt libero inventore nulla. Beatae voluptatem nostrum sit dolorem architecto sit id perferendis. Unde sit tenetur consectetur nemo sit dolor consequatur velit.",
    sentiment: "Positive",
    impact: 3,
    data: {
      likes: 19,
      comments: 34,
      laughs: 71,
      cries: 23,
      surprises: 79,
      angry: 74,
    },
  },
  {
    id: "r1M3gdVB_uOEEY6DYKthD",
    author: "Roy Ward",
    img: "http://lorempixel.com/640/480/cats",
    client: "Apple",
    media: "Twitter",
    date: "Wed Jun 16 2021 21:53:15 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Ab hic recusandae quia deserunt. Iure laborum dolorem dolor. Nihil labore fugit. Libero consectetur dolore a natus id.\n" +
      " \rVoluptatem ipsum nobis saepe. Est vitae et temporibus. Exercitationem corrupti vel molestias placeat enim excepturi eos. Iusto possimus iusto et consequatur.\n" +
      " \rQui doloremque et minima atque quasi voluptates aspernatur amet. Nisi amet aut facere. Omnis aliquid aut perspiciatis accusamus. Nostrum debitis occaecati unde corporis voluptatem.",
    sentiment: "Negative",
    impact: 4,
    data: {
      likes: 29,
      comments: 76,
      laughs: 14,
      cries: 51,
      surprises: 4,
      angry: 74,
    },
  },
  {
    id: "OwDfkHGDVg9B4FEzOUiMq",
    author: "Dr. Hubert Fahey",
    img: "http://lorempixel.com/640/480/cats",
    client: "Samsung",
    media: "WeChat",
    date: "Fri Jun 18 2021 21:28:28 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Et animi ab aut. Odit omnis accusantium. Expedita dolores sed sed similique amet. Delectus consequatur molestiae repellat error aut. Omnis voluptatem et fugit odit ut aut.\n" +
      " \rEt dicta ex repellat deleniti optio quam eum harum rem. Omnis laborum totam dolores quos et vel. Eum praesentium delectus expedita voluptate minus quisquam aut officiis. Ab earum tenetur et non.\n" +
      " \rAd assumenda ea perferendis cumque excepturi asperiores ut quo esse. Aut doloribus cumque libero earum voluptatum soluta. Facilis et autem quaerat molestiae sint numquam doloribus ipsam velit. Qui et possimus sunt.",
    sentiment: "Neutral",
    impact: 2,
    data: {
      likes: 18,
      comments: 29,
      laughs: 8,
      cries: 13,
      surprises: 12,
      angry: 11,
    },
  },
  {
    id: "G_e2-Y-Cl94tqO9OFIsHE",
    author: "Lynn Williamson",
    img: "http://lorempixel.com/640/480/cats",
    client: "Apple",
    media: "WeChat",
    date: "Tue Jun 08 2021 13:46:06 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Ut doloribus neque ea voluptatem modi. Vel ut nam voluptatem architecto quaerat. Ut quasi quis accusamus ut eum praesentium quae vel. Aliquid voluptatum modi iure. Officia autem atque quam rerum et quasi deleniti culpa deserunt. Et nobis voluptate iste et.\n" +
      " \rVoluptas corrupti quia perferendis velit. Laborum in accusamus doloribus aut rerum totam qui. Quas sit quisquam ducimus sed enim in. Dolore minima unde facilis id. Quisquam hic aperiam quas.\n" +
      " \rDucimus reprehenderit eos odit porro velit dolores quo. Dolorum dolorem nesciunt nobis ut velit quia doloremque error delectus. Quas facere quis voluptates dolores dolorum delectus. Pariatur eum itaque non sint qui aut.",
    sentiment: "Neutral",
    impact: 1,
    data: {
      likes: 55,
      comments: 91,
      laughs: 4,
      cries: 40,
      surprises: 31,
      angry: 24,
    },
  },
  {
    id: "zxdvfUWN13lEf1lKj5dXq",
    author: "Erika Cole",
    img: "http://lorempixel.com/640/480/cats",
    client: "Samsung",
    media: "Twitter",
    date: "Tue Jun 29 2021 11:35:59 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Aut dolores natus quisquam delectus dolorem voluptas. Amet est culpa aut facilis nesciunt voluptates eius voluptas. Dolorem ipsam eum magni. Repellat qui aut aliquid veniam eos alias omnis. Id pariatur corrupti fugiat.\n" +
      " \rCum accusantium earum. Consequuntur qui et voluptatem est et consequatur soluta repudiandae. Molestiae et molestiae amet ipsum modi quia. Nihil culpa reprehenderit incidunt praesentium aperiam laboriosam. Possimus ipsam cumque et iure debitis repellat mollitia qui est. Doloremque voluptatibus autem sint perspiciatis est.\n" +
      " \rEt earum et occaecati est. Atque sed tenetur esse ipsa a quod aliquam. Ducimus non est tenetur quia dolorem. Adipisci delectus nam ex ut consequatur vel aliquid. Omnis et laboriosam.",
    sentiment: "Positive",
    impact: 3,
    data: {
      likes: 89,
      comments: 21,
      laughs: 29,
      cries: 13,
      surprises: 100,
      angry: 65,
    },
  },
  {
    id: "HSiNDscso5GTfe9FWjPiU",
    author: "Virginia Carroll",
    img: "http://lorempixel.com/640/480/cats",
    client: "Apple",
    media: "WeChat",
    date: "Sat Jun 26 2021 00:53:27 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Ullam magnam quam maxime consequatur dicta quas fugiat. Saepe commodi ipsam illum necessitatibus. Error dolore praesentium iure fugiat eius molestiae vel ipsa. Nobis nam non asperiores sequi voluptatem porro.\n" +
      " \rCumque autem et autem. Nam est harum est esse quia voluptas sed voluptas. Qui sed perspiciatis quo est accusamus magni. Recusandae voluptas ratione est eius nemo rem veritatis. Magnam quas et consequatur blanditiis nesciunt. Placeat soluta nostrum.\n" +
      " \rDebitis voluptate recusandae. Et et rerum voluptatem. Nihil dolorem eos iure est qui qui. Sunt velit et libero maiores rerum placeat consequatur. Molestiae eum molestiae dolor ea praesentium sit et et ea.",
    sentiment: "Positive",
    impact: 0,
    data: {
      likes: 7,
      comments: 69,
      laughs: 50,
      cries: 89,
      surprises: 58,
      angry: 58,
    },
  },
  {
    id: "rqoZADceeDpz3JVLQZ6Ra",
    author: "Gloria Buckridge",
    img: "http://lorempixel.com/640/480/cats",
    client: "Panasonic",
    media: "Facebook",
    date: "Sat Jun 12 2021 02:26:48 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Numquam atque aut molestiae aut aliquam rerum eaque et assumenda. Accusantium qui ipsam assumenda quia. Quo explicabo omnis vel excepturi quos tenetur.\n" +
      " \rPlaceat ea nam et. Ullam sed maiores et velit. Ex dolorem et. Aperiam tenetur voluptatem.\n" +
      " \rOmnis aliquid reprehenderit quibusdam. Laboriosam et ex et dolore pariatur consectetur. Aliquam omnis totam. Ut nostrum eum velit veniam qui. Maxime facilis aut ipsa.",
    sentiment: "Positive",
    impact: 0,
    data: {
      likes: 70,
      comments: 13,
      laughs: 30,
      cries: 73,
      surprises: 43,
      angry: 91,
    },
  },
  {
    id: "DySOp4Dg2HIL4NsAi4GRF",
    author: "Roberta Abshire",
    img: "http://lorempixel.com/640/480/cats",
    client: "Sony",
    media: "BuzzFeed",
    date: "Wed Jun 16 2021 23:22:55 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Inventore vel deleniti aspernatur exercitationem enim nesciunt quia quisquam. Iste qui et. Impedit iste eius aut ratione distinctio laborum libero. Qui dolores quo id aut. Minima est nam.\n" +
      " \rNam sed commodi non autem explicabo maiores sapiente amet laboriosam. Quia reprehenderit qui beatae excepturi voluptatem enim et ad et. Voluptatem expedita vel quis qui velit amet quod. Omnis inventore dicta magni facilis nemo.\n" +
      " \rDistinctio natus ipsum nesciunt velit quod. Ut omnis distinctio earum et sint. Qui cum autem inventore nesciunt ut animi voluptatum.",
    sentiment: "Negative",
    impact: 4,
    data: {
      likes: 7,
      comments: 17,
      laughs: 84,
      cries: 4,
      surprises: 99,
      angry: 93,
    },
  },
  {
    id: "Wl5h8rMsWjo51OWwTgUMX",
    author: "Jay Heidenreich",
    img: "http://lorempixel.com/640/480/cats",
    client: "Sony",
    media: "WeChat",
    date: "Fri Jun 11 2021 13:34:09 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Ut ut beatae ut sunt magnam velit beatae repellendus placeat. Dolore fugit aut maxime vel qui minima. Voluptas voluptatem dolores sit. Assumenda iure amet est et quia est. Hic dolorem delectus veniam sit ipsa.\n" +
      " \rDolorem sapiente fugiat. Nemo quisquam eveniet. Sint molestias illum quo a quaerat.\n" +
      " \rQui porro neque et ratione omnis nihil explicabo eos quam. Rerum dolores dolor consequatur consequatur sunt et. Cupiditate ut in eaque deleniti nam laborum ea voluptate ut. Facere rerum laudantium.",
    sentiment: "Negative",
    impact: 2,
    data: {
      likes: 33,
      comments: 35,
      laughs: 91,
      cries: 25,
      surprises: 12,
      angry: 70,
    },
  },
  {
    id: "UDcg_Dz1AzKHbunXR81J3",
    author: "Katherine Gleason",
    img: "http://lorempixel.com/640/480/cats",
    client: "Panasonic",
    media: "Line",
    date: "Wed Jun 09 2021 11:33:54 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Numquam est suscipit. Vitae dolore soluta nulla quidem id corporis enim et. Exercitationem sit et sint aut. Optio earum possimus mollitia velit quasi sit beatae. Assumenda et error esse quidem alias ratione. Porro quia et vitae nulla sit exercitationem recusandae.\n" +
      " \rIure animi architecto ea. Eos est commodi magnam. Exercitationem dolores deleniti odit. Ut voluptas et ipsum. Quidem id laboriosam ad incidunt voluptatibus sed.\n" +
      " \rDebitis suscipit sunt nesciunt sunt aut cum dolor soluta. Voluptates in aut adipisci ea consequatur qui. Neque ea vitae excepturi. Sit in vitae eius nam dicta. Autem facilis natus. Fuga consequatur qui maiores.",
    sentiment: "Negative",
    impact: 0,
    data: {
      likes: 93,
      comments: 91,
      laughs: 25,
      cries: 80,
      surprises: 82,
      angry: 55,
    },
  },
  {
    id: "6NHvD9b1bGIba1X1_D6-O",
    author: "Kelvin Smitham",
    img: "http://lorempixel.com/640/480/cats",
    client: "Samsung",
    media: "Twitter",
    date: "Mon May 10 2021 09:10:38 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Ut et consequuntur voluptas commodi recusandae laboriosam et. Asperiores at id eveniet eos dolore ut non. Fugiat inventore et unde id quod voluptatem rerum.\n" +
      " \rId esse voluptates illum sit facere placeat illum. Sit et repudiandae est accusantium eos molestiae sit nam sed. Sed et suscipit unde. Aliquam omnis commodi ut recusandae quia voluptatem. Nemo sit eos. Accusantium harum ut sint optio est qui.\n" +
      " \rProvident praesentium nesciunt omnis sunt sit doloremque. Unde rerum sed. Officiis voluptatum incidunt quaerat.",
    sentiment: "Negative",
    impact: 0,
    data: {
      likes: 52,
      comments: 25,
      laughs: 100,
      cries: 61,
      surprises: 20,
      angry: 53,
    },
  },
  {
    id: "ZdyfIhxqLCF0Svw54xszF",
    author: "Julian Bruen",
    img: "http://lorempixel.com/640/480/cats",
    client: "Panasonic",
    media: "Twitter",
    date: "Thu Jun 03 2021 22:01:06 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Maiores quidem qui amet sit aut. Placeat est consequatur quisquam voluptatem velit rerum officia quidem. Est dolores cumque dignissimos aliquam minus facilis qui qui et. Provident iusto et. Et et quibusdam sit qui quae quis. Nobis dolores sunt.\n" +
      " \rRerum hic est autem vel. Quaerat iusto omnis et rem qui rem quas cupiditate. Expedita atque sunt facere voluptatum odit non. Iure repellendus vel porro mollitia distinctio numquam iste facilis officia. Architecto earum totam facilis facere pariatur similique incidunt numquam.\n" +
      " \rSapiente voluptas rem architecto ratione quam. Impedit fugit necessitatibus et minus. Magnam molestiae modi saepe. Natus odit dolorem atque asperiores dolorem molestiae. Quia ut reiciendis ut. Dolor asperiores reiciendis asperiores iusto provident.",
    sentiment: "Positive",
    impact: 4,
    data: {
      likes: 45,
      comments: 87,
      laughs: 64,
      cries: 52,
      surprises: 35,
      angry: 9,
    },
  },
  {
    id: "jshC6isuAlTn27hza54kB",
    author: "Milton Sauer",
    img: "http://lorempixel.com/640/480/cats",
    client: "Sony",
    media: "Line",
    date: "Mon May 17 2021 10:43:26 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Fugiat quis in debitis quam alias. Beatae perferendis corporis et dicta nobis repellendus perspiciatis minima. Qui enim laboriosam temporibus iusto nihil nisi natus possimus. Autem quaerat tempora nihil non repudiandae. Porro tempora voluptatem sit enim ut doloribus porro quis sed.\n" +
      " \rError nobis ducimus dolor. Nostrum excepturi ipsum. Explicabo adipisci earum voluptatem et delectus.\n" +
      " \rMolestiae corrupti quo ut voluptatem qui facere et dolorem accusantium. Fugiat ut omnis doloremque explicabo nihil. Incidunt dolorem libero impedit maxime quos eaque eligendi earum.",
    sentiment: "Negative",
    impact: 0,
    data: {
      likes: 0,
      comments: 56,
      laughs: 53,
      cries: 59,
      surprises: 3,
      angry: 21,
    },
  },
  {
    id: "g7a6Fp9l20R8b3bYh787B",
    author: "Peter Tillman",
    img: "http://lorempixel.com/640/480/cats",
    client: "Panasonic",
    media: "Twitter",
    date: "Sun May 23 2021 23:26:47 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Error ducimus est quia non enim tempora maxime. Veritatis amet ut harum assumenda praesentium nam autem. Exercitationem distinctio nemo sit maxime eos quaerat id temporibus dolor. Nostrum quis vero et. Ullam dolor praesentium pariatur qui eos error.\n" +
      " \rQuia enim modi ipsa cumque et. Vel officia ea eum officiis assumenda at est. Velit mollitia et molestias quis fugiat non quia quasi aut. Qui dolorum nobis atque perspiciatis. Maiores praesentium sit.\n" +
      " \rAliquid vel ad voluptates qui quibusdam nostrum. Porro eveniet sunt dolorem consequatur impedit autem eos. Neque cupiditate eius. Impedit explicabo tenetur eveniet voluptas voluptas asperiores repudiandae est consequatur.",
    sentiment: "Neutral",
    impact: 4,
    data: {
      likes: 21,
      comments: 69,
      laughs: 88,
      cries: 80,
      surprises: 35,
      angry: 12,
    },
  },
  {
    id: "Z64tAzkm_L5SdPcgGV6yJ",
    author: "Stuart Olson",
    img: "http://lorempixel.com/640/480/cats",
    client: "Samsung",
    media: "HK01",
    date: "Sat Jun 19 2021 22:37:18 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Aspernatur repellat quia autem animi aut aliquam praesentium et. Vero facilis esse et voluptatem magni quidem. Magnam placeat blanditiis et aut eos ad magnam consequatur perspiciatis. Amet sit voluptas. Quia qui quia quam eos.\n" +
      " \rNobis sed sit exercitationem iste qui. Dolores sit voluptates consequuntur laudantium libero harum voluptatem totam. Nostrum ducimus saepe odio. Quaerat consequatur a placeat eum magnam et laudantium nesciunt.\n" +
      " \rRem nam tempore est excepturi possimus omnis. Eligendi rerum ut nobis aut rerum eos velit. Blanditiis unde assumenda velit assumenda numquam animi.",
    sentiment: "Positive",
    impact: 4,
    data: {
      likes: 23,
      comments: 6,
      laughs: 42,
      cries: 33,
      surprises: 55,
      angry: 41,
    },
  },
  {
    id: "8ZNMt4UqHODLiQVaspijQ",
    author: "Brandon Fay",
    img: "http://lorempixel.com/640/480/cats",
    client: "Sony",
    media: "LinkedIn",
    date: "Mon May 17 2021 02:11:35 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Non iusto dolores vero quis et occaecati necessitatibus ea. Ut voluptas mollitia officia neque. Ex et iste possimus optio saepe explicabo. In saepe velit recusandae pariatur. Ut et est ut dolores est adipisci harum accusantium est. Perspiciatis omnis ut et magni vero dolor mollitia.\n" +
      " \rRerum animi itaque non omnis ut et dolor tenetur. Rerum et voluptatem nihil enim. Quia dolorem eaque recusandae explicabo. Necessitatibus excepturi debitis ullam amet assumenda. Illum nulla ex qui fugit a id. Aut eos nihil voluptas corrupti deserunt qui tenetur amet tenetur.\n" +
      " \rAutem quo unde cum ut autem iusto cumque dolore sint. Repellendus et magnam aliquam. Eius illo laborum doloribus autem. Nostrum itaque omnis nihil assumenda. Facere sit enim. Sunt iure cupiditate voluptatum.",
    sentiment: "Negative",
    impact: 4,
    data: {
      likes: 2,
      comments: 44,
      laughs: 97,
      cries: 93,
      surprises: 45,
      angry: 93,
    },
  },
  {
    id: "wBxrJHn1Pp9AUXG_dN5o-",
    author: "Jim Kessler",
    img: "http://lorempixel.com/640/480/cats",
    client: "Sony",
    media: "Instagram",
    date: "Mon May 24 2021 16:16:48 GMT+0800 (Hong Kong Standard Time)",
    post:
      "In illum optio aut et ea. Repudiandae quam placeat aut est voluptas doloribus. Dolore laborum dolorem quia nisi voluptatem tempora iste eaque.\n" +
      " \rNihil quo perspiciatis modi. Qui voluptates dolor cupiditate consequatur repellendus officiis autem. Ea veniam sed eligendi quos soluta ab. Facilis qui qui explicabo voluptas qui ea vel. Eius unde eligendi modi ut. Nulla numquam qui explicabo incidunt.\n" +
      " \rAutem voluptatem dolores corporis soluta qui at sit et voluptatem. Laborum et aut consequatur dignissimos nemo commodi. Deleniti esse veritatis sequi minus placeat sed. Sunt voluptatem dolor iusto. Et excepturi explicabo et ut voluptatem odio in ipsa corporis.",
    sentiment: "Negative",
    impact: 2,
    data: {
      likes: 22,
      comments: 84,
      laughs: 18,
      cries: 61,
      surprises: 26,
      angry: 91,
    },
  },
  {
    id: "bbc4H4G7Rvx55lq707nAF",
    author: "Margarita Bechtelar",
    img: "http://lorempixel.com/640/480/cats",
    client: "Samsung",
    media: "BuzzFeed",
    date: "Fri May 28 2021 17:43:45 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Laboriosam aut voluptatem magni laudantium tempora vel. Eveniet sit enim perferendis quidem. Distinctio maxime sint deleniti quos.\n" +
      " \rQui id architecto excepturi quas quo ut quidem. Fugit debitis temporibus nemo qui autem cupiditate quisquam et. Accusantium et enim soluta non.\n" +
      " \rAutem impedit in odio. Illo occaecati ut odio voluptatem tenetur. Aut dolores ex quia consectetur. Quia omnis repudiandae laborum qui aut reprehenderit beatae esse molestiae. Quia et fugiat quia vel voluptatem velit omnis ut blanditiis. Id nam ex quia facere.",
    sentiment: "Neutral",
    impact: 4,
    data: {
      likes: 18,
      comments: 70,
      laughs: 58,
      cries: 41,
      surprises: 8,
      angry: 40,
    },
  },
  {
    id: "5AZV34_w5en5FgqwlmnYh",
    author: "Dr. Blanca Keeling",
    img: "http://lorempixel.com/640/480/cats",
    client: "Apple",
    media: "WeChat",
    date: "Sun May 09 2021 16:25:53 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Aut quo est cumque earum. Eligendi excepturi voluptatibus veritatis. Unde voluptatem ullam dolores quasi quam.\n" +
      " \rQuia blanditiis praesentium delectus distinctio. Est impedit dolorem porro dolorem eligendi a quae sint. Eum sit corrupti sunt ipsam voluptatibus ullam.\n" +
      " \rExpedita est amet corporis omnis labore molestiae quis sit. Voluptatem unde velit eos. Voluptatem ut fugit cumque corporis. Consectetur exercitationem adipisci libero animi aut rerum ea voluptatem illo. Ipsa doloribus provident dolor est id. Possimus reiciendis quis et autem ad rem dolorum voluptas.",
    sentiment: "Negative",
    impact: 1,
    data: {
      likes: 91,
      comments: 81,
      laughs: 33,
      cries: 32,
      surprises: 67,
      angry: 97,
    },
  },
  {
    id: "WcNfxp4Hp2D7WOcgCvqJq",
    author: "Ken Larkin",
    img: "http://lorempixel.com/640/480/cats",
    client: "Apple",
    media: "Twitter",
    date: "Fri Jun 11 2021 09:41:39 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Et temporibus temporibus incidunt nemo nulla ut quasi. Aliquid repellat molestiae sed sint quam facilis. Facilis molestiae commodi quibusdam ut. Voluptates est molestias distinctio veritatis officiis. Ad voluptatem labore ipsa incidunt nulla sequi architecto.\n" +
      " \rReprehenderit rerum assumenda repellendus odit modi ducimus consequatur voluptates. Sed occaecati sit dolorem maiores. Incidunt rerum animi voluptas in.\n" +
      " \rUt enim et. Dolorem aut aperiam recusandae. Tempora sunt omnis culpa. Saepe non et omnis unde enim nihil. Iusto tempore quaerat mollitia non in nesciunt commodi omnis. Inventore maxime non velit vero nihil voluptatum placeat ea.",
    sentiment: "Neutral",
    impact: 2,
    data: {
      likes: 74,
      comments: 66,
      laughs: 91,
      cries: 74,
      surprises: 98,
      angry: 15,
    },
  },
  {
    id: "oQ5UUgaTOV8-Um_QdcpIn",
    author: "Brooke Hyatt",
    img: "http://lorempixel.com/640/480/cats",
    client: "Panasonic",
    media: "HK01",
    date: "Thu May 27 2021 05:21:27 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Aspernatur adipisci maiores numquam labore dicta. Non qui asperiores occaecati nemo qui autem qui sit. Asperiores maxime molestias nemo est at voluptas in modi id.\n" +
      " \rUnde ipsam est excepturi doloremque sed porro. Impedit vero veniam voluptatem tenetur aut alias officia. Voluptatum aut libero soluta neque. Ut odio vel quo non voluptatibus et sint nihil voluptates. Distinctio nulla ex corporis et nihil eius. Ea sint quod rerum laudantium nihil dolor nihil neque suscipit.\n" +
      " \rOdit adipisci ea harum iure eos eum nulla molestias at. Optio cumque occaecati dolores in. Est voluptas repudiandae. Odio id quia nulla recusandae qui cupiditate. Cupiditate sunt eum et aliquam vel corporis.",
    sentiment: "Negative",
    impact: 4,
    data: {
      likes: 72,
      comments: 51,
      laughs: 88,
      cries: 50,
      surprises: 5,
      angry: 17,
    },
  },
  {
    id: "94CVjXD09Xpgx1sZKzRYd",
    author: "Rosalie Roob",
    img: "http://lorempixel.com/640/480/cats",
    client: "Apple",
    media: "Instagram",
    date: "Thu May 20 2021 20:39:00 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Eius ut perspiciatis consectetur sapiente quis qui aut aut. Non unde cupiditate. Omnis nihil dicta non. Mollitia velit aut. In voluptatibus velit cumque molestias temporibus. Illo earum non et dolor.\n" +
      " \rAut repellat atque et non nulla eos dolores. Numquam iste qui dolore quod et voluptatum nam ea. Qui ab est et qui eum odio fuga adipisci.\n" +
      " \rBeatae iste aspernatur quod. Veritatis earum sed ab quibusdam. Harum itaque distinctio autem aut. Tempora maiores numquam sit impedit voluptatem debitis officiis. Qui esse quae quo et dolore quis qui eos voluptatem. Harum molestiae perspiciatis.",
    sentiment: "Negative",
    impact: 4,
    data: {
      likes: 41,
      comments: 58,
      laughs: 6,
      cries: 78,
      surprises: 62,
      angry: 52,
    },
  },
  {
    id: "eYrBJrPr3f13BBlF6TTES",
    author: "Anna Wilderman",
    img: "http://lorempixel.com/640/480/cats",
    client: "Sony",
    media: "HK01",
    date: "Sun May 09 2021 18:41:20 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Voluptatem dolore veniam nulla et qui corrupti velit libero quibusdam. Animi quo doloribus sint et. Provident dicta natus corporis perspiciatis nulla ex nihil distinctio aut.\n" +
      " \rOptio voluptatem sint quidem commodi et autem necessitatibus non accusamus. In quo incidunt ipsa dolore laudantium rerum perferendis. Modi adipisci voluptatem. Ut dignissimos sunt harum non. Quae omnis facilis et ab vero et minima perspiciatis consequatur.\n" +
      " \rBlanditiis soluta debitis dicta nihil. Labore consequuntur quia ut voluptatem quis neque debitis. Qui autem nihil ipsa incidunt reprehenderit dolor.",
    sentiment: "Negative",
    impact: 3,
    data: {
      likes: 1,
      comments: 30,
      laughs: 28,
      cries: 84,
      surprises: 93,
      angry: 97,
    },
  },
  {
    id: "Q1MaLGQnX_GHWSeXcUFHy",
    author: "Grady Breitenberg III",
    img: "http://lorempixel.com/640/480/cats",
    client: "Samsung",
    media: "Line",
    date: "Tue Jun 15 2021 02:02:29 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Laborum sit eius facere omnis iste in eaque ut non. Eum ut nihil. Eveniet voluptas repellendus enim aut repellendus modi esse iure. Esse voluptatem ducimus aut non optio id. Atque sint voluptates in rerum dolorem explicabo non ad.\n" +
      " \rOptio deleniti sit. Ullam et in eveniet repellendus minus consequatur ea exercitationem et. Molestias eius inventore qui iste dolores sunt. Rerum molestiae aut quidem doloribus. Aliquam officiis necessitatibus maiores voluptas in officiis.\n" +
      " \rAccusamus deserunt sequi. Occaecati molestiae eum ad ipsam at nam voluptatibus voluptas esse. Aut voluptas deleniti repellendus omnis excepturi et suscipit.",
    sentiment: "Negative",
    impact: 0,
    data: {
      likes: 50,
      comments: 64,
      laughs: 36,
      cries: 68,
      surprises: 95,
      angry: 82,
    },
  },
  {
    id: "6QCfJ_nCYZPGj3NmIVLhW",
    author: "Mattie Koch",
    img: "http://lorempixel.com/640/480/cats",
    client: "Samsung",
    media: "Twitter",
    date: "Tue May 11 2021 09:00:44 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Ab nobis dolor est dolorem reprehenderit voluptate voluptas vero. Officia quasi nemo ut id eius facilis illum nemo consequuntur. Id ea rerum. Sit quia sunt ullam ut nam doloribus. Quas et distinctio aspernatur deserunt. Totam omnis et id suscipit est corporis.\n" +
      " \rVeniam necessitatibus consequatur placeat corrupti libero maxime ab aliquid voluptates. Nesciunt provident a. Dolorem dicta eos dolorem. Ducimus minus maiores. Ullam sit quos aut qui velit veritatis dolore. Reprehenderit ipsam rerum rem rerum.\n" +
      " \rLibero placeat consequatur id blanditiis. Necessitatibus perspiciatis adipisci. Eius voluptatem officia sunt voluptatem dolorem.",
    sentiment: "Positive",
    impact: 1,
    data: {
      likes: 69,
      comments: 53,
      laughs: 50,
      cries: 20,
      surprises: 34,
      angry: 64,
    },
  },
  {
    id: "TGDBWOdkQTRddffh0Acxc",
    author: "Alice Gaylord",
    img: "http://lorempixel.com/640/480/cats",
    client: "Samsung",
    media: "HK01",
    date: "Thu May 20 2021 00:50:52 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Fugiat ut ea. Et optio commodi ut cupiditate doloribus et. Quia et voluptatem iusto laborum laudantium et. Voluptas possimus omnis labore vero hic dolorem magni. Eum eaque aut suscipit et corporis eius totam deleniti architecto.\n" +
      " \rIpsa et voluptas dolores qui. Eos quae numquam repellat perferendis ea enim. Consequatur quidem maiores nesciunt quod. Eveniet aut repudiandae dolor nesciunt culpa.\n" +
      " \rDolores neque sed consequatur nisi ut sequi et sint et. Reiciendis delectus modi nostrum illum nihil facere commodi aut aut. Qui eum necessitatibus culpa est rerum quisquam cupiditate. Animi praesentium sit quaerat deleniti quaerat et quas non. Sapiente expedita ratione odio molestiae nisi.",
    sentiment: "Neutral",
    impact: 1,
    data: {
      likes: 76,
      comments: 12,
      laughs: 93,
      cries: 44,
      surprises: 34,
      angry: 39,
    },
  },
  {
    id: "L__ZDkmf0OUAsq2xW3Nce",
    author: "Vera Bode",
    img: "http://lorempixel.com/640/480/cats",
    client: "Panasonic",
    media: "BuzzFeed",
    date: "Tue Jun 15 2021 09:30:37 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Neque recusandae incidunt omnis et. Earum exercitationem omnis facere dolorem dolor laboriosam. Qui voluptatibus velit voluptatem omnis tenetur in et. Nisi ut et dolore et deserunt ex vitae sapiente.\n" +
      " \rIn non officiis debitis fugiat suscipit. Totam omnis et et minima tenetur. Ut est quam consequatur tempore velit aspernatur. Id provident eos quod. Aspernatur optio quasi similique et omnis et. Debitis sint qui labore cumque.\n" +
      " \rEt unde maxime. Sequi est qui omnis quo magnam. Ea magni consectetur est dolorem. Ut qui quis excepturi in.",
    sentiment: "Negative",
    impact: 4,
    data: {
      likes: 92,
      comments: 75,
      laughs: 82,
      cries: 39,
      surprises: 65,
      angry: 99,
    },
  },
  {
    id: "3WQl7vEwy1RU1RF7V6ClY",
    author: "Alexis Nienow",
    img: "http://lorempixel.com/640/480/cats",
    client: "Apple",
    media: "Line",
    date: "Tue May 04 2021 23:37:06 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Beatae harum et asperiores asperiores. Iste rerum qui modi recusandae qui suscipit aliquam. Molestias ea animi iure eos possimus officia necessitatibus. Rem quasi minima sit voluptas eos.\n" +
      " \rAccusantium voluptas eum et est nam vel porro qui. Sunt quo minus accusamus qui omnis est impedit. Officiis dolore facilis nulla omnis.\n" +
      " \rAlias sed suscipit ut. Accusamus impedit dolores quo. Est est quam magnam beatae ullam ipsum doloribus. Ipsam eaque veritatis quas libero saepe.",
    sentiment: "Positive",
    impact: 1,
    data: {
      likes: 17,
      comments: 86,
      laughs: 64,
      cries: 81,
      surprises: 39,
      angry: 70,
    },
  },
  {
    id: "31c7XwHCd4k52_hNCBXve",
    author: "Ms. Marsha Upton",
    img: "http://lorempixel.com/640/480/cats",
    client: "Sony",
    media: "Twitter",
    date: "Tue May 25 2021 02:29:53 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Voluptatum qui tempora. Soluta harum iure quaerat et. Dolorum perspiciatis tenetur quis exercitationem.\n" +
      " \rNesciunt cum id fugiat et. Omnis qui qui doloremque sed quod. Aut debitis eligendi modi est. Alias et sapiente minus et. Quia earum soluta quia. Et eligendi saepe sit occaecati sed quis et atque.\n" +
      " \rIpsum laudantium tempore eos. Amet omnis sit qui est ea. Error voluptas voluptatem hic eum illum praesentium nesciunt facere et. Rerum tenetur recusandae iusto dolore consequatur quia. Est voluptatem quia.",
    sentiment: "Negative",
    impact: 1,
    data: {
      likes: 12,
      comments: 46,
      laughs: 45,
      cries: 81,
      surprises: 94,
      angry: 99,
    },
  },
  {
    id: "siY-IvBzYu9IxR92QpQ4N",
    author: "Stephanie Schuster",
    img: "http://lorempixel.com/640/480/cats",
    client: "Samsung",
    media: "WeChat",
    date: "Tue Jun 22 2021 07:38:13 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Fuga est et. Sit est esse et facere ut sint. Ratione consequuntur aliquid quibusdam temporibus. Distinctio sequi officiis ratione explicabo. Cum ipsum dolore.\n" +
      " \rMolestiae consequatur quam qui. Et dolorem in eos doloremque sunt et ratione porro fugiat. Voluptatem ipsum debitis quia cum dignissimos hic mollitia atque nemo. Animi nobis distinctio ut autem aut repellat. Autem autem eos nobis nostrum autem hic consectetur. Repellendus ea distinctio rerum deleniti inventore consequatur omnis dolorum.\n" +
      " \rAssumenda rerum tenetur. Veritatis odio at nesciunt id sit sint. Quisquam autem repudiandae nisi delectus consequatur nesciunt. Consequatur accusantium consequatur rerum qui quisquam ipsa est.",
    sentiment: "Positive",
    impact: 1,
    data: {
      likes: 70,
      comments: 68,
      laughs: 86,
      cries: 87,
      surprises: 67,
      angry: 11,
    },
  },
  {
    id: "esGNTWQWW-B9WDiUks7iS",
    author: "Ignacio Schneider",
    img: "http://lorempixel.com/640/480/cats",
    client: "Sony",
    media: "Twitter",
    date: "Sun Jun 13 2021 04:42:23 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Nostrum et ut omnis. Molestiae et harum voluptatem quia perspiciatis quibusdam tempore soluta et. Velit aliquam accusantium quasi cum cupiditate sed.\n" +
      " \rNostrum iste laborum. Soluta itaque ipsum nobis modi repudiandae asperiores illo nam assumenda. Et beatae eos suscipit qui. Dolorem similique et quia.\n" +
      " \rLaudantium dolor odio. Vel magni natus quidem autem corporis voluptatem error dolores. Nobis aut in temporibus sunt et minus enim eligendi incidunt.",
    sentiment: "Neutral",
    impact: 2,
    data: {
      likes: 74,
      comments: 0,
      laughs: 22,
      cries: 73,
      surprises: 74,
      angry: 16,
    },
  },
  {
    id: "0Vb0KV3Pb88uPVD7lWWvk",
    author: "Nicolas Jerde",
    img: "http://lorempixel.com/640/480/cats",
    client: "Panasonic",
    media: "HK01",
    date: "Thu May 06 2021 13:47:19 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Ducimus est iste. Et et autem blanditiis maiores accusamus aut sunt cupiditate quam. Occaecati porro ut est aut voluptatem architecto enim est quo. Aspernatur laudantium sit reprehenderit quia. Aliquam rerum error.\n" +
      " \rQuia quia mollitia accusantium consequatur aut sit. Vel expedita et. Deleniti asperiores at nostrum adipisci ut maxime ex. Veniam magnam dolorem voluptas corrupti doloremque veniam est.\n" +
      " \rIure et tempore. Totam eaque quia libero expedita. Quis adipisci voluptatem autem ad numquam suscipit.",
    sentiment: "Positive",
    impact: 4,
    data: {
      likes: 100,
      comments: 28,
      laughs: 4,
      cries: 50,
      surprises: 91,
      angry: 44,
    },
  },
  {
    id: "jQj81jwB3hmiDCxmgY0r_",
    author: "Herbert Crooks",
    img: "http://lorempixel.com/640/480/cats",
    client: "Apple",
    media: "WeChat",
    date: "Tue May 25 2021 02:09:32 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Repellendus aut ex qui saepe dolor ipsa voluptatem nesciunt molestias. Consequuntur assumenda ut distinctio ratione ut maxime. Consequatur consequuntur atque et est voluptatibus saepe. Impedit et omnis et quos aut et voluptatem. Ab dolorum non nesciunt ratione ut. Minima quia autem quia.\n" +
      " \rSit ducimus aspernatur rerum veritatis. Sed dicta commodi temporibus. Voluptate optio aut eum cum nesciunt. Nulla debitis eos pariatur libero pariatur dignissimos. Sed a beatae tempora perspiciatis.\n" +
      " \rPorro beatae animi numquam. Nulla sunt quaerat et. Est aperiam consectetur veniam ut possimus qui architecto cumque sint.",
    sentiment: "Positive",
    impact: 2,
    data: {
      likes: 41,
      comments: 73,
      laughs: 8,
      cries: 43,
      surprises: 71,
      angry: 74,
    },
  },
  {
    id: "rb5zNb5EVw8SsCFBsredX",
    author: "Mr. Latoya Lueilwitz",
    img: "http://lorempixel.com/640/480/cats",
    client: "Sony",
    media: "LinkedIn",
    date: "Tue Jun 29 2021 09:28:52 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Magnam nisi suscipit architecto rerum quia soluta vel. Consequuntur qui aperiam. Quo temporibus quod provident possimus qui accusamus ea. Et sint deleniti nulla reiciendis quisquam et. Consequuntur corrupti nulla ab vitae iste. Est omnis aperiam molestias.\n" +
      " \rVoluptas dolores quia harum. Nobis aut asperiores repellat eos atque facilis tenetur voluptatem. Quia harum nemo numquam inventore optio voluptatem. Quasi voluptas neque. Omnis odit vel voluptatum facere.\n" +
      " \rEx reprehenderit assumenda odit neque dolorem autem. Possimus corporis saepe fugiat recusandae perferendis maxime nobis doloremque. Accusantium tenetur quis aliquid. Sed a mollitia culpa. Soluta magnam facere molestiae sapiente praesentium pariatur et dolores iusto. Laudantium eius cumque illo nulla aspernatur dolor iusto est illum.",
    sentiment: "Negative",
    impact: 1,
    data: {
      likes: 10,
      comments: 52,
      laughs: 68,
      cries: 94,
      surprises: 73,
      angry: 36,
    },
  },
  {
    id: "MKf14pdTA4MWK4UYllAMb",
    author: "Ricardo O'Conner I",
    img: "http://lorempixel.com/640/480/cats",
    client: "Samsung",
    media: "Twitter",
    date: "Mon May 24 2021 01:39:47 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Nostrum dicta tempore quibusdam. Modi dolorem quae cum est sunt. Est vel expedita nam voluptatem explicabo illum et.\n" +
      " \rVel consectetur dignissimos ratione consequuntur id dicta dolor aut. Labore saepe ratione. Saepe id quidem tempora necessitatibus id velit minima velit. Veritatis rerum dolor recusandae in hic sed aperiam. Alias odio ab molestiae veritatis quas quod non.\n" +
      " \rRem incidunt non rerum quos sed illum. Itaque quidem nobis ex ea laborum ea eum amet et. Maiores eaque temporibus voluptate. Nobis soluta mollitia sint eaque. Nihil magnam officia ratione.",
    sentiment: "Positive",
    impact: 3,
    data: {
      likes: 47,
      comments: 12,
      laughs: 90,
      cries: 6,
      surprises: 13,
      angry: 23,
    },
  },
  {
    id: "lI9VAx9uflco3GH8fPSRN",
    author: "Elmer Romaguera",
    img: "http://lorempixel.com/640/480/cats",
    client: "Sony",
    media: "HK01",
    date: "Fri Jun 25 2021 02:29:04 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Doloremque alias vero ut facilis sequi voluptas ad quo. Voluptate aut aut rerum nesciunt. Aut exercitationem nobis repellendus vel eos. Natus saepe incidunt voluptates veniam officiis vel.\n" +
      " \rVoluptatem itaque enim ipsa aliquid natus voluptatem quo. Vel aut amet. Nihil tenetur quia.\n" +
      " \rEum qui velit officia rerum maxime eius. Repellendus sed non sed. Nulla ea laudantium inventore quaerat illo ut earum. Maiores alias nostrum ducimus exercitationem sunt ut aut. Ut et iste.",
    sentiment: "Positive",
    impact: 3,
    data: {
      likes: 65,
      comments: 66,
      laughs: 16,
      cries: 82,
      surprises: 71,
      angry: 87,
    },
  },
  {
    id: "AZMuHN3a9OQyO5gSH8XUb",
    author: "Grace Rowe",
    img: "http://lorempixel.com/640/480/cats",
    client: "Samsung",
    media: "BuzzFeed",
    date: "Tue Jun 15 2021 06:26:49 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Ipsum deserunt cum repellat iure. Aut et distinctio est sint non. Est dolores vel voluptatem.\n" +
      " \rNobis aut tempore quia voluptas aut et quos ipsum modi. Est omnis quas. Quaerat adipisci voluptatem. Eius et voluptatem consequatur doloribus maxime.\n" +
      " \rOdio non consequatur aliquid distinctio omnis est. Ipsam et reiciendis quo nemo fugiat alias. Excepturi ut repellat quod at voluptatibus voluptatem consequatur natus eaque. Sunt quia odio et reprehenderit rerum ut aliquid. Velit corporis reprehenderit est perferendis quia alias consequatur rerum inventore.",
    sentiment: "Positive",
    impact: 2,
    data: {
      likes: 91,
      comments: 90,
      laughs: 96,
      cries: 42,
      surprises: 56,
      angry: 15,
    },
  },
  {
    id: "5uscxB_4UzcXgUOJcYabQ",
    author: "Ray Mayer",
    img: "http://lorempixel.com/640/480/cats",
    client: "Apple",
    media: "Twitter",
    date: "Fri Jun 11 2021 07:10:16 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Harum ratione dolores tempora id in facilis. Ea mollitia rerum necessitatibus. Cupiditate molestiae minus voluptas autem necessitatibus iure repellendus.\n" +
      " \rEnim doloribus veniam non aspernatur sed officia molestiae. Necessitatibus ullam laudantium et vel ipsa nam ut. Earum possimus qui nulla iusto cumque quas totam. Delectus temporibus cumque eligendi nostrum est iusto nihil doloribus a.\n" +
      " \rAmet voluptatem magnam consequuntur molestiae ipsum sit delectus doloribus. Aliquid est molestias neque quasi. Ab quia deleniti et iure maiores sed inventore deleniti.",
    sentiment: "Negative",
    impact: 4,
    data: {
      likes: 83,
      comments: 36,
      laughs: 39,
      cries: 35,
      surprises: 100,
      angry: 21,
    },
  },
  {
    id: "2YQTMilz6HnosIC5d9TJA",
    author: "Alice Hartmann",
    img: "http://lorempixel.com/640/480/cats",
    client: "Sony",
    media: "LinkedIn",
    date: "Fri May 28 2021 07:57:46 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Voluptatem nihil ut ut eum perferendis odit. Velit quas voluptate nam. Velit perferendis maxime optio laudantium praesentium mollitia quis provident.\n" +
      " \rAutem numquam nostrum qui. Est eos autem modi dolore. Dicta sit dolorem voluptas officiis vel eum in corrupti. Et sapiente quisquam quia sunt consequatur quia fuga alias sed. Debitis sequi sed eum et sed culpa rerum.\n" +
      " \rAliquid esse aliquid consequatur voluptas soluta exercitationem sit id perferendis. Est harum est. Adipisci sint corrupti ut. Vel aut quo recusandae perferendis dicta voluptas. Repellendus aut eveniet labore assumenda sequi quo. Optio voluptatum laboriosam aut odio eius sapiente ipsam velit molestias.",
    sentiment: "Positive",
    impact: 3,
    data: {
      likes: 86,
      comments: 98,
      laughs: 62,
      cries: 19,
      surprises: 13,
      angry: 81,
    },
  },
  {
    id: "0psZX7py0Zj6_VVpQSQgx",
    author: "Mr. Colin Erdman",
    img: "http://lorempixel.com/640/480/cats",
    client: "Samsung",
    media: "LinkedIn",
    date: "Wed Jun 09 2021 16:33:54 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Ut nesciunt vero fugit fugiat quis cupiditate eveniet velit recusandae. Magni quae cumque ipsa vitae debitis dolores. Sit non ipsum porro. Et nihil consectetur. Suscipit ipsam ipsum optio magnam et alias consequatur ut.\n" +
      " \rEst repellat aut aut corporis doloremque quia placeat ex. Dolorem voluptate ea. Id qui dolores ipsam quaerat est cum debitis. Culpa aliquam commodi earum inventore ut quis ratione voluptatibus omnis.\n" +
      " \rOdit mollitia voluptas. Officiis explicabo exercitationem quasi odit minus. Unde autem quis.",
    sentiment: "Positive",
    impact: 2,
    data: {
      likes: 72,
      comments: 83,
      laughs: 22,
      cries: 60,
      surprises: 39,
      angry: 41,
    },
  },
  {
    id: "JlkKxL2qlOh_qgH3oD7uU",
    author: "Ray Sporer",
    img: "http://lorempixel.com/640/480/cats",
    client: "Panasonic",
    media: "Instagram",
    date: "Sun Jun 20 2021 17:23:12 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Ducimus vero et libero necessitatibus dolore. Dolores excepturi cum voluptatem odit. Sapiente perferendis maxime.\n" +
      " \rVelit in vel. Itaque laborum occaecati cum molestias voluptas. Sapiente in minus autem eum odit est.\n" +
      " \rOptio in est et et assumenda aut in rerum tempore. Similique est voluptatem aut. Itaque quis sint porro reiciendis sunt explicabo.",
    sentiment: "Negative",
    impact: 4,
    data: {
      likes: 44,
      comments: 58,
      laughs: 62,
      cries: 46,
      surprises: 40,
      angry: 22,
    },
  },
  {
    id: "hR93f_M8cNR5sLBWJg5q0",
    author: "Joan Harvey",
    img: "http://lorempixel.com/640/480/cats",
    client: "Sony",
    media: "Twitter",
    date: "Thu Jun 03 2021 14:20:34 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Temporibus consequuntur omnis rem et quia nobis. Molestiae blanditiis harum voluptate eius assumenda. Quis ipsum nihil eligendi expedita animi sunt est. Voluptatibus vero doloribus ut qui temporibus quisquam.\n" +
      " \rEt et facere eaque accusamus. Omnis delectus rerum soluta qui nesciunt nihil. Aut sint voluptatem. Impedit sunt sunt labore perspiciatis tenetur cum ipsum animi voluptatem. Natus praesentium harum ullam recusandae rerum.\n" +
      " \rIncidunt explicabo consequatur a minima dolor totam. Asperiores in facilis qui quam assumenda est. Ea in sequi consequatur et consequatur et maxime. Doloribus ut aut dolorem non quod rem quidem rerum ipsa. Est mollitia occaecati non maxime exercitationem ut eum fuga impedit. Numquam quis excepturi quaerat veniam ut ut veniam est officia.",
    sentiment: "Positive",
    impact: 3,
    data: {
      likes: 80,
      comments: 8,
      laughs: 95,
      cries: 81,
      surprises: 26,
      angry: 46,
    },
  },
  {
    id: "9mrNfns-m_CCwY6ycnBDC",
    author: "Miss Wade Stracke",
    img: "http://lorempixel.com/640/480/cats",
    client: "Samsung",
    media: "BuzzFeed",
    date: "Fri Jun 18 2021 11:00:23 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Vel tempore cumque occaecati rerum quae a repellendus. Totam aliquid ut. Excepturi quibusdam corrupti dolorem autem beatae architecto eaque. Itaque tempore vel eius assumenda voluptate consequatur laboriosam. Molestias harum ad labore voluptates quos voluptas est.\n" +
      " \rMagnam reprehenderit sed et tempora et. Alias inventore labore fuga est doloremque amet. Aut nemo consequuntur porro non tempore quod et aut et. Consequatur illum molestiae harum nobis iusto assumenda hic esse.\n" +
      " \rEaque sed perspiciatis ut et voluptatum harum. Temporibus et facilis. Est enim velit natus quam pariatur et aut accusamus sed.",
    sentiment: "Positive",
    impact: 0,
    data: {
      likes: 85,
      comments: 55,
      laughs: 12,
      cries: 15,
      surprises: 62,
      angry: 14,
    },
  },
  {
    id: "VyAiwWMJx5qS2dbm29lFO",
    author: "Latoya Hayes",
    img: "http://lorempixel.com/640/480/cats",
    client: "Samsung",
    media: "LinkedIn",
    date: "Fri Jun 11 2021 20:43:17 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Architecto natus libero cum dignissimos quasi eligendi blanditiis quis. Voluptas corrupti animi aperiam unde. Ducimus minus tempora sit voluptatem enim aliquam eveniet sed ducimus. Adipisci aliquam sunt.\n" +
      " \rIllum itaque ducimus praesentium fugiat omnis ipsa ex. Dolores adipisci recusandae aspernatur eos quia. Nemo et et molestiae earum eaque molestias earum laudantium dolore.\n" +
      " \rSed rerum optio molestias. Est porro quia ut aut officiis similique voluptatem. Quam quis consequatur repellat sed velit. Aut minus sit consequuntur consequuntur placeat voluptatem porro qui.",
    sentiment: "Neutral",
    impact: 3,
    data: {
      likes: 64,
      comments: 3,
      laughs: 60,
      cries: 68,
      surprises: 38,
      angry: 4,
    },
  },
  {
    id: "QyPQj1qM5_Qn0JHYljBjR",
    author: "Steven Kassulke",
    img: "http://lorempixel.com/640/480/cats",
    client: "Samsung",
    media: "WeChat",
    date: "Sat Jun 12 2021 21:59:13 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Illo deleniti sit totam. Facilis libero amet sed. Veritatis error et aut beatae. Natus in aut ex quia inventore quia minus aliquam repudiandae. Quam amet tenetur.\n" +
      " \rVelit dolor vel nam beatae sint ratione ipsa quidem. Est praesentium qui vel ut quidem aut soluta. Occaecati quia nulla accusantium explicabo sit quisquam fuga. Laborum consequuntur sequi. Et odio atque sit velit consequatur odio. Assumenda nobis maxime voluptatum.\n" +
      " \rDeserunt modi sit deleniti id corporis vel minima fuga. Consequuntur neque adipisci. Consequatur exercitationem molestiae expedita eum ut. Possimus quo non facilis recusandae exercitationem.",
    sentiment: "Negative",
    impact: 0,
    data: {
      likes: 12,
      comments: 6,
      laughs: 15,
      cries: 95,
      surprises: 62,
      angry: 36,
    },
  },
  {
    id: "C-_R8ef9vqUoV0endzrE6",
    author: "Sammy Conn",
    img: "http://lorempixel.com/640/480/cats",
    client: "Sony",
    media: "WeChat",
    date: "Tue May 18 2021 16:42:03 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Tenetur necessitatibus quisquam velit dolore nobis magni. Distinctio tempora sit cum molestias nemo aliquid. Ad aperiam dolores.\n" +
      " \rQuia eos qui hic. Illum velit nesciunt est eos quod. Cum recusandae sint corporis itaque itaque aliquam.\n" +
      " \rEsse consectetur placeat dignissimos. Velit dolorum odit voluptatem facilis quidem est et nesciunt qui. Tempora soluta molestias repudiandae doloribus ipsa id sunt. Voluptatibus rem ipsam et. Et consectetur tenetur. Aut ut et vel officia voluptate eos natus.",
    sentiment: "Positive",
    impact: 1,
    data: {
      likes: 84,
      comments: 18,
      laughs: 46,
      cries: 49,
      surprises: 36,
      angry: 84,
    },
  },
  {
    id: "GnggAxfO3BnVHgZgfUgW1",
    author: "Cassandra Bashirian",
    img: "http://lorempixel.com/640/480/cats",
    client: "Sony",
    media: "Facebook",
    date: "Wed May 05 2021 11:04:17 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Explicabo ut cumque nam ut suscipit culpa. Quae et eaque expedita debitis. Quia qui nam ad rem nam qui aspernatur quos ducimus. Reprehenderit architecto praesentium voluptatum et. Quaerat unde totam quia enim quia labore. Nihil et non.\n" +
      " \rPlaceat nihil ea tempore et. Et deleniti ut voluptas numquam officia quis sed. Ipsum in natus. Facilis eos sunt vel.\n" +
      " \rAutem alias dolore et earum ut veniam atque explicabo ea. Dolores quia suscipit molestias minus id exercitationem nobis voluptas. Amet vero et.",
    sentiment: "Neutral",
    impact: 0,
    data: {
      likes: 77,
      comments: 41,
      laughs: 38,
      cries: 6,
      surprises: 28,
      angry: 10,
    },
  },
];
