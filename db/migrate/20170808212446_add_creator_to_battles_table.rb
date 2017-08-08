class AddCreatorToBattlesTable < ActiveRecord::Migration[5.0]
  def change
    add_column :battles, :creator_id, :integer, null: false
  end
end
