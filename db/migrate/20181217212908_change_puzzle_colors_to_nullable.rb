class ChangePuzzleColorsToNullable < ActiveRecord::Migration[5.2]
  def change
  	change_column_null :puzzles, :colors, true
  end
end
