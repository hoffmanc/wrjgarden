class CreatePlots < ActiveRecord::Migration
  def self.up
    create_table :plots do |t|
      t.number :number

      t.timestamps
    end
  end

  def self.down
    drop_table :plots
  end
end
