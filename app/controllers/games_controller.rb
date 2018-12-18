class GamesController < ApplicationController
  def new
    @user = current_user
    @puzzle = Puzzle.find(params[:puzzle_id])
    @start_time = Time.now
  end

  def finish
    start_time = Time.parse(params[:start_time])
    @seconds = (Time.now - start_time).to_i
    @user = current_user
    @won = game_won?
  end

  def game_won?
    [true, false].sample
  end
end