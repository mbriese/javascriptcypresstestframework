Feature: End to end Ecommerce validation
  application Regression

  @Regression
  Scenario: Ecommerce products delivery
    Given I open Ecommerce page
    When I add items to the cart
    And validate the total price
    Then select the country and verify thank you message

  Scenario: Filling out the forms before I shop
    Given I open Ecommerce page
    When I fill out the form details
    Then validate the form behaviour
    And select the shop page
