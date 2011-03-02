class Reservation < ActiveRecord::Base
    LOCATIONS = ["Ratcliffe Park Neighborhood", "Outside Ratcliffe Park Area"]
    has_many :plots

    validates_inclusion_of :location, :in => LOCATIONS
    validates :email, :presence => true, :email => true
end
