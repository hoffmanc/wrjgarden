class RemoveReservationInformationFromPlotsAndAddReservationMapping < ActiveRecord::Migration
  def self.up
    change_table :plots do |t|
        t.remove :fullname
        t.remove :email
        t.remove :location
        t.references :reservation
    end

  end

  def self.down
        t.string :fullname
        t.string :email
        t.string :location
        t.remove :reservation
  end
end
