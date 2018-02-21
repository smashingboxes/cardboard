#  This file should contain all the record creation needed to seed the database with its default
#  values.
#  The data can then be loaded with the rails db:seed command (or created alongside the database
#  with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# epics = FactoryBot.create_list(:epic, 3)

FactoryBot.create_list(:project, 20).each do |project|
  Story.aasm.states.map(&:name).each do |status|
    FactoryBot.create_list(:story, rand(1..3), project: project, status: status)
  end
end
