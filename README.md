cucumber-selenium
=================

Selenium WebDriver support for
[CucumberJS](https://github.com/xdissent/meteor-cucumber)


Usage
-----

Add to your Meteor app via [Meteorite](http://oortcloud.github.io/meteorite/):

```console
$ mrt add cucumber-selenium
```

Set the [world](https://github.com/cucumber/cucumber-js#world) constructor to 
`Cucumber.World.Selenium` in a support helper:

```coffee
# app/tests/features/support/world.coffee

module.exports = ->

  @World = Cucumber.World.Selenium
```

Use the
[Selenium WebDriverJS API](https://code.google.com/p/selenium/wiki/WebDriverJs)
from within your
[step definitions](https://github.com/cucumber/cucumber-js#step-definitions):

```coffee
# app/tests/features/step_definitions/seleniumStepDefinitions.coffee

module.exports = ->

  @Given /^I am a website visitor using selenium$/, (callback) ->
    return callback new Error 'Selenium not available' unless @selenium?
    callback()

  @When /^I go to the home page with selenium$/, (callback) ->
    # @selenium.home() is a helper to navigate to the app's root url
    @selenium.home().then callback, callback

  @Then 'I should see "$text" using selenium', (text, callback) ->
    # @selenium.driver is an instance of a WebDriverJS driver
    @selenium.driver.getPageSource().then (source) ->
      return callback() unless -1 is source.indexOf text 
      callback new Error "Expected to find #{text} on page"
    , callback
```
