require 'rails_helper'

RSpec.describe Story, type: :model do
  it { is_expected.to respond_to(:slug) }
  it { is_expected.to respond_to(:summary) }
  it { is_expected.to respond_to(:status) }
  it { is_expected.to respond_to(:description) }

  it { is_expected.to belong_to(:project) }
end
