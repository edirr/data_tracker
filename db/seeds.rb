# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Test.destroy_all
MathTest.destroy_all
Student.destroy_all
User.destroy_all

User.create([
  {
    name: 'Eric',
    email: 'eric@gmail.com',
    password: BCrypt::Password.create('password'),
  },
  {
    name: 'John',
    email: 'john@gmail.com',
    password: BCrypt::Password.create('password'),
  },
  {
    name: 'Brian',
    email: 'brian@gmail.com',
    password: BCrypt::Password.create('password'),
  }
]);

Student.create([
  {
    name: 'Billy',
    age: 12,
    address: '14 Johnson Lane',
    user_id: 1,
  },
  {
    name: 'John',
    age: 12,
    address: '144 Craven Street',
    user_id: 1,
  },
  {
    name: 'Brian',
    age: 11,
    address: '56 Apple Lane',
    user_id: 1,
  },
  {
    name: 'Michael',
    age: 12,
    address: '7 Dunder Lane',
    user_id: 1,
  },
  {
    name: 'Frank',
    age: 12,
    address: '99 Wavy Ave',
    user_id: 1,
  },
  {
    name: 'Christian',
    age: 12,
    address: 'Foo Bar Lane',
    user_id: 1,
  },
  {
    name: 'Evan',
    age: 11,
    address: 'Banana Street',
    user_id: 1,
  },
  {
    name: 'Arthur',
    age: 11,
    address: 'Art Hair Ave',
    user_id: 1,
  },
  {
    name: 'Tanner',
    age: 11,
    address: 'Oh noo way',
    user_id: 1,
  },
  {
    name: 'Daniel',
    age: 11,
    address: 'Foo Bar Lane',
    user_id: 1,
  },
  {
    name: 'Misha',
    age: 11,
    address: 'So pitted Street',
    user_id: 1,
  },
  {
    name: 'Tyler',
    age: 11,
    address: 'Pop Pop Place',
    user_id: 1,
  }
]);

Test.create([
  {
    test_name: 'Reading Test Unit 1',
    grade: 95,
    date: '2018-09-16',
    student_id: 1,
  },
  {
    test_name: 'Spelling Unit',
    grade: 87,
    date: '2018-09-18',
    student_id: 1,
  },
  {
    test_name: 'Vocabulary Quiz',
    grade: 79,
    date: '2018-09-27',
    student_id: 1,
  },
  {
    test_name: 'ELA Test Unit 2',
    grade: 95,
    date: '2018-09-29',
    student_id: 1,
  },
  {
    test_name: 'Spelling Test 2',
    grade: 85,
    date: '2018-10-3',
    student_id: 1,
  },
  {
    test_name: 'Vocabulary Quiz Unit 2',
    grade: 79,
    date: '2018-10-8',
    student_id: 1,
  },
  {
    test_name: 'Spelling Quiz Unit 2',
    grade: 93,
    date: '2018-10-13',
    student_id: 1,
  },
  {
    test_name: 'Reading Test Unit 2',
    grade: 93,
    date: '2018-10-20',
    student_id: 1,
  },
  {
    test_name: 'Reading Test Unit 1',
    grade: 77,
    date: '2018-09-16',
    student_id: 2,
  },
  {
    test_name: 'Spelling Unit',
    grade: 85,
    date: '2018-09-18',
    student_id: 2,
  },
  {
    test_name: 'Vocabulary Quiz  ',
    grade: 75,
    date: '2018-09-27',
    student_id: 2,
  },
  {
    test_name: 'ELA Test Unit 2',
    grade: 93,
    date: '2018-09-29',
    student_id: 2,
  },
  {
    test_name: 'Spelling Test 2',
    grade: 79,
    date: '2018-10-3',
    student_id: 2,
  },
  {
    test_name: 'Vocabulary Quiz Unit 2',
    grade: 99,
    date: '2018-10-8',
    student_id: 2,
  },
  {
    test_name: 'Spelling Quiz Unit 2',
    grade: 84,
    date: '2018-10-13',
    student_id: 2,
  },
  {
    test_name: 'Reading Test Unit 2',
    grade: 98,
    date: '2018-10-20',
    student_id: 2,
  },
  {
    test_name: 'Reading Test Unit 1',
    grade: 75,
    date: '2018-09-16',
    student_id: 3,
  },
  {
    test_name: 'Spelling Unit',
    grade: 73,
    date: '2018-09-18',
    student_id: 3,
  },
  {
    test_name: 'Vocabulary Quiz',
    grade: 97,
    date: '2018-09-27',
    student_id: 3,
  },
  {
    test_name: 'ELA Test Unit 2',
    grade: 81,
    date: '2018-09-29',
    student_id: 3,
  },
  {
    test_name: 'Spelling Test 2',
    grade: 85,
    date: '2018-10-3',
    student_id: 3,
  },
  {
    test_name: 'Vocabulary Quiz Unit 2',
    grade: 73,
    date: '2018-10-8',
    student_id: 3,
  },
  {
    test_name: 'Spelling Quiz Unit 2',
    grade: 79,
    date: '2018-10-13',
    student_id: 3,
  },
  {
    test_name: 'Reading Test Unit 2',
    grade: 87,
    date: '2018-10-20',
    student_id: 3,
  },
  {
    test_name: 'Reading Test Unit 1',
    grade: 90,
    date: '2018-09-16',
    student_id: 4,
  },
  {
    test_name: 'Spelling Unit',
    grade: 95,
    date: '2018-09-18',
    student_id: 4,
  },
  {
    test_name: 'Vocabulary Quiz  ',
    grade: 87,
    date: '2018-09-27',
    student_id: 4,
  },
  {
    test_name: 'ELA Test Unit 2',
    grade: 98,
    date: '2018-09-29',
    student_id: 4,
  },
  {
    test_name: 'Spelling Test 2',
    grade: 84,
    date: '2018-10-3',
    student_id: 4,
  },
  {
    test_name: 'Vocabulary Quiz Unit 2',
    grade: 90,
    date: '2018-10-8',
    student_id: 4,
  },
  {
    test_name: 'Spelling Quiz Unit 2',
    grade: 87,
    date: '2018-10-13',
    student_id: 4,
  },
  {
    test_name: 'Reading Test Unit 2',
    grade: 94,
    date: '2018-10-20',
    student_id: 4,
  },


]);
MathTest.create([
  {
    math_test_name: 'Math Unit 1',
    grade: 87,
    date: '2018-09-16',
    student_id: 1,
  },
  {
    math_test_name: 'Math Quiz Unit 1',
    grade: 96,
    date: '2018-09-18',
    student_id: 1,
  },
  {
    math_test_name: 'Math Test Unit 2',
    grade: 76,
    date: '2018-09-27',
    student_id: 1,
  },
  {
    math_test_name: 'Division Quiz',
    grade: 82,
    date: '2018-09-29',
    student_id: 1,
  },
  {
    math_test_name: 'Word Problem Quiz',
    grade: 75,
    date: '2018-10-3',
    student_id: 1,
  },
  {
    math_test_name: 'Math Quiz Unit 2',
    grade: 87,
    date: '2018-10-8',
    student_id: 1,
  },
  {
    math_test_name: 'Multiplication Quiz',
    grade: 97,
    date: '2018-10-13',
    student_id: 1,
  },
  {
    math_test_name: 'Math Test Unit 3',
    grade: 87,
    date: '2018-10-20',
    student_id: 1,
  },
  {
    math_test_name: 'Math Unit 1',
    grade: 90,
    date: '2018-09-16',
    student_id: 2,
  },
  {
    math_test_name: 'Math Quiz Unit 1',
    grade: 83,
    date: '2018-09-18',
    student_id: 2,
  },
  {
    math_test_name: 'Math Test Unit 2  ',
    grade: 68,
    date: '2018-09-27',
    student_id: 2,
  },
  {
    math_test_name: 'Division Quiz',
    grade: 83,
    date: '2018-09-29',
    student_id: 2,
  },
  {
    math_test_name: 'Word Problem Quiz',
    grade: 94,
    date: '2018-10-3',
    student_id: 2,
  },
  {
    math_test_name: 'Math Quiz Unit 2',
    grade: 79,
    date: '2018-10-8',
    student_id: 2,
  },
  {
    math_test_name: 'Multiplication Quiz',
    grade: 98,
    date: '2018-10-13',
    student_id: 2,
  },
  {
    math_test_name: 'Math Test Unit 3',
    grade: 89,
    date: '2018-10-20',
    student_id: 2,
  },
  {
    math_test_name: 'Math Unit 1',
    grade: 84,
    date: '2018-09-16',
    student_id: 3,
  },
  {
    math_test_name: 'Math Quiz Unit 1',
    grade: 90,
    date: '2018-09-18',
    student_id: 3,
  },
  {
    math_test_name: 'Math Test Unit 2  ',
    grade: 85,
    date: '2018-09-27',
    student_id: 3,
  },
  {
    math_test_name: 'Division Quiz',
    grade: 75,
    date: '2018-09-29',
    student_id: 3,
  },
  {
    math_test_name: 'Word Problem Quiz',
    grade: 93,
    date: '2018-10-3',
    student_id: 3,
  },
  {
    math_test_name: 'Math Quiz Unit 2',
    grade: 68,
    date: '2018-10-8',
    student_id: 3,
  },
  {
    math_test_name: 'Multiplication Quiz',
    grade: 86,
    date: '2018-10-13',
    student_id: 3,
  },
  {
    math_test_name: 'Math Test Unit 3',
    grade: 80,
    date: '2018-10-20',
    student_id: 3,
  },
  {
    math_test_name: 'Math Unit 1',
    grade: 87,
    date: '2018-09-16',
    student_id: 4,
  },
  {
    math_test_name: 'Math Quiz Unit 1',
    grade: 90,
    date: '2018-09-18',
    student_id: 4,
  },
  {
    math_test_name: 'Math Test Unit 2  ',
    grade: 73,
    date: '2018-09-27',
    student_id: 4,
  },
  {
    math_test_name: 'Division Quiz',
    grade: 78,
    date: '2018-09-29',
    student_id: 4,
  },
  {
    math_test_name: 'Word Problem Quiz',
    grade: 98,
    date: '2018-10-3',
    student_id: 4,
  },
  {
    math_test_name: 'Math Quiz Unit 2',
    grade: 83,
    date: '2018-10-8',
    student_id: 4,
  },
  {
    math_test_name: 'Multiplication Quiz',
    grade: 90,
    date: '2018-10-13',
    student_id: 4,
  },
  {
    math_test_name: 'Math Test Unit 3',
    grade: 84,
    date: '2018-10-20',
    student_id: 4,
  },


]);



puts "Created #{User.count} users, #{Student.count} students, #{Test.count} Tests and #{MathTest.count} Math Tests"
