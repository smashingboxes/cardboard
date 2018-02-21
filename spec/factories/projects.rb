FactoryBot.define do
  factory :project do
    name { Faker::App.unique.name }
  end
end
