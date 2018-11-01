# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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
    age: 11,
    address: 'Foo Bar Lane',
    user_id: 1,
  }
]);

Test.create([
  {
    test_name: 'Math unit 1',
    grade: 95,
    date: '1999-12-30',
    student_id: 1,
  },
  {
    test_name: 'Spelling Test 2',
    grade: 87,
    date: '1999-12-30',
    student_id: 1,
  },
  {
    test_name: 'S.S final',
    grade: 79,
    date: '1999-12-30',
    student_id: 1,
  },
  {
    test_name: 'Math unit 1',
    grade: 88,
    date: '1999-12-30',
    student_id: 2,
  },
  {
    test_name: 'Spelling Test 2',
    grade: 93,
    date: '1999-12-30',
    student_id: 2,
  },
  {
    test_name: 'S.S final',
    grade: 75,
    date: '1999-12-30',
    student_id: 2,
  },
  {
    test_name: 'Math unit 1',
    grade: 99,
    date: '1999-12-30',
    student_id: 3,
  },
  {
    test_name: 'Spelling Test 2',
    grade: 93,
    date: '1999-12-30',
    student_id: 3,
  },
  {
    test_name: 'S.S final',
    grade: 91,
    date: '1999-12-30',
    student_id: 3,
  }
]);



puts "Created #{User.count} users, #{Student.count} students and #{Test.count} Tests"
