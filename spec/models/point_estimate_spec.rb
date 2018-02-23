require 'rails_helper'

RSpec.describe PointEstimate, type: :model do
  it { is_expected.to respond_to(:points) }

  it { is_expected.to belong_to(:subject) }
end
