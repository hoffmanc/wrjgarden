class Plot < ActiveRecord::Base
    belongs_to :reservation

    def reserved?
        return !reservation.blank?
    end

    def status
        return reserved? ? "reserved" : "available"
    end
end
