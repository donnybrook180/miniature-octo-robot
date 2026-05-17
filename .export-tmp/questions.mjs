import {
  getLocalizedExplanation,
  getLocalizedLearnerHint,
  getLocalizedVocabularyMeaning
} from "./learnerLanguage.mjs";
import { buildAdditionalListeningPart1Questions } from "./listeningPart1Additional.mjs";

export const mockQuestions = [
  {
    id: "r5-001",
    part: "reading_part_5",
    skill: "prepositions",
    difficulty: "easy",
    scoreBand: "600",
    prompt: "The marketing report must be submitted _____ Friday afternoon.",
    options: ["A. on", "B. by", "C. at", "D. with"],
    correctOption: "B",
    explanationEn: "'By Friday afternoon' means the report must be submitted no later than that time.",
    explanationKo: "'by Friday afternoon'는 금요일 오후까지, 즉 그 시간보다 늦지 않게 제출해야 한다는 뜻입니다.",
    koreanLearnerHint: "한국어의 '-까지'는 영어에서 상황에 따라 'until' 또는 'by'가 됩니다. 마감 시간에는 보통 'by'를 씁니다."
  },
  {
    id: "r5-002",
    part: "reading_part_5",
    skill: "articles",
    difficulty: "easy",
    scoreBand: "600",
    prompt: "Ms. Kim has scheduled _____ interview with the new applicant.",
    options: ["A. a", "B. an", "C. the", "D. no article"],
    correctOption: "B",
    explanationEn: "Use 'an' before a vowel sound. 'Interview' starts with a vowel sound.",
    explanationKo: "'interview'는 모음 소리로 시작하므로 부정관사 'an'을 사용합니다.",
    koreanLearnerHint: "한국어에는 관사가 없기 때문에 영어의 'a/an/the'를 자주 놓칠 수 있습니다."
  },
  {
    id: "r5-003",
    part: "reading_part_5",
    skill: "verb tense",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "The supplier _____ the updated invoice yesterday.",
    options: ["A. send", "B. sends", "C. sent", "D. has sent"],
    correctOption: "C",
    explanationEn: "'Yesterday' refers to a finished past time, so the simple past 'sent' is correct.",
    explanationKo: "'yesterday'는 끝난 과거 시점을 나타내므로 단순과거 'sent'가 맞습니다.",
    koreanLearnerHint: "한국어는 시제가 문맥으로 표현되는 경우가 많지만, 영어 TOEIC에서는 시간 표현이 동사 시제를 결정하는 핵심 단서입니다."
  },
  {
    id: "r5-004",
    part: "reading_part_5",
    skill: "word form",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "The manager spoke _____ about the new safety policy.",
    options: ["A. confident", "B. confidence", "C. confidently", "D. confide"],
    correctOption: "C",
    explanationEn: "The blank describes how the manager spoke, so an adverb is needed.",
    explanationKo: "빈칸은 manager가 어떻게 말했는지를 설명하므로 부사 'confidently'가 필요합니다.",
    koreanLearnerHint: "TOEIC Part 5에서는 품사 문제가 자주 나옵니다. 동사를 꾸미는 자리에는 보통 부사가 필요합니다."
  },
  {
    id: "r5-005",
    part: "reading_part_5",
    skill: "conjunctions",
    difficulty: "hard",
    scoreBand: "800",
    prompt: "_____ the weather was severe, the delivery arrived on time.",
    options: ["A. Despite", "B. Although", "C. Because", "D. Therefore"],
    correctOption: "B",
    explanationEn: "'Although' introduces a full clause with a subject and verb.",
    explanationKo: "'Although' 뒤에는 주어와 동사가 있는 절이 올 수 있습니다.",
    koreanLearnerHint: "'Despite' 뒤에는 명사나 동명사가 오고, 'Although' 뒤에는 절이 옵니다."
  },
  {
    id: "l2-001",
    part: "listening_part_2",
    skill: "question response",
    difficulty: "easy",
    scoreBand: "600",
    prompt: "Where is the weekly staff meeting being held?",
    transcript: "Where is the weekly staff meeting being held?",
    options: ["A. In conference room B.", "B. Every Monday morning.", "C. Yes, I attended it."],
    correctOption: "A",
    explanationEn: "The question asks for a place, so 'In conference room B' is the correct response.",
    explanationKo: "질문은 장소를 묻고 있으므로 'In conference room B'가 맞는 응답입니다.",
    koreanLearnerHint: "'Where' 질문은 장소 응답을 찾아야 합니다. 시간이나 yes/no 응답은 함정입니다."
  },
  {
    id: "l2-002",
    part: "listening_part_2",
    skill: "question response",
    difficulty: "easy",
    scoreBand: "600",
    prompt: "Could you send me the sales figures?",
    transcript: "Could you send me the sales figures?",
    options: ["A. Sure, I will email them now.", "B. They are very expensive.", "C. It starts at nine."],
    correctOption: "A",
    explanationEn: "This is a request, so the best response agrees to send the figures.",
    explanationKo: "요청하는 문장이므로 자료를 보내겠다는 응답이 가장 자연스럽습니다.",
    koreanLearnerHint: "'Could you...'는 능력을 묻기보다 정중한 요청인 경우가 많습니다."
  },
  {
    id: "l2-003",
    part: "listening_part_2",
    skill: "wh-question",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "When will the new software be installed?",
    transcript: "When will the new software be installed?",
    options: ["A. By the IT department.", "B. Tomorrow afternoon.", "C. Because it is faster."],
    correctOption: "B",
    explanationEn: "'When' asks about time, so 'Tomorrow afternoon' is correct.",
    explanationKo: "'When'은 시간을 묻는 질문이므로 'Tomorrow afternoon'가 맞습니다.",
    koreanLearnerHint: "의문사 질문에서는 첫 단어를 정확히 듣는 것이 중요합니다."
  },
  {
    id: "l2-004",
    part: "listening_part_2",
    skill: "suggestion",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "Why don't we review the contract again?",
    transcript: "Why don't we review the contract again?",
    options: ["A. That's a good idea.", "B. It was signed yesterday.", "C. On the second floor."],
    correctOption: "A",
    explanationEn: "'Why don't we...' is often a suggestion, not a literal why-question.",
    explanationKo: "'Why don't we...'는 이유를 묻는 것이 아니라 제안으로 쓰이는 경우가 많습니다.",
    koreanLearnerHint: "직역하면 헷갈릴 수 있습니다. TOEIC에서는 표현의 기능을 듣는 것이 중요합니다."
  },
  {
    id: "l2-005",
    part: "listening_part_2",
    skill: "indirect response",
    difficulty: "hard",
    scoreBand: "800",
    prompt: "Has the client approved the proposal yet?",
    transcript: "Has the client approved the proposal yet?",
    options: ["A. I have not checked my email.", "B. It is on the top shelf.", "C. For three weeks."],
    correctOption: "A",
    explanationEn: "The response indirectly means the speaker does not know yet.",
    explanationKo: "이 응답은 직접적인 yes/no는 아니지만 아직 확인하지 못했다는 뜻입니다.",
    koreanLearnerHint: "TOEIC Part 2에서는 직접적인 yes/no보다 간접 응답이 정답인 경우가 많습니다."
  }
];

mockQuestions.push(
  {
    id: "r5-006",
    part: "reading_part_5",
    skill: "word form",
    difficulty: "easy",
    scoreBand: "600",
    prompt: "The customer service team responded _____ to all complaints.",
    options: ["A. prompt", "B. promptly", "C. promptness", "D. prompting"],
    correctOption: "B",
    explanationEn: "The blank describes how the team responded, so the adverb 'promptly' is needed.",
    explanationKo: "빈칸은 팀이 어떻게 응답했는지를 설명하므로 부사 'promptly'가 필요합니다.",
    koreanLearnerHint: "동사를 꾸미는 자리에는 형용사가 아니라 부사가 오는 경우가 많습니다."
  },
  {
    id: "r5-007",
    part: "reading_part_5",
    skill: "prepositions",
    difficulty: "easy",
    scoreBand: "600",
    prompt: "The training session will begin _____ 9:30 A.M.",
    options: ["A. at", "B. on", "C. in", "D. by"],
    correctOption: "A",
    explanationEn: "Use 'at' with exact times such as 9:30 A.M.",
    explanationKo: "9:30 A.M.처럼 정확한 시간 앞에는 전치사 'at'을 사용합니다.",
    koreanLearnerHint: "영어에서는 시간 표현의 종류에 따라 at, on, in을 구분해야 합니다."
  },
  {
    id: "r5-008",
    part: "reading_part_5",
    skill: "articles",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "The company opened _____ new branch near Busan Station.",
    options: ["A. a", "B. an", "C. the", "D. no article"],
    correctOption: "A",
    explanationEn: "Use 'a' before a singular countable noun when introducing it for the first time.",
    explanationKo: "처음 언급하는 단수 가산명사 앞에는 부정관사 'a'를 사용합니다.",
    koreanLearnerHint: "한국어에는 관사가 없기 때문에 branch 같은 단수 가산명사 앞 관사를 놓치기 쉽습니다."
  },
  {
    id: "r5-009",
    part: "reading_part_5",
    skill: "verb tense",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "The accounting department _____ the budget before the meeting starts.",
    options: ["A. review", "B. reviewed", "C. will review", "D. has reviewed"],
    correctOption: "C",
    explanationEn: "The action is expected to happen before a future meeting, so 'will review' fits.",
    explanationKo: "회의가 시작되기 전에 일어날 미래의 일을 말하므로 'will review'가 자연스럽습니다.",
    koreanLearnerHint: "before가 있어도 문맥이 미래이면 미래 시제를 선택해야 합니다."
  },
  {
    id: "r5-010",
    part: "reading_part_5",
    skill: "conjunctions",
    difficulty: "hard",
    scoreBand: "800",
    prompt: "The shipment was delayed _____ the warehouse had already prepared the order.",
    options: ["A. even though", "B. because", "C. therefore", "D. unless"],
    correctOption: "A",
    explanationEn: "'Even though' shows contrast between the delay and the prepared order.",
    explanationKo: "배송 지연과 이미 준비된 주문 사이의 대조를 나타내므로 'even though'가 맞습니다.",
    koreanLearnerHint: "대조 관계인지 원인 관계인지 먼저 파악하면 접속사 문제를 풀기 쉽습니다."
  },
  {
    id: "r5-011",
    part: "reading_part_5",
    skill: "vocabulary",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "Employees must _____ their identification badges while inside the building.",
    options: ["A. wear", "B. spend", "C. attend", "D. reserve"],
    correctOption: "A",
    explanationEn: "You 'wear' a badge. The other choices do not collocate with identification badges.",
    explanationKo: "배지는 'wear'한다고 표현합니다. 다른 선택지는 identification badges와 어울리지 않습니다.",
    koreanLearnerHint: "TOEIC에서는 단어 뜻뿐 아니라 함께 쓰이는 표현(collocation)이 중요합니다."
  },
  {
    id: "r5-012",
    part: "reading_part_5",
    skill: "comparatives",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "This year's conference room is _____ than the one we used last year.",
    options: ["A. spacious", "B. more spacious", "C. most spacious", "D. spaciousness"],
    correctOption: "B",
    explanationEn: "'Than' signals a comparative form, so 'more spacious' is correct.",
    explanationKo: "'than'이 있으므로 비교급 'more spacious'가 필요합니다.",
    koreanLearnerHint: "than은 비교급을 찾으라는 강한 단서입니다."
  },
  {
    id: "r5-013",
    part: "reading_part_5",
    skill: "pronouns",
    difficulty: "easy",
    scoreBand: "600",
    prompt: "Each employee should submit _____ timesheet by Friday.",
    options: ["A. their", "B. its", "C. his or her", "D. them"],
    correctOption: "C",
    explanationEn: "'Each employee' is singular, so a singular possessive phrase is needed.",
    explanationKo: "'Each employee'는 단수 취급하므로 단수 소유 표현이 필요합니다.",
    koreanLearnerHint: "each, every 뒤의 명사는 단수로 보고 동사와 대명사를 맞춰야 합니다."
  },
  {
    id: "r5-014",
    part: "reading_part_5",
    skill: "modals",
    difficulty: "easy",
    scoreBand: "600",
    prompt: "Visitors _____ sign in at the reception desk before entering.",
    options: ["A. must", "B. would", "C. might", "D. used to"],
    correctOption: "A",
    explanationEn: "'Must' expresses a requirement, which fits the visitor rule.",
    explanationKo: "방문객 규칙처럼 의무를 나타낼 때는 'must'가 적절합니다.",
    koreanLearnerHint: "규칙, 안내문, 사내 공지에서는 must, should, are required to가 자주 나옵니다."
  },
  {
    id: "r5-015",
    part: "reading_part_5",
    skill: "subject-verb agreement",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "The list of available rooms _____ posted near the elevator.",
    options: ["A. are", "B. were", "C. is", "D. have been"],
    correctOption: "C",
    explanationEn: "The subject is 'list', which is singular, so 'is' is correct.",
    explanationKo: "주어는 'rooms'가 아니라 단수명사 'list'이므로 'is'가 맞습니다.",
    koreanLearnerHint: "전치사구 of available rooms에 속지 말고 진짜 주어를 찾으세요."
  },
  {
    id: "r5-016",
    part: "reading_part_5",
    skill: "infinitives",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "The director asked the team _____ the proposal by Monday.",
    options: ["A. revise", "B. revising", "C. to revise", "D. revised"],
    correctOption: "C",
    explanationEn: "The pattern is 'ask someone to do something'.",
    explanationKo: "'ask someone to do something' 구조이므로 'to revise'가 필요합니다.",
    koreanLearnerHint: "동사 패턴을 외우면 Part 5에서 빠르게 답을 고를 수 있습니다."
  },
  {
    id: "r5-017",
    part: "reading_part_5",
    skill: "participles",
    difficulty: "hard",
    scoreBand: "800",
    prompt: "The _____ documents should be placed in the archive room.",
    options: ["A. approve", "B. approving", "C. approved", "D. approval"],
    correctOption: "C",
    explanationEn: "Documents that have received approval are 'approved documents'.",
    explanationKo: "승인된 문서를 의미하므로 과거분사 'approved'가 맞습니다.",
    koreanLearnerHint: "명사가 동작을 받는 관계이면 과거분사를 쓰는 경우가 많습니다."
  },
  {
    id: "r5-018",
    part: "reading_part_5",
    skill: "adverbs",
    difficulty: "easy",
    scoreBand: "600",
    prompt: "The new printer operates very _____.",
    options: ["A. quiet", "B. quietly", "C. quietness", "D. quieter"],
    correctOption: "B",
    explanationEn: "The blank modifies the verb 'operates', so an adverb is required.",
    explanationKo: "빈칸은 동사 'operates'를 꾸미므로 부사 'quietly'가 필요합니다.",
    koreanLearnerHint: "동사 뒤에서 방식이나 정도를 설명하면 부사를 먼저 의심하세요."
  },
  {
    id: "r5-019",
    part: "reading_part_5",
    skill: "vocabulary",
    difficulty: "hard",
    scoreBand: "800",
    prompt: "The hotel offers a _____ shuttle service to the airport.",
    options: ["A. complimentary", "B. completed", "C. complicated", "D. comparable"],
    correctOption: "A",
    explanationEn: "'Complimentary' means free, which fits a hotel shuttle service.",
    explanationKo: "'complimentary'는 무료라는 뜻으로 호텔 셔틀 서비스와 잘 어울립니다.",
    koreanLearnerHint: "비슷하게 생긴 단어를 뜻으로 구분하는 문제는 TOEIC에서 자주 나옵니다."
  },
  {
    id: "r5-020",
    part: "reading_part_5",
    skill: "conditionals",
    difficulty: "hard",
    scoreBand: "800",
    prompt: "If the machine _____ again, please contact maintenance immediately.",
    options: ["A. fail", "B. fails", "C. failed", "D. failing"],
    correctOption: "B",
    explanationEn: "In a real future condition, use the present simple after 'if'.",
    explanationKo: "실현 가능한 미래 조건에서는 if절에 현재시제를 사용하므로 'fails'가 맞습니다.",
    koreanLearnerHint: "if절 안에 미래 의미가 있어도 보통 will을 쓰지 않고 현재시제를 씁니다."
  },
  {
    id: "l2-006",
    part: "listening_part_2",
    skill: "wh-question",
    difficulty: "easy",
    scoreBand: "600",
    prompt: "Who will lead the orientation session?",
    transcript: "Who will lead the orientation session?",
    options: ["A. Mr. Park from human resources.", "B. In the main auditorium.", "C. It begins at ten."],
    correctOption: "A",
    explanationEn: "'Who' asks for a person, so the response naming Mr. Park is correct.",
    explanationKo: "'Who'는 사람을 묻는 질문이므로 Mr. Park를 말하는 응답이 맞습니다.",
    koreanLearnerHint: "의문사의 의미를 먼저 잡으면 함정 선택지를 쉽게 제거할 수 있습니다."
  },
  {
    id: "l2-007",
    part: "listening_part_2",
    skill: "yes-no question",
    difficulty: "easy",
    scoreBand: "600",
    prompt: "Is the cafeteria open on weekends?",
    transcript: "Is the cafeteria open on weekends?",
    options: ["A. Only on Saturdays.", "B. Near the lobby.", "C. I ordered a sandwich."],
    correctOption: "A",
    explanationEn: "The answer gives a partial yes: it is open only on Saturdays.",
    explanationKo: "토요일에만 연다는 부분적인 yes 응답이므로 A가 맞습니다.",
    koreanLearnerHint: "Part 2에서는 직접 yes/no가 아니어도 의미상 답이 될 수 있습니다."
  },
  {
    id: "l2-008",
    part: "listening_part_2",
    skill: "request",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "Would you mind checking this invoice?",
    transcript: "Would you mind checking this invoice?",
    options: ["A. No problem, I can do it now.", "B. It was delivered yesterday.", "C. The meeting room is full."],
    correctOption: "A",
    explanationEn: "'Would you mind...' is a polite request, so agreeing to help is appropriate.",
    explanationKo: "'Would you mind...'는 정중한 요청이므로 도와주겠다는 응답이 자연스럽습니다.",
    koreanLearnerHint: "mind가 들어간 요청문은 직역하지 말고 요청 기능으로 이해하세요."
  },
  {
    id: "l2-009",
    part: "listening_part_2",
    skill: "choice question",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "Should we print the brochures today or tomorrow?",
    transcript: "Should we print the brochures today or tomorrow?",
    options: ["A. Tomorrow would be better.", "B. About two hundred copies.", "C. They are in the cabinet."],
    correctOption: "A",
    explanationEn: "The question asks for a choice between today and tomorrow.",
    explanationKo: "오늘과 내일 중 선택을 묻고 있으므로 'Tomorrow would be better'가 맞습니다.",
    koreanLearnerHint: "or가 들리면 선택지 중 하나를 답하는 응답을 찾으세요."
  },
  {
    id: "l2-010",
    part: "listening_part_2",
    skill: "indirect response",
    difficulty: "hard",
    scoreBand: "800",
    prompt: "Did you reserve a table for the client dinner?",
    transcript: "Did you reserve a table for the client dinner?",
    options: ["A. The restaurant is closed today.", "B. It seats eight people.", "C. I prefer the window seat."],
    correctOption: "A",
    explanationEn: "If the restaurant is closed, the reservation likely could not be made.",
    explanationKo: "식당이 오늘 닫혀 있다면 예약을 하지 못했을 가능성이 크므로 A가 간접 응답입니다.",
    koreanLearnerHint: "Part 2의 어려운 문제는 직접 답보다 상황을 추론하는 응답이 많습니다."
  },
  {
    id: "l2-011",
    part: "listening_part_2",
    skill: "where question",
    difficulty: "easy",
    scoreBand: "600",
    prompt: "Where should I place these packages?",
    transcript: "Where should I place these packages?",
    options: ["A. Next to the loading dock.", "B. By Friday afternoon.", "C. They are quite heavy."],
    correctOption: "A",
    explanationEn: "'Where' asks for a location, so 'Next to the loading dock' is correct.",
    explanationKo: "'Where'는 장소를 묻기 때문에 'Next to the loading dock'가 맞습니다.",
    koreanLearnerHint: "장소 질문에는 시간이나 상태 설명이 아니라 위치 표현이 와야 합니다."
  },
  {
    id: "l2-012",
    part: "listening_part_2",
    skill: "when question",
    difficulty: "easy",
    scoreBand: "600",
    prompt: "When does the sales report need to be finished?",
    transcript: "When does the sales report need to be finished?",
    options: ["A. Before noon.", "B. By the sales team.", "C. In the shared folder."],
    correctOption: "A",
    explanationEn: "'When' asks for time, and 'Before noon' gives a deadline.",
    explanationKo: "'When'은 시간을 묻고 'Before noon'은 마감 시간을 나타냅니다.",
    koreanLearnerHint: "when 질문에서는 by, before, tomorrow 같은 시간 표현을 찾으세요."
  },
  {
    id: "l2-013",
    part: "listening_part_2",
    skill: "suggestion",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "How about moving the interview to Thursday?",
    transcript: "How about moving the interview to Thursday?",
    options: ["A. That works for me.", "B. It is on the third floor.", "C. She has strong experience."],
    correctOption: "A",
    explanationEn: "'How about...' makes a suggestion, so accepting it is appropriate.",
    explanationKo: "'How about...'은 제안 표현이므로 수락하는 응답이 맞습니다.",
    koreanLearnerHint: "How about은 방법을 묻는 말이 아니라 제안일 때가 많습니다."
  },
  {
    id: "l2-014",
    part: "listening_part_2",
    skill: "why question",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "Why was the product demonstration postponed?",
    transcript: "Why was the product demonstration postponed?",
    options: ["A. The equipment has not arrived yet.", "B. In the exhibition hall.", "C. At three o'clock."],
    correctOption: "A",
    explanationEn: "'Why' asks for a reason, and missing equipment explains the postponement.",
    explanationKo: "'Why'는 이유를 묻고 장비가 아직 도착하지 않았다는 말이 연기의 이유가 됩니다.",
    koreanLearnerHint: "why 질문에는 because가 없어도 이유가 되는 문장을 고르면 됩니다."
  },
  {
    id: "l2-015",
    part: "listening_part_2",
    skill: "offer",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "Would you like me to update the client list?",
    transcript: "Would you like me to update the client list?",
    options: ["A. Yes, please add the new contacts.", "B. It was updated last month.", "C. The clients are arriving soon."],
    correctOption: "A",
    explanationEn: "The speaker is offering help, so accepting the offer fits.",
    explanationKo: "상대가 도움을 제안하고 있으므로 그 제안을 받아들이는 응답이 맞습니다.",
    koreanLearnerHint: "Would you like me to는 '제가 ~할까요?'라는 제안 표현입니다."
  },
  {
    id: "l2-016",
    part: "listening_part_2",
    skill: "tag question",
    difficulty: "hard",
    scoreBand: "800",
    prompt: "The quarterly meeting is next Tuesday, isn't it?",
    transcript: "The quarterly meeting is next Tuesday, isn't it?",
    options: ["A. Yes, it starts at 9 A.M.", "B. I met him yesterday.", "C. The report is quarterly."],
    correctOption: "A",
    explanationEn: "A tag question checks confirmation, so a confirming answer is appropriate.",
    explanationKo: "부가의문문은 확인을 요청하므로 일정을 확인해 주는 응답이 맞습니다.",
    koreanLearnerHint: "부가의문문은 문장 끝보다 전체 의미를 듣고 확인 응답을 고르세요."
  },
  {
    id: "l2-017",
    part: "listening_part_2",
    skill: "negative question",
    difficulty: "hard",
    scoreBand: "800",
    prompt: "Didn't you receive the revised schedule?",
    transcript: "Didn't you receive the revised schedule?",
    options: ["A. No, could you send it again?", "B. It starts next Monday.", "C. The schedule was revised."],
    correctOption: "A",
    explanationEn: "The response directly says the speaker did not receive it and asks for it again.",
    explanationKo: "받지 못했다고 말하고 다시 보내 달라고 요청하므로 A가 맞습니다.",
    koreanLearnerHint: "부정 의문문은 한국어식 예/아니오와 달라 헷갈리기 쉬우니 의미 중심으로 들으세요."
  },
  {
    id: "l2-018",
    part: "listening_part_2",
    skill: "how question",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "How will the documents be delivered?",
    transcript: "How will the documents be delivered?",
    options: ["A. By courier.", "B. At the front desk.", "C. Until Friday."],
    correctOption: "A",
    explanationEn: "'How' asks for the method, and 'By courier' gives the delivery method.",
    explanationKo: "'How'는 방법을 묻고 'By courier'는 배송 방법을 나타냅니다.",
    koreanLearnerHint: "how는 상태뿐 아니라 방법을 묻는 경우가 많습니다."
  },
  {
    id: "l2-019",
    part: "listening_part_2",
    skill: "permission",
    difficulty: "easy",
    scoreBand: "600",
    prompt: "May I use this conference room for a quick call?",
    transcript: "May I use this conference room for a quick call?",
    options: ["A. Sure, it is available now.", "B. The call lasted ten minutes.", "C. I called the conference organizer."],
    correctOption: "A",
    explanationEn: "The question asks for permission, and the response grants it.",
    explanationKo: "허락을 구하는 질문이며 A는 사용할 수 있다고 허락합니다.",
    koreanLearnerHint: "May I는 정중하게 허락을 구하는 표현입니다."
  },
  {
    id: "l2-020",
    part: "listening_part_2",
    skill: "indirect response",
    difficulty: "hard",
    scoreBand: "800",
    prompt: "Can you finish the presentation slides by noon?",
    transcript: "Can you finish the presentation slides by noon?",
    options: ["A. I still need the sales charts.", "B. The slides are in English.", "C. Noon is after the staff meeting."],
    correctOption: "A",
    explanationEn: "The speaker implies they cannot finish yet because they still need the sales charts.",
    explanationKo: "아직 판매 차트가 필요하다고 했으므로 정오까지 끝내기 어렵다는 간접 응답입니다.",
    koreanLearnerHint: "가능 여부 질문에서도 직접 yes/no 대신 조건이나 문제점을 말하는 답이 나올 수 있습니다."
  }
);

const listeningAudioQuestionsById = {
  "l2-001": {
    audioText: "Good morning, everyone. Because the training room is being cleaned, today's weekly staff meeting will be held in conference room B at ten o'clock.",
    prompt: "Where will the weekly staff meeting be held?",
    options: ["A. In conference room B.", "B. In the training room.", "C. At the front desk."],
    correctOption: "A",
    explanationEn: "The audio says the staff meeting will be held in conference room B.",
    explanationKo: "음성에서 직원 회의가 conference room B에서 열린다고 말합니다.",
    koreanLearnerHint: "장소를 묻는 문제에서는 in, at 뒤의 장소 표현을 집중해 들으세요."
  },
  "l2-002": {
    audioText: "Mina, could you send the sales figures to Mr. Lewis before lunch? He needs them for the budget meeting this afternoon.",
    prompt: "What does Mr. Lewis need?",
    options: ["A. The sales figures.", "B. A lunch reservation.", "C. The office budget."],
    correctOption: "A",
    explanationEn: "Mr. Lewis needs the sales figures for a meeting.",
    explanationKo: "Mr. Lewis가 회의를 위해 sales figures가 필요하다고 했습니다.",
    koreanLearnerHint: "need, send, before lunch 같은 동사와 시간 표현을 함께 듣으면 핵심 정보를 찾기 쉽습니다."
  },
  "l2-003": {
    audioText: "The new accounting software will be installed tomorrow afternoon. Please save your files and log out by one o'clock.",
    prompt: "When will the new software be installed?",
    options: ["A. Tomorrow afternoon.", "B. This morning.", "C. Next Friday."],
    correctOption: "A",
    explanationEn: "The audio states that installation is scheduled for tomorrow afternoon.",
    explanationKo: "음성에서 새 소프트웨어가 내일 오후에 설치된다고 했습니다.",
    koreanLearnerHint: "When 문제에서는 tomorrow afternoon같은 시간 표현이 정답의 핵심입니다."
  },
  "l2-004": {
    audioText: "Before we sign the supplier contract, I think we should review the delivery terms one more time.",
    prompt: "What does the speaker suggest doing?",
    options: ["A. Reviewing the contract again.", "B. Signing the visitor log.", "C. Calling the delivery driver."],
    correctOption: "A",
    explanationEn: "The speaker suggests reviewing the delivery terms before signing the contract.",
    explanationKo: "계약서에 서명하기 전에 배송 조건을 다시 검토하자고 했습니다.",
    koreanLearnerHint: "suggestion 문제에서는 should, how about, why don't we 같은 표현을 잘 들으세요."
  },
  "l2-005": {
    audioText: "The client called this morning to say the proposal looks good, but I haven't received the written approval by email yet.",
    prompt: "What is still missing?",
    options: ["A. Written approval by email.", "B. A phone number.", "C. A printed brochure."],
    correctOption: "A",
    explanationEn: "The client gave a positive comment, but written approval by email has not arrived.",
    explanationKo: "고객이 긍정적으로 말했지만 이메일 승인은 아직 받지 못했습니다.",
    koreanLearnerHint: "but 뒤에 나오는 정보가 정답의 핵심인 경우가 많습니다."
  },
  "l2-006": {
    audioText: "New employees should meet in the main auditorium at ten. Mr. Park from human resources will lead the orientation session.",
    prompt: "Who will lead the orientation session?",
    options: ["A. Mr. Park.", "B. New employees.", "C. The auditorium manager."],
    correctOption: "A",
    explanationEn: "The audio says Mr. Park from human resources will lead the session.",
    explanationKo: "인사팀의 Mr. Park가 오리엔테이션을 진행한다고 했습니다.",
    koreanLearnerHint: "Who 문제에서는 사람 이름과 직함을 집중해 들으세요."
  },
  "l2-007": {
    audioText: "The cafeteria is closed on Sundays, but it is open from eleven to two on Saturdays for employees working overtime.",
    prompt: "When is the cafeteria open on weekends?",
    options: ["A. On Saturdays.", "B. On Sundays.", "C. Every evening."],
    correctOption: "A",
    explanationEn: "The cafeteria is closed Sundays but open on Saturdays from eleven to two.",
    explanationKo: "구내식당은 일요일에 닫고 토요일에 열린다고 했습니다.",
    koreanLearnerHint: "closed on Sundays, but open on Saturdays처럼 대비되는 정보를 듣으세요."
  },
  "l2-008": {
    audioText: "I think this invoice has the wrong shipping charge. Could you check it before I send the payment request?",
    prompt: "What does the speaker want checked?",
    options: ["A. An invoice.", "B. A meeting room.", "C. A shipment box."],
    correctOption: "A",
    explanationEn: "The speaker asks someone to check an invoice with a possible wrong shipping charge.",
    explanationKo: "송비가 틀린 것 같은 송장을 확인해 달라고 했습니다.",
    koreanLearnerHint: "Could you check it에서 it이 가리키는 명사가 바로 정답이 될 수 있습니다."
  },
  "l2-009": {
    audioText: "The brochure design is ready, but the manager wants one final change today. We should print the brochures tomorrow morning.",
    prompt: "When should the brochures be printed?",
    options: ["A. Tomorrow morning.", "B. Today at noon.", "C. Next week."],
    correctOption: "A",
    explanationEn: "The speaker says the brochures should be printed tomorrow morning.",
    explanationKo: "브로슈어는 내일 오전에 인쇄하자고 했습니다.",
    koreanLearnerHint: "today와 tomorrow가 함께 나오면 무엇이 언제 일어나는지 구분해야 합니다."
  },
  "l2-010": {
    audioText: "I tried to reserve a table for the client dinner, but the restaurant is closed today. I'll call them again tomorrow.",
    prompt: "Why was the table not reserved?",
    options: ["A. The restaurant is closed today.", "B. The client canceled dinner.", "C. The table is too small."],
    correctOption: "A",
    explanationEn: "The reservation was not made because the restaurant is closed today.",
    explanationKo: "식당이 오늘 닫혀 있어서 예약을 하지 못했습니다.",
    koreanLearnerHint: "Why 문제에서 because가 없어도 이유가 되는 문장을 찾으세요."
  },
  "l2-011": {
    audioText: "Please place the packages next to the loading dock. The courier will pick them up after three o'clock.",
    prompt: "Where should the packages be placed?",
    options: ["A. Next to the loading dock.", "B. In the courier's car.", "C. Behind the reception desk."],
    correctOption: "A",
    explanationEn: "The audio says to place the packages next to the loading dock.",
    explanationKo: "패키지를 하역장 옆에 두라고 했습니다.",
    koreanLearnerHint: "Where 문제에서 next to, behind, in 같은 전치사구를 듣으세요."
  },
  "l2-012": {
    audioText: "The sales report must be finished before noon so the director can review it during the lunch break.",
    prompt: "When does the sales report need to be finished?",
    options: ["A. Before noon.", "B. During lunch.", "C. After the director leaves."],
    correctOption: "A",
    explanationEn: "The report needs to be finished before noon.",
    explanationKo: "판매 보고서는 정오 전까지 끝나야 합니다.",
    koreanLearnerHint: "before noon은 마감을 나타내는 중요한 시간 표현입니다."
  },
  "l2-013": {
    audioText: "The candidate can't come on Wednesday, so how about moving the interview to Thursday afternoon instead?",
    prompt: "What change is suggested?",
    options: ["A. Move the interview to Thursday afternoon.", "B. Cancel the interview.", "C. Hire the candidate today."],
    correctOption: "A",
    explanationEn: "The speaker suggests moving the interview to Thursday afternoon.",
    explanationKo: "면접을 목요일 오후로 옮기자고 제안합니다.",
    koreanLearnerHint: "How about -ing는 제안을 나타냅니다. 새로 제안된 시간만 잡아 들으세요."
  },
  "l2-014": {
    audioText: "The product demonstration has been postponed because the display equipment still hasn't arrived from the warehouse.",
    prompt: "Why was the product demonstration postponed?",
    options: ["A. The equipment has not arrived.", "B. The warehouse is open late.", "C. The product was sold."],
    correctOption: "A",
    explanationEn: "The demonstration was postponed because the display equipment has not arrived.",
    explanationKo: "장비가 창고에서 아직 도착하지 않아 시연이 연기되었습니다.",
    koreanLearnerHint: "because 뒤에 나오는 이유가 정답입니다. 도착하지 않은 것이 핵심입니다."
  },
  "l2-015": {
    audioText: "I met three new contacts at the trade show. Would you like me to add them to the client list this afternoon?",
    prompt: "What is the speaker offering to do?",
    options: ["A. Add new contacts to the client list.", "B. Attend a trade show.", "C. Call every client."],
    correctOption: "A",
    explanationEn: "The speaker offers to add three new contacts to the client list.",
    explanationKo: "새 연락처 세 개를 고객 명단에 추가하겠다고 제안합니다.",
    koreanLearnerHint: "Would you like me to는 도움을 제안하는 표현입니다. 뒤의 동사구를 바로 잡으세요."
  },
  "l2-016": {
    audioText: "The quarterly meeting is next Tuesday at nine, isn't it? I want to confirm it before I book the conference room.",
    prompt: "When is the quarterly meeting?",
    options: ["A. Next Tuesday at nine.", "B. This afternoon at two.", "C. Every Friday morning."],
    correctOption: "A",
    explanationEn: "The speaker confirms that the quarterly meeting is next Tuesday at nine.",
    explanationKo: "분기 회의가 다음 주 화요일 9시인지 확인하고 있습니다.",
    koreanLearnerHint: "tag question은 앞문장의 정보를 확인하는 표현입니다. 시간 정보를 그대로 잡으세요."
  },
  "l2-017": {
    audioText: "Didn't you receive the revised schedule? I sent the updated version to everyone yesterday afternoon.",
    prompt: "What did the speaker send yesterday?",
    options: ["A. The revised schedule.", "B. A meeting invitation.", "C. A printed report."],
    correctOption: "A",
    explanationEn: "The speaker says the revised schedule was sent yesterday afternoon.",
    explanationKo: "어제 오후에 수정된 일정을 보냈다고 했습니다.",
    koreanLearnerHint: "negative question은 헷갈리기 쉽습니다. sent의 목적어가 무엇인지 확인하세요."
  },
  "l2-018": {
    audioText: "The signed documents are too important for regular mail, so we'll deliver them by courier this afternoon.",
    prompt: "How will the documents be delivered?",
    options: ["A. By courier.", "B. By regular mail.", "C. By email."],
    correctOption: "A",
    explanationEn: "The documents will be delivered by courier.",
    explanationKo: "서류는 택배/전문 배송원을 통해 배달됩니다.",
    koreanLearnerHint: "How 문제에서는 방법 표현을 찾으세요. by courier가 핵심입니다."
  },
  "l2-019": {
    audioText: "You may use the conference room for your quick call now. The next reservation doesn't start until three o'clock.",
    prompt: "Why can the person use the conference room now?",
    options: ["A. The next reservation starts later.", "B. The call is already finished.", "C. The organizer canceled the event."],
    correctOption: "A",
    explanationEn: "The room is available now because the next reservation starts at three o'clock.",
    explanationKo: "다음 예약이 3시에 시작하므로 지금 회의실을 사용할 수 있습니다.",
    koreanLearnerHint: "until three o'clock는 아직 사용 가능한 시간을 뜻합니다. next reservation가 핵심입니다."
  },
  "l2-020": {
    audioText: "I can finish the presentation slides by noon if you send me the sales charts in the next fifteen minutes.",
    prompt: "What does the speaker need in order to finish the slides?",
    options: ["A. The sales charts.", "B. A larger screen.", "C. More presentation folders."],
    correctOption: "A",
    explanationEn: "The speaker needs the sales charts to finish the slides by noon.",
    explanationKo: "정오까지 발표 슬라이드를 끝내기 위해 sales charts가 필요합니다.",
    koreanLearnerHint: "if 조건절은 필요한 조건을 알려 줍니다. send me the sales charts가 정답의 근거입니다."
  }
};

const listeningPart1TranscriptsByAudioId = {
  boarding_plane: "Passengers are boarding a plane.",
  reading_book: "A person is reading a book.",
  serving_food: "A server is serving food.",
  sitting_around_table: "Several people are sitting around a table.",
  typing_laptop: "A person is typing on a laptop.",
  worker_helmet: "A worker is wearing a helmet."
};

for (const question of mockQuestions) {
  const listeningQuestion = listeningAudioQuestionsById[question.id];
  if (listeningQuestion) {
    Object.assign(question, listeningQuestion, { transcript: listeningQuestion.audioText });
  }
}

mockQuestions.push(
  {
    id: "r6-001",
    part: "reading_part_6",
    skill: "text completion - verb tense",
    difficulty: "easy",
    scoreBand: "600",
    passageText: "To: All staff\nSubject: Office Supplies\n\nThe supply room will be reorganized this Friday. Please return any unused folders, pens, and printer paper by Thursday afternoon. The office manager _____ a new inventory list after the reorganization is complete.",
    prompt: "Choose the best word or phrase for the blank.",
    options: ["A. prepared", "B. prepares", "C. will prepare", "D. was preparing"],
    correctOption: "C",
    explanationEn: "The action will happen after the reorganization, so the future form 'will prepare' is correct.",
    explanationKo: "재정리가 끝난 후에 일어날 일이므로 미래형 'will prepare'가 맞습니다.",
    koreanLearnerHint: "after + 현재시제가 나와도 주절은 미래 의미일 수 있습니다.",
    vocabularyItems: [
      { word: "inventory list", meaningKo: "재고 목록", exampleSentence: "The manager prepared a new inventory list." },
      { word: "reorganize", meaningKo: "재정리하다", exampleSentence: "The supply room will be reorganized this Friday." }
    ]
  },
  {
    id: "r6-002",
    part: "reading_part_6",
    skill: "text completion - transition",
    difficulty: "medium",
    scoreBand: "700",
    passageText: "Dear Mr. Han,\n\nThank you for your interest in our conference facilities. The Grand Hall can seat up to 180 guests and includes a sound system. _____, our smaller meeting rooms are better suited for workshops with fewer than 25 participants.",
    prompt: "Choose the best transition for the blank.",
    options: ["A. However", "B. Therefore", "C. For example", "D. In addition"],
    correctOption: "A",
    explanationEn: "The second sentence contrasts the large hall with smaller rooms, so 'However' is the best transition.",
    explanationKo: "큰 홀과 작은 회의실을 대비하고 있으므로 'However'가 가장 적절합니다.",
    koreanLearnerHint: "Part 6의 전환어 문제는 앞문장과 뒤문장의 관계를 먼저 판단하세요.",
    vocabularyItems: [
      { word: "facility", meaningKo: "시설", exampleSentence: "The hotel has excellent conference facilities." },
      { word: "be suited for", meaningKo: "~에 적합하다", exampleSentence: "The room is suited for small workshops." }
    ]
  },
  {
    id: "r6-003",
    part: "reading_part_6",
    skill: "text completion - pronoun reference",
    difficulty: "medium",
    scoreBand: "700",
    passageText: "The marketing team has completed the new product brochure. Several copies are available at the reception desk. Sales representatives may take _____ when visiting potential clients next week.",
    prompt: "Choose the best word for the blank.",
    options: ["A. it", "B. them", "C. him", "D. there"],
    correctOption: "B",
    explanationEn: "The pronoun refers to several copies, so the plural object pronoun 'them' is correct.",
    explanationKo: "대명사가 several copies를 가리키므로 복수 목적격 'them'이 맞습니다.",
    koreanLearnerHint: "영어 대명사는 앞의 명사가 단수인지 복수인지를 반드시 맞춰야 합니다.",
    vocabularyItems: [
      { word: "potential client", meaningKo: "잠재 고객", exampleSentence: "The brochure is for potential clients." },
      { word: "representative", meaningKo: "대표, 담당자", exampleSentence: "Sales representatives will visit clients." }
    ]
  },
  {
    id: "r6-004",
    part: "reading_part_6",
    skill: "text completion - vocabulary",
    difficulty: "hard",
    scoreBand: "800",
    passageText: "Notice to Tenants\n\nMaintenance work on the elevators will begin at 8 A.M. on Monday. During this time, one elevator will remain in service. We apologize for any _____ this may cause.",
    prompt: "Choose the best word for the blank.",
    options: ["A. convenience", "B. inconvenience", "C. invitation", "D. inspection"],
    correctOption: "B",
    explanationEn: "Maintenance may cause trouble for tenants, so 'inconvenience' is the correct word.",
    explanationKo: "엘리베이터 정비는 입주자에게 불편을 줄 수 있으므로 'inconvenience'가 맞습니다.",
    koreanLearnerHint: "apologize for any inconvenience는 TOEIC 공지문에 자주 나오는 고정 표현입니다.",
    vocabularyItems: [
      { word: "tenant", meaningKo: "임차인, 입주자", exampleSentence: "The notice was sent to all tenants." },
      { word: "inconvenience", meaningKo: "불편", exampleSentence: "We apologize for the inconvenience." }
    ]
  },
  {
    id: "r6-005",
    part: "reading_part_6",
    skill: "text completion - sentence insertion",
    difficulty: "hard",
    scoreBand: "800",
    passageText: "To: Project Team\nSubject: Design Review\n\nThe client has requested several changes to the website layout. Please review the attached comments before Friday's meeting. _____. This will help us prepare a clear response to the client.",
    prompt: "Choose the sentence that best fits the blank.",
    options: [
      "A. Each team member should bring two suggestions.",
      "B. The cafeteria menu has been updated.",
      "C. The office will close for the holiday.",
      "D. The delivery truck arrived early."
    ],
    correctOption: "A",
    explanationEn: "The passage is about preparing for a design review, so bringing suggestions fits the context.",
    explanationKo: "디자인 검토 회의를 준비하는 내용이므로 팀원들이 제안을 가져오는 문장이 가장 자연스럽습니다.",
    koreanLearnerHint: "문장 삽입 문제는 빈칸 앞뒤의 this, these, it이 무엇을 가리키는지 확인하세요.",
    vocabularyItems: [
      { word: "layout", meaningKo: "배치, 레이아웃", exampleSentence: "The client requested changes to the layout." },
      { word: "attached comments", meaningKo: "첨부된 의견", exampleSentence: "Please review the attached comments." }
    ]
  },
  {
    id: "r7-001",
    part: "reading_part_7",
    skill: "reading comprehension - detail",
    difficulty: "easy",
    scoreBand: "600",
    passageId: "p-r7-fitness-center-notice",
    passageTitle: "Notice: Fitness Center Closure",
    passageText: "Notice\n\nThe company fitness center will be closed this Saturday from 9 A.M. to 1 P.M. for equipment inspection. Employees may use the community gym across the street during this time by showing their company ID.",
    prompt: "Why will the fitness center be closed?",
    options: ["A. For equipment inspection.", "B. For staff training.", "C. Because of a holiday.", "D. Because the ID system is broken."],
    correctOption: "A",
    explanationEn: "The notice says the fitness center will be closed for equipment inspection.",
    explanationKo: "공지에서 운동 시설이 장비 점검 때문에 문을 닫는다고 했습니다.",
    koreanLearnerHint: "Why 문제에서는 for, because of 뒤의 이유 표현을 찾으세요.",
    vocabularyItems: [
      { word: "inspection", meaningKo: "점검", exampleSentence: "The equipment inspection will take four hours." },
      { word: "company ID", meaningKo: "사원증", exampleSentence: "Employees must show their company ID." }
    ]
  },
  {
    id: "r7-002",
    part: "reading_part_7",
    skill: "reading comprehension - purpose",
    difficulty: "easy",
    scoreBand: "600",
    passageId: "p-r7-dining-reservation-email",
    passageTitle: "E-mail: Private Dining Reservation",
    passageText: "E-mail\n\nTo: Ms. Carter\nFrom: Daniel Lee\n\nI am writing to confirm your reservation for a private dining room on June 14. The room can accommodate up to twelve guests. Please let us know by June 10 if you need to change the number of guests.",
    prompt: "What is the purpose of the e-mail?",
    options: ["A. To confirm a reservation.", "B. To cancel a meal.", "C. To request a menu change.", "D. To announce a new restaurant."],
    correctOption: "A",
    explanationEn: "The sender says he is writing to confirm a reservation.",
    explanationKo: "보내는 사람이 예약을 확인하기 위해 이메일을 쓴다고 했습니다.",
    koreanLearnerHint: "I am writing to... 뒤에 메일의 목적이 직접 나오는 경우가 많습니다.",
    vocabularyItems: [
      { word: "confirm", meaningKo: "확인하다", exampleSentence: "I am writing to confirm your reservation." },
      { word: "accommodate", meaningKo: "수용하다", exampleSentence: "The room can accommodate twelve guests." }
    ]
  },
  {
    id: "r7-003",
    part: "reading_part_7",
    skill: "reading comprehension - inference",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-printer-review",
    passageTitle: "Online Review: Office Printer",
    passageText: "Online Review\n\nI bought the VX200 printer for my small office last month. The print quality is excellent, and setup took less than ten minutes. However, the ink cartridges need to be replaced more often than expected, which makes the printer expensive to operate.",
    prompt: "What can be inferred about the printer?",
    options: ["A. It has high operating costs.", "B. It is difficult to set up.", "C. It produces poor-quality prints.", "D. It is used only at home."],
    correctOption: "A",
    explanationEn: "The reviewer says the ink must be replaced often, making the printer expensive to operate.",
    explanationKo: "잉크를 자주 교체해야 해서 운영 비용이 높다고 추론할 수 있습니다.",
    koreanLearnerHint: "inference 문제는 문장을 그대로 복사한 답보다 내용을 따라 추론한 답이 정답인 경우가 많습니다.",
    vocabularyItems: [
      { word: "cartridge", meaningKo: "카트리지, 잉크통", exampleSentence: "The ink cartridges need to be replaced." },
      { word: "operate", meaningKo: "운영하다, 작동하다", exampleSentence: "The printer is expensive to operate." }
    ]
  },
  {
    id: "r7-004",
    part: "reading_part_7",
    skill: "reading comprehension - schedule",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-training-schedule",
    passageTitle: "Schedule: Sales Training",
    passageText: "Training Schedule\n\n9:00-10:15 Customer Communication\n10:30-11:45 Handling Complaints\n12:00-1:00 Lunch\n1:15-2:30 Product Knowledge\n2:45-4:00 Sales Practice",
    prompt: "What session begins at 1:15?",
    options: ["A. Product Knowledge.", "B. Customer Communication.", "C. Handling Complaints.", "D. Sales Practice."],
    correctOption: "A",
    explanationEn: "According to the schedule, Product Knowledge begins at 1:15.",
    explanationKo: "일정표에 따르면 1시 15분에 Product Knowledge 세션이 시작됩니다.",
    koreanLearnerHint: "일정표 문제는 시간과 항목을 서두르지 말고 직접 대조하세요.",
    vocabularyItems: [
      { word: "handle complaints", meaningKo: "불만을 처리하다", exampleSentence: "Employees learned how to handle complaints." },
      { word: "product knowledge", meaningKo: "제품 지식", exampleSentence: "Product knowledge is important for sales staff." }
    ]
  },
  {
    id: "r7-005",
    part: "reading_part_7",
    skill: "reading comprehension - double passage",
    difficulty: "hard",
    scoreBand: "800",
    passageId: "p-r7-office-supplies-email-thread",
    passageTitle: "E-mail Thread: Missing Copy Paper",
    passageText: "E-mail 1\n\nTo: Pacific Office Supplies\nFrom: Grace Kim\n\nWe received order #4582 this morning, but two boxes of copy paper were missing. Could you deliver the missing items by Friday?\n\nE-mail 2\n\nTo: Grace Kim\nFrom: Pacific Office Supplies\n\nWe apologize for the error. The missing boxes will be delivered tomorrow afternoon at no additional charge.",
    prompt: "What will Pacific Office Supplies do?",
    options: ["A. Deliver the missing boxes tomorrow.", "B. Cancel order #4582.", "C. Charge an extra delivery fee.", "D. Send a new invoice by Friday."],
    correctOption: "A",
    explanationEn: "The second e-mail says the missing boxes will be delivered tomorrow afternoon at no extra charge.",
    explanationKo: "두 번째 이메일에서 누락된 박스를 내일 오후에 배달하겠다고 했습니다.",
    koreanLearnerHint: "double passage는 첫 번째 글의 문제점과 두 번째 글의 대응을 연결해야 합니다.",
    vocabularyItems: [
      { word: "missing items", meaningKo: "누락된 품목", exampleSentence: "The missing items will be delivered tomorrow." },
      { word: "at no additional charge", meaningKo: "추가 비용 없이", exampleSentence: "The boxes will be delivered at no additional charge." }
    ]
  }
);

const part6TrainingNotice = `Notice

To: All Branch Employees
Subject: Weekend System Update

The customer database will be unavailable from 9 P.M. on Friday until 6 A.M. on Monday while the IT department installs security updates. During this period, employees will not be able to view customer records or process online returns.

Please complete any urgent customer requests before _____(1). If a customer contacts the branch during the weekend, _____(2) should record the customer's name and phone number on the temporary request form.

The IT department expects the system to be available again on Monday morning. _____(3), employees should check that all weekend requests have been entered into the database before noon. This step is important because _____(4).`;

const part6TrainingEmail = `E-mail

To: Product Development Team
From: Angela Rivera, Project Manager
Subject: Packaging Review

Thank you for attending yesterday's packaging review. The client liked the overall design, but asked us to make the product instructions easier to read.

By Wednesday afternoon, please send me any suggestions _____(1) the instruction sheet. I will compile the suggestions and share them with the design team on Thursday morning.

The final version must be ready before the client presentation next Monday. _____(2). If we miss that deadline, the product launch may be delayed.

Several team members also mentioned that the package photos look too dark. The photographer _____(3) new images tomorrow, so we should have updated files by Friday.

Please keep your comments brief and specific. _____(4).`;

const part6QuestionsById = {
  "r6-001": {
    part: "reading_part_6",
    skill: "text completion - time expression",
    difficulty: "easy",
    scoreBand: "600",
    passageId: "p-r6-weekend-system-update",
    passageTitle: "Notice: Weekend System Update",
    passageText: part6TrainingNotice,
    blankNumber: 1,
    prompt: "Choose the best answer for blank (1).",
    options: ["A. Friday evening", "B. Monday afternoon", "C. next quarter", "D. the customer record"],
    correctOption: "A",
    explanationEn: "The system becomes unavailable at 9 P.M. on Friday, so urgent requests should be completed before Friday evening.",
    explanationKo: "시스템은 금요일 오후 9시부터 사용할 수 없으므로 긴급 고객 요청은 금요일 저녁 전에 완료해야 합니다.",
    koreanLearnerHint: "Part 6에서는 빈칸 주변뿐 아니라 앞 문장의 시간 정보를 연결해야 합니다.",
    vocabularyItems: [
      { word: "urgent request", meaningKo: "긴급 요청", exampleSentence: "Please complete any urgent customer requests before Friday evening." },
      { word: "unavailable", meaningKo: "이용할 수 없는", exampleSentence: "The database will be unavailable during the update." }
    ]
  },
  "r6-002": {
    part: "reading_part_6",
    skill: "text completion - pronoun reference",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r6-weekend-system-update",
    passageTitle: "Notice: Weekend System Update",
    passageText: part6TrainingNotice,
    blankNumber: 2,
    prompt: "Choose the best answer for blank (2).",
    options: ["A. they", "B. it", "C. the employee", "D. the database"],
    correctOption: "C",
    explanationEn: "The sentence needs a person who can record the customer's information, so 'the employee' fits best.",
    explanationKo: "고객 정보를 기록할 주체가 필요하므로 사람을 가리키는 'the employee'가 가장 자연스럽습니다.",
    koreanLearnerHint: "대명사나 명사 선택 문제에서는 실제로 그 행동을 할 수 있는 주체를 확인하세요.",
    vocabularyItems: [
      { word: "record", meaningKo: "기록하다", exampleSentence: "The employee should record the customer's name." },
      { word: "temporary request form", meaningKo: "임시 요청 양식", exampleSentence: "Use the temporary request form during the weekend." }
    ]
  },
  "r6-003": {
    part: "reading_part_6",
    skill: "text completion - transition",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r6-weekend-system-update",
    passageTitle: "Notice: Weekend System Update",
    passageText: part6TrainingNotice,
    blankNumber: 3,
    prompt: "Choose the best answer for blank (3).",
    options: ["A. Instead", "B. Afterward", "C. For example", "D. Otherwise"],
    correctOption: "B",
    explanationEn: "The sentence describes what employees should do after the system becomes available again.",
    explanationKo: "시스템을 다시 사용할 수 있게 된 후 해야 할 일을 말하므로 'Afterward'가 맞습니다.",
    koreanLearnerHint: "전환어 문제는 앞뒤 사건의 시간 순서를 먼저 파악하면 정답을 고르기 쉽습니다.",
    vocabularyItems: [
      { word: "afterward", meaningKo: "그 후에", exampleSentence: "Afterward, employees should enter the requests." },
      { word: "enter into the database", meaningKo: "데이터베이스에 입력하다", exampleSentence: "Requests must be entered into the database." }
    ]
  },
  "r6-004": {
    part: "reading_part_6",
    skill: "text completion - sentence completion",
    difficulty: "hard",
    scoreBand: "800",
    passageId: "p-r6-weekend-system-update",
    passageTitle: "Notice: Weekend System Update",
    passageText: part6TrainingNotice,
    blankNumber: 4,
    prompt: "Choose the phrase that best completes blank (4).",
    options: [
      "A. the update was completed last year",
      "B. customers may be waiting for a response",
      "C. the branch will hire new employees",
      "D. phone numbers are never required"
    ],
    correctOption: "B",
    explanationEn: "Entering weekend requests quickly is important because customers may be waiting for a response.",
    explanationKo: "주말 요청을 빨리 입력해야 하는 이유는 고객들이 답변을 기다리고 있을 수 있기 때문입니다.",
    koreanLearnerHint: "문장 완성 문제에서는 바로 앞 문장의 행동이 왜 중요한지 설명하는 선택지를 찾으세요.",
    vocabularyItems: [
      { word: "wait for a response", meaningKo: "답변을 기다리다", exampleSentence: "Customers may be waiting for a response." },
      { word: "complete an update", meaningKo: "업데이트를 완료하다", exampleSentence: "The IT department completed the update." }
    ]
  },
  "r6-005": {
    part: "reading_part_6",
    skill: "text completion - preposition",
    difficulty: "easy",
    scoreBand: "600",
    passageId: "p-r6-packaging-review",
    passageTitle: "E-mail: Packaging Review",
    passageText: part6TrainingEmail,
    blankNumber: 1,
    prompt: "Choose the best answer for blank (1).",
    options: ["A. improve", "B. improving", "C. to improve", "D. improved"],
    correctOption: "C",
    explanationEn: "After 'suggestions,' the infinitive phrase 'to improve the instruction sheet' explains the purpose.",
    explanationKo: "'suggestions' 뒤에서 목적을 설명하므로 'to improve the instruction sheet'가 자연스럽습니다.",
    koreanLearnerHint: "명사 뒤의 to부정사가 목적이나 용도를 설명하는 경우가 TOEIC에서 자주 나옵니다.",
    vocabularyItems: [
      { word: "instruction sheet", meaningKo: "설명서", exampleSentence: "The instruction sheet should be easier to read." },
      { word: "suggestion", meaningKo: "제안", exampleSentence: "Please send me any suggestions." }
    ]
  }
};

for (const question of mockQuestions) {
  const part6Question = part6QuestionsById[question.id];
  if (part6Question) {
    Object.assign(question, part6Question);
  }
}

mockQuestions.push(
  {
    id: "r6-006",
    part: "reading_part_6",
    skill: "text completion - sentence insertion",
    difficulty: "hard",
    scoreBand: "800",
    passageId: "p-r6-packaging-review",
    passageTitle: "E-mail: Packaging Review",
    passageText: part6TrainingEmail,
    blankNumber: 2,
    prompt: "Choose the sentence that best fits blank (2).",
    options: [
      "A. The sales team will move to a new office.",
      "B. The client will review the updated package at that time.",
      "C. The photographer has already left the company.",
      "D. The instruction sheet was printed last year."
    ],
    correctOption: "B",
    explanationEn: "The sentence explains why the final version must be ready before Monday's client presentation.",
    explanationKo: "월요일 고객 발표 전에 최종본이 준비되어야 하는 이유를 설명하므로 B가 가장 자연스럽습니다.",
    koreanLearnerHint: "문장 삽입 문제에서는 빈칸 뒤의 'that deadline'이 무엇을 가리키는지 확인하세요.",
    vocabularyItems: [
      { word: "final version", meaningKo: "최종본", exampleSentence: "The final version must be ready before Monday." },
      { word: "client presentation", meaningKo: "고객 발표", exampleSentence: "The client presentation is next Monday." }
    ]
  },
  {
    id: "r6-007",
    part: "reading_part_6",
    skill: "text completion - verb tense",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r6-packaging-review",
    passageTitle: "E-mail: Packaging Review",
    passageText: part6TrainingEmail,
    blankNumber: 3,
    prompt: "Choose the best answer for blank (3).",
    options: ["A. took", "B. takes", "C. will take", "D. has taken"],
    correctOption: "C",
    explanationEn: "The action is scheduled for tomorrow, so the future form 'will take' is correct.",
    explanationKo: "내일 예정된 일이므로 미래형 'will take'가 맞습니다.",
    koreanLearnerHint: "tomorrow 같은 시간 표현은 미래 시제를 고르는 강한 단서입니다.",
    vocabularyItems: [
      { word: "photographer", meaningKo: "사진작가", exampleSentence: "The photographer will take new images tomorrow." },
      { word: "updated files", meaningKo: "수정된 파일", exampleSentence: "We should have updated files by Friday." }
    ]
  },
  {
    id: "r6-008",
    part: "reading_part_6",
    skill: "text completion - sentence completion",
    difficulty: "hard",
    scoreBand: "800",
    passageId: "p-r6-packaging-review",
    passageTitle: "E-mail: Packaging Review",
    passageText: part6TrainingEmail,
    blankNumber: 4,
    prompt: "Choose the sentence that best fits blank (4).",
    options: [
      "A. Long explanations will make the review process slower.",
      "B. The cafeteria will be closed during lunch.",
      "C. The old package was delivered to the warehouse.",
      "D. All employees must update their passwords."
    ],
    correctOption: "A",
    explanationEn: "The previous sentence asks for brief and specific comments, so a warning about long explanations fits the context.",
    explanationKo: "앞 문장에서 간단하고 구체적인 의견을 요청했으므로 긴 설명이 검토를 늦춘다는 문장이 문맥에 맞습니다.",
    koreanLearnerHint: "빈칸 앞 문장의 핵심 형용사 brief and specific과 의미가 이어지는 선택지를 고르세요.",
    vocabularyItems: [
      { word: "brief", meaningKo: "간단한", exampleSentence: "Please keep your comments brief." },
      { word: "review process", meaningKo: "검토 과정", exampleSentence: "Long explanations can slow the review process." }
    ]
  }
);

const part6LibraryAnnouncement = `Announcement

To: All City Library Members
Subject: Extended Evening Hours

Beginning June 3, the central library will remain open until 9 P.M. on Tuesdays and Thursdays. The extended hours are intended to support students and workers who cannot visit during the day.

Members who want to use the study rooms after 6 P.M. should reserve a space online _____(1). Reservations can be made up to seven days in advance, and each member may reserve one room for a maximum of two hours.

The library will also offer short research workshops on Thursday evenings. _____(2). Topics will include using academic databases, organizing sources, and preparing citations.

Because staffing will be limited in the evening, members are asked to return borrowed laptops to the service desk before closing. _____(3). Any laptop returned late may result in a temporary borrowing restriction.

We hope the new schedule will make the library more useful for the community. _____(4).`;

const part6SupplierEmail = `E-mail

To: Purchasing Department
From: Martin Keller, OfficePro Supplies
Subject: Delivery Schedule for Order OP-771

Thank you for your order of conference folders and presentation markers. Most of the items are currently in stock and will be shipped from our warehouse tomorrow morning.

However, the navy folders you requested are temporarily unavailable. We expect to receive a new shipment from the manufacturer _____(1). If this schedule is acceptable, the complete order can be delivered to your office next Wednesday.

Another option is to substitute black folders for the navy folders. _____(2). Please let us know by 3 P.M. today which option you prefer.

If we do not receive a response by that time, _____(3). This will prevent the available items from being delayed.

We apologize for the inconvenience and appreciate your patience. _____(4).`;

const part6StaffMemo = `Memo

To: Customer Support Staff
From: Daniel Ortiz, Support Manager
Subject: Updated Chat Response Guidelines

Starting next Monday, all customer chat messages should receive an initial response within three minutes. The first response does not need to solve the issue completely, but it should let the customer know that a support agent is reviewing the request.

When a question requires information from another department, agents should create a follow-up ticket _____(1). The ticket should include the customer's account number, a summary of the issue, and any screenshots provided by the customer.

Agents should avoid using technical terms that customers may not understand. _____(2). Clear explanations reduce repeat questions and improve customer satisfaction.

Supervisors will review chat records twice a week to make sure the new guidelines are being followed. _____(3). Agents who need additional coaching will be invited to a short training session.

Please review the sample responses attached to this memo before Monday. _____(4).`;

mockQuestions.push(
  {
    id: "r6-009",
    part: "reading_part_6",
    skill: "text completion - adverbial phrase",
    difficulty: "easy",
    scoreBand: "600",
    passageId: "p-r6-library-evening-hours",
    passageTitle: "Announcement: Extended Evening Hours",
    passageText: part6LibraryAnnouncement,
    blankNumber: 1,
    prompt: "Choose the best answer for blank (1).",
    options: ["A. in advance", "B. on display", "C. by accident", "D. under repair"],
    correctOption: "A",
    explanationEn: "The next sentence explains that reservations can be made up to seven days before use, so 'in advance' fits.",
    explanationKo: "다음 문장에서 예약을 최대 7일 전에 할 수 있다고 설명하므로 'in advance'가 알맞습니다.",
    koreanLearnerHint: "Part 6에서는 빈칸 바로 뒤 문장이 정답 단서가 되는 경우가 많습니다.",
    vocabularyItems: [
      { word: "in advance", meaningKo: "미리, 사전에", exampleSentence: "Reserve a study room in advance." },
      { word: "study room", meaningKo: "스터디룸", exampleSentence: "Members can reserve a study room online." }
    ]
  },
  {
    id: "r6-010",
    part: "reading_part_6",
    skill: "text completion - sentence insertion",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r6-library-evening-hours",
    passageTitle: "Announcement: Extended Evening Hours",
    passageText: part6LibraryAnnouncement,
    blankNumber: 2,
    prompt: "Choose the sentence that best fits blank (2).",
    options: [
      "A. These sessions are designed for members who need help with school or work projects.",
      "B. The library cafe will stop serving drinks at noon.",
      "C. All books must be returned through the outdoor drop box.",
      "D. The city will replace the library's front windows next year."
    ],
    correctOption: "A",
    explanationEn: "The blank introduces the purpose of the research workshops before listing their topics.",
    explanationKo: "빈칸 뒤에서 워크숍 주제가 이어지므로, 워크숍의 목적을 설명하는 문장이 가장 자연스럽습니다.",
    koreanLearnerHint: "문장 삽입 문제에서는 빈칸 앞의 주제와 빈칸 뒤의 세부 내용을 자연스럽게 연결하는 문장을 찾으세요.",
    vocabularyItems: [
      { word: "research workshop", meaningKo: "자료 조사 워크숍", exampleSentence: "The library offers research workshops." },
      { word: "academic database", meaningKo: "학술 데이터베이스", exampleSentence: "Students can learn to use academic databases." }
    ]
  },
  {
    id: "r6-011",
    part: "reading_part_6",
    skill: "text completion - transition",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r6-library-evening-hours",
    passageTitle: "Announcement: Extended Evening Hours",
    passageText: part6LibraryAnnouncement,
    blankNumber: 3,
    prompt: "Choose the sentence that best fits blank (3).",
    options: [
      "A. This rule helps staff check that all equipment is available for the next day.",
      "B. The workshops will be held in the children's reading area.",
      "C. Members may bring drinks into the study rooms.",
      "D. The library will purchase additional fiction titles."
    ],
    correctOption: "A",
    explanationEn: "The sentence explains why laptops must be returned before closing.",
    explanationKo: "이 문장은 노트북을 폐관 전에 반납해야 하는 이유를 설명합니다.",
    koreanLearnerHint: "앞 문장의 규칙을 왜 지켜야 하는지 설명하는 선택지가 문맥에 맞습니다.",
    vocabularyItems: [
      { word: "borrowed laptop", meaningKo: "대여한 노트북", exampleSentence: "Borrowed laptops must be returned before closing." },
      { word: "borrowing restriction", meaningKo: "대여 제한", exampleSentence: "Late returns may cause a borrowing restriction." }
    ]
  },
  {
    id: "r6-012",
    part: "reading_part_6",
    skill: "text completion - closing sentence",
    difficulty: "hard",
    scoreBand: "800",
    passageId: "p-r6-library-evening-hours",
    passageTitle: "Announcement: Extended Evening Hours",
    passageText: part6LibraryAnnouncement,
    blankNumber: 4,
    prompt: "Choose the sentence that best completes blank (4).",
    options: [
      "A. Feedback about the extended hours may be sent through the library website.",
      "B. The old schedule was printed on blue paper.",
      "C. Study rooms cannot be reserved during regular hours.",
      "D. The library will close permanently next month."
    ],
    correctOption: "A",
    explanationEn: "The closing sentence naturally invites members to give feedback about the new schedule.",
    explanationKo: "마무리 문장으로 새 운영 시간에 대한 의견을 웹사이트로 보낼 수 있다는 안내가 자연스럽습니다.",
    koreanLearnerHint: "마지막 빈칸은 전체 글의 목적과 어울리는 안내나 마무리 문장을 고르는 경우가 많습니다.",
    vocabularyItems: [
      { word: "extended hours", meaningKo: "연장 운영 시간", exampleSentence: "Members can comment on the extended hours." },
      { word: "feedback", meaningKo: "의견, 피드백", exampleSentence: "Feedback may be sent online." }
    ]
  },
  {
    id: "r6-013",
    part: "reading_part_6",
    skill: "text completion - time expression",
    difficulty: "easy",
    scoreBand: "600",
    passageId: "p-r6-supplier-delivery-schedule",
    passageTitle: "E-mail: Delivery Schedule",
    passageText: part6SupplierEmail,
    blankNumber: 1,
    prompt: "Choose the best answer for blank (1).",
    options: ["A. late this week", "B. every morning", "C. before the invoice", "D. under the desk"],
    correctOption: "A",
    explanationEn: "The supplier expects a new shipment soon, and delivery is possible next Wednesday, so 'late this week' fits.",
    explanationKo: "공급업체가 곧 새 물량을 받을 예정이고 다음 주 수요일 배송이 가능하므로 'late this week'가 자연스럽습니다.",
    koreanLearnerHint: "시간 표현은 뒤 문장의 배송 가능 날짜와 논리적으로 맞아야 합니다.",
    vocabularyItems: [
      { word: "temporarily unavailable", meaningKo: "일시적으로 이용 불가능한", exampleSentence: "The navy folders are temporarily unavailable." },
      { word: "manufacturer", meaningKo: "제조업체", exampleSentence: "The manufacturer will send a new shipment." }
    ]
  },
  {
    id: "r6-014",
    part: "reading_part_6",
    skill: "text completion - sentence insertion",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r6-supplier-delivery-schedule",
    passageTitle: "E-mail: Delivery Schedule",
    passageText: part6SupplierEmail,
    blankNumber: 2,
    prompt: "Choose the sentence that best fits blank (2).",
    options: [
      "A. This change would allow us to ship the order immediately.",
      "B. The markers are designed for outdoor advertising.",
      "C. Our accounting department is closed on weekends.",
      "D. The conference room can seat twenty people."
    ],
    correctOption: "A",
    explanationEn: "Using black folders instead would avoid waiting for the navy folders, so immediate shipping is possible.",
    explanationKo: "검은색 폴더로 대체하면 네이비 폴더를 기다릴 필요가 없으므로 즉시 배송이 가능하다는 문장이 자연스럽습니다.",
    koreanLearnerHint: "'Another option' 뒤에는 그 선택지를 고르면 어떤 결과가 생기는지 설명하는 문장이 와야 합니다.",
    vocabularyItems: [
      { word: "substitute", meaningKo: "대체하다", exampleSentence: "Black folders can be substituted for navy folders." },
      { word: "ship immediately", meaningKo: "즉시 배송하다", exampleSentence: "The order can be shipped immediately." }
    ]
  },
  {
    id: "r6-015",
    part: "reading_part_6",
    skill: "text completion - consequence",
    difficulty: "hard",
    scoreBand: "800",
    passageId: "p-r6-supplier-delivery-schedule",
    passageTitle: "E-mail: Delivery Schedule",
    passageText: part6SupplierEmail,
    blankNumber: 3,
    prompt: "Choose the sentence that best fits blank (3).",
    options: [
      "A. we will ship the available items first",
      "B. the warehouse will close permanently",
      "C. your order was delivered yesterday",
      "D. the markers will be removed from the catalog"
    ],
    correctOption: "A",
    explanationEn: "The next sentence says this will prevent available items from being delayed, so shipping available items first fits.",
    explanationKo: "다음 문장에서 사용 가능한 물품의 지연을 막는다고 하므로, 가능한 물품을 먼저 배송한다는 내용이 맞습니다.",
    koreanLearnerHint: "This가 가리키는 행동을 찾으세요. 뒤 문장이 정답의 결과를 설명합니다.",
    vocabularyItems: [
      { word: "available items", meaningKo: "사용 가능한 물품", exampleSentence: "Available items will be shipped first." },
      { word: "delay", meaningKo: "지연시키다", exampleSentence: "This will prevent items from being delayed." }
    ]
  },
  {
    id: "r6-016",
    part: "reading_part_6",
    skill: "text completion - closing sentence",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r6-supplier-delivery-schedule",
    passageTitle: "E-mail: Delivery Schedule",
    passageText: part6SupplierEmail,
    blankNumber: 4,
    prompt: "Choose the sentence that best completes blank (4).",
    options: [
      "A. Please contact me if you have any questions about these options.",
      "B. The folders were displayed near the front entrance.",
      "C. Your office moved to a different city last year.",
      "D. The presentation markers cannot be used on paper."
    ],
    correctOption: "A",
    explanationEn: "The e-mail presents delivery options, so inviting questions about those options is an appropriate closing.",
    explanationKo: "이 이메일은 배송 선택지를 제시하므로 해당 선택지에 대한 질문을 받겠다는 마무리가 적절합니다.",
    koreanLearnerHint: "비즈니스 이메일의 마지막 문장은 보통 문의 안내나 다음 행동을 제시합니다.",
    vocabularyItems: [
      { word: "option", meaningKo: "선택지", exampleSentence: "Please choose one of the options." },
      { word: "contact me", meaningKo: "저에게 연락하다", exampleSentence: "Please contact me with questions." }
    ]
  },
  {
    id: "r6-017",
    part: "reading_part_6",
    skill: "text completion - sequence",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r6-chat-response-guidelines",
    passageTitle: "Memo: Chat Response Guidelines",
    passageText: part6StaffMemo,
    blankNumber: 1,
    prompt: "Choose the best answer for blank (1).",
    options: ["A. before ending the chat", "B. instead of reading the message", "C. after the company picnic", "D. without the customer's name"],
    correctOption: "A",
    explanationEn: "Agents should create a follow-up ticket before ending the chat so the issue can be handled later.",
    explanationKo: "상담원이 채팅을 끝내기 전에 후속 처리 티켓을 만들어야 나중에 문제를 처리할 수 있습니다.",
    koreanLearnerHint: "절차를 설명하는 글에서는 행동의 순서가 중요합니다. 고객과의 채팅이 끝나기 전이 자연스럽습니다.",
    vocabularyItems: [
      { word: "follow-up ticket", meaningKo: "후속 처리 티켓", exampleSentence: "Create a follow-up ticket before ending the chat." },
      { word: "account number", meaningKo: "계정 번호", exampleSentence: "Include the customer's account number." }
    ]
  },
  {
    id: "r6-018",
    part: "reading_part_6",
    skill: "text completion - sentence insertion",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r6-chat-response-guidelines",
    passageTitle: "Memo: Chat Response Guidelines",
    passageText: part6StaffMemo,
    blankNumber: 2,
    prompt: "Choose the sentence that best fits blank (2).",
    options: [
      "A. Instead, they should use simple language and provide examples when possible.",
      "B. Customers will be asked to install new office furniture.",
      "C. The support office will close every Tuesday morning.",
      "D. Screenshots should be deleted before tickets are created."
    ],
    correctOption: "A",
    explanationEn: "The previous sentence warns against technical terms, so using simple language is the logical alternative.",
    explanationKo: "앞 문장에서 전문 용어 사용을 피하라고 했으므로, 대신 쉬운 표현과 예시를 사용하라는 문장이 자연스럽습니다.",
    koreanLearnerHint: "'Instead'는 앞 문장과 반대되는 대안을 제시할 때 쓰입니다.",
    vocabularyItems: [
      { word: "technical term", meaningKo: "전문 용어", exampleSentence: "Avoid technical terms customers may not understand." },
      { word: "simple language", meaningKo: "쉬운 표현", exampleSentence: "Use simple language in chat responses." }
    ]
  },
  {
    id: "r6-019",
    part: "reading_part_6",
    skill: "text completion - result",
    difficulty: "hard",
    scoreBand: "800",
    passageId: "p-r6-chat-response-guidelines",
    passageTitle: "Memo: Chat Response Guidelines",
    passageText: part6StaffMemo,
    blankNumber: 3,
    prompt: "Choose the sentence that best fits blank (3).",
    options: [
      "A. The results of these reviews will be shared privately with each agent.",
      "B. The company cafeteria will add more lunch options.",
      "C. Customers should call the sales office for product prices.",
      "D. The screenshots were taken during last year's training."
    ],
    correctOption: "A",
    explanationEn: "The sentence explains what will happen after supervisors review chat records.",
    explanationKo: "이 문장은 감독자가 채팅 기록을 검토한 뒤 그 결과가 어떻게 전달되는지를 설명합니다.",
    koreanLearnerHint: "앞 문장의 review와 뒤 문장의 coaching을 연결하는 중간 단계가 필요합니다.",
    vocabularyItems: [
      { word: "review chat records", meaningKo: "채팅 기록을 검토하다", exampleSentence: "Supervisors review chat records twice a week." },
      { word: "privately", meaningKo: "비공개로, 개인적으로", exampleSentence: "Feedback will be shared privately." }
    ]
  },
  {
    id: "r6-020",
    part: "reading_part_6",
    skill: "text completion - closing instruction",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r6-chat-response-guidelines",
    passageTitle: "Memo: Chat Response Guidelines",
    passageText: part6StaffMemo,
    blankNumber: 4,
    prompt: "Choose the sentence that best completes blank (4).",
    options: [
      "A. They show how to apply the new guidelines in common situations.",
      "B. The company will replace all office chairs next month.",
      "C. Customers may submit expense reports online.",
      "D. The warehouse manager will update the delivery schedule."
    ],
    correctOption: "A",
    explanationEn: "The attached sample responses are useful because they demonstrate how to use the new guidelines.",
    explanationKo: "첨부된 예시 답변은 새 지침을 일반적인 상황에 적용하는 방법을 보여 주므로 유용합니다.",
    koreanLearnerHint: "They가 바로 앞의 sample responses를 가리킨다는 점을 확인하세요.",
    vocabularyItems: [
      { word: "sample response", meaningKo: "예시 답변", exampleSentence: "Review the sample responses before Monday." },
      { word: "apply guidelines", meaningKo: "지침을 적용하다", exampleSentence: "The examples show how to apply the guidelines." }
    ]
  }
);

const officeMoveEmail = `E-mail

To: All Marketing Department Employees
From: Jenna Walsh, Office Services
Subject: Temporary Office Move

As you know, renovation work on the fifth floor will begin on Monday, May 12. During the renovation, the marketing department will temporarily move to the training center on the second floor.

Please pack all personal items and important documents by 4 P.M. this Friday. Labeled boxes will be delivered to your desks tomorrow morning. Computers and desk phones will be moved by the technical support team over the weekend.

The temporary workspace will be available starting Monday at 8 A.M. If you need access to the fifth floor during the renovation, please contact Office Services at extension 442.`;

mockQuestions.push(
  {
    id: "r7-006",
    part: "reading_part_7",
    skill: "reading comprehension - email purpose",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-office-move-email",
    passageTitle: "E-mail: Temporary Office Move",
    passageText: officeMoveEmail,
    prompt: "Why was the e-mail sent?",
    options: [
      "A. To explain a temporary office relocation.",
      "B. To announce a new marketing campaign.",
      "C. To request volunteers for a renovation project.",
      "D. To invite employees to a training session."
    ],
    correctOption: "A",
    explanationEn: "The e-mail explains that the marketing department will temporarily move during fifth-floor renovation work.",
    explanationKo: "이 이메일은 5층 공사 동안 마케팅 부서가 임시로 이동한다는 내용을 안내하기 위해 보내졌습니다.",
    koreanLearnerHint: "purpose 문제는 제목과 첫 단락에서 글의 목적을 먼저 파악하세요.",
    vocabularyItems: [
      { word: "temporary", meaningKo: "임시의", exampleSentence: "The department will move to a temporary workspace." },
      { word: "relocation", meaningKo: "이전, 이동", exampleSentence: "The e-mail explains the office relocation." }
    ]
  },
  {
    id: "r7-007",
    part: "reading_part_7",
    skill: "reading comprehension - detail",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-office-move-email",
    passageTitle: "E-mail: Temporary Office Move",
    passageText: officeMoveEmail,
    prompt: "Where will the marketing department work during the renovation?",
    options: [
      "A. In the training center on the second floor.",
      "B. In the lobby conference room.",
      "C. On the fifth floor near Office Services.",
      "D. In employees' home offices."
    ],
    correctOption: "A",
    explanationEn: "The e-mail says the marketing department will move to the training center on the second floor.",
    explanationKo: "이메일에서 마케팅 부서가 2층 교육 센터로 이동한다고 했습니다.",
    koreanLearnerHint: "Where 문제에서는 on the second floor, in the training center 같은 장소 표현을 찾으세요.",
    vocabularyItems: [
      { word: "training center", meaningKo: "교육 센터", exampleSentence: "The team will work in the training center." },
      { word: "renovation", meaningKo: "개보수, 공사", exampleSentence: "Renovation work will begin on Monday." }
    ]
  },
  {
    id: "r7-008",
    part: "reading_part_7",
    skill: "reading comprehension - deadline",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-office-move-email",
    passageTitle: "E-mail: Temporary Office Move",
    passageText: officeMoveEmail,
    prompt: "What should employees do by 4 P.M. this Friday?",
    options: [
      "A. Pack personal items and important documents.",
      "B. Move their computers to the second floor.",
      "C. Call technical support.",
      "D. Pick up labeled boxes from Office Services."
    ],
    correctOption: "A",
    explanationEn: "Employees are asked to pack personal items and important documents by 4 P.M. Friday.",
    explanationKo: "직원들은 금요일 오후 4시까지 개인 물품과 중요 문서를 정리해야 합니다.",
    koreanLearnerHint: "by 4 P.M. this Friday는 마감시간이므로, 그 시간까지 해야 하는 행동을 찾으세요.",
    vocabularyItems: [
      { word: "personal items", meaningKo: "개인 물품", exampleSentence: "Please pack all personal items." },
      { word: "important documents", meaningKo: "중요 문서", exampleSentence: "Important documents should be packed by Friday." }
    ]
  },
  {
    id: "r7-009",
    part: "reading_part_7",
    skill: "reading comprehension - inference",
    difficulty: "hard",
    scoreBand: "800",
    passageId: "p-r7-office-move-email",
    passageTitle: "E-mail: Temporary Office Move",
    passageText: officeMoveEmail,
    prompt: "What can be inferred about the technical support team?",
    options: [
      "A. They will move computer equipment over the weekend.",
      "B. They will repair the fifth-floor elevators.",
      "C. They will label boxes tomorrow morning.",
      "D. They will manage access to Office Services."
    ],
    correctOption: "A",
    explanationEn: "The e-mail says computers and desk phones will be moved by the technical support team over the weekend.",
    explanationKo: "이메일에서 컴퓨터와 전화기는 주말 동안 기술 지원 팀이 이동한다고 했습니다.",
    koreanLearnerHint: "inference 문제지만 근거는 본문에 있습니다. technical support team과 over the weekend를 연결하세요.",
    vocabularyItems: [
      { word: "technical support", meaningKo: "기술 지원", exampleSentence: "Technical support will move the computers." },
      { word: "desk phone", meaningKo: "사무실 전화기", exampleSentence: "Desk phones will be moved over the weekend." }
    ]
  }
);

const harborNewsArticle = `Article

Harbor City Business Journal

Local technology firm NexaCore announced on Tuesday that it will open a customer support center in Harbor City this September. The new center is expected to create 85 full-time jobs, including positions in technical support, account management, and training.

According to CEO Elena Morris, Harbor City was selected because of its strong public transportation network and its growing pool of bilingual workers. The company plans to renovate a vacant building on Mason Street and begin hiring in June.

NexaCore currently provides software services to small and midsize retailers in five countries. The company said the new center will allow it to offer longer support hours for clients in different time zones.`;

const hotelNotice = `Notice

To: Guests of the Bellview Hotel

The rooftop lounge will be closed from April 3 through April 6 while new outdoor lighting is installed. Breakfast service will continue as usual in the first-floor dining room.

Guests who reserved the rooftop lounge for private events during this period have been contacted by the events team. These events will be moved to the Garden Room unless another arrangement has been requested.

We apologize for the inconvenience and appreciate your understanding.`;

const softwareWebPage = `Web Page

TaskPilot Project Management Software

TaskPilot helps small teams plan projects, assign tasks, and track deadlines. The software includes shared calendars, automatic deadline reminders, and weekly progress reports.

Monthly Plan: $18 per user
Annual Plan: $180 per user

New customers who register before July 31 will receive a free 30-minute online training session. To schedule the session, customers should click the Training Request button after creating an account.`;

const cameraEmailThread = `E-mail 1

To: Customer Service, Vista Camera
From: Paul Nguyen
Subject: Order VC-7821

I ordered a VistaPro camera case last week, but I received a lens cleaning kit instead. I need the case before my business trip on Thursday. Could you send the correct item by express delivery?

E-mail 2

To: Paul Nguyen
From: Customer Service, Vista Camera

We are sorry for the shipping mistake. The correct camera case has been sent by express delivery and should arrive Wednesday morning. You may keep the lens cleaning kit at no charge.`;

mockQuestions.push(
  {
    id: "r7-010",
    part: "reading_part_7",
    skill: "reading comprehension - article main idea",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-harbor-news-article",
    passageTitle: "Article: New Support Center",
    passageText: harborNewsArticle,
    prompt: "What is the article mainly about?",
    options: [
      "A. A company opening a new support center.",
      "B. A retailer closing stores in five countries.",
      "C. A city reducing public transportation service.",
      "D. A training program for software engineers."
    ],
    correctOption: "A",
    explanationEn: "The article announces that NexaCore will open a customer support center in Harbor City.",
    explanationKo: "기사에서는 NexaCore가 Harbor City에 고객 지원 센터를 열 예정이라고 발표합니다.",
    koreanLearnerHint: "주제 문제는 보통 제목과 첫 단락의 핵심 내용을 함께 보면 풀기 쉽습니다.",
    vocabularyItems: [
      { word: "customer support center", meaningKo: "고객 지원 센터", exampleSentence: "The company will open a customer support center." },
      { word: "full-time job", meaningKo: "정규직 일자리", exampleSentence: "The center will create full-time jobs." }
    ]
  },
  {
    id: "r7-011",
    part: "reading_part_7",
    skill: "reading comprehension - detail",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-harbor-news-article",
    passageTitle: "Article: New Support Center",
    passageText: harborNewsArticle,
    prompt: "When does NexaCore plan to begin hiring?",
    options: ["A. In June.", "B. In July.", "C. In September.", "D. On Tuesday."],
    correctOption: "A",
    explanationEn: "The article says the company plans to begin hiring in June.",
    explanationKo: "기사에서는 회사가 6월에 채용을 시작할 계획이라고 말합니다.",
    koreanLearnerHint: "날짜가 여러 개 나오면 역할을 구분하세요. 9월은 개소 시기이고, 6월은 채용 시작 시기입니다.",
    vocabularyItems: [
      { word: "begin hiring", meaningKo: "채용을 시작하다", exampleSentence: "The company plans to begin hiring in June." },
      { word: "renovate", meaningKo: "개조하다, 보수하다", exampleSentence: "They will renovate a vacant building." }
    ]
  },
  {
    id: "r7-012",
    part: "reading_part_7",
    skill: "reading comprehension - inference",
    difficulty: "hard",
    scoreBand: "800",
    passageId: "p-r7-harbor-news-article",
    passageTitle: "Article: New Support Center",
    passageText: harborNewsArticle,
    prompt: "Why was Harbor City selected?",
    options: [
      "A. It has good transportation and bilingual workers.",
      "B. It has the lowest office rents in the country.",
      "C. It is where NexaCore was founded.",
      "D. It already has many NexaCore retail stores."
    ],
    correctOption: "A",
    explanationEn: "The CEO mentions the transportation network and bilingual workers as reasons for choosing the city.",
    explanationKo: "CEO는 이 도시를 선택한 이유로 교통망과 이중언어 구사 인력을 언급합니다.",
    koreanLearnerHint: "why/inference 문제에서는 본문에서 인용된 사람이 말한 이유를 정확히 연결하세요.",
    vocabularyItems: [
      { word: "bilingual", meaningKo: "이중언어를 구사하는", exampleSentence: "The city has many bilingual workers." },
      { word: "time zone", meaningKo: "시간대", exampleSentence: "Clients are in different time zones." }
    ]
  },
  {
    id: "r7-013",
    part: "reading_part_7",
    skill: "reading comprehension - notice purpose",
    difficulty: "easy",
    scoreBand: "600",
    passageId: "p-r7-hotel-notice",
    passageTitle: "Notice: Rooftop Lounge Closure",
    passageText: hotelNotice,
    prompt: "Why will the rooftop lounge be closed?",
    options: [
      "A. New outdoor lighting will be installed.",
      "B. The dining room is being repaired.",
      "C. The hotel is hosting a private event.",
      "D. Breakfast service has been canceled."
    ],
    correctOption: "A",
    explanationEn: "The notice says the lounge will close while new outdoor lighting is installed.",
    explanationKo: "공지에서는 새 야외 조명을 설치하는 동안 라운지가 닫힌다고 말합니다.",
    koreanLearnerHint: "'while new outdoor lighting is installed'라는 표현이 폐쇄 이유를 알려 줍니다.",
    vocabularyItems: [
      { word: "rooftop lounge", meaningKo: "옥상 라운지", exampleSentence: "The rooftop lounge will be closed." },
      { word: "install lighting", meaningKo: "조명을 설치하다", exampleSentence: "Workers will install new lighting." }
    ]
  },
  {
    id: "r7-014",
    part: "reading_part_7",
    skill: "reading comprehension - detail",
    difficulty: "easy",
    scoreBand: "600",
    passageId: "p-r7-hotel-notice",
    passageTitle: "Notice: Rooftop Lounge Closure",
    passageText: hotelNotice,
    prompt: "Where will breakfast be served during the closure?",
    options: [
      "A. In the first-floor dining room.",
      "B. In the Garden Room.",
      "C. On the rooftop lounge.",
      "D. At the events desk."
    ],
    correctOption: "A",
    explanationEn: "Breakfast service will continue in the first-floor dining room.",
    explanationKo: "아침 식사 서비스는 1층 식당에서 계속 제공됩니다.",
    koreanLearnerHint: "행사 장소와 아침 식사 장소를 혼동하지 마세요.",
    vocabularyItems: [
      { word: "as usual", meaningKo: "평소처럼", exampleSentence: "Breakfast will continue as usual." },
      { word: "dining room", meaningKo: "식당", exampleSentence: "Breakfast is served in the dining room." }
    ]
  },
  {
    id: "r7-015",
    part: "reading_part_7",
    skill: "reading comprehension - implication",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-hotel-notice",
    passageTitle: "Notice: Rooftop Lounge Closure",
    passageText: hotelNotice,
    prompt: "What will happen to most private events scheduled in the rooftop lounge during this period?",
    options: [
      "A. They will be moved to the Garden Room.",
      "B. They will be canceled automatically.",
      "C. They will be held in the dining room.",
      "D. They will be delayed until April 6."
    ],
    correctOption: "A",
    explanationEn: "The notice says these events will be moved to the Garden Room unless another arrangement was requested.",
    explanationKo: "공지에서는 다른 조정 요청이 없는 경우 해당 행사들이 Garden Room으로 옮겨진다고 말합니다.",
    koreanLearnerHint: "'Unless'는 예외를 나타냅니다. 여기서는 일반적인 조치가 정답입니다.",
    vocabularyItems: [
      { word: "arrangement", meaningKo: "조정, 준비", exampleSentence: "Another arrangement can be requested." },
      { word: "private event", meaningKo: "비공개 행사", exampleSentence: "Private events will be moved." }
    ]
  },
  {
    id: "r7-016",
    part: "reading_part_7",
    skill: "reading comprehension - web page detail",
    difficulty: "easy",
    scoreBand: "600",
    passageId: "p-r7-software-web-page",
    passageTitle: "Web Page: TaskPilot Software",
    passageText: softwareWebPage,
    prompt: "What is TaskPilot used for?",
    options: [
      "A. Managing projects and deadlines.",
      "B. Editing product photographs.",
      "C. Booking business trips.",
      "D. Processing customer refunds."
    ],
    correctOption: "A",
    explanationEn: "The web page says TaskPilot helps teams plan projects, assign tasks, and track deadlines.",
    explanationKo: "웹페이지에서는 TaskPilot이 팀의 프로젝트 계획, 업무 배정, 마감 추적을 돕는다고 말합니다.",
    koreanLearnerHint: "웹페이지의 첫 문장은 제품의 주요 기능을 설명하는 경우가 많습니다.",
    vocabularyItems: [
      { word: "assign tasks", meaningKo: "업무를 배정하다", exampleSentence: "Managers can assign tasks to team members." },
      { word: "track deadlines", meaningKo: "마감일을 추적하다", exampleSentence: "The software tracks deadlines." }
    ]
  },
  {
    id: "r7-017",
    part: "reading_part_7",
    skill: "reading comprehension - price comparison",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-software-web-page",
    passageTitle: "Web Page: TaskPilot Software",
    passageText: softwareWebPage,
    prompt: "How much does the annual plan cost per user?",
    options: ["A. $18.", "B. $30.", "C. $180.", "D. $216."],
    correctOption: "C",
    explanationEn: "The annual plan is listed as $180 per user.",
    explanationKo: "연간 요금제는 사용자당 180달러로 표시되어 있습니다.",
    koreanLearnerHint: "TOEIC 가격 문제에서는 월간/연간 요금이 함께 나오므로 정확한 요금제를 맞춰 보세요.",
    vocabularyItems: [
      { word: "annual plan", meaningKo: "연간 요금제", exampleSentence: "The annual plan costs $180 per user." },
      { word: "per user", meaningKo: "사용자당", exampleSentence: "The price is $18 per user." }
    ]
  },
  {
    id: "r7-018",
    part: "reading_part_7",
    skill: "reading comprehension - condition",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-software-web-page",
    passageTitle: "Web Page: TaskPilot Software",
    passageText: softwareWebPage,
    prompt: "What must new customers do to receive a free training session?",
    options: [
      "A. Register before July 31.",
      "B. Buy ten user accounts.",
      "C. Submit a weekly progress report.",
      "D. Choose the monthly plan."
    ],
    correctOption: "A",
    explanationEn: "New customers who register before July 31 receive a free training session.",
    explanationKo: "7월 31일 전에 등록하는 신규 고객은 무료 교육 세션을 받습니다.",
    koreanLearnerHint: "'Before July 31'가 무료 세션을 받기 위한 조건입니다.",
    vocabularyItems: [
      { word: "register", meaningKo: "등록하다", exampleSentence: "Customers must register before July 31." },
      { word: "training session", meaningKo: "교육 세션", exampleSentence: "They receive a free training session." }
    ]
  },
  {
    id: "r7-019",
    part: "reading_part_7",
    skill: "reading comprehension - double passage detail",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-camera-email-thread",
    passageTitle: "E-mail Thread: Incorrect Shipment",
    passageText: cameraEmailThread,
    prompt: "What problem does Mr. Nguyen report?",
    options: [
      "A. He received the wrong item.",
      "B. His camera was damaged during shipping.",
      "C. His business trip was canceled.",
      "D. He was charged twice for one order."
    ],
    correctOption: "A",
    explanationEn: "He ordered a camera case but received a lens cleaning kit instead.",
    explanationKo: "그는 카메라 케이스를 주문했지만 대신 렌즈 청소 키트를 받았습니다.",
    koreanLearnerHint: "이중 지문에서는 첫 번째 글의 문제와 두 번째 글의 해결책을 연결하세요.",
    vocabularyItems: [
      { word: "instead", meaningKo: "대신에", exampleSentence: "He received a cleaning kit instead." },
      { word: "business trip", meaningKo: "출장", exampleSentence: "He needs the case before his business trip." }
    ]
  },
  {
    id: "r7-020",
    part: "reading_part_7",
    skill: "reading comprehension - double passage detail",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-camera-email-thread",
    passageTitle: "E-mail Thread: Incorrect Shipment",
    passageText: cameraEmailThread,
    prompt: "When should the correct camera case arrive?",
    options: ["A. Wednesday morning.", "B. Thursday afternoon.", "C. Last week.", "D. Next Monday."],
    correctOption: "A",
    explanationEn: "Customer service says the case should arrive Wednesday morning.",
    explanationKo: "고객 서비스 담당자는 케이스가 수요일 아침에 도착할 것이라고 말합니다.",
    koreanLearnerHint: "첫 번째 이메일은 필요한 시점을 말하고, 두 번째 이메일은 실제 도착 예정 시점을 말합니다.",
    vocabularyItems: [
      { word: "express delivery", meaningKo: "특급 배송", exampleSentence: "The item was sent by express delivery." },
      { word: "arrive", meaningKo: "도착하다", exampleSentence: "The case should arrive Wednesday morning." }
    ]
  },
  {
    id: "r7-021",
    part: "reading_part_7",
    skill: "reading comprehension - double passage inference",
    difficulty: "hard",
    scoreBand: "800",
    passageId: "p-r7-camera-email-thread",
    passageTitle: "E-mail Thread: Incorrect Shipment",
    passageText: cameraEmailThread,
    prompt: "What is Mr. Nguyen allowed to do?",
    options: [
      "A. Keep the lens cleaning kit for free.",
      "B. Return the camera case after his trip.",
      "C. Cancel the express delivery fee.",
      "D. Exchange his camera for a new model."
    ],
    correctOption: "A",
    explanationEn: "Customer service says he may keep the lens cleaning kit at no charge.",
    explanationKo: "고객 서비스 담당자는 렌즈 청소 키트를 무료로 보관해도 된다고 말합니다.",
    koreanLearnerHint: "'At no charge'는 비용을 지불할 필요가 없다는 뜻입니다.",
    vocabularyItems: [
      { word: "at no charge", meaningKo: "무료로", exampleSentence: "He may keep the kit at no charge." },
      { word: "shipping mistake", meaningKo: "배송 실수", exampleSentence: "The company apologized for the shipping mistake." }
    ]
  }
);

const warehousePickupNotice = `Notice

Harborwide Logistics
Updated Pickup Procedure

Starting Monday, all drivers picking up packages from Dock 3 must check in at the security office before entering the loading area. Drivers will receive a numbered pickup card and should show it to the dock coordinator.

Packages scheduled for same-day pickup will be held until 5:30 P.M. Any package not collected by that time will be moved to overnight storage and must be requested again the following business day.

To avoid delays, customers should include a mobile phone number when arranging pickup service. The warehouse team will send a text message when packages are ready.`;

const conferenceSchedule = `Conference Program

Green Office Solutions Forum
Friday, June 20

9:00 A.M. - Registration and Coffee - Main Lobby
9:45 A.M. - Opening Remarks - Hall A
10:30 A.M. - Reducing Energy Use in Small Offices - Hall B
12:00 P.M. - Lunch - Garden Terrace
1:15 P.M. - Choosing Sustainable Office Supplies - Hall B
2:45 P.M. - Panel Discussion: Managing Shared Workspaces - Hall A
4:00 P.M. - Closing Reception - Main Lobby

Participants who reserved a printed workbook may pick it up at the registration desk before 10 A.M. Digital copies will be sent by e-mail after the forum.`;

const returnPolicyAndEmail = `Web Page

Northstar Electronics Return Policy

Most items may be returned within 30 days of purchase. Products must be in their original packaging and include all accessories. Refunds are issued to the original payment method within five business days after the returned item is inspected.

Opened software cannot be returned, but it may be exchanged if the activation code does not work. Customers should contact support before mailing any software product.

E-mail

To: Support, Northstar Electronics
From: Elena Martin
Subject: Exchange Request

I purchased the StudioEdit software package on March 3, but the activation code printed inside the box is not accepted by the program. The box has been opened, but all materials are still included. Could you let me know whether I should mail it back or bring it to the downtown store?`;

const financeMemo = `Memo

To: All Department Managers
From: Finance Office
Subject: Travel Expense Reports

Beginning next month, travel expense reports must be submitted within seven days of the employee's return. Reports submitted after that period may not be processed until the following pay cycle.

Meal receipts should list the names of all employees who attended the meal. Taxi receipts must show the starting point and destination. If a receipt is missing, managers should attach a short explanation before approving the report.

The Finance Office will hold a 20-minute online briefing on Friday at 3 P.M. to explain the updated form. A recording will be posted on the company intranet later that afternoon.`;

mockQuestions.push(
  {
    id: "r7-022",
    part: "reading_part_7",
    skill: "reading comprehension - notice purpose",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-warehouse-pickup-notice",
    passageTitle: "Notice: Updated Pickup Procedure",
    passageText: warehousePickupNotice,
    prompt: "What is the notice mainly about?",
    options: [
      "A. A new procedure for package pickup.",
      "B. A change in warehouse hiring policy.",
      "C. A discount for overnight storage.",
      "D. A schedule for driver training."
    ],
    correctOption: "A",
    explanationEn: "The notice explains that drivers must check in and follow a new pickup procedure at Dock 3.",
    explanationKo: "이 공지는 Dock 3에서 운전자가 체크인하고 새로운 픽업 절차를 따라야 한다는 내용을 설명합니다.",
    koreanLearnerHint: "공지의 제목과 첫 단락은 보통 전체 목적을 알려 줍니다. 'Updated Pickup Procedure'가 핵심 단서입니다.",
    vocabularyItems: [
      { word: "pickup procedure", meaningKo: "픽업 절차", exampleSentence: "The pickup procedure starts on Monday." },
      { word: "loading area", meaningKo: "하역 구역", exampleSentence: "Drivers must check in before entering the loading area." }
    ]
  },
  {
    id: "r7-023",
    part: "reading_part_7",
    skill: "reading comprehension - detail",
    difficulty: "easy",
    scoreBand: "600",
    passageId: "p-r7-warehouse-pickup-notice",
    passageTitle: "Notice: Updated Pickup Procedure",
    passageText: warehousePickupNotice,
    prompt: "What must drivers do before entering the loading area?",
    options: [
      "A. Check in at the security office.",
      "B. Call the customer directly.",
      "C. Pay an overnight storage fee.",
      "D. Send a text message to the warehouse team."
    ],
    correctOption: "A",
    explanationEn: "The notice says drivers must check in at the security office before entering the loading area.",
    explanationKo: "공지에는 운전자가 하역 구역에 들어가기 전에 보안 사무실에서 체크인해야 한다고 되어 있습니다.",
    koreanLearnerHint: "'before entering' 뒤에 요구되는 행동을 찾으면 정답을 고를 수 있습니다.",
    vocabularyItems: [
      { word: "check in", meaningKo: "체크인하다, 접수하다", exampleSentence: "Drivers must check in first." },
      { word: "security office", meaningKo: "보안 사무실", exampleSentence: "The security office gives drivers a pickup card." }
    ]
  },
  {
    id: "r7-024",
    part: "reading_part_7",
    skill: "reading comprehension - inference",
    difficulty: "hard",
    scoreBand: "800",
    passageId: "p-r7-warehouse-pickup-notice",
    passageTitle: "Notice: Updated Pickup Procedure",
    passageText: warehousePickupNotice,
    prompt: "What will probably happen if a same-day package is not picked up by 5:30 P.M.?",
    options: [
      "A. It will be moved to overnight storage.",
      "B. It will be delivered to the customer automatically.",
      "C. The driver will receive a new pickup card.",
      "D. The warehouse team will cancel the order."
    ],
    correctOption: "A",
    explanationEn: "The notice states that packages not collected by 5:30 P.M. will be moved to overnight storage.",
    explanationKo: "공지에는 오후 5시 30분까지 수거되지 않은 물품은 야간 보관 장소로 옮겨진다고 되어 있습니다.",
    koreanLearnerHint: "시간 조건이 있는 문제에서는 해당 시간 뒤에 어떤 조치가 이어지는지 확인하세요.",
    vocabularyItems: [
      { word: "same-day pickup", meaningKo: "당일 픽업", exampleSentence: "Same-day pickup ends at 5:30 P.M." },
      { word: "overnight storage", meaningKo: "야간 보관", exampleSentence: "The package was moved to overnight storage." }
    ]
  },
  {
    id: "r7-025",
    part: "reading_part_7",
    skill: "reading comprehension - schedule detail",
    difficulty: "easy",
    scoreBand: "600",
    passageId: "p-r7-green-office-forum",
    passageTitle: "Schedule: Green Office Solutions Forum",
    passageText: conferenceSchedule,
    prompt: "Where will the opening remarks take place?",
    options: ["A. Hall A.", "B. Hall B.", "C. Garden Terrace.", "D. Main Lobby."],
    correctOption: "A",
    explanationEn: "The schedule lists Opening Remarks at 9:45 A.M. in Hall A.",
    explanationKo: "일정표에는 오전 9시 45분 Opening Remarks가 Hall A에서 열린다고 되어 있습니다.",
    koreanLearnerHint: "일정표 문제는 행사명, 시간, 장소를 한 줄에서 정확히 맞춰 읽어야 합니다.",
    vocabularyItems: [
      { word: "opening remarks", meaningKo: "개회사", exampleSentence: "Opening remarks begin at 9:45 A.M." },
      { word: "take place", meaningKo: "열리다", exampleSentence: "The session takes place in Hall A." }
    ]
  },
  {
    id: "r7-026",
    part: "reading_part_7",
    skill: "reading comprehension - schedule detail",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-green-office-forum",
    passageTitle: "Schedule: Green Office Solutions Forum",
    passageText: conferenceSchedule,
    prompt: "What is scheduled for 1:15 P.M.?",
    options: [
      "A. Choosing Sustainable Office Supplies.",
      "B. Reducing Energy Use in Small Offices.",
      "C. Managing Shared Workspaces.",
      "D. Registration and Coffee."
    ],
    correctOption: "A",
    explanationEn: "At 1:15 P.M., the schedule lists 'Choosing Sustainable Office Supplies.'",
    explanationKo: "오후 1시 15분에는 'Choosing Sustainable Office Supplies' 세션이 예정되어 있습니다.",
    koreanLearnerHint: "비슷한 세션 제목이 여러 개 있으므로 시간과 제목을 함께 확인해야 합니다.",
    vocabularyItems: [
      { word: "sustainable", meaningKo: "지속 가능한", exampleSentence: "The session is about sustainable office supplies." },
      { word: "office supplies", meaningKo: "사무용품", exampleSentence: "The company buys office supplies every month." }
    ]
  },
  {
    id: "r7-027",
    part: "reading_part_7",
    skill: "reading comprehension - detail",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-green-office-forum",
    passageTitle: "Schedule: Green Office Solutions Forum",
    passageText: conferenceSchedule,
    prompt: "What is mentioned about digital copies of the workbook?",
    options: [
      "A. They will be sent by e-mail after the forum.",
      "B. They must be picked up before 10 A.M.",
      "C. They are available only at the Garden Terrace.",
      "D. They cost extra for participants."
    ],
    correctOption: "A",
    explanationEn: "The schedule says digital copies will be sent by e-mail after the forum.",
    explanationKo: "일정표에는 디지털 사본이 포럼 후에 이메일로 발송된다고 되어 있습니다.",
    koreanLearnerHint: "printed workbook과 digital copies의 처리 방식이 다릅니다. 두 정보를 구분하세요.",
    vocabularyItems: [
      { word: "digital copy", meaningKo: "디지털 사본", exampleSentence: "Digital copies will be sent by e-mail." },
      { word: "registration desk", meaningKo: "등록 데스크", exampleSentence: "Pick up the workbook at the registration desk." }
    ]
  },
  {
    id: "r7-028",
    part: "reading_part_7",
    skill: "reading comprehension - double passage detail",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-return-policy-email",
    passageTitle: "Web Page and E-mail: Software Exchange",
    passageText: returnPolicyAndEmail,
    prompt: "What problem does Ms. Martin report?",
    options: [
      "A. The activation code is not accepted.",
      "B. A package was delivered to the wrong store.",
      "C. She was charged twice for software.",
      "D. Some accessories were missing from a device."
    ],
    correctOption: "A",
    explanationEn: "Ms. Martin says the activation code printed inside the box is not accepted by the program.",
    explanationKo: "Martin 씨는 상자 안에 인쇄된 활성화 코드가 프로그램에서 받아들여지지 않는다고 말합니다.",
    koreanLearnerHint: "이중 지문에서는 이메일의 구체적인 문제를 먼저 찾고, 웹페이지의 규칙과 연결합니다.",
    vocabularyItems: [
      { word: "activation code", meaningKo: "활성화 코드", exampleSentence: "The activation code does not work." },
      { word: "exchange request", meaningKo: "교환 요청", exampleSentence: "She sent an exchange request to support." }
    ]
  },
  {
    id: "r7-029",
    part: "reading_part_7",
    skill: "reading comprehension - double passage inference",
    difficulty: "hard",
    scoreBand: "800",
    passageId: "p-r7-return-policy-email",
    passageTitle: "Web Page and E-mail: Software Exchange",
    passageText: returnPolicyAndEmail,
    prompt: "According to the policy, what is Ms. Martin most likely eligible for?",
    options: [
      "A. An exchange of the opened software.",
      "B. An automatic cash refund.",
      "C. A refund without inspection.",
      "D. A replacement for missing accessories."
    ],
    correctOption: "A",
    explanationEn: "Opened software cannot be returned, but it may be exchanged if the activation code does not work.",
    explanationKo: "개봉한 소프트웨어는 반품할 수 없지만, 활성화 코드가 작동하지 않으면 교환할 수 있습니다.",
    koreanLearnerHint: "정책의 예외 조건과 이메일의 문제를 연결해야 합니다. 'activation code does not work'가 핵심입니다.",
    vocabularyItems: [
      { word: "be eligible for", meaningKo: "~을 받을 자격이 있다", exampleSentence: "She is eligible for an exchange." },
      { word: "opened software", meaningKo: "개봉한 소프트웨어", exampleSentence: "Opened software cannot be returned." }
    ]
  },
  {
    id: "r7-030",
    part: "reading_part_7",
    skill: "reading comprehension - double passage detail",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-return-policy-email",
    passageTitle: "Web Page and E-mail: Software Exchange",
    passageText: returnPolicyAndEmail,
    prompt: "What does the policy advise customers to do before mailing software products?",
    options: [
      "A. Contact support.",
      "B. Remove all accessories.",
      "C. Wait five business days.",
      "D. Visit the downtown store."
    ],
    correctOption: "A",
    explanationEn: "The policy says customers should contact support before mailing any software product.",
    explanationKo: "정책에는 소프트웨어 제품을 우편으로 보내기 전에 고객지원팀에 연락하라고 되어 있습니다.",
    koreanLearnerHint: "'before mailing'이라는 시간 표현 뒤의 요구 사항을 정확히 찾으세요.",
    vocabularyItems: [
      { word: "mail a product", meaningKo: "제품을 우편으로 보내다", exampleSentence: "Contact support before mailing the product." },
      { word: "customer support", meaningKo: "고객지원", exampleSentence: "Customers should contact support first." }
    ]
  },
  {
    id: "r7-031",
    part: "reading_part_7",
    skill: "reading comprehension - memo detail",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-travel-expense-memo",
    passageTitle: "Memo: Travel Expense Reports",
    passageText: financeMemo,
    prompt: "When must travel expense reports be submitted beginning next month?",
    options: [
      "A. Within seven days of the employee's return.",
      "B. Before the employee leaves for a trip.",
      "C. By Friday at 3 P.M.",
      "D. At the end of each quarter."
    ],
    correctOption: "A",
    explanationEn: "The memo says reports must be submitted within seven days of the employee's return.",
    explanationKo: "메모에는 직원이 돌아온 후 7일 이내에 출장비 보고서를 제출해야 한다고 되어 있습니다.",
    koreanLearnerHint: "기한 문제에서는 'within seven days'와 그 기준점인 'return'을 함께 읽어야 합니다.",
    vocabularyItems: [
      { word: "expense report", meaningKo: "경비 보고서", exampleSentence: "Expense reports must be submitted within seven days." },
      { word: "pay cycle", meaningKo: "급여 지급 주기", exampleSentence: "Late reports may wait until the next pay cycle." }
    ]
  },
  {
    id: "r7-032",
    part: "reading_part_7",
    skill: "reading comprehension - detail",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-travel-expense-memo",
    passageTitle: "Memo: Travel Expense Reports",
    passageText: financeMemo,
    prompt: "What information should taxi receipts show?",
    options: [
      "A. The starting point and destination.",
      "B. The names of all employees at the meal.",
      "C. The manager's approval code.",
      "D. The employee's pay cycle."
    ],
    correctOption: "A",
    explanationEn: "The memo states that taxi receipts must show the starting point and destination.",
    explanationKo: "메모에는 택시 영수증에 출발지와 목적지가 표시되어야 한다고 되어 있습니다.",
    koreanLearnerHint: "meal receipts와 taxi receipts의 요구 사항이 다릅니다. 어떤 영수증을 묻는지 먼저 확인하세요.",
    vocabularyItems: [
      { word: "taxi receipt", meaningKo: "택시 영수증", exampleSentence: "Taxi receipts must show the destination." },
      { word: "destination", meaningKo: "목적지", exampleSentence: "Write the starting point and destination." }
    ]
  },
  {
    id: "r7-033",
    part: "reading_part_7",
    skill: "reading comprehension - inference",
    difficulty: "hard",
    scoreBand: "800",
    passageId: "p-r7-travel-expense-memo",
    passageTitle: "Memo: Travel Expense Reports",
    passageText: financeMemo,
    prompt: "What can be inferred about the online briefing?",
    options: [
      "A. Employees who cannot attend live can watch it later.",
      "B. It will replace the updated expense form.",
      "C. It is required only for new employees.",
      "D. Managers must submit reports during the briefing."
    ],
    correctOption: "A",
    explanationEn: "The memo says a recording will be posted on the intranet later that afternoon, so people can watch it after the live briefing.",
    explanationKo: "메모에는 녹화본이 그날 오후 회사 인트라넷에 게시된다고 되어 있으므로 실시간으로 참석하지 못한 사람도 나중에 볼 수 있습니다.",
    koreanLearnerHint: "inference 문제는 직접 말한 내용에서 자연스럽게 따라오는 결론을 고르는 문제입니다.",
    vocabularyItems: [
      { word: "online briefing", meaningKo: "온라인 설명회", exampleSentence: "The briefing explains the updated form." },
      { word: "intranet", meaningKo: "회사 내부망", exampleSentence: "A recording will be posted on the intranet." }
    ]
  }
);

const officeFurnitureAd = `Advertisement

BrightSpace Office Furniture

Create a more comfortable workplace with BrightSpace's adjustable desks, ergonomic chairs, and modular storage units. This month only, customers who purchase five or more adjustable desks will receive free assembly service.

Our showroom is open Monday through Saturday from 10 A.M. to 6 P.M. Business customers may also request an on-site consultation. A design specialist will visit your office, measure the available space, and recommend furniture that matches your budget.

Orders placed before May 31 qualify for delivery within ten business days.`;

const teamMessageThread = `Message Thread

Lena: Has anyone received the printed brochures for tomorrow's product demonstration?
Marco: Not yet. The courier called at 10:15 and said the delivery truck had a flat tire.
Lena: That's a problem. The demonstration starts at 2 P.M.
Marco: I contacted the print shop. They can send a digital file now, and we can print 40 copies in the office.
Lena: Good. Please print the copies by noon and place them in the east conference room.
Marco: Done. I will also bring the sample products from storage.`;

const restaurantArticle = `Article

Local Restaurant Expands Lunch Service

Maple Table, a restaurant near the central business district, will begin offering a faster lunch service next week. The restaurant's owner, Priya Shah, said the new service is intended for office workers who have limited time during their lunch breaks.

Customers will be able to order from a shorter menu of salads, sandwiches, and rice bowls. Orders placed through the restaurant's mobile app before 11:30 A.M. will be ready for pickup between noon and 1 P.M.

To prepare for the change, Maple Table hired two additional kitchen assistants and installed a separate pickup counter near the entrance.`;

const invoiceAndEmail = `Invoice

Silverline Printing
Invoice No. SP-6048
Customer: East Park Medical Clinic

500 appointment cards - $85
200 information brochures - $120
Rush processing fee - $25
Total Due - $230
Payment due by April 18

E-mail

To: Silverline Printing
From: East Park Medical Clinic
Subject: Invoice SP-6048

We received the appointment cards this morning, but the information brochures were not included in the shipment. Because the brochures are needed for a health fair on Friday, please confirm whether they can be delivered by Thursday afternoon.`;

const travelPlanMessages = `Travel Itinerary

Mira Chen - Regional Sales Visit

Tuesday, August 5
8:30 A.M. Flight to Denver
11:10 A.M. Arrive in Denver
1:00 P.M. Meeting with Hillcrest Retail Group
4:30 P.M. Check in at Northgate Hotel

Wednesday, August 6
9:30 A.M. Product training at Hillcrest warehouse
2:00 P.M. Return flight

Message

Mira, Hillcrest just moved Wednesday's product training from 9:30 A.M. to 10:30 A.M. The warehouse manager said the session will still finish before noon, so your return flight should not be affected.`;

mockQuestions.push(
  {
    id: "r7-034",
    part: "reading_part_7",
    skill: "reading comprehension - advertisement purpose",
    difficulty: "easy",
    scoreBand: "600",
    passageId: "p-r7-office-furniture-ad",
    passageTitle: "Advertisement: Office Furniture",
    passageText: officeFurnitureAd,
    prompt: "What is being advertised?",
    options: [
      "A. Office furniture.",
      "B. Building repair services.",
      "C. Accounting software.",
      "D. Conference registration."
    ],
    correctOption: "A",
    explanationEn: "The advertisement promotes adjustable desks, ergonomic chairs, and storage units.",
    explanationKo: "광고는 조절식 책상, 인체공학 의자, 수납 장치를 홍보하고 있습니다.",
    koreanLearnerHint: "광고문에서는 첫 줄과 제품 목록이 핵심입니다. 어떤 상품이나 서비스를 파는지 먼저 파악하세요.",
    vocabularyItems: [
      { word: "adjustable desk", meaningKo: "조절식 책상", exampleSentence: "The company sells adjustable desks." },
      { word: "ergonomic chair", meaningKo: "인체공학 의자", exampleSentence: "Ergonomic chairs can make work more comfortable." }
    ]
  },
  {
    id: "r7-035",
    part: "reading_part_7",
    skill: "reading comprehension - condition",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-office-furniture-ad",
    passageTitle: "Advertisement: Office Furniture",
    passageText: officeFurnitureAd,
    prompt: "How can customers receive free assembly service?",
    options: [
      "A. By purchasing five or more adjustable desks.",
      "B. By visiting the showroom on Saturday.",
      "C. By ordering modular storage units only.",
      "D. By requesting delivery after May 31."
    ],
    correctOption: "A",
    explanationEn: "Customers who purchase five or more adjustable desks receive free assembly service.",
    explanationKo: "조절식 책상을 다섯 개 이상 구매하는 고객은 무료 조립 서비스를 받습니다.",
    koreanLearnerHint: "조건 문제에서는 who/if/when 뒤의 조건과 혜택을 정확히 연결해야 합니다.",
    vocabularyItems: [
      { word: "assembly service", meaningKo: "조립 서비스", exampleSentence: "Free assembly service is included." },
      { word: "purchase", meaningKo: "구매하다", exampleSentence: "Customers must purchase five desks." }
    ]
  },
  {
    id: "r7-036",
    part: "reading_part_7",
    skill: "reading comprehension - detail",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-office-furniture-ad",
    passageTitle: "Advertisement: Office Furniture",
    passageText: officeFurnitureAd,
    prompt: "What will a design specialist do during an on-site consultation?",
    options: [
      "A. Measure the available office space.",
      "B. Deliver furniture within ten days.",
      "C. Repair damaged storage units.",
      "D. Open the showroom earlier."
    ],
    correctOption: "A",
    explanationEn: "The advertisement says a design specialist will visit the office and measure the available space.",
    explanationKo: "광고에는 디자인 전문가가 사무실을 방문해 사용 가능한 공간을 측정한다고 되어 있습니다.",
    koreanLearnerHint: "on-site consultation 뒤의 설명을 읽으면 전문가가 하는 일을 찾을 수 있습니다.",
    vocabularyItems: [
      { word: "on-site consultation", meaningKo: "현장 상담", exampleSentence: "Business customers may request an on-site consultation." },
      { word: "measure space", meaningKo: "공간을 측정하다", exampleSentence: "The specialist will measure the space." }
    ]
  },
  {
    id: "r7-037",
    part: "reading_part_7",
    skill: "reading comprehension - message thread detail",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-product-demo-message-thread",
    passageTitle: "Message Thread: Product Demonstration",
    passageText: teamMessageThread,
    prompt: "Why have the brochures not arrived yet?",
    options: [
      "A. The delivery truck had a flat tire.",
      "B. The product demonstration was canceled.",
      "C. The print shop sent the wrong file.",
      "D. The conference room was unavailable."
    ],
    correctOption: "A",
    explanationEn: "Marco says the courier reported that the delivery truck had a flat tire.",
    explanationKo: "Marco는 배송 기사가 배달 트럭에 타이어 펑크가 났다고 말했다고 합니다.",
    koreanLearnerHint: "메시지 스레드에서는 각 사람이 말한 정보를 연결해야 합니다. courier가 말한 이유를 찾으세요.",
    vocabularyItems: [
      { word: "brochure", meaningKo: "안내 책자", exampleSentence: "The brochures are needed for the demonstration." },
      { word: "flat tire", meaningKo: "타이어 펑크", exampleSentence: "The truck had a flat tire." }
    ]
  },
  {
    id: "r7-038",
    part: "reading_part_7",
    skill: "reading comprehension - detail",
    difficulty: "easy",
    scoreBand: "600",
    passageId: "p-r7-product-demo-message-thread",
    passageTitle: "Message Thread: Product Demonstration",
    passageText: teamMessageThread,
    prompt: "Where should Marco place the printed copies?",
    options: [
      "A. In the east conference room.",
      "B. At the print shop.",
      "C. In the storage area.",
      "D. On the delivery truck."
    ],
    correctOption: "A",
    explanationEn: "Lena asks Marco to place the printed copies in the east conference room.",
    explanationKo: "Lena는 Marco에게 인쇄본을 동쪽 회의실에 두라고 요청합니다.",
    koreanLearnerHint: "Where 문제는 장소 표현을 빠르게 찾되, 누가 무엇을 어디에 두는지까지 확인해야 합니다.",
    vocabularyItems: [
      { word: "printed copy", meaningKo: "인쇄본", exampleSentence: "Place the printed copies in the conference room." },
      { word: "conference room", meaningKo: "회의실", exampleSentence: "The demonstration will use the east conference room." }
    ]
  },
  {
    id: "r7-039",
    part: "reading_part_7",
    skill: "reading comprehension - inference",
    difficulty: "hard",
    scoreBand: "800",
    passageId: "p-r7-product-demo-message-thread",
    passageTitle: "Message Thread: Product Demonstration",
    passageText: teamMessageThread,
    prompt: "What will Marco probably do before the demonstration?",
    options: [
      "A. Bring sample products from storage.",
      "B. Cancel the digital brochure file.",
      "C. Call a different courier company.",
      "D. Move the demonstration to noon."
    ],
    correctOption: "A",
    explanationEn: "Marco says he will bring the sample products from storage.",
    explanationKo: "Marco는 보관실에서 샘플 제품을 가져오겠다고 말합니다.",
    koreanLearnerHint: "probably do 문제는 마지막 메시지의 예정 행동을 묻는 경우가 많습니다.",
    vocabularyItems: [
      { word: "sample product", meaningKo: "샘플 제품", exampleSentence: "Marco will bring the sample products." },
      { word: "storage", meaningKo: "보관실", exampleSentence: "The sample products are in storage." }
    ]
  },
  {
    id: "r7-040",
    part: "reading_part_7",
    skill: "reading comprehension - article main idea",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-restaurant-lunch-article",
    passageTitle: "Article: Faster Lunch Service",
    passageText: restaurantArticle,
    prompt: "What is the article mainly about?",
    options: [
      "A. A restaurant introducing a faster lunch service.",
      "B. A business district opening a new office building.",
      "C. A mobile app being removed from a restaurant.",
      "D. A health inspection at a local restaurant."
    ],
    correctOption: "A",
    explanationEn: "The article says Maple Table will begin offering a faster lunch service next week.",
    explanationKo: "기사에는 Maple Table이 다음 주부터 더 빠른 점심 서비스를 시작한다고 되어 있습니다.",
    koreanLearnerHint: "mainly about 문제는 제목과 첫 단락의 중심 내용을 연결하면 풀기 쉽습니다.",
    vocabularyItems: [
      { word: "expand service", meaningKo: "서비스를 확대하다", exampleSentence: "The restaurant expanded lunch service." },
      { word: "business district", meaningKo: "상업 지구", exampleSentence: "The restaurant is near the business district." }
    ]
  },
  {
    id: "r7-041",
    part: "reading_part_7",
    skill: "reading comprehension - detail",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-restaurant-lunch-article",
    passageTitle: "Article: Faster Lunch Service",
    passageText: restaurantArticle,
    prompt: "Who is the new lunch service intended for?",
    options: [
      "A. Office workers with limited lunch time.",
      "B. Tourists visiting the central museum.",
      "C. Restaurant owners hiring assistants.",
      "D. Customers ordering dinner after work."
    ],
    correctOption: "A",
    explanationEn: "The owner says the service is intended for office workers who have limited time during lunch breaks.",
    explanationKo: "식당 주인은 이 서비스가 점심시간이 제한된 직장인을 위한 것이라고 말합니다.",
    koreanLearnerHint: "'intended for'는 대상 고객을 알려 주는 표현입니다.",
    vocabularyItems: [
      { word: "be intended for", meaningKo: "~을 대상으로 하다", exampleSentence: "The service is intended for office workers." },
      { word: "lunch break", meaningKo: "점심시간", exampleSentence: "Workers have limited time during lunch breaks." }
    ]
  },
  {
    id: "r7-042",
    part: "reading_part_7",
    skill: "reading comprehension - condition",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-restaurant-lunch-article",
    passageTitle: "Article: Faster Lunch Service",
    passageText: restaurantArticle,
    prompt: "What must customers do to pick up lunch between noon and 1 P.M.?",
    options: [
      "A. Order through the mobile app before 11:30 A.M.",
      "B. Hire two kitchen assistants.",
      "C. Visit the pickup counter before 10 A.M.",
      "D. Choose from the dinner menu."
    ],
    correctOption: "A",
    explanationEn: "Orders placed through the mobile app before 11:30 A.M. will be ready for pickup between noon and 1 P.M.",
    explanationKo: "오전 11시 30분 전에 모바일 앱으로 주문하면 정오부터 오후 1시 사이에 픽업할 수 있습니다.",
    koreanLearnerHint: "조건과 결과를 함께 읽으세요. 주문 방식, 시간 제한, 픽업 시간이 모두 단서입니다.",
    vocabularyItems: [
      { word: "place an order", meaningKo: "주문하다", exampleSentence: "Customers place orders through the app." },
      { word: "pickup counter", meaningKo: "픽업 카운터", exampleSentence: "The pickup counter is near the entrance." }
    ]
  },
  {
    id: "r7-043",
    part: "reading_part_7",
    skill: "reading comprehension - double passage detail",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-printing-invoice-email",
    passageTitle: "Invoice and E-mail: Missing Brochures",
    passageText: invoiceAndEmail,
    prompt: "Which item was not included in the shipment?",
    options: [
      "A. Information brochures.",
      "B. Appointment cards.",
      "C. A payment receipt.",
      "D. A rush processing form."
    ],
    correctOption: "A",
    explanationEn: "The e-mail says the appointment cards arrived, but the information brochures were not included.",
    explanationKo: "이메일에는 예약 카드가 도착했지만 안내 책자가 배송에 포함되지 않았다고 되어 있습니다.",
    koreanLearnerHint: "invoice와 email을 비교해야 합니다. 이메일에서 실제로 누락된 항목을 확인하세요.",
    vocabularyItems: [
      { word: "information brochure", meaningKo: "안내 책자", exampleSentence: "The brochures were not included." },
      { word: "shipment", meaningKo: "배송품", exampleSentence: "The item was missing from the shipment." }
    ]
  },
  {
    id: "r7-044",
    part: "reading_part_7",
    skill: "reading comprehension - price detail",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-printing-invoice-email",
    passageTitle: "Invoice and E-mail: Missing Brochures",
    passageText: invoiceAndEmail,
    prompt: "How much is the rush processing fee?",
    options: ["A. $25.", "B. $85.", "C. $120.", "D. $230."],
    correctOption: "A",
    explanationEn: "The invoice lists the rush processing fee as $25.",
    explanationKo: "송장에는 긴급 처리 수수료가 25달러로 표시되어 있습니다.",
    koreanLearnerHint: "가격 문제는 항목명과 금액을 정확히 맞춰 읽어야 합니다.",
    vocabularyItems: [
      { word: "rush processing fee", meaningKo: "긴급 처리 수수료", exampleSentence: "The rush processing fee is $25." },
      { word: "total due", meaningKo: "총 결제 금액", exampleSentence: "The total due is $230." }
    ]
  },
  {
    id: "r7-045",
    part: "reading_part_7",
    skill: "reading comprehension - double passage inference",
    difficulty: "hard",
    scoreBand: "800",
    passageId: "p-r7-printing-invoice-email",
    passageTitle: "Invoice and E-mail: Missing Brochures",
    passageText: invoiceAndEmail,
    prompt: "Why does the clinic need the brochures by Thursday afternoon?",
    options: [
      "A. They are needed for a health fair on Friday.",
      "B. Payment is due on Thursday.",
      "C. The appointment cards were printed incorrectly.",
      "D. Silverline Printing closes on Friday."
    ],
    correctOption: "A",
    explanationEn: "The clinic says the brochures are needed for a health fair on Friday.",
    explanationKo: "병원은 금요일 건강 박람회에 안내 책자가 필요하다고 말합니다.",
    koreanLearnerHint: "why 문제에서는 요청의 이유가 뒤에 나오는 경우가 많습니다. 'because'가 없어도 문맥상 이유를 찾으세요.",
    vocabularyItems: [
      { word: "health fair", meaningKo: "건강 박람회", exampleSentence: "The brochures are needed for a health fair." },
      { word: "confirm delivery", meaningKo: "배송 가능 여부를 확인하다", exampleSentence: "Please confirm whether they can be delivered." }
    ]
  },
  {
    id: "r7-046",
    part: "reading_part_7",
    skill: "reading comprehension - multi passage detail",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-sales-visit-itinerary-message",
    passageTitle: "Itinerary and Message: Sales Visit",
    passageText: travelPlanMessages,
    prompt: "When will Ms. Chen meet with Hillcrest Retail Group?",
    options: [
      "A. Tuesday at 1:00 P.M.",
      "B. Tuesday at 4:30 P.M.",
      "C. Wednesday at 9:30 A.M.",
      "D. Wednesday at 2:00 P.M."
    ],
    correctOption: "A",
    explanationEn: "The itinerary lists the meeting with Hillcrest Retail Group at 1:00 P.M. on Tuesday.",
    explanationKo: "일정표에는 Hillcrest Retail Group과의 회의가 화요일 오후 1시에 예정되어 있습니다.",
    koreanLearnerHint: "일정표에서는 날짜와 시간을 함께 확인하세요. training과 meeting을 혼동하지 마세요.",
    vocabularyItems: [
      { word: "sales visit", meaningKo: "영업 방문", exampleSentence: "The itinerary is for a sales visit." },
      { word: "itinerary", meaningKo: "여행 일정표", exampleSentence: "The itinerary lists the meeting time." }
    ]
  },
  {
    id: "r7-047",
    part: "reading_part_7",
    skill: "reading comprehension - multi passage detail",
    difficulty: "medium",
    scoreBand: "700",
    passageId: "p-r7-sales-visit-itinerary-message",
    passageTitle: "Itinerary and Message: Sales Visit",
    passageText: travelPlanMessages,
    prompt: "What change is mentioned in the message?",
    options: [
      "A. Product training will start one hour later.",
      "B. The return flight has been canceled.",
      "C. The hotel check-in time has changed.",
      "D. The meeting was moved to the warehouse."
    ],
    correctOption: "A",
    explanationEn: "The message says Wednesday's product training was moved from 9:30 A.M. to 10:30 A.M.",
    explanationKo: "메시지에는 수요일 제품 교육이 오전 9시 30분에서 10시 30분으로 변경되었다고 되어 있습니다.",
    koreanLearnerHint: "변경 문제에서는 원래 시간과 바뀐 시간을 비교하세요.",
    vocabularyItems: [
      { word: "move from A to B", meaningKo: "A에서 B로 변경하다", exampleSentence: "The training moved from 9:30 to 10:30." },
      { word: "warehouse manager", meaningKo: "창고 관리자", exampleSentence: "The warehouse manager changed the time." }
    ]
  },
  {
    id: "r7-048",
    part: "reading_part_7",
    skill: "reading comprehension - multi passage inference",
    difficulty: "hard",
    scoreBand: "800",
    passageId: "p-r7-sales-visit-itinerary-message",
    passageTitle: "Itinerary and Message: Sales Visit",
    passageText: travelPlanMessages,
    prompt: "What can be inferred about Ms. Chen's return flight?",
    options: [
      "A. She should still be able to take it as planned.",
      "B. It was moved to Tuesday morning.",
      "C. It leaves before the training session ends.",
      "D. It must be rebooked by Hillcrest."
    ],
    correctOption: "A",
    explanationEn: "The message says the session will still finish before noon, so the 2:00 P.M. return flight should not be affected.",
    explanationKo: "메시지에는 교육이 여전히 정오 전에 끝난다고 되어 있으므로 오후 2시 귀국 항공편에는 영향이 없을 것입니다.",
    koreanLearnerHint: "두 지문을 연결해야 합니다. 메시지의 종료 시간과 일정표의 비행 시간을 비교하세요.",
    vocabularyItems: [
      { word: "return flight", meaningKo: "귀국 항공편, 돌아오는 비행기", exampleSentence: "The return flight is at 2:00 P.M." },
      { word: "be affected", meaningKo: "영향을 받다", exampleSentence: "The flight should not be affected." }
    ]
  }
);

mockQuestions.push(
  {
    id: "r5-021",
    part: "reading_part_5",
    skill: "prepositions",
    difficulty: "easy",
    scoreBand: "600",
    prompt: "The revised schedule will be posted _____ the employee bulletin board.",
    options: ["A. on", "B. at", "C. by", "D. to"],
    correctOption: "A",
    explanationEn: "Use 'on' when information is displayed on a board, wall, or screen.",
    explanationKo: "게시판이나 벽, 화면 위에 정보가 표시될 때는 전치사 'on'을 사용합니다.",
    koreanLearnerHint: "한국어의 '-에'는 여러 의미로 쓰이지만, 영어에서는 표면 위에 붙어 있거나 표시된 정보에는 보통 'on'을 씁니다.",
    vocabularyItems: [
      { word: "revised schedule", meaningKo: "수정된 일정", exampleSentence: "The revised schedule will be posted today." },
      { word: "bulletin board", meaningKo: "게시판", exampleSentence: "Please check the bulletin board for updates." }
    ]
  },
  {
    id: "r5-022",
    part: "reading_part_5",
    skill: "word form",
    difficulty: "easy",
    scoreBand: "600",
    prompt: "The receptionist greeted each visitor _____.",
    options: ["A. courteous", "B. courtesy", "C. courteously", "D. courteousness"],
    correctOption: "C",
    explanationEn: "The blank describes how the receptionist greeted visitors, so an adverb is needed.",
    explanationKo: "빈칸은 접수 담당자가 방문객을 어떻게 맞이했는지를 설명하므로 부사 'courteously'가 필요합니다.",
    koreanLearnerHint: "동사를 꾸미는 자리에는 형용사가 아니라 부사가 오는 경우가 많습니다. Part 5에서는 품사 위치를 먼저 확인하세요.",
    vocabularyItems: [
      { word: "receptionist", meaningKo: "접수 담당자", exampleSentence: "The receptionist greeted each visitor." },
      { word: "courteously", meaningKo: "정중하게", exampleSentence: "The staff spoke courteously to customers." }
    ]
  },
  {
    id: "r5-023",
    part: "reading_part_5",
    skill: "verb tense",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "By the time the conference begins, all name tags _____.",
    options: ["A. prepare", "B. prepared", "C. will have been prepared", "D. preparing"],
    correctOption: "C",
    explanationEn: "'By the time' with a future reference often requires the future perfect for an action completed before that point.",
    explanationKo: "미래의 특정 시점 전에 완료될 일을 나타내므로 미래완료 수동형 'will have been prepared'가 알맞습니다.",
    koreanLearnerHint: "'by the time'은 완료 시점을 알려 주는 단서입니다. 이름표는 준비되는 대상이므로 수동형도 함께 필요합니다.",
    vocabularyItems: [
      { word: "conference", meaningKo: "회의, 학회", exampleSentence: "The conference begins at nine." },
      { word: "name tag", meaningKo: "이름표", exampleSentence: "All name tags will be prepared in advance." }
    ]
  },
  {
    id: "r5-024",
    part: "reading_part_5",
    skill: "conjunctions",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "Please contact the supervisor _____ you need additional safety equipment.",
    options: ["A. if", "B. so", "C. until", "D. yet"],
    correctOption: "A",
    explanationEn: "'If' introduces a condition: contact the supervisor in the situation that equipment is needed.",
    explanationKo: "추가 안전 장비가 필요한 경우라는 조건을 나타내므로 'if'가 알맞습니다.",
    koreanLearnerHint: "조건을 나타내는 '-면'은 영어에서 보통 'if'로 연결합니다. 뒤에 주어와 동사가 있는 절이 올 수 있습니다.",
    vocabularyItems: [
      { word: "supervisor", meaningKo: "관리자, 감독자", exampleSentence: "Please contact the supervisor." },
      { word: "safety equipment", meaningKo: "안전 장비", exampleSentence: "Workers must wear safety equipment." }
    ]
  },
  {
    id: "r5-025",
    part: "reading_part_5",
    skill: "articles",
    difficulty: "easy",
    scoreBand: "600",
    prompt: "Our department is looking for _____ experienced technician.",
    options: ["A. a", "B. an", "C. the", "D. no article"],
    correctOption: "B",
    explanationEn: "Use 'an' before a vowel sound. 'Experienced' begins with a vowel sound.",
    explanationKo: "'experienced'는 모음 소리로 시작하므로 부정관사 'an'을 사용합니다.",
    koreanLearnerHint: "관사는 철자가 아니라 발음으로 판단해야 합니다. 모음 소리 앞에는 'an'이 옵니다.",
    vocabularyItems: [
      { word: "experienced", meaningKo: "경험이 많은", exampleSentence: "They hired an experienced technician." },
      { word: "technician", meaningKo: "기술자", exampleSentence: "The technician repaired the machine." }
    ]
  },
  {
    id: "r5-026",
    part: "reading_part_5",
    skill: "subject-verb agreement",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "Each of the applicants _____ required to submit two references.",
    options: ["A. are", "B. were", "C. is", "D. have been"],
    correctOption: "C",
    explanationEn: "'Each' is singular, so the singular verb 'is' is required.",
    explanationKo: "'Each'는 단수 취급하므로 단수 동사 'is'가 필요합니다.",
    koreanLearnerHint: "'of the applicants'에 복수 명사가 있어도 문장의 핵심 주어는 'Each'입니다.",
    vocabularyItems: [
      { word: "applicant", meaningKo: "지원자", exampleSentence: "Each applicant must submit references." },
      { word: "reference", meaningKo: "추천인, 참고 자료", exampleSentence: "Please submit two references." }
    ]
  },
  {
    id: "r5-027",
    part: "reading_part_5",
    skill: "vocabulary",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "The factory will _____ production next week after the equipment inspection.",
    options: ["A. resume", "B. remind", "C. replace", "D. request"],
    correctOption: "A",
    explanationEn: "'Resume production' means to start production again after a pause.",
    explanationKo: "'resume production'은 중단되었던 생산을 다시 시작한다는 뜻입니다.",
    koreanLearnerHint: "'resume'은 명사로는 이력서라는 뜻도 있지만, 동사로는 '다시 시작하다'라는 뜻이 TOEIC에서 자주 나옵니다.",
    vocabularyItems: [
      { word: "resume production", meaningKo: "생산을 재개하다", exampleSentence: "The factory will resume production next week." },
      { word: "equipment inspection", meaningKo: "장비 점검", exampleSentence: "The inspection will finish on Friday." }
    ]
  },
  {
    id: "r5-028",
    part: "reading_part_5",
    skill: "adverbs",
    difficulty: "easy",
    scoreBand: "600",
    prompt: "The online order was processed almost _____ after payment was confirmed.",
    options: ["A. immediate", "B. immediately", "C. immediacy", "D. more immediate"],
    correctOption: "B",
    explanationEn: "The adverb 'immediately' describes how quickly the order was processed.",
    explanationKo: "주문이 처리된 방식을 설명하므로 부사 'immediately'가 필요합니다.",
    koreanLearnerHint: "'almost' 뒤에도 동작을 설명하는 부사가 올 수 있습니다. 선택지의 품사를 비교하세요.",
    vocabularyItems: [
      { word: "process an order", meaningKo: "주문을 처리하다", exampleSentence: "The order was processed immediately." },
      { word: "payment", meaningKo: "결제, 지불", exampleSentence: "Payment was confirmed this morning." }
    ]
  },
  {
    id: "r5-029",
    part: "reading_part_5",
    skill: "pronouns",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "The marketing team shared _____ final proposal with the client.",
    options: ["A. they", "B. them", "C. their", "D. themselves"],
    correctOption: "C",
    explanationEn: "A possessive adjective is needed before the noun phrase 'final proposal.'",
    explanationKo: "명사구 'final proposal' 앞에는 소유를 나타내는 형용사 'their'가 필요합니다.",
    koreanLearnerHint: "빈칸 뒤에 명사가 바로 오면 소유격 형용사인지 확인하세요. 'they'나 'them'은 명사를 직접 꾸미지 못합니다.",
    vocabularyItems: [
      { word: "final proposal", meaningKo: "최종 제안서", exampleSentence: "The team shared their final proposal." },
      { word: "client", meaningKo: "고객, 의뢰인", exampleSentence: "The client reviewed the proposal." }
    ]
  },
  {
    id: "r5-030",
    part: "reading_part_5",
    skill: "comparatives",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "This printer is _____ than the model we purchased last year.",
    options: ["A. efficient", "B. more efficient", "C. most efficient", "D. efficiently"],
    correctOption: "B",
    explanationEn: "'Than' signals a comparison between two items, so the comparative form is needed.",
    explanationKo: "'than'이 두 대상을 비교하고 있으므로 비교급 'more efficient'가 필요합니다.",
    koreanLearnerHint: "긴 형용사는 보통 '-er' 대신 'more + 형용사'로 비교급을 만듭니다.",
    vocabularyItems: [
      { word: "efficient", meaningKo: "효율적인", exampleSentence: "This printer is more efficient." },
      { word: "model", meaningKo: "모델, 기종", exampleSentence: "The new model uses less electricity." }
    ]
  },
  {
    id: "r5-031",
    part: "reading_part_5",
    skill: "infinitives",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "The training video explains how _____ the new inventory system.",
    options: ["A. use", "B. using", "C. to use", "D. used"],
    correctOption: "C",
    explanationEn: "After 'how,' use the infinitive form 'to use' to explain a method.",
    explanationKo: "방법을 설명하는 'how' 뒤에는 부정사 'to use'를 사용할 수 있습니다.",
    koreanLearnerHint: "'how to + 동사원형'은 '~하는 방법'이라는 TOEIC 빈출 구조입니다.",
    vocabularyItems: [
      { word: "inventory system", meaningKo: "재고 관리 시스템", exampleSentence: "The video explains how to use the system." },
      { word: "training video", meaningKo: "교육 영상", exampleSentence: "Please watch the training video." }
    ]
  },
  {
    id: "r5-032",
    part: "reading_part_5",
    skill: "modals",
    difficulty: "easy",
    scoreBand: "600",
    prompt: "Visitors _____ sign in at the front desk before entering the laboratory.",
    options: ["A. must", "B. might", "C. would", "D. used to"],
    correctOption: "A",
    explanationEn: "'Must' expresses a requirement, which fits the sign-in rule.",
    explanationKo: "방문객이 반드시 서명해야 한다는 규칙을 나타내므로 'must'가 알맞습니다.",
    koreanLearnerHint: "규칙이나 의무를 나타내는 문장에서는 'must' 또는 'have to'가 자주 정답이 됩니다.",
    vocabularyItems: [
      { word: "sign in", meaningKo: "방문 기록을 하다, 서명하다", exampleSentence: "Visitors must sign in at the front desk." },
      { word: "laboratory", meaningKo: "실험실", exampleSentence: "Visitors cannot enter the laboratory alone." }
    ]
  },
  {
    id: "r5-033",
    part: "reading_part_5",
    skill: "participles",
    difficulty: "hard",
    scoreBand: "800",
    prompt: "The documents _____ in the blue folder are ready for review.",
    options: ["A. place", "B. placing", "C. placed", "D. places"],
    correctOption: "C",
    explanationEn: "'Placed in the blue folder' is a reduced passive clause describing the documents.",
    explanationKo: "'placed in the blue folder'는 문서를 설명하는 축약된 수동 분사구입니다.",
    koreanLearnerHint: "문서가 폴더에 '놓여진' 상태이므로 현재분사보다 과거분사가 자연스럽습니다.",
    vocabularyItems: [
      { word: "document", meaningKo: "문서", exampleSentence: "The documents are ready for review." },
      { word: "ready for review", meaningKo: "검토할 준비가 된", exampleSentence: "The report is ready for review." }
    ]
  },
  {
    id: "r5-034",
    part: "reading_part_5",
    skill: "conditionals",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "If the shipment arrives before noon, the staff _____ the items today.",
    options: ["A. distribute", "B. distributed", "C. will distribute", "D. have distributed"],
    correctOption: "C",
    explanationEn: "In a real future condition, use present tense in the if-clause and 'will' in the main clause.",
    explanationKo: "실현 가능한 미래 조건문에서는 if절에 현재형을 쓰고, 주절에는 'will'을 사용합니다.",
    koreanLearnerHint: "영어 조건문에서는 if절에 미래 의미가 있어도 보통 'will'을 넣지 않습니다. 주절에서 미래를 표시합니다.",
    vocabularyItems: [
      { word: "shipment", meaningKo: "배송품, 선적", exampleSentence: "The shipment arrives before noon." },
      { word: "distribute", meaningKo: "배포하다, 나누어 주다", exampleSentence: "The staff will distribute the items." }
    ]
  },
  {
    id: "r5-035",
    part: "reading_part_5",
    skill: "vocabulary",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "The hotel offers a _____ shuttle service to the airport every hour.",
    options: ["A. complimentary", "B. complicated", "C. comparative", "D. considerable"],
    correctOption: "A",
    explanationEn: "'Complimentary' means free of charge, which fits a hotel shuttle service.",
    explanationKo: "'complimentary'는 무료 제공이라는 뜻으로 호텔 셔틀 서비스 문맥에 알맞습니다.",
    koreanLearnerHint: "'complimentary'는 '칭찬하는'이라는 뜻도 있지만, TOEIC 비즈니스 문맥에서는 '무료의'라는 뜻으로 자주 쓰입니다.",
    vocabularyItems: [
      { word: "complimentary", meaningKo: "무료의", exampleSentence: "The hotel offers complimentary breakfast." },
      { word: "shuttle service", meaningKo: "셔틀 서비스", exampleSentence: "A shuttle service runs every hour." }
    ]
  },
  {
    id: "r5-036",
    part: "reading_part_5",
    skill: "prepositions",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "The finance director is responsible _____ approving travel expenses.",
    options: ["A. for", "B. to", "C. with", "D. about"],
    correctOption: "A",
    explanationEn: "The expression is 'be responsible for' something or doing something.",
    explanationKo: "'~을 책임지다'는 영어로 'be responsible for'라고 표현합니다.",
    koreanLearnerHint: "형용사와 함께 쓰이는 전치사는 세트로 외우는 것이 좋습니다. 'responsible for'는 TOEIC에서 자주 나옵니다.",
    vocabularyItems: [
      { word: "be responsible for", meaningKo: "~을 책임지다", exampleSentence: "She is responsible for approving expenses." },
      { word: "travel expenses", meaningKo: "출장비, 여행 경비", exampleSentence: "Travel expenses must be approved." }
    ]
  },
  {
    id: "r5-037",
    part: "reading_part_5",
    skill: "word form",
    difficulty: "hard",
    scoreBand: "800",
    prompt: "The consultant's recommendations were both practical and _____.",
    options: ["A. afford", "B. affordable", "C. affordability", "D. affordably"],
    correctOption: "B",
    explanationEn: "The blank is parallel with the adjective 'practical,' so another adjective is needed.",
    explanationKo: "빈칸은 형용사 'practical'과 병렬 구조이므로 또 다른 형용사 'affordable'이 필요합니다.",
    koreanLearnerHint: "'both A and B' 구조에서는 A와 B의 품사가 같아야 합니다. 병렬 구조를 확인하세요.",
    vocabularyItems: [
      { word: "recommendation", meaningKo: "추천, 권고", exampleSentence: "The consultant made several recommendations." },
      { word: "affordable", meaningKo: "가격이 알맞은", exampleSentence: "The plan is practical and affordable." }
    ]
  },
  {
    id: "r5-038",
    part: "reading_part_5",
    skill: "conjunctions",
    difficulty: "hard",
    scoreBand: "800",
    prompt: "The store will remain open late _____ the renovation work is completed.",
    options: ["A. as soon as", "B. even if", "C. so that", "D. due to"],
    correctOption: "B",
    explanationEn: "'Even if' means the store will remain open late regardless of whether the work is completed.",
    explanationKo: "공사가 완료되더라도 늦게까지 영업한다는 양보의 의미이므로 'even if'가 알맞습니다.",
    koreanLearnerHint: "'even if'는 실제 여부와 관계없이 조건을 인정하는 표현입니다. 단순한 시간 표현인 'as soon as'와 구분하세요.",
    vocabularyItems: [
      { word: "remain open", meaningKo: "영업을 계속하다", exampleSentence: "The store will remain open late." },
      { word: "renovation work", meaningKo: "개조 공사", exampleSentence: "The renovation work is almost complete." }
    ]
  },
  {
    id: "r5-039",
    part: "reading_part_5",
    skill: "adverbs",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "The customer survey results were _____ positive.",
    options: ["A. high", "B. height", "C. highly", "D. higher"],
    correctOption: "C",
    explanationEn: "'Highly' modifies the adjective 'positive.'",
    explanationKo: "'positive'라는 형용사를 꾸미는 부사 'highly'가 필요합니다.",
    koreanLearnerHint: "형용사를 꾸밀 때도 부사가 필요합니다. 'high positive'가 아니라 'highly positive'입니다.",
    vocabularyItems: [
      { word: "survey result", meaningKo: "설문 조사 결과", exampleSentence: "The survey results were highly positive." },
      { word: "positive", meaningKo: "긍정적인", exampleSentence: "The feedback was positive." }
    ]
  },
  {
    id: "r5-040",
    part: "reading_part_5",
    skill: "vocabulary",
    difficulty: "hard",
    scoreBand: "800",
    prompt: "To reduce errors, the warehouse introduced a more _____ labeling process.",
    options: ["A. accurate", "B. accidental", "C. anxious", "D. available"],
    correctOption: "A",
    explanationEn: "'Accurate' means correct or exact, which fits a process designed to reduce errors.",
    explanationKo: "'accurate'는 정확한이라는 뜻으로 오류를 줄이기 위한 라벨링 절차 문맥에 알맞습니다.",
    koreanLearnerHint: "비슷하게 시작하는 형용사 선택지는 뜻을 정확히 구분해야 합니다. 오류를 줄이는 목적에는 'accurate'가 가장 자연스럽습니다.",
    vocabularyItems: [
      { word: "reduce errors", meaningKo: "오류를 줄이다", exampleSentence: "The new process reduces errors." },
      { word: "labeling process", meaningKo: "라벨 부착 절차", exampleSentence: "The labeling process is more accurate now." }
    ]
  }
);

mockQuestions.push(
  {
    id: "r5-041",
    part: "reading_part_5",
    skill: "word form",
    difficulty: "easy",
    scoreBand: "600",
    prompt: "The payroll department handles salary information _____.",
    options: ["A. confidential", "B. confidentiality", "C. confidentially", "D. confide"],
    correctOption: "C",
    explanationEn: "The blank describes how the department handles information, so the adverb 'confidentially' is needed.",
    explanationKo: "빈칸은 부서가 급여 정보를 어떻게 다루는지를 설명하므로 부사 'confidentially'가 필요합니다.",
    koreanLearnerHint: "동사를 꾸미는 자리에는 부사가 옵니다. TOEIC Part 5에서는 품사 위치를 먼저 확인하세요.",
    vocabularyItems: [
      { word: "payroll department", meaningKo: "급여 담당 부서", exampleSentence: "The payroll department handles salary information." },
      { word: "confidentially", meaningKo: "기밀로, 비밀리에", exampleSentence: "Employee records must be handled confidentially." }
    ]
  },
  {
    id: "r5-042",
    part: "reading_part_5",
    skill: "prepositions",
    difficulty: "easy",
    scoreBand: "600",
    prompt: "The new employee orientation will take place _____ the auditorium.",
    options: ["A. in", "B. on", "C. to", "D. from"],
    correctOption: "A",
    explanationEn: "Use 'in' for an event located inside a room or building such as an auditorium.",
    explanationKo: "강당처럼 실내 공간 안에서 행사가 열릴 때는 전치사 'in'을 사용합니다.",
    koreanLearnerHint: "장소 전치사는 공간의 성격을 봐야 합니다. 실내 공간 안이면 보통 'in'이 자연스럽습니다.",
    vocabularyItems: [
      { word: "orientation", meaningKo: "오리엔테이션", exampleSentence: "Orientation will take place in the auditorium." },
      { word: "auditorium", meaningKo: "강당", exampleSentence: "The auditorium is on the first floor." }
    ]
  },
  {
    id: "r5-043",
    part: "reading_part_5",
    skill: "verb tense",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "The legal team _____ the revised contract by the end of the week.",
    options: ["A. reviews", "B. reviewed", "C. will have reviewed", "D. reviewing"],
    correctOption: "C",
    explanationEn: "'By the end of the week' points to completion before a future deadline, so the future perfect is appropriate.",
    explanationKo: "'by the end of the week'는 미래의 마감 시점 전 완료를 나타내므로 미래완료형이 적절합니다.",
    koreanLearnerHint: "'by + 미래 시점'은 완료 시제를 고르는 강한 단서가 될 수 있습니다.",
    vocabularyItems: [
      { word: "legal team", meaningKo: "법무팀", exampleSentence: "The legal team reviewed the contract." },
      { word: "revised contract", meaningKo: "수정된 계약서", exampleSentence: "The revised contract is ready." }
    ]
  },
  {
    id: "r5-044",
    part: "reading_part_5",
    skill: "articles",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "Mr. Patel gave _____ detailed explanation of the new billing system.",
    options: ["A. a", "B. an", "C. the", "D. no article"],
    correctOption: "A",
    explanationEn: "'Detailed explanation' is a singular countable noun phrase introduced for the first time, so 'a' is needed.",
    explanationKo: "'detailed explanation'은 처음 언급되는 단수 가산 명사구이므로 'a'가 필요합니다.",
    koreanLearnerHint: "형용사가 붙어도 핵심 명사가 단수 가산명사이면 관사가 필요합니다.",
    vocabularyItems: [
      { word: "detailed explanation", meaningKo: "자세한 설명", exampleSentence: "He gave a detailed explanation." },
      { word: "billing system", meaningKo: "청구 시스템", exampleSentence: "The billing system was updated." }
    ]
  },
  {
    id: "r5-045",
    part: "reading_part_5",
    skill: "conjunctions",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "The museum will extend its hours _____ visitor demand continues to increase.",
    options: ["A. if", "B. although", "C. therefore", "D. unless"],
    correctOption: "A",
    explanationEn: "'If' introduces the condition under which the museum will extend its hours.",
    explanationKo: "방문객 수요가 계속 증가한다는 조건을 나타내므로 'if'가 알맞습니다.",
    koreanLearnerHint: "조건을 나타내는 절에는 'if'가 자주 쓰입니다. 결과는 주절에 나옵니다.",
    vocabularyItems: [
      { word: "extend hours", meaningKo: "운영 시간을 연장하다", exampleSentence: "The museum will extend its hours." },
      { word: "visitor demand", meaningKo: "방문객 수요", exampleSentence: "Visitor demand has increased." }
    ]
  },
  {
    id: "r5-046",
    part: "reading_part_5",
    skill: "vocabulary",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "All workshop participants will receive a certificate of _____.",
    options: ["A. completion", "B. comparison", "C. complaint", "D. competition"],
    correctOption: "A",
    explanationEn: "A 'certificate of completion' is given after finishing a course or workshop.",
    explanationKo: "'certificate of completion'은 과정이나 워크숍을 마친 뒤 받는 수료증이라는 뜻입니다.",
    koreanLearnerHint: "TOEIC에서는 명사와 명사의 결합 표현이 자주 나옵니다. certificate of completion을 통째로 익히세요.",
    vocabularyItems: [
      { word: "certificate of completion", meaningKo: "수료증", exampleSentence: "Participants receive a certificate of completion." },
      { word: "workshop participant", meaningKo: "워크숍 참가자", exampleSentence: "Workshop participants signed in at nine." }
    ]
  },
  {
    id: "r5-047",
    part: "reading_part_5",
    skill: "subject-verb agreement",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "Neither the manager nor the assistants _____ available for the call.",
    options: ["A. is", "B. are", "C. was", "D. has been"],
    correctOption: "B",
    explanationEn: "With 'neither...nor,' the verb often agrees with the nearer subject. 'Assistants' is plural, so 'are' is correct.",
    explanationKo: "'neither...nor'에서는 가까운 주어에 동사를 맞추는 경우가 많습니다. 가까운 주어 'assistants'가 복수이므로 'are'가 맞습니다.",
    koreanLearnerHint: "상관접속사 문제에서는 동사와 가장 가까운 주어를 확인하세요.",
    vocabularyItems: [
      { word: "available for the call", meaningKo: "통화가 가능한", exampleSentence: "The assistants are available for the call." },
      { word: "neither...nor", meaningKo: "~도 아니고 ~도 아닌", exampleSentence: "Neither the manager nor the assistants are available." }
    ]
  },
  {
    id: "r5-048",
    part: "reading_part_5",
    skill: "pronouns",
    difficulty: "easy",
    scoreBand: "600",
    prompt: "The safety manual is available online, and employees should read _____ before Friday.",
    options: ["A. it", "B. them", "C. they", "D. its"],
    correctOption: "A",
    explanationEn: "'It' refers to the singular noun phrase 'the safety manual.'",
    explanationKo: "'it'은 단수 명사구 'the safety manual'을 가리킵니다.",
    koreanLearnerHint: "대명사 문제에서는 앞에 나온 명사의 단수/복수 여부를 확인하세요.",
    vocabularyItems: [
      { word: "safety manual", meaningKo: "안전 매뉴얼", exampleSentence: "Employees should read the safety manual." },
      { word: "available online", meaningKo: "온라인에서 이용 가능한", exampleSentence: "The manual is available online." }
    ]
  },
  {
    id: "r5-049",
    part: "reading_part_5",
    skill: "modals",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "Employees _____ use personal devices to access confidential client files.",
    options: ["A. must not", "B. would", "C. used to", "D. might have"],
    correctOption: "A",
    explanationEn: "'Must not' expresses prohibition, which fits a rule about confidential files.",
    explanationKo: "기밀 고객 파일 접근에 대한 금지 규칙이므로 'must not'이 알맞습니다.",
    koreanLearnerHint: "규칙에서 금지를 나타낼 때는 'must not' 또는 'may not'이 자주 쓰입니다.",
    vocabularyItems: [
      { word: "personal device", meaningKo: "개인 기기", exampleSentence: "Do not use personal devices for client files." },
      { word: "confidential file", meaningKo: "기밀 파일", exampleSentence: "Confidential files require secure access." }
    ]
  },
  {
    id: "r5-050",
    part: "reading_part_5",
    skill: "comparatives",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "The updated checkout process is significantly _____ than the previous version.",
    options: ["A. fast", "B. fastest", "C. faster", "D. fastness"],
    correctOption: "C",
    explanationEn: "'Than' signals a comparison, so the comparative form 'faster' is required.",
    explanationKo: "'than'이 비교를 나타내므로 비교급 'faster'가 필요합니다.",
    koreanLearnerHint: "than이 보이면 비교급 형태를 먼저 의심하세요.",
    vocabularyItems: [
      { word: "checkout process", meaningKo: "결제 절차", exampleSentence: "The checkout process is faster now." },
      { word: "previous version", meaningKo: "이전 버전", exampleSentence: "The previous version was slower." }
    ]
  }
);

mockQuestions.push(
  {
    id: "r5-051",
    part: "reading_part_5",
    skill: "participles",
    difficulty: "hard",
    scoreBand: "800",
    prompt: "The proposal _____ by the planning committee includes several cost-saving measures.",
    options: ["A. approve", "B. approving", "C. approved", "D. approval"],
    correctOption: "C",
    explanationEn: "'Approved by the planning committee' is a reduced passive clause describing the proposal.",
    explanationKo: "'approved by the planning committee'는 제안서를 설명하는 축약된 수동 분사구입니다.",
    koreanLearnerHint: "제안서가 승인하는 것이 아니라 승인된 대상이므로 과거분사가 필요합니다.",
    vocabularyItems: [
      { word: "planning committee", meaningKo: "기획 위원회", exampleSentence: "The planning committee approved the proposal." },
      { word: "cost-saving measure", meaningKo: "비용 절감 방안", exampleSentence: "The proposal includes cost-saving measures." }
    ]
  },
  {
    id: "r5-052",
    part: "reading_part_5",
    skill: "infinitives",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "The supervisor reminded the interns _____ their ID badges at all times.",
    options: ["A. wear", "B. wearing", "C. to wear", "D. worn"],
    correctOption: "C",
    explanationEn: "The structure is 'remind someone to do something.'",
    explanationKo: "'remind someone to do something' 구조이므로 'to wear'가 알맞습니다.",
    koreanLearnerHint: "동사별로 뒤에 오는 형태가 정해져 있습니다. remind는 목적어 뒤에 to부정사를 자주 씁니다.",
    vocabularyItems: [
      { word: "remind someone to", meaningKo: "~에게 ~하라고 상기시키다", exampleSentence: "She reminded interns to wear badges." },
      { word: "at all times", meaningKo: "항상", exampleSentence: "Wear your badge at all times." }
    ]
  },
  {
    id: "r5-053",
    part: "reading_part_5",
    skill: "adverbs",
    difficulty: "easy",
    scoreBand: "600",
    prompt: "The maintenance request was handled _____ after it was submitted.",
    options: ["A. quick", "B. quickly", "C. quicker", "D. quickest"],
    correctOption: "B",
    explanationEn: "The blank modifies the verb phrase 'was handled,' so an adverb is needed.",
    explanationKo: "빈칸은 동사구 'was handled'를 꾸미므로 부사 'quickly'가 필요합니다.",
    koreanLearnerHint: "수동태 동사도 부사가 꾸밀 수 있습니다. 형용사 quick과 부사 quickly를 구분하세요.",
    vocabularyItems: [
      { word: "maintenance request", meaningKo: "수리 요청", exampleSentence: "The maintenance request was handled quickly." },
      { word: "submit a request", meaningKo: "요청을 제출하다", exampleSentence: "Employees can submit a request online." }
    ]
  },
  {
    id: "r5-054",
    part: "reading_part_5",
    skill: "conditionals",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "Unless the client requests changes, the brochure _____ to the printer tomorrow.",
    options: ["A. sends", "B. was sent", "C. will be sent", "D. has sent"],
    correctOption: "C",
    explanationEn: "The brochure is the object being sent tomorrow, so a future passive form is needed.",
    explanationKo: "브로셔는 내일 보내지는 대상이므로 미래 수동형 'will be sent'가 필요합니다.",
    koreanLearnerHint: "unless절은 조건을 말하고, 주절에서는 미래의 동작을 나타냅니다. 대상이 보내지는 것이면 수동태를 씁니다.",
    vocabularyItems: [
      { word: "request changes", meaningKo: "수정을 요청하다", exampleSentence: "The client may request changes." },
      { word: "send to the printer", meaningKo: "인쇄소로 보내다", exampleSentence: "The brochure will be sent to the printer." }
    ]
  },
  {
    id: "r5-055",
    part: "reading_part_5",
    skill: "vocabulary",
    difficulty: "hard",
    scoreBand: "800",
    prompt: "The airline will _____ passengers for meals if the delay lasts more than four hours.",
    options: ["A. reimburse", "B. renovate", "C. relocate", "D. reproduce"],
    correctOption: "A",
    explanationEn: "'Reimburse' means to pay someone back for expenses, which fits the context of meal costs.",
    explanationKo: "'reimburse'는 비용을 환급하다라는 뜻으로 식사 비용 문맥에 알맞습니다.",
    koreanLearnerHint: "비슷한 re- 단어가 나오면 뜻을 정확히 구분해야 합니다. 비용을 돌려주는 것은 reimburse입니다.",
    vocabularyItems: [
      { word: "reimburse", meaningKo: "환급하다, 변제하다", exampleSentence: "The airline will reimburse passengers for meals." },
      { word: "delay lasts", meaningKo: "지연이 지속되다", exampleSentence: "The delay lasted more than four hours." }
    ]
  },
  {
    id: "r5-056",
    part: "reading_part_5",
    skill: "prepositions",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "The marketing director congratulated the team _____ completing the campaign early.",
    options: ["A. for", "B. to", "C. at", "D. about"],
    correctOption: "A",
    explanationEn: "The expression is 'congratulate someone for/on doing something.' Among the options, 'for' fits.",
    explanationKo: "'~한 것에 대해 축하하다'는 'congratulate someone for/on doing something'으로 표현합니다. 선택지 중 'for'가 알맞습니다.",
    koreanLearnerHint: "동사와 함께 쓰이는 전치사는 묶어서 익히세요. congratulate someone for doing something이 자연스럽습니다.",
    vocabularyItems: [
      { word: "congratulate", meaningKo: "축하하다", exampleSentence: "The director congratulated the team." },
      { word: "complete a campaign", meaningKo: "캠페인을 완료하다", exampleSentence: "The team completed the campaign early." }
    ]
  },
  {
    id: "r5-057",
    part: "reading_part_5",
    skill: "word form",
    difficulty: "hard",
    scoreBand: "800",
    prompt: "The new packaging is more durable and _____ than the old design.",
    options: ["A. attract", "B. attractive", "C. attraction", "D. attractively"],
    correctOption: "B",
    explanationEn: "The blank is parallel with the adjective 'durable,' so another adjective is required.",
    explanationKo: "빈칸은 형용사 'durable'과 병렬 구조이므로 또 다른 형용사 'attractive'가 필요합니다.",
    koreanLearnerHint: "and로 연결된 병렬 구조에서는 앞뒤 품사가 같아야 합니다.",
    vocabularyItems: [
      { word: "durable", meaningKo: "내구성이 있는", exampleSentence: "The packaging is durable." },
      { word: "attractive", meaningKo: "매력적인", exampleSentence: "The new design is attractive." }
    ]
  },
  {
    id: "r5-058",
    part: "reading_part_5",
    skill: "conjunctions",
    difficulty: "hard",
    scoreBand: "800",
    prompt: "The team postponed the launch _____ several important tests had not been completed.",
    options: ["A. because", "B. despite", "C. therefore", "D. unless"],
    correctOption: "A",
    explanationEn: "'Because' introduces the reason the launch was postponed.",
    explanationKo: "중요한 테스트가 완료되지 않았다는 이유를 나타내므로 'because'가 알맞습니다.",
    koreanLearnerHint: "뒤에 주어와 동사가 있는 완전한 절이 오고 이유를 나타내면 because가 자연스럽습니다.",
    vocabularyItems: [
      { word: "postpone the launch", meaningKo: "출시를 연기하다", exampleSentence: "The team postponed the launch." },
      { word: "complete tests", meaningKo: "테스트를 완료하다", exampleSentence: "Several tests had not been completed." }
    ]
  },
  {
    id: "r5-059",
    part: "reading_part_5",
    skill: "vocabulary",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "The hotel offers _____ parking for guests staying more than two nights.",
    options: ["A. complimentary", "B. compulsory", "C. comparable", "D. consecutive"],
    correctOption: "A",
    explanationEn: "'Complimentary' means free of charge, which fits guest parking.",
    explanationKo: "'complimentary'는 무료의라는 뜻으로 투숙객 주차 문맥에 알맞습니다.",
    koreanLearnerHint: "complimentary는 TOEIC에서 호텔, 서비스 문맥에서 '무료의'라는 뜻으로 자주 나옵니다.",
    vocabularyItems: [
      { word: "complimentary parking", meaningKo: "무료 주차", exampleSentence: "The hotel offers complimentary parking." },
      { word: "stay more than two nights", meaningKo: "2박 이상 머물다", exampleSentence: "Guests staying more than two nights receive parking." }
    ]
  },
  {
    id: "r5-060",
    part: "reading_part_5",
    skill: "verb tense",
    difficulty: "medium",
    scoreBand: "700",
    prompt: "Since the new policy was introduced, customer complaints _____.",
    options: ["A. decrease", "B. decreased", "C. have decreased", "D. decreasing"],
    correctOption: "C",
    explanationEn: "'Since' connects a past starting point to the present, so the present perfect is correct.",
    explanationKo: "'since'는 과거의 시작점부터 현재까지 이어지는 변화를 나타내므로 현재완료가 맞습니다.",
    koreanLearnerHint: "since가 시간 접속사로 쓰이면 현재완료와 함께 쓰이는 경우가 많습니다.",
    vocabularyItems: [
      { word: "introduce a policy", meaningKo: "정책을 도입하다", exampleSentence: "The company introduced a new policy." },
      { word: "customer complaint", meaningKo: "고객 불만", exampleSentence: "Customer complaints have decreased." }
    ]
  }
);

mockQuestions.push(
  {
    id: "l3-001",
    part: "listening_part_3",
    skill: "listening conversation - purpose",
    difficulty: "easy",
    scoreBand: "600",
    audioId: "conversation_schedule_change",
    audioFile: "conversation_schedule_change.wav",
    audioTitle: "Conversation: Schedule Change",
    transcript:
      "Woman: Hi, Mark. Did you see the message about tomorrow morning?\nMan: Not yet. Did something change?\nWoman: Yes. The product demonstration has been moved from 9:30 to 11:00 because the conference room is being cleaned.\nMan: Thanks for telling me. Should I notify the sales team?\nWoman: Yes, please send them a short email before 5 o'clock today.",
    prompt: "What are the speakers mainly discussing?",
    options: [
      "A. A change to a product demonstration time.",
      "B. A problem with a sales report.",
      "C. A new cleaning service contract.",
      "D. A request for more conference rooms."
    ],
    correctOption: "A",
    explanationEn: "The speakers discuss that the product demonstration has been moved from 9:30 to 11:00.",
    explanationKo: "두 사람은 제품 시연 시간이 9시 30분에서 11시로 변경된 것에 대해 이야기하고 있습니다.",
    koreanLearnerHint: "대화의 초반에 'Did something change?' 뒤에 핵심 변경 사항이 나옵니다.",
    vocabularyItems: [
      { word: "product demonstration", meaningKo: "제품 시연", exampleSentence: "The product demonstration was moved to 11:00." },
      { word: "notify", meaningKo: "알리다, 통보하다", exampleSentence: "Please notify the sales team." }
    ]
  },
  {
    id: "l3-002",
    part: "listening_part_3",
    skill: "listening conversation - detail",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "conversation_schedule_change",
    audioFile: "conversation_schedule_change.wav",
    audioTitle: "Conversation: Schedule Change",
    transcript:
      "Woman: Hi, Mark. Did you see the message about tomorrow morning?\nMan: Not yet. Did something change?\nWoman: Yes. The product demonstration has been moved from 9:30 to 11:00 because the conference room is being cleaned.\nMan: Thanks for telling me. Should I notify the sales team?\nWoman: Yes, please send them a short email before 5 o'clock today.",
    prompt: "Why was the demonstration moved?",
    options: [
      "A. The conference room is being cleaned.",
      "B. The sales team requested a later time.",
      "C. The product samples have not arrived.",
      "D. The presenter is out of the office."
    ],
    correctOption: "A",
    explanationEn: "The woman says the demonstration was moved because the conference room is being cleaned.",
    explanationKo: "여자는 회의실을 청소 중이기 때문에 시연 시간이 변경되었다고 말합니다.",
    koreanLearnerHint: "'because' 뒤에 이유가 직접 나옵니다. 듣기에서는 이유 연결어를 놓치지 마세요.",
    vocabularyItems: [
      { word: "be moved", meaningKo: "변경되다, 옮겨지다", exampleSentence: "The meeting was moved to 11:00." },
      { word: "conference room", meaningKo: "회의실", exampleSentence: "The conference room is being cleaned." }
    ]
  },
  {
    id: "l3-003",
    part: "listening_part_3",
    skill: "listening conversation - next action",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "conversation_schedule_change",
    audioFile: "conversation_schedule_change.wav",
    audioTitle: "Conversation: Schedule Change",
    transcript:
      "Woman: Hi, Mark. Did you see the message about tomorrow morning?\nMan: Not yet. Did something change?\nWoman: Yes. The product demonstration has been moved from 9:30 to 11:00 because the conference room is being cleaned.\nMan: Thanks for telling me. Should I notify the sales team?\nWoman: Yes, please send them a short email before 5 o'clock today.",
    prompt: "What will the man probably do next?",
    options: [
      "A. Send an email to the sales team.",
      "B. Clean the conference room.",
      "C. Cancel the product demonstration.",
      "D. Prepare a new sales report."
    ],
    correctOption: "A",
    explanationEn: "The woman asks him to send the sales team a short email before 5 o'clock.",
    explanationKo: "여자는 남자에게 5시 전에 영업팀에 짧은 이메일을 보내 달라고 합니다.",
    koreanLearnerHint: "대화 마지막의 요청은 next action 문제의 단서가 되는 경우가 많습니다.",
    vocabularyItems: [
      { word: "short email", meaningKo: "짧은 이메일", exampleSentence: "Send them a short email before five." },
      { word: "sales team", meaningKo: "영업팀", exampleSentence: "The sales team should be notified." }
    ]
  },
  {
    id: "l4-001",
    part: "listening_part_4",
    skill: "listening talk - main idea",
    difficulty: "easy",
    scoreBand: "600",
    audioId: "talk_store_renovation",
    audioFile: "talk_store_renovation.wav",
    audioTitle: "Talk: Store Entrance Renovation",
    transcript:
      "Good morning. This is an announcement for all customers at Green Market. The front entrance will be closed on Monday and Tuesday while workers install new automatic doors. Customers should use the side entrance next to the pharmacy. All departments will remain open during regular business hours. We apologize for any inconvenience.",
    prompt: "What is the announcement mainly about?",
    options: [
      "A. A temporary entrance closure.",
      "B. A change in store ownership.",
      "C. A sale on pharmacy products.",
      "D. A new customer membership card."
    ],
    correctOption: "A",
    explanationEn: "The announcement explains that the front entrance will be closed while new doors are installed.",
    explanationKo: "안내 방송은 새 자동문 설치 동안 정문이 닫힌다는 내용을 설명합니다.",
    koreanLearnerHint: "공식 안내에서는 첫 두 문장에 주제와 대상이 나오는 경우가 많습니다.",
    vocabularyItems: [
      { word: "front entrance", meaningKo: "정문", exampleSentence: "The front entrance will be closed." },
      { word: "automatic doors", meaningKo: "자동문", exampleSentence: "Workers will install automatic doors." }
    ]
  },
  {
    id: "l4-002",
    part: "listening_part_4",
    skill: "listening talk - detail",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "talk_store_renovation",
    audioFile: "talk_store_renovation.wav",
    audioTitle: "Talk: Store Entrance Renovation",
    transcript:
      "Good morning. This is an announcement for all customers at Green Market. The front entrance will be closed on Monday and Tuesday while workers install new automatic doors. Customers should use the side entrance next to the pharmacy. All departments will remain open during regular business hours. We apologize for any inconvenience.",
    prompt: "Where should customers enter the store?",
    options: [
      "A. Through the side entrance next to the pharmacy.",
      "B. Through the front entrance near the produce area.",
      "C. Through the employee parking lot.",
      "D. Through the delivery entrance behind the store."
    ],
    correctOption: "A",
    explanationEn: "Customers are told to use the side entrance next to the pharmacy.",
    explanationKo: "고객은 약국 옆의 측면 출입구를 이용하라는 안내를 받습니다.",
    koreanLearnerHint: "Where 문제에서는 장소 전치사와 주변 위치 표현을 집중해서 들으세요.",
    vocabularyItems: [
      { word: "side entrance", meaningKo: "측면 출입구", exampleSentence: "Use the side entrance next to the pharmacy." },
      { word: "pharmacy", meaningKo: "약국", exampleSentence: "The side entrance is next to the pharmacy." }
    ]
  },
  {
    id: "l4-003",
    part: "listening_part_4",
    skill: "listening talk - detail",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "talk_store_renovation",
    audioFile: "talk_store_renovation.wav",
    audioTitle: "Talk: Store Entrance Renovation",
    transcript:
      "Good morning. This is an announcement for all customers at Green Market. The front entrance will be closed on Monday and Tuesday while workers install new automatic doors. Customers should use the side entrance next to the pharmacy. All departments will remain open during regular business hours. We apologize for any inconvenience.",
    prompt: "What is mentioned about store departments?",
    options: [
      "A. They will remain open during regular business hours.",
      "B. They will close earlier than usual.",
      "C. They will move next to the pharmacy.",
      "D. They will offer special discounts."
    ],
    correctOption: "A",
    explanationEn: "The announcement says all departments will remain open during regular business hours.",
    explanationKo: "안내 방송에서는 모든 부서가 정규 영업 시간 동안 계속 운영된다고 말합니다.",
    koreanLearnerHint: "'remain open'은 계속 운영된다는 뜻입니다. 폐쇄되는 것은 정문이지 매장 전체가 아닙니다.",
    vocabularyItems: [
      { word: "remain open", meaningKo: "계속 운영하다", exampleSentence: "All departments will remain open." },
      { word: "regular business hours", meaningKo: "정규 영업 시간", exampleSentence: "The store is open during regular business hours." }
    ]
  },
  {
    id: "l3-004",
    part: "listening_part_3",
    skill: "listening conversation - detail",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "conversation_invoice_issue",
    audioFile: "conversation_invoice_issue.wav",
    audioTitle: "Conversation: Invoice Issue",
    transcript:
      "Man: Hello, this is David from accounting. I am calling about invoice 4821.\nWoman: Is there a problem with it?\nMan: The invoice lists twenty boxes of printer paper, but we only received twelve.\nWoman: I am sorry about that. I will check the shipping record and send a corrected invoice this afternoon.",
    prompt: "What problem does the man report?",
    options: [
      "A. The invoice lists more boxes than were received.",
      "B. The printer paper was delivered to the wrong office.",
      "C. The shipping record was lost.",
      "D. The invoice was paid twice."
    ],
    correctOption: "A",
    explanationEn: "The man says the invoice lists twenty boxes, but only twelve were received.",
    explanationKo: "남자는 송장에는 20상자가 적혀 있지만 실제로는 12상자만 받았다고 말합니다.",
    koreanLearnerHint: "숫자 비교가 핵심입니다. twenty와 twelve를 구분해서 들어야 합니다.",
    vocabularyItems: [
      { word: "invoice", meaningKo: "송장, 청구서", exampleSentence: "The invoice lists twenty boxes." },
      { word: "printer paper", meaningKo: "프린터 용지", exampleSentence: "They received twelve boxes of printer paper." }
    ]
  },
  {
    id: "l3-005",
    part: "listening_part_3",
    skill: "listening conversation - next action",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "conversation_invoice_issue",
    audioFile: "conversation_invoice_issue.wav",
    audioTitle: "Conversation: Invoice Issue",
    transcript:
      "Man: Hello, this is David from accounting. I am calling about invoice 4821.\nWoman: Is there a problem with it?\nMan: The invoice lists twenty boxes of printer paper, but we only received twelve.\nWoman: I am sorry about that. I will check the shipping record and send a corrected invoice this afternoon.",
    prompt: "What will the woman do this afternoon?",
    options: [
      "A. Send a corrected invoice.",
      "B. Deliver eight more boxes.",
      "C. Visit the accounting department.",
      "D. Cancel invoice 4821."
    ],
    correctOption: "A",
    explanationEn: "The woman says she will check the shipping record and send a corrected invoice this afternoon.",
    explanationKo: "여자는 배송 기록을 확인하고 오늘 오후에 수정된 송장을 보내겠다고 말합니다.",
    koreanLearnerHint: "마지막 문장의 미래 행동이 정답입니다. 'will' 뒤의 동작을 들으세요.",
    vocabularyItems: [
      { word: "corrected invoice", meaningKo: "수정된 송장", exampleSentence: "She will send a corrected invoice." },
      { word: "shipping record", meaningKo: "배송 기록", exampleSentence: "She will check the shipping record." }
    ]
  },
  {
    id: "l3-006",
    part: "listening_part_3",
    skill: "listening conversation - speaker identity",
    difficulty: "easy",
    scoreBand: "600",
    audioId: "conversation_invoice_issue",
    audioFile: "conversation_invoice_issue.wav",
    audioTitle: "Conversation: Invoice Issue",
    transcript:
      "Man: Hello, this is David from accounting. I am calling about invoice 4821.\nWoman: Is there a problem with it?\nMan: The invoice lists twenty boxes of printer paper, but we only received twelve.\nWoman: I am sorry about that. I will check the shipping record and send a corrected invoice this afternoon.",
    prompt: "Where does the man most likely work?",
    options: [
      "A. In accounting.",
      "B. In a pharmacy.",
      "C. In a conference center.",
      "D. In a shipping warehouse."
    ],
    correctOption: "A",
    explanationEn: "The man introduces himself as David from accounting.",
    explanationKo: "남자는 자신을 회계 부서의 David라고 소개합니다.",
    koreanLearnerHint: "대화 첫 문장의 자기소개는 직무나 부서를 묻는 문제의 단서가 됩니다.",
    vocabularyItems: [
      { word: "accounting", meaningKo: "회계 부서", exampleSentence: "David works in accounting." },
      { word: "most likely", meaningKo: "아마도, 가장 가능성 있게", exampleSentence: "Where does he most likely work?" }
    ]
  }
);

const additionalListeningPart3Questions = [
  {
    audioId: "part3_office_equipment",
    audioFile: "part3_office_equipment.mp3",
    audioTitle: "Conversation: Office Equipment",
    transcript:
      "Man: Hi Sarah, did the new office chairs arrive this morning?\nWoman: Yes, they were delivered about an hour ago. The maintenance team is setting them up now.\nMan: Great. Could you also check whether the conference room projector was repaired?\nWoman: Sure, I'll contact the technician after lunch.",
    questions: [
      {
        skill: "listening conversation - main idea",
        prompt: "What are the speakers mainly discussing?",
        options: ["A. A business trip", "B. Office equipment", "C. A marketing campaign", "D. Employee training"],
        correctOption: "B",
        explanationEn: "The speakers talk about new office chairs and a conference room projector, so they are discussing office equipment."
      },
      {
        skill: "listening conversation - detail",
        prompt: "When were the chairs delivered?",
        options: ["A. Yesterday evening", "B. This morning", "C. After lunch", "D. Last week"],
        correctOption: "B",
        explanationEn: "The man asks whether the chairs arrived this morning, and the woman confirms that they did."
      },
      {
        skill: "listening conversation - next action",
        prompt: "What will the woman do later?",
        options: ["A. Repair a projector", "B. Buy new chairs", "C. Contact a technician", "D. Clean the conference room"],
        correctOption: "C",
        explanationEn: "The woman says she will contact the technician after lunch."
      }
    ]
  },
  {
    audioId: "part3_restaurant_reservation",
    audioFile: "part3_restaurant_reservation.mp3",
    audioTitle: "Conversation: Restaurant Reservation",
    transcript:
      "Woman: Good evening, Riverside Restaurant. How may I help you?\nMan: Hi, I'd like to reserve a table for four tomorrow night.\nWoman: Certainly. Would you prefer indoor or outdoor seating?\nMan: Outdoor seating, please, if available.\nWoman: No problem. Your reservation is confirmed for 7:30 p.m.",
    questions: [
      {
        skill: "listening conversation - location",
        prompt: "Where does the conversation most likely take place?",
        options: ["A. At a hotel", "B. At a restaurant", "C. At a theater", "D. At a travel agency"],
        correctOption: "B",
        explanationEn: "The woman answers the phone by saying Riverside Restaurant, so the conversation takes place at a restaurant."
      },
      {
        skill: "listening conversation - detail",
        prompt: "How many people will attend?",
        options: ["A. Two", "B. Three", "C. Four", "D. Five"],
        correctOption: "C",
        explanationEn: "The man says he would like to reserve a table for four."
      },
      {
        skill: "listening conversation - request",
        prompt: "What does the man request?",
        options: ["A. A private room", "B. A later reservation", "C. Outdoor seating", "D. A menu recommendation"],
        correctOption: "C",
        explanationEn: "The man requests outdoor seating if it is available."
      }
    ]
  },
  {
    audioId: "part3_package_delivery",
    audioFile: "part3_package_delivery.mp3",
    audioTitle: "Conversation: Package Delivery",
    transcript:
      "Man: Hello, I'm here to pick up a package for GreenTech Industries.\nWoman: May I see your identification, please?\nMan: Sure. Here's my employee card.\nWoman: Thank you. Please sign here before taking the package.",
    questions: [
      {
        skill: "listening conversation - location",
        prompt: "Where most likely are the speakers?",
        options: ["A. At a shipping center", "B. At a supermarket", "C. At a museum", "D. At a bank"],
        correctOption: "A",
        explanationEn: "The man is picking up a package, so the speakers are most likely at a shipping center."
      },
      {
        skill: "listening conversation - detail",
        prompt: "What does the woman ask for?",
        options: ["A. A receipt", "B. Identification", "C. A delivery address", "D. A business card"],
        correctOption: "B",
        explanationEn: "The woman asks to see the man's identification."
      },
      {
        skill: "listening conversation - next action",
        prompt: "What must the man do before leaving?",
        options: ["A. Pay a fee", "B. Open the package", "C. Sign a document", "D. Call his company"],
        correctOption: "C",
        explanationEn: "The woman tells the man to sign before taking the package."
      }
    ]
  },
  {
    audioId: "part3_delayed_delivery",
    audioFile: "part3_delayed_delivery.mp3",
    audioTitle: "Conversation: Delayed Delivery",
    transcript:
      "Woman: Hi, I'm calling about the office supplies we ordered last week. They were supposed to arrive yesterday.\nMan: Let me check the tracking information. It looks like the shipment was delayed because of bad weather.\nWoman: I see. When should we expect delivery?\nMan: According to the system, it should arrive tomorrow morning before 10 a.m.",
    questions: [
      {
        skill: "listening conversation - problem",
        prompt: "What problem is discussed?",
        options: ["A. Incorrect pricing", "B. A delayed shipment", "C. Missing employees", "D. A canceled order"],
        correctOption: "B",
        explanationEn: "The woman says the office supplies were supposed to arrive yesterday, and the man says the shipment was delayed."
      },
      {
        skill: "listening conversation - reason",
        prompt: "Why was the shipment delayed?",
        options: ["A. A computer error", "B. Heavy traffic", "C. Bad weather", "D. Staff shortages"],
        correctOption: "C",
        explanationEn: "The man says the shipment was delayed because of bad weather."
      },
      {
        skill: "listening conversation - detail",
        prompt: "When will the order probably arrive?",
        options: ["A. This afternoon", "B. Tomorrow morning", "C. Next week", "D. Tonight"],
        correctOption: "B",
        explanationEn: "According to the system, the order should arrive tomorrow morning before 10 a.m."
      }
    ]
  }
];

mockQuestions.push(
  ...additionalListeningPart3Questions.flatMap((conversation, conversationIndex) =>
    conversation.questions.map((question, questionIndex) => ({
      id: `l3-${201 + conversationIndex * 3 + questionIndex}`,
      part: "listening_part_3",
      skill: question.skill,
      difficulty: questionIndex === 0 ? "easy" : "medium",
      scoreBand: questionIndex === 0 ? "600" : "700",
      audioId: conversation.audioId,
      audioFile: conversation.audioFile,
      audioTitle: conversation.audioTitle,
      transcript: conversation.transcript,
      prompt: question.prompt,
      options: question.options,
      correctOption: question.correctOption,
      explanationEn: question.explanationEn,
      koreanLearnerHint: "For TOEIC Part 3, listen for the situation first, then focus on numbers, places, requests, and the next action.",
      vocabularyItems: []
    }))
  )
);

const additionalListeningPart4Questions = [
  {
    audioId: "part4_airport_announcement",
    audioFile: "part4_airport_announcement.mp3",
    audioTitle: "Announcement: Airport Boarding",
    transcript:
      "Attention passengers traveling on Flight 452 to Singapore. Boarding will begin at Gate 12 in approximately fifteen minutes. Please have your boarding passes and identification ready before entering the boarding area. Passengers requiring special assistance may board first. Thank you for your cooperation.",
    questions: [
      {
        skill: "listening talk - main idea",
        prompt: "What is the announcement mainly about?",
        options: ["A. A delayed flight", "B. A boarding procedure", "C. A baggage problem", "D. A gate change"],
        correctOption: "B",
        explanationEn: "The announcement explains when boarding begins, what passengers should prepare, and who may board first."
      },
      {
        skill: "listening talk - detail",
        prompt: "What should passengers prepare?",
        options: ["A. Their luggage receipts", "B. Their passports only", "C. Their boarding passes and identification", "D. Their meal tickets"],
        correctOption: "C",
        explanationEn: "Passengers are asked to have their boarding passes and identification ready."
      },
      {
        skill: "listening talk - detail",
        prompt: "Who may board first?",
        options: ["A. Business-class passengers", "B. Airline employees", "C. Families with children", "D. Passengers needing assistance"],
        correctOption: "D",
        explanationEn: "The announcement says passengers requiring special assistance may board first."
      }
    ]
  },
  {
    audioId: "part4_voicemail_message",
    audioFile: "part4_voicemail_message.mp3",
    audioTitle: "Voicemail: Auto Repair",
    transcript:
      "Hello Mr. Carter, this is Emily from Westside Auto Repair. I'm calling to let you know that your vehicle has been repaired and is ready for pickup. We replaced the front brake pads and completed the oil change you requested. Our office closes at 6 p.m. today, but you may also pick up the car tomorrow morning after 8 a.m. Thank you.",
    questions: [
      {
        skill: "listening talk - purpose",
        prompt: "Why is Emily calling?",
        options: ["A. To schedule an appointment", "B. To discuss car insurance", "C. To announce that repairs are complete", "D. To request payment information"],
        correctOption: "C",
        explanationEn: "Emily says the vehicle has been repaired and is ready for pickup."
      },
      {
        skill: "listening talk - detail",
        prompt: "What service was completed?",
        options: ["A. Tire replacement", "B. Brake repair", "C. Window cleaning", "D. Engine replacement"],
        correctOption: "B",
        explanationEn: "Emily says the front brake pads were replaced."
      },
      {
        skill: "listening talk - detail",
        prompt: "When can the customer pick up the vehicle tomorrow?",
        options: ["A. After 6 a.m.", "B. After 7 a.m.", "C. After 8 a.m.", "D. After 9 a.m."],
        correctOption: "C",
        explanationEn: "Emily says the customer may pick up the car tomorrow morning after 8 a.m."
      }
    ]
  },
  {
    audioId: "part4_store_announcement",
    audioFile: "part4_store_announcement.mp3",
    audioTitle: "Announcement: Store Sale",
    transcript:
      "Good afternoon shoppers. Today only, all winter jackets on the second floor are available at a twenty percent discount. Customers who spend more than one hundred dollars will also receive a free gift card for future purchases. Please visit our customer service desk for more information.",
    questions: [
      {
        skill: "listening talk - detail",
        prompt: "What product is on sale?",
        options: ["A. Shoes", "B. Electronics", "C. Winter jackets", "D. Furniture"],
        correctOption: "C",
        explanationEn: "The announcement says all winter jackets are available at a twenty percent discount."
      },
      {
        skill: "listening talk - detail",
        prompt: "Where are the sale items located?",
        options: ["A. On the first floor", "B. On the second floor", "C. Near the entrance", "D. At the customer service desk"],
        correctOption: "B",
        explanationEn: "The winter jackets on sale are located on the second floor."
      },
      {
        skill: "listening talk - detail",
        prompt: "What will customers receive after spending over $100?",
        options: ["A. A free jacket", "B. A parking voucher", "C. A discount coupon", "D. A gift card"],
        correctOption: "D",
        explanationEn: "Customers who spend more than one hundred dollars will receive a free gift card."
      }
    ]
  }
];

mockQuestions.push(
  ...additionalListeningPart4Questions.flatMap((talk, talkIndex) =>
    talk.questions.map((question, questionIndex) => ({
      id: `l4-${201 + talkIndex * 3 + questionIndex}`,
      part: "listening_part_4",
      skill: question.skill,
      difficulty: questionIndex === 0 ? "easy" : "medium",
      scoreBand: questionIndex === 0 ? "600" : "700",
      audioId: talk.audioId,
      audioFile: talk.audioFile,
      audioTitle: talk.audioTitle,
      transcript: talk.transcript,
      prompt: question.prompt,
      options: question.options,
      correctOption: question.correctOption,
      explanationEn: question.explanationEn,
      koreanLearnerHint: "For TOEIC Part 4, identify the type of talk first, then listen for times, locations, requirements, and offers.",
      vocabularyItems: []
    }))
  )
);

mockQuestions.push(
  {
    id: "l2-101",
    part: "listening_part_2",
    skill: "listening question response",
    difficulty: "easy",
    scoreBand: "600",
    audioId: "part2_001",
    audioFile: "l2_ex1_answer_c.mp3",
    audioTitle: "Question Response 1",
    transcript:
      "Question: Where is the meeting being held?\nA. With the marketing team.\nB. At three o'clock.\nC. In the main conference room.",
    prompt: "Select the best response to the question.",
    options: ["A", "B", "C"],
    correctOption: "C",
    explanationEn: "The question asks where the meeting is being held, so a place is needed. Choice C gives a place: the main conference room.",
    explanationKo: "질문은 회의가 어디에서 열리는지 묻고 있으므로 장소가 필요합니다. C는 장소인 main conference room을 제시합니다.",
    koreanLearnerHint: "Where 질문은 장소를 묻습니다. 시간이나 사람/팀을 말하는 응답은 자연스럽지 않습니다.",
    vocabularyItems: [
      { word: "be held", meaningKo: "열리다, 개최되다", exampleSentence: "The meeting is being held in the main conference room." },
      { word: "main conference room", meaningKo: "주 회의실", exampleSentence: "The meeting is in the main conference room." },
      { word: "marketing team", meaningKo: "마케팅 팀", exampleSentence: "The marketing team will attend the meeting." }
    ]
  },
  {
    id: "l2-102",
    part: "listening_part_2",
    skill: "listening question response",
    difficulty: "easy",
    scoreBand: "600",
    audioId: "part2_002",
    audioFile: "l2_ex2_answer_a.mp3",
    audioTitle: "Question Response 2",
    transcript:
      "Question: Have you finished the report yet?\nA. Yes, I sent it this morning.\nB. It's on the desk.\nC. I work every day.",
    prompt: "Select the best response to the question.",
    options: ["A", "B", "C"],
    correctOption: "A",
    explanationEn: "The question asks whether the report has been finished. Choice A answers yes and explains that it was sent this morning.",
    explanationKo: "질문은 보고서를 끝냈는지 묻고 있습니다. A는 그렇다고 답하며 오늘 아침에 보냈다고 설명합니다.",
    koreanLearnerHint: "Have you finished...? 는 완료 여부를 묻는 질문입니다. Yes/No와 함께 완료된 행동을 설명하는 응답이 자연스럽습니다.",
    vocabularyItems: [
      { word: "finish the report", meaningKo: "보고서를 끝내다", exampleSentence: "Have you finished the report yet?" },
      { word: "send it", meaningKo: "그것을 보내다", exampleSentence: "I sent it this morning." },
      { word: "this morning", meaningKo: "오늘 아침", exampleSentence: "The report was sent this morning." }
    ]
  },
  {
    id: "l2-103",
    part: "listening_part_2",
    skill: "listening question response",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "part2_003",
    audioFile: "l2_ex3_answer_a.mp3",
    audioTitle: "Question Response 3",
    transcript:
      "Question: Could you take a message for me?\nA. Sure, what should I write down?\nB. The message was clear.\nC. I sent an email yesterday.",
    prompt: "Select the best response to the question.",
    options: ["A", "B", "C"],
    correctOption: "A",
    explanationEn: "The question is a request to take a message. Choice A accepts the request and asks what should be written down.",
    explanationKo: "질문은 메시지를 받아 달라는 요청입니다. A는 요청을 수락하고 무엇을 적어야 하는지 묻습니다.",
    koreanLearnerHint: "Could you...? 는 정중한 요청입니다. 요청을 받아들이거나 필요한 정보를 묻는 응답이 자연스럽습니다.",
    vocabularyItems: [
      { word: "take a message", meaningKo: "메시지를 받아 적다", exampleSentence: "Could you take a message for me?" },
      { word: "write down", meaningKo: "적어 두다", exampleSentence: "What should I write down?" },
      { word: "clear", meaningKo: "명확한", exampleSentence: "The message was clear." }
    ]
  },
  {
    id: "l2-104",
    part: "listening_part_2",
    skill: "listening question response",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "part2_004",
    audioFile: "l2_ex4_answer_c.mp3",
    audioTitle: "Question Response 4",
    transcript:
      "Question: Why was the meeting canceled?\nA. With our clients.\nB. In the afternoon.\nC. Because the manager was sick.",
    prompt: "Select the best response to the question.",
    options: ["A", "B", "C"],
    correctOption: "C",
    explanationEn: "The question asks why the meeting was canceled, so a reason is needed. Choice C gives the reason: the manager was sick.",
    explanationKo: "질문은 회의가 왜 취소되었는지 묻고 있으므로 이유가 필요합니다. C는 매니저가 아팠다는 이유를 제시합니다.",
    koreanLearnerHint: "Why 질문은 이유를 묻습니다. Because로 시작하는 응답은 이유를 제시할 때 자주 쓰입니다.",
    vocabularyItems: [
      { word: "be canceled", meaningKo: "취소되다", exampleSentence: "The meeting was canceled." },
      { word: "manager", meaningKo: "관리자, 매니저", exampleSentence: "The manager was sick." },
      { word: "sick", meaningKo: "아픈", exampleSentence: "The manager was sick yesterday." }
    ]
  },
  {
    id: "l2-105",
    part: "listening_part_2",
    skill: "listening question response",
    difficulty: "easy",
    scoreBand: "600",
    audioId: "part2_005",
    audioFile: "l2_ex5_answer_b.mp3",
    audioTitle: "Question Response 5",
    transcript:
      "Question: Do you accept credit cards?\nA. On the counter.\nB. Yes, we do.\nC. For two hours.",
    prompt: "Select the best response to the question.",
    options: ["A", "B", "C"],
    correctOption: "B",
    explanationEn: "The question asks whether credit cards are accepted. Choice B directly answers yes.",
    explanationKo: "질문은 신용카드를 받는지 묻고 있습니다. B는 그렇다고 직접 답합니다.",
    koreanLearnerHint: "Do you...? 로 시작하는 Yes/No 질문입니다. 장소나 시간 표현보다 yes/no 응답이 자연스럽습니다.",
    vocabularyItems: [
      { word: "accept credit cards", meaningKo: "신용카드를 받다", exampleSentence: "Do you accept credit cards?" },
      { word: "counter", meaningKo: "계산대, 카운터", exampleSentence: "The card reader is on the counter." },
      { word: "for two hours", meaningKo: "두 시간 동안", exampleSentence: "The store was closed for two hours." }
    ]
  },
  {
    id: "l2-106",
    part: "listening_part_2",
    skill: "listening question response",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "part2_006",
    audioFile: "l2_ex6_answer_c.mp3",
    audioTitle: "Question Response 6",
    transcript:
      "Question: Who is in charge of this project?\nA. In the office.\nB. Next week.\nC. Ms. Williams is.",
    prompt: "Select the best response to the question.",
    options: ["A", "B", "C"],
    correctOption: "C",
    explanationEn: "The question asks who is responsible for the project. Choice C names the person in charge: Ms. Williams.",
    explanationKo: "질문은 이 프로젝트의 담당자가 누구인지 묻고 있습니다. C는 담당자인 Ms. Williams를 말합니다.",
    koreanLearnerHint: "Who 질문은 사람을 묻습니다. 장소나 시간 표현은 이 질문에 맞지 않습니다.",
    vocabularyItems: [
      { word: "in charge of", meaningKo: "~을 담당하는", exampleSentence: "Who is in charge of this project?" },
      { word: "project", meaningKo: "프로젝트", exampleSentence: "Ms. Williams is in charge of the project." },
      { word: "next week", meaningKo: "다음 주", exampleSentence: "The project starts next week." }
    ]
  },
  {
    id: "l2-107",
    part: "listening_part_2",
    skill: "listening question response",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "part2_007",
    audioFile: "l2_ex7_answer_b.mp3",
    audioTitle: "Question Response 7",
    transcript:
      "Question: Should we postpone the presentation?\nA. It was very interesting.\nB. That might be a good idea.\nC. On the second floor.",
    prompt: "Select the best response to the question.",
    options: ["A", "B", "C"],
    correctOption: "B",
    explanationEn: "The question suggests postponing the presentation. Choice B responds naturally by agreeing that it might be a good idea.",
    explanationKo: "질문은 발표를 연기할지 제안하고 있습니다. B는 좋은 생각일 수 있다고 자연스럽게 응답합니다.",
    koreanLearnerHint: "Should we...? 는 제안이나 의견 요청입니다. 동의하거나 반대하는 응답이 자연스럽습니다.",
    vocabularyItems: [
      { word: "postpone", meaningKo: "연기하다", exampleSentence: "Should we postpone the presentation?" },
      { word: "presentation", meaningKo: "발표", exampleSentence: "The presentation was very interesting." },
      { word: "good idea", meaningKo: "좋은 생각", exampleSentence: "That might be a good idea." }
    ]
  },
  {
    id: "l2-108",
    part: "listening_part_2",
    skill: "listening question response",
    difficulty: "easy",
    scoreBand: "600",
    audioId: "part2_008",
    audioFile: "l2_ex8_answer_a.mp3",
    audioTitle: "Question Response 8",
    transcript:
      "Question: What seems to be the problem with the computer?\nA. It keeps shutting down.\nB. On my desk.\nC. Yesterday afternoon.",
    prompt: "Select the best response to the question.",
    options: ["A", "B", "C"],
    correctOption: "A",
    explanationEn: "The question asks what the computer problem is. Choice A describes the problem: it keeps shutting down.",
    explanationKo: "질문은 컴퓨터에 어떤 문제가 있는지 묻고 있습니다. A는 계속 꺼진다는 문제를 설명합니다.",
    koreanLearnerHint: "What is the problem...? 은 문제의 내용을 묻습니다. 장소나 시간보다 증상 설명이 자연스럽습니다.",
    vocabularyItems: [
      { word: "problem with the computer", meaningKo: "컴퓨터 문제", exampleSentence: "What seems to be the problem with the computer?" },
      { word: "keep shutting down", meaningKo: "계속 꺼지다", exampleSentence: "It keeps shutting down." },
      { word: "yesterday afternoon", meaningKo: "어제 오후", exampleSentence: "The problem started yesterday afternoon." }
    ]
  },
  {
    id: "l2-109",
    part: "listening_part_2",
    skill: "listening question response",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "part2_009",
    audioFile: "l2_ex9_answer_b.mp3",
    audioTitle: "Question Response 9",
    transcript:
      "Question: Where did you put my passport?\nA. At the airport.\nB. In your bag.\nC. With my colleague.",
    prompt: "Select the best response to the question.",
    options: ["A", "B", "C"],
    correctOption: "B",
    explanationEn: "The question asks where the passport was put. Choice B gives a specific location: in your bag.",
    explanationKo: "질문은 여권을 어디에 두었는지 묻고 있습니다. B는 구체적인 위치인 가방 안을 말합니다.",
    koreanLearnerHint: "Where did you put...? 은 물건의 위치를 묻습니다. 가장 자연스러운 위치 표현을 고르세요.",
    vocabularyItems: [
      { word: "passport", meaningKo: "여권", exampleSentence: "Where did you put my passport?" },
      { word: "in your bag", meaningKo: "네 가방 안에", exampleSentence: "I put it in your bag." },
      { word: "colleague", meaningKo: "동료", exampleSentence: "I traveled with my colleague." }
    ]
  },
  {
    id: "l2-110",
    part: "listening_part_2",
    skill: "listening question response",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "part2_010",
    audioFile: "l2_ex10_answer_c.mp3",
    audioTitle: "Question Response 10",
    transcript:
      "Question: Did you receive my email?\nA. In the inbox.\nB. It's very important.\nC. Yes, I replied this morning.",
    prompt: "Select the best response to the question.",
    options: ["A", "B", "C"],
    correctOption: "C",
    explanationEn: "The question asks whether the email was received. Choice C answers yes and says the speaker replied this morning.",
    explanationKo: "질문은 이메일을 받았는지 묻고 있습니다. C는 그렇다고 답하며 오늘 아침에 답장했다고 말합니다.",
    koreanLearnerHint: "Did you...? 는 과거 행동 여부를 묻는 Yes/No 질문입니다. Yes/No와 이어지는 행동 설명을 들으세요.",
    vocabularyItems: [
      { word: "receive my email", meaningKo: "내 이메일을 받다", exampleSentence: "Did you receive my email?" },
      { word: "inbox", meaningKo: "받은 편지함", exampleSentence: "The message is in the inbox." },
      { word: "reply", meaningKo: "답장하다", exampleSentence: "I replied this morning." }
    ]
  },
  {
    id: "l2-111",
    part: "listening_part_2",
    skill: "listening question response",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "part2_011",
    audioFile: "l2_ex11_answer_a.mp3",
    audioTitle: "Question Response 11",
    transcript:
      "Question: Can I get the bill, please?\nA. Of course, I'll bring it right away.\nB. It's very delicious.\nC. At the next table.",
    prompt: "Select the best response to the question.",
    options: ["A", "B", "C"],
    correctOption: "A",
    explanationEn: "The question is a polite request for the bill. Choice A accepts the request and says the bill will be brought right away.",
    explanationKo: "질문은 계산서를 달라는 정중한 요청입니다. A는 요청을 수락하고 바로 가져오겠다고 말합니다.",
    koreanLearnerHint: "Can I get...? 은 식당이나 서비스 상황에서 자주 쓰는 요청 표현입니다. 요청에 응하는 응답이 자연스럽습니다.",
    vocabularyItems: [
      { word: "get the bill", meaningKo: "계산서를 받다", exampleSentence: "Can I get the bill, please?" },
      { word: "bring it", meaningKo: "그것을 가져오다", exampleSentence: "I'll bring it right away." },
      { word: "right away", meaningKo: "즉시", exampleSentence: "I'll bring it right away." }
    ]
  },
  {
    id: "l2-112",
    part: "listening_part_2",
    skill: "listening question response",
    difficulty: "easy",
    scoreBand: "600",
    audioId: "part2_012",
    audioFile: "l2_ex12_answer_b.mp3",
    audioTitle: "Question Response 12",
    transcript:
      "Question: When does the train arrive?\nA. On platform five.\nB. In about ten minutes.\nC. With two bags.",
    prompt: "Select the best response to the question.",
    options: ["A", "B", "C"],
    correctOption: "B",
    explanationEn: "The question asks when the train arrives. Choice B gives a time: in about ten minutes.",
    explanationKo: "질문은 기차가 언제 도착하는지 묻고 있습니다. B는 약 10분 후라는 시간을 제시합니다.",
    koreanLearnerHint: "When 질문은 시간을 묻습니다. 플랫폼이나 동반 물건보다 시간 표현을 고르세요.",
    vocabularyItems: [
      { word: "train", meaningKo: "기차", exampleSentence: "When does the train arrive?" },
      { word: "arrive", meaningKo: "도착하다", exampleSentence: "The train arrives in ten minutes." },
      { word: "in about ten minutes", meaningKo: "약 10분 후에", exampleSentence: "It arrives in about ten minutes." }
    ]
  }
);

mockQuestions.push(
  {
    id: "l1-101",
    part: "listening_part_1",
    skill: "listening photo - action",
    difficulty: "easy",
    scoreBand: "600",
    imageFile: "boarding_plane.jpg",
    audioId: "boarding_plane",
    audioFile: "l1_ex1_answer_c.mp3",
    audioTitle: "Photograph: Boarding Plane",
    transcript:
      "A. Passengers are cooking meals\nB. Passengers are driving cars\nC. Passengers are boarding a plane\nD. Passengers are repairing luggage",
    prompt: "Select the statement that best describes the picture.",
    options: ["A", "B", "C", "D"],
    correctOption: "C",
    explanationEn: "Choice C is the statement that best matches the photo of people boarding a plane.",
    explanationKo: "C가 비행기에 탑승하는 장면을 가장 잘 묘사합니다.",
    koreanLearnerHint: "Part 1에서는 사진의 중심 행동과 장소를 먼저 확인한 뒤 음성의 네 문장을 비교하세요.",
    vocabularyItems: [
      { word: "board a plane", meaningKo: "비행기에 탑승하다", exampleSentence: "Passengers are boarding a plane." },
      { word: "passenger", meaningKo: "승객", exampleSentence: "The passengers are waiting near the aircraft." }
    ]
  },
  {
    id: "l1-102",
    part: "listening_part_1",
    skill: "listening photo - action",
    difficulty: "easy",
    scoreBand: "600",
    imageFile: "reading_book.jpg",
    audioId: "reading_book",
    audioFile: "l1_ex2_answer_c.mp3",
    audioTitle: "Photograph: Reading Book",
    transcript:
      "A. She is driving a bus\nB. She is cooking dinner\nC. She is reading a book\nD. She is painting a house",
    prompt: "Select the statement that best describes the picture.",
    options: ["A", "B", "C", "D"],
    correctOption: "C",
    explanationEn: "Choice C is the statement that best describes the person reading a book.",
    explanationKo: "C가 책을 읽고 있는 사람을 가장 잘 묘사합니다.",
    koreanLearnerHint: "사진 속 사람이 무엇을 하고 있는지 동작 동사를 중심으로 들으세요.",
    vocabularyItems: [
      { word: "read a book", meaningKo: "책을 읽다", exampleSentence: "She is reading a book." },
      { word: "be seated", meaningKo: "앉아 있다", exampleSentence: "The person is seated while reading." }
    ]
  },
  {
    id: "l1-103",
    part: "listening_part_1",
    skill: "listening photo - action",
    difficulty: "easy",
    scoreBand: "600",
    imageFile: "serving_food.jpg",
    audioId: "serving_food",
    audioFile: "l1_ex3_answer_b.mp3",
    audioTitle: "Photograph: Serving Food",
    transcript:
      "A. A customer is washing dishes\nB. A waiter is serving food\nC. A man is painting a wall\nD. People are leaving the building",
    prompt: "Select the statement that best describes the picture.",
    options: ["A", "B", "C", "D"],
    correctOption: "B",
    explanationEn: "Choice B is the statement that best matches the food being served.",
    explanationKo: "B가 음식이 제공되는 장면을 가장 잘 묘사합니다.",
    koreanLearnerHint: "사람의 동작뿐 아니라 음식, 접시, 식당 같은 사물 단서도 함께 확인하세요.",
    vocabularyItems: [
      { word: "serve food", meaningKo: "음식을 제공하다", exampleSentence: "A server is serving food." },
      { word: "plate", meaningKo: "접시", exampleSentence: "The food is placed on a plate." }
    ]
  },
  {
    id: "l1-104",
    part: "listening_part_1",
    skill: "listening photo - scene",
    difficulty: "medium",
    scoreBand: "700",
    imageFile: "sitting_around_table.jpg",
    audioId: "sitting_around_table",
    audioFile: "l1_ex4_answer_c.mp3",
    audioTitle: "Photograph: Sitting Around Table",
    transcript:
      "A. The people are cooking food\nB. The people are running outside\nC. The people are sitting around a table\nD. The people are cleaning the room",
    prompt: "Select the statement that best describes the picture.",
    options: ["A", "B", "C", "D"],
    correctOption: "C",
    explanationEn: "Choice C is the statement that best describes people sitting around a table.",
    explanationKo: "C가 사람들이 테이블 주위에 앉아 있는 장면을 가장 잘 묘사합니다.",
    koreanLearnerHint: "여러 사람이 있는 사진에서는 전체 배치와 공통 행동을 먼저 파악하세요.",
    vocabularyItems: [
      { word: "sit around a table", meaningKo: "테이블 주위에 앉다", exampleSentence: "Several people are sitting around a table." },
      { word: "meeting", meaningKo: "회의", exampleSentence: "They may be having a meeting." }
    ]
  },
  {
    id: "l1-105",
    part: "listening_part_1",
    skill: "listening photo - action",
    difficulty: "easy",
    scoreBand: "600",
    imageFile: "typing_laptop.jpg",
    audioId: "typing_laptop",
    audioFile: "l1_ex5_answer_a.mp3",
    audioTitle: "Photograph: Typing Laptop",
    transcript:
      "A. He is typing on a laptop\nB. He is fixing a printer\nC. He is talking to a colleague\nD. He is opening a window",
    prompt: "Select the statement that best describes the picture.",
    options: ["A", "B", "C", "D"],
    correctOption: "A",
    explanationEn: "Choice A is the statement that best describes someone typing on a laptop.",
    explanationKo: "A가 노트북으로 타이핑하는 장면을 가장 잘 묘사합니다.",
    koreanLearnerHint: "사진에서 노트북을 쓰는 동작과 키보드, 화면을 먼저 보세요. typing, laptop, keyboard 같은 단서가 들리면 정답 후보입니다.",
    vocabularyItems: [
      { word: "type on a laptop", meaningKo: "노트북으로 타이핑하다", exampleSentence: "The person is typing on a laptop." },
      { word: "keyboard", meaningKo: "키보드", exampleSentence: "The person's hands are near the keyboard." }
    ]
  },
  {
    id: "l1-106",
    part: "listening_part_1",
    skill: "listening photo - person",
    difficulty: "medium",
    scoreBand: "700",
    imageFile: "worker_helmet.jpg",
    audioId: "worker_helmet",
    audioFile: "l1_ex6_answer_d.mp3",
    audioTitle: "Photograph: Worker Helmet",
    transcript:
      "A. The workers are shopping\nB. The workers are swimming\nC. The workers are sleeping\nD. The workers are wearing helmets",
    prompt: "Select the statement that best describes the picture.",
    options: ["A", "B", "C", "D"],
    correctOption: "D",
    explanationEn: "Choice D is the statement that best matches the worker wearing a helmet.",
    explanationKo: "D가 헬멧을 쓴 작업자를 가장 잘 묘사합니다.",
    koreanLearnerHint: "복장이나 안전 장비는 직업과 상황을 알려 주는 중요한 단서입니다.",
    vocabularyItems: [
      { word: "wear a helmet", meaningKo: "헬멧을 쓰다", exampleSentence: "The worker is wearing a helmet." },
      { word: "worker", meaningKo: "작업자", exampleSentence: "The worker is standing at the site." }
    ]
  }
);

const additionalListeningPart2Questions = [
  {
    title: "Budget Proposal",
    file: "part2_budget_proposal",
    audioFile: "l2_ex13_answer_b.mp3",
    transcript:
      "Question: Who approved the budget proposal?\nA. At the end of the hallway\nB. The finance manager did\nC. Nearly fifty dollars",
    correctOption: "B"
  },
  {
    title: "Order Office Supplies",
    file: "part2_order_office_supplies",
    audioFile: "l2_ex14_answer_c.mp3",
    transcript:
      "Question: Should we order more office supplies?\nA. I prefer blue pens\nB. On the wooden table\nC. Yes, we're running low",
    correctOption: "C"
  },
  {
    title: "Park My Car",
    file: "part2_park_my_car",
    audioFile: "l2_ex15_answer_b.mp3",
    transcript:
      "Question: Where should I park my car?\nA. I usually drive to work\nB. In the underground garage\nC. It's a very small vehicle",
    correctOption: "B"
  },
  {
    title: "Printer Noise",
    file: "part2_printer_noise",
    audioFile: "l2_ex16_answer_a.mp3",
    transcript:
      "Question: Why is the printer making noise?\nA. It probably needs more paper\nB. Next to the computer desk\nC. I printed ten copies",
    correctOption: "A"
  },
  {
    title: "Responsible Customer Support",
    file: "part2_responsible_customer_support",
    audioFile: "l2_ex17_answer_b.mp3",
    transcript:
      "Question: Who is responsible for customer support?\nA. The blue folder\nB. Janet handles that department\nC. Before lunch time",
    correctOption: "B"
  },
  {
    title: "Training Session",
    file: "part2_training_session",
    audioFile: "l2_ex18_answer_c.mp3",
    transcript:
      "Question: Didn't you attend the training session?\nA. About computer safety\nB. In the training center\nC. No, I was out sick",
    correctOption: "C"
  },
  {
    title: "Update Website",
    file: "part2_update_website",
    audioFile: "l2_ex19_answer_a.mp3",
    transcript:
      "Question: How often do you update the website?\nA. Nearly every week\nB. With the software engineer\nC. At the front desk",
    correctOption: "A"
  },
  {
    title: "Updated Schedule",
    file: "part2_updated_schedule",
    audioFile: "l2_ex20_answer_a.mp3",
    transcript:
      "Question: Can you send me the updated schedule?\nA. I sent it earlier today\nB. At the train station\nC. With the accounting team",
    correctOption: "A"
  }
];

mockQuestions.push(
  ...additionalListeningPart2Questions.map((question, index) => ({
    id: `l2-${201 + index}`,
    part: "listening_part_2",
    skill: "listening question response",
    difficulty: index < 4 ? "easy" : "medium",
    scoreBand: index < 4 ? "600" : "700",
    audioId: question.file,
    audioFile: question.audioFile ?? `${question.file}.mp3`,
    audioTitle: `Question Response: ${question.title}`,
    transcript: question.transcript ?? "Listen to the question and three responses.",
    prompt: "Select the best response to the question.",
    options: ["A", "B", "C"],
    correctOption: question.correctOption,
    explanationEn: `Choice ${question.correctOption} is the best response in the audio.`,
    koreanLearnerHint: "Listen for the question type first, then choose the response that answers it directly.",
    vocabularyItems: []
  }))
);

const additionalListeningPart1Questions = [
  {
    title: "Presentation",
    file: "presentation",
    audioFile: "l1_ex7_answer_c.mp3",
    correctOption: "C",
    options: [
      "A. Chairs are stacked against the wall.",
      "B. Employees are eating dinner.",
      "C. A presentation is being delivered.",
      "D. Computers are being repaired."
    ]
  },
  {
    title: "Office Supplies",
    file: "office_supplies",
    audioFile: "l1_ex8_answer_d.mp3",
    correctOption: "D",
    options: [
      "A. The lights are being removed.",
      "B. Papers are floating in the air.",
      "C. Workers are carrying tables.",
      "D. Office supplies are arranged on a desk."
    ]
  },
  {
    title: "Food",
    file: "food",
    audioFile: "l1_ex9_answer_b.mp3",
    correctOption: "B",
    options: [
      "A. Dishes are stacked in boxes.",
      "B. Food is being prepared in a kitchen.",
      "C. Customers are paying the bill.",
      "D. The restaurant is empty."
    ]
  },
  {
    title: "Workout",
    file: "workout",
    audioFile: "l1_ex10_answer_a.mp3",
    correctOption: "A",
    options: [
      "A. People are working out indoors.",
      "B. Equipment is being delivered.",
      "C. The gym is closed for cleaning.",
      "D. Customers are shopping for clothes."
    ]
  },
  {
    title: "Teacher",
    file: "teacher",
    audioFile: "l1_ex11_answer_c.mp3",
    correctOption: "C",
    options: [
      "A. Desks are being repaired.",
      "B. Students are leaving the building.",
      "C. A teacher is writing on the board.",
      "D. The classroom is empty."
    ]
  },
  {
    title: "Machines",
    file: "machines",
    audioFile: "l1_ex12_answer_d.mp3",
    correctOption: "D",
    options: [
      "A. Workers are washing windows.",
      "B. Employees are attending a concert.",
      "C. The equipment is outdoors.",
      "D. Machines are being operated in a factory."
    ]
  },
  {
    title: "Produce",
    file: "produce",
    audioFile: "l1_ex13_answer_a.mp3",
    correctOption: "A",
    options: [
      "A. Produce is being sold outdoors.",
      "B. Tables are being folded.",
      "C. The street is blocked by snow.",
      "D. Customers are entering a theater."
    ]
  },
  {
    title: "Meeting",
    file: "meeting",
    audioFile: "l1_ex14_answer_c.mp3",
    correctOption: "C",
    options: [
      "A. Computers are being packed away.",
      "B. Workers are moving furniture.",
      "C. Employees are participating in a meeting.",
      "D. The office is empty."
    ]
  },
  {
    title: "Bicycles",
    file: "bicycles",
    audioFile: "l1_ex15_answer_b.mp3",
    correctOption: "B",
    options: [
      "A. People are riding motorcycles.",
      "B. Bicycles are lined up beside each other.",
      "C. A road is under repair.",
      "D. Helmets are being sold."
    ]
  },
  {
    title: "Check In",
    file: "checking_in",
    audioFile: "l1_ex16_answer_a.mp3",
    correctOption: "A",
    options: [
      "A. Passengers are checking in for flights.",
      "B. Travelers are swimming.",
      "C. Tickets are falling on the floor.",
      "D. The terminal is closed."
    ]
  },
  {
    title: "Boxes",
    file: "boxes",
    audioFile: "l1_ex17_answer_d.mp3",
    correctOption: "D",
    options: [
      "A. The shelves are empty.",
      "B. Products are displayed in windows.",
      "C. Workers are planting trees.",
      "D. Boxes are being loaded."
    ]
  },
  {
    title: "Parked",
    file: "parked",
    audioFile: "l1_ex18_answer_c.mp3",
    correctOption: "C",
    options: [
      "A. The garage doors are closing.",
      "B. Drivers are racing cars.",
      "C. Vehicles are parked in rows.",
      "D. People are crossing a bridge."
    ]
  },
  {
    title: "Studying",
    file: "studying",
    audioFile: "l1_ex19_answer_b.mp3",
    correctOption: "B",
    options: [
      "A. Books are being returned to shelves.",
      "B. Students are studying at tables.",
      "C. The lights are turned off.",
      "D. People are exercising."
    ]
  },
  {
    title: "Shopping Cart",
    file: "shopping_cart",
    audioFile: "l1_ex20_answer_d.mp3",
    correctOption: "D",
    options: [
      "A. People are sitting at tables.",
      "B. Vegetables are being cooked.",
      "C. Shelves are being removed.",
      "D. A customer is pushing a shopping cart."
    ]
  }
];

const part1VocabularyStopWords = new Set([
  "the",
  "are",
  "and",
  "being",
  "with",
  "into",
  "from",
  "this",
  "that",
  "they",
  "people",
  "customer",
  "customers",
  "workers",
  "employees",
  "students"
]);

function buildVocabularyItemsFromCorrectAnswer(correctText) {
  const exampleSentence = correctText.replace(/^[A-D]\.\s*/, "");
  if (/\bworking out\b/i.test(exampleSentence)) {
    return [
      {
        word: "work out",
        meaningKo: "work out",
        exampleSentence
      },
      {
        word: "indoors",
        meaningKo: "indoors",
        exampleSentence
      }
    ];
  }

  const words = exampleSentence
    .toLowerCase()
    .replace(/[^a-z\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 3 && !part1VocabularyStopWords.has(word));
  const uniqueWords = [...new Set(words)].slice(0, 3);

  return uniqueWords.map((word) => ({
    word,
    meaningKo: word,
    exampleSentence
  }));
}

mockQuestions.push(
  ...additionalListeningPart1Questions.map((question, index) => {
    const correctText = question.options.find((option) => option.startsWith(`${question.correctOption}.`));
    return {
      id: `l1-${201 + index}`,
      part: "listening_part_1",
      skill: "listening photo - scene",
      difficulty: index < 5 ? "easy" : "medium",
      scoreBand: index < 5 ? "600" : "700",
      imageFile: `${question.file}.jpg`,
      audioId: question.file,
      audioFile: question.audioFile ?? `${question.file}.mp3`,
      audioTitle: `Photograph: ${question.title}`,
      transcript: question.options.join("\n"),
      prompt: "Select the statement that best describes the picture.",
      options: question.options,
      correctOption: question.correctOption,
      explanationEn: `Choice ${question.correctOption} is correct because it best matches the photograph: ${correctText}`,
      koreanLearnerHint: "For TOEIC Part 1, identify the main action, objects, and location in the photo before comparing the four statements.",
      vocabularyItems: buildVocabularyItemsFromCorrectAnswer(correctText)
    };
  })
);

mockQuestions.push(
  {
    id: "l4-101",
    part: "listening_part_4",
    skill: "listening talk - main idea",
    difficulty: "easy",
    scoreBand: "600",
    audioId: "brightstar_closed",
    audioFile: "brightstar_closed.mp3",
    audioTitle: "Announcement: Brightstar Closure",
    transcript:
      "Brightstar Electronics is closed today because of a national holiday. The store will open tomorrow at 9 A.M.",
    prompt: "What is the announcement mainly about?",
    options: [
      "A. A temporary store closure.",
      "B. A new electronics product.",
      "C. A change in branch ownership.",
      "D. A weekend discount event."
    ],
    correctOption: "A",
    explanationEn: "The announcement says Brightstar Electronics is closed because of a national holiday.",
    explanationKo: "안내문은 Brightstar Electronics가 재고 작업 때문에 이번 토요일에 임시 휴점한다고 말합니다.",
    koreanLearnerHint: "announcement 문제에서는 첫 문장에 전체 목적이 나오는 경우가 많습니다.",
    vocabularyItems: [
      { word: "be closed", meaningKo: "문을 닫다, 휴점하다", exampleSentence: "The store will be closed this Saturday." },
      { word: "national holiday", meaningKo: "공휴일", exampleSentence: "The store is closed because of a national holiday." }
    ]
  },
  {
    id: "l4-102",
    part: "listening_part_4",
    skill: "listening talk - detail",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "brightstar_closed",
    audioFile: "brightstar_closed.mp3",
    audioTitle: "Announcement: Brightstar Closure",
    transcript:
      "Brightstar Electronics is closed today because of a national holiday. The store will open tomorrow at 9 A.M.",
    prompt: "Why will Brightstar Electronics be closed?",
    options: [
      "A. Because of a national holiday.",
      "B. For employee training.",
      "C. Because of a power outage.",
      "D. Because the store is moving."
    ],
    correctOption: "A",
    explanationEn: "The announcement gives a national holiday as the reason for the closure.",
    explanationKo: "안내문은 토요일 휴점 이유로 재고 작업을 제시합니다.",
    koreanLearnerHint: "Why 문제에서는 for, because 같은 이유 표현을 집중해서 들으세요.",
    vocabularyItems: [
      { word: "temporary closure", meaningKo: "임시 휴점", exampleSentence: "The store announced a temporary closure." },
      { word: "national holiday", meaningKo: "공휴일", exampleSentence: "The store is closed for a national holiday." }
    ]
  },
  {
    id: "l4-103",
    part: "listening_part_4",
    skill: "listening talk - detail",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "brightstar_closed",
    audioFile: "brightstar_closed.mp3",
    audioTitle: "Announcement: Brightstar Closure",
    transcript:
      "Brightstar Electronics is closed today because of a national holiday. The store will open tomorrow at 9 A.M.",
    prompt: "When will the store reopen?",
    options: ["A. Tomorrow at 9 A.M.", "B. Tomorrow at noon.", "C. Next Monday at 10 A.M.", "D. This evening at 5 P.M."],
    correctOption: "A",
    explanationEn: "The announcement says the store will open tomorrow at 9 A.M.",
    explanationKo: "안내문은 매장이 월요일 오전 10시에 다시 문을 연다고 말합니다.",
    koreanLearnerHint: "시간 문제에서는 요일과 시간을 함께 들어야 합니다.",
    vocabularyItems: [
      { word: "reopen", meaningKo: "다시 문을 열다", exampleSentence: "The store will reopen on Monday." },
      { word: "tomorrow", meaningKo: "내일", exampleSentence: "The store will open tomorrow at 9 A.M." }
    ]
  },
  {
    id: "l3-101",
    part: "listening_part_3",
    skill: "listening conversation - purpose",
    difficulty: "easy",
    scoreBand: "600",
    audioId: "greentech_appointment",
    audioFile: "greentech_appointment.mp3",
    audioTitle: "Conversation: Greentech Appointment",
    transcript:
      "Man: Good morning. I am calling to confirm my appointment with a Greentech consultant. Woman: Certainly. Your appointment is scheduled for Thursday at 2 P.M. Man: Could I move it to Friday morning? Woman: Yes, we have an opening at 10 A.M.",
    prompt: "What is the man calling about?",
    options: [
      "A. Changing an appointment time.",
      "B. Ordering office equipment.",
      "C. Reporting a billing error.",
      "D. Asking for a job interview."
    ],
    correctOption: "A",
    explanationEn: "The man confirms an appointment and asks to move it to Friday morning.",
    explanationKo: "남자는 예약을 확인한 뒤 금요일 오전으로 변경할 수 있는지 묻습니다.",
    koreanLearnerHint: "confirm, appointment, move it 같은 표현이 예약 변경 상황을 알려 줍니다.",
    vocabularyItems: [
      { word: "appointment", meaningKo: "예약, 약속", exampleSentence: "The appointment is scheduled for Thursday." },
      { word: "consultant", meaningKo: "상담원, 컨설턴트", exampleSentence: "He has an appointment with a consultant." }
    ]
  },
  {
    id: "l3-102",
    part: "listening_part_3",
    skill: "listening conversation - detail",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "greentech_appointment",
    audioFile: "greentech_appointment.mp3",
    audioTitle: "Conversation: Greentech Appointment",
    transcript:
      "Man: Good morning. I am calling to confirm my appointment with a Greentech consultant. Woman: Certainly. Your appointment is scheduled for Thursday at 2 P.M. Man: Could I move it to Friday morning? Woman: Yes, we have an opening at 10 A.M.",
    prompt: "When is the original appointment?",
    options: ["A. Thursday at 2 P.M.", "B. Friday at 10 A.M.", "C. Monday morning.", "D. Wednesday at noon."],
    correctOption: "A",
    explanationEn: "The woman says the original appointment is scheduled for Thursday at 2 P.M.",
    explanationKo: "여자는 원래 예약이 목요일 오후 2시로 예정되어 있다고 말합니다.",
    koreanLearnerHint: "원래 시간과 변경 가능한 시간을 구분해서 들어야 합니다.",
    vocabularyItems: [
      { word: "be scheduled for", meaningKo: "~로 예정되어 있다", exampleSentence: "The appointment is scheduled for Thursday." },
      { word: "opening", meaningKo: "빈 시간, 예약 가능 시간", exampleSentence: "There is an opening at 10 A.M." }
    ]
  },
  {
    id: "l3-103",
    part: "listening_part_3",
    skill: "listening conversation - detail",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "greentech_appointment",
    audioFile: "greentech_appointment.mp3",
    audioTitle: "Conversation: Greentech Appointment",
    transcript:
      "Man: Good morning. I am calling to confirm my appointment with a Greentech consultant. Woman: Certainly. Your appointment is scheduled for Thursday at 2 P.M. Man: Could I move it to Friday morning? Woman: Yes, we have an opening at 10 A.M.",
    prompt: "What time is available on Friday?",
    options: ["A. 10 A.M.", "B. 2 P.M.", "C. 8 A.M.", "D. 5 P.M."],
    correctOption: "A",
    explanationEn: "The woman says there is an opening at 10 A.M. on Friday.",
    explanationKo: "여자는 금요일 오전 10시에 예약 가능한 시간이 있다고 말합니다.",
    koreanLearnerHint: "opening은 예약 가능한 빈 시간을 뜻합니다.",
    vocabularyItems: [
      { word: "move an appointment", meaningKo: "예약 시간을 옮기다", exampleSentence: "He wants to move the appointment." },
      { word: "Friday morning", meaningKo: "금요일 오전", exampleSentence: "He asks for Friday morning." }
    ]
  },
  {
    id: "l3-104",
    part: "listening_part_3",
    skill: "listening conversation - detail",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "office_conversation",
    audioFile: "office_conversation.mp3",
    audioTitle: "Conversation: Office Supplies",
    transcript:
      "Woman: Did the office supply order arrive this morning? Man: Yes, most of it arrived, but the copy paper was missing. Woman: We need it for tomorrow's training materials. Man: I already called the supplier, and they will deliver the missing paper by 4 P.M. today.",
    prompt: "What item is missing?",
    options: ["A. Copy paper.", "B. Training folders.", "C. Printer ink.", "D. Name tags."],
    correctOption: "A",
    explanationEn: "The man says most of the order arrived, but the copy paper was missing.",
    explanationKo: "남자는 주문 대부분은 도착했지만 복사용지가 빠졌다고 말합니다.",
    koreanLearnerHint: "but 뒤에 나오는 정보가 문제의 핵심인 경우가 많습니다.",
    vocabularyItems: [
      { word: "office supply order", meaningKo: "사무용품 주문", exampleSentence: "The office supply order arrived this morning." },
      { word: "copy paper", meaningKo: "복사용지", exampleSentence: "The copy paper was missing." }
    ]
  },
  {
    id: "l3-105",
    part: "listening_part_3",
    skill: "listening conversation - purpose",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "office_conversation",
    audioFile: "office_conversation.mp3",
    audioTitle: "Conversation: Office Supplies",
    transcript:
      "Woman: Did the office supply order arrive this morning? Man: Yes, most of it arrived, but the copy paper was missing. Woman: We need it for tomorrow's training materials. Man: I already called the supplier, and they will deliver the missing paper by 4 P.M. today.",
    prompt: "Why do the speakers need the missing item?",
    options: [
      "A. For tomorrow's training materials.",
      "B. For a client invoice.",
      "C. For a product display.",
      "D. For a staff lunch menu."
    ],
    correctOption: "A",
    explanationEn: "The woman says they need the copy paper for tomorrow's training materials.",
    explanationKo: "여자는 내일 교육 자료에 복사용지가 필요하다고 말합니다.",
    koreanLearnerHint: "need it for 뒤에 목적이 나옵니다.",
    vocabularyItems: [
      { word: "training materials", meaningKo: "교육 자료", exampleSentence: "They need paper for training materials." },
      { word: "supplier", meaningKo: "공급업체", exampleSentence: "The supplier will deliver the paper." }
    ]
  },
  {
    id: "l3-106",
    part: "listening_part_3",
    skill: "listening conversation - next action",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "office_conversation",
    audioFile: "office_conversation.mp3",
    audioTitle: "Conversation: Office Supplies",
    transcript:
      "Woman: Did the office supply order arrive this morning? Man: Yes, most of it arrived, but the copy paper was missing. Woman: We need it for tomorrow's training materials. Man: I already called the supplier, and they will deliver the missing paper by 4 P.M. today.",
    prompt: "What will the supplier do?",
    options: [
      "A. Deliver the missing paper by 4 P.M.",
      "B. Cancel tomorrow's training.",
      "C. Send a new invoice next week.",
      "D. Pick up the training materials."
    ],
    correctOption: "A",
    explanationEn: "The supplier will deliver the missing paper by 4 P.M. today.",
    explanationKo: "공급업체는 오늘 오후 4시까지 빠진 종이를 배송할 예정입니다.",
    koreanLearnerHint: "will deliver가 앞으로 일어날 행동을 알려 줍니다.",
    vocabularyItems: [
      { word: "deliver", meaningKo: "배송하다", exampleSentence: "They will deliver the missing paper." },
      { word: "by 4 P.M.", meaningKo: "오후 4시까지", exampleSentence: "The paper will arrive by 4 P.M." }
    ]
  },
  {
    id: "l4-104",
    part: "listening_part_4",
    skill: "listening talk - main idea",
    difficulty: "easy",
    scoreBand: "600",
    audioId: "train_to_busan",
    audioFile: "train_to_busan.mp3",
    audioTitle: "Announcement: Train to Busan",
    transcript:
      "Attention passengers. The express train to Busan will depart from platform 6 at 3:20 P.M. Passengers with reserved seats should board cars one through five. Food service will not be available on this train, so passengers may purchase snacks before boarding.",
    prompt: "What is the announcement mainly about?",
    options: [
      "A. Boarding information for a train to Busan.",
      "B. A delayed flight to Busan.",
      "C. A new restaurant at the station.",
      "D. A lost passenger ticket."
    ],
    correctOption: "A",
    explanationEn: "The announcement gives departure, platform, boarding, and food-service information for a train to Busan.",
    explanationKo: "안내 방송은 부산행 열차의 출발, 플랫폼, 탑승, 음식 서비스 정보를 제공합니다.",
    koreanLearnerHint: "station announcement에서는 platform, depart, board 같은 단어가 핵심입니다.",
    vocabularyItems: [
      { word: "depart from", meaningKo: "~에서 출발하다", exampleSentence: "The train will depart from platform 6." },
      { word: "reserved seat", meaningKo: "예약 좌석", exampleSentence: "Passengers with reserved seats should board first." }
    ]
  },
  {
    id: "l4-105",
    part: "listening_part_4",
    skill: "listening talk - detail",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "train_to_busan",
    audioFile: "train_to_busan.mp3",
    audioTitle: "Announcement: Train to Busan",
    transcript:
      "Attention passengers. The express train to Busan will depart from platform 6 at 3:20 P.M. Passengers with reserved seats should board cars one through five. Food service will not be available on this train, so passengers may purchase snacks before boarding.",
    prompt: "What time will the train depart?",
    options: ["A. 3:20 P.M.", "B. 3:06 P.M.", "C. 2:30 P.M.", "D. 5:00 P.M."],
    correctOption: "A",
    explanationEn: "The announcement says the train will depart at 3:20 P.M.",
    explanationKo: "안내 방송은 열차가 오후 3시 20분에 출발한다고 말합니다.",
    koreanLearnerHint: "시간 문제에서는 숫자를 정확히 구분해서 들어야 합니다.",
    vocabularyItems: [
      { word: "express train", meaningKo: "급행열차", exampleSentence: "The express train leaves at 3:20." },
      { word: "platform", meaningKo: "승강장", exampleSentence: "The train departs from platform 6." }
    ]
  },
  {
    id: "l4-106",
    part: "listening_part_4",
    skill: "listening talk - detail",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "train_to_busan",
    audioFile: "train_to_busan.mp3",
    audioTitle: "Announcement: Train to Busan",
    transcript:
      "Attention passengers. The express train to Busan will depart from platform 6 at 3:20 P.M. Passengers with reserved seats should board cars one through five. Food service will not be available on this train, so passengers may purchase snacks before boarding.",
    prompt: "What should passengers know about food service?",
    options: [
      "A. It will not be available on the train.",
      "B. It is free for passengers in car 6.",
      "C. It starts after departure.",
      "D. It is available only on weekends."
    ],
    correctOption: "A",
    explanationEn: "The announcement says food service will not be available on this train.",
    explanationKo: "안내 방송은 이 열차에서 음식 서비스가 제공되지 않는다고 말합니다.",
    koreanLearnerHint: "not be available은 이용할 수 없다는 뜻입니다.",
    vocabularyItems: [
      { word: "food service", meaningKo: "음식 서비스", exampleSentence: "Food service is not available." },
      { word: "before boarding", meaningKo: "탑승 전에", exampleSentence: "Passengers may buy snacks before boarding." }
    ]
  }
);

mockQuestions.push(
  {
    id: "l3-107",
    part: "listening_part_3",
    skill: "listening conversation - purpose",
    difficulty: "easy",
    scoreBand: "600",
    audioId: "airport_conversation",
    audioFile: "airport_conversation.mp3",
    audioTitle: "Conversation: Airport Pickup",
    transcript:
      "Woman: Hello, this is Mina from the travel desk. I am calling about tomorrow's airport pickup.\nMan: Is there a change to the arrival time?\nWoman: Yes. The client's flight now arrives at 4:40 P.M., not 3:15. Could you send the driver an updated schedule?\nMan: Of course. I will send it right away and ask the driver to wait near Gate 6.",
    prompt: "What are the speakers mainly discussing?",
    options: [
      "A. A change to an airport pickup schedule.",
      "B. A problem with a hotel reservation.",
      "C. A request for a new travel budget.",
      "D. A delayed train departure."
    ],
    correctOption: "A",
    explanationEn: "The speakers discuss a changed arrival time and an updated airport pickup schedule.",
    explanationKo: "두 사람은 변경된 도착 시간과 공항 픽업 일정 업데이트에 대해 이야기합니다.",
    koreanLearnerHint: "arrival time, airport pickup, updated schedule 같은 표현이 주제를 알려 줍니다.",
    vocabularyItems: [
      { word: "airport pickup", meaningKo: "공항 픽업", exampleSentence: "The airport pickup schedule changed." },
      { word: "arrival time", meaningKo: "도착 시간", exampleSentence: "The arrival time is now 4:40 P.M." }
    ]
  },
  {
    id: "l3-108",
    part: "listening_part_3",
    skill: "listening conversation - detail",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "airport_conversation",
    audioFile: "airport_conversation.mp3",
    audioTitle: "Conversation: Airport Pickup",
    transcript:
      "Woman: Hello, this is Mina from the travel desk. I am calling about tomorrow's airport pickup.\nMan: Is there a change to the arrival time?\nWoman: Yes. The client's flight now arrives at 4:40 P.M., not 3:15. Could you send the driver an updated schedule?\nMan: Of course. I will send it right away and ask the driver to wait near Gate 6.",
    prompt: "What is the client's new arrival time?",
    options: ["A. 4:40 P.M.", "B. 3:15 P.M.", "C. 6:00 P.M.", "D. 11:40 A.M."],
    correctOption: "A",
    explanationEn: "The woman says the client's flight now arrives at 4:40 P.M.",
    explanationKo: "여자는 고객의 항공편이 이제 오후 4시 40분에 도착한다고 말합니다.",
    koreanLearnerHint: "숫자 문제가 나오면 원래 시간과 변경된 시간을 구분해서 들어야 합니다.",
    vocabularyItems: [
      { word: "flight", meaningKo: "항공편", exampleSentence: "The client's flight arrives at 4:40." },
      { word: "not 3:15", meaningKo: "3시 15분이 아니라", exampleSentence: "It arrives at 4:40, not 3:15." }
    ]
  },
  {
    id: "l3-109",
    part: "listening_part_3",
    skill: "listening conversation - next action",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "airport_conversation",
    audioFile: "airport_conversation.mp3",
    audioTitle: "Conversation: Airport Pickup",
    transcript:
      "Woman: Hello, this is Mina from the travel desk. I am calling about tomorrow's airport pickup.\nMan: Is there a change to the arrival time?\nWoman: Yes. The client's flight now arrives at 4:40 P.M., not 3:15. Could you send the driver an updated schedule?\nMan: Of course. I will send it right away and ask the driver to wait near Gate 6.",
    prompt: "What will the man probably do next?",
    options: [
      "A. Send the driver an updated schedule.",
      "B. Book a new flight for the client.",
      "C. Meet the client at Gate 3.",
      "D. Cancel the airport pickup."
    ],
    correctOption: "A",
    explanationEn: "The man says he will send the updated schedule right away.",
    explanationKo: "남자는 업데이트된 일정을 바로 보내겠다고 말합니다.",
    koreanLearnerHint: "대화 마지막의 'I will...' 뒤에 다음 행동이 나옵니다.",
    vocabularyItems: [
      { word: "updated schedule", meaningKo: "업데이트된 일정", exampleSentence: "Send the driver an updated schedule." },
      { word: "right away", meaningKo: "즉시", exampleSentence: "I will send it right away." }
    ]
  },
  {
    id: "l4-107",
    part: "listening_part_4",
    skill: "listening talk - main idea",
    difficulty: "easy",
    scoreBand: "600",
    audioId: "conference_badge",
    audioFile: "conference_badge.mp3",
    audioTitle: "Announcement: Conference Badge",
    transcript:
      "Attention conference participants. Please pick up your name badge at the registration desk before entering Hall A. Badges are required for all workshops and lunch sessions. If your badge contains an error, visit the information counter next to the main entrance.",
    prompt: "What is the announcement mainly about?",
    options: [
      "A. Picking up and using conference badges.",
      "B. Changing the location of Hall A.",
      "C. Registering for a lunch discount.",
      "D. Canceling afternoon workshops."
    ],
    correctOption: "A",
    explanationEn: "The announcement explains where to pick up badges and when they are required.",
    explanationKo: "안내 방송은 배지를 어디서 받고 언제 필요한지 설명합니다.",
    koreanLearnerHint: "conference participants, name badge, registration desk가 핵심 단서입니다.",
    vocabularyItems: [
      { word: "name badge", meaningKo: "이름표, 명찰", exampleSentence: "Pick up your name badge at the desk." },
      { word: "registration desk", meaningKo: "등록 데스크", exampleSentence: "The registration desk is near the entrance." }
    ]
  },
  {
    id: "l4-108",
    part: "listening_part_4",
    skill: "listening talk - detail",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "conference_badge",
    audioFile: "conference_badge.mp3",
    audioTitle: "Announcement: Conference Badge",
    transcript:
      "Attention conference participants. Please pick up your name badge at the registration desk before entering Hall A. Badges are required for all workshops and lunch sessions. If your badge contains an error, visit the information counter next to the main entrance.",
    prompt: "Where should participants pick up their badges?",
    options: [
      "A. At the registration desk.",
      "B. At the information counter.",
      "C. Inside Hall A.",
      "D. In the lunch room."
    ],
    correctOption: "A",
    explanationEn: "Participants are asked to pick up their badges at the registration desk.",
    explanationKo: "참가자들은 등록 데스크에서 배지를 받으라는 안내를 받습니다.",
    koreanLearnerHint: "Where 문제에서는 장소 표현을 정확히 연결해야 합니다.",
    vocabularyItems: [
      { word: "participant", meaningKo: "참가자", exampleSentence: "Conference participants need badges." },
      { word: "before entering", meaningKo: "들어가기 전에", exampleSentence: "Pick up your badge before entering Hall A." }
    ]
  },
  {
    id: "l4-109",
    part: "listening_part_4",
    skill: "listening talk - detail",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "conference_badge",
    audioFile: "conference_badge.mp3",
    audioTitle: "Announcement: Conference Badge",
    transcript:
      "Attention conference participants. Please pick up your name badge at the registration desk before entering Hall A. Badges are required for all workshops and lunch sessions. If your badge contains an error, visit the information counter next to the main entrance.",
    prompt: "What should participants do if their badge has an error?",
    options: [
      "A. Visit the information counter.",
      "B. Enter Hall A immediately.",
      "C. Print a badge at home.",
      "D. Skip the lunch session."
    ],
    correctOption: "A",
    explanationEn: "The announcement says participants should visit the information counter if their badge contains an error.",
    explanationKo: "안내 방송은 배지에 오류가 있으면 안내 데스크를 방문하라고 말합니다.",
    koreanLearnerHint: "if 조건절 뒤에는 문제가 있을 때 해야 할 행동이 나옵니다.",
    vocabularyItems: [
      { word: "contain an error", meaningKo: "오류가 있다", exampleSentence: "The badge contains an error." },
      { word: "information counter", meaningKo: "안내 데스크", exampleSentence: "Visit the information counter." }
    ]
  },
  {
    id: "l4-110",
    part: "listening_part_4",
    skill: "listening talk - main idea",
    difficulty: "easy",
    scoreBand: "600",
    audioId: "training_workshop",
    audioFile: "training_workshop.mp3",
    audioTitle: "Announcement: Training Workshop",
    transcript:
      "Good afternoon. This is a reminder for employees registered for tomorrow's customer service training workshop. The workshop will begin at 9 A.M. in Room 204. Please bring your employee ID and a laptop. Printed materials will be provided when you arrive.",
    prompt: "What is the announcement mainly about?",
    options: [
      "A. Instructions for a training workshop.",
      "B. A new customer service policy.",
      "C. A room repair schedule.",
      "D. A laptop replacement program."
    ],
    correctOption: "A",
    explanationEn: "The announcement gives time, location, and preparation instructions for a training workshop.",
    explanationKo: "안내 방송은 교육 워크숍의 시간, 장소, 준비물을 알려 줍니다.",
    koreanLearnerHint: "reminder, registered, workshop 같은 단어가 안내 목적을 보여 줍니다.",
    vocabularyItems: [
      { word: "training workshop", meaningKo: "교육 워크숍", exampleSentence: "The training workshop begins at 9 A.M." },
      { word: "registered for", meaningKo: "~에 등록한", exampleSentence: "Employees registered for the workshop should attend." }
    ]
  },
  {
    id: "l4-111",
    part: "listening_part_4",
    skill: "listening talk - detail",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "training_workshop",
    audioFile: "training_workshop.mp3",
    audioTitle: "Announcement: Training Workshop",
    transcript:
      "Good afternoon. This is a reminder for employees registered for tomorrow's customer service training workshop. The workshop will begin at 9 A.M. in Room 204. Please bring your employee ID and a laptop. Printed materials will be provided when you arrive.",
    prompt: "Where will the workshop take place?",
    options: ["A. In Room 204.", "B. At the service desk.", "C. In the main lobby.", "D. At a customer office."],
    correctOption: "A",
    explanationEn: "The announcement says the workshop will begin at 9 A.M. in Room 204.",
    explanationKo: "안내 방송은 워크숍이 오전 9시에 204호에서 시작된다고 말합니다.",
    koreanLearnerHint: "시간과 장소가 한 문장에 함께 나올 때 둘을 정확히 구분하세요.",
    vocabularyItems: [
      { word: "take place", meaningKo: "열리다", exampleSentence: "The workshop takes place in Room 204." },
      { word: "Room 204", meaningKo: "204호", exampleSentence: "Please go to Room 204." }
    ]
  },
  {
    id: "l4-112",
    part: "listening_part_4",
    skill: "listening talk - detail",
    difficulty: "medium",
    scoreBand: "700",
    audioId: "training_workshop",
    audioFile: "training_workshop.mp3",
    audioTitle: "Announcement: Training Workshop",
    transcript:
      "Good afternoon. This is a reminder for employees registered for tomorrow's customer service training workshop. The workshop will begin at 9 A.M. in Room 204. Please bring your employee ID and a laptop. Printed materials will be provided when you arrive.",
    prompt: "What should employees bring?",
    options: [
      "A. An employee ID and a laptop.",
      "B. Printed training materials.",
      "C. A customer complaint form.",
      "D. A lunch receipt."
    ],
    correctOption: "A",
    explanationEn: "Employees are asked to bring their employee ID and a laptop.",
    explanationKo: "직원들은 사원증과 노트북을 가져오라는 안내를 받습니다.",
    koreanLearnerHint: "bring 뒤에 나오는 물건 목록을 정확히 들어야 합니다.",
    vocabularyItems: [
      { word: "employee ID", meaningKo: "사원증", exampleSentence: "Bring your employee ID." },
      { word: "printed materials", meaningKo: "인쇄 자료", exampleSentence: "Printed materials will be provided." }
    ]
  }
);

const vocabularyItemsByQuestionId = {
  "r5-001": {
    word: "submit",
    meaningKo: "제출하다",
    exampleSentence: "Please submit the report by Friday."
  },
  "r5-002": {
    word: "applicant",
    meaningKo: "지원자",
    exampleSentence: "The applicant arrived early for the interview."
  },
  "r5-003": {
    word: "invoice",
    meaningKo: "송장, 청구서",
    exampleSentence: "The supplier sent the updated invoice."
  },
  "r5-004": {
    word: "policy",
    meaningKo: "정책, 방침",
    exampleSentence: "The manager explained the new safety policy."
  },
  "r5-005": {
    word: "severe",
    meaningKo: "심한, 극심한",
    exampleSentence: "The weather was severe, but the delivery arrived."
  },
  "l2-001": {
    word: "conference room",
    meaningKo: "회의실",
    exampleSentence: "The meeting is being held in conference room B."
  },
  "l2-002": {
    word: "sales figures",
    meaningKo: "판매 수치",
    exampleSentence: "Could you send me the sales figures?"
  },
  "l2-003": {
    word: "install",
    meaningKo: "설치하다",
    exampleSentence: "The new software will be installed tomorrow."
  },
  "l2-004": {
    word: "contract",
    meaningKo: "계약서, 계약",
    exampleSentence: "Let's review the contract again."
  },
  "l2-005": {
    word: "proposal",
    meaningKo: "제안서",
    exampleSentence: "Has the client approved the proposal yet?"
  },
  "r5-006": {
    word: "promptly",
    meaningKo: "신속하게",
    exampleSentence: "The team responded promptly to the complaint."
  },
  "r5-007": {
    word: "training session",
    meaningKo: "교육 세션",
    exampleSentence: "The training session begins at 9:30 A.M."
  },
  "r5-008": {
    word: "branch",
    meaningKo: "지점",
    exampleSentence: "The company opened a new branch."
  },
  "r5-009": {
    word: "budget",
    meaningKo: "예산",
    exampleSentence: "The department will review the budget."
  },
  "r5-010": {
    word: "shipment",
    meaningKo: "배송, 선적",
    exampleSentence: "The shipment was delayed."
  },
  "r5-011": {
    word: "identification badge",
    meaningKo: "신분증 배지",
    exampleSentence: "Employees must wear identification badges."
  },
  "r5-012": {
    word: "spacious",
    meaningKo: "넓은",
    exampleSentence: "The conference room is more spacious."
  },
  "r5-013": {
    word: "timesheet",
    meaningKo: "근무 시간 기록표",
    exampleSentence: "Each employee should submit a timesheet."
  },
  "r5-014": {
    word: "reception desk",
    meaningKo: "접수처",
    exampleSentence: "Visitors must sign in at the reception desk."
  },
  "r5-015": {
    word: "available",
    meaningKo: "이용 가능한",
    exampleSentence: "The list of available rooms is posted."
  },
  "r5-016": {
    word: "revise",
    meaningKo: "수정하다",
    exampleSentence: "The team needs to revise the proposal."
  },
  "r5-017": {
    word: "archive room",
    meaningKo: "문서 보관실",
    exampleSentence: "The documents are in the archive room."
  },
  "r5-018": {
    word: "operate",
    meaningKo: "작동하다",
    exampleSentence: "The printer operates quietly."
  },
  "r5-019": {
    word: "complimentary",
    meaningKo: "무료의",
    exampleSentence: "The hotel offers a complimentary shuttle."
  },
  "r5-020": {
    word: "maintenance",
    meaningKo: "정비, 유지 보수",
    exampleSentence: "Please contact maintenance immediately."
  },
  "l2-006": {
    word: "orientation session",
    meaningKo: "오리엔테이션 세션",
    exampleSentence: "Mr. Park will lead the orientation session."
  },
  "l2-007": {
    word: "cafeteria",
    meaningKo: "구내식당",
    exampleSentence: "The cafeteria is open on Saturdays."
  },
  "l2-008": {
    word: "invoice",
    meaningKo: "송장, 청구서",
    exampleSentence: "Would you mind checking this invoice?"
  },
  "l2-009": {
    word: "brochure",
    meaningKo: "안내 책자",
    exampleSentence: "We should print the brochures tomorrow."
  },
  "l2-010": {
    word: "reserve",
    meaningKo: "예약하다",
    exampleSentence: "Did you reserve a table?"
  },
  "l2-011": {
    word: "loading dock",
    meaningKo: "하역장",
    exampleSentence: "Place the packages next to the loading dock."
  },
  "l2-012": {
    word: "sales report",
    meaningKo: "판매 보고서",
    exampleSentence: "The sales report must be finished before noon."
  },
  "l2-013": {
    word: "interview",
    meaningKo: "면접",
    exampleSentence: "The interview was moved to Thursday."
  },
  "l2-014": {
    word: "demonstration",
    meaningKo: "시연",
    exampleSentence: "The product demonstration was postponed."
  },
  "l2-015": {
    word: "client list",
    meaningKo: "고객 명단",
    exampleSentence: "Please update the client list."
  },
  "l2-016": {
    word: "quarterly",
    meaningKo: "분기별의",
    exampleSentence: "The quarterly meeting is next Tuesday."
  },
  "l2-017": {
    word: "revised schedule",
    meaningKo: "수정된 일정",
    exampleSentence: "Could you send the revised schedule again?"
  },
  "l2-018": {
    word: "courier",
    meaningKo: "택배, 배송 기사",
    exampleSentence: "The documents will be delivered by courier."
  },
  "l2-019": {
    word: "available",
    meaningKo: "이용 가능한",
    exampleSentence: "The conference room is available now."
  },
  "l2-020": {
    word: "presentation slides",
    meaningKo: "발표 슬라이드",
    exampleSentence: "Can you finish the presentation slides by noon?"
  }
};

const extraVocabularyItemsByQuestionId = {
  "r5-001": [
    { word: "marketing report", meaningKo: "마케팅 보고서", exampleSentence: "The marketing report is due Friday." },
    { word: "by Friday", meaningKo: "금요일까지", exampleSentence: "Please submit the report by Friday." }
  ],
  "r5-002": [
    { word: "schedule an interview", meaningKo: "면접 일정을 잡다", exampleSentence: "Ms. Kim scheduled an interview." },
    { word: "new applicant", meaningKo: "새 지원자", exampleSentence: "The new applicant arrived early." }
  ],
  "r5-003": [
    { word: "supplier", meaningKo: "공급업체", exampleSentence: "The supplier sent the invoice." },
    { word: "updated invoice", meaningKo: "수정된 송장", exampleSentence: "The updated invoice was sent yesterday." }
  ],
  "r5-004": [
    { word: "safety policy", meaningKo: "안전 정책", exampleSentence: "The manager explained the safety policy." },
    { word: "confidently", meaningKo: "자신 있게", exampleSentence: "She spoke confidently about the plan." }
  ],
  "r5-005": [
    { word: "severe weather", meaningKo: "악천후", exampleSentence: "The delivery arrived despite severe weather." },
    { word: "on time", meaningKo: "제시간에", exampleSentence: "The delivery arrived on time." }
  ],
  "l2-001": [
    { word: "staff meeting", meaningKo: "직원 회의", exampleSentence: "The staff meeting is in conference room B." },
    { word: "be held", meaningKo: "열리다", exampleSentence: "The meeting will be held tomorrow." }
  ],
  "l2-002": [
    { word: "email them", meaningKo: "그것들을 이메일로 보내다", exampleSentence: "I will email them now." },
    { word: "sales figures", meaningKo: "판매 수치", exampleSentence: "Could you send me the sales figures?" }
  ],
  "l2-003": [
    { word: "software", meaningKo: "소프트웨어", exampleSentence: "The software will be installed tomorrow." },
    { word: "tomorrow afternoon", meaningKo: "내일 오후", exampleSentence: "It will be installed tomorrow afternoon." }
  ],
  "l2-004": [
    { word: "review the contract", meaningKo: "계약서를 검토하다", exampleSentence: "Let's review the contract again." },
    { word: "good idea", meaningKo: "좋은 생각", exampleSentence: "That's a good idea." }
  ],
  "l2-005": [
    { word: "approve the proposal", meaningKo: "제안서를 승인하다", exampleSentence: "The client approved the proposal." },
    { word: "check my email", meaningKo: "이메일을 확인하다", exampleSentence: "I have not checked my email." }
  ]
};

function dedupeVocabularyItems(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = item.word.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function cleanVocabularyPhrase(text) {
  return String(text ?? "")
    .replace(/^[A-D]\.\s*/, "")
    .replace(/^Question:\s*/i, "")
    .replace(/_{2,}/g, "")
    .replace(/[?.!,;:]+$/g, "")
    .trim();
}

function getCorrectOptionText(question) {
  const optionFromList = question.options?.find((option) => option.startsWith(`${question.correctOption}.`));
  if (optionFromList) return cleanVocabularyPhrase(optionFromList);

  const transcriptMatch = question.transcript?.match(new RegExp(`^${question.correctOption}\\.\\s*(.+)$`, "im"));
  if (transcriptMatch) return cleanVocabularyPhrase(transcriptMatch[1]);

  return "";
}

function getTranscriptKeyPhrase(question, excludedPhrase) {
  const transcript = String(question.transcript ?? "");
  const sentences = transcript
    .split(/\n|(?<=[.!?])\s+/)
    .map(cleanVocabularyPhrase)
    .filter((sentence) => sentence.length >= 8 && sentence.toLowerCase() !== excludedPhrase.toLowerCase());

  return sentences[0] ?? "";
}

function buildFallbackVocabularyItems(question) {
  const correctPhrase = getCorrectOptionText(question);
  const promptPhrase = cleanVocabularyPhrase(question.prompt);
  const transcriptPhrase = getTranscriptKeyPhrase(question, correctPhrase);
  const phrases = [correctPhrase, promptPhrase, transcriptPhrase]
    .filter((phrase) => phrase && !/^select the best response/i.test(phrase))
    .slice(0, 2);

  return phrases.map((phrase) => ({
    word: phrase,
    meaningKo: `핵심 표현: ${phrase}`,
    meaningJa: `重要表現: ${phrase}`,
    exampleSentence: phrase
  }));
}

function buildJapaneseVocabularyMeaning(item) {
  const existingMeaning = item.meaningJa && item.meaningJa !== item.word && !/^重要表現|^TOEIC/i.test(item.meaningJa)
    ? item.meaningJa
    : "";
  return existingMeaning || getLocalizedVocabularyMeaning(item, "ja") || "";
}

for (const question of mockQuestions) {
  const primaryItem = vocabularyItemsByQuestionId[question.id];
  const existingItems = question.vocabularyItems ?? [];
  const extraItems = extraVocabularyItemsByQuestionId[question.id] ?? [];
  const baseItems = [primaryItem, ...existingItems, ...extraItems].filter(Boolean);
  const fallbackItems = baseItems.length ? [] : buildFallbackVocabularyItems(question);
  question.vocabularyItems = dedupeVocabularyItems([...baseItems, ...fallbackItems]);
  question.vocabularyItems = question.vocabularyItems.map((item) => ({
    ...item,
    meaningJa: buildJapaneseVocabularyMeaning(item)
  }));
  question.vocabularyItem = question.vocabularyItems[0] ?? null;
  question.explanationKo = getLocalizedExplanation(question, "ko");
  question.koreanLearnerHint = getLocalizedLearnerHint(question, "ko");
  question.explanationJa = question.explanationJa || getLocalizedExplanation(question, "ja");
  question.japaneseLearnerHint = question.japaneseLearnerHint || getLocalizedLearnerHint(question, "ja");
}

for (const question of mockQuestions) {
  if (question.part !== "listening_part_1" || question.transcript) {
    continue;
  }

  const transcript =
    listeningPart1TranscriptsByAudioId[question.audioId] ??
    question.options?.find((option) => option.startsWith(`${question.correctOption}.`))?.replace(/^[A-D]\.\s*/, "");

  if (transcript) {
    question.transcript = transcript;
  }
}

const partOrder = new Map([
  ["listening_part_1", 0],
  ["listening_part_2", 1],
  ["listening_part_3", 2],
  ["listening_part_4", 3],
  ["reading_part_5", 4],
  ["reading_part_6", 5],
  ["reading_part_7", 6]
]);

const listeningGroupOrderByPart = {
  listening_part_3: [
    "part3_office_equipment",
    "part3_restaurant_reservation",
    "part3_package_delivery",
    "part3_delayed_delivery",
    "greentech_appointment",
    "office_conversation",
    "airport_conversation"
  ],
  listening_part_4: [
    "part4_airport_announcement",
    "part4_voicemail_message",
    "part4_store_announcement",
    "brightstar_closed",
    "train_to_busan",
    "conference_badge",
    "training_workshop"
  ]
};

function isActiveCatalogQuestion(question) {
  if (!question.part?.startsWith("listening_")) return true;
  if (!question.audioFile?.toLowerCase().endsWith(".mp3")) return false;
  if (question.part === "listening_part_1") return Boolean(question.imageFile);
  return true;
}

function getCatalogSortNumber(question) {
  const audioExerciseMatch = question.audioFile?.match(/_ex(\d+)_/i);
  if (audioExerciseMatch) return Number(audioExerciseMatch[1]);

  const listeningGroupOrder = listeningGroupOrderByPart[question.part];
  if (listeningGroupOrder) {
    const groupIndex = listeningGroupOrder.indexOf(question.audioId);
    const idNumber = Number(question.id?.match(/-(\d+)$/)?.[1] ?? 999);
    return (groupIndex === -1 ? 99 : groupIndex) * 100 + idNumber;
  }

  return Number(question.id?.match(/-(\d+)$/)?.[1] ?? 999);
}

const activeQuestions = mockQuestions
  .filter(isActiveCatalogQuestion)
  .sort((a, b) => {
    const partComparison = (partOrder.get(a.part) ?? 99) - (partOrder.get(b.part) ?? 99);
    if (partComparison !== 0) return partComparison;
    return getCatalogSortNumber(a) - getCatalogSortNumber(b);
  });

const exerciseCountsByPart = new Map();
for (const question of activeQuestions) {
  const nextExerciseNumber = (exerciseCountsByPart.get(question.part) ?? 0) + 1;
  exerciseCountsByPart.set(question.part, nextExerciseNumber);
  question.exerciseNumber = nextExerciseNumber;
}

mockQuestions.length = 0;
mockQuestions.push(...activeQuestions);
