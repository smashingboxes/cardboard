class Api::V1::ApiController < ApplicationController
  include RenderHelper
  skip_before_action :verify_authenticity_token
end
