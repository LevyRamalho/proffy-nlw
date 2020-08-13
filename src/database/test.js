const Database = require('./db');
const createProffy = require('./createProffy.js');

Database.then(async (db) => {
     proffyValue = {
      name: 'Mayk Brito',
      avatar: 'https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4',
      whatsapp: '8998877665',
      bio: 'Instrutor de educação física',
    };
  
    const classValues = {
      subject: 1,
      cost: '20',
    };
  
    const classScheduleValues = [
      {
        weekday: 1,
        time_from: 720,
        time_to: 1220,
      },
      {
        weekday: 0,
        time_from: 520,
        time_to: 1220,
      },
    ];
//    await createProffy (db, {proffyValue, classValues, classScheduleValues})
    //consultar dados
    //todos os proffy
   const selectedProffys = await db.all("SELECT * FROM proffys");
//    console.log(selectedProffys)
   //consultar as classes de um determinado professor
   //e trazer junto os dados do professor
   const selectedClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
   `)
//    console.log(selectedClassesAndProffys)

   //o horario que a pessoa trabalha, poe exemplo, é das 8h - 18h
   //o horario do time_fro (8) precisa ser antes ou igual ao horario solicitado
   //o time_to precisa ser acima
   const selectedClassesSchedule = await db.all(`
   SELECT class_schedule.*
   FROM class_schedule
   WHERE class_schedule.class_id = 1
   AND class_schedule.weekday = "0"
   AND class_schedule.time_from <= "1300"
   AND class_schedule.time_to > "1300"
   `)
   console.log(selectedProffys);
   console.log(selectedClassesAndProffys);
   console.log(selectedClassesSchedules);
})