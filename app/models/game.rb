class Game < ApplicationRecord
  belongs_to :puzzle

  def won?
    [true, false].sample
  end
end
