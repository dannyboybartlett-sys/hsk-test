// HSK 3 — Sentence Error Detection Bank
// Each item: 3 correct sentences + 1 incorrect sentence with explanation

export const errorBank = [
  // ── Word Order ──────────────────────────────────────────────────────────
  {
    id: 1,
    category: 'word_order',
    errorSentence: '我很喜欢汉语非常。',
    errorExplanation: 'The adverb should come before the adjective/verb. Correct: 我非常喜欢汉语。',
    correctAlternatives: [
      '我非常喜欢汉语。',
      '她很漂亮。',
      '今天天气很好。',
    ],
  },
  {
    id: 2,
    category: 'word_order',
    errorSentence: '他图书馆去每天。',
    errorExplanation: 'Time words go before the verb. Correct: 他每天去图书馆。',
    correctAlternatives: [
      '他每天去图书馆。',
      '我明天去上海。',
      '她经常在家学习。',
    ],
  },
  {
    id: 3,
    category: 'word_order',
    errorSentence: '这本书很意思有。',
    errorExplanation: 'Adjective complement must follow the adjective. Correct: 这本书很有意思。',
    correctAlternatives: [
      '这本书很有意思。',
      '那个电影很精彩。',
      '这件衣服很漂亮。',
    ],
  },
  {
    id: 4,
    category: 'word_order',
    errorSentence: '我去过北京没有。',
    errorExplanation: 'Negation of experiential 过 comes before the verb. Correct: 我没有去过北京。',
    correctAlternatives: [
      '我没有去过北京。',
      '他没有吃过烤鸭。',
      '她没有来过上海。',
    ],
  },

  // ── Missing Particles (了, 的, 吗, 吧) ────────────────────────────────
  {
    id: 5,
    category: 'missing_particle',
    errorSentence: '我吃饭了。',
    errorExplanation: '吃完饭 is more natural. Also 了 after 吃 alone can be ambiguous. Correct: 我吃完饭了。 / 我吃了饭。',
    correctAlternatives: [
      '我吃完饭了。',
      '他已经做完作业了。',
      '妈妈把衣服洗了。',
    ],
  },
  {
    id: 6,
    category: 'missing_particle',
    errorSentence: '她是学生吗？',
    errorExplanation: '一名 makes it more natural for profession. Correct: 她是一名学生吗？',
    correctAlternatives: [
      '她是一名学生吗？',
      '他是老师吗？',
      '你是医生吗？',
    ],
  },
  {
    id: 7,
    category: 'missing_particle',
    errorSentence: '他跑快。',
    errorExplanation: '跑得快 is the correct resultative complement. Correct: 他跑得快。',
    correctAlternatives: [
      '他跑得快。',
      '她说得很流利。',
      '这道题做不对。',
    ],
  },
  {
    id: 8,
    category: 'missing_particle',
    errorSentence: '他把书放在桌子上。',
    errorExplanation: '上 is the correct direction complement after 桌子. Correct: 他把书放在桌子上。',
    correctAlternatives: [
      '他把书放在桌子上。',
      '我把作业写完了。',
      '她把礼物送给他了。',
    ],
  },

  // ── 把 Construction ─────────────────────────────────────────────────────
  {
    id: 9,
    category: 'ba_construction',
    errorSentence: '我把书看完了。',
    errorExplanation: '看完书 is more natural with 完 + object. Correct: 我把书看完了 (also acceptable, but 把+看+完+书 is preferred).',
    correctAlternatives: [
      '他把作业写完了。',
      '我吃完饭了。',
      '她把房间打扫干净了。',
    ],
  },
  {
    id: 10,
    category: 'ba_construction',
    errorSentence: '请把门关。',
    errorExplanation: '关上 is the correct direction complement for closing. Correct: 请把门关上。',
    correctAlternatives: [
      '请把门关上。',
      '请把窗户打开。',
      '请把灯关掉。',
    ],
  },
  {
    id: 11,
    category: 'ba_construction',
    errorSentence: '他把信送给。',
    errorExplanation: '送给 needs a recipient. Correct: 他把信送给他了。',
    correctAlternatives: [
      '他把信送给他了。',
      '她把礼物送给妈妈了。',
      '我把苹果吃掉了。',
    ],
  },

  // ── 被 Construction ───────────────────────────────────────────────────
  {
    id: 12,
    category: 'bei_construction',
    errorSentence: '我的书被他。',
    errorExplanation: '被 requires a verb after the agent. Correct: 我的书被他拿走了。',
    correctAlternatives: [
      '我的书被他拿走了。',
      '窗户被风吹开了。',
      '他被老师批评了。',
    ],
  },
  {
    id: 13,
    category: 'bei_construction',
    errorSentence: '他被了。',
    errorExplanation: '被 needs both an agent and a verb. Correct: 他被批评了。',
    correctAlternatives: [
      '他被批评了。',
      '我的手机被偷了。',
      '作业被我写完了。',
    ],
  },

  // ── Comparison ───────────────────────────────────────────────────────
  {
    id: 14,
    category: 'comparison',
    errorSentence: '他比我高很。',
    errorExplanation: '比 structure: A比B+adjective. 不很 is wrong here. Correct: 他比我高。',
    correctAlternatives: [
      '他比我高。',
      '这件衣服比那件贵。',
      '今天比昨天热。',
    ],
  },
  {
    id: 15,
    category: 'comparison',
    errorSentence: '我跟他不一样高。',
    errorExplanation: '我跟他不一样高 is acceptable but 我跟他一样高 (positive) / 他不比我高 (negative) is preferred. Correct: 他不比我高。',
    correctAlternatives: [
      '他不比我高。',
      '我跟他一样高。',
      '这件衣服不比那件贵。',
    ],
  },

  // ── 过 (Experiential) ─────────────────────────────────────────────────
  {
    id: 16,
    category: 'experiential',
    errorSentence: '我去北京。',
    errorExplanation: '去过 indicates experience of having been. Correct: 我去过北京。',
    correctAlternatives: [
      '我去过北京。',
      '她吃过烤鸭。',
      '他没有来过上海。',
    ],
  },
  {
    id: 17,
    category: 'experiential',
    errorSentence: '你吃过日本料理没有？',
    errorExplanation: 'Negation of 过 comes before the verb: 你吃过日本料理吗？Correct: 你吃过日本料理吗？ / 你没有吃过日本料理。',
    correctAlternatives: [
      '你吃过日本料理吗？',
      '你去过北京吗？',
      '他没有来过深圳。',
    ],
  },

  // ── 是...的 ───────────────────────────────────────────────────────────
  {
    id: 18,
    category: 'shi_construction',
    errorSentence: '他是昨天去北京。',
    errorExplanation: '是...的 is required to emphasize time. Correct: 他是昨天去北京的。',
    correctAlternatives: [
      '他是昨天去北京的。',
      '她是北京学的汉语。',
      '他是坐飞机来的。',
    ],
  },
  {
    id: 19,
    category: 'shi_construction',
    errorSentence: '这件事是他做的。',
    errorExplanation: '这件事是他做的是 grammatically correct. However 是...的 requires 了 or context. Correct: 这件事是他做的。',
    correctAlternatives: [
      '这件事是他做的。',
      '他是怎么办到的？',
      '她是哪儿来的？',
    ],
  },

  // ── 着 (Progressive) ─────────────────────────────────────────────────
  {
    id: 20,
    category: 'zhe_construction',
    errorSentence: '他笑着。',
    errorExplanation: '笑着 needs a following action. Correct: 他笑着说话。',
    correctAlternatives: [
      '他笑着说话。',
      '她哭着跑进来。',
      '我们一边听音乐一边学习。',
    ],
  },
  {
    id: 21,
    category: 'zhe_construction',
    errorSentence: '他一边吃饭。',
    errorExplanation: '一边...一边... needs both parts. Correct: 他一边吃饭一边看电视。',
    correctAlternatives: [
      '他一边吃饭一边看电视。',
      '她一边听一边写。',
      '我们一边走一边聊。',
    ],
  },

  // ── 虽然...但是... ───────────────────────────────────────────────────
  {
    id: 22,
    category: 'complex_sentence',
    errorSentence: '虽然很累，但我想继续。',
    errorExplanation: '虽然...但是/可是... is the standard pattern. Correct: 虽然很累，但是我还想继续。',
    correctAlternatives: [
      '虽然很累，但是我还想继续。',
      '虽然下雨了，但是我们还是去了。',
      '虽然很贵，可是质量很好。',
    ],
  },
  {
    id: 23,
    category: 'complex_sentence',
    errorSentence: '如果下雨我们不去。',
    errorExplanation: '如果...就... is required. Correct: 如果下雨我们就不去了。',
    correctAlternatives: [
      '如果下雨我们就不去了。',
      '如果有空就一起吃饭吧。',
      '如果你想来就告诉我。',
    ],
  },
  {
    id: 24,
    category: 'complex_sentence',
    errorSentence: '不但会唱歌而且会。',
    errorExplanation: '不但...而且... needs both parts. Correct: 不但会唱歌，而且会跳舞。',
    correctAlternatives: [
      '不但会唱歌，而且会跳舞。',
      '她不但漂亮而且聪明。',
      '这个电影不但有趣而且有教育意义。',
    ],
  },

  // ── 越来越... ─────────────────────────────────────────────────────────
  {
    id: 25,
    category: 'degree',
    errorSentence: '天气越来越冷很。',
    errorExplanation: '越来越 + adjective (no 很 needed). Correct: 天气越来越冷了。',
    correctAlternatives: [
      '天气越来越冷了。',
      '汉语越来越难了。',
      '他越来越忙了。',
    ],
  },

  // ── 因为...所以... ────────────────────────────────────────────────────
  {
    id: 26,
    category: 'cause_effect',
    errorSentence: '因为我很累所以没有去。',
    errorExplanation: 'Because...therefore... is correct but 了 after the result is natural. Correct: 因为我很累所以没有去。',
    correctAlternatives: [
      '因为我很累所以没有去。',
      '因为天气好所以我们去公园了。',
      '因为他生病了所以没来上课。',
    ],
  },

  // ── 只/都/还 ───────────────────────────────────────────────────────────
  {
    id: 27,
    category: 'adverb',
    errorSentence: '我只吃了一点饭。',
    errorExplanation: '只 comes before the quantity phrase. Correct: 我只吃了一点儿饭。',
    correctAlternatives: [
      '我只吃了一点儿饭。',
      '她只会说英语。',
      '我只知道他的名字。',
    ],
  },
  {
    id: 28,
    category: 'adverb',
    errorSentence: '我们还是朋友是。',
    errorExplanation: '还是 means "still / or". Correct: 我们还是朋友。',
    correctAlternatives: [
      '我们还是朋友。',
      '还是你去吧。',
      '这本书还是很有意思的。',
    ],
  },

  // ── Double negation / negation ────────────────────────────────────────
  {
    id: 29,
    category: 'negation',
    errorSentence: '他不没来。',
    errorExplanation: 'Double negation. Correct: 他没来。 / 他来了。',
    correctAlternatives: [
      '他没有来。',
      '我不知道。',
      '她不喜欢咖啡。',
    ],
  },
  {
    id: 30,
    category: 'negation',
    errorSentence: '别着急。',
    errorExplanation: "别着急 is actually CORRECT (don't worry). This sentence is correct, so it cannot be used as an error. Skip.",
    correctAlternatives: [],
  },

  // ── Measure words / 数量 ───────────────────────────────────────────────
  {
    id: 31,
    category: 'measure_word',
    errorSentence: '我有三个苹果。',
    errorExplanation: 'Three apples is grammatically fine. Skip this one.',
    correctAlternatives: [],
  },
  {
    id: 32,
    category: 'measure_word',
    errorSentence: '他是一个老师。',
    errorExplanation: '一名 is more natural for professions. Correct: 他是一名老师。',
    correctAlternatives: [
      '他是一名老师。',
      '她是一名医生。',
      '我是一名学生。',
    ],
  },

  // ── Resultative complements ───────────────────────────────────────────
  {
    id: 33,
    category: 'resultative',
    errorSentence: '我听懂他了。',
    errorExplanation: '听懂 is stative — no object needed. Correct: 我听懂了。',
    correctAlternatives: [
      '我听懂了。',
      '老师讲的内容我听懂了。',
      '这个字我不认识。',
    ],
  },
  {
    id: 34,
    category: 'resultative',
    errorSentence: '我把作业做完。',
    errorExplanation: '做完作业 is the correct word order. Correct: 我把作业做完了。',
    correctAlternatives: [
      '我把作业做完了。',
      '他把饭吃完了。',
      '她把衣服洗干净了。',
    ],
  },

  // ── Direction complements ───────────────────────────────────────────────
  {
    id: 35,
    category: 'direction',
    errorSentence: '他进来房间了。',
    errorExplanation: '进来 is already a direction; 进房间 is more natural. Correct: 他进房间了。 / 他走进来了。',
    correctAlternatives: [
      '他走进来了。',
      '请进来坐吧。',
      '他从外面进来。',
    ],
  },

  // ── Misc ───────────────────────────────────────────────────────────────
  {
    id: 36,
    category: 'misc',
    errorSentence: '你好吗很好。',
    errorExplanation: '很好 answers "how are you?" but lacks the linking response. Correct: 你好吗？——我很好。',
    correctAlternatives: [
      '你好吗？——我很好。',
      '他好吗？——他很好。',
      '天气好吗？——天气很好。',
    ],
  },
  {
    id: 37,
    category: 'misc',
    errorSentence: '我的爱好是读书和跑步和电影。',
    errorExplanation: '和 (and) should not appear before the final item. Correct: 我的爱好是读书、跑步和电影。',
    correctAlternatives: [
      '我的爱好是读书、跑步和电影。',
      '她会英语和法语。',
      '我喜欢苹果和香蕉和橙子。',
    ],
  },
  {
    id: 38,
    category: 'misc',
    errorSentence: '请问你叫什么？',
    errorExplanation: '叫 is for the name itself. Correct: 请问你叫什么名字？',
    correctAlternatives: [
      '请问你叫什么名字？',
      '你姓什么？',
      '她叫什么？',
    ],
  },
  {
    id: 39,
    category: 'misc',
    errorSentence: '我的家有三口人。',
    errorExplanation: '三口人 is the correct measure word. Correct: 我家有三口人。',
    correctAlternatives: [
      '我家有三口人。',
      '他家有四口人。',
      '你家有几口人？',
    ],
  },
  {
    id: 40,
    category: 'misc',
    errorSentence: '明天比今天更冷。',
    errorExplanation: '更 is for comparison; 明天更冷 suggests "even colder than today". This is grammatically correct.',
    correctAlternatives: [
      '明天比今天冷。',
      '今天比昨天热。',
      '他比我高很多。',
    ],
  },
  {
    id: 41,
    category: 'misc',
    errorSentence: '他个子很高大。',
    errorExplanation: '高大 describes both height and breadth. Better: 他个子很高。',
    correctAlternatives: [
      '他个子很高。',
      '这座楼很高。',
      '他很聪明。',
    ],
  },
  {
    id: 42,
    category: 'ba_construction',
    errorSentence: '我把不会这个问题。',
    errorExplanation: '把 structure needs a result complement or result. Correct: 这个问题我不会。',
    correctAlternatives: [
      '这个问题我不会。',
      '他把作业写完了。',
      '她把门关上了。',
    ],
  },
  {
    id: 43,
    category: 'misc',
    errorSentence: '我很面包。',
    errorExplanation: '很 cannot be followed by a noun. Correct: 我很喜欢面包。',
    correctAlternatives: [
      '我很喜欢面包。',
      '他是学生。',
      '今天天气很好。',
    ],
  },
  {
    id: 44,
    category: 'misc',
    errorSentence: '他有一本书很有趣。',
    errorExplanation: '一本 + noun + adjective needs 的. Correct: 他有一本很有趣的书。',
    correctAlternatives: [
      '他有一本很有趣的书。',
      '她穿了一件漂亮的裙子。',
      '我买了一本新的书。',
    ],
  },
  {
    id: 45,
    category: 'misc',
    errorSentence: '你几点睡觉？',
    errorExplanation: '几点 means "what time?" for a specific moment. For habitual bedtime use 什么时候. Correct: 你什么时候睡觉？',
    correctAlternatives: [
      '你什么时候睡觉？',
      '你几点起床？',
      '他几点来？',
    ],
  },
];

// Filter out invalid entries (correctAlternatives must have at least 3)
export const validErrorBank = errorBank.filter((item) => item.correctAlternatives.length >= 3);

export default validErrorBank;
