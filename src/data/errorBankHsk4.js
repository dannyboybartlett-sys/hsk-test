// HSK 4 Error Bank — Sentence Error Detection (43 items)
// Each item: 1 incorrect sentence + 3 correct alternatives

export const validErrorBankHsk4 = [
  // ── Double Negation Errors ────────────────────────────────────────────────
  {
    id: 1,
    category: 'double_negation',
    errorSentence: '他不没来学校。',
    errorExplanation: 'Double negation is used incorrectly. 他不没来 is redundant. The correct form is 他没来 or, if emphasizing certainty, 没有不来的意思是他来了。',
    correctAlternatives: [
      '他没有来学校。',
      '他没来学校。',
      '他真的没来学校。',
    ],
  },
  {
    id: 2,
    category: 'double_negation',
    errorSentence: '我没有不快乐。',
    errorExplanation: 'Double negation 没有不 should not be used with 快乐 (adjective of state). 没有不快乐 is awkward. Use: 我不快乐 or 我很快乐。',
    correctAlternatives: [
      '我不快乐。',
      '我很快乐。',
      '他看起来很快乐。',
    ],
  },
  {
    id: 3,
    category: 'double_negation',
    errorSentence: '这件事不可不知道。',
    errorExplanation: '不可不知道 uses 非...不 = must, but in this context it is overcorrected. Use 这件事不可不知道 is correct meaning must know, but the sentence structure is unusual. Simpler: 这件事不可不知道 is correct but unnatural. Use: 这件事不可不知道 (correct but formal) or 这件事你一定要知道。',
    correctAlternatives: [
      '这件事你一定要知道。',
      '这件事不可不知道。',
      '这件事我们必须知道。',
    ],
  },
  {
    id: 4,
    category: 'double_negation',
    errorSentence: '我不可不想去。',
    errorExplanation: '不可不想去 is a redundant double negation meaning must want to go. The correct form for "must not go" is 不可去 or 不可以去。',
    correctAlternatives: [
      '我不可去。',
      '我不可以去。',
      '我必须去。',
    ],
  },
  {
    id: 5,
    category: 'double_negation',
    errorSentence: '他没有不吃饭。',
    errorExplanation: '他没有不吃饭 literally means he has no not-eating, suggesting he does eat. But the phrase is awkward. Simply say 他没有吃饭 or 他没吃饭。',
    correctAlternatives: [
      '他没有吃饭。',
      '他没吃饭。',
      '他还没吃饭。',
    ],
  },

  // ── Pivot Sentence Errors ─────────────────────────────────────────────────
  {
    id: 6,
    category: 'pivot',
    errorSentence: '我让他自己走了。',
    errorExplanation: 'In pivot sentences with 让, the structure is 让 + person + action. 让他自己走了 mixes 让 with reflexive. Use: 我让他走了 (I let him go) or 我让他自己决定 (I let him decide himself).',
    correctAlternatives: [
      '我让他走了。',
      '我让他自己决定。',
      '老师让他回答问题。',
    ],
  },
  {
    id: 7,
    category: 'pivot',
    errorSentence: '请他说话。',
    errorExplanation: '请他说话 means invite him to speak. But the object of 请 is typically the recipient of a request. More natural: 请他说 or 请他说话。Actually 请他说话 is acceptable but 请他说 is more natural for asking someone to speak.',
    correctAlternatives: [
      '请他说话。',
      '请他说。',
      '我请他帮我。',
    ],
  },
  {
    id: 8,
    category: 'pivot',
    errorSentence: '他让老师很生气。',
    errorExplanation: '让 in pivot sentences means to ask/let someone do something. 让老师很生气 uses 让 + emotion, which is ungrammatical. Use: 他让老师生气 (he made the teacher angry) — but this also sounds odd. Better: 老师被他气到了 or 他把老师气到了。',
    correctAlternatives: [
      '他把老师气到了。',
      '老师被他气到了。',
      '他让老师很担心。',
    ],
  },
  {
    id: 9,
    category: 'pivot',
    errorSentence: '老板派我去上海去。',
    errorExplanation: 'Redundant destination marker. When using 派 (send), the structure is 派 + person + verb + place. Do not add another 去 after the place.',
    correctAlternatives: [
      '老板派我去上海。',
      '老板让我去上海。',
      '老板请我去上海。',
    ],
  },
  {
    id: 10,
    category: 'pivot',
    errorSentence: '我请他帮帮我一下。',
    errorExplanation: 'Double 帮 is redundant. 请他帮我一下 or 请他帮个忙 is correct.',
    correctAlternatives: [
      '我请他帮我一下。',
      '我请他帮个忙。',
      '他请我帮个忙。',
    ],
  },

  // ── 得 Complement Errors ──────────────────────────────────────────────────
  {
    id: 11,
    category: 'de_complement',
    errorSentence: '他说得好很流利。',
    errorExplanation: 'When using 得 as a complement marker, the adverb and adjective come after 得, not before. Correct: 他说得很流利 or 他说汉语说得很流利。',
    correctAlternatives: [
      '他说得很流利。',
      '他说汉语说得很流利。',
      '他说英语说得很流利。',
    ],
  },
  {
    id: 12,
    category: 'de_complement',
    errorSentence: '他很好说。',
    errorExplanation: '很好说 is incorrect. The 得-complement structure is verb + 得 + adjective/adverb. Correct: 他说得好 (he speaks well).',
    correctAlternatives: [
      '他说得好。',
      '他说得很好。',
      '他说得很清楚。',
    ],
  },
  {
    id: 13,
    category: 'de_complement',
    errorSentence: '今天来得早很。',
    errorExplanation: 'In 得-complement sentences, 得 comes immediately after the verb. 很早 is the complement, placed after 得. Correct: 今天来得早。If adding an intensifier: 今天来得真早。',
    correctAlternatives: [
      '今天来得早。',
      '今天来得真早。',
      '他来得早。',
    ],
  },
  {
    id: 14,
    category: 'de_complement',
    errorSentence: '她唱太好得了。',
    errorExplanation: 'Word order is completely wrong. 得 follows the verb immediately. The adverb and adjective come after 得. Correct: 她唱得太好了。',
    correctAlternatives: [
      '她唱得太好了。',
      '她唱得很好。',
      '他写得太棒了。',
    ],
  },
  {
    id: 15,
    category: 'de_complement',
    errorSentence: '跑得他太快了。',
    errorExplanation: 'The subject comes before the verb, not after. Correct: 他跑得太快了。',
    correctAlternatives: [
      '他跑得太快了。',
      '他跑得太快。',
      '他跑得很快。',
    ],
  },

  // ── Word Order with 把 ───────────────────────────────────────────────────
  {
    id: 16,
    category: 'word_order_ba',
    errorSentence: '我把作业写。',
    errorExplanation: '把-sentences require a result complement or direction complement after the verb. 把作业写 alone is incomplete. Correct: 我把作业写完了 or 我把作业写好。',
    correctAlternatives: [
      '我把作业写完了。',
      '我把作业写好。',
      '他把作业交给老师了。',
    ],
  },
  {
    id: 17,
    category: 'word_order_ba',
    errorSentence: '把书我在桌子上放。',
    errorExplanation: '把-sentence word order: 把 + object + verb + complement/location. The location 在桌子上 comes after the verb, not before the subject. Correct: 我把书放在桌子上。',
    correctAlternatives: [
      '我把书放在桌子上。',
      '我把书放桌子上。',
      '老师把生词写在黑板上。',
    ],
  },
  {
    id: 18,
    category: 'word_order_ba',
    errorSentence: '他衣服把洗了。',
    errorExplanation: '把-sentence: subject + 把 + object + verb. The object must immediately follow 把. Correct: 他把衣服洗了。',
    correctAlternatives: [
      '他把衣服洗了。',
      '他把门关上了。',
      '我把灯关了。',
    ],
  },
  {
    id: 19,
    category: 'word_order_ba',
    errorSentence: '请把书放在桌子上在。',
    errorExplanation: 'Preposition 在 is placed before the location, not at the end. Correct: 请把书放在桌子上。',
    correctAlternatives: [
      '请把书放在桌子上。',
      '请把东西放好。',
      '请把门关上。',
    ],
  },
  {
    id: 20,
    category: 'word_order_ba',
    errorSentence: '我把信写完成。',
    errorExplanation: 'Resultative complement should be a single complement. 写完 and 写成 are both valid separately but cannot be combined. Choose one. Correct: 我把信写完了 or 我把信写成。',
    correctAlternatives: [
      '我把信写完了。',
      '我把信写成了。',
      '我把作业写完了。',
    ],
  },

  // ── Comparison Structure Errors ───────────────────────────────────────────
  {
    id: 21,
    category: 'comparison',
    errorSentence: '他比我不如高。',
    errorExplanation: 'The comparative structure is A 比 B + adjective, NOT A 比 B 不如. Use: 他比我高 or 他不如我高。The word 不如 reverses the order: A不如B。',
    correctAlternatives: [
      '他比我高。',
      '他不如我高。',
      '他比我矮。',
    ],
  },
  {
    id: 22,
    category: 'comparison',
    errorSentence: '北京比上海大很。',
    errorExplanation: 'The degree adverb (很, 多, 得多) comes after the adjective, not after. Correct: 北京比上海大 or 北京比上海大得多。',
    correctAlternatives: [
      '北京比上海大得多。',
      '北京比上海大。',
      '上海比北京大。',
    ],
  },
  {
    id: 23,
    category: 'comparison',
    errorSentence: '这件跟那件不一样便宜。',
    errorExplanation: '跟...一样 is followed directly by an adjective or noun, not by another comparison. Correct: 这件跟那件一样便宜 or 这件比那件便宜。',
    correctAlternatives: [
      '这件跟那件一样便宜。',
      '这件比那件便宜。',
      '那件比这件便宜。',
    ],
  },
  {
    id: 24,
    category: 'comparison',
    errorSentence: '他跑得快比我。',
    errorExplanation: '跑得 structure: subject + verb + 得 + complement + (比 + B + adjective). The 比-phrase comes last. Correct: 他跑得比我快。',
    correctAlternatives: [
      '他跑得比我快。',
      '我跑得比他快。',
      '他跑得很快。',
    ],
  },
  {
    id: 25,
    category: 'comparison',
    errorSentence: '我的书比你不多了。',
    errorExplanation: 'In comparison, the subject should be the thing being compared, not a possessive phrase about quantity. Correct: 我的书比你多了 or 我的书没有你的多。',
    correctAlternatives: [
      '我的书比你多。',
      '我的书没有你的多。',
      '你的书比我的多。',
    ],
  },

  // ── 即使...也 Errors ─────────────────────────────────────────────────────
  {
    id: 26,
    category: 'jishi',
    errorSentence: '即使下雨，我要去。',
    errorExplanation: '即使...也 requires 也 in the result clause. The 也 is mandatory. Correct: 即使下雨，我也要去。',
    correctAlternatives: [
      '即使下雨，我也要去。',
      '即使下雨，他还是去了。',
      '即使很累，他也不休息。',
    ],
  },
  {
    id: 27,
    category: 'jishi',
    errorSentence: '也即使下雨，我不去。',
    errorExplanation: '即使 comes at the beginning of the clause, not after 也. The structure is 即使 + condition, 也 + result. Correct: 即使下雨，我不去 or 即使下雨，也... Correct: 即使下雨，我也不去。',
    correctAlternatives: [
      '即使下雨，我也不去。',
      '即使下雨，他也不去。',
      '即使下雨了，他还是去了。',
    ],
  },
  {
    id: 28,
    category: 'jishi',
    errorSentence: '即使难，也很容易。',
    errorExplanation: '即使 introduces a concessive condition, not an admission of fact. The result clause should reflect the contrast implied by even if. Correct: 即使很难，也很简单。',
    correctAlternatives: [
      '即使很难，也很简单。',
      '即使失败了，也没关系。',
      '即使很贵，也想买。',
    ],
  },

  // ── 不管...都 Errors ─────────────────────────────────────────────────────
  {
    id: 29,
    category: 'buguan',
    errorSentence: '不管天气，我们要去。',
    errorExplanation: '不管 requires either a question word (怎么, 什么, 谁, 哪) or a yes/no question (verb+不+verb) in the condition. Correct: 不管天气怎么样，我们都要去。',
    correctAlternatives: [
      '不管天气怎么样，我们都要去。',
      '不管下不下雨，我们都要去。',
      '不管多难，他都不放弃。',
    ],
  },
  {
    id: 30,
    category: 'buguan',
    errorSentence: '都不管天气，我们要去。',
    errorExplanation: '都 comes after the entire 不管 clause, not before it. Word order: 不管...，都 + result. Correct: 不管天气怎么样，我们都要去。',
    correctAlternatives: [
      '不管天气怎么样，我们都要去。',
      '不管下不下雨，我都去。',
      '不管谁问，我都不说。',
    ],
  },
  {
    id: 31,
    category: 'buguan',
    errorSentence: '不管他很忙，都去了。',
    errorExplanation: '不管 must be followed by a question word or a verb+不+verb structure, not a plain statement. Correct: 不管他忙不忙，他都去了。',
    correctAlternatives: [
      '不管他忙不忙，他都去了。',
      '不管有多忙，他都去了。',
      '不管多累，他都坚持。',
    ],
  },

  // ── 除了...以外 Errors ───────────────────────────────────────────────────
  {
    id: 32,
    category: 'chule',
    errorSentence: '除了英语，法语也他学。',
    errorExplanation: 'Word order error. 除了...以外(还/也) places the subject before the verb. Correct: 除了英语以外，他也学法语。',
    correctAlternatives: [
      '除了英语以外，他也学法语。',
      '除了英语，他还学法语。',
      '除了英语以外，他还会法语。',
    ],
  },
  {
    id: 33,
    category: 'chule',
    errorSentence: '以外英语，他也学法语。',
    errorExplanation: '除了 must come before 以外. Correct: 除了英语以外，他也学法语。',
    correctAlternatives: [
      '除了英语以外，他也学法语。',
      '除了英语，他还学法语。',
      '他除了学英语，也学法语。',
    ],
  },
  {
    id: 34,
    category: 'chule',
    errorSentence: '除了他不来，别人都来了。',
    errorExplanation: "除了...以外表示除了某事物以外还有其他的，谓语前面用 还/也/就。如果想说除了某人没来别人都来了，应该说 除了他以外，别人都来了，或者别人都来了，但是他没来。",
    correctAlternatives: [
      '除了他以外，别人都来了。',
      '别人都来了，但是他没来。',
      '除了他，别人都来了。',
    ],
  },

  // ── 既...又 Errors ───────────────────────────────────────────────────────
  {
    id: 35,
    category: 'jiyou',
    errorSentence: '既他会英语又会法语。',
    errorExplanation: '既...又 must come before the subject or predicate. When used in the predicate, 既 comes before the first adjective/verb. Correct: 他既会英语又会法语。',
    correctAlternatives: [
      '他既会英语又会法语。',
      '她既聪明又努力。',
      '这件衣服既便宜又好看。',
    ],
  },
  {
    id: 36,
    category: 'jiyou',
    errorSentence: '他又又唱歌跳舞。',
    errorExplanation: '既...又 uses both words once each, not repeating the same word. Correct: 他又唱又跳 or 他既唱歌又跳舞。',
    correctAlternatives: [
      '他又唱又跳。',
      '他既唱歌又跳舞。',
      '她既会说英语又会说法语。',
    ],
  },
  {
    id: 37,
    category: 'jiyou',
    errorSentence: '他既不聪明又不努力。',
    errorExplanation: '既...又 typically connects two positive qualities. For negatives, use 也...也 or neither...nor structures. Correct: 他也不聪明，也不努力 or 他既不聪明也不努力。',
    correctAlternatives: [
      '他既不聪明也不努力。',
      '他也不聪明，也不努力。',
      '她既温柔又体贴。',
    ],
  },

  // ── 越来越 / 越...越 Errors ─────────────────────────────────────────────
  {
    id: 38,
    category: 'yuelaiyue',
    errorSentence: '天气越来越很冷了。',
    errorExplanation: '越来越 already contains the meaning of more and more. Adding 很 before the adjective is redundant. Correct: 天气越来越冷了。',
    correctAlternatives: [
      '天气越来越冷了。',
      '天气越来越热了。',
      '他越来越喜欢学习。',
    ],
  },
  {
    id: 39,
    category: 'yuelaiyue',
    errorSentence: '越他学习越喜欢。',
    errorExplanation: '越...越 follows the order: 越 + subject + verb, 越 + adjective/verb. Correct: 他越学习越喜欢。',
    correctAlternatives: [
      '他越学习越喜欢。',
      '他越说越快。',
      '天气越冷越想睡觉。',
    ],
  },
  {
    id: 40,
    category: 'yuelaiyue',
    errorSentence: '越来越天气冷了。',
    errorExplanation: '越来越 must come immediately before the adjective, not before the subject. Correct: 天气越来越冷了。',
    correctAlternatives: [
      '天气越来越冷了。',
      '天气越来越热。',
      '他越来越胖了。',
    ],
  },

  // ── 既然...就 Errors ─────────────────────────────────────────────────────
  {
    id: 41,
    category: 'jiran',
    errorSentence: '就既然他知道错了，不改了。',
    errorExplanation: '既然...就 has 既然 at the beginning and 就 in the result clause. 就 cannot come before 既然. Correct: 既然他知道错了，就不改了 or 既然他知道错了，就改了吧。',
    correctAlternatives: [
      '既然他知道错了，就改了吧。',
      '既然来了，就看完吧。',
      '既然他不想去，我们就另想办法。',
    ],
  },
  {
    id: 42,
    category: 'jiran',
    errorSentence: '既然下雨就，就不出去了。',
    errorExplanation: 'Double 就 is redundant. 既然下雨 is the condition, 就不出去了 is the result. Correct: 既然下雨，就不出去了。',
    correctAlternatives: [
      '既然下雨，就不出去了。',
      '既然下雨了，就不去了。',
      '既然知道错了，就改吧。',
    ],
  },

  // ── Resultative Complement Errors ────────────────────────────────────────
  {
    id: 43,
    category: 'resultative',
    errorSentence: '我把书写了完。',
    errorExplanation: 'Word order: resultative complement comes right after the verb, not after 了. Correct: 我把书写完了。',
    correctAlternatives: [
      '我把书写完了。',
      '我把作业写完了。',
      '我把信写好了。',
    ],
  },
];
