class Api::V1::CommentsController < ApiController
  skip_before_action :verify_authenticity_token

  def index
    battle = Battle.find(params[:battle_id])
    comments = battle.comments
    render json: comments
  end

  def new
    battle = Battle.find(params[:battle_id])
    comment = Comment.new
  end

  def create
    battle = Battle.find(params[:battle_id])
    comment = Comment.new(:body, user_id: current_user.id, battle_id: battle)

    if user_signed_in?
      if comment.save
        render json: comment
      else
        render json: {messages: comment.errors.full_messages}
      end
    else
      render json: ['Please sign in first']
    end
  end

end
