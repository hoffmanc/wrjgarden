class PlotsController < ApplicationController
  # GET /plots/new
  # GET /plots/new.xml
  def new
    @plot = Plot.new
    @plots = Plot.all

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @plot }
    end
  end

  # POST /plots
  # POST /plots.xml
  def create
    plot_numbers = Plot.update_many(params[:plot])

    respond_to do |format|
      if @plots.save
        format.html { redirect_to(@plot, :notice => 'Plot was successfully reserved.') }
        format.xml  { render :xml => @plot, :status => :created, :location => @plot }
      else
        @plots = Plot.all
        format.html { render :action => "new" }
        format.xml  { render :xml => @plot.errors, :status => :unprocessable_entity }
      end
    end
  end
end
