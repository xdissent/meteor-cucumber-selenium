

class Cucumber.World.Selenium extends Cucumber.World

  constructor: ->
    @selenium = Package.selenium.Selenium
    @driver = @selenium.driver()
    @webdriver = @selenium.webdriver
    @by = @By = @selenium.webdriver.By
    super

  home: -> @driver.get @root_url
