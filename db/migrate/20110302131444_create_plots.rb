class CreatePlots < ActiveRecord::Migration
  def self.up
    create_table :plots do |t|
      t.string :number
      t.string :fullname
      t.string :location
      t.string :email

      t.timestamps
    end
  end

  def self.down
    drop_table :plots
  end
end
