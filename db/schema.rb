# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20160223185854) do

  create_table "reviews", force: :cascade do |t|
    t.integer  "user_id",                  null: false
    t.integer  "trek_id",                  null: false
    t.string   "title",                    null: false
    t.text     "body",                     null: false
    t.float    "rating",     default: 1.0
    t.float    "difficulty", default: 1.0
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  add_index "reviews", ["trek_id"], name: "index_reviews_on_trek_id"
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id"

  create_table "treks", force: :cascade do |t|
    t.string   "title",                   null: false
    t.integer  "location_id", default: 0
    t.string   "location"
    t.integer  "author_id",               null: false
    t.string   "description",             null: false
    t.integer  "start_elv"
    t.integer  "peak_elv"
    t.string   "elv_measure"
    t.integer  "duration"
    t.string   "dur_measure"
    t.integer  "length"
    t.string   "len_measure"
    t.integer  "last_edited", default: 0
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  add_index "treks", ["author_id"], name: "index_treks_on_author_id"
  add_index "treks", ["location_id"], name: "index_treks_on_location_id"

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token"
  add_index "users", ["username"], name: "index_users_on_username", unique: true

end
