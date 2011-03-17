class MakePlotNumberNumber < ActiveRecord::Migration
  def self.up
    change_column :plots, :number, :int
  end

  def self.down
    change_column :plots, :number, :string
  end
end
