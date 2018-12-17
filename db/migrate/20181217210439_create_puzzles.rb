class CreatePuzzles < ActiveRecord::Migration[5.2]
  def change
    create_table :puzzles do |t|
      t.string :clue
      t.string :name
      t.text :solution
      t.integer :width
      t.integer :height
      t.text :colors

      t.timestamps
    end
  end
end
