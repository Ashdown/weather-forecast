ENV['RACK_ENV'] = 'test'

require './app'
require 'capybara'
require 'capybara/rspec'

Capybara.app = Sinatra::Application

feature 'Capybara Test Application' do

  scenario "says page title" do
    visit '/'

    expect(page).to have_text('Weather Forecast')
  end

  scenario "says introduction" do
    visit '/'

    expect(page).to have_text('Display a 5 day weather forecast for the region of your choice')
  end

end
