import {Task} from '@serenity-js/core';
import {Click, Text} from '@serenity-js/protractor';
import { AngularApp } from './ui';

export const Document = () =>
    Task.where(`#actor confirms`,
        Click.on(AngularApp.docs),
    );

export const Resources = () =>
    Task.where(`#actor confirms`,
        Click.on(AngularApp.resource),
    );