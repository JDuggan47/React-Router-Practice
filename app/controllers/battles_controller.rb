class BattlesController < ApplicationController
  def index
    @battles = Battle.all
  end

  def new
  end
end
