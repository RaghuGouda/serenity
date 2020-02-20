Feature: Super Calculator

  Scenario Outline: : testing our first application
    Given I am on Angular page with title <path>
    And I click on docs
    And I click on resources

    Examples:
      |path|
      |Angular|
