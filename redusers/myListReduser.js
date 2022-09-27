import { createSlice } from '@reduxjs/toolkit'

const initialValue = [
  {
    title: 'Задача1',
    id_client: 'Apps_000000003',
    content:
      'Добрый день. Как называется телеграм-канал, в котором люди отписываться по обстановке на границе с Россией',
    status: 'checking',
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
    id_client: 'Apps_000000003',
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
    id_client: 'Apps_000000003',
    content:
      'Думаю, в нашей группе назрело создание темы по обмену денег между странами. В случае необходимости получить рубли или евро прошу вас размещать свои нужды здесь, дабы не размазывать свои посты по бесконечной ленте, а иметь все в одной горячей теме.Я думаю правильно будет все детали обмена вести в ЛС, где вы сможете договориться с другим участником о сумме, способе и времени передачи денег.',
    status: 'draft',
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
    id_Tiket: 'Apps_000000009',
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
    id_client: 'Apps_000000003',
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
    id_Tiket: 'Apps_000000008',
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
    id_client: 'Apps_000000003',
    content:
      'Думаю, в нашей группе назрело создание темы по обмену денег между странами. В случае необходимости получить рубли или евро прошу вас размещать свои нужды здесь, дабы не размазывать свои посты по бесконечной ленте, а иметь все в одной горячей теме.Я думаю правильно будет все детали обмена вести в ЛС, где вы сможете договориться с другим участником о сумме, способе и времени передачи денег.',
    status: 'checking',
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
    id_Tiket: 'Apps_000000007',
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
    id_client: 'Apps_000000003',
    content:
      'Думаю, в нашей группе назрело создание темы по обмену денег между странами. В случае необходимости получить рубли или евро прошу вас размещать свои нужды здесь, дабы не размазывать свои посты по бесконечной ленте, а иметь все в одной горячей теме.Я думаю правильно будет все детали обмена вести в ЛС, где вы сможете договориться с другим участником о сумме, способе и времени передачи денег.',
    status: 'canceled',
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

   const myListSlice = createSlice({
    name: 'myList',
   initialState: initialValue,
    reducers:{
      addTask: (state, action) => {
        action.payload.status = 'draft';
        action.payload.canceled = new Date(curentDay.getTime());
        return [...state, action.task];      
      },
      regTask: (state, action) => {
        // action?.payload?.status = "registered";
        // action?.payload?.canceled = new Date(curentDay.getTime());
        return [...state];
      },
      cnlTask: (state, action) => {
        //  action.payload?.status = "canceled";
        //  action.payload?.canceled = new Date(curentDay.getTime());
        //let state1 = (state.filter((n) => n.id_Tiket !== action.task.id_Tiket));
         return state;
      },
      aprTask: (state, action) => {
        if(action?.payload?.status) {
          action.payload.status = "completed";
        }
        //action?.payload?.apruved = new Date(curentDay.getTime());
        //console.log('state',state);
        //console.log('payload',action.payload);
       // let state1 = (state?.filter((n) => n?.id_Tiket !== action.payload.id_Tiket));
        return state;
        // надо задачу добавить в историю
      },
      refTask: (state, action) => {
        // Нужно сменить статус задачи на not_accepted
        //console.log('state',state);
        //console.log('payload',action.payload);
        return [...state];
      },
      resetMyList: () => {console.log('3',initialValue)
        return initialValue
      },
    },

  })

export const { addTask, regTask, cnlTask, aprTask, refTask, resetMyList } = myListSlice.actions
export default myListSlice.reducer

//export const selectMyList = state => state.myList;