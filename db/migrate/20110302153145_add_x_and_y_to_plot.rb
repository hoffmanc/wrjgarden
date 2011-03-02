class AddXAndYToPlot < ActiveRecord::Migration
  def self.up
    change_table :plots do |t|
        t.float :x
        t.float :y
    end
  end

  def self.down
  end
end
