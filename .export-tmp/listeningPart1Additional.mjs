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

export function buildAdditionalListeningPart1Questions() {
  return additionalListeningPart1Questions.map((question, index) => {
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
  });
}
