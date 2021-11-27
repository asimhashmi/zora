# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ROLES = %i[student teacher]
ROLES.each do |role|
  Role.find_or_create_by(name: role)
end
a = User.create(name: 'teacher user', email: 's@t.com', is_verified: true, password: 123456 )
a.add_role :teacher
a.add_role :admin

b = User.create(name: 'teacher user 2', email: 's2@t.com', is_verified: true, password: 123456 )
b.add_role :teacher

c = User.create(name: 'teacher user3', email: 's3@t.com', is_verified: true, password: 123456 )
c.add_role :teacher

d = User.create(name: 'student user', email: 's@s.com',  is_verified: true, password: 123456 )
d.add_role :student

e = User.create(name: 'student user 2', email: 's2@s.com',  is_verified: true, password: 123456 )
e.add_role :student