# HSK 3 Online Test Platform — Project Specification

## 1. Concept & Vision

A focused, no-nonsense HSK 3 Chinese proficiency testing platform that feels like a real study tool — clean, purposeful, and confidence-inspiring. The aesthetic is inspired by high-quality educational apps (Duolingo meets Notion): calm background tones, clear Chinese typography with proper character display, and gamified micro-feedback. Users should feel they're preparing for something real and official, not playing a casual game.

**Goal:** Users arrive, take a structured HSK 3 test, receive an immediate pass/fail verdict, and understand exactly which areas they need to work on.

---

## 2. HSK 3 Curriculum Reference

> This document is the single source of truth for all vocabulary and grammar content in the platform.

### 2.1 Vocabulary Scope

**Standard:** Old HSK 3.0 (most widely documented, 600 total / 300 new words)  
**New HSK 3.0 (2021):** Band 3 has 973 words — support as an upgrade path for HSK 4 planning.

#### HSK 3 Only — New Words (300 words)

These are the words introduced at Level 3. Users are expected to know all HSK 1 + HSK 2 words as prerequisites.

| # | Chinese | Pinyin | Part of Speech | English |
|---|---------|--------|----------------|---------|
| 1 | 矮 | āi | adj | short (height) |
| 2 | 爱好 | àihào | n | hobby |
| 3 | 安静 | ānjìng | adj | quiet |
| 4 | 把 | bǎ | prep | (object marker) |
| 5 | 班 | bān | n | class |
| 6 | 半 | bàn | num | half |
| 7 | 帮忙 | bāngmáng | v | to help |
| 8 | 包 | bāo | n/v | bag; to wrap |
| 9 | 饱 | bǎo | adj | full (after eating) |
| 10 | 被 | bèi | prep | passive marker |
| 11 | 比较 | bǐjiào | adv | relatively, comparatively |
| 12 | 比赛 | bǐsài | n/v | competition; to compete |
| 13 | 必须 | bìxū | adv | must |
| 14 | 变化 | biànhuà | n/v | change |
| 15 | 表示 | biǎoshì | v | to express, to show |
| 16 | 表演 | biǎoyǎn | v | to perform |
| 17 | 别 | bié | adv | don't; other |
| 18 | 宾馆 | bīnguǎn | n | hotel |
| 19 | 冰箱 | bīngxiāng | n | refrigerator |
| 20 | 不但 | bùdàn | conj | not only |
| 21 | 不管 | bùguǎn | conj | no matter |
| 22 | 草 | cǎo | n | grass |
| 23 | 层 | céng | m.w. | floor, layer |
| 24 | 差 | chà | adj | poor, bad |
| 25 | 超市 | chāoshì | n | supermarket |
| 26 | 成绩 | chéngjì | n | grades, results |
| 27 | 城市 | chéngshì | n | city |
| 28 | 出发 | chūfā | v | to set off |
| 29 | 出租车 | chūzūchē | n | taxi |
| 30 | 除了 | chúle | prep | except |
| 31 | 楚 | chǔ | adj | clear |
| 32 | 船 | chuán | n | boat, ship |
| 33 | 春 | chūn | n | spring (season) |
| 34 | 词 | cí | n | word |
| 35 | 聪明 | cōngming | adj | smart, intelligent |
| 36 | 错 | cuò | adj | wrong |
| 37 | 打的 | dǎdī | v | to take a taxi |
| 38 | 打工 | dǎgōng | v | to work (part-time) |
| 39 | 大概 | dàgài | adv | probably, about |
| 40 | 大使馆 | dàshǐguǎn | n | embassy |
| 41 | 带 | dài | v | to bring, to wear |
| 42 | 代替 | dàitì | v | to replace |
| 43 | 贷款 | dàikuǎn | n | loan |
| 44 | 单 | dān | n | bill, form |
| 45 | 灯 | dēng | n | lamp |
| 46 | 等 | děng | v | to wait |
| 47 | 低 | dī | adj | low |
| 48 | 底 | dǐ | n | bottom, end |
| 49 | 地址 | dìzhǐ | n | address |
| 50 | 掉 | diào | v | to fall, to drop |
| 51 | 丢 | diū | v | to lose, to throw away |
| 52 | 动物 | dòngwù | n | animal |
| 53 | 读 | dú | v | to read |
| 54 | 短 | duǎn | adj | short (length/time) |
| 55 | 段 | duàn | n/m.w. | paragraph, section |
| 56 | 对 | duì | prep | to, towards |
| 57 | 对话 | duìhuà | n/v | dialogue |
| 58 | 顿 | dùn | m.w. | (meal, beating) |
| 59 | 多年 | duōnián | n | many years |
| 60 | 饿 | è | adj | hungry |
| 61 | 耳朵 | ěrduo | n | ear |
| 62 | 发 | fā | v | to send, to emit |
| 63 | 发烧 | fāshāo | v | to have a fever |
| 64 | 发展 | fāzhǎn | v/n | to develop, development |
| 65 | 法律 | fǎlǜ | n | law |
| 66 | 翻译 | fānyì | v/n | to translate, translation |
| 67 | 烦恼 | fánnǎo | adj | worried |
| 68 | 反对 | fǎnduì | v | to oppose |
| 69 | 反应 | fǎnyìng | n/v | reaction, to react |
| 70 | 返回 | fǎnhuí | v | to return |
| 71 | 范围 | fànwéi | n | range, scope |
| 72 | 方法 | fāngfǎ | n | method |
| 73 | 方向 | fāngxiàng | n | direction |
| 74 | 房间 | fángjiān | n | room |
| 75 | 访问 | fǎngwèn | v | to visit |
| 76 | 放 | fàng | v | to put, to release |
| 77 | 放假 | fàngjià | v | to have a holiday |
| 78 | 放松 | fàngsōng | v | to relax |
| 79 | 非常 | fēicháng | adv | very, extremely |
| 80 | 飞机 | fēijī | n | airplane |
| 81 | 份 | fèn | m.w. | portion,一份 |
| 82 | 丰富 | fēngfù | adj | rich, abundant |
| 83 | 风景 | fēngjǐng | n | scenery |
| 84 | 服务 | fúwù | v/n | to serve, service |
| 85 | 符合 | fúhé | v | to match, to conform |
| 86 | 父母 | fùmǔ | n | parents |
| 87 | 复习 | fùxí | v | to review |
| 88 | 复杂 | fùzá | adj | complex |
| 89 | 干净 | gānjìng | adj | clean |
| 90 | 感觉 | gǎnjué | v/n | to feel, feeling |
| 91 | 感情 | gǎnqíng | n | emotion, feeling |
| 92 | 刚 | gāng | adv | just now |
| 93 | 高速公路 | gāosù gōnglù | n | highway |
| 94 | 告诉 | gàosu | v | to tell |
| 95 | 胳膊 | gēbo | n | arm |
| 96 | 歌 | gē | n | song |
| 97 | 个子 | gèzi | n | height, stature |
| 98 | 跟 | gēn | prep/conj | with, and |
| 99 | 更换 | gēnghuàn | v | to replace |
| 100 | 工厂 | gōngchǎng | n | factory |
| 101 | 工具 | gōngjù | n | tool |
| 102 | 工资 | gōngzī | n | wages, salary |
| 103 | 公共汽车 | gōnggòng qìchē | n | bus |
| 104 | 公园 | gōngyuán | n | park |
| 105 | 共同 | gòngtóng | adj | common, joint |
| 106 | 狗 | gǒu | n | dog |
| 107 | 够 | gòu | adj/v | enough, to reach |
| 108 | 估计 | gūjì | v | to estimate |
| 109 | 鼓励 | gǔlì | v | to encourage |
| 110 | 故意 | gùyì | adv | intentionally |
| 111 | 故事 | gùshi | n | story |
| 112 | 刮风 | guāfēng | v | to be windy |
| 113 | 挂 | guà | v | to hang |
| 114 | 关 | guān | v | to close |
| 115 | 关系 | guānxi | n | relation, relationship |
| 116 | 关注 | guānzhù | v | to follow, to pay attention |
| 117 | 观察 | guānchá | v | to observe |
| 118 | 管理 | guǎnlǐ | v/n | to manage, management |
| 119 | 光 | guāng | n | light |
| 120 | 广 | guǎng | adj | wide, broad |
| 121 | 规定 | guīdìng | n/v | regulation, to rule |
| 122 | 贵 | guì | adj | expensive, your (honorific) |
| 123 | 国籍 | guójí | n | nationality |
| 124 | 国际 | guójì | n/adj | international |
| 125 | 果汁 | guǒzhī | n | fruit juice |
| 126 | 过程 | guòchéng | n | process |
| 127 | 海洋 | hǎiyáng | n | ocean |
| 128 | 害羞 | hàixiū | adj | shy |
| 129 | 害怕 | hàipà | v | to be afraid |
| 130 | 行业 | hángyè | n | industry |
| 131 | 好处 | hǎochù | n | benefit, advantage |
| 132 | 好吃 | hǎochī | adj | delicious |
| 133 | 河 | hé | n | river |
| 134 | 黑 | hēi | adj | black |
| 135 | 红 | hóng | adj | red |
| 136 | 猴子 | hóuzi | n | monkey |
| 137 | 后 | hòu | n/adv | behind, after |
| 138 | 后悔 | hòuhuǐ | v | to regret |
| 139 | 呼 | hū | v | to call, to breathe |
| 140 | 互联网 | hùliánwǎng | n | internet |
| 141 | 护士 | hùshi | n | nurse |
| 142 | 护照 | hùzhào | n | passport |
| 143 | 花 | huā | n/v | flower; to spend |
| 144 | 花园 | huāyuán | n | garden |
| 145 | 滑 | huá | v/adj | to slip, slippery |
| 146 | 话题 | huàtí | n | topic |
| 147 | 环境 | huánjìng | n | environment |
| 148 | 换 | huàn | v | to exchange, to change |
| 149 | 黄河 | Huánghé | n | Yellow River |
| 150 | 皇帝 | huángdì | n | emperor |
| 151 | 会议 | huìyì | n | meeting, conference |
| 152 | 会议 | huìyì | n | conference |
| 153 | 浑身 | húnshēn | n | whole body |
| 154 | 活跃 | huóyuè | adj | active |
| 155 | 火 | huǒ | n | fire |
| 156 | 获得 | huòdé | v | to obtain, to gain |
| 157 | 机场 | jīchǎng | n | airport |
| 158 | 机会 | jīhuì | n | opportunity |
| 159 | 鸡 | jī | n | chicken |
| 160 | 极其 | jíqí | adv | extremely |
| 161 | 计划 | jìhuà | n/v | plan; to plan |
| 162 | 记录 | jìlù | v/n | to record, record |
| 163 | 记忆 | jìyì | v/n | to remember, memory |
| 164 | 技术 | jìshù | n | technology, technique |
| 165 | 系领带 | jì lǐngdài | v | to tie a tie |
| 166 | 继续 | jìxù | v | to continue |
| 167 | 寂寞 | jìmò | adj | lonely |
| 168 | 家庭 | jiātíng | n | family |
| 169 | 假 | jiǎ | adj | fake, holiday |
| 170 | 价值 | jiàzhí | n | value |
| 171 | 肩膀 | jiānbǎng | n | shoulder |
| 172 | 艰难 | jiānnán | adj | difficult |
| 173 | 简单 | jiǎndān | adj | simple |
| 174 | 健身 | jiànshēn | v | to work out |
| 175 | 键盘 | jiànpán | n | keyboard |
| 176 | 健康 | jiànkāng | n/adj | health, healthy |
| 177 | 键盘 | jiànpán | n | keyboard |
| 178 | 交流 | jiāoliú | v/n | to exchange, exchange |
| 179 | 交通 | jiāotōng | n | traffic, transportation |
| 180 | 骄傲 | jiāo'ào | adj | proud |
| 181 | 脚 | jiǎo | n | foot |
| 182 | 教训 | jiàoxùn | n/v | lesson; to lecture |
| 183 | 阶段 | jiēduàn | n | stage, phase |
| 184 | 街 | jiē | n | street |
| 185 | 节日 | jiérì | n | holiday, festival |
| 186 | 睫毛 | jiémáo | n | eyelash |
| 187 | 解决 | jiějué | v | to solve |
| 188 | 介绍 | jièshào | v | to introduce |
| 189 | 尽 | jǐn | adv | as much as possible |
| 190 | 紧张 | jǐnzhāng | adj | nervous, tense |
| 191 | 近代 | jìndài | n | modern times |
| 192 | 近视 | jìnshì | adj | nearsighted |
| 193 | 精力 | jīnglì | n | energy |
| 194 | 经验 | jīngyàn | n | experience |
| 195 | 经营 | jīngyíng | v | to operate, to manage |
| 196 | 精彩 | jīngcǎi | adj | wonderful, brilliant |
| 197 | 井 | jǐng | n | well |
| 198 | 警察 | jǐngchá | n | police |
| 199 | 竟然 | jìngrán | adv | unexpectedly |
| 200 | 竞争 | jìngzhēng | v/n | to compete, competition |
| 201 | 镜子 | jìngzi | n | mirror |
| 202 | 究竟 | jiūjìng | adv | actually, on earth |
| 203 | 举行 | jǔxíng | v | to hold (an event) |
| 204 | 拒绝 | jùjué | v | to refuse |
| 205 | 巨大 | jùdà | adj | huge |
| 206 | 具备 | jùbèi | v | to possess, to have |
| 207 | 距离 | jùlí | n/prep | distance; away from |
| 208 | 聚会 | jùhuì | n | party, gathering |
| 209 | 觉得 | juéde | v | to think, to feel |
| 210 | 决定 | juédìng | v/n | to decide, decision |
| 211 | 绝对 | juéduì | adv | absolutely |
| 212 | 军事 | jūnshì | adj | military |
| 213 | 咖啡 | kāfēi | n | coffee |
| 214 | 开 | kāi | v | to open, to start |
| 215 | 开心 | kāixīn | adj | happy |
| 216 | 看不起 | kànbuqǐ | v | to look down on |
| 217 | 看病 | kànbìng | v | to see a doctor |
| 218 | 看作 | kànzuò | v | to regard as |
| 219 | 烤鸭 | kǎoyā | n | roast duck |
| 220 | 考试 | kǎoshì | n/v | exam, to take an exam |
| 221 | 靠 | kào | prep/v | near, to rely on |
| 222 | 科技 | kējì | n | science and technology |
| 223 | 可见 | kějiàn | v | visible, can see |
| 224 | 颗粒无收 | kēlì wúshōu | idiom | harvest nothing |
| 225 | 肯定 | kěndìng | v/adj | to confirm, certain |
| 226 | 空调 | kōngtiáo | n | air conditioner |
| 227 | 空气 | kōngqì | n | air |
| 228 | 恐怕 | kǒngpà | adv | I'm afraid |
| 229 | 苦 | kǔ | adj | bitter |
| 230 | 裤子 | kùzi | n | pants |
| 231 | 夸 | kuā | v | to praise |
| 232 | 跨 | kuà | v | to step across |
| 233 | 会计 | kuàijì | n | accountant |
| 234 | 筷子 | kuàizi | n | chopsticks |
| 235 | 宽 | kuān | adj | wide |
| 236 | 困 | kùn | adj | sleepy |
| 237 | 困难 | kùnnan | n/adj | difficulty, difficult |
| 238 | 垃圾桶 | lājītǒng | n | trash can |
| 239 | 拉 | lā | v | to pull, to drag |
| 240 | 来不及 | láibují | v | too late to |
| 241 | 来得及 | láidejí | v | still have time to |
| 242 | 蓝 | lán | adj | blue |
| 243 | 懒 | lǎn | adj | lazy |
| 244 | 浪费 | làngfèi | v | to waste |
| 245 | 老虎 | lǎohǔ | n | tiger |
| 246 | 老师 | lǎoshī | n | teacher |
| 247 | 乐 | lè | n/adj | music; happy |
| 248 | 累 | lèi | adj | tired |
| 249 | 冷静 | lěngjìng | adj | calm |
| 250 | 离 | lí | prep | away from |
| 251 | 离婚 | líhūn | v | to divorce |
| 252 | 理解 | lǐjiě | v | to understand |
| 253 | 理想 | lǐxiǎng | n/adj | ideal |
| 254 | 力气 | lìqi | n | strength |
| 255 | 里面 | lǐmiàn | n | inside |
| 256 | 理发 | lǐfà | v | to get a haircut |
| 257 | 力量 | lìliàng | n | power, strength |
| 258 | 历史 | lìshǐ | n | history |
| 259 | 联系 | liánxì | v/n | to contact, contact |
| 260 | 脸 | liǎn | n | face |
| 261 | 量 | liàng | v/n | to measure, amount |
| 262 | 邻居 | línjū | n | neighbor |
| 263 | 零件 | língjiàn | n | part (machine) |
| 264 | 零钱 | língqián | n | change (money) |
| 265 | 留 | liú | v | to stay, to leave behind |
| 266 | 流利 | liúlì | adj | fluent |
| 267 | 旅行 | lǚxíng | v/n | to travel, trip |
| 268 | 绿 | lǜ | adj | green |
| 269 | 律师 | lǜshī | n | lawyer |
| 270 | 麻 | má | adj | numb |
| 271 | 麻烦 | máfan | adj/n/v | troublesome; trouble; to trouble |
| 272 | 码头 | mǎtou | n | dock |
| 273 | 蚂蚁 | mǎyǐ | n | ant |
| 274 | 卖 | mài | v | to sell |
| 275 | 满 | mǎn | adj | full |
| 276 | 毛 | máo | n | hair, feather |
| 277 | 毛巾 | máojīn | n | towel |
| 278 | 矛盾 | máodùn | adj/n | contradictory; conflict |
| 279 | 冒险 | màoxiǎn | v | to take a risk |
| 280 | 玫瑰 | méigui | n | rose |
| 281 | 眉毛 | méimao | n | eyebrow |
| 282 | 没关系 | méi guānxi | phrase | it doesn't matter |
| 283 | 媒体 | méitǐ | n | media |
| 284 | 迷路 | mílù | v | to get lost |
| 285 | 密切 | mìqiè | adj | close |
| 286 | 免得 | miǎnde | conj | so as to avoid |
| 287 | 面对 | miànduì | v | to face |
| 288 | 面积 | miànjī | n | area |
| 289 | 面子 | miànzi | n | face (reputation) |
| 290 | 描述 | miáoshù | v | to describe |
| 291 | 民族 | mínzú | n | nation, ethnic group |
| 292 | 母亲 | mǔqīn | n | mother |
| 293 | 目的 | mùdì | n | purpose |
| 294 | 那么 | nàme | adv | so, then |
| 295 | 那些 | nàxiē | pron | those |
| 296 | 奶 | nǎi | n | milk |
| 297 | 奶奶 | nǎinai | n | grandmother |
| 298 | 男孩子 | nánháizi | n | boy |
| 299 | 难得 | nándé | adj | rare |
| 300 | 难受 | nánshòu | adj | feeling bad, uncomfortable |

---

### 2.2 Grammar Structures (HSK 3)

#### A. Resultative Complements (结果补语)
The main verb is followed by another verb or adjective showing the result.

| Pattern | Example | Meaning |
|---------|---------|---------|
| V + 好 | 写好 | to write well / finish writing |
| V + 完 | 吃完 | to eat up / finish eating |
| V + 到 | 看到 | to see |
| V + 见 | 看见 | to catch sight of |
| V + 懂 | 听懂 | to understand (by listening) |
| V + 错 | 做错 | to do wrong |
| V + 掉 | 吃掉 | to eat up / eat away |
| V + 走 | 拿走 | to take away |

#### B. Direction Complements (方向补语)
| Pattern | Example | Meaning |
|---------|---------|---------|
| V + 上来 | 走上来 | to walk up |
| V + 下来 | 坐下来 | to sit down |
| V + 进来 | 走进来 | to walk in |
| V + 出来 | 跑出来 | to run out |
| V + 回来 | 回来 | to come back |
| V + 过去 | 走过去 | to walk over |

#### C. The "把" Construction (把字句)
Emphasizes what the subject does to the object.

| Pattern | Example |
|---------|---------|
| 主+把+宾+动+在/到+处所 | 我把书放在桌子上 |
| 主+把+宾+动+结果补语 | 我把作业写完了 |
| 主+把+宾+动+给+宾₂ | 我把礼物送给他 |

#### D. The Passive (被字句)
| Pattern | Example |
|---------|---------|
| 主+被+宾+动+其他 | 我的书被他拿走了 |
| 主+被+动+其他 | 书被拿走了 |

#### E. Progressive with 着 (着)
Expresses simultaneous actions or states.
> 主+动₁+着+动₂ 他笑着说话。 (He spoke while smiling.)

#### F. Experiential 过 (过)
Expresses past experience.
> 我去过北京。 (I have been to Beijing.)

#### G. Comparison (比较句)
| Pattern | Example |
|---------|---------|
| A比B+更/还+形容词 | 他比我更高 |
| A跟B一样(+形容词) | 我跟他一样高 |
| A不比B+形容词 | 他不比我高 |
| A比B+多/少/早/晚+动+数量 | 他比我早来一个小时 |

#### H. 是...的 (Emphasis Sentence)
Emphasizes time, manner, or location.
> 他是**昨天**来的。 (It was **yesterday** that he came.)
> 这件事是**他**做的。 (It was **him** who did this.)

#### I. Complex Sentences — All 9 Types (复句)

**1. Sequential (承接)**
> Pattern: 先…然后/再/就…  
> Example: 先洗手,然后吃饭。

**2. Choice (选择)**
> Pattern: 或者…或者… / 要么…要么…  
> Example: 或者你来,或者我去。

**3. Coordinate (并列)**
> Pattern: 一会儿…一会儿… / 又…又… / 一边…一边…  
> Example: 他一边吃饭,一边看电视。

**4. Progressive (递进)**
> Pattern: 不但…而且…  
> Example: 他不但会唱歌,而且会跳舞。

**5. Concessive (转折)**
> Pattern: 虽然…但是/可是…  
> Example: 虽然下雨了,可是我还要去。

**6. Hypothetical (假设)**
> Pattern: 如果…就… / …的话…  
> Example: 如果下雨,我们就不去。

**7. Conditional (条件)**
> Pattern: 只有…才… / 只要…就…  
> Example: 只有努力,才能成功。

**8. Purpose (目的)**
> Pattern: 为了…  
> Example: 为了健康,我每天锻炼。

**9. Contraction (紧缩)**
> Pattern: …了…就…  
> Example: 放了假就回国。

#### J. Degree Expression — 越来越...
> 天气越来越热了。 (The weather is getting hotter and hotter.)

#### K. Negation of Willingness — 别...了 / 不用...
> 别说话了。 (Stop talking.)  
> 不用谢。 (You're welcome. / No need to thank.)

---

## 3. Test Structure

### 3.1 Pass Standard
- **Passing score:** 60% (to be configurable)
- **Total questions:** 60 (target, 3 sections of 20 each)
- **Duration:** 45 minutes
- **Passing criteria:** Score ≥ 36/60

### 3.2 Test Sections

| Section | Type | Questions | Content |
|---------|------|-----------|---------|
| **Listening** | Multiple Choice (4 options) | 20 | Audio plays → select correct answer |
| **Vocabulary & Grammar** | Multiple Choice (4 options) | 20 | Fill-in-the-blank, grammar correction |
| **Reading** | Multiple Choice (4 options) | 20 | Short passages → comprehension questions |

> ⚠️ For Phase 1 (vocabulary games focus), sections are split by game type:
> - **Game 1:** Character → Pinyin match
> - **Game 2:** Pinyin → English definition match
> - **Game 3:** Grammar fill-in-the-blank (4-choice)

---

## 4. Game Types

### 4.1 Game 1 — Character ↔ Pinyin Match
- **Format:** Show a Chinese character → user selects the correct pinyin from 4 options
- **Options:** 4 pinyin choices (1 correct, 3 distractors from same HSK level)
- **Scoring:** +1 correct, 0 for wrong, move to next
- **Progression:** Sequential (50 questions per round)

### 4.2 Game 2 — Pinyin ↔ English Match
- **Format:** Show pinyin → user selects the correct English definition from 4 options
- **Options:** 4 English definitions (1 correct, 3 distractors)
- **Scoring:** +1 correct, 0 for wrong
- **Progression:** Random shuffle of all 300 HSK 3 words

### 4.3 Game 3 — Grammar Fill-in-the-Blank
- **Format:** Show a sentence with a blank → 4 word options → select the one that fills the blank correctly
- **Example:** 我_____北京大学的学生。(A. 是  B. 在  C. 的  D. 有)
- **Options:** 4 words — mix of grammar-appropriate and phonetically similar distractors
- **Scoring:** +1 correct

### 4.4 Game 4 — Arrange the Sentence
- **Format:** English translation shown → words shuffled in a bank → user clicks to arrange in correct order
- **Example:** Words: 我 / 喜欢 / 学 / 汉语 → correct: 我 喜欢 学 汉语
- **Mechanics:** Click word to move to answer bar; click placed word to return; Check button when all placed
- **Feedback:** Hint shown on wrong answer; correct answer displayed
- **Scoring:** +1 correct; auto-advance on correct after 0.9s, manual next on wrong
- **Sentence bank:** 45 sentences covering declarative, 把, 被, 着, 过, 虽然...但是..., 如果...就..., 不但...而且..., 因为...所以..., 先...然后..., 只有...才..., 为了...

### 4.5 Game 5 — Listen & Choose
- **Format:** Audio plays a Chinese word via Google TTS → user selects the matching character from 4 options
- **Options:** 4 characters only (no pinyin shown), filtered to same syllable count
- **Audio:** Google Translate TTS with Web Speech API fallback, auto-plays on each question, re-playable via ▶ button
- **Mechanics:** 30 questions per round, keyboard 1-4 to select
- **Scoring:** +1 correct; auto-advance on correct after 0.9s, manual next on wrong
- **Browser requirement:** Chrome/Edge recommended for best TTS quality

### 4.6 Game 6 — Spot the Error
- **Format:** 4 sentences shown → user identifies which one is grammatically incorrect
- **Options:** 3 correct sentences + 1 incorrect sentence, shuffled randomly
- **Error types covered:** word order, missing particles (了/的), 把 construction, 被 passive, comparison, 过 experiential, 是...的, 虽然...但是, 如果...就, 不但...而且, 越来越, double negation, measure words
- **Feedback:** Error sentence highlighted in red + explanation shown after answering
- **Scoring:** +1 correct (correct = identified the error); auto-advance on correct, manual next on wrong
- **Bank:** 43 error sentences covering all major HSK 3 grammar categories

---

## 5. Feature List

### Phase 1 — Core (Current Scope)
- [x] Home page with test overview and start button
- [x] Game 1: Character → Pinyin matching (30 questions/round)
- [x] Game 2: Pinyin → English matching (30 questions/round)
- [x] Game 3: Grammar fill-in-the-blank (30 questions/round)
- [x] Game 4: Arrange the Sentence (30 questions/round)
- [x] Game 5: Listen & Choose (30 questions/round, Google TTS)
- [x] Game 6: Spot the Error (30 questions/round, 43 error sentences)
- [x] Score display after each game session
- [x] Pass/Fail result (60% threshold) with visual feedback
- [x] Progress bar per game
- [x] Answer review (show correct answers after completion)
- [ ] Basic user profile (name, HSK level tracking)
- [x] Local storage for score history
- [x] 4-type rotating Full Test (15 each, 3 rounds of 20)
- [x] Auto-advance on correct, manual next on wrong
- [x] Color flash (green/red) on answer

### Phase 2 — Test Mode
- [ ] Full 3-section test (Listening, Vocabulary, Reading)
- [ ] Audio playback for listening questions
- [ ] Timer per test
- [ ] Official pass/fail certificate-style result screen
- [ ] Section-by-section breakdown
- [ ] Weak area identification

### Phase 3 — HSK 4 (Future)
- [ ] HSK 4 vocabulary set (500 new words)
- [ ] HSK 4 grammar structures
- [ ] Level selector

---

## 6. Tech Stack

| Layer | Choice |
|-------|--------|
| **Frontend Framework** | React 18 + Vite |
| **Styling** | Tailwind CSS |
| **State Management** | Zustand |
| **Routing** | React Router v6 |
| **Data** | JSON files (vocab, grammar) in `/data` |
| **Storage** | localStorage (scores, history) |
| **Audio** | Web Audio API for listening section |
| **Backend** | None (Phase 1 — static frontend) |
| **Deployment** | Vercel / Netlify |

---

## 7. Data Architecture

```
/hsk3-test
├── /data
│   ├── hsk3-vocabulary.json      # 300 new HSK3 words
│   ├── hsk3-grammar.json         # Grammar patterns with examples
│   └── hsk3-quiz-bank.json       # Pre-generated quiz questions
├── /src
│   ├── /components
│   │   ├── /game1               # Character-Pinyin Match
│   │   ├── /game2               # Pinyin-English Match
│   │   ├── /game3               # Grammar Fill-in-Blank
│   │   ├── /test                # Full Test Mode
│   │   └── /shared              # ProgressBar, ScoreCard, ResultScreen
│   ├── /pages
│   │   ├── Home.jsx
│   │   ├── GameSelect.jsx
│   │   ├── TestMode.jsx
│   │   └── History.jsx
│   ├── /store
│   │   └── useGameStore.js      # Zustand store
│   └── /hooks
│       └── useQuiz.js
└── SPEC.md
```

---

## 8. Content Data Schema

### Vocabulary Item
```json
{
  "id": 1,
  "character": "爱好",
  "pinyin": "àihào",
  "pos": "noun",
  "english": "hobby",
  "level": 3,
  "distractors_pinyin": ["àihè", "àihǎo", "àihái"]
}
```

### Grammar Item
```json
{
  "id": 1,
  "pattern": "虽然...但是...",
  "meaning": "although...but...",
  "example": "虽然很累，但是还想继续。",
  "example_en": "Although I'm tired, I still want to continue.",
  "usage_type": "concessive"
}
```

### Quiz Question
```json
{
  "id": 1,
  "type": "grammar",
  "sentence": "_____下雨了，我还要去。",
  "options": ["因为", "如果", "虽然", "所以"],
  "answer": 2,
  "explanation": "虽然...但是... is the concessive pattern meaning 'although...but...'"
}
```
