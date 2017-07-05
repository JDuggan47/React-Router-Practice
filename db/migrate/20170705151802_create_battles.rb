class CreateBattles < ActiveRecord::Migration[5.0]
  def change
    create_table :battles do |t|
      t.string :name, null: false
      t.string :year, null: false
      t.string :location, null: false
      t.string :winner, null: false
    end
  end
end
