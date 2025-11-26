
import { TopicPart1, TopicPart23 } from './types';

export const PART1_TOPICS: TopicPart1[] = [
  {
    id: 'p1-carry',
    title: 'Carry things',
    questions: [
      { text: 'What do you often carry with you?', sampleAnswer: 'I always carry my smartphone, wallet, and house keys. If I\'m going to work, I\'ll also have my backpack with my laptop.' },
      { text: 'What do you do if your item is heavy?', sampleAnswer: 'If I have to carry something heavy, I usually try to put it in a backpack to distribute the weight, or I might take a taxi instead of walking.' }
    ],
    vocabulary: [
      { term: 'Essentials', translation: '必需品' },
      { term: 'Portable', translation: '便携的' },
      { term: 'Cumbersome', translation: '笨重的' },
      { term: 'Backpack', translation: '双肩包' },
      { term: 'Tote bag', translation: '托特包' },
      { term: 'Daily necessities', translation: '日用品' }
    ]
  },
  {
    id: 'p1-public',
    title: 'Public places',
    questions: [
      { text: 'Have you ever talked with someone you don\'t know in public places?', sampleAnswer: 'Yes, occasionally. For example, I might chat with someone while waiting in line or if asking for directions.' },
      { text: 'Do you wear headphones in public places?', sampleAnswer: 'I do, quite often. It helps me relax and disconnect from the noise around me, especially on public transport.' },
      { text: 'Would you like to see more public places near where you live?', sampleAnswer: 'Definitely. I think more parks or community centers would be great for people to socialize and exercise.' },
      { text: 'Do you often go to public places with your friends?', sampleAnswer: 'Yes, we often meet at shopping malls or parks to hang out on weekends.' }
    ],
    vocabulary: [
      { term: 'Bustling', translation: '熙熙攘攘的' },
      { term: 'Community hub', translation: '社区中心' },
      { term: 'Atmosphere', translation: '氛围' },
      { term: 'Socialize', translation: '社交' },
      { term: 'Amenities', translation: '便利设施' },
      { term: 'Noise pollution', translation: '噪音污染' }
    ]
  },
  {
    id: 'p1-rules',
    title: 'Rules',
    questions: [
      { text: 'Are there any rules for students at your school?', sampleAnswer: 'Yes, we have strict rules about attendance, punctuality, and dress code. Mobile phones are also not allowed in class.' },
      { text: 'Do you think students would benefit more from more rules?', sampleAnswer: 'Not necessarily. While some structure is good, too many rules can stifle creativity and make students feel restricted.' },
      { text: 'Have you ever had a really dedicated teacher?', sampleAnswer: 'Yes, my high school English teacher was very dedicated. She would stay after class to help us prepare for exams.' },
      { text: 'Do you prefer to have more or fewer rules at school?', sampleAnswer: 'I prefer fewer rules. I believe students learn better when they are given more autonomy and trust.' }
    ],
    vocabulary: [
      { term: 'Regulation', translation: '规章' },
      { term: 'Discipline', translation: '纪律' },
      { term: 'Strict', translation: '严格的' },
      { term: 'Obey', translation: '遵守' },
      { term: 'Enforce', translation: '执行' },
      { term: 'Mandatory', translation: '强制的' }
    ]
  },
  {
    id: 'p1-doing-well',
    title: 'Doing something well',
    questions: [
      { text: 'Do you have an experience that you did something well?', sampleAnswer: 'Yes, I remember organizing a charity event last year. It was a huge success and we raised a lot of money.' },
      { text: 'Do you have an experience that your teacher thought you did a good job?', sampleAnswer: 'Once I wrote a creative story for my literature class, and my teacher read it out loud to the whole class as an example.' },
      { text: 'Do you often tell your friends when they do something well?', sampleAnswer: 'I try to. I think positive reinforcement is important, so I always compliment my friends on their achievements.' }
    ],
    vocabulary: [
      { term: 'Accomplishment', translation: '成就' },
      { term: 'Achievement', translation: '成绩' },
      { term: 'Praise', translation: '赞扬' },
      { term: 'Recognition', translation: '认可' },
      { term: 'Mastery', translation: '精通' },
      { term: 'Excel at', translation: '擅长' }
    ]
  },
  {
    id: 'p1-old-people',
    title: 'Staying with old people',
    questions: [
      { text: 'Have you ever worked with old people?', sampleAnswer: 'I volunteered at a nursing home once. It was an eye-opening experience to hear their life stories.' },
      { text: 'Are you happy to work with people who are older than you?', sampleAnswer: 'Yes, I appreciate their experience and wisdom. They often have a different perspective that I can learn from.' },
      { text: 'What are the benefits of being friends with or working with old people?', sampleAnswer: 'You can gain valuable insights from their life experiences, and they can be very patient mentors.' },
      { text: 'Do you enjoy spending time with old people?', sampleAnswer: 'I do. My grandparents and I are very close. I love listening to their stories about the past.' }
    ],
    vocabulary: [
      { term: 'Wisdom', translation: '智慧' },
      { term: 'Generation gap', translation: '代沟' },
      { term: 'Experience', translation: '经验' },
      { term: 'Elderly', translation: '长者' },
      { term: 'Patience', translation: '耐心' },
      { term: 'Mentorship', translation: '指导' }
    ]
  },
  {
    id: 'p1-going-out',
    title: 'Going out',
    questions: [
      { text: 'Do you bring food or snacks with you when going out?', sampleAnswer: 'Usually no, unless I\'m going on a hike. I prefer to buy fresh food or eat at restaurants when I\'m out.' },
      { text: 'Do you always take your mobile phone with you when going out?', sampleAnswer: 'Always. It\'s essential for navigation, communication, and paying for things.' },
      { text: 'Do you often bring cash with you?', sampleAnswer: 'Rarely nowadays. Electronic payments are so convenient that I hardly use physical money.' },
      { text: 'How often do you use cash?', sampleAnswer: 'Very infrequently, maybe only when visiting small street vendors that don\'t accept digital payments.' }
    ],
    vocabulary: [
      { term: 'Heading out', translation: '出门' },
      { term: 'Socialize', translation: '社交' },
      { term: 'Hang out', translation: '闲逛' },
      { term: 'Wallet', translation: '钱包' },
      { term: 'Cashless payment', translation: '无现金支付' },
      { term: 'Convenience', translation: '便利' }
    ]
  },
  {
    id: 'p1-veg',
    title: 'Growing vegetables/fruits',
    questions: [
      { text: 'Are you interested in growing vegetables and fruits?', sampleAnswer: 'I am, but I lack the space in my apartment. I think it would be very satisfying to eat food you grew yourself.' },
      { text: 'Is growing vegetables popular in your country?', sampleAnswer: 'In rural areas, yes. In cities, it\'s becoming a trendy hobby for people with balconies or access to community gardens.' },
      { text: 'Do many people grow vegetables in your city?', sampleAnswer: 'Not many, due to limited space, but some people grow herbs or small vegetables like cherry tomatoes on their balconies.' },
      { text: 'Do you think it\'s easy to grow vegetables?', sampleAnswer: 'I think it requires patience and knowledge about soil, water, and sunlight. It\'s not as easy as it looks.' }
    ],
    vocabulary: [
      { term: 'Gardening', translation: '园艺' },
      { term: 'Harvest', translation: '收获' },
      { term: 'Organic', translation: '有机的' },
      { term: 'Homegrown', translation: '自家种植的' },
      { term: 'Green thumb', translation: '园艺天赋' },
      { term: 'Cultivate', translation: '培育' }
    ]
  },
  {
    id: 'p1-break',
    title: 'Having a break',
    questions: [
      { text: 'How often do you take a rest or a break?', sampleAnswer: 'I try to take a short 5-minute break every hour when I\'m studying or working to keep my mind fresh.' },
      { text: 'What do you usually do when you are resting?', sampleAnswer: 'I usually stretch, grab a glass of water, or simply close my eyes for a few minutes to relax.' },
      { text: 'Do you take a nap when you are taking your rest?', sampleAnswer: 'Sometimes in the afternoon, I take a quick 20-minute power nap. It really helps boost my energy for the rest of the day.' },
      { text: 'How do you feel after taking a nap?', sampleAnswer: 'I usually feel refreshed and more alert, although sometimes I feel a bit groggy if I sleep for too long.' }
    ],
    vocabulary: [
      { term: 'Recharge', translation: '充电/恢复精力' },
      { term: 'Unwind', translation: '放松' },
      { term: 'Nap', translation: '小睡' },
      { term: 'Downtime', translation: '停工期/休息时间' },
      { term: 'Relaxation', translation: '放松' },
      { term: 'Refresh', translation: '提神' }
    ]
  },
  {
    id: 'p1-plants',
    title: 'Plants',
    questions: [
      { text: 'Do you keep plants at home?', sampleAnswer: 'Yes, I have a few succulents and a peace lily. They make the room feel more alive and fresh.' },
      { text: 'What plant did you grow when you were young?', sampleAnswer: 'I remember growing bean sprouts in a jar for a school science project. It was fascinating to watch them grow so fast.' },
      { text: 'Do you know anything about growing a plant?', sampleAnswer: 'A little bit. I know they need sunlight and water, but I\'m not an expert on soil types or fertilizers.' },
      { text: 'Do Chinese people send plants as gifts?', sampleAnswer: 'Yes, typically for housewarmings or opening new businesses. Lucky bamboo or money trees are popular choices.' }
    ],
    vocabulary: [
      { term: 'Succulent', translation: '多肉植物' },
      { term: 'Botanical', translation: '植物的' },
      { term: 'Blossom', translation: '开花' },
      { term: 'Indoor plant', translation: '室内植物' },
      { term: 'Decor', translation: '装饰' },
      { term: 'Symbolism', translation: '象征意义' }
    ]
  },
  {
    id: 'p1-art',
    title: 'Art',
    questions: [
      { text: 'Do you like art?', sampleAnswer: 'Yes, I appreciate art. I think it\'s a wonderful way to express emotions and capture beauty.' },
      { text: 'Do you like visiting art galleries?', sampleAnswer: 'I enjoy it occasionally. It\'s quite peaceful to wander around and interpret different paintings and sculptures.' },
      { text: 'Do you want to be an artist?', sampleAnswer: 'No, I don\'t think I have the talent for it. I prefer admiring art rather than creating it.' },
      { text: 'Do you like modern art or traditional art?', sampleAnswer: 'I prefer traditional art because I admire the technical skill involved, though some modern art concepts are very interesting.' }
    ],
    vocabulary: [
      { term: 'Masterpiece', translation: '杰作' },
      { term: 'Abstract', translation: '抽象的' },
      { term: 'Exhibition', translation: '展览' },
      { term: 'Creativity', translation: '创造力' },
      { term: 'Portrait', translation: '肖像' },
      { term: 'Aesthetic', translation: '审美' }
    ]
  },
  {
    id: 'p1-quiet',
    title: 'Quiet or noisy places',
    questions: [
      { text: 'Do you like quiet or noisy places?', sampleAnswer: 'I definitely prefer quiet places. I find noise very draining and hard to concentrate in.' },
      { text: 'Would you like to go to quiet or noisy places on weekends when you are free?', sampleAnswer: 'I prefer quiet places like a library or a park on weekends to recharge after a busy week.' }
    ],
    vocabulary: [
      { term: 'Tranquil', translation: '宁静的' },
      { term: 'Peaceful', translation: '和平的' },
      { term: 'Serene', translation: '安详的' },
      { term: 'Hustle and bustle', translation: '熙熙攘攘' },
      { term: 'Lively', translation: '热闹的' },
      { term: 'Deafening', translation: '震耳欲聋的' }
    ]
  },
  {
    id: 'p1-shoes',
    title: 'Shoes',
    questions: [
      { text: 'Do you like buying shoes? How often?', sampleAnswer: 'Not really. I only buy shoes when my old ones wear out, maybe once or twice a year.' },
      { text: 'Have you ever bought shoes online?', sampleAnswer: 'Yes, I have, but I prefer buying them in-store to ensure the fit is correct.' },
      { text: 'How much money do you usually spend on shoes?', sampleAnswer: 'I usually spend a moderate amount. I believe in buying quality over quantity, so I don\'t mind paying a bit more for comfort.' },
      { text: 'Which do you prefer, fashionable shoes or comfortable shoes?', sampleAnswer: 'Comfortable shoes, hands down. I walk a lot, so I need shoes that support my feet.' }
    ],
    vocabulary: [
      { term: 'Footwear', translation: '鞋类' },
      { term: 'Comfortable', translation: '舒适的' },
      { term: 'Stylish', translation: '时髦的' },
      { term: 'Trendy', translation: '潮流的' },
      { term: 'Sneakers', translation: '运动鞋' },
      { term: 'Durable', translation: '耐用的' }
    ]
  },
  {
    id: 'p1-crowded',
    title: 'Crowded place',
    questions: [
      { text: 'Is the city where you live crowded?', sampleAnswer: 'Yes, extremely. During rush hour, the subway and streets are packed with people.' },
      { text: 'Is there a crowded place near where you live?', sampleAnswer: 'Yes, there is a popular shopping district nearby that is always teeming with shoppers and tourists.' },
      { text: 'Do you like crowded places?', sampleAnswer: 'Not particularly. I find them stressful and overwhelming. I prefer having some personal space.' },
      { text: 'Do most people like crowded places?', sampleAnswer: 'I think young people might enjoy the energy of crowded places, but many people find them exhausting.' }
    ],
    vocabulary: [
      { term: 'Packed', translation: '拥挤的' },
      { term: 'Congested', translation: '堵塞的' },
      { term: 'Overcrowded', translation: '过度拥挤的' },
      { term: 'Population density', translation: '人口密度' },
      { term: 'Rush hour', translation: '高峰期' },
      { term: 'Vibrant', translation: '充满活力的' }
    ]
  },
  {
    id: 'p1-chatting',
    title: 'Chatting',
    questions: [
      { text: 'Do you like chatting with friends?', sampleAnswer: 'Yes, I love it. It\'s a great way to relieve stress and stay connected.' },
      { text: 'What do you usually chat about with friends?', sampleAnswer: 'We talk about everything - movies, work, relationships, and funny things that happened during the week.' },
      { text: 'Do you prefer to chat with a group of people or with only one friend?', sampleAnswer: 'I prefer one-on-one conversations. I feel we can have deeper and more meaningful discussions that way.' },
      { text: 'Do you prefer to communicate face-to-face or via social media?', sampleAnswer: 'Face-to-face is always better because you can see facial expressions and feel the connection more strongly.' }
    ],
    vocabulary: [
      { term: 'Gossip', translation: '八卦' },
      { term: 'Catch up', translation: '叙旧' },
      { term: 'Conversation', translation: '对话' },
      { term: 'Small talk', translation: '闲聊' },
      { term: 'Deep dive', translation: '深入探讨' },
      { term: 'Interaction', translation: '互动' }
    ]
  },
  {
    id: 'p1-borrow',
    title: 'Borrowing or Lending',
    questions: [
      { text: 'Have you borrowed books from others?', sampleAnswer: 'Yes, I often borrow books from the library or swap books with my friends.' },
      { text: 'Have you ever borrowed money from others?', sampleAnswer: 'Only very small amounts for lunch if I forgot my wallet, and I always pay it back immediately.' },
      { text: 'Do you like to lend things to others?', sampleAnswer: 'I don\'t mind lending things to people I trust, as long as they take good care of them.' },
      { text: 'How do you feel when people don\'t return things they borrowed from you?', sampleAnswer: 'It\'s quite annoying and disrespectful. It makes me hesitate to lend them anything in the future.' }
    ],
    vocabulary: [
      { term: 'Loan', translation: '借贷' },
      { term: 'Generous', translation: '慷慨的' },
      { term: 'Trustworthy', translation: '值得信赖的' },
      { term: 'Reliable', translation: '靠谱的' },
      { term: 'Debt', translation: '债务' },
      { term: 'Possession', translation: '财产' }
    ]
  },
  {
    id: 'p1-ads',
    title: 'Advertisement',
    questions: [
      { text: 'Is there an advertisement that made an impression on you when you were a child?', sampleAnswer: 'Yes, there was a funny soda commercial with a polar bear that I really loved as a kid.' },
      { text: 'Do you see a lot of advertising on trains or other transport?', sampleAnswer: 'Everywhere. Subways are covered in posters and digital screens showing ads for games, schools, and products.' },
      { text: 'Do you like advertisements?', sampleAnswer: 'Generally no, they can be intrusive. But I do appreciate creative or funny ads that are well-made.' },
      { text: 'What kind of advertising do you like?', sampleAnswer: 'I like movie trailers. They are exciting and give me something to look forward to.' }
    ],
    vocabulary: [
      { term: 'Commercial', translation: '商业广告' },
      { term: 'Promotion', translation: '促销' },
      { term: 'Marketing', translation: '营销' },
      { term: 'Catchy', translation: '朗朗上口的' },
      { term: 'Slogan', translation: '口号' },
      { term: 'Brand awareness', translation: '品牌意识' }
    ]
  },
  {
    id: 'p1-museum',
    title: 'Museum',
    questions: [
      { text: 'Do you think museums are important?', sampleAnswer: 'Absolutely. They preserve our history and culture and educate the public about the past.' },
      { text: 'Are there many museums in your hometown?', sampleAnswer: 'Yes, we have a history museum, a science museum, and several small art galleries.' },
      { text: 'Do you often visit a museum?', sampleAnswer: 'Not very often, maybe once or twice a year when there is a special exhibition I want to see.' },
      { text: 'When was the last time you visited a museum?', sampleAnswer: 'I visited the National Museum last month to see an ancient pottery exhibition.' }
    ],
    vocabulary: [
      { term: 'Artifact', translation: '文物' },
      { term: 'Exhibition', translation: '展览' },
      { term: 'Heritage', translation: '遗产' },
      { term: 'History', translation: '历史' },
      { term: 'Preserve', translation: '保存' },
      { term: 'Curator', translation: '馆长' }
    ]
  },
  {
    id: 'p1-sharing',
    title: 'Sharing',
    questions: [
      { text: 'Did your parents teach you to share when you were a child?', sampleAnswer: 'Yes, they always told me to share my toys and snacks with my cousins and friends.' },
      { text: 'What kind of things do you like to share with others?', sampleAnswer: 'I like sharing food. I think eating together and sharing dishes is a great way to bond.' },
      { text: 'What kind of things are not suitable for sharing?', sampleAnswer: 'Personal items like toothbrushes or passwords should definitely not be shared for hygiene and security reasons.' },
      { text: 'Do you have anything to share with others recently?', sampleAnswer: 'I recently shared a great book I read with my best friend. We had a good discussion about it.' }
    ],
    vocabulary: [
      { term: 'Generosity', translation: '慷慨' },
      { term: 'Selfish', translation: '自私的' },
      { term: 'Community', translation: '社区' },
      { term: 'Collaborate', translation: '合作' },
      { term: 'Personal space', translation: '个人空间' },
      { term: 'Boundaries', translation: '界限' }
    ]
  },
  {
    id: 'p1-friends',
    title: 'Friends',
    questions: [
      { text: 'Do you have a friend you have known for a long time?', sampleAnswer: 'Yes, my best friend from primary school. We have known each other for over 15 years.' },
      { text: 'What do you usually do with your friends?', sampleAnswer: 'We usually go for dinner, watch movies, or just hang out at a cafe and talk.' },
      { text: 'Where do you often meet each other?', sampleAnswer: 'We often meet at a shopping mall in the city center because it\'s convenient for everyone.' },
      { text: 'Do you often go out with your friends?', sampleAnswer: 'I try to see them at least once a week on weekends, but sometimes we are too busy with work.' }
    ],
    vocabulary: [
      { term: 'Bestie', translation: '闺蜜/死党' },
      { term: 'Companion', translation: '同伴' },
      { term: 'Trust', translation: '信任' },
      { term: 'Bond', translation: '纽带' },
      { term: 'Childhood friend', translation: '发小' },
      { term: 'Supportive', translation: '支持的' }
    ]
  }
];

export const PART23_TOPICS: TopicPart23[] = [
  {
    id: 'p23-music-friend',
    title: '擅长音乐的朋友 (Friend good at music)',
    category: 'People',
    part2: {
      prompt: 'Describe a friend of yours who is good at music/singing',
      bullets: [
        'Who he/she is',
        'When/where you listen to his/her music/singing',
        'What kind of music/songs he/she is good at',
        'And explain how you feel when listening to his music/singing'
      ],
      sampleStructure: [
        { cue: 'Who he/she is', keywords: [{ term: 'Leo', translation: '里奥' }, { term: 'University classmate', translation: '大学同学' }, { term: 'Talented guitarist', translation: '天才吉他手' }] },
        { cue: 'When/where you listen', keywords: [{ term: 'Weekends', translation: '周末' }, { term: 'Local cafe', translation: '当地咖啡馆' }, { term: 'Open mic nights', translation: '开放麦之夜' }] },
        { cue: 'What kind of music', keywords: [{ term: 'Acoustic folk', translation: '原声民谣' }, { term: 'Pop covers', translation: '流行翻唱' }, { term: 'Ballads', translation: '抒情歌' }] },
        { cue: 'How you feel', keywords: [{ term: 'Mesmerizing', translation: '令人着迷' }, { term: 'Relaxed', translation: '放松' }, { term: 'Inspired', translation: '受启发' }, { term: 'Contagious passion', translation: '极具感染力的热情' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'What kind of music is popular in your country?', sampleAnswer: 'Pop music is definitely the most popular, especially K-pop and Mandopop among young people.' },
        { text: 'What kind of music do young people like?', sampleAnswer: 'Young people tend to like upbeat genres like hip-hop, electronic dance music, and pop.' },
        { text: 'Do you think music is beneficial for children at school?', sampleAnswer: 'Yes, it helps develop creativity and can improve cognitive skills like memory and coordination.' },
        { text: 'What are the benefits of children learning a musical instrument?', sampleAnswer: 'It teaches discipline, patience, and the value of practice. It also boosts their confidence when they perform.' }
      ]
    },
    vocabulary: [
      { term: 'Talented', translation: '有才华的' },
      { term: 'Vocalist', translation: '歌手' },
      { term: 'Instrument', translation: '乐器' },
      { term: 'Melody', translation: '旋律' },
      { term: 'Rhythm', translation: '节奏' },
      { term: 'Perform', translation: '表演' },
      { term: 'Audience', translation: '观众' },
      { term: 'Inspiring', translation: '鼓舞人心的' },
      { term: 'Cognitive development', translation: '认知发展' },
      { term: 'Genre', translation: '流派' }
    ]
  },
  {
    id: 'p23-important-friend',
    title: '重要的好朋友 (Important friend)',
    category: 'People',
    part2: {
      prompt: 'Describe a good friend who is important to you',
      bullets: [
        'Who he/she is',
        'How/where you got to know him/her',
        'How long you have known each other',
        'And explain why he/she is important to you'
      ],
      sampleStructure: [
        { cue: 'Who he/she is', keywords: [{ term: 'Sarah', translation: '莎拉' }, { term: 'Best friend', translation: '最好的朋友' }] },
        { cue: 'How/where you met', keywords: [{ term: 'High school', translation: '高中' }, { term: 'First day', translation: '第一天' }, { term: 'Sat next to each other', translation: '坐同桌' }] },
        { cue: 'How long known', keywords: [{ term: 'Over 10 years', translation: '超过10年' }, { term: 'Since childhood', translation: '从童年起' }] },
        { cue: 'Why important', keywords: [{ term: 'Supportive', translation: '支持的' }, { term: 'Good listener', translation: '好的倾听者' }, { term: 'Honest advice', translation: '诚恳建议' }, { term: 'Through ups and downs', translation: '经历起伏' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'How do children make friends at school?', sampleAnswer: 'Children usually make friends through play, shared activities, or simply sitting together in class.' },
        { text: 'How do children make friends when they are not at school?', sampleAnswer: 'They might meet in parks, at extracurricular clubs, or through family gatherings.' },
        { text: 'Do you think it is better for children to have a few close friends or many casual friends?', sampleAnswer: 'I think a mix is healthy, but having a few close friends is crucial for emotional support and deep connection.' },
        { text: 'Do you think a child\'s relationship with friends can be replaced by that with other people, like parents?', sampleAnswer: 'No, peer relationships are unique. Friends provide a sense of equality and shared discovery that parents cannot replicate.' }
      ]
    },
    vocabulary: [
      { term: 'Confidant', translation: '知己' },
      { term: 'Reliable', translation: '可靠的' },
      { term: 'Mutual', translation: '相互的' },
      { term: 'Support system', translation: '支持系统' },
      { term: 'Childhood', translation: '童年' },
      { term: 'Casual acquaintance', translation: '泛泛之交' },
      { term: 'Bonding', translation: '建立纽带' },
      { term: 'Social skills', translation: '社交技巧' },
      { term: 'Influence', translation: '影响' },
      { term: 'Loyalty', translation: '忠诚' }
    ]
  },
  {
    id: 'p23-family-biz',
    title: '在家族企业工作的人 (Family business person)',
    category: 'People',
    part2: {
      prompt: 'Describe a person you know who enjoys working for a family business',
      bullets: [
        'Who he/she is',
        'What the business is',
        'What his/her job is',
        'And explain why he/she enjoys working there'
      ],
      sampleStructure: [
        { cue: 'Who he/she is', keywords: [{ term: 'John', translation: '约翰' }, { term: 'Local acquaintance', translation: '当地熟人' }] },
        { cue: 'What business', keywords: [{ term: 'Family bakery', translation: '家族面包店' }, { term: 'Local shop', translation: '当地小店' }, { term: 'Decades old', translation: '几十年老店' }] },
        { cue: 'What job', keywords: [{ term: 'Operations manager', translation: '运营经理' }, { term: 'Baker', translation: '面包师' }] },
        { cue: 'Why enjoys', keywords: [{ term: 'Family legacy', translation: '家族传承' }, { term: 'Pride', translation: '自豪' }, { term: 'Close-knit atmosphere', translation: '紧密氛围' }, { term: 'Autonomy', translation: '自主权' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'Would you like to work in a family business?', sampleAnswer: 'Maybe. It depends on the family dynamics. It could be rewarding, but also stressful if personal issues mix with business.' },
        { text: 'Would you like to start a family business?', sampleAnswer: 'Yes, building something from scratch with loved ones sounds appealing and could create a strong family bond.' },
        { text: 'Why do some people choose to start their own company?', sampleAnswer: 'They want autonomy, financial independence, and the freedom to pursue their own vision without a boss.' },
        { text: 'What are the advantages and disadvantages of family businesses?', sampleAnswer: 'Advantages include trust and shared values. Disadvantages can be nepotism and difficulty separating work from family life.' }
      ]
    },
    vocabulary: [
      { term: 'Entrepreneur', translation: '企业家' },
      { term: 'Inheritance', translation: '继承' },
      { term: 'Legacy', translation: '遗产/传承' },
      { term: 'Management', translation: '管理' },
      { term: 'Conflict of interest', translation: '利益冲突' },
      { term: 'Start-up', translation: '初创公司' },
      { term: 'Dedication', translation: '奉献' },
      { term: 'Succession', translation: '继任' },
      { term: 'Autonomy', translation: '自主权' },
      { term: 'Profit', translation: '利润' }
    ]
  },
  {
    id: 'p23-creative-person',
    title: '钦佩的有创造力的人 (Creative person)',
    category: 'People',
    part2: {
      prompt: 'Describe a creative person (e.g. an artist, a musician, etc.) you admire',
      bullets: [
        'Who he/she is',
        'How you knew him/her',
        'What his/her greatest achievement is',
        'And explain why you think he/she is creative'
      ],
      sampleStructure: [
        { cue: 'Who he/she is', keywords: [{ term: 'Hayao Miyazaki', translation: '宫崎骏' }, { term: 'Filmmaker', translation: '电影人' }, { term: 'Animator', translation: '动画师' }] },
        { cue: 'How you knew', keywords: [{ term: 'Movies', translation: '电影' }, { term: 'Spirited Away', translation: '千与千寻' }, { term: 'Childhood', translation: '童年' }] },
        { cue: 'Greatest achievement', keywords: [{ term: 'Magical worlds', translation: '魔法世界' }, { term: 'Academy Award', translation: '奥斯卡奖' }, { term: 'Studio Ghibli', translation: '吉卜力' }] },
        { cue: 'Why creative', keywords: [{ term: 'Unique visual style', translation: '独特视觉风格' }, { term: 'Imaginative storytelling', translation: '想象力叙事' }, { term: 'Detail-oriented', translation: '注重细节' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'Do you think children should learn to play musical instruments?', sampleAnswer: 'Yes, it boosts brain development and gives them a creative outlet.' },
        { text: 'How do artists acquire inspiration?', sampleAnswer: 'They often get inspiration from nature, personal experiences, other art forms, or even dreams.' },
        { text: 'Do you think pictures and videos in new reports are important?', sampleAnswer: 'Crucial. They provide visual evidence and emotional impact that text alone cannot convey.' },
        { text: 'What can we do to help children keep creative?', sampleAnswer: 'We should encourage play, limit screen time, and provide them with materials to build, draw, and explore.' }
      ]
    },
    vocabulary: [
      { term: 'Innovation', translation: '创新' },
      { term: 'Imaginative', translation: '富于想象的' },
      { term: 'Visionary', translation: '有远见的' },
      { term: 'Masterpiece', translation: '杰作' },
      { term: 'Inspiration', translation: '灵感' },
      { term: 'Unique', translation: '独特的' },
      { term: 'Thinking outside the box', translation: '跳出框框思考' },
      { term: 'Artistic', translation: '艺术的' },
      { term: 'Expression', translation: '表达' },
      { term: 'Talent', translation: '天赋' }
    ]
  },
  {
    id: 'p23-truth',
    title: '告诉朋友实情 (Telling truth to friend)',
    category: 'Event',
    part2: {
      prompt: 'Describe a time when you told your friend an important truth',
      bullets: [
        'Who your friend is',
        'What the truth was',
        'What your friend\'s reaction was',
        'And explain why you think it was important to tell your friend the truth'
      ],
      sampleStructure: [
        { cue: 'Who your friend is', keywords: [{ term: 'Mark', translation: '马克' }, { term: 'Best friend', translation: '最好的朋友' }] },
        { cue: 'What truth', keywords: [{ term: 'Girlfriend cheating', translation: '女友出轨' }, { term: 'Saw at cinema', translation: '影院看到' }, { term: 'With another guy', translation: '和别的男生' }] },
        { cue: 'Reaction', keywords: [{ term: 'Angry initially', translation: '起初生气' }, { term: 'Denial', translation: '否认' }, { term: 'Acceptance', translation: '接受' }, { term: 'Gratitude', translation: '感激' }] },
        { cue: 'Why important', keywords: [{ term: 'Deserved to know', translation: '值得知道' }, { term: 'Respect', translation: '尊重' }, { term: 'Honesty foundation', translation: '诚实基础' }, { term: 'Prevent foolishness', translation: '免做傻事' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'Do you think it\'s more important to win a game or follow the rules in sports?', sampleAnswer: 'Following the rules is more important. Winning by cheating is hollow and unsportsmanlike.' },
        { text: 'Sometimes people should tell lies. Do you agree?', sampleAnswer: 'Sometimes, yes. "White lies" to protect someone\'s feelings or surprise them can be acceptable.' },
        { text: 'How do you know when others are telling lies?', sampleAnswer: 'Often through body language, like avoiding eye contact, or if their story has inconsistencies.' },
        { text: 'Do you think we should tell the truth at all times?', sampleAnswer: 'Not strictly at all times. Brutal honesty can be hurtful. Context and intention matter.' }
      ]
    },
    vocabulary: [
      { term: 'Honesty', translation: '诚实' },
      { term: 'Integrity', translation: '正直' },
      { term: 'Deception', translation: '欺骗' },
      { term: 'White lie', translation: '善意的谎言' },
      { term: 'Trust', translation: '信任' },
      { term: 'Consequences', translation: '后果' },
      { term: 'Ethical', translation: '伦理的' },
      { term: 'Straightforward', translation: '直截了当的' },
      { term: 'Sincere', translation: '真诚的' },
      { term: 'Moral dilemma', translation: '道德困境' }
    ]
  },
  {
    id: 'p23-trip-again',
    title: '想再去的旅行 (Trip to make again)',
    category: 'Event',
    part2: {
      prompt: 'Describe a trip you would like to make again',
      bullets: [
        'Where and when you went',
        'Who you made the trip with',
        'What you did during the trip',
        'And explain why you would like to make the trip again'
      ],
      sampleStructure: [
        { cue: 'Where/When', keywords: [{ term: 'Kyoto, Japan', translation: '日本京都' }, { term: 'Two years ago', translation: '两年前' }, { term: 'Cherry blossom season', translation: '樱花季' }] },
        { cue: 'Who with', keywords: [{ term: 'Sister', translation: '姐姐/妹妹' }, { term: 'Family', translation: '家人' }] },
        { cue: 'What did', keywords: [{ term: 'Ancient temples', translation: '古寺' }, { term: 'Sushi', translation: '寿司' }, { term: 'Bamboo forest', translation: '竹林' }, { term: 'Walking', translation: '散步' }] },
        { cue: 'Why again', keywords: [{ term: 'Breathtaking scenery', translation: '绝美风景' }, { term: 'Insufficient time', translation: '时间不够' }, { term: 'Missed spots', translation: '错过景点' }, { term: 'Relaxing vibe', translation: '放松氛围' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'Why do people like travelling?', sampleAnswer: 'To escape routine, explore new cultures, taste different foods, and broaden their horizons.' },
        { text: 'What should we prepare before a trip?', sampleAnswer: 'Itinerary, accommodation bookings, necessary documents like passports, and appropriate clothing.' },
        { text: 'What would happen if no preparation were made before the trip?', sampleAnswer: 'It could be chaotic. You might get lost, spend too much money, or miss out on key attractions.' },
        { text: 'Why do some people prefer to travel in their own country rather than going abroad?', sampleAnswer: 'It\'s cheaper, there\'s no language barrier, and it\'s easier to organize.' }
      ]
    },
    vocabulary: [
      { term: 'Destination', translation: '目的地' },
      { term: 'Itinerary', translation: '行程' },
      { term: 'Memorable', translation: '难忘的' },
      { term: 'Scenery', translation: '风景' },
      { term: 'Exploration', translation: '探索' },
      { term: 'Culture shock', translation: '文化冲击' },
      { term: 'Souvenir', translation: '纪念品' },
      { term: 'Accommodation', translation: '住宿' },
      { term: 'Domestic travel', translation: '国内旅游' },
      { term: 'Adventure', translation: '冒险' }
    ]
  },
  {
    id: 'p23-dinner',
    title: '和亲友享受的晚餐 (Enjoyable dinner)',
    category: 'Event',
    part2: {
      prompt: 'Describe a great dinner you and your friend or family members enjoyed',
      bullets: [
        'What you had',
        'Who you had the dinner with',
        'What you talked about during the dinner',
        'And explain why you enjoyed it'
      ],
      sampleStructure: [
        { cue: 'What you had', keywords: [{ term: 'Spicy hotpot', translation: '麻辣火锅' }, { term: 'Beef', translation: '牛肉' }, { term: 'Vegetables', translation: '蔬菜' }, { term: 'Noodles', translation: '面条' }] },
        { cue: 'Who with', keywords: [{ term: 'College friends', translation: '大学朋友' }, { term: 'Old classmates', translation: '老同学' }] },
        { cue: 'Talked about', keywords: [{ term: 'Jobs', translation: '工作' }, { term: 'Funny memories', translation: '有趣回忆' }, { term: 'Future plans', translation: '未来计划' }] },
        { cue: 'Why enjoyed', keywords: [{ term: 'Lively atmosphere', translation: '热闹氛围' }, { term: 'Comfort food', translation: '治愈食物' }, { term: 'Excellent company', translation: '极好陪伴' }, { term: 'Nostalgia', translation: '怀旧' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'Do people prefer to eat out at restaurants or eat at home during the Spring Festival?', sampleAnswer: 'Traditionally at home, but more people are eating out now to avoid the hassle of cooking and cleaning.' },
        { text: 'What food do you eat on special occasions?', sampleAnswer: 'We often eat dumplings, fish (which symbolizes surplus), and sweet rice cakes.' },
        { text: 'Why do people like to have meals together during important festivals?', sampleAnswer: 'It strengthens family bonds and is a central part of the celebration ritual.' },
        { text: 'Is it a hassle to prepare a meal at home?', sampleAnswer: 'It can be, especially for large groups. It involves shopping, prepping, cooking, and cleaning up afterwards.' }
      ]
    },
    vocabulary: [
      { term: 'Feast', translation: '盛宴' },
      { term: 'Atmosphere', translation: '气氛' },
      { term: 'Cuisine', translation: '菜肴' },
      { term: 'Gathering', translation: '聚会' },
      { term: 'Celebration', translation: '庆典' },
      { term: 'Traditional dish', translation: '传统菜肴' },
      { term: 'Hospitality', translation: '好客' },
      { term: 'Homemade', translation: '自家制的' },
      { term: 'Dining out', translation: '外出就餐' },
      { term: 'Reunion', translation: '团圆' }
    ]
  },
  {
    id: 'p23-long-journey',
    title: '远行 (Long journey)',
    category: 'Event',
    part2: {
      prompt: 'Describe a long journey you had',
      bullets: [
        'Where you went',
        'Who you had the journey with',
        'Why you had the journey',
        'And explain how you felt about the journey'
      ],
      sampleStructure: [
        { cue: 'Where went', keywords: [{ term: 'Tibet', translation: '西藏' }, { term: 'Lhasa', translation: '拉萨' }, { term: 'Train journey', translation: '火车旅程' }] },
        { cue: 'Who with', keywords: [{ term: 'Cousin', translation: '表亲' }, { term: 'Family member', translation: '家庭成员' }] },
        { cue: 'Why', keywords: [{ term: 'Graduation trip', translation: '毕业旅行' }, { term: 'Celebration', translation: '庆祝' }] },
        { cue: 'How felt', keywords: [{ term: 'Physically exhausting', translation: '身体疲惫' }, { term: 'Awe-inspired', translation: '敬畏' }, { term: 'Scenic landscapes', translation: '如画地貌' }, { term: 'Snow-capped mountains', translation: '雪山' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'Do you think it is a good choice to travel by plane?', sampleAnswer: 'Yes, for long distances it is the fastest and most convenient option.' },
        { text: 'What are the differences between group travelling and travelling alone?', sampleAnswer: 'Group travel is safer and social, while solo travel offers total freedom and self-discovery.' },
        { text: 'What do we need to prepare for a long journey?', sampleAnswer: 'Comfortable clothes, entertainment like books or movies, snacks, and a neck pillow.' },
        { text: 'Why do some people like making long journeys?', sampleAnswer: 'They enjoy the process of movement, seeing the scenery change, and having time to think.' }
      ]
    },
    vocabulary: [
      { term: 'Exhausting', translation: '令人筋疲力尽的' },
      { term: 'Scenic route', translation: '风景优美的路线' },
      { term: 'Transportation', translation: '交通工具' },
      { term: 'Passenger', translation: '乘客' },
      { term: 'Delay', translation: '延误' },
      { term: 'Jet lag', translation: '时差' },
      { term: 'Solo traveler', translation: '独行侠' },
      { term: 'Companionship', translation: '陪伴' },
      { term: 'Luggage', translation: '行李' },
      { term: 'Transit', translation: '过境/运输' }
    ]
  },
  {
    id: 'p23-electricity',
    title: '突然停电 (Electricity went off)',
    category: 'Event',
    part2: {
      prompt: 'Describe a time when the electricity suddenly went off',
      bullets: [
        'When/where it happened',
        'How long it lasted',
        'What you did during that time',
        'And explain how you felt about it'
      ],
      sampleStructure: [
        { cue: 'When/Where', keywords: [{ term: 'Last summer', translation: '去年夏天' }, { term: 'Thunderstorm', translation: '雷暴' }, { term: 'Apartment', translation: '公寓' }] },
        { cue: 'Duration', keywords: [{ term: 'Four hours', translation: '四小时' }, { term: 'Evening', translation: '晚上' }] },
        { cue: 'What did', keywords: [{ term: 'Lit candles', translation: '点蜡烛' }, { term: 'Talked with roommates', translation: '和室友聊天' }, { term: 'Digital detox', translation: '数字排毒' }] },
        { cue: 'How felt', keywords: [{ term: 'Annoyed initially', translation: '起初恼火' }, { term: 'Relaxed later', translation: '后来放松' }, { term: 'Enjoyed quietness', translation: '享受宁静' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'Which is better, electric bicycles or ordinary bicycles?', sampleAnswer: 'Electric bicycles are better for commuting without sweat, but ordinary ones are better for exercise.' },
        { text: 'Do you think electric bicycles will replace ordinary bicycles in the future?', sampleAnswer: 'Not entirely. Cycling enthusiasts will always prefer the mechanical simplicity of ordinary bikes.' },
        { text: 'Which is better, electric cars or petrol cars?', sampleAnswer: 'Electric cars are better for the environment, but petrol cars currently have better range and refueling infrastructure.' },
        { text: 'How did people manage to live without electricity in the ancient world?', sampleAnswer: 'They lived by the sun—waking at dawn and sleeping at dusk—and used fire for light and heat.' }
      ]
    },
    vocabulary: [
      { term: 'Power outage', translation: '停电' },
      { term: 'Blackout', translation: '断电/灯火管制' },
      { term: 'Candlelight', translation: '烛光' },
      { term: 'Inconvenience', translation: '不便' },
      { term: 'Reliant', translation: '依赖的' },
      { term: 'Gadgets', translation: '小工具' },
      { term: 'Sustainable', translation: '可持续的' },
      { term: 'Alternative energy', translation: '替代能源' },
      { term: 'Battery', translation: '电池' },
      { term: 'Flashlight', translation: '手电筒' }
    ]
  },
  {
    id: 'p23-apology',
    title: '别人向你道歉 (Apology)',
    category: 'Event',
    part2: {
      prompt: 'Describe a time when someone apologized to you',
      bullets: [
        'When it was',
        'Who this person is',
        'Why he or she apologized to you',
        'And how you felt about it'
      ],
      sampleStructure: [
        { cue: 'When', keywords: [{ term: 'Last week', translation: '上周' }, { term: 'Workplace', translation: '工作场所' }] },
        { cue: 'Who', keywords: [{ term: 'Colleague', translation: '同事' }, { term: 'Teammate', translation: '队友' }] },
        { cue: 'Why', keywords: [{ term: 'Deleted shared file', translation: '删除共享文件' }, { term: 'Mistake', translation: '错误' }, { term: 'Accident', translation: '意外' }] },
        { cue: 'How felt', keywords: [{ term: 'Relieved', translation: '释然' }, { term: 'Appreciated honesty', translation: '感激诚实' }, { term: 'Not angry', translation: '不生气' }, { term: 'Understanding', translation: '理解' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'Do you think people should apologize for anything wrong they do?', sampleAnswer: 'Yes, taking responsibility is a sign of maturity and respect for others.' },
        { text: 'Do people in your country like to say "sorry"?', sampleAnswer: 'Generally yes, politeness is valued. But sometimes people say it just to be polite, not because they admit fault.' },
        { text: 'On what occasions do people usually apologize to others?', sampleAnswer: 'When bumping into someone, being late, or making a mistake at work.' },
        { text: 'Why do some people refuse to say "sorry" to others?', sampleAnswer: 'Likely due to pride or ego. They see apologizing as a sign of weakness or losing face.' }
      ]
    },
    vocabulary: [
      { term: 'Forgiveness', translation: '原谅' },
      { term: 'Regret', translation: '后悔' },
      { term: 'Sincere', translation: '真诚的' },
      { term: 'Misunderstanding', translation: '误解' },
      { term: 'Conflict resolution', translation: '冲突解决' },
      { term: 'Pride', translation: '自尊/骄傲' },
      { term: 'Mistake', translation: '错误' },
      { term: 'Make amends', translation: '赔罪/补偿' },
      { term: 'Politeness', translation: '礼貌' },
      { term: 'Accountability', translation: '责任感' }
    ]
  },
  {
    id: 'p23-first-exciting',
    title: '第一次尝试的兴奋活动 (First exciting activity)',
    category: 'Event',
    part2: {
      prompt: 'Describe an exciting activity you have tried for the first time',
      bullets: [
        'What it is',
        'When/where you did it',
        'Why you thought it was exciting',
        'And explain how you felt about it'
      ],
      sampleStructure: [
        { cue: 'What it is', keywords: [{ term: 'Bungee jumping', translation: '蹦极' }, { term: 'Extreme sport', translation: '极限运动' }] },
        { cue: 'When/Where', keywords: [{ term: 'New Zealand', translation: '新西兰' }, { term: 'Few years ago', translation: '几年前' }] },
        { cue: 'Why exciting', keywords: [{ term: 'Height', translation: '高度' }, { term: 'Risk', translation: '风险' }, { term: 'Freefall', translation: '自由落体' }] },
        { cue: 'How felt', keywords: [{ term: 'Terrified initially', translation: '起初害怕' }, { term: 'Adrenaline rush', translation: '肾上腺素飙升' }, { term: 'Exhilarated', translation: '振奋' }, { term: 'Proud', translation: '自豪' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'Why are some people unwilling to try new things?', sampleAnswer: 'Fear of failure, fear of the unknown, or simply being comfortable with their routine.' },
        { text: 'Do you think fear stops people from trying new things?', sampleAnswer: 'Absolutely. Fear is the biggest barrier to personal growth and new experiences.' },
        { text: 'Why are some people keen on doing dangerous activities?', sampleAnswer: 'They seek the adrenaline rush (sensation seeking) and the sense of achievement from surviving the danger.' },
        { text: 'Do you think that children adapt to new things more easily than adults?', sampleAnswer: 'Yes, children are more plastic and less set in their ways, so they adapt faster.' }
      ]
    },
    vocabulary: [
      { term: 'Adrenaline', translation: '肾上腺素' },
      { term: 'Thrill', translation: '刺激' },
      { term: 'Challenge', translation: '挑战' },
      { term: 'Comfort zone', translation: '舒适区' },
      { term: 'Risk-taking', translation: '冒险' },
      { term: 'Nervous', translation: '紧张的' },
      { term: 'Exhilarating', translation: '令人兴奋的' },
      { term: 'Courage', translation: '勇气' },
      { term: 'Adventure', translation: '冒险' },
      { term: 'Novelty', translation: '新奇事物' }
    ]
  },
  {
    id: 'p23-foreign-lang',
    title: '第一次用外语 (First time speaking foreign language)',
    category: 'Event',
    part2: {
      prompt: 'Describe the time when you first talked in a foreign language',
      bullets: [
        'Where you were',
        'Who you were with',
        'What you talked about',
        'And explain how you felt about it'
      ],
      sampleStructure: [
        { cue: 'Where', keywords: [{ term: 'Middle school', translation: '中学' }, { term: 'Street', translation: '街道' }] },
        { cue: 'Who with', keywords: [{ term: 'Classmates', translation: '同学' }, { term: 'Foreign tourist', translation: '外国游客' }] },
        { cue: 'What talked', keywords: [{ term: 'Giving directions', translation: '指路' }, { term: 'Subway', translation: '地铁' }] },
        { cue: 'How felt', keywords: [{ term: 'Nervous', translation: '紧张' }, { term: 'Successful', translation: '成功' }, { term: 'Proud', translation: '自豪' }, { term: 'Encouraged', translation: '受鼓舞' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'At what age should children start learning a foreign language?', sampleAnswer: 'The earlier the better, ideally in preschool when their brains are most receptive to language.' },
        { text: 'Which skill is more important, speaking or writing?', sampleAnswer: 'For communication, speaking is more critical. For academic or legal contexts, writing is paramount.' },
        { text: 'Does a person still need to learn other languages, if he or she is good at English?', sampleAnswer: 'Yes. Learning a local language shows respect and allows for deeper cultural understanding.' },
        { text: 'Do you think minority languages will disappear?', sampleAnswer: 'Sadly, many are at risk due to globalization, unless active efforts are made to preserve them.' }
      ]
    },
    vocabulary: [
      { term: 'Fluency', translation: '流利度' },
      { term: 'Native speaker', translation: '母语者' },
      { term: 'Barrier', translation: '障碍' },
      { term: 'Translate', translation: '翻译' },
      { term: 'Pronunciation', translation: '发音' },
      { term: 'Vocabulary', translation: '词汇' },
      { term: 'Multilingual', translation: '多语言的' },
      { term: 'Global village', translation: '地球村' },
      { term: 'Dialect', translation: '方言' },
      { term: 'Communication', translation: '交流' }
    ]
  },
  {
    id: 'p23-social-media',
    title: '社交媒体趣事 (Interesting thing on social media)',
    category: 'Event',
    part2: {
      prompt: 'Describe a time you saw something interesting on social media',
      bullets: [
        'When it was',
        'Where you saw it',
        'What you saw',
        'And explain why you think it was interesting'
      ],
      sampleStructure: [
        { cue: 'When', keywords: [{ term: 'Last week', translation: '上周' }, { term: 'Free time', translation: '空闲时间' }] },
        { cue: 'Where', keywords: [{ term: 'TikTok', translation: '抖音' }, { term: 'Phone app', translation: '手机应用' }] },
        { cue: 'What saw', keywords: [{ term: 'Man building cat houses', translation: '男子建猫屋' }, { term: 'Recycled materials', translation: '回收材料' }, { term: 'Stray cats', translation: '流浪猫' }] },
        { cue: 'Why interesting', keywords: [{ term: 'Heartwarming', translation: '暖心' }, { term: 'Kindness', translation: '善良' }, { term: 'Clever design', translation: '巧妙设计' }, { term: 'Viral', translation: '走红' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'Why do people like to use social media?', sampleAnswer: 'For entertainment, to stay connected with friends, and to present a curated version of their lives.' },
        { text: 'What kinds of things are popular on social media?', sampleAnswer: 'Short funny videos, travel photos, food posts, and celebrity news.' },
        { text: 'What are the advantages and disadvantages of using social media?', sampleAnswer: 'Advantage: connectivity and information. Disadvantage: addiction, cyberbullying, and unrealistic comparison.' },
        { text: 'What do you think of making friends on social network?', sampleAnswer: 'It\'s possible, but one must be cautious. Online personas can be very different from real-life personalities.' }
      ]
    },
    vocabulary: [
      { term: 'Viral', translation: '疯传的' },
      { term: 'Trending', translation: '流行的' },
      { term: 'Platform', translation: '平台' },
      { term: 'Influencer', translation: '网红/有影响力的人' },
      { term: 'Cyberbullying', translation: '网络霸凌' },
      { term: 'Connectivity', translation: '连接性' },
      { term: 'Scroll', translation: '滑动浏览' },
      { term: 'Content creator', translation: '内容创作者' },
      { term: 'Virtual', translation: '虚拟的' },
      { term: 'Addictive', translation: '上瘾的' }
    ]
  },
  {
    id: 'p23-broken',
    title: '弄坏东西 (Broke something)',
    category: 'Event',
    part2: {
      prompt: 'Describe a time when you broke something',
      bullets: [
        'What it was',
        'When/where that happened',
        'How you broke it',
        'And explain what you did after that'
      ],
      sampleStructure: [
        { cue: 'What', keywords: [{ term: 'Mother\'s vase', translation: '母亲花瓶' }, { term: 'Favorite item', translation: '心爱之物' }] },
        { cue: 'When/Where', keywords: [{ term: 'Childhood', translation: '童年' }, { term: 'Living room', translation: '客厅' }] },
        { cue: 'How', keywords: [{ term: 'Playing soccer', translation: '踢球' }, { term: 'Hit with ball', translation: '被球击中' }, { term: 'Shattered', translation: '破碎' }] },
        { cue: 'What did', keywords: [{ term: 'Terrified', translation: '害怕' }, { term: 'Tried to fix', translation: '试图修复' }, { term: 'Confessed', translation: '坦白' }, { term: 'Apologized', translation: '道歉' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'What kind of things are more likely to be broken by people at home?', sampleAnswer: 'Fragile items like glassware, ceramics, or electronic screens.' },
        { text: 'What kind of people like to fix things by themselves?', sampleAnswer: 'People who are handy, frugal, or enjoy understanding how things work (DIYers).' },
        { text: 'Do you think clothes produced in the factory are of better quality than those made by hand?', sampleAnswer: 'Not necessarily. Factory clothes are consistent, but handmade clothes often have better craftsmanship and materials.' },
        { text: 'Do you think handmade clothes are more valuable?', sampleAnswer: 'Yes, because of the time, skill, and uniqueness involved in creating them.' }
      ]
    },
    vocabulary: [
      { term: 'Accident', translation: '意外' },
      { term: 'Clumsy', translation: '笨拙的' },
      { term: 'Repair', translation: '修理' },
      { term: 'Replace', translation: '替换' },
      { term: 'Fragile', translation: '易碎的' },
      { term: 'Damage', translation: '损坏' },
      { term: 'Maintenance', translation: '维护' },
      { term: 'Handmade', translation: '手工制作的' },
      { term: 'Mass-produced', translation: '大规模生产的' },
      { term: 'Value', translation: '价值' }
    ]
  },
  {
    id: 'p23-waiting',
    title: '等待特别事情 (Waiting for something special)',
    category: 'Event',
    part2: {
      prompt: 'Describe a time when you waited for something special that would happen',
      bullets: [
        'What you waited for',
        'Where you waited',
        'Why it was special',
        'And explain how you felt while you were waiting'
      ],
      sampleStructure: [
        { cue: 'What', keywords: [{ term: 'University acceptance letter', translation: '大学录取书' }, { term: 'Email', translation: '邮件' }] },
        { cue: 'Where', keywords: [{ term: 'Home', translation: '家' }, { term: 'Computer', translation: '电脑' }] },
        { cue: 'Why special', keywords: [{ term: 'Future career', translation: '未来职业' }, { term: 'Determine path', translation: '决定道路' }, { term: 'Dream school', translation: '理想学校' }] },
        { cue: 'How felt', keywords: [{ term: 'Anxious', translation: '焦虑' }, { term: 'Restless', translation: '坐立难安' }, { term: 'Hopeful', translation: '充满希望' }, { term: 'Excited', translation: '兴奋' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'Why do we need to be patient?', sampleAnswer: 'Because good things often take time, and impatience can lead to mistakes or conflict.' },
        { text: 'In what situations do we need to be more patient? Why?', sampleAnswer: 'In traffic, queues, or when dealing with children/elderly, to avoid stress and anger.' },
        { text: 'Do you think we should be patient all the time?', sampleAnswer: 'No, sometimes we need to be urgent or assertive if a situation is critical or unfair.' },
        { text: 'How do people learn to wait?', sampleAnswer: 'Through experience, realizing that complaining doesn\'t speed things up, and finding distractions.' }
      ]
    },
    vocabulary: [
      { term: 'Anticipation', translation: '期待' },
      { term: 'Impatient', translation: '不耐烦的' },
      { term: 'Delay', translation: '延迟' },
      { term: 'Worthwhile', translation: '值得的' },
      { term: 'Eager', translation: '渴望的' },
      { term: 'Queue', translation: '排队' },
      { term: 'Instant gratification', translation: '即时满足' },
      { term: 'Tolerance', translation: '容忍' },
      { term: 'Outcome', translation: '结果' },
      { term: 'Expectation', translation: '期望' }
    ]
  },
  {
    id: 'p23-natural-place',
    title: '自然之地 (Natural place)',
    category: 'Place',
    part2: {
      prompt: 'Describe a natural place (e.g. parks, mountains, etc.)',
      bullets: [
        'Where this place is',
        'How you knew this place',
        'What it is like',
        'And explain why you like to visit it'
      ],
      sampleStructure: [
        { cue: 'Where', keywords: [{ term: 'National forest park', translation: '国家森林公园' }, { term: 'Two hours drive', translation: '两小时车程' }] },
        { cue: 'How knew', keywords: [{ term: 'Online search', translation: '网上搜索' }, { term: 'Hiking recommendation', translation: '徒步推荐' }] },
        { cue: 'What like', keywords: [{ term: 'Dense forest', translation: '茂密森林' }, { term: 'Clear stream', translation: '清澈溪流' }, { term: 'Fresh air', translation: '新鲜空气' }] },
        { cue: 'Why visit', keywords: [{ term: 'Escape noise', translation: '逃离噪音' }, { term: 'Reconnect with nature', translation: '重返自然' }, { term: 'Relaxation', translation: '放松' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'What kind of people like to visit natural places?', sampleAnswer: 'Nature lovers, hikers, photographers, and people seeking peace and quiet.' },
        { text: 'What are the differences between a natural place and a city?', sampleAnswer: 'Natural places are quiet, clean, and green, while cities are noisy, polluted, and concrete.' },
        { text: 'Do you think that going to the park is the only way to get close to nature?', sampleAnswer: 'No, you can also garden at home, keep pets, or watch nature documentaries.' },
        { text: 'What can people gain from going to natural places?', sampleAnswer: 'Mental relaxation, physical exercise, and appreciation for the environment.' }
      ]
    },
    vocabulary: [
      { term: 'Landscape', translation: '景观' },
      { term: 'Breathtaking', translation: '惊人的/美得令人窒息' },
      { term: 'Environment', translation: '环境' },
      { term: 'Ecosystem', translation: '生态系统' },
      { term: 'Preservation', translation: '保护' },
      { term: 'Urbanization', translation: '城市化' },
      { term: 'Fresh air', translation: '新鲜空气' },
      { term: 'Escape', translation: '逃离' },
      { term: 'Wildlife', translation: '野生动物' },
      { term: 'Scenic', translation: '风景优美的' }
    ]
  },
  {
    id: 'p23-building',
    title: '旅途中的有趣建筑 (Interesting building)',
    category: 'Place',
    part2: {
      prompt: 'Describe an interesting building you saw during a trip',
      bullets: [
        'Where you saw it',
        'What it looks like',
        'What you have known about it',
        'And explain why you think it is interesting'
      ],
      sampleStructure: [
        { cue: 'Where', keywords: [{ term: 'Beijing', translation: '北京' }, { term: 'Olympics park', translation: '奥林匹克公园' }] },
        { cue: 'What looks like', keywords: [{ term: 'Bird\'s Nest', translation: '鸟巢' }, { term: 'Steel beams', translation: '钢梁' }, { term: 'Interwoven', translation: '交织' }] },
        { cue: 'What known', keywords: [{ term: '2008 Olympics', translation: '2008奥运会' }, { term: 'Main stadium', translation: '主体育场' }] },
        { cue: 'Why interesting', keywords: [{ term: 'Unique design', translation: '独特设计' }, { term: 'Engineering complexity', translation: '工程复杂性' }, { term: 'Iconic', translation: '标志性' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'Should all scenic spots charge an entry fee?', sampleAnswer: 'Not all. Public parks and heritage sites should remain accessible, though maintenance fees are understandable.' },
        { text: 'Is visiting scenic spots the best choice for us while travelling?', sampleAnswer: 'Not always. Sometimes exploring local neighborhoods gives a more authentic experience.' },
        { text: 'Why do some people like to live in big cities?', sampleAnswer: 'For job opportunities, convenience, entertainment, and better public services.' },
        { text: 'Is it necessary for tourists to go to visit landmarks when travelling in a place?', sampleAnswer: 'No, but landmarks are famous for a reason and usually worth seeing at least once.' }
      ]
    },
    vocabulary: [
      { term: 'Architecture', translation: '建筑' },
      { term: 'Landmark', translation: '地标' },
      { term: 'Historical', translation: '历史的' },
      { term: 'Design', translation: '设计' },
      { term: 'Skyscraper', translation: '摩天大楼' },
      { term: 'Structure', translation: '结构' },
      { term: 'Heritage site', translation: '遗产遗址' },
      { term: 'Tourist attraction', translation: '旅游景点' },
      { term: 'Modern', translation: '现代的' },
      { term: 'Unique', translation: '独特的' }
    ]
  },
  {
    id: 'p23-wild-animal',
    title: '想多了解的野生动物 (Wild animal)',
    category: 'Object',
    part2: {
      prompt: 'Describe a wild animal that you want to know more about',
      bullets: [
        'What it is',
        'When you saw it',
        'Where you saw it',
        'And explain why you want to know more about it'
      ],
      sampleStructure: [
        { cue: 'What', keywords: [{ term: 'Snow Leopard', translation: '雪豹' }, { term: 'Big cat', translation: '大猫' }] },
        { cue: 'When/Where', keywords: [{ term: 'Documentary', translation: '纪录片' }, { term: 'TV', translation: '电视' }, { term: 'Central Asia mountains', translation: '中亚山区' }] },
        { cue: 'Why know more', keywords: [{ term: 'Elusive', translation: '难以捉摸' }, { term: 'Mysterious', translation: '神秘' }, { term: 'Adaptation to harsh cold', translation: '适应严寒' }, { term: 'Survival', translation: '生存' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'Why should we protect wild animals?', sampleAnswer: 'To maintain biodiversity and the balance of ecosystems.' },
        { text: 'Why are some people more willing to protect wild animals than others?', sampleAnswer: 'Education, empathy, and personal values play a big role.' },
        { text: 'Do you think it\'s important to take children to the zoo to see animals?', sampleAnswer: 'Yes, if the zoo is ethical. It fosters a connection with nature.' },
        { text: 'Why do people attach more importance to protecting rare animals?', sampleAnswer: 'Because once they are gone, they are lost forever (extinction is irreversible).' }
      ]
    },
    vocabulary: [
      { term: 'Endangered', translation: '濒危的' },
      { term: 'Habitat', translation: '栖息地' },
      { term: 'Species', translation: '物种' },
      { term: 'Predator', translation: '捕食者' },
      { term: 'Conservation', translation: '保护' },
      { term: 'Biodiversity', translation: '生物多样性' },
      { term: 'Extinction', translation: '灭绝' },
      { term: 'Captivity', translation: '圈养' },
      { term: 'Instinct', translation: '本能' },
      { term: 'Fascinating', translation: '迷人的' }
    ]
  },
  {
    id: 'p23-old-thing',
    title: '家中老物件 (Old thing in family)',
    category: 'Object',
    part2: {
      prompt: 'Describe an important old thing that your family has kept for a long time',
      bullets: [
        'What it is',
        'How/when your family first got this thing',
        'How long your family has kept it',
        'And explain why this thing is important to your family'
      ],
      sampleStructure: [
        { cue: 'What', keywords: [{ term: 'Mechanical clock', translation: '机械钟' }, { term: 'Antique', translation: '古董' }] },
        { cue: 'How got', keywords: [{ term: 'Great-grandfather', translation: '曾祖父' }, { term: 'Heirloom', translation: '传家宝' }] },
        { cue: 'How long', keywords: [{ term: 'Over 80 years', translation: '超过80年' }] },
        { cue: 'Why important', keywords: [{ term: 'Connection to ancestors', translation: '与祖先联系' }, { term: 'Family history', translation: '家族历史' }, { term: 'Memory', translation: '记忆' }, { term: 'Symbol', translation: '象征' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'What kind of old things do people like to keep?', sampleAnswer: 'Photos, jewelry, furniture, and letters.' },
        { text: 'Why do people keep old things?', sampleAnswer: 'For sentimental value, memories, or potential monetary value.' },
        { text: 'What are the differences between the things old people keep and those young people keep?', sampleAnswer: 'Old people keep things with history; young people keep collectibles or tech.' },
        { text: 'What are the differences between the things that people keep today and the things that people kept in the past?', sampleAnswer: 'Today we keep digital files; in the past, people kept physical objects.' }
      ]
    },
    vocabulary: [
      { term: 'Antique', translation: '古董' },
      { term: 'Heirloom', translation: '传家宝' },
      { term: 'Sentimental value', translation: '情感价值' },
      { term: 'Memory', translation: '记忆' },
      { term: 'Vintage', translation: '复古的' },
      { term: 'Preserve', translation: '保存' },
      { term: 'Generation', translation: '一代人' },
      { term: 'Nostalgia', translation: '怀旧' },
      { term: 'Collection', translation: '收藏' },
      { term: 'History', translation: '历史' }
    ]
  },
  {
    id: 'p23-useful-book',
    title: '有用的书 (Useful book)',
    category: 'Object',
    part2: {
      prompt: 'Describe a book you read that you found useful',
      bullets: [
        'What it is',
        'When you read it',
        'Why you think it is useful',
        'And explain how you felt about it'
      ],
      sampleStructure: [
        { cue: 'What', keywords: [{ term: 'Atomic Habits', translation: '《原子习惯》' }, { term: 'Self-help', translation: '自助书籍' }] },
        { cue: 'When', keywords: [{ term: 'Last year', translation: '去年' }, { term: 'Summer', translation: '夏天' }] },
        { cue: 'Why useful', keywords: [{ term: 'Practical strategies', translation: '实用策略' }, { term: 'Building habits', translation: '建立习惯' }, { term: 'Breaking bad ones', translation: '改掉坏习惯' }] },
        { cue: 'How felt', keywords: [{ term: 'Motivated', translation: '充满动力' }, { term: 'Empowered', translation: '赋能' }, { term: 'Action-oriented', translation: '行动导向' }, { term: 'Clear', translation: '清晰' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'What are the types of books that young people like to read?', sampleAnswer: 'Fantasy, sci-fi, graphic novels, and self-help.' },
        { text: 'What\'s the difference between the reading habits of old people and young people?', sampleAnswer: 'Older people often prefer newspapers and classics; young people prefer digital consumption.' },
        { text: 'What\'s the difference between paper books and e-books?', sampleAnswer: 'Paper books have texture and smell; e-books are portable and convenient.' },
        { text: 'Some people say that it is easier for children who start reading from a young age to succeed. Do you agree?', sampleAnswer: 'Yes, reading builds vocabulary, focus, and knowledge, which are keys to success.' }
      ]
    },
    vocabulary: [
      { term: 'Knowledge', translation: '知识' },
      { term: 'Practical', translation: '实用的' },
      { term: 'Fiction', translation: '小说' },
      { term: 'Non-fiction', translation: '非小说类' },
      { term: 'Digital format', translation: '数字格式' },
      { term: 'Literacy', translation: '读写能力' },
      { term: 'Author', translation: '作者' },
      { term: 'Recommendation', translation: '推荐' },
      { term: 'Informative', translation: '涨知识的' },
      { term: 'Plot', translation: '情节' }
    ]
  },
  {
    id: 'p23-decision',
    title: '别人帮忙下做的决定 (Decision with help)',
    category: 'Event',
    part2: {
      prompt: 'Describe an important decision made with the help of other people',
      bullets: [
        'What the decision was',
        'Why you made the decision',
        'Who helped you make the decision',
        'And how you felt about it'
      ],
      sampleStructure: [
        { cue: 'What decision', keywords: [{ term: 'University major', translation: '大学专业' }, { term: 'Computer Science', translation: '计算机科学' }] },
        { cue: 'Why made', keywords: [{ term: 'Career path', translation: '职业道路' }, { term: 'Interest', translation: '兴趣' }, { term: 'Future prospects', translation: '未来前景' }] },
        { cue: 'Who helped', keywords: [{ term: 'Parents', translation: '父母' }, { term: 'Career counselor', translation: '职业顾问' }] },
        { cue: 'How felt', keywords: [{ term: 'Conflicted initially', translation: '起初纠结' }, { term: 'Confident later', translation: '后来自信' }, { term: 'Relieved', translation: '释然' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'What kind of decisions do you think are meaningful?', sampleAnswer: 'Decisions involving career, marriage, or moving to a new city.' },
        { text: 'What important decisions should be made by teenagers themselves?', sampleAnswer: 'Choices about hobbies, friends, and personal style.' },
        { text: 'Why are some people unwilling to make quick decisions?', sampleAnswer: 'Fear of making the wrong choice (regret aversion).' },
        { text: 'Do people like to ask for advice about their personal life or their work?', sampleAnswer: 'Yes, to gain a different perspective and validation.' }
      ]
    },
    vocabulary: [
      { term: 'Choice', translation: '选择' },
      { term: 'Guidance', translation: '指导' },
      { term: 'Consult', translation: '咨询' },
      { term: 'Dilemma', translation: '困境' },
      { term: 'Consequence', translation: '后果' },
      { term: 'Independent', translation: '独立的' },
      { term: 'Advice', translation: '建议' },
      { term: 'Hesitate', translation: '犹豫' },
      { term: 'Crucial', translation: '关键的' },
      { term: 'Life-changing', translation: '改变人生的' }
    ]
  },
  {
    id: 'p23-water-sport',
    title: '水上运动 (Water sport)',
    category: 'Event',
    part2: {
      prompt: 'Describe a water sport you would like to try in the future',
      bullets: [
        'What it is',
        'Where you would like to try it',
        'Whether it is difficult',
        'And explain why you would like to try it'
      ],
      sampleStructure: [
        { cue: 'What', keywords: [{ term: 'Surfing', translation: '冲浪' }] },
        { cue: 'Where', keywords: [{ term: 'Hawaii', translation: '夏威夷' }, { term: 'Gold Coast', translation: '黄金海岸' }] },
        { cue: 'Difficulty', keywords: [{ term: 'Balance', translation: '平衡' }, { term: 'Timing', translation: '时机' }, { term: 'Strength', translation: '力量' }, { term: 'High learning curve', translation: '学习曲线陡峭' }] },
        { cue: 'Why try', keywords: [{ term: 'Cool', translation: '酷' }, { term: 'Freeing', translation: '自由' }, { term: 'Connection with ocean', translation: '与海洋连接' }, { term: 'Adrenaline', translation: '肾上腺素' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'Do you think it is good to teach swimming in school?', sampleAnswer: 'Yes, it is a vital life-saving skill.' },
        { text: 'What kinds of water sports are popular nowadays?', sampleAnswer: 'Swimming, diving, surfing, and paddleboarding.' },
        { text: 'Why do people like to live near water?', sampleAnswer: 'For the view, the calming effect, and recreational activities.' },
        { text: 'What are the advantages of water transportation?', sampleAnswer: 'It allows for carrying heavy cargo (shipping) cheaply over long distances.' }
      ]
    },
    vocabulary: [
      { term: 'Aquatic', translation: '水生的' },
      { term: 'Safety equipment', translation: '安全设备' },
      { term: 'Refreshing', translation: '清爽的' },
      { term: 'Skill', translation: '技能' },
      { term: 'Coastline', translation: '海岸线' },
      { term: 'Transportation', translation: '运输' },
      { term: 'Recreation', translation: '娱乐' },
      { term: 'Swimming', translation: '游泳' },
      { term: 'Diving', translation: '潜水' },
      { term: 'Surfing', translation: '冲浪' }
    ]
  },
  {
    id: 'p23-routine',
    title: '近期日常改变 (Routine change)',
    category: 'Event',
    part2: {
      prompt: 'Describe a positive change that you have made recently in your daily routine',
      bullets: [
        'What the change is',
        'How you have changed the routine',
        'Why you think it is a positive change',
        'And explain how you feel about the change'
      ],
      sampleStructure: [
        { cue: 'What change', keywords: [{ term: 'Waking up earlier', translation: '早起' }, { term: 'Jogging', translation: '慢跑' }] },
        { cue: 'How changed', keywords: [{ term: 'Alarm clock', translation: '闹钟' }, { term: 'Sleep earlier', translation: '早睡' }, { term: 'Discipline', translation: '自律' }] },
        { cue: 'Why positive', keywords: [{ term: 'More energy', translation: '更多精力' }, { term: 'Productivity', translation: '生产力' }, { term: 'Healthier', translation: '更健康' }] },
        { cue: 'How feel', keywords: [{ term: 'Proud', translation: '自豪' }, { term: 'Accomplished', translation: '有成就感' }, { term: 'Alert', translation: '清醒' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'What do people normally plan in their daily lives?', sampleAnswer: 'Work schedules, meals, and social activities.' },
        { text: 'Is time management very important in our daily lives?', sampleAnswer: 'Yes, to balance work, rest, and play efficiently.' },
        { text: 'What changes would people often make?', sampleAnswer: 'Dietary changes, exercise habits, or quitting smoking.' },
        { text: 'Do you think it is good to change jobs frequently?', sampleAnswer: 'Not too frequently, as it can look unstable, but occasional change brings growth.' }
      ]
    },
    vocabulary: [
      { term: 'Schedule', translation: '日程' },
      { term: 'Habit', translation: '习惯' },
      { term: 'Productivity', translation: '生产力' },
      { term: 'Lifestyle', translation: '生活方式' },
      { term: 'Adapt', translation: '适应' },
      { term: 'Improvement', translation: '改善' },
      { term: 'Time management', translation: '时间管理' },
      { term: 'Efficiency', translation: '效率' },
      { term: 'Discipline', translation: '自律' },
      { term: 'Goal', translation: '目标' }
    ]
  },
  {
    id: 'p23-shopping',
    title: '购物服务 (Shopping service)',
    category: 'Event',
    part2: {
      prompt: 'Describe a time when you received good service in a shop/store',
      bullets: [
        'Where the shop is',
        'When you went to the shop',
        'What service you received from the staff',
        'And explain how you felt about the service'
      ],
      sampleStructure: [
        { cue: 'Where', keywords: [{ term: 'Apple Store', translation: '苹果商店' }, { term: 'City center', translation: '市中心' }] },
        { cue: 'When', keywords: [{ term: 'Last month', translation: '上个月' }, { term: 'Weekend', translation: '周末' }] },
        { cue: 'What service', keywords: [{ term: 'Setup phone', translation: '设置手机' }, { term: 'Data transfer', translation: '数据传输' }, { term: 'Patient explanation', translation: '耐心解释' }] },
        { cue: 'How felt', keywords: [{ term: 'Valued', translation: '受重视' }, { term: 'Relieved', translation: '释然' }, { term: 'Happy', translation: '开心' }, { term: 'Satisfied', translation: '满意' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'Why are shopping malls so popular in China?', sampleAnswer: 'They are one-stop destinations for shopping, dining, and entertainment.' },
        { text: 'What are the advantages and disadvantages of shopping in small shops?', sampleAnswer: 'Advantage: unique items and personal service. Disadvantage: limited selection.' },
        { text: 'Why do some people not like shopping in small shops?', sampleAnswer: 'They might feel pressured to buy or prices might be higher.' },
        { text: 'What are the differences between online shopping and in-store shopping?', sampleAnswer: 'Online is convenient and cheaper; in-store allows you to try things on.' }
      ]
    },
    vocabulary: [
      { term: 'Customer service', translation: '客户服务' },
      { term: 'Assistance', translation: '协助' },
      { term: 'Retail', translation: '零售' },
      { term: 'Convenience', translation: '便利' },
      { term: 'E-commerce', translation: '电子商务' },
      { term: 'Bargain', translation: '便宜货/讨价还价' },
      { term: 'Quality', translation: '质量' },
      { term: 'Helpful', translation: '有帮助的' },
      { term: 'Consumer', translation: '消费者' },
      { term: 'Experience', translation: '体验' }
    ]
  },
  {
    id: 'p23-talent',
    title: '想提升的天赋 (Talent to improve)',
    category: 'Abstract',
    part2: {
      prompt: 'Describe a natural talent (sports, music, etc.) you want to improve',
      bullets: [
        'What it is',
        'When you discovered it',
        'How you want to improve it',
        'And how you feel about it'
      ],
      sampleStructure: [
        { cue: 'What', keywords: [{ term: 'Drawing', translation: '画画' }, { term: 'Sketching', translation: '素描' }] },
        { cue: 'When discovered', keywords: [{ term: 'Primary school', translation: '小学' }, { term: 'Art class', translation: '美术课' }] },
        { cue: 'How improve', keywords: [{ term: 'Advanced course', translation: '进阶课程' }, { term: 'Oil painting', translation: '油画' }, { term: 'Practice', translation: '练习' }] },
        { cue: 'How feel', keywords: [{ term: 'Excited', translation: '兴奋' }, { term: 'Passionate', translation: '热情' }, { term: 'Creative potential', translation: '创造潜力' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'Do you think artists with talents should focus on their talents?', sampleAnswer: 'Yes, honing their craft allows them to reach their full potential.' },
        { text: 'Is it possible for us to know whether children who are 3 or 4 years old will become musicians?', sampleAnswer: 'Difficult to say for sure, but early signs of rhythm and pitch can be indicators.' },
        { text: 'Why do people like to watch talent shows?', sampleAnswer: 'To see ordinary people do extraordinary things (underdog stories).' },
        { text: 'Do you think it is more interesting to watch famous people\'s or ordinary people\'s shows?', sampleAnswer: 'Ordinary people, because it feels more relatable and surprising.' }
      ]
    },
    vocabulary: [
      { term: 'Gifted', translation: '有天赋的' },
      { term: 'Potential', translation: '潜力' },
      { term: 'Practice', translation: '练习' },
      { term: 'Skill set', translation: '技能组合' },
      { term: 'Dedication', translation: '奉献' },
      { term: 'Performance', translation: '表现' },
      { term: 'Prodigy', translation: '神童' },
      { term: 'Encouragement', translation: '鼓励' },
      { term: 'Improvement', translation: '进步' },
      { term: 'Ability', translation: '能力' }
    ]
  },
  {
    id: 'p23-story',
    title: '传统故事 (Traditional story)',
    category: 'Abstract',
    part2: {
      prompt: 'Describe an interesting traditional story',
      bullets: [
        'What the story is about',
        'When/how you knew it',
        'Who told you the story',
        'And explain how you felt when you first heard it'
      ],
      sampleStructure: [
        { cue: 'About', keywords: [{ term: 'Mulan', translation: '木兰' }, { term: 'Disguise', translation: '伪装' }, { term: 'Army', translation: '军队' }] },
        { cue: 'When/How', keywords: [{ term: 'Childhood', translation: '童年' }, { term: 'Bedtime story', translation: '睡前故事' }] },
        { cue: 'Who told', keywords: [{ term: 'Grandmother', translation: '祖母' }] },
        { cue: 'How felt', keywords: [{ term: 'Inspired', translation: '受启发' }, { term: 'Bravery', translation: '勇敢' }, { term: 'Loyalty', translation: '忠诚' }, { term: 'Empowered', translation: '赋权' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'What kind of stories do children like?', sampleAnswer: 'Fairy tales, adventures, and stories with animals.' },
        { text: 'What are the benefits of bedtime stories for children?', sampleAnswer: 'It relaxes them, bonds them with parents, and improves language skills.' },
        { text: 'Why do most children like listening to stories before bedtime?', sampleAnswer: 'It stimulates their imagination and helps them transition to sleep.' },
        { text: 'What can children learn from stories?', sampleAnswer: 'Morals, empathy, and cultural values.' }
      ]
    },
    vocabulary: [
      { term: 'Folklore', translation: '民间传说' },
      { term: 'Myth', translation: '神话' },
      { term: 'Legend', translation: '传说' },
      { term: 'Moral', translation: '寓意' },
      { term: 'Imagination', translation: '想象力' },
      { term: 'Oral tradition', translation: '口述传统' },
      { term: 'Narrative', translation: '叙述' },
      { term: 'Character', translation: '角色' },
      { term: 'Fable', translation: '寓言' },
      { term: 'Generations', translation: '世代' }
    ]
  },
  {
    id: 'p23-athlete',
    title: '钦佩的运动员 (Admired athlete)',
    category: 'People',
    part2: {
      prompt: 'Describe a successful sportsperson you admire',
      bullets: [
        'Who he/she is',
        'What you know about him/her',
        'What he/she is like in real life',
        'What achievement he/she has made',
        'And explain why you admire him/her'
      ],
      sampleStructure: [
        { cue: 'Who', keywords: [{ term: 'Roger Federer', translation: '罗杰·费德勒' }, { term: 'Tennis legend', translation: '网球传奇' }] },
        { cue: 'What know', keywords: [{ term: 'Swiss', translation: '瑞士人' }, { term: 'Elegant style', translation: '优雅风格' }] },
        { cue: 'Like in real life', keywords: [{ term: 'Classy', translation: '优雅' }, { term: 'Humble', translation: '谦逊' }, { term: 'Philanthropist', translation: '慈善家' }] },
        { cue: 'Achievement', keywords: [{ term: '20 Grand Slams', translation: '20个大满贯' }, { term: 'World #1 for weeks', translation: '占据世界第一' }] },
        { cue: 'Why admire', keywords: [{ term: 'Longevity', translation: '职业常青' }, { term: 'Sportsmanship', translation: '体育精神' }, { term: 'Grace', translation: '优雅' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'Should students have physical education and do sports at school?', sampleAnswer: 'Yes, to combat obesity and relieve academic stress.' },
        { text: 'What qualities should an athlete have?', sampleAnswer: 'Discipline, resilience, and competitive spirit.' },
        { text: 'Is talent important in sports?', sampleAnswer: 'Yes, but hard work beats talent when talent doesn\'t work hard.' },
        { text: 'Is it easy to identify children\'s talents?', sampleAnswer: 'Not always; sometimes talent only emerges after years of practice.' }
      ]
    },
    vocabulary: [
      { term: 'Role model', translation: '榜样' },
      { term: 'Determination', translation: '决心' },
      { term: 'Stamina', translation: '耐力' },
      { term: 'Competitive', translation: '有竞争力的' },
      { term: 'Training', translation: '训练' },
      { term: 'Endurance', translation: '忍耐力' },
      { term: 'Sportsmanship', translation: '体育精神' },
      { term: 'Record-breaking', translation: '破纪录的' },
      { term: 'Professional', translation: '专业的' },
      { term: 'Fitness', translation: '体能' }
    ]
  },
  {
    id: 'p23-lost',
    title: '迷路 (Lost way)',
    category: 'Event',
    part2: {
      prompt: 'Describe an occasion when you lost your way',
      bullets: [
        'Where you were',
        'What happened',
        'How you felt',
        'And explain how you found your way'
      ],
      sampleStructure: [
        { cue: 'Where', keywords: [{ term: 'Venice, Italy', translation: '威尼斯' }, { term: 'Narrow streets', translation: '狭窄街道' }] },
        { cue: 'What happened', keywords: [{ term: 'Phone died', translation: '手机没电' }, { term: 'Confused', translation: '困惑' }] },
        { cue: 'How felt', keywords: [{ term: 'Panic', translation: '恐慌' }, { term: 'Anxious', translation: '焦虑' }, { term: 'Helpless', translation: '无助' }] },
        { cue: 'How found', keywords: [{ term: 'Asked shopkeeper', translation: '问店主' }, { term: 'Directions', translation: '指引' }, { term: 'Main square', translation: '主广场' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'Why do some people get lost more easily than others?', sampleAnswer: 'Poor spatial awareness or lack of attention to landmarks.' },
        { text: 'Do you think it is important to be able to read a map?', sampleAnswer: 'Yes, technology can fail, so map reading is a good backup skill.' },
        { text: 'Do you think it is important to do some preparation before you travel to new places?', sampleAnswer: 'Yes, downloading maps and knowing basic routes is essential.' },
        { text: 'How can people find their way when they are lost?', sampleAnswer: 'Ask locals, look for landmarks, or use a physical map.' }
      ]
    },
    vocabulary: [
      { term: 'Disoriented', translation: '迷失方向的' },
      { term: 'Navigation', translation: '导航' },
      { term: 'GPS', translation: '全球定位系统' },
      { term: 'Direction', translation: '方向' },
      { term: 'Unfamiliar', translation: '不熟悉的' },
      { term: 'Panic', translation: '恐慌' },
      { term: 'Landmark', translation: '地标' },
      { term: 'Route', translation: '路线' },
      { term: 'Ask for directions', translation: '问路' },
      { term: 'Sense of direction', translation: '方向感' }
    ]
  },
  {
    id: 'p23-talk',
    title: '演讲经历 (Talk/Speech)',
    category: 'Event',
    part2: {
      prompt: 'Describe a talk you gave to a group of people',
      bullets: [
        'Who you gave the talk to',
        'What the talk was about',
        'Why you gave the talk',
        'And explain how you felt about the talk'
      ],
      sampleStructure: [
        { cue: 'Who to', keywords: [{ term: 'Classmates', translation: '同学' }, { term: 'Teacher', translation: '老师' }] },
        { cue: 'What about', keywords: [{ term: 'Climate change', translation: '气候变化' }, { term: 'Science project', translation: '科学项目' }] },
        { cue: 'Why gave', keywords: [{ term: 'Assignment', translation: '作业' }, { term: 'Grade', translation: '成绩' }] },
        { cue: 'How felt', keywords: [{ term: 'Nervous initially', translation: '起初紧张' }, { term: 'Confident later', translation: '后来自信' }, { term: 'Relieved', translation: '释然' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'What benefits does the internet bring to communication?', sampleAnswer: 'Instant connectivity, global reach, and low cost.' },
        { text: 'Which one is better, being a communicator or a listener?', sampleAnswer: 'Both are equal. A good conversation requires balance.' },
        { text: 'What qualities does a person need to have to be a good communicator?', sampleAnswer: 'Clarity, empathy, and active listening skills.' },
        { text: 'What qualities do people need to speak in public?', sampleAnswer: 'Confidence, good projection, and the ability to engage the audience.' }
      ]
    },
    vocabulary: [
      { term: 'Public speaking', translation: '公众演讲' },
      { term: 'Presentation', translation: '演示/展示' },
      { term: 'Confidence', translation: '自信' },
      { term: 'Audience', translation: '听众' },
      { term: 'Message', translation: '信息' },
      { term: 'Articulation', translation: '清晰表达' },
      { term: 'Nervousness', translation: '紧张' },
      { term: 'Engagement', translation: '参与感' },
      { term: 'Speech', translation: '演讲' },
      { term: 'Interaction', translation: '互动' }
    ]
  },
  {
    id: 'p23-trees',
    title: '想去的多树之地 (Place with trees)',
    category: 'Place',
    part2: {
      prompt: 'Describe a place with a lot of trees that you would like to visit',
      bullets: [
        'Where it is',
        'How you knew this place',
        'What it is like',
        'And explain why you would like to visit it'
      ],
      sampleStructure: [
        { cue: 'Where', keywords: [{ term: 'Amazon Rainforest', translation: '亚马逊雨林' }, { term: 'Brazil', translation: '巴西' }] },
        { cue: 'How knew', keywords: [{ term: 'Geography class', translation: '地理课' }, { term: 'Documentaries', translation: '纪录片' }] },
        { cue: 'What like', keywords: [{ term: 'Vast', translation: '广阔' }, { term: 'Dense jungle', translation: '茂密丛林' }, { term: 'Teeming with life', translation: '生机勃勃' }] },
        { cue: 'Why visit', keywords: [{ term: 'Biodiversity', translation: '生物多样性' }, { term: 'Lungs of Earth', translation: '地球之肺' }, { term: 'Adventure', translation: '冒险' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'Why do people like visiting places with trees or forests?', sampleAnswer: 'For fresh air, shade, and psychological relief.' },
        { text: 'Are natural views better than city views?', sampleAnswer: 'Subjective, but natural views are scientifically proven to lower stress.' },
        { text: 'Do all people need some nature?', sampleAnswer: 'Yes, humans have an innate connection to nature (biophilia).' },
        { text: 'Are people hard-wired to protect environment?', sampleAnswer: 'Debatable. We love nature, but convenience often overrides protection instincts.' }
      ]
    },
    vocabulary: [
      { term: 'Forest', translation: '森林' },
      { term: 'Greenery', translation: '绿植' },
      { term: 'Vegetation', translation: '植被' },
      { term: 'Ecosystem', translation: '生态系统' },
      { term: 'Biodiversity', translation: '生物多样性' },
      { term: 'Relaxing', translation: '放松的' },
      { term: 'Oxygen', translation: '氧气' },
      { term: 'Woodland', translation: '林地' },
      { term: 'Climate', translation: '气候' },
      { term: 'Nature', translation: '自然' }
    ]
  },
  {
    id: 'p23-science',
    title: '感兴趣的科学 (Science area)',
    category: 'Abstract',
    part2: {
      prompt: 'Describe an area/subject of science (biology, robotics, etc.) that you are interested in',
      bullets: [
        'Which area/subject it is',
        'When and where you came to know this area/subject',
        'How you get information about this area/subject',
        'And explain why you are interested in this area/subject'
      ],
      sampleStructure: [
        { cue: 'Which area', keywords: [{ term: 'Astrophysics', translation: '天体物理' }, { term: 'Space', translation: '太空' }] },
        { cue: 'When/Where knew', keywords: [{ term: 'Movie "Interstellar"', translation: '电影《星际穿越》' }, { term: 'High school', translation: '高中' }] },
        { cue: 'How get info', keywords: [{ term: 'NASA YouTube', translation: 'NASA频道' }, { term: 'Articles', translation: '文章' }, { term: 'Podcasts', translation: '播客' }] },
        { cue: 'Why interested', keywords: [{ term: 'Scale of universe', translation: '宇宙尺度' }, { term: 'Black holes', translation: '黑洞' }, { term: 'Mind-blowing', translation: '震撼' }, { term: 'Mystery', translation: '奥秘' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'Why do some children not like learning science at school?', sampleAnswer: 'It can be perceived as too difficult, dry, or abstract.' },
        { text: 'Is it important to study science at school?', sampleAnswer: 'Yes, to understand how the world works and develop critical thinking.' },
        { text: 'Which science subject is the most important for children to learn?', sampleAnswer: 'Biology, as it relates to their own bodies and health.' },
        { text: 'Should people continue to study science after graduating from school?', sampleAnswer: 'Yes, staying informed about scientific progress helps make better life decisions.' }
      ]
    },
    vocabulary: [
      { term: 'Experiment', translation: '实验' },
      { term: 'Technology', translation: '技术' },
      { term: 'Innovation', translation: '创新' },
      { term: 'Research', translation: '研究' },
      { term: 'Discovery', translation: '发现' },
      { term: 'Curiosity', translation: '好奇心' },
      { term: 'Scientific method', translation: '科学方法' },
      { term: 'Biology', translation: '生物学' },
      { term: 'Physics', translation: '物理学' },
      { term: 'Advancement', translation: '进步' }
    ]
  },
  {
    id: 'p23-toy',
    title: '童年喜欢的玩具 (Childhood toy)',
    category: 'Object',
    part2: {
      prompt: 'Describe a toy you liked in your childhood',
      bullets: [
        'What kind of toy it is',
        'When you received it',
        'How you played it',
        'And how you felt about it'
      ],
      sampleStructure: [
        { cue: 'What kind', keywords: [{ term: 'LEGO set', translation: '乐高' }, { term: 'Building blocks', translation: '积木' }] },
        { cue: 'When received', keywords: [{ term: '7th birthday', translation: '7岁生日' }, { term: 'Gift', translation: '礼物' }] },
        { cue: 'How played', keywords: [{ term: 'Built castles', translation: '建城堡' }, { term: 'Spaceships', translation: '飞船' }, { term: 'Hours of play', translation: '玩数小时' }] },
        { cue: 'How felt', keywords: [{ term: 'Creative', translation: '创造性' }, { term: 'Proud', translation: '自豪' }, { term: 'Fun', translation: '有趣' }, { term: 'Engaged', translation: '专注' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'How do advertisements influence children?', sampleAnswer: 'They create desire and pester power (nagging parents to buy).' },
        { text: 'Should advertising aimed at kids be prohibited?', sampleAnswer: 'Yes, children are vulnerable and cannot distinguish content from ads.' },
        { text: 'What\'s the difference between the toys kids play now and those they played in the past?', sampleAnswer: 'Past: simple, physical (dolls, wood). Now: complex, digital (tablets, electronic).' },
        { text: 'Do you think parents should buy more toys for their kids or spend more time with them?', sampleAnswer: 'Spend more time. Memories last longer than plastic toys.' }
      ]
    },
    vocabulary: [
      { term: 'Playtime', translation: '游戏时间' },
      { term: 'Imagination', translation: '想象力' },
      { term: 'Gift', translation: '礼物' },
      { term: 'Cherished', translation: '珍爱的' },
      { term: 'Electronic', translation: '电子的' },
      { term: 'Traditional', translation: '传统的' },
      { term: 'Educational', translation: '教育性的' },
      { term: 'Entertainment', translation: '娱乐' },
      { term: 'Consumerism', translation: '消费主义' },
      { term: 'Fun', translation: '乐趣' }
    ]
  },
  {
    id: 'p23-habit',
    title: '学习朋友好习惯 (Friend\'s good habit)',
    category: 'People',
    part2: {
      prompt: 'Describe a good habit your friend has and you want to develop',
      bullets: [
        'Who your friend is',
        'What habit he/she has',
        'When you noticed this habit',
        'And explain why you want to develop this habit'
      ],
      sampleStructure: [
        { cue: 'Who friend', keywords: [{ term: 'Alice', translation: '爱丽丝' }, { term: 'Roommate', translation: '室友' }] },
        { cue: 'What habit', keywords: [{ term: 'Journaling', translation: '写日记' }, { term: 'Writing daily', translation: '每日写作' }] },
        { cue: 'When noticed', keywords: [{ term: 'Shared trip', translation: '共同旅行' }, { term: 'Every night', translation: '每晚' }] },
        { cue: 'Why develop', keywords: [{ term: 'Mindfulness', translation: '正念' }, { term: 'Emotional balance', translation: '情绪平衡' }, { term: 'Memory keeping', translation: '记录记忆' }] }
      ]
    },
    part3: {
      questions: [
        { text: 'What habits should children have?', sampleAnswer: 'Hygiene (brushing teeth), politeness, and reading.' },
        { text: 'What should parents do to help their children develop good habits?', sampleAnswer: 'Lead by example and provide consistency.' },
        { text: 'What influences do children with bad habits have on other children?', sampleAnswer: 'Peer pressure can cause bad habits to spread.' },
        { text: 'Why do some habits change when people get older?', sampleAnswer: 'Priorities change (e.g., health becomes more important) or lifestyle shifts.' }
      ]
    },
    vocabulary: [
      { term: 'Routine', translation: '常规' },
      { term: 'Consistency', translation: '一致性' },
      { term: 'Discipline', translation: '纪律' },
      { term: 'Behavior', translation: '行为' },
      { term: 'Positive influence', translation: '正面影响' },
      { term: 'Adopt', translation: '采纳/养成' },
      { term: 'Lifestyle', translation: '生活方式' },
      { term: 'Willpower', translation: '意志力' },
      { term: 'Healthy', translation: '健康的' },
      { term: 'Development', translation: '发展' }
    ]
  }
];
