class Api::V1::CommentsController < ApiController
  skip_before_action :verify_authenticity_token

  def index
    battle = Battle.find(params[:battle_id])
    comments = battle.comments
    render json: comments
  end

  def create
    body = request.body.read
    parsed = JSON.parse(body)

    comment = parsed['comment']
    user_id = parsed['user_id']
    battle_id = parsed['battle_id']

    new_comment = Comment.new(body: comment, user_id: user_id, battle_id: battle_id )
    comment.user = current_user
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

  private

  def comment_params
    params.require(:comment).permit(
      :body,
    )
  end


end
