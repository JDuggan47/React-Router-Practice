class AddContributorIdToBattles < ActiveRecord::Migration[5.0]
  def change
    add_column :battles, :contributor_id, :integer
  end
end
