# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_12_18_010220) do

  create_table "games", force: :cascade do |t|
    t.integer "seconds_played"
    t.boolean "won"
    t.integer "user_id"
    t.integer "puzzle_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["puzzle_id"], name: "index_games_on_puzzle_id"
    t.index ["user_id"], name: "index_games_on_user_id"
  end

  create_table "puzzles", force: :cascade do |t|
    t.string "clue"
    t.string "name"
    t.text "solution"
    t.integer "width"
    t.integer "height"
    t.text "colors"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
