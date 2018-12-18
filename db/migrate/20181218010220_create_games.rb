class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.integer :seconds_played
      t.boolean :won
      t.references :user, foreign_key: true
      t.references :puzzle, foreign_key: true

      t.timestamps
    end
  end
end
