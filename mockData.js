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
    id: "2PwvNBt_boXarOOZqQ9yX",
    author: "Dr. Melody Goyette",
    client: "Apple",
    media: "WeChat",
    date: "Sun Jun 20 2021 00:06:59 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Non odit ducimus illum et temporibus voluptatem consequuntur. Sint rerum voluptatum iusto. Odit eos quam. Reiciendis voluptatibus dolores unde vel. Aut fugit tenetur consequatur est consequatur.\n" +
      " \rAut repellat necessitatibus consequuntur a quas impedit cumque amet odio. Iure culpa accusantium doloremque pariatur impedit voluptas veritatis cumque asperiores. Sapiente itaque molestiae omnis tempore animi qui aut provident minus. Voluptas commodi et recusandae voluptatum rerum expedita enim aut ea. Sed nulla id dolor assumenda vel laboriosam rerum reprehenderit ipsa. Et illo alias omnis totam et ducimus fugiat.\n" +
      " \rFacere voluptas velit reiciendis iste nam voluptatibus deleniti. Dolorem excepturi quidem qui quae neque qui ut ut. Iusto numquam magni sed blanditiis. Iusto qui sed eaque facere sit quis rerum. Fuga et odio repellendus iste reprehenderit aut labore sapiente.",
    sentiment: "Neutral",
    impact: 1,
    data: {
      likes: 79,
      comments: 19,
      laughs: 63,
      cries: 44,
      surprises: 28,
      angry: 63,
    },
  },
  {
    id: "L1o6oCS0cgkPj73olTZPw",
    author: "Alberta Kreiger",
    client: "Panasonic",
    media: "WeChat",
    date: "Wed May 26 2021 04:57:48 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Sit occaecati eum earum sapiente reiciendis quod delectus omnis. Qui id quaerat. Est id magni magni voluptatem. Facilis officia et voluptate est tempora est debitis. Rem qui aut corrupti temporibus. Dolorem impedit harum laboriosam dolores dolorem itaque.\n" +
      " \rIllum a odio aspernatur dolore voluptatum. Labore omnis quia vero quod necessitatibus voluptatem. Nobis enim laboriosam laudantium eos temporibus. Odit vero possimus corrupti praesentium voluptatem omnis reprehenderit facere deleniti. Et dignissimos deserunt. Aut voluptatem tempora aliquam ea eveniet.\n" +
      " \rMaxime saepe laudantium nisi amet quia. Architecto est natus facilis distinctio. Nostrum tenetur voluptatum voluptatem quae alias consequatur vel. Culpa minus distinctio. Est eveniet perspiciatis nemo et necessitatibus possimus ut nobis ipsa.",
    sentiment: "Neutral",
    impact: 3,
    data: {
      likes: 68,
      comments: 41,
      laughs: 1,
      cries: 68,
      surprises: 76,
      angry: 54,
    },
  },
  {
    id: "kdZ0qJaXWuzN7EmfqHv1K",
    author: "Ray Miller",
    client: "Panasonic",
    media: "LinkedIn",
    date: "Sat May 15 2021 15:26:33 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Deserunt atque numquam vel esse repellat odit voluptatem. Sapiente voluptatem nobis adipisci. Ab animi et tenetur consequatur. Amet quas labore quaerat et omnis. Distinctio autem repellat magnam veritatis.\n" +
      " \rLibero voluptatibus error doloremque nostrum quas molestiae deserunt ea. Possimus iusto vel omnis nemo libero. Quae eum exercitationem qui fugiat explicabo at non numquam. Perferendis ratione officia non amet quisquam. Impedit at asperiores similique molestiae sed.\n" +
      " \rVel ut vero ut nisi placeat. Commodi ut in et. Ut fugit deleniti illum voluptas autem recusandae quos aspernatur corporis. Dolores illum qui dolorem sit sit blanditiis. Quo natus aut rerum aspernatur quibusdam. Nesciunt esse non iusto.",
    sentiment: "Neutral",
    impact: 4,
    data: {
      likes: 34,
      comments: 68,
      laughs: 49,
      cries: 88,
      surprises: 61,
      angry: 40,
    },
  },
  {
    id: "ecfpI7USgcdOgLQgR4ZbT",
    author: "Miss Jason Bechtelar",
    client: "Apple",
    media: "BuzzFeed",
    date: "Sun Jun 20 2021 17:38:19 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Praesentium repudiandae dolore sint nihil laborum. Tempore suscipit consequatur corporis. Earum earum omnis cumque recusandae. Dolores nesciunt neque voluptas. Rerum officiis possimus molestias ut consequatur et et aut ipsa. Debitis exercitationem accusantium repellendus.\n" +
      " \rSint iusto atque earum incidunt quisquam inventore voluptatem et. Voluptatum rerum vel ea enim. Nemo quia nesciunt in recusandae officiis. Quia dignissimos fugit aperiam soluta similique facilis voluptate. Atque accusantium earum. Aliquam enim et dolor reiciendis amet.\n" +
      " \rEst nostrum corporis omnis quae maxime ratione esse. Qui ratione velit id eaque maxime est totam voluptatum. Dolor magnam vel amet ipsam odit suscipit aut ipsa. Dolore labore magni rerum officiis dolorum dolor accusamus.",
    sentiment: "Negative",
    impact: 3,
    data: {
      likes: 94,
      comments: 37,
      laughs: 78,
      cries: 18,
      surprises: 50,
      angry: 98,
    },
  },
  {
    id: "oofJSqvY52GsM-WdxvTrx",
    author: "Lynn Romaguera",
    client: "Panasonic",
    media: "Twitter",
    date: "Wed Jun 09 2021 04:54:40 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Repudiandae nesciunt dicta deleniti tempore. Fugiat repudiandae accusamus non omnis sequi cumque qui rem. Ex non repellendus eaque consequuntur.\n" +
      " \rAutem nulla dolores quia enim dolorem iure amet deserunt. Vitae id at et natus dolor. Vitae et vero et. Dolor occaecati ipsam atque. Earum est fugit et aut fugiat doloribus quis. Quaerat consectetur voluptas quo id sed eveniet accusantium eum.\n" +
      " \rSint id eum et hic impedit. Sapiente enim quam aut recusandae cumque sint iste. Voluptatibus reiciendis suscipit doloremque exercitationem ipsam quas. Minima eum eius aut molestiae eum.",
    sentiment: "Positive",
    impact: 1,
    data: {
      likes: 49,
      comments: 20,
      laughs: 57,
      cries: 23,
      surprises: 28,
      angry: 98,
    },
  },
  {
    id: "s6lyu_oTqxhEEc_7L5j1h",
    author: "Courtney Mante",
    client: "Sony",
    media: "LinkedIn",
    date: "Thu Jun 24 2021 11:02:51 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Qui sed quis aperiam animi. Facilis aspernatur quidem dolores rerum commodi vitae est. Corporis doloribus harum dignissimos maxime ducimus blanditiis laborum inventore molestiae.\n" +
      " \rEum molestias autem molestias sit illum quod error voluptatibus illum. Et consequatur illum et minus eaque fuga. Porro veritatis mollitia ipsa dicta aut repellat ut.\n" +
      " \rVoluptatem quo id consectetur illum. Et aut aut. Aspernatur consequatur molestiae fugit molestiae voluptatum. Est tenetur aliquam illo.",
    sentiment: "Positive",
    impact: 4,
    data: {
      likes: 64,
      comments: 54,
      laughs: 78,
      cries: 21,
      surprises: 54,
      angry: 37,
    },
  },
  {
    id: "88XcaERV448pdcRKG1vgp",
    author: "Kim Effertz",
    client: "Panasonic",
    media: "Line",
    date: "Thu May 06 2021 06:53:02 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Voluptatem libero ducimus. Impedit fugit eligendi quis fugiat fugiat illo eaque facilis. Earum vel quidem nobis. Voluptas debitis ea magnam.\n" +
      " \rEst repellat ducimus deserunt aliquam dolor iste aut minima dignissimos. Accusantium quibusdam eius pariatur voluptatum hic rem libero. Rerum harum ad minima quibusdam odio nulla voluptatem ullam et.\n" +
      " \rDucimus qui nesciunt vitae officiis eius non nobis. Eos debitis assumenda velit cum nisi tempora similique. Et eum sed provident eos rerum consequuntur sunt consequuntur reiciendis. Porro veritatis in vero doloribus. Eius quis voluptas cum consequuntur nobis beatae.",
    sentiment: "Negative",
    impact: 1,
    data: {
      likes: 42,
      comments: 80,
      laughs: 39,
      cries: 91,
      surprises: 44,
      angry: 61,
    },
  },
  {
    id: "0iTRXHfoWbN_kt3Adwwmu",
    author: "Brandon Waters IV",
    client: "Apple",
    media: "Twitter",
    date: "Wed May 19 2021 07:17:40 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Voluptates maiores sequi voluptatum consequatur harum. Reiciendis fugiat et quibusdam ut qui ipsa ut. Deserunt cupiditate ratione reiciendis nulla aut. Non perspiciatis aut velit modi voluptatibus sit.\n" +
      " \rUnde modi maiores voluptate officia. Est iste perferendis omnis enim. Vel necessitatibus minus sequi nesciunt quasi. Laborum hic voluptatem iste iure.\n" +
      " \rNesciunt nobis eum. Autem occaecati molestiae facere adipisci nemo. Debitis in nostrum corrupti eum dolor. Ut in vero ullam dolor minima nesciunt ratione quasi ut. Sunt molestias aut consequuntur et quia tempora facilis. In voluptatem consequuntur.",
    sentiment: "Neutral",
    impact: 0,
    data: {
      likes: 78,
      comments: 84,
      laughs: 89,
      cries: 53,
      surprises: 27,
      angry: 59,
    },
  },
  {
    id: "1Uju0urMaS5q7VA0KuPJG",
    author: "Wade Tromp",
    client: "Sony",
    media: "Instagram",
    date: "Tue May 04 2021 21:37:20 GMT+0800 (Hong Kong Standard Time)",
    post:
      "A consectetur pariatur non nobis est voluptas et est praesentium. Odit quia ab rerum. Sit maiores asperiores dolor. Nemo error ex ea vitae autem possimus et vel.\n" +
      " \rEligendi dolorem harum nam. Quos ab sed praesentium eaque quia commodi nemo. Qui autem est.\n" +
      " \rDoloremque sed esse impedit autem voluptatibus. Quibusdam eveniet nam. At culpa aliquid ad necessitatibus.",
    sentiment: "Negative",
    impact: 2,
    data: {
      likes: 17,
      comments: 34,
      laughs: 99,
      cries: 96,
      surprises: 44,
      angry: 37,
    },
  },
  {
    id: "qQA5iEM7xqXBfOjlhOBxL",
    author: "Terri Murazik Jr.",
    client: "Apple",
    media: "Weibo",
    date: "Mon Jun 21 2021 22:11:53 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Sed veniam repellendus veritatis iste eum ullam. Qui quibusdam et. Ducimus molestiae rem. Eligendi quia voluptatem ea. Voluptatum nobis aut sit similique dolor ut a natus.\n" +
      " \rMolestiae quidem voluptatem sint facere voluptatem corrupti suscipit distinctio. Qui corporis molestias delectus et et repellat nostrum et. A assumenda autem quibusdam quaerat enim enim nobis nesciunt esse. Animi tempore voluptatem reprehenderit dolores sunt cum tempore.\n" +
      " \rEt nihil veniam repudiandae fugit magni odit id possimus ut. Tenetur molestias voluptate et sint. Ut voluptatem inventore beatae beatae quia atque voluptatem iure. Est repellendus neque distinctio unde.",
    sentiment: "Negative",
    impact: 2,
    data: {
      likes: 0,
      comments: 58,
      laughs: 50,
      cries: 78,
      surprises: 10,
      angry: 83,
    },
  },
  {
    id: "hmAYDpN2gwskKM9KAkq72",
    author: "Harold Fadel",
    client: "Panasonic",
    media: "Weibo",
    date: "Wed Jun 09 2021 18:40:04 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Et nihil illum. Minus tempore non itaque est tenetur aut fugit ratione aperiam. Commodi vel rerum. Voluptate qui praesentium officia autem et asperiores. Similique voluptatum quo. Nam velit consequatur error.\n" +
      " \rEos excepturi alias earum maxime ut consequatur nihil enim. Quas aut dolorem repellat quia voluptas architecto minima autem et. Ut possimus laborum earum perspiciatis. Fugiat voluptatem fuga sed necessitatibus sequi.\n" +
      " \rQuibusdam aut voluptatem ex rerum repudiandae. Voluptatem reprehenderit rerum laborum quam. Ab facere esse ipsa rerum minus placeat nesciunt architecto.",
    sentiment: "Neutral",
    impact: 0,
    data: {
      likes: 37,
      comments: 78,
      laughs: 90,
      cries: 79,
      surprises: 77,
      angry: 31,
    },
  },
  {
    id: "eZrOlUnRCRPyBdsb_3l-3",
    author: "Lora Stracke",
    client: "Apple",
    media: "WeChat",
    date: "Tue May 18 2021 15:41:26 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Voluptates voluptas a. Beatae et officia sit est ex porro. Ut consequatur officia. Qui et autem non quo qui omnis sit perferendis. Sint suscipit veniam pariatur eius cumque.\n" +
      " \rEnim consequatur dicta mollitia delectus incidunt atque a nulla. Et rerum cum quisquam aut porro. Maiores ea voluptates aut ullam architecto. Est quisquam odio. Placeat repellendus veniam sit mollitia illum sint nostrum qui voluptatem.\n" +
      " \rBeatae ad corporis atque doloremque recusandae. Quidem temporibus quia atque qui itaque at. Accusamus similique magnam vel in earum officiis. Et ea odio non nesciunt eum fuga.",
    sentiment: "Positive",
    impact: 2,
    data: {
      likes: 14,
      comments: 25,
      laughs: 99,
      cries: 69,
      surprises: 21,
      angry: 7,
    },
  },
  {
    id: "La2N61r-kS-Q7DuautYw3",
    author: "Maureen Keeling",
    client: "Apple",
    media: "HK01",
    date: "Fri May 28 2021 09:21:15 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Expedita deleniti rerum exercitationem dolore. Sapiente alias vel. Non et dolore voluptatem autem officia et porro et voluptatem. Illo tenetur ex ex. Pariatur vero dolores illum eos aut. Quisquam eos accusantium vel modi est rerum numquam.\n" +
      " \rOfficiis iusto et similique consequatur nam. Dignissimos officiis non voluptas reiciendis iusto perspiciatis. Quia numquam dolore dicta. Illo autem maiores harum qui ullam blanditiis. Iure dolores est sunt. Voluptatem voluptates voluptas blanditiis in nam ad saepe.\n" +
      " \rNon voluptas voluptate. Iste tempore repellendus veritatis amet vel. Repellat autem alias et rerum sint iure. Exercitationem exercitationem labore aspernatur quia saepe nemo aspernatur. Temporibus vitae reprehenderit officia enim quia veritatis quis magnam nemo.",
    sentiment: "Neutral",
    impact: 2,
    data: {
      likes: 0,
      comments: 8,
      laughs: 40,
      cries: 15,
      surprises: 49,
      angry: 75,
    },
  },
  {
    id: "WV4arx5Co0uNEJIotk91b",
    author: "Joel Roob",
    client: "Panasonic",
    media: "Line",
    date: "Sat Jun 26 2021 02:43:24 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Aspernatur ad maiores quo inventore voluptas reprehenderit non assumenda reprehenderit. Dolores deserunt aut explicabo aliquid ad et itaque vel sunt. Exercitationem perferendis reprehenderit nam omnis id fugiat illum nihil. Nemo est nulla assumenda magni qui veniam magni. Laborum et unde occaecati assumenda commodi quo qui qui eos.\n" +
      " \rEt molestias atque hic. Soluta maxime quibusdam qui. Quod voluptas molestias autem.\n" +
      " \rEt quas blanditiis animi est eum id. Ullam aut quis quia neque molestias qui. Aspernatur ut qui.",
    sentiment: "Negative",
    impact: 3,
    data: {
      likes: 64,
      comments: 49,
      laughs: 26,
      cries: 51,
      surprises: 76,
      angry: 75,
    },
  },
  {
    id: "QHvMt1F-e9PD6gu5snwOT",
    author: "Mabel Gleichner",
    client: "Apple",
    media: "LinkedIn",
    date: "Sat May 29 2021 15:10:56 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Earum incidunt iste vero quibusdam sint sint enim reiciendis. Delectus laboriosam est perferendis molestiae consequatur. Quidem qui aut. Adipisci harum excepturi esse ut nam consectetur deserunt.\n" +
      " \rQui sint ut iure. Veniam iure quod iusto esse nesciunt. Recusandae velit sequi velit illo dolor nisi. Qui delectus quia pariatur sunt omnis reiciendis ex. Harum consequuntur laboriosam qui laborum ullam nisi veniam voluptate ea. Doloremque enim eum temporibus nam.\n" +
      " \rAut voluptas sapiente qui mollitia minima eveniet. Sed nobis rerum rerum doloribus illum ex aliquam nesciunt architecto. Inventore in odit velit.",
    sentiment: "Negative",
    impact: 0,
    data: {
      likes: 40,
      comments: 53,
      laughs: 19,
      cries: 1,
      surprises: 50,
      angry: 23,
    },
  },
  {
    id: "h7CsNUe-w7lfcDuCS4e2C",
    author: "Marie Waters",
    client: "Apple",
    media: "Line",
    date: "Wed May 05 2021 13:02:59 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Voluptas sunt ut eligendi ratione dolorem aspernatur quod nam vel. Maiores cupiditate dolorem sit. Exercitationem atque aut repellendus soluta est. Est aperiam necessitatibus facilis laudantium itaque molestias. Dolor beatae reiciendis dolores provident quis deleniti quas cumque. Sequi numquam vitae unde neque nam quidem sed.\n" +
      " \rRepellendus facere modi sint quasi. In fugit eum vel qui labore architecto. Aut alias pariatur.\n" +
      " \rSequi est mollitia vel voluptatem. Recusandae aut iure facilis. Totam nihil voluptatem. Sint nisi quos est dolores molestiae quo aliquid accusamus.",
    sentiment: "Neutral",
    impact: 2,
    data: {
      likes: 57,
      comments: 57,
      laughs: 26,
      cries: 81,
      surprises: 39,
      angry: 35,
    },
  },
  {
    id: "jgDYDxSdVaNF6rmHXAoPP",
    author: "Gloria Sauer Jr.",
    client: "Panasonic",
    media: "Instagram",
    date: "Tue Jun 01 2021 08:46:50 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Cum architecto cum tempora tenetur et dolorem blanditiis excepturi. Laudantium sit est aliquam. Voluptatem et dolores. Quam dolorum praesentium voluptatem. Accusantium nostrum atque itaque neque saepe libero perspiciatis sed magni.\n" +
      " \rReiciendis corrupti aperiam deserunt sunt fugiat in quis incidunt. Eos in nemo ipsa sunt sed repellat voluptatem. Explicabo minima repellat amet. Quis ad dolorem voluptatum quia voluptate. Blanditiis sed rerum maiores perspiciatis soluta et asperiores.\n" +
      " \rNobis delectus quaerat architecto assumenda voluptatem. Deleniti et culpa ut eum. Ut illo dolore numquam et dignissimos excepturi. Dolorem deserunt odio facere porro. Quaerat facere necessitatibus sit ullam consequuntur quia. Voluptas possimus hic quaerat sint.",
    sentiment: "Negative",
    impact: 0,
    data: {
      likes: 64,
      comments: 77,
      laughs: 9,
      cries: 22,
      surprises: 10,
      angry: 38,
    },
  },
  {
    id: "dGmQzG2iS2PJ6SnXPwI0A",
    author: "Nora Russel",
    client: "Panasonic",
    media: "WeChat",
    date: "Mon Jun 07 2021 11:26:49 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Non culpa laboriosam harum quasi. Sint rerum aut magni eum eum voluptatum. Sunt est ducimus.\n" +
      " \rAtque nemo nisi similique. Et et est quibusdam est perspiciatis. Aut ab atque hic recusandae laudantium quia. Vel tenetur vel placeat delectus repellat quas. Et qui impedit voluptatem ex qui est quis expedita dicta. Voluptatem distinctio quibusdam reiciendis.\n" +
      " \rQui occaecati dolore animi. Vel nihil odit. Neque ut nulla aut est aliquid dolorem ipsa dicta et. Minima velit quod nihil rem at a dicta.",
    sentiment: "Negative",
    impact: 2,
    data: {
      likes: 42,
      comments: 33,
      laughs: 77,
      cries: 87,
      surprises: 20,
      angry: 93,
    },
  },
  {
    id: "eh_dGPNedUBlcLE-jFlz-",
    author: "Melody Gulgowski",
    client: "Panasonic",
    media: "BuzzFeed",
    date: "Sun Jun 13 2021 08:45:33 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Qui mollitia ut. Sunt ut aut inventore. Est quo temporibus fugiat provident sit exercitationem sunt quibusdam modi.\n" +
      " \rPossimus esse consequatur est fuga. Tenetur id beatae corrupti reiciendis consequatur aliquam est officia. Iure alias sint.\n" +
      " \rOmnis tempore voluptatem dicta ab pariatur error omnis molestias molestiae. Error laudantium nostrum quis et in sunt. Eum accusamus voluptates voluptas. Numquam omnis enim.",
    sentiment: "Neutral",
    impact: 0,
    data: {
      likes: 73,
      comments: 22,
      laughs: 5,
      cries: 52,
      surprises: 72,
      angry: 62,
    },
  },
  {
    id: "KkmvsLKcPCfPKkRgPU9jh",
    author: "Diana Feil",
    client: "Apple",
    media: "Weibo",
    date: "Tue Jun 29 2021 22:11:36 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Ut odit et quam cupiditate ut velit modi cumque. Mollitia earum ea repellat voluptas qui. Dicta tenetur quia est enim. Est incidunt non.\n" +
      " \rA aspernatur itaque et facilis est id. Quia possimus magnam ex dolorem est ipsa qui est. Neque ea incidunt facilis rerum amet aperiam repellat inventore quis.\n" +
      " \rAliquam totam occaecati. Modi voluptates quis autem aliquam est dolor magnam. Quo recusandae laudantium unde cum dicta quisquam id. Reiciendis est est. Veniam officia vel temporibus perferendis odio facere facilis consequatur. Id vero quia optio blanditiis vitae recusandae nemo.",
    sentiment: "Negative",
    impact: 0,
    data: {
      likes: 11,
      comments: 87,
      laughs: 23,
      cries: 57,
      surprises: 68,
      angry: 89,
    },
  },
  {
    id: "sBL-uUaNqXlFT9KaxTSlb",
    author: "Owen Sporer",
    client: "Panasonic",
    media: "Weibo",
    date: "Sun May 16 2021 08:40:34 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Eum ut expedita in vel. Sequi illo ut qui atque incidunt praesentium qui vero et. Porro ipsam ipsam omnis saepe quasi assumenda aspernatur numquam. Exercitationem nostrum harum impedit dolores laudantium et autem qui aperiam. Quia quis accusamus dicta quis.\n" +
      " \rVelit nisi distinctio. Fugiat vero et molestiae voluptates minima ut nam quo. In velit fugit dignissimos harum voluptatum laborum debitis ea.\n" +
      " \rConsequatur cupiditate consequatur reprehenderit dolorem quod perspiciatis veniam maxime et. Optio sed ut omnis consequatur. Quia facere consequatur consequuntur sit ut unde voluptatibus nihil quia. Dolorem ut odit eius tempore dolorem vel optio. Est culpa beatae maxime veritatis molestiae incidunt.",
    sentiment: "Positive",
    impact: 1,
    data: {
      likes: 47,
      comments: 38,
      laughs: 92,
      cries: 6,
      surprises: 51,
      angry: 65,
    },
  },
  {
    id: "AqcfnkfJjvSNFZklZ6-5V",
    author: "Ross VonRueden",
    client: "Panasonic",
    media: "BuzzFeed",
    date: "Tue May 04 2021 13:58:31 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Aut eius harum et illum. Iusto repudiandae nesciunt perspiciatis reprehenderit non. Unde corrupti aut unde quis in libero porro.\n" +
      " \rExplicabo sed placeat quam aspernatur et fugiat. Eos porro sunt numquam quia quia odio dolores et. Et at beatae id est laborum.\n" +
      " \rDeserunt non tempora ipsum aperiam rerum. Ut vero voluptatem praesentium sequi. Cum quaerat est tenetur velit ab ut. Delectus non qui. Molestias distinctio ut ut laborum corrupti veritatis. Architecto et vitae enim cum unde occaecati voluptatem in.",
    sentiment: "Neutral",
    impact: 1,
    data: {
      likes: 73,
      comments: 55,
      laughs: 23,
      cries: 17,
      surprises: 60,
      angry: 84,
    },
  },
  {
    id: "A4zsFCyaEJHQCVNZg649g",
    author: "Dr. Benjamin Howell",
    client: "Samsung",
    media: "Instagram",
    date: "Fri May 07 2021 05:56:51 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Nostrum sit ex nesciunt exercitationem consequatur. Corporis mollitia voluptatem facere accusamus repudiandae quisquam sit. Est minima vel enim possimus id deserunt veniam quos illum.\n" +
      " \rQui accusantium voluptatum. In expedita non sint at qui dolorem. Assumenda sit tenetur aliquam ut quia ratione quis et. Maxime iste unde illo dolorem et omnis voluptatum vitae. Ut dignissimos veniam accusamus aliquam deserunt laborum sed aspernatur.\n" +
      " \rRepellat numquam velit voluptate ratione voluptatem qui. Cum voluptate rem molestiae veritatis ratione officiis. Nihil aut optio vel accusantium. Et totam quis ex. Quibusdam velit saepe at voluptas ipsum quo molestiae accusamus.",
    sentiment: "Negative",
    impact: 1,
    data: {
      likes: 17,
      comments: 85,
      laughs: 0,
      cries: 12,
      surprises: 55,
      angry: 59,
    },
  },
  {
    id: "Oda-XlQNsfBj8IlILICZR",
    author: "Pat Kub",
    client: "Sony",
    media: "Twitter",
    date: "Thu Jun 10 2021 16:47:19 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Magnam animi illum aut delectus sed eius. Reiciendis ut provident consequatur tenetur repellendus facere accusantium. Consequatur atque ut. Non molestiae et nulla quae.\n" +
      " \rAccusantium eligendi voluptatem voluptatum. Velit natus molestias occaecati est quae. Rerum veritatis repudiandae in reprehenderit neque esse. Optio omnis iste cumque modi deserunt consequatur.\n" +
      " \rSunt neque assumenda repellendus. Nisi eaque dicta. Expedita dolorem ut nam qui omnis veritatis atque nostrum ullam.",
    sentiment: "Neutral",
    impact: 1,
    data: {
      likes: 58,
      comments: 58,
      laughs: 94,
      cries: 64,
      surprises: 25,
      angry: 75,
    },
  },
  {
    id: "9TZTSCwMHmScKiTf8_ftj",
    author: "Oscar Pollich",
    client: "Samsung",
    media: "BuzzFeed",
    date: "Sat Jun 19 2021 04:03:23 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Quia minus unde nostrum voluptatibus id. Sit labore repellat consectetur odio officiis. Impedit possimus vitae commodi atque id. Ipsam quo suscipit incidunt qui iure. Unde eligendi iste sed sunt qui sunt cum eos et.\n" +
      " \rEt est inventore voluptas aut placeat quasi. Et dolores modi aut. Adipisci aliquam cumque qui voluptatem cupiditate necessitatibus dolorem maxime tempora.\n" +
      " \rEius blanditiis ipsum id quae quibusdam. Ratione rerum soluta facere debitis molestiae praesentium. Dignissimos animi officia aut nulla. Amet natus ipsa totam harum non.",
    sentiment: "Negative",
    impact: 4,
    data: {
      likes: 76,
      comments: 39,
      laughs: 31,
      cries: 70,
      surprises: 76,
      angry: 74,
    },
  },
  {
    id: "QTXcp9ChphNLTOz58Fs3B",
    author: "Patsy Lesch",
    client: "Samsung",
    media: "Facebook",
    date: "Mon May 10 2021 13:46:52 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Illum minima labore nemo. Necessitatibus odit neque incidunt dicta. Est quaerat expedita. Amet aperiam harum. Voluptates corporis voluptatem. Sed ad deleniti suscipit cumque dolore.\n" +
      " \rMaxime eos qui asperiores dolor eaque. Exercitationem cum id est consectetur nisi nostrum accusantium nisi. Pariatur totam porro nesciunt. Ut sed id consectetur consequatur nihil. Voluptas sit dolores. Officia sequi qui sed rerum reiciendis voluptatem voluptatum velit doloremque.\n" +
      " \rRecusandae reiciendis pariatur. Possimus harum unde consequatur mollitia perferendis autem sunt repudiandae. Qui et et ut sed nam. Numquam dignissimos laboriosam at aut nesciunt tenetur. Et ex fuga et hic. Id recusandae numquam itaque est at ut repellendus qui ex.",
    sentiment: "Neutral",
    impact: 3,
    data: {
      likes: 4,
      comments: 35,
      laughs: 3,
      cries: 24,
      surprises: 81,
      angry: 15,
    },
  },
  {
    id: "LkETU4BGjzEpPc6s49JsO",
    author: "Garry Brown",
    client: "Sony",
    media: "BuzzFeed",
    date: "Sun May 16 2021 16:53:35 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Ut eum recusandae. Facilis saepe tenetur. Ratione ullam optio quae voluptatem dignissimos. Quaerat quia assumenda libero velit veniam beatae debitis voluptatum facilis.\n" +
      " \rNecessitatibus at nesciunt quam maxime animi. Enim quidem exercitationem aut aspernatur non quidem. Qui rerum voluptatem. Et architecto laudantium mollitia et molestiae ut quas.\n" +
      " \rEnim consequatur accusamus. Corporis natus adipisci corrupti est deserunt cumque ipsa reprehenderit. Amet quas numquam debitis aut. Repudiandae praesentium accusamus rerum voluptates ea mollitia ut natus quia. Et excepturi ad nulla voluptates rerum molestiae aut et.",
    sentiment: "Positive",
    impact: 4,
    data: {
      likes: 10,
      comments: 21,
      laughs: 66,
      cries: 96,
      surprises: 25,
      angry: 87,
    },
  },
  {
    id: "65_zN-ygbGIgKMT0XXlRn",
    author: "Miss Karla Mante",
    client: "Samsung",
    media: "Twitter",
    date: "Mon Jun 07 2021 16:41:25 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Fuga quos aut enim ipsa. Repudiandae aut non omnis voluptatem. Corrupti similique non in cumque quidem magni. Occaecati vel quia dolorem eos rerum non. Magni voluptas voluptatibus et quae.\n" +
      " \rQui qui nam magnam id error. Velit quia est molestias. Dolorem est asperiores et labore minima. Numquam aut cupiditate nisi quidem cum ullam harum et magnam.\n" +
      " \rRerum similique et aperiam. Exercitationem at earum neque repellat quis qui tempore laboriosam. Unde deleniti voluptate necessitatibus beatae expedita qui rem aperiam ut.",
    sentiment: "Negative",
    impact: 3,
    data: {
      likes: 88,
      comments: 83,
      laughs: 48,
      cries: 34,
      surprises: 55,
      angry: 32,
    },
  },
  {
    id: "9M8qd8wmh1Vfwjt9MKT0y",
    author: "Shelley Swaniawski",
    client: "Panasonic",
    media: "Facebook",
    date: "Sun Jun 06 2021 08:55:05 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Omnis cumque eius. Natus sit ipsa. Dolorem fuga aut dolorem. Neque et error dolores sapiente et reprehenderit deleniti eum laboriosam. Et sint dignissimos natus dolor tempore est. Atque et et id architecto ab perferendis.\n" +
      " \rModi architecto cum aut vel dolor perspiciatis neque. Atque qui ut porro asperiores saepe reiciendis officia aut. Cupiditate et sit facere vero. Neque voluptas quis inventore quidem aliquam dolores vel consequatur. Eaque velit vel quia voluptatem eum ab adipisci.\n" +
      " \rQui explicabo rem et quisquam quam. Tenetur sunt aliquam. Aperiam quas quia in ab. Facere distinctio repellat quisquam nihil itaque. Repudiandae eligendi quia quod voluptate optio.",
    sentiment: "Positive",
    impact: 0,
    data: {
      likes: 80,
      comments: 61,
      laughs: 83,
      cries: 96,
      surprises: 31,
      angry: 22,
    },
  },
  {
    id: "eAeOAwoKfsG1AHkmMMlUr",
    author: "Victor Block",
    client: "Sony",
    media: "Instagram",
    date: "Sat Jun 12 2021 05:14:10 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Quibusdam magni consequatur eos provident ea cupiditate ipsa. Qui ipsa sint voluptatem sit ratione sed suscipit et. Natus alias odit sed commodi veniam velit quia tenetur.\n" +
      " \rUt aut qui incidunt ipsum ipsum tempora quibusdam qui amet. Dolor deleniti suscipit et sunt rerum. Labore nostrum et iure aliquam non nihil reprehenderit. Iusto velit nihil minus itaque sequi deleniti rerum. Voluptatem qui a atque ab tenetur nihil itaque qui.\n" +
      " \rEt possimus corporis aut veniam distinctio ea officia voluptatem ut. Voluptatem quia distinctio saepe dicta aut. Repellat rerum sapiente nisi. Veritatis consequatur qui dicta non.",
    sentiment: "Neutral",
    impact: 3,
    data: {
      likes: 68,
      comments: 17,
      laughs: 7,
      cries: 56,
      surprises: 78,
      angry: 78,
    },
  },
  {
    id: "iNBQCFcH1Xey6KslSp3gs",
    author: "Emmett Towne V",
    client: "Sony",
    media: "HK01",
    date: "Sat Jun 19 2021 03:47:42 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Consequatur est laborum et qui voluptas et. Aut quia beatae necessitatibus necessitatibus. Nemo rerum ipsum et nobis.\n" +
      " \rIn aut enim ipsa rem. Molestiae culpa velit nostrum accusamus. Sequi eligendi eius quas facilis fugiat vero. Nihil est sed inventore laudantium est dolores. Voluptas et sunt et.\n" +
      " \rMaxime fugit similique dolor rerum dolor. Voluptatem quidem dolor nulla sed. A labore fugit ex deserunt eum. Distinctio illum facere voluptas. Id similique voluptatibus numquam ab. Consectetur magnam incidunt et minus.",
    sentiment: "Positive",
    impact: 3,
    data: {
      likes: 92,
      comments: 93,
      laughs: 49,
      cries: 61,
      surprises: 43,
      angry: 35,
    },
  },
  {
    id: "3BzsRmgHpP5dj-2X490H8",
    author: "Sonia Hartmann",
    client: "Panasonic",
    media: "HK01",
    date: "Thu May 20 2021 22:19:15 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Modi quo voluptatem eius soluta sit sint et sint aut. Sit maiores vero eligendi et sed ea eum ea. Quia aperiam ea qui. Accusantium unde et. Porro cum ea nemo culpa est quis. Facere enim enim rem dolorem eum quae quis velit.\n" +
      " \rEsse sint beatae. Et dolores ut suscipit fugiat quo. Placeat qui sit impedit. Eos voluptatem aut aspernatur ut quia veritatis beatae est. Voluptatum quisquam velit sunt.\n" +
      " \rNon quia non. Et aut voluptate quod corporis dicta suscipit vel nesciunt sit. Odit sunt debitis molestias odit quis. Eum commodi repellat quis non aut dignissimos dolore corporis officia. Temporibus cupiditate quod numquam architecto. Dolorem expedita quo et qui quia unde voluptas.",
    sentiment: "Positive",
    impact: 4,
    data: {
      likes: 17,
      comments: 31,
      laughs: 4,
      cries: 17,
      surprises: 91,
      angry: 85,
    },
  },
  {
    id: "dBgsUoM6X1f2zpj2RQSRL",
    author: "Eleanor Casper",
    client: "Sony",
    media: "Weibo",
    date: "Tue Jun 01 2021 18:41:18 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Quasi aut ad praesentium voluptas laudantium aut tenetur quibusdam. Ducimus natus ad aut rerum illum in aut numquam. Aliquid ut nihil fugiat accusantium impedit eligendi quas illo. Vel voluptatem quia cum cupiditate omnis expedita ea unde.\n" +
      " \rFacere libero perferendis. Accusantium iure tempore eum vel a possimus. Est adipisci corporis ducimus quo.\n" +
      " \rExcepturi sed accusamus natus quo laboriosam. Quis omnis iure nam voluptatem quos. Et non fuga repellat quod culpa hic. Veritatis dolor nam natus deserunt qui. Maxime soluta at molestiae.",
    sentiment: "Neutral",
    impact: 0,
    data: {
      likes: 20,
      comments: 52,
      laughs: 79,
      cries: 58,
      surprises: 26,
      angry: 80,
    },
  },
  {
    id: "67NsVk_1IZ_xfGdvMk7TA",
    author: "Jamie Parisian",
    client: "Sony",
    media: "Instagram",
    date: "Thu May 06 2021 23:37:43 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Cupiditate architecto iure numquam veritatis rerum maiores necessitatibus. Voluptates necessitatibus blanditiis et facilis et omnis sunt. Et quia sit facere asperiores. A architecto at corrupti. Necessitatibus eum et ipsum. Ea voluptatem repellat incidunt magni aperiam praesentium.\n" +
      " \rOfficia minus qui commodi cumque sint. Nihil sint voluptatum sunt et totam exercitationem earum consequatur. Quis quae ipsam numquam corrupti. Repellat rerum iure qui voluptatem. Voluptate odit non ad.\n" +
      " \rUllam ullam temporibus sint rem. Rerum quisquam minima veniam et corporis est eius voluptas odit. Perspiciatis soluta quod error alias eveniet amet est. Minima nisi ea vel ipsum voluptas. Voluptatem nisi quos ut voluptatem quas non veniam.",
    sentiment: "Positive",
    impact: 0,
    data: {
      likes: 66,
      comments: 9,
      laughs: 82,
      cries: 15,
      surprises: 81,
      angry: 65,
    },
  },
  {
    id: "qXvo0Gdig3h44vATjZDzQ",
    author: "Keith Little",
    client: "Samsung",
    media: "WeChat",
    date: "Thu May 20 2021 14:30:41 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Vero reprehenderit voluptate et officiis laudantium praesentium dolores ut. Iste magnam distinctio ab placeat ullam. Et et vel consequuntur velit ut deleniti quisquam.\n" +
      " \rMaxime sunt aliquam beatae. Aut nobis occaecati sequi dolore eos omnis cum repellendus ut. Dolorem enim eos et accusamus ea. Odit molestias ut quo ex praesentium ullam.\n" +
      " \rUt voluptas ad nemo voluptate velit ipsa et odio. Aut beatae quia libero recusandae magnam et voluptas excepturi nulla. Quia ut sit ad quia. Nulla fuga voluptas odit atque explicabo dignissimos velit voluptatum voluptatibus. Occaecati facilis exercitationem alias.",
    sentiment: "Positive",
    impact: 1,
    data: {
      likes: 41,
      comments: 28,
      laughs: 73,
      cries: 56,
      surprises: 90,
      angry: 76,
    },
  },
  {
    id: "eBR54KSRBsTjqat80_Nmt",
    author: "Carrie Bergstrom",
    client: "Panasonic",
    media: "HK01",
    date: "Wed May 05 2021 21:15:36 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Quaerat aut quibusdam rem. Quidem ex quibusdam consectetur molestiae sint officia et optio tempora. Voluptatum corrupti odit reiciendis eligendi eos voluptatem laborum. A voluptates magni rerum voluptas voluptatibus. Quisquam quaerat nulla repellendus quia tenetur. Tenetur consequatur dolorem.\n" +
      " \rMollitia aut est quia numquam odit. Modi non sed et nesciunt maiores repellendus aut incidunt. Maxime excepturi rerum quod. Cumque facilis voluptatem a excepturi et ut et.\n" +
      " \rIllum atque laudantium modi deleniti voluptatem perspiciatis. Sed maiores aut quia reprehenderit ex. Voluptates nobis veniam dolorem omnis est distinctio.",
    sentiment: "Positive",
    impact: 1,
    data: {
      likes: 5,
      comments: 5,
      laughs: 84,
      cries: 1,
      surprises: 74,
      angry: 33,
    },
  },
  {
    id: "svQzfDq8K385smzbLzzqh",
    author: "Jane Nicolas",
    client: "Samsung",
    media: "HK01",
    date: "Thu Jun 03 2021 05:38:07 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Mollitia quos atque dolor autem sit. A dolores voluptas quibusdam et repellendus non veritatis. Suscipit incidunt maxime aut aut cum. Rerum atque quaerat voluptatem dicta aliquam consectetur deserunt.\n" +
      " \rInventore ea consequatur rerum et voluptates et at corporis. Qui temporibus quia cupiditate reprehenderit. Quia quos at animi.\n" +
      " \rUt praesentium officia. Quia est quae molestias laboriosam blanditiis libero. Sint delectus officia voluptatum aut aut aperiam.",
    sentiment: "Positive",
    impact: 0,
    data: {
      likes: 90,
      comments: 84,
      laughs: 67,
      cries: 63,
      surprises: 69,
      angry: 20,
    },
  },
  {
    id: "gVkH_S2OWkDrA1RuGxNu8",
    author: "Mr. Ada Ryan",
    client: "Sony",
    media: "Line",
    date: "Sun May 30 2021 18:49:34 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Repellat et modi non. Qui ea consequatur molestiae dolor modi quia asperiores reiciendis. Illum praesentium fuga saepe. Non aut omnis dignissimos. Consequuntur soluta eveniet et sit voluptatibus blanditiis optio et.\n" +
      " \rConsequatur cum voluptate quod eaque voluptatem consequatur sit. Et voluptatem voluptatum nam omnis voluptatem omnis quibusdam. Asperiores inventore et praesentium id vero.\n" +
      " \rConsectetur aliquam voluptas dolorum minima voluptatem voluptatum. Reprehenderit error laudantium rerum sed dicta quis eaque et. Delectus vero ipsa rerum cum non distinctio laboriosam. Est facilis inventore dolorem autem aut sequi. Aperiam perspiciatis ea ipsum modi enim occaecati eum quidem sed.",
    sentiment: "Neutral",
    impact: 0,
    data: {
      likes: 0,
      comments: 65,
      laughs: 0,
      cries: 4,
      surprises: 20,
      angry: 62,
    },
  },
  {
    id: "uR3NzTUcUiNPlhfS37UjY",
    author: "Carlos Hamill I",
    client: "Sony",
    media: "Twitter",
    date: "Sun Jun 27 2021 15:57:24 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Esse fugit placeat iure ipsum quae voluptas vel. Voluptatem atque architecto molestias illum perspiciatis repellat inventore debitis ea. Quo est et deleniti repellat et enim facere officiis omnis. Ut suscipit et eaque ea facilis placeat est neque.\n" +
      " \rAmet sint suscipit. Quia omnis necessitatibus incidunt quia hic porro. Ad illum amet consequatur. Quae aut qui officia doloremque exercitationem quos. Nesciunt fuga quas omnis vitae.\n" +
      " \rQui et incidunt. Laboriosam quia blanditiis et. Voluptas id quasi sint qui distinctio nobis iure. Corporis mollitia itaque consequatur voluptatum ipsam voluptatem voluptas et et.",
    sentiment: "Negative",
    impact: 1,
    data: {
      likes: 45,
      comments: 62,
      laughs: 43,
      cries: 70,
      surprises: 8,
      angry: 18,
    },
  },
  {
    id: "k1yS5RKyxid2DAepwomy5",
    author: "Joan Schiller",
    client: "Apple",
    media: "Instagram",
    date: "Mon May 24 2021 15:54:47 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Explicabo repellat aperiam voluptates dicta atque asperiores optio. Amet nihil iure et nemo. Optio sint officia libero corrupti accusantium sit facilis sed.\n" +
      " \rFacilis iste dicta. Quia cum quis impedit omnis vel accusantium est debitis hic. Repellat animi sunt earum repellendus et incidunt. Debitis et nemo sit quam. Voluptas perferendis illum placeat nobis consequuntur quas. Ratione placeat molestias et quos rerum quis.\n" +
      " \rVoluptas voluptates deserunt dolores dignissimos. Modi nam aut maiores id sed. Consectetur voluptatem ipsa necessitatibus deleniti tempore tempora et saepe.",
    sentiment: "Neutral",
    impact: 4,
    data: {
      likes: 51,
      comments: 40,
      laughs: 24,
      cries: 20,
      surprises: 94,
      angry: 8,
    },
  },
  {
    id: "H_lIwkxaGCBSLI_NiVwL8",
    author: "Sammy Gutkowski",
    client: "Sony",
    media: "Weibo",
    date: "Fri May 21 2021 12:18:43 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Autem eum libero ut dolor. Minus ipsa et et. Architecto mollitia sunt corrupti reprehenderit error suscipit. Quidem repellat quisquam et dolorem ipsum recusandae nam sunt earum.\n" +
      " \rTenetur dolores id quasi vel sequi maxime rerum itaque et. Qui sit recusandae. Amet cum vel perferendis qui nobis perferendis.\n" +
      " \rQuaerat quos id eos et laboriosam. Accusamus dolor quo. Vero quia voluptas minima deleniti quis animi enim numquam.",
    sentiment: "Positive",
    impact: 3,
    data: {
      likes: 19,
      comments: 13,
      laughs: 0,
      cries: 98,
      surprises: 18,
      angry: 7,
    },
  },
  {
    id: "rkrZHBN18EQJjlX_NDhtL",
    author: "Joe Lang II",
    client: "Panasonic",
    media: "LinkedIn",
    date: "Tue May 04 2021 13:52:33 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Porro aliquid perspiciatis et doloremque est sapiente dicta placeat. Dignissimos optio deleniti sunt qui et enim eos similique. Ut corporis est quae provident labore suscipit et. Illum totam aut ullam non non nulla molestiae unde. Sit recusandae animi. Aliquam sequi dolores porro itaque autem non incidunt quia deserunt.\n" +
      " \rAd assumenda facere quisquam facere modi est ab. Suscipit aliquam recusandae et. Quod ab atque id et pariatur inventore voluptas. Optio sit non mollitia ut labore occaecati minus culpa. Commodi officia exercitationem unde. Molestiae molestiae rerum saepe eius quae beatae.\n" +
      " \rSed tempora ipsam minima et corrupti rem nihil sed ullam. Facilis consequuntur porro odit dolore numquam soluta dolor impedit numquam. Natus voluptatem eaque sint nobis quaerat sed amet expedita.",
    sentiment: "Neutral",
    impact: 4,
    data: {
      likes: 5,
      comments: 93,
      laughs: 79,
      cries: 95,
      surprises: 34,
      angry: 80,
    },
  },
  {
    id: "-L0e4jjnBnRUfSBzouMv-",
    author: "Lee Erdman III",
    client: "Panasonic",
    media: "Instagram",
    date: "Wed Jun 16 2021 18:15:02 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Neque aliquid et esse magnam iure magnam adipisci qui. Sed provident labore. Nulla ratione perspiciatis dolores et beatae ut omnis. Exercitationem omnis officia laboriosam rerum non quos placeat. Quia et ducimus adipisci illo debitis. Error est beatae.\n" +
      " \rEst dolores voluptates in omnis aut. Illum et ea possimus aut exercitationem. Corrupti consequatur adipisci quidem sunt.\n" +
      " \rPorro consequatur suscipit nihil dolor autem aut. Tempore sequi aut suscipit distinctio quam necessitatibus soluta placeat nemo. Quos tempora consequatur repudiandae.",
    sentiment: "Neutral",
    impact: 2,
    data: {
      likes: 69,
      comments: 9,
      laughs: 56,
      cries: 18,
      surprises: 64,
      angry: 72,
    },
  },
  {
    id: "Fr5iYoFmtwOEL1Dujq7c7",
    author: "Nicholas Watsica",
    client: "Samsung",
    media: "Twitter",
    date: "Mon Jun 07 2021 01:35:50 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Ipsam et repellendus alias ex ipsum dolore. Nulla et nisi sed a officiis debitis. Incidunt omnis et. Tempora placeat in id quasi sed voluptatibus. Illum consequuntur nihil est quaerat quis et.\n" +
      " \rSimilique saepe occaecati odio et. Sint maiores officiis culpa beatae aut quos. Ut inventore vel et fugiat facilis.\n" +
      " \rQuia dolores enim aliquam. Et ullam rerum quidem excepturi est et adipisci. Et molestiae placeat autem nesciunt occaecati necessitatibus voluptatem quisquam optio. Molestiae molestiae maiores repellat veritatis optio sint quia architecto.",
    sentiment: "Positive",
    impact: 0,
    data: {
      likes: 61,
      comments: 39,
      laughs: 98,
      cries: 28,
      surprises: 23,
      angry: 92,
    },
  },
  {
    id: "1Y-0n7U-q1LPDmBbf2Ch-",
    author: "Emanuel Bahringer",
    client: "Sony",
    media: "HK01",
    date: "Mon May 17 2021 03:59:37 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Voluptate facilis facilis aut quo ab et at nulla consequuntur. Eius est maxime est veniam numquam nihil consectetur reprehenderit. Illo totam distinctio quod ut temporibus eum iure modi ratione. Quas rerum dolores voluptas culpa. Repellat vel et praesentium fugit facilis cupiditate.\n" +
      " \rEum hic nobis et repudiandae quo saepe inventore ut unde. Quibusdam iste modi omnis sint dolor. Necessitatibus at et non asperiores non quasi eum. A omnis tempora eum exercitationem. Voluptatem qui consequatur perspiciatis porro qui. Occaecati rem vel ea voluptas molestias tempore eveniet cumque.\n" +
      " \rAccusamus nulla voluptatum numquam. Quibusdam nam soluta dolorum quis non minus molestiae. Fuga distinctio voluptas. Natus eos et iure vitae. Reiciendis enim non quia aspernatur pariatur nesciunt aut. Possimus hic voluptatem esse.",
    sentiment: "Negative",
    impact: 2,
    data: {
      likes: 12,
      comments: 64,
      laughs: 21,
      cries: 35,
      surprises: 18,
      angry: 96,
    },
  },
  {
    id: "yhgfeIjy0p0Wr0UcEqg6U",
    author: "Neal O'Kon",
    client: "Samsung",
    media: "Line",
    date: "Sat Jun 05 2021 09:02:42 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Doloribus est et explicabo. Magni nostrum rerum. Hic a asperiores et voluptas atque eius quos quia. Commodi porro voluptatum modi autem quos delectus in.\n" +
      " \rEt odit natus qui. Aut quam aut. Ut cumque minus. At aut ut dolorem impedit provident laboriosam qui minus et. Quae fugit in blanditiis tenetur quod error et et soluta. Quia quibusdam deleniti at doloremque aperiam.\n" +
      " \rAliquam error similique quis et nostrum culpa. Id in quos est repellendus. Blanditiis necessitatibus qui.",
    sentiment: "Positive",
    impact: 2,
    data: {
      likes: 75,
      comments: 20,
      laughs: 68,
      cries: 70,
      surprises: 73,
      angry: 50,
    },
  },
  {
    id: "xHiFUzhljbn-t-NnhLbRM",
    author: "Mr. Wallace Heidenreich",
    client: "Apple",
    media: "Instagram",
    date: "Fri May 21 2021 14:50:02 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Est voluptas est. Illum distinctio aut et et et fugiat eaque. Vel perferendis quia ut et quas ratione. Ea rerum consequatur sint commodi sit omnis. Temporibus repellat hic reiciendis quod distinctio sit ipsa voluptatem. Vel accusantium ullam velit et deleniti doloremque consequuntur qui.\n" +
      " \rAspernatur ratione enim eius quia magni dolorem blanditiis. Nihil quia et est non ut nihil aut sit nesciunt. Reiciendis impedit iste ut eius alias saepe iure qui.\n" +
      " \rSed ipsum voluptatem cumque id. Et asperiores id amet aut porro consequuntur rem repellendus. Libero fugiat quia exercitationem sed voluptatem quo fugiat aut.",
    sentiment: "Positive",
    impact: 1,
    data: {
      likes: 95,
      comments: 98,
      laughs: 22,
      cries: 49,
      surprises: 34,
      angry: 10,
    },
  },
  {
    id: "DvXLhYd2RyF3uZQssg9oV",
    author: "Johnathan Hirthe DDS",
    client: "Apple",
    media: "Line",
    date: "Thu May 06 2021 06:52:34 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Nobis soluta dolorum voluptatem consequatur atque corporis. Veritatis temporibus modi aut. Tempore harum ut. Molestias animi corrupti. Consequatur quibusdam quod doloremque. Consectetur odit eos accusantium consequuntur harum dolorum id sit.\n" +
      " \rArchitecto non explicabo ut quibusdam qui aut rerum. Qui odit sapiente explicabo quas hic minus in et ipsa. Hic et quae nesciunt provident reprehenderit numquam numquam harum.\n" +
      " \rVoluptate deleniti quo eum occaecati non qui in expedita. Voluptas sunt facere et nemo nobis quia ut harum. Fugit ut vitae necessitatibus est ipsum quidem qui eligendi. Qui nostrum fugiat fuga omnis tenetur eveniet vitae.",
    sentiment: "Negative",
    impact: 3,
    data: {
      likes: 39,
      comments: 51,
      laughs: 98,
      cries: 87,
      surprises: 52,
      angry: 41,
    },
  },
  {
    id: "vAxHFLgejeoJFKxA6I8dc",
    author: "Felipe Stehr",
    client: "Sony",
    media: "Instagram",
    date: "Wed May 19 2021 09:08:17 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Voluptas in ut blanditiis in quia numquam eum libero magnam. Velit impedit in commodi. Dolor quam libero omnis veritatis ex.\n" +
      " \rIusto amet sed est excepturi provident quis est et. Impedit dolor illo doloribus sed. Cum et illum est eius. Culpa quia libero suscipit.\n" +
      " \rDolor sed consequatur. Voluptatibus alias consequatur dolor repudiandae possimus qui. Soluta hic autem quasi doloremque dolores autem veritatis in qui.",
    sentiment: "Negative",
    impact: 4,
    data: {
      likes: 12,
      comments: 31,
      laughs: 35,
      cries: 97,
      surprises: 82,
      angry: 23,
    },
  },
  {
    id: "JXG_CEenhGGR4bIbfjpoU",
    author: "Traci Gerlach",
    client: "Panasonic",
    media: "Line",
    date: "Thu May 27 2021 18:42:16 GMT+0800 (Hong Kong Standard Time)",
    post:
      "Enim cupiditate ea sint soluta adipisci. Ad et a aliquid in eum eaque asperiores. Dolor esse non cupiditate sequi molestias. Aperiam ea magnam necessitatibus similique qui nam eum veniam eligendi.\n" +
      " \rMagni et illum et ea amet. Est unde voluptas. Aut et ut quia impedit. Repellat dolorum at. Quo velit suscipit quis rerum non animi eius. Non itaque perspiciatis ea est eaque ipsam.\n" +
      " \rNulla sed incidunt. Error officiis ut animi voluptates vero eveniet. Magnam consequatur rerum quam suscipit provident suscipit dignissimos modi. Et enim sint maiores tempore maiores voluptatem. Nesciunt sed dignissimos blanditiis fuga qui repellat dolores est.",
    sentiment: "Neutral",
    impact: 1,
    data: {
      likes: 58,
      comments: 27,
      laughs: 57,
      cries: 100,
      surprises: 97,
      angry: 43,
    },
  },
];
