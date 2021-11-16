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

b = User.create(name: 'student user', email: 's@s.com',  is_verified: true, password: 123456 )
b.add_role :student