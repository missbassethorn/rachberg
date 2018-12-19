class FonesTestController < ApplicationController
  def test
    # 2000012000112001112011110
    # 2 0 0 0 0
    # 1 2 0 0 0
    # 1 1 2 0 0
    # 1 1 1 2 0
    # 1 1 1 1 0

    # 3333032230321103223033330
    # 3 3 3 3 0
    # 3 2 2 3 0 
    # 3 2 1 1 0
    # 3 2 2 3 0
    # 3 3 3 3 0

    # 0011111100011111121011121112211111111221111111222111111222211111222221111122121101112222100011111100
    # 0 0 1 1 1 1 1 1 0 0
    # 0 1 1 1 1 1 1 2 1 0
    # 1 1 1 2 1 1 1 2 2 1
    # 1 1 1 1 1 1 1 2 2 1
    # 1 1 1 1 1 1 2 2 2 1
    # 1 1 1 1 1 2 2 2 2 1
    # 1 1 1 1 2 2 2 2 2 1
    # 1 1 1 1 2 2 1 2 1 1
    # 0 1 1 1 2 2 2 2 1 0
    # 0 0 1 1 1 1 1 1 0 0

    solution = '0011111100011111121011121112211111111221111111222111111222211111222221111122121101112222100011111100'
    width = 10
    height = 10
    @colors = { '0': "#BADA55", '1': "#000066", '2': "#f5ff75", '3': "#FA7A55" }

    # vertical_clues = [
    #   [{ length: 1, color: 2 }, { length: 4, color: 1 }],
    #   [{ length: 1, color: 2 }, { length: 3, color: 1 }],
    #   [{ length: 1, color: 2 }, { length: 2, color: 1 }],
    #   [{ length: 1, color: 2 }, { length: 1, color: 1 }],
    #   []
    # ]
    # horizontal_clues = [
    #   [{ length: 1, color: 2 }],
    #   [{ length: 1, color: 1 }, { length: 1, color: 2 }],
    #   [{ length: 2, color: 1 }, { length: 1, color: 2 }],
    #   [{ length: 3, color: 1 }, { length: 1, color: 2 }],
    #   [{length: 4, color: 1}]
    # ]

    do_the_clues(solution, width)

    @game_props = {
      name: 'This is a test game!',
      width: width,
      height: height,
      vertical_clues: @vertical_clues,
      horizontal_clues: @horizontal_clues,
      colors: @colors,
      debug: solution
    }

    @game_over_props = {
      name: 'This is a test game!',
      clue: 'What could this be?',
      width: width,
      height: height,
      colors: @colors,
      solution: solution
    }
  end

  def do_the_clues(solution, width)
    solutionRows = []
    solution.chars.each_slice(width) do |row|
      solutionRows << row
    end

    @horizontal_clues = generate_row_clues(solutionRows)

    @vertical_clues = generate_row_clues(solutionRows.transpose)
  end

  def generate_row_clues(rows)
    farts = rows.map do |row|
      row_clues = row.reduce([{ color: row[0], length: 0 }]) do |clues, color|
        if (clues.last[:color] == color)
          clues.last[:length] += 1
        else
          clues << { color: color, length: 1 }
        end
        
        clues
      end
      
      row_clues.reject{ |clue| clue[:color] == '0' }
    end
    

    farts.map{ |row| row.nil? ? [] : row }
  end
end
