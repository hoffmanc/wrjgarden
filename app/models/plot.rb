class Plot < ActiveRecord::Base
    LOCATIONS = ["Ratcliffe Park Neighborhood", "Outside Ratcliffe Park Area"]

    validates_inclusion_of :location, :in => LOCATIONS
    validates :email, :presence => true, :email => true

    def reserved?
        return !email.blank?
    end
end
