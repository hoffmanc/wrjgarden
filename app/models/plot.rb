class Plot < ActiveRecord::Base
    LOCATIONS = ["Ratcliffe Park Neighborhood", "Outside Ratcliffe Park Area"]

    validates_inclusion_of :location, :in => LOCATIONS

    def reserved?
        return !email.blank?
    end
end
