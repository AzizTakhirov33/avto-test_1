

//Array of Objects

const quiz = [
    
    {
        q: "1. Должностные лица, ответственные за эксплуатацию и техническое состояние транспортных средств обязаны:",
        img: "Question/1/1.jpg",
        answer: 0,
        options: [
            { text: "Выполнить все перечисленные действия.", img: "" },
            { text: "Не выпускать на линию транспортные средства, техническое состояние и оборудование которых не отвечают требованиям Правил.", img: "" },
            { text: "Не выпускать на линию технические средства, не зарегистрированные в установленном порядке.", img: "" },
            { text: "Не допускать к управлению транспортными средствами лиц, не прошедших в установленный срок медицинского освидетельствования.", img: "" }
        ]
    },
    {
        q: "2. О чем предупреждают знак и табличка под ним?",
        img: "Question/2/2.jpg",
        answer: 1,
        options: [
            { text: "Съезд на обочину опасен в связи с проведением на ней ремонтных работ.", img: "" },
            { text: "Стоянка на обочине запрещена в связи с ремонтными работами на дороге.", img: "" },
            { text: "Остановка на обочине запрещена в связи с работами.", img: "" }
        ]
    },
    {
        q: "3. Прерывистая линия, у которой длина штрихов в три раза превышает промежутки между ними, обозначает:",
        img: "Question/3/3.jpg",
        answer: 1,
        options: [
            { text: "Границы между полосой разгона или торможения и основной полосой проезжей части.", img: "" },
            { text: "Приближение к сплошной линии разметки, которая разделяет транспортные потоки противоположных или попутных направлений.", img: "" },
            { text: "Края проезжей части на автомагистралях.", img: "" }
        ]
    },
    {
        q: "4. Что обязан сделать водитель, приближаясь к трамваю попутного направления, остановившемуся на остановке посередине дороги?",
        img: "Question/4/4.jpg",
        answer: 2,
        options: [
            { text: "Остановиться, затем продолжить движение после того, когда трамвай начнет движение.", img: "" },
            { text: "Проехать трамвайную остановку с особой осторожностью.", img: "" },
            { text: "Уступить дорогу пешеходам, идущим к стоящему на остановке посередине дороги трамваю попутного направления или от него.", img: "" },
            { text: "Остановиться, затем продолжить движение после закрытия дверей.", img: "" }
        ]
    },
    {
        q: "5. Водитель какого транспортного средства имеет преимущество в движении?",
        img: "Question/5/5.jpg",
        answer: 1,
        options: [
            { text: "Водитель автомобиля.", img: "" },
            { text: "Водитель трамвая.", img: "" }
        ]
    },
    {
        q: "6. Как должен поступить водитель транспортного средства, если включился разрешающий сигнал светофора, а на проезжей части в направлении движения находятся пешеходы, не успевшие перейти дорогу?",
        img: "Question/6/6.jpg",
        answer: 2,
        options: [
            { text: "Снизить скорость, подать звуковой сигнал и проехать пешеходный переход на минимальной скорости.", img: "" },
            { text: "Подать звуковой сигнал и проехать пешеходный переход, не снижая скорости.", img: "" },
            { text: "Дать возможность пешеходам закончить переход проезжей части данного направления.", img: "" },
            { text: "Проехать пешеходный переход, соблюдая меры предосторожности.", img: "" }
        ]
    },
    {
        q: "7. По какой полосе разрешается движение грузовых автомобилей с разрешенной максимальной массой более 3,5 т в населенных пунктах?",
        img: "Question/7/7.jpg",
        answer: 1,
        options: [
            { text: "По любой полосе, при интенсивном движении на других полосах.", img: "" },
            { text: "По любой полосе, однако, если для движения безрельсовых транспортных средств в одном направлении имеются три полосы и более, то на крайнюю левую полосу разрешается выезжать только для поворота налево, разворота и остановки на дорогах с односторонним движением.", img: "" },
            { text: "По возможности ближе к правому краю проезжей части.", img: "" }
        ]
    },
    {
        q: "8. Кто из водителей нарушает требования Правил, если все транспортные средства движутся со скоростью 80 км/ч?",
        img: "Question/8/8.jpg",
        answer: 1,
        options: [
            { text: "Водитель мотоцикла.", img: "" },
            { text: "Никто не нарушает.", img: "" },
            { text: "Все водители.", img: "" },
            { text: "Водители мотоцикла и легкового автомобиля.", img: "" },
            { text: "Водители мотоцикла и грузового автомобиля.", img: "" }
        ]
    },
    {
        q: "9. Что называется тормозным путем?",
        img: "Question/9/9.jpg",
        answer: 1,
        options: [
            { text: "Расстояние, пройденное автомобилем с момента нажатия на педаль тормоза до полной остановки.", img: "" },
            { text: "Расстояние, пройденное автомобилем с момента обнаружения водителем опасности до полной остановки.", img: "" }
        ]
    },
    {
        q: "10. При какой максимальной габаритной высоте транспортного средства с грузом или без груза допускается движение без разрешения ГСБДД?",
        img: "Question/10/10.jpg",
        answer: 4,
        options: [
            { text: "3,8 м.", img: "" },
            { text: "2,5 м.", img: "" },
            { text: "4,5 м.", img: "" },
            { text: "5,0 м.", img: "" },
            { text: "4,0 м.", img: "" }
        ]
    }    
];