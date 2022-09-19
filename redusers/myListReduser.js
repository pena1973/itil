// типы дейсвий изменения состояния
const LIST_ADD = 'myListReducer/LIST_ADD'; // добавление (сохранение) черновика
const LIST_REG = 'myListReducer/LIST_REG'; // регистрация задачи
const List_CNL = 'myListReducer/List_CNL'; // Отмена задачи

const initialValue = [
  {
    title: 'Задача1',
    id_client: 'Apps_000000002',
    content:
      'Добрый день. Как называется телеграм-канал, в котором люди отписываться по обстановке на границе с Россией',
    status: 'completed',
    priority: 'low',
    created: '24.04.2022 17:34:50',
    registred: '27.04.2022 18:39:43',
    inProgres: '',
    inCheking: '03.09.2022 18:39:43',
    apruved: '',
    canceled: '',
    closed: '',
    estime: 10,
    managerNotes: '',
    id_Tiket: 'Apps_000000005',
    files: [
      {
        file: 'Двоичный файл',
        name: 'аватар вася',
        type: 'png',
        size: 176467,
      },
    ],
  },
  {
    title: 'Задача1',
    id_client: 'Apps_000000002',
    content:
      'Думаю, в нашей группе назрело создание темы по обмену денег между странами. В случае необходимости получить рубли или евро прошу вас размещать свои нужды здесь, дабы не размазывать свои посты по бесконечной ленте, а иметь все в одной горячей теме.Я думаю правильно будет все детали обмена вести в ЛС, где вы сможете договориться с другим участником о сумме, способе и времени передачи денег.',
    status: 'completed',
    priority: 'low',
    created: '24.04.2022 17:34:50',
    registred: '17.08.2022 18:39:43',
    inProgres: '',
    inCheking: '01.09.2022 18:39:43',
    apruved: '',
    canceled: '',
    closed: '',
    estime: 20,
    managerNotes: '',
    id_Tiket: 'Apps_000000005',
    files: [
      {
        file: 'Двоичный файл',
        name: 'аватар вася',
        type: 'png',
        size: 176467,
      },
    ],
  },
];

const reduser = (state = initialValue, action) => {
  console.log('state', state);
  console.log('action', action);
  switch (action.type) {
    case LIST_ADD:
      console.log("LIST_ADD", task);
      return [...state, action.task];
    case LIST_REG:
      console.log("LIST_REG", task);
      return state;
    case List_CNL:
      console.log("List_CNL", task);
      return state;
    default:
      return state;
  }
};

export const addList = (task) => {
  return { type: LIST_ADD, task: task };
};

export const regList = (task) => {
  //console.log("123",task);
  return {type: LIST_REG, task: task };
};

export const cnlList = (task) => {
  //console.log("123",task);
  return {type: List_CNL, task: task };
};



export default reduser;