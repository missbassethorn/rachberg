class FonesTestController < ApplicationController
  def test
    @game_props = {
      name: 'This is a test game!'
    }
  end
end
