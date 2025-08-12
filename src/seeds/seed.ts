import 'reflect-metadata';
import { DataSource, In } from 'typeorm';
import { Department } from '../departement/entities/departement.entity';
import { User } from '../user/entities/user.entity';
import { USER_ROLES } from '../user/types/user-role.type';
import { Course } from '../courses/entities/course.entity';
import { Enrollment } from '../courses/entities/enrollment.entity';
import { ENROLLMENT_STATUS } from '../courses/types/enrollment-status.type';
import { Room } from '../schedule/entities/room.entity';
import { Session } from '../schedule/entities/session.entity';
import { Achievement } from '../achievements/entities/achievement.entity';
import { Quiz } from '../quiz/entities/quiz.entity';
import { QuizQuestion } from '../quiz/entities/quiz-question.entity';
import { QUESTION_TYPE } from '../quiz/types/question-type.type';
import { generateHash } from '../common/utils/hash.utils';

const baseConfig = require('../../ormconfig.json');

async function seed() {
  const dataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || baseConfig.host || 'localhost',
    port: Number(process.env.DB_PORT || baseConfig.port || 5432),
    username: process.env.DB_USERNAME || baseConfig.username || 'postgres',
    password: process.env.DB_PASSWORD || baseConfig.password || 'postgres',
    database: process.env.DB_NAME || baseConfig.database || 'ptu_learning',
    synchronize: true,
    logging: false,
    entities: [
      Department,
      User,
      Course,
      Enrollment,
      Room,
      Session,
      Achievement,
      Quiz,
      QuizQuestion,
    ],
  });

  await dataSource.initialize();

  try {
    // Repositories
    const departmentRepo = dataSource.getRepository(Department);
    const userRepo = dataSource.getRepository(User);
    const courseRepo = dataSource.getRepository(Course);
    const enrollmentRepo = dataSource.getRepository(Enrollment);
    const roomRepo = dataSource.getRepository(Room);
    const sessionRepo = dataSource.getRepository(Session);
    const achievementRepo = dataSource.getRepository(Achievement);
    const quizRepo = dataSource.getRepository(Quiz);
    const questionRepo = dataSource.getRepository(QuizQuestion);

    // Departments
    const departmentLabels = ['Computer Science', 'Mathematics', 'Physics'];
    const existingDepartments = await departmentRepo.find({ where: { label: In(departmentLabels) } });
    const existingLabels = new Set(existingDepartments.map((d) => d.label));
    const departmentsToInsert = departmentLabels
      .filter((label) => !existingLabels.has(label))
      .map((label) => departmentRepo.create({ label }));
    const savedDepartments = [
      ...existingDepartments,
      ...(departmentsToInsert.length ? await departmentRepo.save(departmentsToInsert) : []),
    ];

    const csDept = savedDepartments.find((d) => d.label === 'Computer Science')!;
    const mathDept = savedDepartments.find((d) => d.label === 'Mathematics')!;

    // Users (use hashed passwords)
    const usersSeed: Array<Partial<User>> = [
      {
        email: 'admin@ptu.local',
        password: await generateHash('admin1234'),
        firstName: 'System',
        lastName: 'Admin',
        phoneNumber: '1000000000',
        role: USER_ROLES.ADMIN,
        departement: csDept,
      },
      {
        email: 'teacher@ptu.local',
        password: await generateHash('teacher1234'),
        firstName: 'Alice',
        lastName: 'Teacher',
        phoneNumber: '1000000001',
        role: USER_ROLES.TEACHER,
        departement: csDept,
      },
      {
        email: 'student@ptu.local',
        password: await generateHash('student1234'),
        firstName: 'Bob',
        lastName: 'Student',
        phoneNumber: '1000000002',
        role: USER_ROLES.STUDENT,
        departement: mathDept,
        yearGroup: '2025',
      },
    ];

    const existingUsers = await userRepo.find({ where: { email: In(usersSeed.map((u) => u.email!)) } });
    const existingEmails = new Set(existingUsers.map((u) => u.email));
    const usersToInsert = usersSeed
      .filter((u) => !existingEmails.has(u.email!))
      .map((u) => userRepo.create(u));
    const savedUsers = [
      ...existingUsers,
      ...(usersToInsert.length ? await userRepo.save(usersToInsert) : []),
    ];

    const teacher = savedUsers.find((u) => u.email === 'teacher@ptu.local')!;
    const student = savedUsers.find((u) => u.email === 'student@ptu.local')!;

    // Courses
    const coursesSeed: Array<Partial<Course>> = [
      {
        title: 'Intro to Programming',
        description: 'Learn the basics of programming using JavaScript.',
        teacher,
      },
      {
        title: 'Data Structures',
        description: 'Explore fundamental data structures and algorithms.',
        teacher,
      },
    ];

    const existingCourses = await courseRepo.find({ where: { title: In(coursesSeed.map((c) => c.title!)) } });
    const existingCourseTitles = new Set(existingCourses.map((c) => c.title));
    const coursesToInsert = coursesSeed
      .filter((c) => !existingCourseTitles.has(c.title!))
      .map((c) => courseRepo.create(c));
    const savedCourses = [
      ...existingCourses,
      ...(coursesToInsert.length ? await courseRepo.save(coursesToInsert) : []),
    ];

    const introCourse = savedCourses.find((c) => c.title === 'Intro to Programming')!;

    // Enrollments
    const existingEnrollment = await enrollmentRepo
      .createQueryBuilder('enrollment')
      .leftJoin('enrollment.student', 'student')
      .leftJoin('enrollment.course', 'course')
      .where('student.id = :studentId AND course.id = :courseId', {
        studentId: student.id,
        courseId: introCourse.id,
      })
      .getOne();

    if (!existingEnrollment) {
      const enrollment = enrollmentRepo.create({
        student,
        course: introCourse,
        status: ENROLLMENT_STATUS.ACCEPTED,
      });
      await enrollmentRepo.save(enrollment);
    }

    // Rooms
    const roomsSeed: Array<Partial<Room>> = [
      { name: 'Computer Lab A', capacity: 30, isAvailable: true },
      { name: 'Room 101', capacity: 40, isAvailable: true },
    ];
    const existingRooms = await roomRepo.find({ where: { name: In(roomsSeed.map((r) => r.name!)) } });
    const existingRoomNames = new Set(existingRooms.map((r) => r.name));
    const roomsToInsert = roomsSeed
      .filter((r) => !existingRoomNames.has(r.name!))
      .map((r) => roomRepo.create(r));
    const savedRooms = [
      ...existingRooms,
      ...(roomsToInsert.length ? await roomRepo.save(roomsToInsert) : []),
    ];
    const labA = savedRooms.find((r) => r.name === 'Computer Lab A')!;

    // Sessions
    const sessionsSeed: Array<Partial<Session>> = [
      { day: 'Monday', startTime: '09:00', endTime: '11:00', course: introCourse, teacher, room: labA },
      { day: 'Wednesday', startTime: '10:00', endTime: '12:00', course: introCourse, teacher, room: labA },
    ];

    for (const s of sessionsSeed) {
      const exists = await sessionRepo
        .createQueryBuilder('session')
        .leftJoin('session.course', 'course')
        .leftJoin('session.teacher', 'teacher')
        .leftJoin('session.room', 'room')
        .where('session.day = :day', { day: s.day })
        .andWhere('session.startTime = :startTime', { startTime: s.startTime })
        .andWhere('session.endTime = :endTime', { endTime: s.endTime })
        .andWhere('course.id = :courseId', { courseId: s.course!.id })
        .getOne();
      if (!exists) {
        await sessionRepo.save(sessionRepo.create(s));
      }
    }

    // Achievements
    const achievementsSeed: Array<Partial<Achievement>> = [
      { name: 'First Quiz', description: 'Complete your first quiz', rarity: 'common' as any, points: 10 },
      { name: 'Perfect Score', description: 'Score 100% on a quiz', rarity: 'rare' as any, points: 100 },
    ];
    const existingAchievements = await achievementRepo.find({ where: { name: In(achievementsSeed.map((a) => a.name!)) } });
    const existingAchievementNames = new Set(existingAchievements.map((a) => a.name));
    const achievementsToInsert = achievementsSeed
      .filter((a) => !existingAchievementNames.has(a.name!))
      .map((a) => achievementRepo.create(a));
    if (achievementsToInsert.length) {
      await achievementRepo.save(achievementsToInsert);
    }

    // Quiz
    const quizTitle = 'JavaScript Fundamentals Quiz';
    let quiz = await quizRepo.findOne({ where: { title: quizTitle } });
    if (!quiz) {
      quiz = quizRepo.create({
        title: quizTitle,
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        course: introCourse,
      });
      quiz = await quizRepo.save(quiz);
    }

    // Questions
    const questionsSeed: Array<Partial<QuizQuestion>> = [
      {
        questionText: 'Which keyword declares a block-scoped variable in JavaScript?',
        type: QUESTION_TYPE.MULTIPLE_CHOICE,
        options: ['var', 'let', 'function', 'class'],
        correctAnswer: 1,
        points: 5,
        quiz,
      },
      {
        questionText: 'Select all truthy values in JavaScript.',
        type: QUESTION_TYPE.MULTIPLE_SELECT,
        options: ['0', "'0'", 'null', '{}'],
        correctAnswers: [1, 3],
        points: 5,
        quiz,
      },
      {
        questionText: 'The keyword const creates an immutable binding (true/false).',
        type: QUESTION_TYPE.TRUE_FALSE,
        correctBooleanAnswer: true,
        points: 2,
        quiz,
      },
      {
        questionText: 'Name the method used to parse a JSON string in JavaScript.',
        type: QUESTION_TYPE.SHORT_ANSWER,
        correctTextAnswer: 'JSON.parse',
        points: 3,
        quiz,
      },
    ];

    for (const q of questionsSeed) {
      const exists = await questionRepo.findOne({ where: { questionText: q.questionText!, quiz: { id: quiz.id } } });
      if (!exists) {
        await questionRepo.save(questionRepo.create(q));
      }
    }

    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exitCode = 1;
  } finally {
    await dataSource.destroy();
  }
}

seed(); 