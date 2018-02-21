require 'rails_helper'

RSpec.describe Story, type: :model do
  it { is_expected.to respond_to(:name) }
  it { is_expected.to respond_to(:description) }

  it { is_expected.to belong_to(:project) }
end
