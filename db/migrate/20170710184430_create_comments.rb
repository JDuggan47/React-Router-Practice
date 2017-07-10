class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string 'body', null: false
      t.integer 'battle_id'

      t.belongs_to :battle
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end
