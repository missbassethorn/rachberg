class FonesTestController < ApplicationController
  def test
    # 2 0 0 0 0
    # 1 2 0 0 0
    # 1 1 2 0 0
    # 1 1 1 2 0
    # 1 1 1 1 0
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
end
