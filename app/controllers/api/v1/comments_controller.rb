class Api::V1::CommentsController < ApiController
  skip_before_action :verify_authenticity_token

  def index
    comments = Battle.find(params[:battle_id]).comments
    render json: comments
  end

  def create

  end

end
