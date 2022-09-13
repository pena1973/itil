// типы дейсвий изменения состояния
const TASK_ADD = 'aprooveReducer/TASK_ADD'; // добавление
const TASK_APR = 'aprooveReducer/TASK_APR'; // приемка
const TASK_REJ = 'aprooveReducer/TASK_REJ'; // отказ приемки

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
    id_Tiket: 'Apps_000000004',
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
  {
    title: 'Задача1',
    id_client: 'Apps_000000002',
    content: 'Думаю, в нашей группе назрело создание.',
    status: 'completed',
    priority: 'high',
    created: '20.08.2022 17:34:50',
    registred: '27.08.2022 18:39:43',
    inProgres: '',
    inCheking: '02.09.2022 17:34:49',
    apruved: '02.09.2022 17:34:49',
    canceled: '',
    closed: '',
    estime: 5,
    managerNotes: '',
    id_Tiket: 'Apps_000000006',
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
  switch (action.type) {
    case TASK_ADD:
      return [...state, action.task];
    case TASK_APR:
      var ind = state.findIndex((el) => el.id_Tiket === action?.task?.id_Tiket);
      console.log(ind);
      var newState = [...state];
      newState.splice(ind, 1);
      return newState;
    case TASK_REJ:
      return state.filter((n) => n.id_Tiket !== action.task.id_Tiket);
    default:
      return state;
  }
};

export const addTask = (task) => {
  return { type: TASK_ADD, task: task };
};

export const aprTask = (task) => {
  console.log('123', task);
  return { type: TASK_APR, task: task };
};

export const rejTask = (task) => {
  return { type: TASK_REJ, task: task };
};

export default reduser;
