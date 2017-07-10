class Api::V1::BattlesController < ApiController
  skip_before_action :verify_authenticity_token

  def index
    @battles = Battle.all
    render json: @battles
  end

  def show
    battle = Battle.find(params[:id])
  end

  def create
    battle = Battle.new(battle_params)
    if battle.save
      render json: battle
    else
      render json: {messages: battle.errors.full_messages}
    end
  end

  private 

  def battle_params
    params.require(:battle).permit(
      :name,
      :year,
      :location,
      :winner
    )
  end

end
