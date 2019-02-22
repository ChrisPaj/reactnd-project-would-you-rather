let users = {
  sarahedo: {
    id: "sarahedo",
    name: "Sarah Edo",
    avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionOne",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo"
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"], 
    score: 6,
  },
  tylermcginnis: {
    id: "tylermcginnis",
    name: "Tyler McGinnis",
    avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo"
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
    score: 4,
  },
  johndoe: {
    id: "johndoe",
    name: "John Doe",
    avatarURL: "https://tylermcginnis.com/would-you-rather/dan.jpg",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionOne"
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
    score: 5,
  },
  chrispa: {
    id: "chrispa",
    name: "Chris Pa",
    avatarURL: "https://chrispaj.github.io/images/chrispa.jpg",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionOne",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionOne"
    },
    questions: [],
    score: 4,
  },
};

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "sarahedo",
    timestamp: 1467166872634,
    poll: "What kind of memory would you rather have?",
    optionOne: {
      votes: ["sarahedo"],
      text: "have horrible short term memory"
    },
    optionTwo: {
      votes: ["chrispa"],
      text: "have horrible long term memory"
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    author: "johndoe",
    timestamp: 1468479767190,
    optionOne: {
      votes: ["chrispa"],
      text: "become a superhero"
    },
    poll: "What would you rather become?",
    optionTwo: {
      votes: ["johndoe", "sarahedo"],
      text: "become a supervillian"
    }
  },
  am8ehyc8byjqgar0jgpub9: {
    id: "am8ehyc8byjqgar0jgpub9",
    author: "sarahedo",
    timestamp: 1488579767190,
    poll: "What would you rather be?",
    optionOne: {
      votes: [],
      text: "be telekinetic"
    },
    optionTwo: {
      votes: ["sarahedo","chrispa"],
      text: "be telepathic"
    }
  },
  loxhs1bqm25b708cmbf3g: {
    id: "loxhs1bqm25b708cmbf3g",
    author: "tylermcginnis",
    timestamp: 1482579767190,
    poll: "What job would you rather do?",
    optionOne: {
      votes: ["chrispa"],
      text: "be a front-end developer"
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "be a back-end developer"
    }
  },
  vthrdm985a262al8qx3do: {
    id: "vthrdm985a262al8qx3do",
    author: "tylermcginnis",
    timestamp: 1489579767190,
    poll: "What scenario would you rather prefer?",
    optionOne: {
      votes: ["tylermcginnis"],
      text: "find $50 yourself"
    },
    optionTwo: {
      votes: ["johndoe"],
      text: "have your best friend find $500"
    }
  },
  xj352vofupe1dqz9emx13r: {
    id: "xj352vofupe1dqz9emx13r",
    author: "johndoe",
    timestamp: 1493579767190,
    poll: "What coding language would you rather use?",
    optionOne: {
      votes: ["johndoe"],
      text: "write JavaScript"
    },
    optionTwo: {
      votes: ["tylermcginnis"],
      text: "write Swift"
    }
  }
};
let authedUser = { 
	id: "", 
	showPollsAnswered: false,	
};

function generateUID() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000);
  });
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000);
  });
}

export function _getAuthedUser() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...authedUser }), 1000);
  });
}

function formatQuestion({ optionOneText, optionTwoText, author, poll }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    poll,
    optionOne: {
      votes: [],
      text: optionOneText
    },
    optionTwo: {
      votes: [],
      text: optionTwoText
    }
  };
}

export function _saveQuestion({ optionOneText, optionTwoText, author, poll, score }) {
  return new Promise((res, rej) => {
    const formattedQuestion = formatQuestion({ optionOneText, optionTwoText, author, poll });
    const authedUser = formattedQuestion.author;

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      };

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id]),
          score: (users[authedUser].score + 1),
        }
      };
      console.log("_saveQuestion: users: " + JSON.stringify(users))

      res(formattedQuestion);
    }, 1000);
  });
}

export function _saveQuestionAnswer({ id, authedUser, option }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser.id]: {
          ...users[authedUser.id],
          answers: {
            ...users[authedUser.id].answers,
            [id]: option
          },
          score: (users[authedUser.id].score + 1)
        }
      };
      console.log("_saveQuestionAnswer: users: "  + JSON.stringify(users))

      questions = {
        ...questions,
        [id]: {
          ...questions[id],
          [option]: {
            ...questions[id][option],
            votes: questions[id][option].votes.concat([authedUser])
          }
        }
      };

      res();
    }, 500);
  });
}
