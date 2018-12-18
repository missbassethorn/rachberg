class GamesController < ApplicationController
  def new
    @user = current_user
    @puzzle = Puzzle.find(params[:puzzle_id])
    @start_time = Time.now

    # Andys hax
    colors = { '0': "#ffffff", '1': "#000000", '2': "#BADA55" }
    vertical_clues = [
      [{ length: 1, color: 2 }, { length: 4, color: 1 }],
      [{ length: 1, color: 2 }, { length: 3, color: 1 }],
      [{ length: 1, color: 2 }, { length: 2, color: 1 }],
      [{ length: 1, color: 2 }, { length: 1, color: 1 }],
      []
    ]
    horizontal_clues = [
      [{ length: 1, color: 2 }],
      [{ length: 1, color: 1 }, { length: 1, color: 2 }],
      [{ length: 2, color: 1 }, { length: 1, color: 2 }],
      [{ length: 3, color: 1 }, { length: 1, color: 2 }],
      [{length: 4, color: 1}]
    ]

    @game_props = {
      name: 'This is a test game!',
      width: 5,
      height: 5,
      vertical_clues: vertical_clues,
      horizontal_clues: horizontal_clues,
      colors: colors,
      debug: '2000012000112001112011110'
    }

  end

  def finish
    start_time = Time.parse(params[:start_time])
    @puzzle = Puzzle.find(params[:puzzle_id])
    @seconds = (Time.now - start_time).to_i
    @user = current_user
    @won = game_won?
  end

  def game_won?
    [true, false].sample
  end
end