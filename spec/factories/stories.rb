FactoryBot.define do
  factory :story do
    project
    slug { ('A'..'Z').to_a.sample(3).join('') }
    summary { "As a user, #{Faker::Lorem.sentence}" }

    trait :with_estimates do
      after(:create) do |story|
        create_list(:point_estimate, 3, subject: story)
      end
    end
  end
end
