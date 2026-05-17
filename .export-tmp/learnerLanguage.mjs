export const supportedLanguages = ["ko", "en", "ja"];

export function getLanguageLabelKey(language) {
  if (language === "ko") return "language.korean";
  if (language === "ja") return "language.japanese";
  return "language.english";
}

export function getNativeLanguageLabel(language) {
  if (language === "ko") return "한국어";
  if (language === "ja") return "日本語";
  return "English";
}

export function isNativeLearnerLanguage(language) {
  return language === "ko" || language === "ja";
}

export function getLocalizedExplanation(item, language) {
  if (!item) return "";
  if (language === "ko") return hasUsefulKoreanText(item.explanationKo) ? item.explanationKo : buildKoreanExplanation(item);
  if (language === "ja") return item.explanationJa || buildJapaneseExplanation(item);
  return item.explanationEn ?? "";
}

export function getLocalizedLearnerHint(item, language) {
  if (!item) return "";
  if (language === "ko") return hasUsefulKoreanText(item.koreanLearnerHint) ? item.koreanLearnerHint : buildKoreanLearnerHint(item);
  if (language === "ja") return item.japaneseLearnerHint || buildJapaneseLearnerHint(item);
  return "";
}

export function getLocalizedVocabularyMeaning(item, language) {
  if (!item) return "";
  if (language === "ko") return item.meaningKo ?? "";
  if (language === "ja") {
    return getUsefulJapaneseVocabularyMeaning(item.meaningJa, item.word) || japaneseVocabularyMeanings[item.word?.toLowerCase()] || "";
  }
  return "";
}

function getUsefulJapaneseVocabularyMeaning(meaning, word) {
  if (!meaning || meaning === word || /^重要表現|^TOEIC/i.test(meaning)) return "";
  return meaning;
}

function getCorrectOptionText(question) {
  const correctOption = question.correctOption;
  return question.options?.find((option) => option.startsWith(`${correctOption}.`)) ?? correctOption ?? "";
}

function buildEnhancedJapaneseExplanation(question) {
  const answer = getCorrectOptionText(question);
  const prefix = answer ? `正解は ${answer} です。` : "";
  const skill = question.skill ?? "";

  if (question.part?.startsWith("listening_")) {
    return `${prefix}設問で求められている情報と音声中のキーワードが一致する選択肢を選びます。日本語に訳しながら聞くより、場所・時間・依頼・次の行動などの機能を先に押さえるのが有効です。`;
  }

  if (skill.includes("article") || skill === "articles") {
    return `${prefix}英語では単数の数えられる名詞に a/an/the などの冠詞が必要になることがあります。日本語には冠詞がないため、名詞の数と初出か既出かを確認します。`;
  }
  if (skill.includes("preposition") || skill === "prepositions") {
    return `${prefix}前置詞は日本語の助詞と一対一で対応しません。期限、時刻、場所など、英語側の決まった組み合わせで判断します。`;
  }
  if (skill.includes("tense") || skill === "verb tense") {
    return `${prefix}英語では yesterday や before などの時間表現が動詞の時制を決める重要な手がかりになります。日本語の文脈判断だけでなく、動詞形を確認します。`;
  }
  if (skill.includes("word form") || skill.includes("adverb") || skill === "adverbs") {
    return `${prefix}空所が文中でどの働きをしているかを見ます。動詞を修飾する位置なら副詞、名詞を修飾する位置なら形容詞が必要です。`;
  }
  if (skill.includes("conjunction") || skill.includes("transition")) {
    return `${prefix}前後の文が理由・逆接・条件・追加のどれでつながるかを判断します。日本語訳よりも論理関係を先に見ます。`;
  }
  if (skill.includes("comparative")) {
    return `${prefix}than がある場合は比較級が強く求められます。形容詞や副詞の原形・最上級と区別します。`;
  }
  if (skill.includes("pronoun")) {
    return `${prefix}代名詞は前に出た名詞の単数・複数や人称に合わせます。日本語では省略されやすい情報なので、英語では明示的に確認します。`;
  }
  if (skill.includes("subject-verb")) {
    return `${prefix}動詞に一致させる本当の主語を探します。of 句など途中に入る語に引っ張られないようにします。`;
  }
  if (skill.includes("infinitive") || skill.includes("modal") || skill.includes("participle")) {
    return `${prefix}英語では動詞の後ろに続く形がパターンで決まることがあります。to 不定詞、原形、分詞のどれが必要かを文型から判断します。`;
  }
  if (skill.includes("vocabulary")) {
    return `${prefix}意味だけでなく、名詞との相性やビジネス場面でよく使う組み合わせを見ます。TOEICではコロケーションが正解の決め手になります。`;
  }
  if (skill.includes("reading comprehension")) {
    return `${prefix}本文の該当箇所を根拠に選びます。日本語で全訳するより、設問のキーワードと本文中の同義表現を対応させると速く解けます。`;
  }

  return `${prefix}空所または設問が求める文法機能を確認し、英語の語順・品詞・決まった表現に合う選択肢を選びます。`;
}

function buildEnhancedJapaneseLearnerHint(question) {
  const skill = question.skill ?? "";

  if (question.part?.startsWith("listening_")) {
    return "日本語に置き換えてから考えると遅れやすいので、疑問詞・数字・場所・依頼表現を英語のままメモする意識で聞きましょう。";
  }
  if (skill.includes("article") || skill === "articles") {
    return "日本語には冠詞がないため、a/an/the を落としやすいです。単数可算名詞なら冠詞の有無を必ず確認しましょう。";
  }
  if (skill.includes("preposition") || skill === "prepositions") {
    return "「まで」は by と until の両方に訳せます。締め切りは by、継続は until と考えると判断しやすくなります。";
  }
  if (skill.includes("tense") || skill === "verb tense") {
    return "日本語は時制を文脈で補えますが、英語では動詞形が得点源です。時間を表す語を先に探しましょう。";
  }
  if (skill.includes("word form") || skill.includes("adverb") || skill === "adverbs") {
    return "日本語の助詞で役割を判断する感覚ではなく、英語では位置と語尾で品詞を判断します。";
  }
  if (skill.includes("conjunction") || skill.includes("transition")) {
    return "接続語は訳語だけで選ばず、前後が逆接・理由・条件・追加のどれかを先に決めましょう。";
  }
  if (skill.includes("pronoun") || skill.includes("subject-verb")) {
    return "日本語では主語や代名詞を省略しやすいですが、英語では数の一致が明確に問われます。";
  }
  if (skill.includes("reading comprehension")) {
    return "本文を全訳せず、設問の名詞・数字・日付を手がかりに該当箇所へ戻るのがTOEICでは効率的です。";
  }

  return "日本語の自然な言い方に引っ張られず、英語の語順・品詞・よく使う組み合わせを根拠に選びましょう。";
}

function getOptionTextWithoutLetter(option) {
  return option?.replace(/^[A-D]\.\s*/, "") ?? "";
}

function getCorrectAnswerText(question) {
  const optionText = getOptionTextWithoutLetter(getCorrectOptionText(question));
  if (optionText && optionText !== question.correctOption) return optionText;
  return getTranscriptOptionText(question, question.correctOption) || optionText;
}

function getDistractorTexts(question) {
  const correctOption = question.correctOption;
  return (question.options ?? [])
    .filter((option) => !option.startsWith(`${correctOption}.`))
    .map((option) => {
      const optionText = getOptionTextWithoutLetter(option);
      return getTranscriptOptionText(question, optionText) || optionText;
    })
    .filter(Boolean);
}

function getQuestionStem(question) {
  const transcriptQuestion = question.transcript?.match(/Question:\s*([^\n]+)/i)?.[1];
  if (transcriptQuestion) return transcriptQuestion;
  return question.prompt || question.transcript || "";
}

function getTranscriptOptionText(question, letter) {
  if (!letter || !question.transcript) return "";
  const escapedLetter = letter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = question.transcript.match(new RegExp(`(?:^|\\n)${escapedLetter}\\.\\s*([^\\n]+)`, "i"));
  return match?.[1] ?? "";
}

function findPromptMarker(prompt, markers) {
  return markers.find((marker) => prompt.toLowerCase().includes(marker.toLowerCase())) ?? "";
}

function getPart2QuestionType(stem) {
  const normalized = stem.toLowerCase();
  if (normalized.startsWith("where")) return "場所";
  if (normalized.startsWith("when")) return "時間";
  if (normalized.startsWith("who")) return "人";
  if (normalized.startsWith("why")) return "理由";
  if (normalized.startsWith("how")) return "方法や状態";
  if (normalized.startsWith("could you") || normalized.startsWith("would you") || normalized.startsWith("can you")) {
    return "依頼への応答";
  }
  if (normalized.startsWith("why don't") || normalized.startsWith("how about") || normalized.startsWith("should we")) {
    return "提案への反応";
  }
  if (
    normalized.startsWith("do ") ||
    normalized.startsWith("did ") ||
    normalized.startsWith("has ") ||
    normalized.startsWith("have ") ||
    normalized.startsWith("is ") ||
    normalized.startsWith("are ")
  ) {
    return "Yes/No または間接的な確認";
  }
  return "質問の機能";
}

function buildJapanesePart1Explanation(question, prefix) {
  const correctText = getCorrectAnswerText(question);
  const distractors = getDistractorTexts(question).slice(0, 2).join(" / ");
  const visualContext = question.imageFile || question.audioTitle || question.id || "この写真";
  const answerContext = correctText && correctText !== question.correctOption ? correctText : `${question.correctOption}（${visualContext}）`;
  return `${prefix}この写真問題では、正しい文「${answerContext}」が写真の中心動作・人物・物の状態を最も直接表しています。${distractors ? `ほかの選択肢（${distractors}）は、写真にない動作や物を含むため弱くなります。` : ""}写真全体を訳そうとせず、まず主語、動作、場所の三点を音声と照合します。`;
}

function buildJapanesePart2Explanation(question, prefix) {
  const stem = getQuestionStem(question);
  const correctText = getCorrectAnswerText(question);
  const questionType = getPart2QuestionType(stem);
  const context = stem === question.prompt ? question.audioTitle || question.audioFile || question.id : stem;
  const answerContext = correctText && correctText !== question.correctOption ? correctText : `${question.correctOption}（${context}）`;
  return `${prefix}質問は「${context}」で、${questionType}を求めています。正しい応答「${answerContext}」はその機能に直接答えています。Part 2では単語の一致より、質問が場所・時間・依頼・提案・理由のどれを求めているかを先に判断します。`;
}

function buildJapaneseListeningExplanation(question, prefix) {
  const correctText = getCorrectAnswerText(question);
  const transcriptClue = question.transcript ? `音声では「${question.transcript.slice(0, 120)}」が手がかりです。` : "";
  return `${prefix}${transcriptClue}${correctText ? `選択肢「${correctText}」は、設問で求められている情報と一致します。` : "設問で求められている情報と音声中のキーワードが一致する選択肢を選びます。"}会話や説明文では、数字・場所・依頼・次の行動など、設問の種類に合う情報だけを狙って聞くのが有効です。`;
}

function buildJapaneseReadingExplanation(question, prefix) {
  const correctText = getCorrectAnswerText(question);
  const source = question.passageTitle || question.passageText?.slice(0, 80) || question.prompt || "本文";
  return `${prefix}設問「${question.prompt ?? ""}」は、${source} の該当箇所を根拠に判断します。${correctText ? `選択肢「${correctText}」が本文の情報と最も合います。` : ""}全文を日本語に訳すより、設問の名詞・数字・日付と本文中の同義表現を対応させると速く解けます。`;
}

function buildJapaneseExplanation(question) {
  const answer = getCorrectOptionText(question);
  const prefix = answer ? `正解は ${answer} です。` : "";
  const skill = question.skill ?? "";

  if (question.part === "listening_part_1") return buildJapanesePart1Explanation(question, prefix);
  if (question.part === "listening_part_2") return buildJapanesePart2Explanation(question, prefix);
  if (question.part?.startsWith("listening_")) return buildJapaneseListeningExplanation(question, prefix);
  if (question.part === "reading_part_6" || question.part === "reading_part_7") {
    return buildJapaneseReadingExplanation(question, prefix);
  }

  if (skill.includes("article") || skill === "articles") {
    const correctText = getCorrectAnswerText(question);
    return `${prefix}空所の後ろにある名詞句を見ます。この文では「${question.prompt}」の空所に ${correctText} が入り、後ろの名詞の数や音に合います。日本語には冠詞がないため、意味だけでなく名詞が単数か、母音で始まる音か、初出か既出かを確認するのがポイントです。`;
  }
  if (skill.includes("preposition") || skill === "prepositions") {
    const marker = findPromptMarker(question.prompt ?? "", ["Friday", "9:30", "office", "building", "conference", "airport"]);
    return `${prefix}前置詞は日本語の助詞に直訳せず、後ろの語との組み合わせで判断します。この文では「${marker || question.prompt}」が手がかりです。期限なら by、正確な時刻なら at、曜日や日付なら on、範囲や場所なら in のように、英語側の決まった使い方で選びます。`;
  }
  if (skill.includes("tense") || skill === "verb tense") {
    const marker = findPromptMarker(question.prompt ?? "", ["yesterday", "before", "since", "tomorrow", "next", "will"]);
    return `${prefix}時制問題では、文中の時間表現を先に拾います。この文では「${marker || question.prompt}」が動詞形を決める手がかりです。日本語では時制を文脈で補えますが、英語では過去・未来・現在完了などを動詞の形で明示する必要があります。`;
  }
  if (skill.includes("word form") || skill.includes("adverb") || skill === "adverbs") {
    const correctText = getCorrectAnswerText(question);
    return `${prefix}空所が文の中で何を修飾しているかを確認します。「${question.prompt}」では ${correctText} が周りの語と品詞の役割に合います。動詞を説明する位置なら副詞、名詞を説明する位置なら形容詞、主語や目的語になる位置なら名詞を疑います。`;
  }
  if (skill.includes("conjunction") || skill.includes("transition")) {
    const correctText = getCorrectAnswerText(question);
    return `${prefix}接続語は前後の意味関係で選びます。この文では「${question.prompt}」の二つの内容が、理由・逆接・条件・追加のどれでつながるかを見ます。${correctText} はその関係を自然に示します。`;
  }
  if (skill.includes("comparative")) {
    return `${prefix}比較問題では than や as ... as のような比較の合図を探します。「${question.prompt}」では比較対象が示されているため、原級や最上級ではなく比較級が必要です。`;
  }
  if (skill.includes("pronoun")) {
    return `${prefix}代名詞は、前に出た名詞の単数・複数や人称に合わせます。「${question.prompt}」では、代名詞が何を受けるのかを先に決める必要があります。`;
  }
  if (skill.includes("subject-verb")) {
    return `${prefix}主語と動詞の一致では、動詞に対応する本当の主語を探します。「${question.prompt}」では、途中の of 句や説明語に引っ張られず、中心名詞が単数か複数かを確認します。`;
  }
  if (skill.includes("infinitive") || skill.includes("modal") || skill.includes("participle")) {
    const correctText = getCorrectAnswerText(question);
    return `${prefix}動詞の後ろに続く形は、動詞ごとのパターンで決まります。「${question.prompt}」では ${correctText} の形が文型に合います。to 不定詞、原形、現在分詞、過去分詞のどれが必要かを、意味だけでなく構造から判断します。`;
  }
  if (skill.includes("vocabulary")) {
    const correctText = getCorrectAnswerText(question);
    return `${prefix}語彙問題では意味だけでなく、周りの名詞やビジネス場面との相性を見ます。「${question.prompt}」では ${correctText} が文脈と自然に合います。ほかの選択肢は似た形でも、目的語や場面との組み合わせが弱くなります。`;
  }
  if (skill.includes("reading comprehension")) return buildJapaneseReadingExplanation(question, prefix);

  return `${prefix}「${question.prompt ?? "この問題"}」で問われている文法機能を確認し、英語の語順・品詞・決まった表現に合う選択肢を選びます。`;
}

function buildJapaneseLearnerHint(question) {
  const skill = question.skill ?? "";
  const stem = getQuestionStem(question);

  if (question.part === "listening_part_1") {
    const context = question.imageFile || question.audioTitle || question.id || "この写真";
    return `写真「${context}」を見たら、人物の動作、物の位置、場所の三つを先に英語で予測します。音声では写真にない名詞や動作が出た選択肢をすぐ消しましょう。`;
  }
  if (question.part === "listening_part_2") {
    const context = stem === question.prompt ? question.audioTitle || question.audioFile || question.id : stem;
    return `最初の語句を特に強く聞きます。「${context}」では、質問が何を求めているかを決めてから応答を選ぶと、似た単語のひっかけに流されにくくなります。`;
  }
  if (question.part?.startsWith("listening_")) {
    const context = question.audioTitle || question.audioFile || question.id || question.prompt || "この音声";
    return `「${context}」では、日本語に置き換えてから考えると遅れやすいので、設問の種類に合わせて数字・場所・依頼表現・次の行動を英語のまま拾いましょう。`;
  }
  if (skill.includes("article") || skill === "articles") {
    return `空所の直後の名詞を見てください。「${question.prompt}」では、名詞が数えられる単数か、母音で始まる音かが決め手になります。`;
  }
  if (skill.includes("preposition") || skill === "prepositions") {
    return `前置詞は後ろの語とセットで覚えます。「${question.prompt}」の空所後の表現が、期限・時刻・場所のどれかを先に分類しましょう。`;
  }
  if (skill.includes("tense") || skill === "verb tense") {
    return `時制問題では、選択肢を見る前に時間表現を丸で囲えるか確認します。「${question.prompt}」の中の過去・未来・継続の合図が得点源です。`;
  }
  if (skill.includes("word form") || skill.includes("adverb") || skill === "adverbs") {
    return `日本語の自然さより、空所の前後を見ます。「${question.prompt}」では、空所が動詞・名詞・形容詞のどれを説明しているかで品詞を決めます。`;
  }
  if (skill.includes("conjunction") || skill.includes("transition")) {
    return `接続語は訳語だけで選ばず、「${question.prompt}」の前半と後半が逆接・理由・条件・追加のどれかを先に決めましょう。`;
  }
  if (skill.includes("pronoun") || skill.includes("subject-verb")) {
    return `日本語では省略される主語や数も、英語では形に出ます。「${question.prompt}」では中心になる名詞を探してから選択肢を見ましょう。`;
  }
  if (skill.includes("reading comprehension")) {
    return `本文を全文訳せず、設問「${question.prompt ?? ""}」の名詞・数字・日付を手がかりに該当箇所へ戻るのがTOEICでは効率的です。`;
  }

  return `日本語の自然な言い方に引っ張られず、「${question.prompt ?? "この文"}」の英語の語順・品詞・よく使う組み合わせを根拠に選びましょう。`;
}

function hasUsefulKoreanText(text) {
  if (!text) return false;
  if (!/[가-힣]/.test(text)) return false;
  return !text.startsWith("For TOEIC");
}

function getKoreanPart2QuestionType(stem) {
  const normalized = stem.toLowerCase();
  if (normalized.startsWith("where")) return "장소";
  if (normalized.startsWith("when")) return "시간";
  if (normalized.startsWith("who")) return "사람";
  if (normalized.startsWith("why")) return "이유";
  if (normalized.startsWith("what")) return "내용이나 대상";
  if (normalized.startsWith("how")) return "방법이나 상태";
  if (normalized.startsWith("could you") || normalized.startsWith("would you") || normalized.startsWith("can you")) {
    return "요청에 대한 응답";
  }
  if (normalized.startsWith("why don't") || normalized.startsWith("how about") || normalized.startsWith("should we")) {
    return "제안에 대한 반응";
  }
  if (
    normalized.startsWith("do ") ||
    normalized.startsWith("did ") ||
    normalized.startsWith("has ") ||
    normalized.startsWith("have ") ||
    normalized.startsWith("is ") ||
    normalized.startsWith("are ")
  ) {
    return "yes/no 또는 간접 확인";
  }
  return "질문의 기능";
}

function buildKoreanPart1Explanation(question, prefix) {
  return `${question.correctOption}가 사진을 가장 잘 묘사합니다.`;
}

function buildKoreanPart2Explanation(question, prefix) {
  const stem = getQuestionStem(question);
  const correctText = getCorrectAnswerText(question);
  const questionType = getKoreanPart2QuestionType(stem);
  const context = stem === question.prompt ? question.audioTitle || question.audioFile || question.id : stem;
  const answerContext = correctText && correctText !== question.correctOption ? correctText : `${question.correctOption}(${context})`;
  return `${prefix}질문은 "${context}"이고, ${questionType}을 요구합니다. 정답 응답 "${answerContext}"은 그 기능에 직접 답합니다. Part 2에서는 비슷한 단어가 들리는지보다 질문이 장소, 시간, 요청, 제안, 이유 중 무엇을 묻는지 먼저 판단하는 것이 중요합니다.`;
}

function buildKoreanListeningExplanation(question, prefix) {
  const correctText = getCorrectAnswerText(question);
  const transcriptClue = question.transcript ? `음성에서는 "${question.transcript.slice(0, 120)}" 부분이 단서입니다. ` : "";
  return `${prefix}${transcriptClue}${correctText ? `선택지 "${correctText}"이 설문에서 요구한 정보와 가장 잘 맞습니다.` : "설문에서 요구하는 정보와 음성의 핵심어가 일치하는 선택지를 고릅니다."} 대화나 안내문에서는 숫자, 장소, 요청, 다음 행동처럼 문제 유형에 맞는 정보만 집중해서 들어야 합니다.`;
}

function buildKoreanReadingExplanation(question, prefix) {
  const correctText = getCorrectAnswerText(question);
  const source = question.passageTitle || question.passageText?.slice(0, 80) || question.prompt || "본문";
  return `${prefix}설문 "${question.prompt ?? ""}"은 ${source}의 해당 부분을 근거로 판단합니다.${correctText ? ` 선택지 "${correctText}"이 본문 정보와 가장 잘 맞습니다.` : ""} 전체를 한국어로 다 번역하기보다 설문의 명사, 숫자, 날짜와 본문의 같은 의미 표현을 연결하면 더 빠르게 풀 수 있습니다.`;
}

function buildKoreanExplanation(question) {
  const answer = getCorrectOptionText(question);
  const prefix = question.part === "listening_part_1"
    ? ""
    : answer
      ? `정답은 ${answer}입니다. `
      : "";
  const skill = question.skill ?? "";

  if (question.part === "listening_part_1") return buildKoreanPart1Explanation(question, prefix);
  if (question.part === "listening_part_2") return buildKoreanPart2Explanation(question, prefix);
  if (question.part?.startsWith("listening_")) return buildKoreanListeningExplanation(question, prefix);
  if (question.part === "reading_part_6" || question.part === "reading_part_7") return buildKoreanReadingExplanation(question, prefix);

  if (skill.includes("article") || skill === "articles") {
    const correctText = getCorrectAnswerText(question);
    return `${prefix}빈칸 뒤의 명사구를 봐야 합니다. "${question.prompt}"에서는 ${correctText}가 뒤 명사의 수와 발음에 맞습니다. 한국어에는 관사가 없기 때문에 의미만 보지 말고 단수 가산명사인지, 모음 소리로 시작하는지, 처음 언급인지 이미 아는 대상인지 확인하세요.`;
  }
  if (skill.includes("preposition") || skill === "prepositions") {
    const marker = findPromptMarker(question.prompt ?? "", ["Friday", "9:30", "office", "building", "conference", "airport"]);
    return `${prefix}전치사는 한국어 조사와 일대일로 맞지 않습니다. 이 문장에서는 "${marker || question.prompt}"가 단서입니다. 마감은 by, 정확한 시각은 at, 요일이나 날짜는 on, 장소나 범위는 in처럼 뒤에 오는 표현과 묶어서 판단하세요.`;
  }
  if (skill.includes("tense") || skill === "verb tense") {
    const marker = findPromptMarker(question.prompt ?? "", ["yesterday", "before", "since", "tomorrow", "next", "will"]);
    return `${prefix}시제 문제는 시간 표현을 먼저 찾습니다. 이 문장에서는 "${marker || question.prompt}"가 동사 형태를 정하는 단서입니다. 한국어는 시제를 문맥으로 보완할 수 있지만 영어는 과거, 미래, 현재완료 등을 동사 형태로 분명히 보여 줍니다.`;
  }
  if (skill.includes("word form") || skill.includes("adverb") || skill === "adverbs") {
    const correctText = getCorrectAnswerText(question);
    return `${prefix}빈칸이 문장에서 무엇을 꾸미는지 확인합니다. "${question.prompt}"에서는 ${correctText}가 주변 단어와 품사 역할에 맞습니다. 동사를 설명하면 부사, 명사를 설명하면 형용사, 주어나 목적어 자리이면 명사를 먼저 의심하세요.`;
  }
  if (skill.includes("conjunction") || skill.includes("transition")) {
    const correctText = getCorrectAnswerText(question);
    return `${prefix}접속어는 앞뒤 의미 관계로 고릅니다. "${question.prompt}"의 두 내용이 이유, 대조, 조건, 추가 중 어떤 관계인지 먼저 봐야 합니다. ${correctText}는 그 관계를 자연스럽게 보여 줍니다.`;
  }
  if (skill.includes("comparative")) {
    return `${prefix}비교 문제에서는 than이나 as ... as 같은 비교 신호를 찾습니다. "${question.prompt}"에서는 비교 대상이 있으므로 원급이나 최상급이 아니라 비교급이 필요합니다.`;
  }
  if (skill.includes("pronoun")) {
    return `${prefix}대명사는 앞에 나온 명사의 단수/복수와 사람에 맞춰야 합니다. "${question.prompt}"에서는 대명사가 무엇을 가리키는지 먼저 정해야 합니다.`;
  }
  if (skill.includes("subject-verb")) {
    return `${prefix}주어-동사 일치에서는 동사와 맞는 진짜 주어를 찾아야 합니다. "${question.prompt}"에서는 중간의 of 구나 설명어에 끌리지 말고 중심 명사가 단수인지 복수인지 확인하세요.`;
  }
  if (skill.includes("infinitive") || skill.includes("modal") || skill.includes("participle")) {
    const correctText = getCorrectAnswerText(question);
    return `${prefix}동사 뒤에 이어지는 형태는 동사 패턴으로 결정됩니다. "${question.prompt}"에서는 ${correctText} 형태가 문형에 맞습니다. to부정사, 원형, 현재분사, 과거분사 중 무엇이 필요한지 의미뿐 아니라 구조로 판단하세요.`;
  }
  if (skill.includes("vocabulary")) {
    const correctText = getCorrectAnswerText(question);
    return `${prefix}어휘 문제는 뜻뿐 아니라 주변 명사와 비즈니스 상황과의 궁합을 봐야 합니다. "${question.prompt}"에서는 ${correctText}가 문맥과 자연스럽게 맞습니다. 다른 선택지는 모양이 비슷해도 목적어나 상황과의 결합이 약합니다.`;
  }
  if (skill.includes("reading comprehension")) return buildKoreanReadingExplanation(question, prefix);

  return `${prefix}"${question.prompt ?? "이 문제"}"에서 묻는 문법 기능을 확인하고, 영어의 어순, 품사, 고정 표현에 맞는 선택지를 고르세요.`;
}

function buildKoreanLearnerHint(question) {
  const skill = question.skill ?? "";
  const stem = getQuestionStem(question);

  if (question.part === "listening_part_1") {
    const context = question.imageFile || question.audioTitle || question.id || "이 사진";
    return `사진 "${context}"을 보면 인물의 동작, 사물의 위치, 장소를 먼저 영어로 예상하세요. 음성에서 사진에 없는 명사나 동작이 나오면 바로 제거하는 것이 좋습니다.`;
  }
  if (question.part === "listening_part_2") {
    const context = stem === question.prompt ? question.audioTitle || question.audioFile || question.id : stem;
    return `첫 단어를 특히 강하게 들어야 합니다. "${context}"에서는 질문이 무엇을 요구하는지 정한 뒤 응답을 고르면 비슷한 단어 함정에 덜 흔들립니다.`;
  }
  if (question.part?.startsWith("listening_")) {
    const context = [question.audioTitle || question.audioFile || question.id || "이 음성", question.prompt]
      .filter(Boolean)
      .join(" / ");
    return `"${context}"에서는 한국어로 바꿔 생각하면 늦어질 수 있습니다. 문제 유형에 맞춰 숫자, 장소, 요청 표현, 다음 행동을 영어 그대로 잡으세요.`;
  }
  if (skill.includes("article") || skill === "articles") {
    return `빈칸 바로 뒤의 명사를 보세요. "${question.prompt}"에서는 그 명사가 단수 가산명사인지, 모음 소리로 시작하는지가 핵심입니다.`;
  }
  if (skill.includes("preposition") || skill === "prepositions") {
    return `전치사는 뒤 표현과 세트로 외우는 편이 좋습니다. "${question.prompt}"의 빈칸 뒤 표현이 마감, 시각, 장소 중 무엇인지 먼저 분류하세요.`;
  }
  if (skill.includes("tense") || skill === "verb tense") {
    return `시제 문제에서는 선택지를 보기 전에 시간 표현을 찾으세요. "${question.prompt}" 안의 과거, 미래, 지속 신호가 점수 포인트입니다.`;
  }
  if (skill.includes("word form") || skill.includes("adverb") || skill === "adverbs") {
    return `한국어로 자연스러운지보다 빈칸 앞뒤를 보세요. "${question.prompt}"에서는 빈칸이 동사, 명사, 형용사 중 무엇을 설명하는지가 품사를 결정합니다.`;
  }
  if (skill.includes("conjunction") || skill.includes("transition")) {
    return `접속어는 번역어만 보고 고르지 말고, "${question.prompt}"의 앞뒤가 대조, 이유, 조건, 추가 중 무엇인지 먼저 정하세요.`;
  }
  if (skill.includes("pronoun") || skill.includes("subject-verb")) {
    return `한국어에서는 생략되는 주어나 수 정보도 영어에서는 형태로 드러납니다. "${question.prompt}"에서는 중심 명사를 찾은 뒤 선택지를 보세요.`;
  }
  if (skill.includes("reading comprehension")) {
    return `본문을 전부 번역하지 말고, 설문 "${question.prompt ?? ""}"의 명사, 숫자, 날짜를 단서로 해당 위치로 돌아가는 것이 TOEIC에서는 효율적입니다.`;
  }

  return `한국어식 자연스러움에 끌리지 말고, "${question.prompt ?? "이 문장"}"의 영어 어순, 품사, 자주 쓰는 결합을 근거로 선택하세요.`;
}

const japaneseVocabularyMeanings = {
  accommodate: "収容する、対応する",
  applicant: "応募者",
  "archive room": "文書保管室",
  available: "利用可能な",
  brochure: "案内冊子",
  budget: "予算",
  cafeteria: "社員食堂",
  "client list": "顧客リスト",
  complimentary: "無料の",
  "conference room": "会議室",
  confirm: "確認する",
  "confirm delivery": "配送可否を確認する",
  "friday morning": "金曜日の午前",
  "by 4 p.m.": "午後4時までに",
  "room 204": "204号室",
  "employee id": "社員証",
  "by friday": "金曜日までに",
  "company id": "社員証",
  "move from a to b": "AからBへ移動する",
  "Friday morning": "金曜日の午前",
  "by 4 P.M.": "午後4時までに",
  "Room 204": "204号室",
  "marketing report": "マーケティング報告書",
  "by Friday": "金曜日までに",
  "schedule an interview": "面接の日程を組む",
  "new applicant": "新しい応募者",
  "updated invoice": "更新された請求書",
  "safety policy": "安全方針",
  confidently: "自信を持って",
  "severe weather": "悪天候",
  "on time": "時間通りに",
  branch: "支店",
  "bulletin board": "掲示板",
  receptionist: "受付係",
  courteously: "丁寧に",
  conference: "会議",
  "name tag": "名札",
  supervisor: "上司、監督者",
  "safety equipment": "安全装備",
  experienced: "経験豊富な",
  technician: "技術者",
  reference: "参照、推薦状",
  "resume production": "生産を再開する",
  "equipment inspection": "設備点検",
  "process an order": "注文を処理する",
  payment: "支払い",
  "final proposal": "最終提案書",
  client: "顧客",
  efficient: "効率的な",
  model: "モデル、型",
  "inventory system": "在庫管理システム",
  "training video": "研修動画",
  "sign in": "署名して入る、チェックインする",
  laboratory: "研究室",
  document: "文書",
  "ready for review": "確認できる状態の",
  distribute: "配布する",
  "shuttle service": "シャトルサービス",
  "be responsible for": "担当する、責任がある",
  "travel expenses": "旅費",
  recommendation: "推薦、提案",
  affordable: "手頃な価格の",
  "remain open": "営業を続ける",
  "renovation work": "改装工事",
  "survey result": "調査結果",
  positive: "肯定的な",
  "reduce errors": "ミスを減らす",
  "labeling process": "ラベル貼り工程",
  "payroll department": "給与課",
  confidentially: "秘密裏に",
  orientation: "オリエンテーション",
  auditorium: "講堂",
  "legal team": "法務チーム",
  "revised contract": "修正された契約書",
  "detailed explanation": "詳しい説明",
  "billing system": "請求システム",
  "extend hours": "営業時間を延長する",
  "visitor demand": "来客需要",
  "certificate of completion": "修了証明書",
  "workshop participant": "ワークショップ参加者",
  "available for the call": "電話に出られる",
  "neither...nor": "〜でも〜でもない",
  "safety manual": "安全マニュアル",
  "available online": "オンラインで利用可能な",
  "personal device": "個人端末",
  "confidential file": "機密ファイル",
  "checkout process": "精算手続き",
  "previous version": "以前の版",
  "planning committee": "企画委員会",
  "cost-saving measure": "コスト削減策",
  "remind someone to": "人に〜するよう念を押す",
  "at all times": "常に",
  "maintenance request": "保守依頼",
  "submit a request": "依頼を提出する",
  "request changes": "変更を依頼する",
  "send to the printer": "プリンターに送る",
  reimburse: "払い戻す、精算する",
  "delay lasts": "遅延が続く",
  congratulate: "祝う",
  "complete a campaign": "キャンペーンを完了する",
  durable: "耐久性のある",
  attractive: "魅力的な",
  "postpone the launch": "発売を延期する",
  "complete tests": "試験を完了する",
  "complimentary parking": "無料駐車場",
  "stay more than two nights": "2泊を超えて滞在する",
  "introduce a policy": "方針を導入する",
  "customer complaint": "顧客の苦情",
  "urgent request": "緊急依頼",
  unavailable: "利用できない",
  record: "記録する",
  "temporary request form": "臨時依頼フォーム",
  afterward: "その後",
  "enter into the database": "データベースに入力する",
  "wait for a response": "返答を待つ",
  "complete an update": "更新を完了する",
  "instruction sheet": "説明書",
  suggestion: "提案",
  "final version": "最終版",
  "client presentation": "顧客向け発表",
  photographer: "写真家",
  "updated files": "更新されたファイル",
  brief: "短い、簡潔な",
  "review process": "確認手順",
  "in advance": "事前に",
  "study room": "学習室",
  "research workshop": "調査ワークショップ",
  "academic database": "学術データベース",
  "borrowed laptop": "借用したノートパソコン",
  "borrowing restriction": "貸出制限",
  "extended hours": "延長営業時間",
  feedback: "意見、フィードバック",
  "temporarily unavailable": "一時的に利用できない",
  manufacturer: "製造業者",
  substitute: "代用する",
  "ship immediately": "すぐに発送する",
  "available items": "利用可能な品物",
  delay: "遅延、遅らせる",
  option: "選択肢",
  "contact me": "私に連絡する",
  "follow-up ticket": "フォローアップ用チケット",
  "account number": "口座番号、アカウント番号",
  "technical term": "専門用語",
  "simple language": "簡単な表現",
  "review chat records": "チャット記録を確認する",
  privately: "非公開で、個別に",
  "sample response": "回答例",
  "apply guidelines": "指針を適用する",
  inspection: "点検",
  "company ID": "社員証",
  cartridge: "カートリッジ",
  "handle complaints": "苦情を処理する",
  "product knowledge": "製品知識",
  "missing items": "不足品",
  "at no additional charge": "追加料金なしで",
  temporary: "一時的な",
  relocation: "移転",
  "training center": "研修センター",
  renovation: "改装、改修",
  "personal items": "私物",
  "important documents": "重要書類",
  "technical support": "技術サポート",
  "desk phone": "卓上電話",
  "customer support center": "顧客サポートセンター",
  "full-time job": "正社員の仕事",
  "begin hiring": "採用を開始する",
  renovate: "改装する",
  bilingual: "二言語対応の",
  "time zone": "時間帯",
  "rooftop lounge": "屋上ラウンジ",
  "install lighting": "照明を設置する",
  "as usual": "通常通り",
  "dining room": "食堂、個室",
  arrangement: "手配、配置",
  "private event": "非公開イベント",
  "assign tasks": "業務を割り当てる",
  "track deadlines": "締め切りを管理する",
  "annual plan": "年間プラン",
  "per user": "利用者1人あたり",
  register: "登録する",
  instead: "代わりに",
  "business trip": "出張",
  "express delivery": "速達配送",
  "at no charge": "無料で",
  "shipping mistake": "配送ミス",
  "pickup procedure": "受け取り手順",
  "loading area": "荷積み場所",
  "check in": "チェックインする",
  "security office": "警備室",
  "same-day pickup": "当日受け取り",
  "overnight storage": "一晩の保管",
  "opening remarks": "開会の挨拶",
  sustainable: "持続可能な",
  "office supplies": "事務用品",
  "digital copy": "電子版",
  "activation code": "有効化コード",
  "exchange request": "交換依頼",
  "be eligible for": "〜の対象である",
  "opened software": "開封済みソフトウェア",
  "mail a product": "商品を郵送する",
  "customer support": "顧客サポート",
  "expense report": "経費報告書",
  "pay cycle": "給与支払周期",
  "taxi receipt": "タクシー領収書",
  destination: "目的地",
  "online briefing": "オンライン説明会",
  intranet: "社内ネットワーク",
  "adjustable desk": "調整可能な机",
  "ergonomic chair": "人間工学に基づいた椅子",
  "assembly service": "組み立てサービス",
  purchase: "購入",
  "on-site consultation": "現地相談",
  "measure space": "場所の寸法を測る",
  "flat tire": "タイヤのパンク",
  "printed copy": "印刷物",
  "sample product": "サンプル品",
  storage: "保管、倉庫",
  "expand service": "サービスを拡大する",
  "business district": "商業地区",
  "be intended for": "〜を対象としている",
  "lunch break": "昼休み",
  "place an order": "注文する",
  "pickup counter": "受け取りカウンター",
  "information brochure": "案内パンフレット",
  "rush processing fee": "急ぎ処理手数料",
  "total due": "請求合計額",
  "health fair": "健康フェア",
  "sales visit": "営業訪問",
  itinerary: "旅程",
  "move from A to B": "AからBへ移動する",
  "the finance manager did": "財務部長が行った",
  "who approved the budget proposal": "誰が予算案を承認したか",
  "yes, we're running low": "はい、残りが少なくなっています",
  "should we order more office supplies": "もっと事務用品を注文すべきですか",
  "in the underground garage": "地下駐車場で",
  "where should i park my car": "どこに車を駐車すればよいですか",
  "it probably needs more paper": "おそらく用紙がもっと必要です",
  "why is the printer making noise": "なぜプリンターが音を立てているのか",
  "janet handles that department": "ジャネットがその部署を担当しています",
  "who is responsible for customer support": "顧客サポートの担当者は誰ですか",
  "no, i was out sick": "いいえ、病欠していました",
  "didn't you attend the training session": "研修に出席しなかったのですか",
  "nearly every week": "ほぼ毎週",
  "how often do you update the website": "どのくらいの頻度でウェブサイトを更新しますか",
  "i sent it earlier today": "今日の早い時間に送りました",
  "can you send me the updated schedule": "更新された予定を送ってもらえますか",
  "office equipment": "オフィス機器",
  "what are the speakers mainly discussing": "話者たちは主に何について話していますか",
  "when were the chairs delivered": "椅子はいつ配達されましたか",
  "contact a technician": "技術者に連絡する",
  "what will the woman do later": "女性は後で何をしますか",
  "at a restaurant": "レストランで",
  "where does the conversation most likely take place": "会話はおそらくどこで行われていますか",
  four: "4",
  "how many people will attend": "何人が出席しますか",
  "outdoor seating": "屋外席",
  "what does the man request": "男性は何を依頼していますか",
  "at a shipping center": "配送センターで",
  "where most likely are the speakers": "話者たちはおそらくどこにいますか",
  identification: "身分証明書",
  "what does the woman ask for": "女性は何を求めていますか",
  "sign a document": "書類に署名する",
  "what must the man do before leaving": "男性は出発前に何をしなければなりませんか",
  "a delayed shipment": "遅れた配送",
  "what problem is discussed": "どんな問題が話し合われていますか",
  "bad weather": "悪天候",
  "why was the shipment delayed": "配送はなぜ遅れましたか",
  "tomorrow morning": "明日の午前",
  "when will the order probably arrive": "注文品はおそらくいつ届きますか",
  "a boarding procedure": "搭乗手続き",
  "what is the announcement mainly about": "アナウンスは主に何についてですか",
  "their boarding passes and identification": "搭乗券と身分証明書",
  "what should passengers prepare": "乗客は何を準備すべきですか",
  "passengers needing assistance": "支援が必要な乗客",
  "who may board first": "誰が先に搭乗できますか",
  "to announce that repairs are complete": "修理完了を知らせるため",
  "why is emily calling": "エミリーはなぜ電話していますか",
  "what service was completed": "どのサービスが完了しましたか",
  "after 8 a.m": "午前8時以降",
  "when can the customer pick up the vehicle tomorrow": "顧客は明日いつ車を受け取れますか",
  "what product is on sale": "どの商品がセール対象ですか",
  "on the second floor": "2階で",
  "where are the sale items located": "セール品はどこにありますか",
  "a gift card": "ギフトカード",
  "what will customers receive after spending over $100": "100ドルを超えて使うと顧客は何を受け取りますか",
  "warehouse manager": "倉庫責任者",
  "return flight": "帰りの便",
  "be affected": "影響を受ける",
  "board a plane": "飛行機に搭乗する",
  passenger: "乗客",
  "read a book": "本を読む",
  "be seated": "座っている",
  "serve food": "料理を出す",
  plate: "皿",
  "sit around a table": "テーブルを囲んで座る",
  meeting: "会議",
  "type on a laptop": "ノートパソコンで入力する",
  keyboard: "キーボード",
  "wear a helmet": "ヘルメットをかぶる",
  worker: "作業員",
  delivered: "配達された",
  office: "事務所",
  supplies: "備品",
  arranged: "並べられた",
  food: "食べ物",
  prepared: "準備された",
  kitchen: "台所",
  "work out": "運動する",
  indoors: "屋内で",
  teacher: "教師",
  writing: "書いている",
  board: "板、掲示板",
  machines: "機械",
  operated: "操作された",
  factory: "工場",
  produce: "生産する",
  sold: "販売された",
  outdoors: "屋外で",
  participating: "参加している",
  bicycles: "自転車",
  lined: "並んだ",
  beside: "横に",
  passengers: "乗客",
  checking: "確認している",
  flights: "航空便",
  boxes: "箱",
  loaded: "積み込まれた",
  vehicles: "車両",
  parked: "駐車された",
  rows: "列",
  studying: "勉強している",
  tables: "テーブル",
  pushing: "押している",
  shopping: "買い物",
  cart: "カート",
  "be held": "開かれる",
  "main conference room": "メイン会議室",
  "marketing team": "マーケティングチーム",
  "finish the report": "報告書を仕上げる",
  "send it": "それを送る",
  "this morning": "今朝",
  "take a message": "伝言を受ける",
  "write down": "書き留める",
  clear: "明確な、片付ける",
  "be canceled": "中止される",
  manager: "管理者、マネージャー",
  sick: "病気の",
  "accept credit cards": "クレジットカードを受け付ける",
  counter: "カウンター",
  "for two hours": "2時間",
  "in charge of": "担当している",
  project: "プロジェクト",
  "next week": "来週",
  postpone: "延期する",
  "good idea": "良い考え",
  "problem with the computer": "コンピューターの問題",
  "keep shutting down": "停止し続ける",
  "yesterday afternoon": "昨日の午後",
  passport: "パスポート",
  "in your bag": "あなたのかばんの中に",
  colleague: "同僚",
  "receive my email": "私のメールを受け取る",
  inbox: "受信箱",
  reply: "返信する",
  "get the bill": "会計をもらう",
  "bring it": "それを持ってくる",
  "right away": "すぐに",
  train: "列車",
  arrive: "到着する",
  "in about ten minutes": "約10分後に",
  appointment: "予約、約束",
  consultant: "コンサルタント、相談員",
  "be scheduled for": "予定されている",
  opening: "空き時間",
  "move an appointment": "予約を変更する",
  "Friday morning": "金曜日の午前",
  supplier: "供給業者",
  "office supply order": "事務用品の注文",
  "copy paper": "コピー用紙",
  "training materials": "研修資料",
  deliver: "配達する",
  "by 4 P.M.": "午後4時までに",
  "airport pickup": "空港送迎",
  "arrival time": "到着時刻",
  flight: "航空便",
  "not 3:15": "3時15分ではない",
  "updated schedule": "更新された予定",
  "boarding procedure": "搭乗手続き",
  "boarding passes and identification": "搭乗券と身分証明書",
  "needing assistance": "支援が必要な",
  "brake repair": "ブレーキ修理",
  "be closed": "閉まっている",
  "national holiday": "祝日",
  "temporary closure": "一時休業",
  reopen: "再開する",
  tomorrow: "明日",
  "winter jackets": "冬用ジャケット",
  "second floor": "2階",
  "gift card": "ギフトカード",
  "depart from": "出発する",
  "reserved seat": "指定席",
  "express train": "急行列車",
  platform: "ホーム",
  "food service": "飲食サービス",
  "before boarding": "搭乗前に",
  "name badge": "名札",
  "registration desk": "受付デスク",
  participant: "参加者",
  "before entering": "入場前に",
  "contain an error": "誤りが含まれている",
  "information counter": "案内カウンター",
  "training workshop": "研修ワークショップ",
  "registered for": "登録した",
  "take place": "行われる",
  "Room 204": "204号室",
  "employee ID": "社員証",
  "printed materials": "印刷資料",
  contract: "契約書、契約",
  courier: "宅配便、配送業者",
  demonstration: "実演、デモ",
  "identification badge": "身分証バッジ",
  install: "設置する、インストールする",
  interview: "面接",
  invoice: "請求書",
  "loading dock": "荷さばき場",
  maintenance: "保守、整備",
  operate: "作動する、運営する",
  "orientation session": "オリエンテーション",
  policy: "方針、規定",
  presentation: "発表",
  "presentation slides": "発表スライド",
  promptly: "迅速に",
  proposal: "提案書",
  quarterly: "四半期ごとの",
  "reception desk": "受付",
  reserve: "予約する",
  revise: "修正する",
  "revised schedule": "修正された予定",
  "sales figures": "売上数値",
  "sales report": "売上報告書",
  severe: "厳しい、深刻な",
  shipment: "配送、出荷",
  software: "ソフトウェア",
  spacious: "広々とした",
  submit: "提出する",
  timesheet: "勤務時間表",
  "training session": "研修セッション"
};
