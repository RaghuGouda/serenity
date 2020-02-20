import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class AngularApp {
    static docs     = Target.the('document').located(by.xpath("//span[text()='Docs']"));
    static resource     = Target.the('Resources').located(by.xpath("//span[text()='Resources']"));

}
