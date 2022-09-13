// типы дейсвий изменения состояния
const TASK_ADD = 'queueReducer/TASK_ADD'; // добавление
const TASK_REM = 'queueReducer/TASK_APR'; // убираем из очереди

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
    case TASK_ADD:
      return [...state, action.task];
    case TASK_REM:
      console.log("165656423",task);
      var state1 = (state.filter((n) => n.id_Tiket !== action.task.id_Tiket));
      console.log("state1",state1);
      return state;
    default:
      return state;
  }
};

export const addTaskQ = (task) => {
  return { type: TASK_ADD, task: task };
};

export const remTaskQ = (task) => {
  console.log("123",task);
  return {type: TASK_APR, task: task };
};


export default reduser;