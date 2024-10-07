const characters = [
  {
    name: "布麗 (Bluey Heeler)",
    category: "主要角色",
    image: "img/bluey.png",
  },
  {
    name: "賓果 (Bingo Heeler)",
    category: "主要角色",
    image: "img/bingo.png",
  },
  {
    name: "班迪 (Bandit Heeler)",
    category: "主要角色",
    image: "img/bandit.png",
    description: "布麗、賓果的爸爸",
  },
  {
    name: "琪琪 (Chilli Heeler)",
    category: "主要角色",
    image: "img/chilli.png",
    description: "布麗、賓果的媽媽",
  },

  // 家庭成员
  {
    name: "曼曼 (Muffin Heeler)",
    category: "家庭成員",
    image: "img/muffin.png",
  },
  {
    name: "珊珊 (Socks Heeler)",
    category: "家庭成員",
    image: "img/socks.png",
  },
  {
    name: "史踹普 (Stripe Heeler)",
    category: "家庭成員",
    image: "img/stripe.png",
  },
  {
    name: "崔西 (Trixie Heeler)",
    category: "家庭成員",
    image: "img/trixie.png",
  },
  {
    name: "雷德利 (Radley Heeler)",
    category: "家庭成員",
    image: "img/radley.png",
  },
  {
    name: "小琪 (Frisky Heeler)",
    category: "家庭成員",
    image: "img/frisky.png",
  },
  {
    name: "鮑勃 (Bob Heeler)",
    category: "家庭成員",
    image: "img/bob.png",
  },
  {
    name: "克莉絲 (Chris Heeler)",
    category: "家庭成員",
    image: "img/chris.png",
  },
  {
    name: "莫特 (Mort Cattle)",
    category: "家庭成員",
    image: "img/mort.png",
  },
  {
    name: "莫夫人 (Chilli's Mum)",
    category: "家庭成員",
    image: "img/chillismum.png",
  },
  {
    name: "布蘭蒂 (Brandy Cattle)",
    category: "家庭成員",
    image: "img/brandy.png",
  },

  // 朋友們
  {
    name: "小迪 (Rusty)",
    category: "朋友們",
    image: "img/rusty.png",
    description: "布麗的同學",
  },
  {
    name: "可可 (Coco)",
    category: "朋友們",
    image: "img/coco.png",
    description: "布麗的同學",
  },
  {
    name: "麥肯錫 (Mackenzie)",
    category: "朋友們",
    image: "img/mackenzie.png",
    description: "布麗的同學",
  },
  {
    name: "小英 (Indy)",
    category: "朋友們",
    image: "img/indy.png",
    description: "布麗的同學",
  },
  {
    name: "史尼克 (Snickers)",
    category: "朋友們",
    image: "img/snickers.png",
    description: "布麗的同學",
  },
  {
    name: "哈妮 (Honey)",
    category: "朋友們",
    image: "img/honey.png",
    description: "布麗的同學",
  },
  {
    name: "傑克 (Jack Russell)",
    category: "朋友們",
    image: "img/jack.png",
    description: "布麗的同學",
  },
  {
    name: "㹴犬三兄弟 (Terriers)",
    category: "朋友們",
    image: "img/terriers.png",
    description: "布麗的同學",
  },
  {
    name: "皮皮 (Pretzel)",
    category: "朋友們",
    image: "img/pretzel.png",
    description: "布麗的同學",
  },
  {
    name: "克蘿伊 (Chloe)",
    category: "朋友們",
    image: "img/chloe.png",
  },
  {
    name: "嘟嘟 (Winton)",
    category: "朋友們",
    image: "img/winton.png",
    description: "布麗的同學",
  },
  {
    name: "拉奇 (Lucky)",
    category: "鄰居", // 將 "朋友們" 改為 "鄰居"
    image: "img/lucky.png",
  },
  {
    name: "波波 (Pom Pom)",
    category: "朋友們",
    image: "img/pompom.png",
  },
  {
    name: "蜜絲 (Missy)",
    category: "朋友們",
    image: "img/missy.png",
    description: "賓果的同學",
  },
  {
    name: "蜜雅 (Mia)",
    category: "朋友們",
    image: "img/mia.png",
  },
  {
    name: "小班莉 (Bentley)",
    category: "朋友們",
    image: "img/bentley.png",
    description: "賓果的同學",
  },
  {
    name: "海克力 (Hercules)",
    category: "朋友們",
    image: "img/hercules.png",
  },
  {
    name: "小路 (Jean-Luc)",
    category: "朋友們",
    image: "img/jeanluc.png",
  },
  {
    name: "小珍珍媽媽 (Juniper's Mum)",
    category: "其他角色",
    image: "img/junipersmum.png",
  },
  {
    name: "巴迪 (Buddy)",
    category: "朋友們",
    image: "img/buddy.png",
    description: "賓果的同學",
  },

  // 學校相關
  {
    name: "凱莉老師 (Calypso)",
    category: "學校老師",
    image: "img/calypso.png",
  },
  {
    name: "黃金獵犬老師 (Mrs. Retriever)",
    category: "學校老師",
    image: "img/mrsretriever.png",
  },

  // 鄰居
  {
    name: "拉奇爸爸 (Lucky's Dad)",
    category: "鄰居",
    image: "img/pat.png",
  },
  {
    name: "柔柔的媽媽 (Judo's Mum)",
    category: "鄰居",
    image: "img/wendy.png",
  },
  {
    name: "柔柔 (Judo)",
    category: "鄰居",
    image: "img/judo.png",
  },
  {
    name: "拉媽媽 (Lucky's Mum)",
    category: "鄰居",
    image: "img/janelle.png",
  },
  {
    name: "恰奇 (Chucky)",
    category: "鄰居",
    image: "img/chucky.png",
  },

  // 其他角色
  {
    name: "阿飛 (Alfie)",
    category: "其他角色",
    image: "img/alfie.png",
  },
  {
    name: "街頭藝人 (Busker)",
    category: "其他角色",
    image: "img/busker.png",
  },
  {
    name: "飛老闆 (Alfie's Boss)",
    category: "其他角色",
    image: "img/alfiesboss.png",
  },
  {
    name: "阿飛的媽媽 (Alfie's Mum)",
    category: "其他角色",
    image: "img/alfiesmum.png",
  },
  {
    name: "替代能源狗 (Alt Energy Dog)",
    category: "其他角色",
    image: "img/altenergydog.png",
  },
  {
    name: "阿根廷背包客 (Argentinean Backpacker)",
    category: "其他角色",
    image: "img/argentineanbackpacker.png",
  },
  {
    name: "可可的媽媽 (Coco's Mum)",
    category: "其他角色",
    image: "img/cocosmum.png",
  },
  // {
  //   name: "餅乾 (Cookie, from Stickbird)",
  //   category: "其他角色",
  //   image: "img/cookiestickbird.png",
  // },
  // {
  //   name: "餅乾 (Cookie, from The Sign)",
  //   category: "其他角色",
  //   image: "img/cookiethesign.png",
  // },
  // {
  //   name: "餅乾的朋友A (Cookie's Friend A)",
  //   category: "他角色",
  //   image: "img/cookiesfrienda.png",
  // },
  // {
  //   name: "餅乾的朋友B (Cookie's Friend B)",
  //   category: "其他角色",
  //   image: "img/cookiesfriendb.png",
  // },
  {
    name: "巴基 (Bucky Dunstan)",
    category: "其他角色",
    image: "img/buckydunstan.png",
  },
  {
    name: "巴迪的媽媽 (Buddy's Mum)",
    category: "其他角色",
    image: "img/buddysmum.png",
  },
  {
    name: "公車站狗 (Bus Stop Dog)",
    category: "其他角色",
    image: "img/busstopdog.png",
  },
  {
    name: "公車站小姐 (Bus Stop Lady)",
    category: "其他角色",
    image: "img/busstoplady.png",
  },
  {
    name: "船長 (Captain)",
    category: "其他角色",
    image: "img/captain.png",
  },
  {
    name: "結帳狗 (Checkout Dog)",
    category: "其他角色",
    image: "img/checkoutdog.png",
  },
  {
    name: "收銀員小姐 (Checkout Lady)",
    category: "其他角色",
    image: "img/checkoutlady.png",
  },
  {
    name: "櫻桃 (Cherry)",
    category: "其他角色",
    image: "img/cherry.png",
  },
  {
    name: "啾比嘟比 (Chew B'Deube)",
    category: "其他角色",
    image: "img/chewbdeube.png",
  },
  {
    name: "迪哥 (Digger)",
    category: "其他角色",
    image: "img/digger.png",
  },
  {
    name: "克蘿伊的媽媽 (Chloe's Mum)",
    category: "其他角色",
    image: "img/chloesmum.png",
  },
  {
    name: "恰恰 (Chubbles)",
    category: "其他角色",
    image: "img/chubbles.png",
  },
  {
    name: "巧吉 (Chunky Chimp)",
    category: "其他角色",
    image: "img/chunkychimp.png",
  },
  {
    name: "電影院櫃檯狗 (Cinema Counter Dog)",
    category: "其他角色",
    image: "img/cinemacounterdog.png",
  },
  {
    name: "柯尼利厄斯 (Cornelius)",
    category: "其他角色",
    image: "img/cornelius.png",
  },
  {
    name: "顧客 (Customer)",
    category: "其他角色",
    image: "img/customer.png",
  },
  {
    name: "標價機男孩 (Docket Boy)",
    category: "其他角色",
    image: "img/docketboy.png",
  },
  {
    name: "醫生 (Doctor, from Baby Race)",
    category: "其他角色",
    image: "img/doctorbabyrace.png",
  },
  {
    name: "醫生 (Doctor, from Bumpy and the Wise Old Wolfhound)",
    category: "其他角色",
    image: "img/doctorbumpyandthewiseoldwolfhound.png",
  },
  {
    name: "醫生 (Doctor, from Exercise)",
    category: "其他角色",
    image: "img/doctorexercise.png",
  },
  {
    name: "朵莉 (Doreen)",
    category: "其他角色",
    image: "img/doreen.png",
  },
  {
    name: "克蘿伊的爸爸 (Chloe's Dad)",
    category: "其他角色",
    image: "img/frank.png",
  },
  {
    name: "道吉 (Dougie)",
    category: "其他角色",
    image: "img/dougie.png",
  },
  {
    name: "道吉的媽媽 (Dougie's Mum)",
    category: "他角色",
    image: "img/dougiesmum.png",
  },
  {
    name: "達斯蒂 (Dusty)",
    category: "其他角色",
    image: "img/dusty.png",
  },
  {
    name: "員工 (Employee)",
    category: "其他角色",
    image: "img/employee.png",
  },
  {
    name: "溫妮爸爸 (Winnie's Dad)",
    category: "其他角色",
    image: "img/fido.png",
  },
  {
    name: "飛狐小子 (Flying Fox Kid)",
    category: "其他角色",
    image: "img/flyingfoxkid.png",
  },
  {
    name: "法國背包客 (French Backpacker)",
    category: "其他角色",
    image: "img/frenchbackpacker.png",
  },
  {
    name: "銀髮遊牧族 (Grey Nomads)",
    category: "其他角色",
    image: "img/greynomads.png",
  },
  {
    name: "魯伯特 (Gruber)",
    category: "其他角色",
    image: "img/gruber.png",
  },
  {
    name: "魯伯特的爸爸 (Gruber's Dad)",
    category: "其他角色",
    image: "img/grubersdad.png",
  },
  {
    name: "哈利 (Harley)",
    category: "其他角色",
    image: "img/harley.png",
    description: "賓果的同學",
  },
  {
    name: "醫院小孩 (Hospital Kid)",
    category: "其他角色",
    image: "img/hospitalkid.png",
  },
  {
    name: "醫院小孩的媽媽 (Hospital Kid's Mum)",
    category: "其他角色",
    image: "img/hospitalkidsmum.png",
  },
  {
    name: "冰淇淋女士 (Ice Cream Lady)",
    category: "其他角色",
    image: "img/icecreamlady.png",
  },
  {
    name: "小英的媽媽 (Indy's Mum)",
    category: "其他角色",
    image: "img/indysmum.png",
  },
  {
    name: "傑克的爸爸 (Jack's Dad)",
    category: "其他色",
    image: "img/jacksdad.png",
  },
  {
    name: "傑克的媽 (Jack's Mum)",
    category: "其他角色",
    image: "img/jacksmum.png",
  },
  {
    name: "傑斯柏 (Jasper G.)",
    category: "其他角色",
    image: "img/jasperg.png",
    description: "賓果的同學",
  },
  {
    name: "傑斯柏的媽媽 (Jasper G.'s Mum)",
    category: "其他角色",
    image: "img/jaspergsmum.png",
  },
  {
    name: "小傑 (Jasper W.)",
    category: "其他角色",
    image: "img/jasperw.png",
    description: "賓果的同學",
  },
  {
    name: "小路的爸爸 (Jean-Luc's Dad)",
    category: "其他角色",
    image: "img/jeanlucsdad.png",
  },
  {
    name: "傑瑞李 (Jerry Lee)",
    category: "其他角色",
    image: "img/jerrylee.png",
  },
  {
    name: "圖書管理員 (Librarian)",
    category: "其他",
    image: "img/librarian.png",
  },
  {
    name: "圖書館狗 (Library Dog)",
    category: "其他角色",
    image: "img/librarydog.png",
  },
  {
    name: "莉拉的弟弟 (Lila's Brother)",
    category: "其他角色",
    image: "img/lilasbrother.png",
  },
  {
    name: "露露 (Lulu Russell)",
    category: "其他角色",
    image: "img/lulurussell.png",
  },

  // 添加遗漏的角色
  {
    name: "麥肯錫的媽媽 (Mackenzie's Mum)",
    category: "其他角色",
    image: "img/mackenziesmum.png",
    breed: "邊境牧羊犬",
    firstAppearance: "Spy Game",
    voiceActor: "Loren Taylor",
    description:
      "來自紐西蘭的邊境牧羊犬。她熱情、樂於助人，是個團隊合作者。她有時會對自己缺乏心，但在賓果的鼓勵下，她學會了通過練習來提高自己的技能。",
  },
  {
    name: "麥肯錫的爸爸 (Mackenzie's Dad)",
    category: "其他角色",
    image: "img/mackenziesdad.png",
  },
  {
    name: "護士 (Nurse)",
    category: "其他角色",
    image: "img/nurse.png",
  },
  {
    name: "老哈巴狗 (Old Pug)",
    category: "其他角色",
    image: "img/oldpug.png",
  },
  {
    name: "荷蘭小煎餅狗 (Poffertje Dog)",
    category: "其他角色",
    image: "img/poffertjedog.png",
  },
  {
    name: "警察 (Policeman)",
    category: "其他角色",
    image: "img/policeman.png",
  },
  {
    name: "龐龐的媽媽 (Pom Pom's Mum)",
    category: "其他角色",
    image: "img/pompomsmum.png",
  },
  {
    name: "小馬女士 (Pony Lady)",
    category: "其他",
    image: "img/ponylady.png",
  },
  {
    name: "郵差 (Postie)",
    category: "其他角色",
    image: "img/postie.png",
  },
  {
    name: "洛克 (Rocko)",
    category: "其他角色",
    image: "img/rocko.png",
  },
  {
    name: "拉斯蒂的爸爸 (Rusty's Dad)",
    category: "其他角色",
    image: "img/rustysdad.png",
  },
  {
    name: "拉斯蒂的媽媽 (Rusty's Mum)",
    category: "其他角色",
    image: "img/rustysmum.png",
  },
  {
    name: "衛星導航 (Sat Nav)",
    category: "其他角色",
    image: "img/satnav.png",
  },
  {
    name: "莉拉的媽媽 (Lila's Mum)",
    category: "其他角色",
    image: "img/lilasmum.png",
  },
  {
    name: "購物者 (Shopper)",
    category: "其他角色",
    image: "img/shopper.png",
  },
  {
    name: "小吃的媽媽 (Snickers' Mum)",
    category: "其他角色",
    image: "img/snickersmum.png",
  },
  {
    name: "斯帕克 (Sparky)",
    category: "其他角色",
    image: "img/sparky.png",
  },
  {
    name: "衝浪者 (Surfer, from Show And Tell)",
    category: "其他角色",
    image: "img/surfershowandtell.png",
  },
  {
    name: "衝浪者 (Surfer, from The Beach)",
    category: "其他角色",
    image: "img/surferthebeach.png",
  },
  {
    name: "外賣女士 (Takeaway Lady)",
    category: "其他角色",
    image: "img/takeawaylady.png",
  },
  {
    name: "㹴犬三兄弟的媽媽 (Terriers' Mum)",
    category: "其他角色",
    image: "img/terriersmum.png",
  },
  {
    name: "牧羊犬們 (Sheepdogs)",
    category: "其他角色",
    image: "img/thesheepdogs.png",
  },
  {
    name: "小小 (Tiny C.)",
    category: "其他角色",
    image: "img/tinyc.png",
  },
  // {
  //   name: "卡車司機 (Truck Driver)",
  //   category: "其他角色",
  //   image: "img/truckdriver.png",
  // },
  {
    name: "獸醫柯基犬 (Vet Corgi)",
    category: "其他角色",
    image: "img/vetcorgi.png",
  },
  {
    name: "守門員 (Wicket-keeper)",
    category: "其他角色",
    image: "img/wicketkeeper.png",
  },
  {
    name: "溫妮 (Winnie)",
    category: "朋友們",
    image: "img/winnie.png",
  },
  {
    name: "瑜伽教練 (Yoga Instructor)",
    category: "其他角色",
    image: "img/yogainstructor.png",
  },
  {
    name: "賽拉 (Zara)",
    category: "其他角色",
    image: "img/zara.png",
    description: "賓果的同學",
  },
  {
    name: "齊吉 (Ziggy)",
    category: "其他角色",
    image: "img/ziggy.png",
  },

  // 新增的角色
  {
    name: "小矮人們 (Gnomes)",
    category: "其角色",
    image: "img/gnomes.png",
  },
  {
    name: "波波 (Bobo)",
    category: "其他角色",
    image: "img/bobo.png",
  },
  {
    name: "比爾·比爾比 (Bob Bilby)",
    category: "其他角色",
    image: "img/bobbilby.png",
  },

  // 在其他角色列表中添加 Major Tom、Maynard 和 Marcus
  {
    name: "湯姆少校 (Major Tom)",
    category: "其他角色",
    image: "img/majortom.png",
  },
  {
    name: "梅納德 (Maynard)",
    category: "其他角色",
    image: "img/maynard.png",
  },
  {
    name: "哈妮的爸爸 (Honey's Dad)",
    category: "其他角色",
    image: "img/honeysdad.png",
  },
  {
    name: "餅乾 (Cookie, from Stickbird)",
    category: "其他角色",
    image: "img/cookiestickbird.png",
  },
  {
    name: "餅乾的朋友A (Cookie's Friend A)",
    category: "其他角色",
    image: "img/cookiesfrienda.png",
  },
  {
    name: "餅乾的朋友B (Cookie's Friend B)",
    category: "其他角色",
    image: "img/cookiesfriendb.png",
  },
  {
    name: "哈妮的媽媽 (Honey's Mum)",
    category: "其他角色",
    image: "img/daisy.png",
  },
  {
    name: "莉拉 (Lila)",
    category: "朋友們",
    image: "img/lila.png",
  },
  {
    name: "希拉 (Sheila)",
    category: "其他角色",
    image: "img/sheila.png",
  },
  {
    name: "曲丕 (Chippy)",
    category: "其他角色",
    image: "img/chippy.png",
  },
  {
    name: "小珍珍 (Juniper)",
    category: "朋友們",
    image: "img/juniper.png",
    description: "賓果的同學",
  },
];

// 在 characters 數組中，找到並刪除 Sheila 的條目
const filteredCharacters = characters.filter(
  (character) => character.name !== "希拉 (Sheila)"
);

// 如果 Sheila 有其他可能的名稱變體，也應該一併刪除，例如：
// const characters = characters.filter(character => !character.name.includes("Sheila"));

// 其餘代碼保持不變

// 將這段代碼添加在角色數組定義之後
filteredCharacters.sort((a, b) => {
  // 提取英文名稱（括號內的部分）
  const nameA = a.name.match(/\(([^)]+)\)/)[1].toLowerCase();
  const nameB = b.name.match(/\(([^)]+)\)/)[1].toLowerCase();

  // 特殊情況：Cookie 應該排在 Cookie's Friend A 前面
  if (nameA.startsWith("cookie") && nameB.startsWith("cookie")) {
    if (
      nameA === "cookie, from stickbird" &&
      nameB.startsWith("cookie's friend")
    ) {
      return -1;
    }
    if (
      nameB === "cookie, from stickbird" &&
      nameA.startsWith("cookie's friend")
    ) {
      return 1;
    }
  }

  // 一般情況的比較
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

let currentCategory = "all";
let currentPage = 1;
const charactersPerPage = 40; // 顯示更多角色，例如10行4列，共40個角色

function createCharacterCard(character) {
  const card = document.createElement("div");
  card.className = "character-card";

  const img = document.createElement("img");
  img.src = character.image;
  img.alt = character.name;
  img.onerror = function () {
    console.error(`無法加載圖片: ${this.src}`);
    this.src = "img/placeholder.png";
    this.alt = `${character.name} (圖片無法加載)`;
  };

  const characterInfo = document.createElement("div");
  characterInfo.className = "character-info";
  characterInfo.innerHTML = `
    <h3>${character.name}</h3>
    ${
      character.description
        ? `<p class="description"><strong>${character.description}</strong></p>`
        : ""
    }
    <p class="category">${character.category}</p>
  `;

  card.appendChild(img);
  card.appendChild(characterInfo);

  return card;
}

function displayCharacters(filteredCharacters) {
  const characterGrid = document.getElementById("character-grid");
  characterGrid.innerHTML = "";
  const startIndex = (currentPage - 1) * charactersPerPage;
  const endIndex = startIndex + charactersPerPage;
  const charactersToDisplay = filteredCharacters.slice(startIndex, endIndex);

  charactersToDisplay.forEach((character) => {
    characterGrid.appendChild(createCharacterCard(character));
  });

  updatePagination(filteredCharacters.length);
}

function updatePagination(totalCharacters) {
  let paginationContainer = document.getElementById("pagination");
  if (!paginationContainer) {
    const main = document.querySelector("main");
    paginationContainer = document.createElement("div");
    paginationContainer.id = "pagination";
    main.appendChild(paginationContainer);
  }

  const totalPages = Math.ceil(totalCharacters / charactersPerPage);
  paginationContainer.innerHTML = "";

  // 只顯示當前頁碼附近的頁碼
  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  if (startPage > 1) {
    paginationContainer.appendChild(createPageButton(1, "首頁"));
    if (startPage > 2) {
      paginationContainer.appendChild(document.createTextNode("..."));
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    paginationContainer.appendChild(createPageButton(i));
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      paginationContainer.appendChild(document.createTextNode("..."));
    }
    paginationContainer.appendChild(createPageButton(totalPages, "末頁"));
  }
}

function createPageButton(pageNum, text = pageNum) {
  const pageButton = document.createElement("button");
  pageButton.textContent = text;
  pageButton.addEventListener("click", () => {
    currentPage = pageNum;
    filterAndDisplayCharacters();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  if (pageNum === currentPage) {
    pageButton.classList.add("active");
  }
  return pageButton;
}

function filterAndDisplayCharacters() {
  try {
    const searchTerm = document
      .getElementById("character-search")
      .value.toLowerCase();
    const filteredCharacters = characters.filter(
      (character) =>
        (currentCategory === "all" || character.category === currentCategory) &&
        character.name.toLowerCase().includes(searchTerm)
    );
    displayCharacters(filteredCharacters);
  } catch (error) {
    console.error("Error in filterAndDisplayCharacters:", error);
  }
}

function filterCharacters() {
  currentPage = 1; // 重置到第一页
  filterAndDisplayCharacters();
}

document
  .getElementById("character-search")
  .addEventListener("input", filterCharacters);

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelectorAll("nav a")
      .forEach((a) => a.classList.remove("active"));
    e.target.classList.add("active");
    currentCategory = e.target.getAttribute("href").slice(1);
    currentCategory =
      currentCategory === "all"
        ? "all"
        : currentCategory === "main-characters"
        ? "主要角色"
        : currentCategory === "family"
        ? "家庭成員"
        : currentCategory === "friends"
        ? "朋友們"
        : currentCategory === "school"
        ? "學校老師" // 這裡改為 "學校老師"
        : currentCategory === "neighbors"
        ? "鄰居"
        : currentCategory === "other-characters"
        ? "其他角色"
        : "all";
    filterCharacters();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// 確保 DOM 加載完成後確初始化顯示所有角色和分頁
document.addEventListener("DOMContentLoaded", () => {
  currentCategory = "all";
  filterAndDisplayCharacters();

  const allCharactersLink = document.querySelector('nav a[href="#all"]');
  if (allCharactersLink) {
    allCharactersLink.classList.add("active");
  }
});

// 在文件底部添加：
window.onerror = function (message, source, lineno, colno, error) {
  console.error(
    "Global error:",
    message,
    "at",
    source,
    ":",
    lineno,
    ":",
    colno
  );
  return true;
};

// 添加到文件底部
document.addEventListener("DOMContentLoaded", () => {
  const navScroll = document.querySelector(".nav-scroll");
  let isScrolling = false;

  navScroll.addEventListener("scroll", () => {
    isScrolling = true;
  });

  setInterval(() => {
    if (isScrolling) {
      isScrolling = false;
      // 檢查是否滾動到邊緣，如果是，添加一些內邊距
      if (
        navScroll.scrollLeft + navScroll.clientWidth >=
        navScroll.scrollWidth - 1
      ) {
        navScroll.style.paddingRight = "20px";
      } else {
        navScroll.style.paddingRight = "0";
      }
    }
  }, 100);
});

document.addEventListener("DOMContentLoaded", () => {
  const navScroll = document.querySelector(".nav-scroll");

  function checkScroll() {
    if (navScroll.scrollWidth > navScroll.clientWidth) {
      navScroll.style.justifyContent = "flex-start";
    } else {
      navScroll.style.justifyContent = "space-between";
    }
  }

  // 初始檢查
  checkScroll();

  // 窗口大小改變時重新檢查
  window.addEventListener("resize", checkScroll);
});

// 在文件底部添加以下代碼
document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.getElementById("back-to-top");

  // 當用戶滾動超過200px時顯示按鈕
  window.onscroll = function () {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      backToTopButton.style.display = "flex";
    } else {
      backToTopButton.style.display = "none";
    }
  };

  // 點擊按鈕時滾動到頂部
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// 檢查並添加可能缺失的角色
const missingCharacters = [
  {
    name: "嘟嘟 (Winton)",
    category: "朋友們",
    image: "img/winton.png",
  },
  {
    name: "小迪 (Rusty)",
    category: "朋友們",
    image: "img/rusty.png",
  },
  {
    name: "可可 (Coco)",
    category: "朋友們",
    image: "img/coco.png",
  },
  {
    name: "麥肯錫 (Mackenzie)",
    category: "朋友們",
    image: "img/mackenzie.png",
  },
  {
    name: "小琪 (Frisky Heeler)",
    category: "家庭成員",
    image: "img/frisky.png",
  },
  // 添加其他可能缺失的角色...
];

// 檢查每個可能缺失的角色，如果不在 characters 數組中，就添加它
missingCharacters.forEach((character) => {
  if (!characters.some((c) => c.name === character.name)) {
    characters.push(character);
  }
});

// 重新排序 characters 數組
characters.sort((a, b) => {
  const nameA = a.name.match(/\(([^)]+)\)/)[1].toLowerCase();
  const nameB = b.name.match(/\(([^)]+)\)/)[1].toLowerCase();
  return nameA.localeCompare(nameB);
});
