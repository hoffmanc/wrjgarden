class ReservationsController < ApplicationController
  # GET /reservations/new
  # GET /reservations/new.xml
  def new
    @reservation = Reservation.new
    @plots = Plot.all

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @reservation }
    end
  end

  # POST /reservations
  # POST /reservations.xml
  def create
    @reservation = Reservation.new(params[:reservation])

    respond_to do |format|
      if @reservation.save
        format.html { redirect_to(@reservation, :notice => 'Plot was successfully reserved.') }
        format.xml  { render :xml => @reservation, :status => :created, :location => @reservation }
      else
        @plots = Plot.order('plots.number')
        format.html { render :action => "new" }
        format.xml  { render :xml => @reservation.errors, :status => :unprocessable_entity }
      end
    end
  end

  def show
    @reservation = Reservation.find(params[:id])
    @plots = Plot.all
    respond_to do |format|
        format.html
        format.xml  { render :xml => @reservation }
    end
  end

end
