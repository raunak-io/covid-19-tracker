import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate(1500)]),
    ]),
  ],
})
export class InfoComponent implements OnInit {
  detail = [
    `Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.

Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.

The best way to prevent and slow down transmission is be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face.

The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).

At this time, there are no specific vaccines or treatments for COVID-19. However, there are many ongoing clinical trials evaluating potential treatments. WHO will continue to provide updated information as soon as clinical findings become available.`,
  ];

  green = ['fever', 'dry cough', 'tiredness'];
  yellow = [
    'aches and pains',
    'sore throat',
    'diarrhoea',
    'conjunctivitis',
    'headache',
    'loss of taste and smell',
    'a rash on skin',
    'discolouration of finger or toes',
  ];
  red = [
    'difficulty breathing or shortness of breath',
    'chest pain or pressure',
    'loss of speech or movement',
  ];
  constructor() {}

  ngOnInit(): void {}
}
