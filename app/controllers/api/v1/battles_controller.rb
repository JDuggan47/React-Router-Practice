class Api::V1::BattlesController < ApiController
  def index
    battles = Battle.all
    render json: battles
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

  private battle_params

  def battle_params
    params.requrie(:battle).permit(
      :name,
      :year,
      :location,
      :winner
    )
  end
end
