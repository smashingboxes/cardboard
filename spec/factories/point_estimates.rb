FactoryBot.define do
  factory :point_estimate do
    points { [1, 2, 3, 5, 8, 13, 21].sample }
    subject { create(:story) }
  end
end
