import { createStore } from "vuex";

const store = createStore({
  state: {
    uiState: "start",
    characterChoices: ["baker", "mechanic", "artist"],
    character: "",
    questionIndex: 0,
    score: 0,
    questions: [
      {
        question: `What's your dog's name?`,
        baker: "Woofgang Puck",
        mechanic: "Alf",
        artist: "Salvador Dogi",
      },
      {
        question: `What's your favorite hobby?`,
        baker: "Extreme ironing",
        mechanic: "Bacon santa cosplay",
        artist: "Mimosas",
      },
      {
        question: `What's your favorite color?`,
        baker: "turquoise",
        mechanic: "yellow",
        artist: "transparent",
      },
      {
        question: `Is cereal soup?`,
        baker: "You can't be serieal",
        mechanic: "Yes, I am Jason Lengstorf",
        artist: "wut",
      },
      {
        question: `What’s the most imaginative insult you can come up with?`,
        baker: "You're a substitute teacher with no lesson plan",
        mechanic: "Yer face is a melted welly",
        artist: "You eat buttons off the remote",
      },
      {
        question: `If peanut butter wasn’t called peanut butter, what would it be called?`,
        baker: "legoome",
        mechanic: "brown paste",
        artist: "groundnut smoosh",
      },
    ],
  },
  mutations: {
    pickCharacter(state, charachter) {
      state.character = charachter;
    },
    updateUIState(state, uistate) {
      state.uiState = uistate;
    },
    pickQuestion(state, charachter) {
      if (state.questionIndex < state.questions.length - 1) {
        state.questionIndex++;
      } else {
        Math.sign(state.score) > 0
          ? (state.uiState = "won")
          : (state.uiState = "last");
      }
      state.character === charachter
        ? (state.score += 13)
        : (state.score -= 13);
    },
    startAgain(state) {
      state.uiState = "start";
      state.character = "";
      state.questionIndex = 0;
      state.score = 0;
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
});

export default store;
