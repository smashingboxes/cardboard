FactoryBot.define do
  factory :story do
    project
    name { Faker::App.name }
    description { Faker::Lorem.paragraph }
  end
end
