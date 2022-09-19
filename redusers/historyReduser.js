// типы дейсвий изменения состояния
const HIST_ADD = 'historyReducer/HIST_ADD'; // добавление завершенной задачи

const initialValue = [
  {
    title: 'Задача1',
    id_client: 'Apps_000000002',
    content:
      'Добрый день. Как называется телеграм-канал, в котором люди отписываться по обстановке на границе с Россией',
    status: 'closed',
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
    case HIST_ADD:
      console.log("HIST_ADD", task);
      return [...state, action.task];
    default:
      return state;
  }
};

export const addHist = (task) => {
  return { type: HIST_ADD, task: task };
};


export default reduser;