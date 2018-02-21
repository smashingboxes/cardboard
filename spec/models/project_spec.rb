require 'rails_helper'

RSpec.describe Project, type: :model do
  it { is_expected.to respond_to(:name) }

  it { is_expected.to have_many(:stories) }
end
