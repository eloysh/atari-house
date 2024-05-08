import React, { useState, useEffect } from 'react';
import './homepagecatalog.css';
import Config from './config.js';

const Homepagecatalog = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('characteristics'); // Default active tab
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: ''
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  useEffect(() => {
    console.log('CMS URL:', Config.CMS_URL);
    console.log('Admin email:', Config.ADMIN_EMAIL);
    console.log('Admin password:', Config.ADMIN_PASSWORD);
    console.log('Admin login:', Config.ADMIN_LOGIN);
  }, []);
  const handlePrevImage = () => {
    if (selectedProperty) {
      setImageIndex((prevIndex) => (
        prevIndex === 0
          ? selectedProperty.images.length - 1
          : prevIndex - 1
      ));
    }
  };

  const handleNextImage = () => {
    if (selectedProperty) {
      setImageIndex((prevIndex) => (
        (prevIndex + 1) % selectedProperty.images.length
      ));
    }
  };

  const properties = [
    {
      id: 1,
      title: 'Проект "МАГНАТ"',
      description: 'Блочный дом',
      hasHitImage: true,
      price: ' 3 938 058 млн руб',
      location: 'Приморский край',
      squaremeter: '69 кв.м',
      images: ['./photo/House-1.png', './photo/House-1_1.png', './photo/House-1_2.png', './photo/House-1_3.png'],
      characteristics: 'Характеристики: Коробка дома 10Х7,1, монолитная плита, стены-газаблок 300 мм, внутрение стены 100мм, перекрытие монолитное, лестница, монолитная, кровельный материал(гибкая черепица "SHINGALS") ',
      projectComposition: 'Жилая площадь: 58 кв.м, Общая площадь: 69 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: Коробка дома - 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '5 659 358 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь -337 900 руб,Гипсовая штукатурка стен - 321 400 руб,Распределительный щит с внутренней электропроводкой 230 200 руб, Биологическая станция - 350 000 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 480 000 руб.'
    },

    {
      id: 2,
      title: 'Проект "ТЕХАС"',
      hasHitImage: true,
      description: 'Блочный дом',
      price: ' 3 859 034 млн руб',
      location: 'Приморский край',
      squaremeter: '72 кв.м',
      images: ['./photo/House_2.png', './photo/House_2_2.png', './photo/House_2_3.png', './photo/House_2_4.png'],
      characteristics: 'Характеристики:Коробка дома 10Х7,1 + терраса, монолитная плита, стены-газаблок 300 мм, внутрение стены 100мм, перекрытие монолитное, лестница, монолитная, кровельный материал(гибкая черепица "SHINGALS") ',
      projectComposition: 'Жилая площадь: 63 кв.м, Общая площадь: 72 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: Коробка дома - 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '5 755 824 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь -414 950 руб,Гипсовая штукатурка стен - 319 840 руб,Распределительный щит с внутренней электропроводкой 232 000 руб, Биологическая станция - 350 000 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 480 000 руб.'
    },
    {
      id: 3,
      title: 'Проект "ВЕГАС"',
      hasHitImage: true,
      description: 'Блочный дом',
      price: ' 4 487 176 млн руб',
      location: 'Приморский край',
      squaremeter: '79 кв.м',
      images: ['./photo/House-3.png', './photo/House-3_1.png', './photo/House-3_2.png', './photo/House-3_3.png'],
      characteristics: 'Характеристики:Коробка дома 11Х7, монолитная плита, стены-газаблок 300 мм, внутрение стены 100мм, перекрытие монолитное, лестница, монолитная, кровельный материал(гибкая черепица "SHINGALS") ',
      projectComposition: 'Жилая площадь: 73 кв.м, Общая площадь: 79 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '6 568 846 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь -340 120 руб,Гипсовая штукатурка стен - 447 050 руб,Распределительный щит с внутренней электропроводкой 292 000 руб, Биологическая станция - 350 000 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 652 500 руб.'
    },
    {
      id: 4,
      title: 'Проект "ЛАЗУРНЫЙ"',
      hasHitImage: true,
      description: 'Блочный дом',
      price: ' 3 798 057 млн руб',
      location: 'Приморский край',
      squaremeter: '74 кв.м',
      images: ['./photo/House-4.png', './photo/House-4_1.png', './photo/House-4_2.png', './photo/House-4_3.png'],
      characteristics: 'Характеристики: Коробка дома 6Х6, монолитная плита, стены-газаблок 300 мм, внутрение стены 100мм, перекрытие-монолитное, лестница-монолитная, кровельный материал-металлочерепица ',
      projectComposition: 'Жилая площадь: 74 кв.м, Общая площадь: 74 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '5 747 957 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь -340 000 руб,Гипсовая штукатурка стен - 420 700 руб,Распределительный щит с внутренней электропроводкой 325 600 руб, Биологическая станция - 350 000 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 504 600 руб.'
    },
    {
      id: 5,
      title: 'Проект "ГАВАНЬ"',
      hasHitImage: true,
      description: 'Блочный дом',
      price: ' 3 975 833 млн руб',
      location: 'Приморский край',
      squaremeter: '79 кв.м',
      images: ['./photo/House-5.png', './photo/House-5_1.png', './photo/House-5_2.png', './photo/House-5_3.png'],
      characteristics: 'Характеристики:Коробка дома 7Х7, монолитная плита, стены-газаблок 300 мм, внутрение стены 100/200 мм, перекрытие монолитное, лестница, монолитная, кровельный материал(гибкая черепица "SHINGALS") ',
      projectComposition: 'Жилая площадь: 79 кв.м, Общая площадь: 79 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '5 845 153 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь - 342 820 руб,Гипсовая штукатурка стен - 374 500 руб,Распределительный щит с внутренней электропроводкой 331 800 руб, Биологическая станция - 350 000 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 470 200 руб.'
    },
    {
      id: 6,
      title: 'Проект "МЕРКУРИЙ"',
      hasHitImage: true,
      description: 'Блочный дом',
      price: ' 3 975 833 млн руб',
      location: 'Приморский край',
      squaremeter: '87 кв.м',
      images: ['./photo/House-6.png', './photo/House-6_1.png', './photo/House-6_2.png', './photo/House-6_3.png'],
      characteristics: 'Характеристики:Коробка дома 7Х7, монолитная плита, стены-газаблок 300 мм, внутрение стены 100/200 мм, перекрытие монолитное, лестница, монолитная, кровельный материал(гибкая черепица "SHINGALS") ',
      projectComposition: 'Жилая площадь: 87 кв.м; Общая площадь: 87 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '5 845 153 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь - 342 820 руб,Гипсовая штукатурка стен - 374 500 руб,Распределительный щит с внутренней электропроводкой 331 800 руб, Биологическая станция - 350 000 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 470 200 руб.'
    },
    {
      id: 7,
      title: 'Проект "БРИЗ"',
      description: 'Блочный дом',
      price: ' 4 523 515 млн руб',
      location: 'Приморский край',
      squaremeter: '91 кв.м',
      images: ['./photo/House-7.png', './photo/House-7_1.png', './photo/House-7_2.png', './photo/House-7_3.png'],
      characteristics: 'Характеристики:Коробка дома 7Х8, монолитная плита, стены-газаблок 300 мм, внутрение стены 100/200 мм, перекрытие монолитное, лестница, монолитная, кровеля с утеплением 200мм (металлочерепица)',
      projectComposition: 'Жилая площадь: 91 кв.м; Общая площадь: 91 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '6 619 775 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь - 403 000 руб,Гипсовая штукатурка стен - 457 300 руб,Распределительный щит с внутренней электропроводкой 383 460 руб, Биологическая станция - 350 000 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 502 500 руб.'
    },
    {
      id: 8,
      title: 'Проект "САКУРА"',
      description: 'Блочный дом',
      price: ' 5 137 178 млн руб',
      location: 'Приморский край',
      squaremeter: '120 кв.м',
      images: ['./photo/House-8.png', './photo/House-8_1.png', './photo/House-8_2.png', './photo/House-8_3.png'],
      characteristics: 'Характеристики:Коробка дома 8,5Х9,6, монолитная плита, стены-газаблок 300 мм, внутрение стены 100/200 мм, перекрытие сборное из доски с утеплением 200мм/монолитное, лестница, монолитная, кровельный материал(гибкая черепица "SHINGALS") ',
      projectComposition: 'Жилая площадь: 93 кв.м; Общая площадь: 120 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '7 259 663 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь - 398 025 руб,Гипсовая штукатурка стен - 457 300 руб,Распределительный щит с внутренней электропроводкой 391 860 руб, Биологическая станция - 350 000 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 525 300 руб.'
    },
    {
      id: 9,
      title: 'Проект "РИВЬЕРА"',
      description: 'Блочный дом',
      price: ' 5 272 305 млн руб',
      location: 'Приморский край',
      squaremeter: '98 кв.м',
      images: ['./photo/House-9.png', './photo/House-9_1.png', './photo/House-9_2.png', './photo/House-9_3.png'],
      characteristics: 'Характеристики:Коробка дома 7,5Х8, монолитная плита, стены-газаблок 300 мм, внутрение стены 100/200 мм, перекрытие монолитное, лестница, монолитная, кровельный материал(гибкая черепица "SHINGALS") ',
      projectComposition: 'Жилая площадь: 94 кв.м; Общая площадь: 98 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '7 596 625 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь - 497 000 руб,Гипсовая штукатурка стен - 590 520 руб,Распределительный щит с внутренней электропроводкой 394 800 руб, Биологическая станция - 350 000 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 492 000 руб.'
    },
    {
      id: 10,
      title: 'Проект "ЧАРЛИ 1"',
      description: 'Блочный дом',
      price: ' 5 083 018 млн руб',
      location: 'Приморский край',
      squaremeter: '143 кв.м',
      images: ['./photo/House-10.png', './photo/House-10_1.png', './photo/House-10_2.png', './photo/House-10_3.png'],
      characteristics: 'Характеристики:Коробка дома 8Х8,5, монолитная плита, стены-газаблок 300 мм, внутрение стены 100/200 мм, перекрытие деревянное с утеплением 200мм, лестница, монолитная, кровельный материал(гибкая черепица "SHINGALS") ',
      projectComposition: 'Жилая площадь: 94 кв.м; Общая площадь: 143 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '7 237 843 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь - 378 025 руб,Гипсовая штукатурка стен - 527 000 руб,Распределительный щит с внутренней электропроводкой 394 800 руб, Биологическая станция - 350 000 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 505 000 руб.'
    },
    {
      id: 11,
      title: 'Проект "АМПИР"',
      description: 'Блочный дом',
      price: ' 6 359 963 млн руб',
      location: 'Приморский край',
      squaremeter: '141 кв.м',
      images: ['./photo/House-11.png', './photo/House-11_1.png', './photo/House-11_2.png', './photo/House-11_3.png'],
      characteristics: 'Характеристики:Коробка дома 11,Х8, монолитная плита, стены-газаблок 300 мм, внутрение стены 100/200 мм, перекрытие монолитное, лестница, монолитная, кровельный материал(гибкая черепица "SHINGALS", с утеплением 200 мм,) ',
      projectComposition: 'Жилая площадь: 96 кв.м; Общая площадь: 141 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '9 199 613 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь - 539 500 руб,Гипсовая штукатурка стен - 684 9500 руб,Распределительный щит с внутренней электропроводкой 592 200 руб, Биологическая станция - 350 000 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 673 000 руб.'
    },
    {
      id: 12,
      title: 'Проект "АТРИУМ"',
      description: 'Блочный дом',
      price: ' 5 416 309 млн руб',
      location: 'Приморский край',
      squaremeter: '111 кв.м',
      images: ['./photo/House-12.png', './photo/House-12_1.png', './photo/House-12_2.png', './photo/House-12_3.png'],
      characteristics: 'Характеристики:Коробка дома 7,5Х9, монолитная плита, стены-газаблок 300 мм, внутрение стены 100/200 мм, перекрытие монолитное, лестница, монолитная, кровельный материал(гибкая черепица "SHINGALS") ',
      projectComposition: 'Жилая площадь: 111 кв.м; Общая площадь: 111 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '7 855 559 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь - 520 000 руб,Гипсовая штукатурка стен - 574 450 руб,Распределительный щит с внутренней электропроводкой 466 200 руб, Биологическая станция - 350 000 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 528 600 руб.'
    },
    {
      id: 13,
      title: 'Проект "МАРС"',
      description: 'Блочный дом',
      price: ' 5 594 929 млн руб',
      location: 'Приморский край',
      squaremeter: '119 кв.м',
      images: ['./photo/House-13.png', './photo/House-13_1.png', './photo/House-13_2.png', './photo/House-13_3.png'],
      characteristics: 'Характеристики:Коробка дома 13,8Х11,3, монолитная плита, стены-газаблок 300 мм, внутрение стены 100/200 мм, перекрытие деревянное с утеплением 200 мм, лестница, монолитная, кровельный материал(гибкая черепица "SHINGALS") ',
      projectComposition: 'Жилая площадь: 112 кв.м; Общая площадь: 119 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '8 545 529 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь - 580 250 руб,Гипсовая штукатурка стен - 568 450 руб,Распределительный щит с внутренней электропроводкой 451 400 руб, Биологическая станция - 350 000 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 1 000 500 руб.'
    },
    {
      id: 14,
      title: 'Проект "АВРОРА"',
      description: 'Блочный дом',
      price: ' 3 975 833 млн руб',
      location: 'Приморский край',
      squaremeter: '117 кв.м',
      images: ['./photo/House-14.png', './photo/House-14_1.png', './photo/House-14_2.png', './photo/House-14_3.png'],
      characteristics: 'Характеристики:Коробка дома 6Х8, монолитная плита, стены-газаблок 300 мм, внутрение стены 100/200 мм, перекрытие монолитное, лестница, монолитная, кровельный материал(гибкая черепица "SHINGALS") ',
      projectComposition: 'Жилая площадь: 113 кв.м; Общая площадь: 117 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '7 773 861 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь - 461 500 руб,Гипсовая штукатурка стен - 342 900 руб,Распределительный щит с внутренней электропроводкой 452 000 руб, Биологическая станция - 350 000 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 631 400 руб.'
    },
    {
      id: 15,
      title: 'Проект "АТЛАНТИС"',
      description: 'Блочный дом',
      price: ' 5 589 796 млн руб',
      location: 'Приморский край',
      squaremeter: '123 кв.м',
      images: ['./photo/House-15.png', './photo/House-15_1.png', './photo/House-15_2.png', './photo/House-15_3.png'],
      characteristics: 'Характеристики:Коробка дома 8,2Х8,2, монолитная плита, стены-газаблок 300 мм, внутрение стены 100/200 мм, перекрытие монолитное, лестница, монолитная, кровельный материал(гибкая черепица "SHINGALS") ',
      projectComposition: 'Жилая площадь: 113 кв.м; Общая площадь: 123 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '8 169 046 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь - 637 00 руб,Гипсовая штукатурка стен - 574 450 руб,Распределительный щит с внутренней электропроводкой 476 700 руб, Биологическая станция - 350 000 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 541 100 руб.'
    },
    {
      id: 16,
      title: 'Проект "МАЯК"',
      description: 'Блочный дом',
      price: ' 5 778 063 млн руб',
      location: 'Приморский край',
      squaremeter: '133 кв.м',
      images: ['./photo/House-16.png', './photo/House-16_1.png', './photo/House-16_2.png', './photo/House-16_3.png'],
      characteristics: 'Характеристики:Коробка дома 8,Х8,2 + тамбур 2Х5,6, монолитная плита, стены-газаблок 300 мм, внутрение стены 100/200 мм, перекрытие монолитное, лестница, монолитная, кровельный материал(гибкая черепица "SHINGALS") ',
      projectComposition: 'Жилая площадь: 118 кв.м; Общая площадь: 133 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '8 422 244 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь - 697 645 руб,Гипсовая штукатурка стен - 537 800 руб,Распределительный щит с внутренней электропроводкой 497 196 руб, Биологическая станция - 350 000 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 551 000 руб.'
    },
    {
      id: 17,
      title: 'Проект "ГРАНД"',
      description: 'Блочный дом',
      price: ' 5 325 837 млн руб',
      location: 'Приморский край',
      squaremeter: '119 кв.м',
      images: ['./photo/House-17.png', './photo/House-17_1.png', './photo/House-17_2.png', './photo/House-17_3.png'],
      characteristics: 'Характеристики:Коробка дома 8,1Х9,1, монолитная плита, стены-газаблок 300 мм, внутрение стены 100/200 мм, перекрытие монолитное, лестница, монолитная, кровельный материал(гибкая черепица "SHINGALS") ',
      projectComposition: 'Жилая площадь: 119 кв.м; Общая площадь: 119 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '7 914 487 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь - 534 000 руб,Гипсовая штукатурка стен - 663 250 руб,Распределительный щит с внутренней электропроводкой 476 000 руб, Биологическая станция - 350 000 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 565 400 руб.'
    },
    {
      id: 18,
      title: 'Проект "ЧАРЛИ 2"',
      description: 'Блочный дом',
      price: ' 5 784 714 млн руб',
      location: 'Приморский край',
      squaremeter: '178 кв.м',
      images: ['./photo/House-18.png', './photo/House-18_1.png', './photo/House-18_2.png', './photo/House-18_3.png'],
      characteristics: 'Характеристики:Коробка дома 9Х9,5 + терраса, монолитная плита, стены-газаблок 300 мм, внутрение стены 100/200 мм, перекрытие деревянное с утеплением 200 мм, лестница, монолитная, кровельный материал(гибкая черепица "SHINGALS") ',
      projectComposition: 'Жилая площадь: 123 кв.м; Общая площадь: 178 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '8 275 189 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь - 415 675 руб,Гипсовая штукатурка стен - 631 600 руб,Распределительный щит с внутренней электропроводкой 516 600 руб, Биологическая станция - 350 000 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 576 600 руб.'
    },
    {
      id: 19,
      title: 'Проект "ОЛИМП 1"',
      description: 'Блочный дом',
      price: ' 6 445 969 млн руб',
      location: 'Приморский край',
      squaremeter: '134 кв.м',
      images: ['./photo/House-19.png', './photo/House-19_1.png', './photo/House-19_2.png', './photo/House-19_3.png'],
      characteristics: 'Характеристики:Коробка дома 10,3Х7,8, монолитная плита, стены-газаблок 300 мм, внутрение стены 100/200 мм, чердачное перекрытие деревянное с утеплением 200 мм, лестница, монолитная, кровельный материал металлочерепица - МОНТЕРЕЙ) ',
      projectComposition: 'Жилая площадь: 128 кв.м; Общая площадь: 134 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '9 969 499 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь - 1 417 000 руб,Гипсовая штукатурка стен - 587 450 руб,Распределительный щит с внутренней электропроводкой 537 180 руб, Биологическая станция - 350 000 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 631 900 руб.'
    },
    {
      id: 20,
      title: 'Проект "ОЛИМП 2"',
      description: 'Блочный дом',
      price: ' 5 861 702 млн руб',
      location: 'Приморский край',
      squaremeter: '135 кв.м',
      images: ['./photo/House-20.png', './photo/House-20_1.png', './photo/House-20_2.png', './photo/House-20_3.png'],
      characteristics: 'Характеристики:Коробка дома 10,3Х7,8, монолитная плита, стены-газаблок 300 мм, внутрение стены 100/200 мм, перекрытие монолитное, лестница, монолитная, кровельный материал металлочерепица - МОНТЕРЕЙ) ',
      projectComposition: 'Жилая площадь: 129 кв.м; Общая площадь: 135 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '9 158 762 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь - 1 205 230 руб,Гипсовая штукатурка стен - 572 750 руб,Распределительный щит с внутренней электропроводкой 537 180 руб, Биологическая станция - 350 000 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 631 900 руб.'
    },
    {
      id: 21,
      title: 'Проект "АРКАДА"',
      description: 'Блочный дом',
      price: ' 5 784 087 млн руб',
      location: 'Приморский край',
      squaremeter: '137 кв.м',
      images: ['./photo/House-21.png', './photo/House-21_1.png', './photo/House-21_2.png', './photo/House-2_3.png'],
      characteristics: 'Характеристики:Коробка дома 8,7Х9,7, монолитная плита, стены-газаблок 300 мм, внутрение стены 100/200 мм, многоэтажное перекрытие - монолитное, лестница, монолитная, кровельный материал(гибкая черепица "SHINGALS") ',
      projectComposition: 'Жилая площадь: 137 кв.м; Общая площадь: 137 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '8 876 237 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь - 890 500 руб,Гипсовая штукатурка стен - 631 650 руб,Распределительный щит с внутренней электропроводкой 575 400 руб, Биологическая станция - 350 000 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 644 600 руб.'
    },
    {
      id: 23,
      title: 'Проект "Полермо"',
      description: 'Блочный дом',
      price: ' 6 798 000 млн руб',
      location: 'Приморский край',
      squaremeter: '148 кв.м',
      images: ['./photo/House-23.png', './photo/House-23_1.png', './photo/House-23_2.png', './photo/House-23_3.png'],
      characteristics: 'Характеристики:Коробка дома 12,1Х8, монолитная плита, стены-газаблок 300 мм, внутрение стены 100/200 мм, перекрытие деревянное с утеплением 200 мм, лестница, монолитная, кровельный материал(гибкая черепица "SHINGALS") ',
      projectComposition: 'Жилая площадь: 137 кв.м; Общая площадь: 148 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '10 159 076 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь - 1 152 976 руб,Гипсовая штукатурка стен - 579 500 руб,Распределительный щит с внутренней электропроводкой 579 600 руб, Биологическая станция - 350 000 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 699 000 руб.'
    },
    {
      id: 24,
      title: 'Проект "ИНДИГО"',
      hasHitImage: false,
      description: 'Блочный дом',
      price: ' 6 555 568 млн руб',
      location: 'Приморский край',
      squaremeter: '162 кв.м',
      images: ['./photo/House-24.png', './photo/House-24_1.png', './photo/House-24_2.png', './photo/House-24_3.png'],
      characteristics: 'Характеристики:Коробка дома 9,4Х10, монолитная плита, стены-газаблок 300 мм, внутрение стены 100/200 мм, перекрытие деревянное с утеплением 200 мм, лестница, монолитная, кровельный материал(гибкая черепица "SHINGALS") ',
      projectComposition: 'Жилая площадь: 144 кв.м; Общая площадь: 162 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '10 608 591 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь - 923 500 руб,Гипсовая штукатурка стен - 751 150 руб,Распределительный щит с внутренней электропроводкой 604 800 руб, Биологическая станция - 350 000 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 648 000 руб.'
    },
    {
      id: 25,
      title: 'Проект "АМУР"',
      hasHitImage: false,
      description: 'Блочный дом',
      price: ' 6 967 621 млн руб',
      location: 'Приморский край',
      squaremeter: '150 кв.м',
      images: ['./photo/House-25.png', './photo/House-25_1.png', './photo/House-25_2.png', './photo/House-25_3.png'],
      characteristics: 'Характеристики:Коробка дома 8,7Х8,7, монолитная плита, стены-газаблок 300 мм, внутрение стены 100/200 мм, перекрытие деревянное с утеплением 200 мм, лестница, монолитная, кровельный материал(гибкая черепица "SHINGALS") ',
      projectComposition: 'Жилая площадь: 150 кв.м; Общая площадь: 150 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '10 839 821 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь - 1 215 500 руб,Гипсовая штукатурка стен - 878 700 руб,Распределительный щит с внутренней электропроводкой 630 000 руб, Биологическая станция - 350 000 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 798 000 руб.'
    },
    {
      id: 26,
      title: 'Проект "ЛЮКС"',
      hasHitImage: false,
      description: 'Блочный дом',
      price: ' 10 620 039 млн руб',
      location: 'Приморский край',
      squaremeter: '230 кв.м',
      images: ['./photo/House-26.png', './photo/House-26_1.png', './photo/House-26_2.png', './photo/House-26_3.png'],
      characteristics: 'Характеристики:Коробка дома 9,8Х14,8, монолитная плита, стены-газаблок 300 мм, внутрение стены 100/200 мм, перекрытие деревянное с утеплением 200 мм, лестница, монолитная, кровельный материал(гибкая черепица "SHINGALS") ',
      projectComposition: 'Жилая площадь: 226 кв.м; Общая площадь: 230 кв.м.',
      payment: 'Оплата: Наличные средства, ипотека, можно маткапитал, застройщик акредитованный',
      terms: 'Сроки: 3 месяца, White box - 6 месяцев',
      whiteBoxPrice: '14 417 939 млн руб',
      option: 'Окна 58 профиль, тройной стеклопакет , дверь - 960 000 руб,Гипсовая штукатурка стен - 1 084 600 руб,Распределительный щит с внутренней электропроводкой 951 300 руб, Биологическая станция - 350 000 руб, Устройство теплого пола с электрокотлом, разводка воды , канализации , стяжка пола - 1 010 000 руб.'
    },

  ];

  
  const handleTitleClick = (property) => {
    setSelectedProperty(property);
    setIsOpen(true);
  };

  const handleCloseForm = () => {
    setIsOpen(false);
    setSelectedProperty(null);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ваша логика отправки данных формы
    console.log('Form submitted:', formData);
    // Очистка данных формы после отправки
    setFormData({ name: '', phoneNumber: '' });
    setIsFormOpen(false); // Закрытие формы после отправки

    // Вызов функции handleSendWhatsApp для отправки сообщения в WhatsApp
    handleSendWhatsApp();
  };

  const handleBuyProject = () => {
    setIsFormOpen(true); // Открытие формы при нажатии кнопки "Купить проект"
  };

  const handleSendWhatsApp = () => {
    const message = `Заявка:
    Имя: ${formData.name}
    Номер телефона: ${formData.phoneNumber}
    Информация о свойстве:
    Название: ${selectedProperty.title}
    Описание: ${selectedProperty.description}
    Цена: ${selectedProperty.price}
    Squaremeter: ${selectedProperty.squaremeter}
    ${selectedProperty[activeTab]}`;

    const recipientPhoneNumber = '79841925069'; // Номер WhatsApp, на который будет отправлено сообщение
    const whatsappLink = `https://api.whatsapp.com/send?phone=${recipientPhoneNumber}&text=${encodeURIComponent(message)}`;

    window.location.href = whatsappLink;
  };

  // Сохранение данных формы в Local Storage при изменении
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

 
    return (
      <div className="homepage-container">
      <h1 className="homepage-heading">Каталог домов</h1>
      <div className="property-list">
        <div className="property-cards">
          {properties.map(property => (
            <div key={property.id} className="property-card">
              {/* Показываем изображение "hit", если свойство hasHitImage установлено в true */}
              {property.hasHitImage && (
                <div className="prod-item__mark prod-item__mark--hit">
                  <img src="./images/1plakat.png" alt="Hit" />
                </div>
              )}
              <h3 onClick={() => handleTitleClick(property)}>{property.title}</h3>
              <p>{property.description}</p>
              <p>Цена: {property.price}</p>
              <p>{property.squaremeter}</p>
              <img src={property.images[0]} alt="Property" onClick={() => handleTitleClick(property)} />
              {/* Добавляем стиль к скрытому тексту */}
              <div className="prod-item__hidden-text">
                <p>{property.characteristics}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Модальное окно */}
      {selectedProperty && isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseForm}>&times;</span>
            <div className="gallery">
              <div className="property-info">
                <h3>{selectedProperty.title}</h3>
                <div className="tabs">
                  {selectedProperty.images && selectedProperty.images[imageIndex] && (
                    <img src={selectedProperty.images[imageIndex]} alt="Property" />
                  )}
                  <button className="prev-btn" onClick={handlePrevImage}>{'<'}</button>
                  <button className="next-btn" onClick={handleNextImage}>{'>'}</button>
                </div>
                <div className="form-container">
                  {isFormOpen ? (
                    <form onSubmit={handleSubmit}>
                      <input type="text" name="name" placeholder="Имя" value={formData.name} onChange={handleInputChange} required />
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Номер телефона"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                        pattern="(\+7|8)9\d{9}"
                      />
                      <button type="submit" className="submit-btn">Отправить</button>
                    </form>
                  ) : (
                    <button className="buy-btn" onClick={handleBuyProject}>Подробнее</button>
                  )}
                </div>
                <button className={activeTab === 'characteristics' ? 'active' : ''} onClick={() => handleTabClick('characteristics')}>Характеристики</button>
                <button className={activeTab === 'projectComposition' ? 'active' : ''} onClick={() => handleTabClick('projectComposition')}>Площадь дома</button>
                <button className={activeTab === 'payment' ? 'active' : ''} onClick={() => handleTabClick('payment')}>Как купить?</button>
                <button className={activeTab === 'terms' ? 'active' : ''} onClick={() => handleTabClick('terms')}>Сроки строительства</button>
                <button className={activeTab === 'whiteBoxPrice' ? 'active' : ''} onClick={() => handleTabClick('whiteBoxPrice')}>White box цена</button>
                <button className={activeTab === 'option' ? 'active' : ''} onClick={() => handleTabClick('option')}>Что входит в White box</button>
              </div>
              <p>{selectedProperty[activeTab]}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepagecatalog;