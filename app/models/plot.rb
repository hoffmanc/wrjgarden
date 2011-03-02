class Plot < ActiveRecord::Base
    belongs_to :reservation

    def reserved?
        return !reservation.blank?
    end
end
