import { Ensure, equals } from '@serenity-js/assertions';
import { Actor, actorCalled, actorInTheSpotlight, engage, WithStage } from '@serenity-js/core';
import { Navigate } from '@serenity-js/protractor';
import { Before, Given, Then, When } from 'cucumber';
import {browser, by, element} from 'protractor';
import {
    Actors,
    Document,
    Resources,
} from '../../screenplay';

Before(() => engage(new Actors()));

Given(/I am on Angular page with title (.*)/, (actorName: string) =>
    actorCalled(actorName).attemptsTo(
        Navigate.to('/start'),
    ),
);
Given(/^I click on docs$/,   () => {
    // actorInTheSpotlight().attemptsTo(
    //     Document(),
    // ),
    return element(by.xpath("//span[text()='Docs']")).click();
});

Given(/I click on resources/,   () => {
    // actorInTheSpotlight().attemptsTo(
    //     Resources(),
    // ),
   return  element(by.xpath("//span[text()='Resources']")).click();
});
