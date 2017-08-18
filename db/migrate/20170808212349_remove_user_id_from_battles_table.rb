class RemoveUserIdFromBattlesTable < ActiveRecord::Migration[5.0]
  def change
    remove_column :battles, :user_id
  end
end
