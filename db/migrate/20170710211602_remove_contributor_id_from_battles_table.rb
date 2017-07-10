class RemoveContributorIdFromBattlesTable < ActiveRecord::Migration[5.0]
  def change
    remove_column :battles, :contributor_id
  end
end
