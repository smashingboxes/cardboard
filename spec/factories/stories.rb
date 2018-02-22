FactoryBot.define do
  factory :story do
    project
    slug { ('A'..'Z').to_a.sample(3).join('') }
    summary { "As a user, #{Faker::Lorem.sentence}" }
  end
end
